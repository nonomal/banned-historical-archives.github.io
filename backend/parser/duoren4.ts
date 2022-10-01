import {join} from 'path';
import {existsSync, writeFileSync, readFileSync} from 'fs';
import ocr from '../ocr';
import {
  ContentPart,
  ContentPartRaw,
  ContentType,
  Date,
  OCRResult,
  ParserOption,
  ParserResult,
  Pivot,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '王洪文、张春桥在军委办公会议听取三总部汇报批林批孔运动情况时的插话（摘录）';
  const parts: ContentPart[] =[{
    text: title,
    type: ContentType.title,
  }];
  const res: ParserResult[] = [
    {
      title,
      parts: [
        ...parts,
        ...`
当总参仲华同志汇报时，
张春桥同志（下称张）：汇报不要照本子念。抓点，要首长自己抓。五十七张大字报，三万多分之五十七。主席讲批孔不是从七三年五月开始，以前不说，八届十二中全会即讲了。

当才千同志讲到阎仲川、温玉成问题未搞清时，
张：你们很多问题都没有搞清。说不深不透，一点具体的不讲，张挺的问题我今天才听到。

当别的领导同志批评总参领导太软弱时，
张：你们的大事，光我知道的没有哪一件有结果的。如总参作战部有人跑到山东，跟袁升平一起骂浩亮，报告我逐段批，你们写了几页顶了回来，我不想管。艾玲的丈夫在你们二部，未解决嘛！上海给你们提供材料，你们一点不提供。知道的人不多，为什么不发动群众揭呢？
王洪文（下称王）：她是有言论有行动。邱、李、叶在那里指挥干的。
张：你们就说没事，到你们那里就说没事。
王：应该充分发动群众揭。
张：张挺翻案也未解决，不是下面的，你们几个怎么样？
王：总参领导右，右得很。群众批评你们从“九·一三”以后一直被动，有道理。许多问题有题目，无下落。如温玉成、黄永胜，他们经营那么多年，不搞几个人依靠谁呀？

当别的领导同志问雷英夫怎样时，
王、张：关起来是一回事，要查清，不然关两年又放出来了。
王：总参领导对批林整风领导不得力，很不得力。
张：儿童团我还是第一次从贵部听到，我是反驳了的。五十年后主席、副主席都要从幼儿园找。你们这些问题未解决嘛！要研究、讨论、解决、落实。
王：批评是一回事，落实解决又是一回事。
张：不抓大事不能光要你们负责，军委有责任，有些事可以这样说。你们的精神状态还有些问题，让群众推着走。

当别的领导同志对总参运动作指示时，
张：要放手发动群众，不要怕，坏人利用要跳出来是好。要保证作战指挥。空军有些提法值得考虑。不算历史旧账，什么旧账？不要打横炮，遗留问题向上写小字报。总参情况你（指才千同志）是否有数？我看你也不一定比我知道的多。
        `
          .split('\n')
          .map((i) => ({
            text: i,
            type: /[:：]$/.test(i)
              ? ContentType.appellation
              : ContentType.paragraph,
          })),
      ],
      authors: ['王洪文', '张春桥'],
      dates: [
        {
          year: 1974,
          month: 2,
          day: 8,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: `
总参谋部政治部印
一九七七年一月
      `,
      page_start: 1,
      page_end: 3,
    }
  ];
  return res;
}
