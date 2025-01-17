export default {
  entity: {
    id: '767107c4-8c71-48ff-9478-c8e0001f4eb4',
    name: '红旗一九五八年第十四期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/767107c4-8c71-48ff-9478-c8e0001f4eb4.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '苏联建设共产主义的伟大计划',
        authors: ['于兆力'],
        page_start: 3,
        page_end: 6,
        dates: [{ year: 1958 }],
      },
      {
        title: '关于我国现在的商品生产',
        authors: ['胡绳'],
        page_start: 7,
        page_end: 12,
        dates: [{ year: 1958 }],
      },
      {
        title: '如何解决电力紧张的问题',
        authors: ['刘澜波'],
        page_start: 14,
        page_end: 17,
        ocr: { vsplit: 0.35 },
        ocr_exceptions: {
          '13': { content_thresholds: [0.1, 0.18, 0.18, 0.1] },
        },
        dates: [{ year: 1958 }],
      },
      {
        title: '机床革命的开端',
        authors: ['刘甘玉'],
        page_start: 17,
        ocr: { vsplit: 0.35 },
        page_end: 21,
        dates: [{ year: 1958 }],
      },
      {
        title: '一个使用“活动机床”制造大型设备的机械厂',
        authors: ['刘仲甫'],
        page_start: 21,
        page_end: 24,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1958 }],
      },
      {
        title: '森林工业要过“三关”',
        authors: ['罗玉川'],
        page_start: 25,
        page_end: 27,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1958 }],
      },
      {
        title: '从“欧洲自由贸易区”谈判的破裂说起',
        authors: ['王书人'],
        page_start: 28,
        page_end: 30,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1958 }],
      },
      {
        title: '戴高乐政变',
        authors: ['徐达深'],
        page_start: 30,
        ocr: { vsplit: 0.35 },
        page_end: 33,
        dates: [{ year: 1958 }],
      },
      {
        title: '“白旗”的帽子不可乱戴',
        authors: ['周全'],
        page_start: 34,
        ocr: { vsplit: 0.35 },
        page_end: 34,
        dates: [{ year: 1958 }],
      },
      {
        title: '美丽的围头',
        authors: ['刘白羽'],
        page_start: 35,
        ocr: { vsplit: 0.35 },
        page_end: 39,
        dates: [{ year: 1958 }],
      },
      {
        title: '前线的一个人民公社',
        authors: ['姚远方'],
        page_start: 40,
        ocr: { vsplit: 0.35 },
        page_end: 42,
        dates: [{ year: 1958 }],
      },
    ],
    ocr: {
      auto_vsplit: false,
      vsplit: 0,
      content_thresholds: [0, 0.185, 0, 0.1],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/767107c4-8c71-48ff-9478-c8e0001f4eb4.pdf',
};
