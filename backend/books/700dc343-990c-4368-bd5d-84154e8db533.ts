export default {
  entity: {
    id: '700dc343-990c-4368-bd5d-84154e8db533',
    name: '红旗一九六七年第十三期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/700dc343-990c-4368-bd5d-84154e8db533.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '炮打司令部——我的一张大字报',
        authors: ['毛泽东'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1966, month: 8, day: 5 }],
      },
      {
        title: '走社会主义道路，还是走资本主义道路',
        authors: ['红旗杂志编辑部', '人民日报编辑部'],
        page_start: 6,
        page_end: 15,
        dates: [{ year: 1967, month: 8, day: 14 }],
      },
      {
        title: '彻底摧毁资产阶级司令部——纪念党的八届十一中全会召开一周年',
        authors: [],
        page_start: 16,
        page_end: 19,
        dates: [{ year: 1967, month: 8, day: 6 }],
      },
      {
        title: '中国共产党八届八中全会关于以彭德怀为首的反党集团的决议',
        authors: [],
        page_start: 20,
        page_end: 22,
        dates: [{ year: 1967 }],
      },
      {
        title: '从彭德怀的失败到中国赫鲁晓夫的破产',
        authors: [],
        page_start: 23,
        page_end: 26,
        dates: [{ year: 1967 }],
      },
      {
        title: '策动叛党就是为了篡党',
        authors: [
          '《文汇报》编辑部',
          '《解放日报》编辑部',
          '《支部生活》编辑部',
        ],
        page_start: 27,
        page_end: 30,
        dates: [{ year: 1967, month: 8, day: 9 }],
      },
      {
        title: '中国“议会迷”的破产',
        authors: [
          '《文汇报》编辑部',
          '《解放日报》编辑部',
          '《支部生活》编辑部',
        ],
        page_start: 31,
        page_end: 34,
        dates: [{ year: 1967, month: 8, day: 10 }],
      },
      {
        title: '青海高原的凯歌',
        authors: ['《人民日报》编辑部'],
        page_start: 35,
        page_end: 36,
        dates: [{ year: 1967, month: 8, day: 13 }],
      },
      {
        title: '给毛主席的致敬电',
        authors: ['青海省革命委员会'],
        page_start: 37,
        page_end: 40,
        dates: [{ year: 1967, month: 8, day: 12 }],
      },
      {
        title:
          '决不允许把社会主义企业拉到资本主义邪路上去——上海市工人批评会纪要',
        authors: [],
        page_start: 41,
        page_end: 44,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title:
          '彻底批评复辟资本主义的“三自一包”——山东省即墨县兰村公社贫下中农和革命干部批判会纪要',
        authors: [],
        page_start: 45,
        page_end: 48,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title:
          '怒斥党内最大的走资本主义道路当权派的投降主义纲领——中国人民解放军三军驻京部队指战员批判会纪要',
        authors: [],
        page_start: 49,
        page_end: 52,
        dates: [{ year: 1967 }],
        ocr: { vsplit: 0.35 },
      },
      {
        title: '阿拉伯反侵略战争的教训',
        authors: ['周天赤'],
        page_start: 53,
        page_end: 59,
        dates: [{ year: 1967 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/700dc343-990c-4368-bd5d-84154e8db533.pdf',
};
