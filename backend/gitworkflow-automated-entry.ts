import { join, basename, dirname, extname } from 'node:path/posix';
import fs from 'node:fs';
import fsextra from 'fs-extra';
import { ParserOptionV2 } from '../types';
import JSON5 from 'json5';
import axios from 'axios';
import { uuid } from '../utils';
import { tmpdir } from 'node:os';
import { parse } from 'node:path';
const { fromBuffer } = require('file-type-cjs');

const body = ((process.env as any).BODY || '').trim();

async function download(url: string, filePath: string) {
  const writer = fs.createWriteStream(filePath);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

export async function start() {
  try {
    const body1: string = body.substring(0, body.lastIndexOf('```'));
    const body2: string = body1.substring(body1.lastIndexOf('```') + 3);
    const config = JSON5.parse(body2) as ParserOptionV2 & {
      id?: string;
      source_name: string;
    };
    const id = uuid();
    config.id = id;
    config.archive_id = config.archive_id == undefined ? 1 : config.archive_id;
    const links = Array.from(body.matchAll(/\[.*?\]\(http.*?\)/g)).map((i) =>
      (i as any)[0].replace(/^.*\(/, '').replace(/\)/, ''),
    );

    const files: string[] = [];
    for (const link of links) {
      const p = join(tmpdir(), basename(link));
      await download(link, p);

      const real_ext = (await fromBuffer(fs.readFileSync(p)))?.ext;
      if (!real_ext) process.exit(3);
      const new_path = join(
        tmpdir(),
        (files.length + 1) + '.' + real_ext,
      );
      fs.renameSync(p, new_path);
      files.push(new_path);
    }

    const is_pdf = files.length == 1 && files[0].endsWith('.pdf');
    const is_img_set =
      files.length > 0 &&
      files.reduce(
        (a, b) =>
          a &&
          (b.endsWith('.png') || b.endsWith('.jpg') || b.endsWith('.jpeg')),
        true,
      );

    if (!is_pdf && !is_img_set) {
      process.exit(4);
    }

    /**
     * 1. 新增 config/archives[n]/[id].ts
     * 2. 如果是图片集，下载图片到 raw/archives${n}/${id}/${img}
          如果是pdf 下载到 raw/archives${n}/${id}
     * 3. 在 archives${n} main 分支创建 pr
     * 4. 在 archives${n} config 分支创建 pr
     * config分支的合并会自动运行ocr生成ocr_cache->parsed->page build
     */

    config.articles!.forEach((i) => {
      i.page_start = i.page_start || 1;
      i.page_end = i.page_end || links.length;
    });

    const file_content = `export default {
  resource_type: '${config.resource_type}',
  entity: {
    id: '${id}',
    name: '${config.source_name!}',
    internal: ${!!config.internal},
    official: ${!!config.official},
    type: '${is_pdf ? 'pdf' : is_img_set ? 'img' : ''}',
    author: '${config.author || ''}',
    files: ${JSON.stringify(
      files.map(
        (i) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${
            config.archive_id
          }/main/${basename(i)}`,
      ),
    )}
  },
  parser_option: ${
    JSON.stringify(
      
    config.resource_type === 'book' ?
      {
        articles: config.articles,
        ocr: config.ocr || {},
        ocr_exceptions: config.ocr_exceptions || {},
      } : {}
    , null, 2)

  },
  parser_id: 'automation',
  path: '${is_img_set ? id : is_pdf ? id + '.pdf' : ''}'
};`;
    fs.writeFileSync(
      join(__dirname, `../config/archives${config.archive_id}/${id}.ts`),
      file_content,
    );

    for (const i of files) {
      if (is_img_set) {
        fsextra.ensureDirSync(
          join(
            __dirname,
            `../raw/archives${config.archive_id}/${id}`,
          )
        );
        fs.renameSync(
          i,
          join(
            __dirname,
            `../raw/archives${config.archive_id}/${id}/${basename(i)}`,
          ),
        );
      } else {
        fs.renameSync(
          i,
          join(__dirname, `../raw/archives${config.archive_id}/${id}.pdf`),
        );
      }
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

if (!(process.env as any).TEST) {
  start();
}
