/* =========================================================================
   作品集 v2 — 資料層
   -------------------------------------------------------------------------
   所有文案與數據集中於此。新增／修改案例只需編輯此檔案，無需更動版型。
   資料來源：凱夢月廣告成效簡報、MUMM 月報、HELLOCIK monthly_summary.csv
   ========================================================================= */

const PROFILE = {
  name: '溫浩東',
  title: '廣告代操・廣告策略規劃・行銷顧問',
  years: '8年以上',
  tagline: '把廣告預算變成可預期的營收，而不是單純的成本。',
  // 每個元素為獨立一行；桌機各自不斷行，手機寬度不足時才自動換行
  introLines: [
    '8 年以上電商廣告實戰，操盤月預算從萬元提高至百萬量級，月廣告收益達百萬至千萬以上，累積收益破億元。',
    '擅長多平台整合操盤、廣告策略規劃、受眾漏斗設計、數據分析建構，讓每一筆預算都能被追蹤、被檢驗、被優化。'
  ],
  email: 'wndong11@gmail.com',
  // TODO: 替換為實際 LINE 連結或 ID
  lineUrl: 'https://line.me/ti/p/YOUR_LINE_ID',
  lineLabel: 'LINE 諮詢',
  roleTags: ['廣告代操', '廣告策略規劃', '行銷顧問']
};

/* Hero 首屏衝擊數字 —— 陌生開發前 5 秒的攔截點 */
const HERO_STATS = [
  {
    value: 12.07,
    suffix: 'x',
    decimals: 2,
    label: '最高單月 ROAS',
    note: '美妝服飾電商・2026-02'
  },
  {
    value: 1200,
    suffix: '多萬',
    decimals: 0,
    label: '單月廣告收益峰值',
    note: '美髮保養電商・2026 上半年'
  },
  {
    value: 15,
    suffix: '倍',
    decimals: 0,
    label: '月預算擴張倍數',
    note: '數十萬 → 逾百萬，ROAS 未失控'
  },
  {
    value: 8,
    suffix: '年+',
    decimals: 0,
    label: '電商廣告實戰年資',
    note: 'Meta / Google / TikTok / LINE / Yahoo'
  }
];

