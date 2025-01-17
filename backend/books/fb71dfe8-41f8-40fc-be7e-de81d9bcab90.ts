export default {
  entity: {
    id: 'fb71dfe8-41f8-40fc-be7e-de81d9bcab90',
    name: '红旗一九六六年第二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/fb71dfe8-41f8-40fc-be7e-de81d9bcab90.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '苏共新领导奉行苏美合作路线的供状',
        authors: ['红旗杂志评论员'],
        page_start: 3,
        page_end: 11,
        dates: [{ year: 1966 }],
      },
      {
        title: '苏共新领导鼓吹苏美合作的两本书',
        authors: [],
        page_start: 12,
        page_end: 17,
        dates: [{ year: 1966 }],
      },
      {
        title: '工农兵群众掌握理论的时代开始了',
        authors: ['红旗杂志评论员'],
        page_start: 18,
        page_end: 21,
        dates: [{ year: 1966 }],
      },
      {
        title: '运用《实践论》总结民间测天经验',
        authors: ['段春作'],
        page_start: 22,
        page_end: 29,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
      {
        title: '《矛盾论》的思想进了水泥窖',
        authors: ['刘培顺'],
        page_start: 30,
        page_end: 34,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
      {
        title: '一万公里和一公里',
        authors: ['赵维会'],
        page_start: 35,
        page_end: 36,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1965, month: 7, day: 22 }],
      },
      {
        title: '老规矩是怎样一破再破的——解放军某炊事班磨豆腐的故事',
        authors: ['魏勤生'],
        page_start: 36,
        page_end: 37,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
      {
        title: '为人民站柜台，从实践中学本领',
        authors: ['杨瑾瑜'],
        page_start: 38,
        page_end: 43,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
      {
        title: '评吴晗同志的资产阶级历史观',
        authors: ['马岩'],
        page_start: 44,
        page_end: 53,
        dates: [{ year: 1966 }],
      },
      {
        title: '一家贫农——访问越南通讯：《人民战争花最红》之二',
        authors: ['魏巍'],
        page_start: 54,
        page_end: 59,
        dates: [{ year: 1966 }],
      },
    ],
    ocr: {
      auto_vsplit: false,
      vsplit: 0,
      content_thresholds: [0, 0.1, 0, 0.1],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/fb71dfe8-41f8-40fc-be7e-de81d9bcab90.pdf',
};
