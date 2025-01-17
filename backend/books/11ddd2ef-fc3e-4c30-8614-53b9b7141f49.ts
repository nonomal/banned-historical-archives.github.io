export default {
  entity: {
    id: '11ddd2ef-fc3e-4c30-8614-53b9b7141f49',
    name: '红旗一九六一年第七期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/11ddd2ef-fc3e-4c30-8614-53b9b7141f49.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '加强国营农场的建设',
        authors: ['王震'],
        page_start: 3,
        page_end: 9,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4 }],
      },
      {
        title: '一个人民公社大办粮食的经验',
        authors: ['中央陇县委员会调查组'],
        page_start: 10,
        page_end: 13,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4 }],
      },
      {
        title: '整风推动了生产',
        authors: ['顾建鹏', '李兰桂'],
        page_start: 14,
        page_end: 17,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4 }],
      },
      {
        title: '心目中时时刻刻要有群众',
        authors: ['凌南标'],
        page_start: 18,
        page_end: 20,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4 }],
      },
      {
        title: '为农业服务是气象工作的首要任务',
        authors: ['饶兴'],
        page_start: 21,
        page_end: 25,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4 }],
      },
      {
        title: '笑里藏刀的“亲善”',
        authors: ['郭济洲'],
        page_start: 26,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4 }],
      },
      {
        title: '论形式逻辑的对象和作用',
        authors: ['王忍之'],
        page_start: 30,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 4 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/11ddd2ef-fc3e-4c30-8614-53b9b7141f49.pdf',
};