/* 案例資料
   accent：卡片主色（對應行業標籤色）
   metrics：4 張指標卡（2×2），highlight: true 顯示金框強調
   table：補充數據表（可選，null 表示不顯示）
*/
const CASES = [
  {
    id: 'case-haircare',
    industry: '美髮保養電商',
    accent: '#C9A84C',
    title: '全平台操盤：預算放大 15 倍，ROAS 不縮水',
    oneLiner: '累積廣告收益破億',
    period: '2021/12 – 2026/06（4.5 年・正職操盤）',
    tags: ['廣告代操', 'KOL 策略', '多平台整合'],
    platforms: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LINE LAP', 'Yahoo 廣告'],
    did: [
      '5 大平台全責操盤，跨平台預算分配與策略統籌',
      'Meta 越南市場廣告操作，跨境投放與在地受眾測試',
      '整合明星藝人 KOL／KOC 廣告策略，素材投放持續優化',
      '月廣告預算自數十萬擴張至逾百萬，同步維持 ROAS 穩定',
      '2026 年策略調整：花費減少約 30%，廣告收益仍創歷史新高'
    ],
    metrics: [
      { value: '1,200多萬', label: '月廣告收益峰值', note: '2026 上半年', highlight: true },
      { value: '5x 以上', label: '同月 ROAS', note: '歷史最高月份', highlight: true },
      { value: '約 4x – 5x', label: '近期 ROAS 穩定區間', note: '2026 年各月' },
      { value: '花費約 -30%', label: '效率改善', note: '同期收益約 +25%' }
    ],
    table: {
      caption: '單月平台實績拆解（2026 上半年・數值均為概數）',
      head: ['平台', '廣告收益', '廣告花費', 'ROAS'],
      rows: [
        ['Meta 藝人', '800 萬', '160 萬', '4.9x'],
        ['Meta 品牌', '200 萬', '45 萬', '4.7x'],
        ['Google', '270 萬', '35 萬', '7.7x']
      ]
    },
    help: [
      {
        title: '多平台整合操盤',
        desc: '跨平台預算分配與策略統籌，不讓各平台各自為政、互相搶量。'
      },
      {
        title: 'KOL 廣告素材優化',
        desc: '將 KOL 合作轉化為可衡量的廣告 ROAS，不只是換一次品牌曝光。'
      },
      {
        title: '規模擴張不失效率',
        desc: '預算放大時維持 ROAS，避免因擴量導致獲客成本失控。'
      }
    ]
  },

  {
    id: 'case-beauty',
    industry: '美妝服飾電商',
    accent: '#60c8d8',
    title: '顧問 × 操作 × 數據體系：從零建立決策系統',
    oneLiner: '半年廣告收益超過去年整年營收',
    period: '2025 下半年起・持續進行中',
    tags: ['廣告顧問', '廣告代操', '數據系統建構'],
    platforms: ['Meta Ads', 'Google Ads', 'Looker Studio'],
    did: [
      '廣告策略顧問：整合官網 + 團購雙渠道的廣告決策',
      '從零建立 RFM 會員模型，精準識別高價值客群',
      '建構 KOL 評分系統，讓每次合作成效可量化比較',
      'Looker Studio 自動化報表 + 素材決策系統 + 用戶行為儀表板'
    ],
    metrics: [
      { value: '12.07x', label: '最高單月 ROAS', note: '2026-02 實績', highlight: true },
      { value: '70.98%', label: '會員消費轉換率', note: '55,263 / 77,854', highlight: true },
      { value: '6.9x – 12.07x', label: 'ROAS 穩定區間', note: '2025/11 – 2026/05' },
      { value: '879萬', label: '月整體收益高峰', note: '2026-05' }
    ],
    table: {
      caption: '月度 ROAS 走勢（2025/11 – 2026/05）',
      head: ['月份', 'ROAS'],
      rows: [
        ['2025-11', '6.9x'],
        ['2025-12', '7.x'],
        ['2026-01', '8.x'],
        ['2026-02', '12.07x（最高）'],
        ['2026-03', '9.x'],
        ['2026-04', '10.x']
      ]
    },
    help: [
      {
        title: '廣告顧問服務',
        desc: '不只執行，協助品牌建立廣告決策框架與長期策略方向。'
      },
      {
        title: '數據體系從零建構',
        desc: 'RFM／KOL 評分／自動化報表，讓數據真正被拿來做決策而非存檔。'
      },
      {
        title: '會員資料活化',
        desc: '用廣告喚醒沉睡會員，把既有名單轉換為可重複變現的回購客。'
      }
    ]
  },

  {
    id: 'case-lingerie',
    industry: '女性內著電商',
    accent: '#d87ec0',
    title: '雙平台聚焦代操：整體 ROAS 10.71x',
    oneLiner: '大幅提升廣告收益，讓營收有 90% 來自廣告',
    period: '接案代操（多年合作）',
    tags: ['廣告代操', '受眾策略', '再行銷漏斗'],
    platforms: ['Meta Ads', 'Google Ads'],
    did: [
      '僅操作 Meta + Google 雙平台，不以多平台分散預算換取表面覆蓋',
      '精準受眾分層建立，冷受眾 → 再行銷完整漏斗設計',
      'Google 搜尋 + 購物廣告策略，捕捉高意圖購買流量',
      '雙平台協同：聚焦資源做到單位收益最大化'
    ],
    metrics: [
      { value: '10.71x', label: '整體廣告 ROAS', note: '2024-09 月實績', highlight: true },
      { value: '逾 90%', label: '廣告收益佔比', note: '廣告為主要收益驅動', highlight: true },
      { value: '14.41x', label: 'Google 廣告 ROAS', note: '2024-09' },
      { value: '771萬', label: '官網月收益高峰', note: '2024-07' }
    ],
    table: {
      caption: '2024-09 實績拆解',
      head: ['項目', '數值'],
      rows: [
        ['廣告收益', '635 萬（NT$6,351,911）'],
        ['廣告花費', '57.5 萬（NT$575,091）'],
        ['Meta 廣告 ROAS', '10.37x']
      ]
    },
    help: [
      {
        title: '受眾漏斗架構優化',
        desc: '從開發到回購，每個階段配對正確的受眾與素材，不重複燒同一批人。'
      },
      {
        title: '雙平台協同策略',
        desc: 'Google 抓購買意圖、Meta 做品牌滲透，互補而不重疊競價。'
      },
      {
        title: '廣告收益佔比提升',
        desc: '讓廣告成為品牌營收的核心引擎，而非可有可無的輔助工具。'
      }
    ]
  }
];

/* 服務項目（三角色定位） */
const SERVICES = [
  {
    role: '廣告代操',
    desc: 'Meta／Google／TikTok／LINE／Yahoo 全平台，從帳戶架構、素材測試到日常優化全責負責。',
    points: ['帳戶健檢與重建', '素材測試框架', '日常投放與擴量']
  },
  {
    role: '廣告策略規劃',
    desc: '受眾分層 × 漏斗設計 × KOL 整合，讓每一筆預算都有明確的任務與衡量標準。',
    points: ['受眾分層設計', '再行銷漏斗建構', 'KOL 投放策略']
  },
  {
    role: '行銷顧問',
    desc: '數據體系建構 × 廣告健診，協助品牌把「會下廣告」升級為「有廣告決策能力」。',
    points: ['廣告帳戶健診', 'RFM／報表體系建置', '內部團隊能力培訓']
  }
];

/* =========================================================================
   早期操作實績（2019 – 2024）
   -------------------------------------------------------------------------
   資料與截圖來源：舊作品集 PDF（過往操作成效.pdf、廣告操作作品集(舊).pdf）
   evidence：可點擊展開的原始後台截圖，路徑相對於 index.html
   ========================================================================= */

const EARLY_INTRO =
  '以下為 2019 – 2024 年的操作實績。相較於近年的百萬級預算案例，這段期間多為中小預算操作，' +
  '更能反映在有限預算下把單位效率做到極致的能力。所有數字皆附原始後台截圖，可點擊查看。';

const EARLY_CASES = [
  {
    industry: '直播服飾',
    period: '2020/08 – 2020/10（三個月）',
    platforms: ['Facebook', 'Instagram', '直播'],
    summary:
      '新品上市操盤，同時提供行銷規劃建議、視覺設計建議與數據分析，讓單一系列產品在短時間創造高收益。',
    metrics: [
      { value: '18.57x', label: '整體廣告 ROAS', highlight: true },
      { value: '276萬', label: '廣告收益' },
      { value: '14.9萬', label: '廣告花費' },
      { value: '94元', label: '每筆交易成本' }
    ],
    extra: '單一系列產品另創 ROAS 10.13x：收益 99.3 萬 ／ 花費 9.8 萬 ／ 528 筆訂單。',
    evidence: [
      {
        src: 'assets/img/evidence/ev-apparel-total-roas1857.jpg',
        caption: 'Meta 廣告管理員：總業績 1,577 筆訂單、花費 NT$148,744、ROAS 18.57'
      },
      {
        src: 'assets/img/evidence/ev-apparel-single-roas1013.jpg',
        caption: 'Meta 廣告管理員：單一系列產品 528 筆、花費 NT$97,953、ROAS 10.13'
      }
    ]
  },

  {
    industry: '傳產 OEM 轉型品牌',
    period: '2021/04 – 2021/06（三個月）',
    platforms: ['Facebook', 'Instagram', 'LINE 私域', '團購'],
    summary:
      'OEM 代工廠轉型自有品牌。測試多類型潛在受眾協助定位主要消費族群，並依產品特性拓展團購與私域社團等銷售管道。',
    metrics: [
      { value: '+1,373%', label: '網站使用者成長', highlight: true },
      { value: '+1,421%', label: '新使用者成長', highlight: true },
      { value: '6,062', label: '廣告帶入使用者', note: '佔總流量 88.08%' },
      { value: '+1,191%', label: '工作階段成長' }
    ],
    extra: '從幾乎零流量的新品牌官網，用廣告在三個月內建立起穩定的流量基礎。',
    evidence: [
      {
        src: 'assets/img/evidence/ev-oem-traffic-growth.jpg',
        caption: 'Google Analytics：投放前後流量對比，FB 轉介流量帶來 6,062 位使用者（+1,373.39%）'
      }
    ]
  },

  {
    industry: '品牌服飾',
    period: '2020/12 – 2021/02（三個月）',
    platforms: ['Facebook', 'Instagram'],
    summary:
      '運用網站既有流量數據建立相似受眾，接觸更多潛在消費者並提升轉換收益；並提供數據分析將數據可視化的服務。',
    metrics: [
      { value: '6.38x', label: '廣告 ROAS', highlight: true },
      { value: '28.7萬', label: '廣告收益' },
      { value: '4.5萬', label: '廣告花費' },
      { value: '98筆', label: '成交筆數' }
    ],
    extra: null,
    evidence: [
      {
        src: 'assets/img/evidence/ev-apparel-c-roas638.jpg',
        caption: 'Meta 廣告管理員：98 筆訂單、花費 NT$45,000、平均 ROAS 6.38'
      }
    ]
  },

  {
    industry: '直播娛樂產業',
    period: '2021/09 – 2021/10',
    platforms: ['Google Ads', 'YouTube', 'Facebook', 'Instagram'],
    summary:
      '接手業主自行操作的帳戶。以關鍵字廣告攔截有需求的用戶，搭配 YouTube 與聯播網放大曝光，並規劃視覺素材與再行銷廣告。',
    metrics: [
      { value: '+23.6%', label: '總體收益成長', note: '對比業主自操月份', highlight: true },
      { value: '+70.5%', label: '新使用者成長', highlight: true },
      { value: '107萬', label: '當月總收益' },
      { value: '逾半', label: '新使用者來自廣告轉介' }
    ],
    extra: '證明同一個帳戶換人操作，光是策略與素材調整就能拉出兩位數的收益差距。',
    evidence: [
      {
        src: 'assets/img/evidence/ev-live-revenue-growth.jpg',
        caption: 'Google Analytics：當月總收益 107 萬，較前月成長 23.6%'
      },
      {
        src: 'assets/img/evidence/ev-live-newuser-growth.jpg',
        caption: 'Google Analytics：新使用者人數較前月成長 70.5%'
      }
    ]
  }
];

/* 合作流程 —— 降低陌生開發的決策門檻 */
const PROCESS = [
  { step: '01', title: '免費廣告健診', desc: '看帳戶現況與數據結構，指出目前最大的三個漏洞。' },
  { step: '02', title: '策略提案', desc: '針對品類與現有數據，提出可執行的預算配置與漏斗規劃。' },
  { step: '03', title: '執行與優化', desc: '實際操盤，週期性檢視數據並調整策略。' },
  { step: '04', title: '成效回報', desc: '固定報表與檢討會議，每個決策都可回溯到數據。' }
];
