# 溫浩東｜廣告作品集 v2（陌生開發版）

單頁靜態網站，用於對外陌生開發新客戶。定位為廣告代操、廣告策略規劃、行銷顧問三角色。

**核心設計邏輯**：Hero 用數字攔截注意力 → 三欄式案例卡負責說服（做了什麼｜帶來的成效｜能幫你做什麼）→ CTA 降低決策門檻（免費廣告健診）。

---

## 目錄結構

```
.
├── index.html              # 版型骨架
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css       # 深色金色調樣式系統 + RWD
    ├── img/
    │   └── evidence/       # 早期案例的廣告後台原始截圖（6 張）
    └── js/
        ├── data.js         # ★ 所有文案與數據集中於此
        └── main.js         # 渲染邏輯、count-up 動畫、lightbox、表單處理
```

**維護原則**：新增或修改案例只需編輯 `assets/js/data.js`，不需動 HTML 或 CSS。

### 頁面區塊

| 區塊 | 資料變數 | 說明 |
|------|---------|------|
| Hero | `PROFILE` / `HERO_STATS` | 首屏數字衝擊，含 count-up 動畫 |
| 案例實績 | `CASES` | 3 個近年主力案例，三欄式卡片 |
| 早期實績 | `EARLY_CASES` | 4 個 2019–2024 案例，附可點擊放大的後台截圖 |
| 服務項目 | `SERVICES` | 三角色定位 |
| 合作流程 | `PROCESS` | 四步驟，降低決策門檻 |
| 聯絡 | `PROFILE` | Email + LINE + 表單 |

---

## 本機預覽

因為使用 `<script src>` 載入，直接雙擊 `index.html` 在部分瀏覽器可正常運作，但建議起本機伺服器：

```bash
# Python 3
python -m http.server 8000

# 或 Node
npx serve .
```

開啟 http://localhost:8000

---

## 部署到 GitHub Pages

```bash
git init
git add .
git commit -m "feat: 作品集 v2 陌生開發版"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

推上去後：Repo → **Settings** → **Pages** → Source 選 `main` branch、資料夾選 `/ (root)` → Save。
約 1 分鐘後網址為 `https://YOUR_USERNAME.github.io/REPO_NAME/`。

---

## ⚠️ 上線前必須替換的佔位符

| 檔案 | 位置 | 佔位符 | 要換成什麼 |
|------|------|--------|-----------|
| `assets/js/data.js` | `PROFILE.lineUrl` | `https://line.me/ti/p/YOUR_LINE_ID` | 你的 LINE 官方帳號或個人加好友連結 |
| `index.html` | `<form action>` | `https://formspree.io/f/YOUR_FORM_ID` | Formspree 表單 ID（見下方） |
| `index.html` | og meta 標籤 | `YOUR_USERNAME` / `REPO_NAME` | 部署後的實際網址與預覽圖 |

### 關於聯絡表單

表單目前有 **fallback 機制**：若 `YOUR_FORM_ID` 未替換，送出時會自動改為開啟使用者的郵件軟體、把填寫內容帶入信件內容，寄到 `wndong11@gmail.com`。所以**即使不設定 Formspree 也不會漏單**，只是體驗較差。

要啟用正式表單：

1. 到 [formspree.io](https://formspree.io) 註冊（免費方案每月 50 封）
2. 建立新表單，收件信箱填 `wndong11@gmail.com`
3. 複製表單 ID，替換 `index.html` 裡的 `YOUR_FORM_ID`

表單已內建蜜罐欄位（`_gotcha`）擋機器人。

---

## ❗ 需要溫浩東本人確認的事項

### 早期截圖的授權確認

`assets/img/evidence/` 內 6 張截圖來自舊作品集 PDF，為 Meta 廣告管理員與 Google Analytics 後台畫面。已檢查過**不含品牌名稱、帳戶名稱或任何可識別資訊**，僅有數字欄位；其中 3 張服飾廣告成效截圖已取得相關客戶同意，可公開使用。

### 已移除的案例

舊作品集中的「台灣零售電商品牌（2022/01–2024/03，2023/09 起任代理主管）」依指示未納入本站，其三張趨勢圖也一併移除。若日後要加回，資料仍保留在舊作品集 PDF（`舊作品集/過往操作成效.pdf` 第 7–9 頁）。

---

## 資料維護指南

### 新增一個案例

在 `assets/js/data.js` 的 `CASES` 陣列加入物件：

```js
{
  id: 'case-xxx',                 // 唯一 ID，可作為錨點連結
  industry: '產業類別',            // 去識別化，只留行業
  accent: '#C9A84C',              // 卡片主色
  title: '一句話講清楚成果',
  period: '2024/01 – 迄今',
  tags: ['廣告代操', '策略規劃'],
  platforms: ['Meta Ads', 'Google Ads'],
  did: ['做了什麼 1', '做了什麼 2'],
  metrics: [                      // 建議 4 個，2 個標 highlight
    { value: '10.5x', label: '整體 ROAS', note: '2024-09', highlight: true },
    // ...
  ],
  table: null,                    // 不需要補充表格就填 null
  help: [
    { title: '能幫你做的事', desc: '具體說明' }
  ]
}
```

### 新增早期案例（含截圖）

在 `EARLY_CASES` 加入物件，截圖放進 `assets/img/evidence/`：

```js
{
  industry: '產業類別',
  period: '2021/04 – 2021/06（三個月）',
  platforms: ['Facebook', 'Instagram'],
  summary: '一段話說明操作內容',
  metrics: [ /* 建議 4 個，2 個標 highlight */ ],
  extra: '補充說明，不需要就填 null',
  evidence: [
    { src: 'assets/img/evidence/檔名.jpg', caption: '截圖說明文字' }
  ]
}
```

`evidence` 會自動產生「查看原始截圖」按鈕，全站截圖串成一個 lightbox 序列，支援左右鍵切換與 ESC 關閉。

### 更新 Hero 數字

編輯 `HERO_STATS`。`value` 必須是數字（count-up 動畫需要），單位放 `suffix`：

```js
{ value: 12.07, suffix: 'x', decimals: 2, label: '最高單月 ROAS', note: '說明' }
```

---

## 內容原則

- **數字精準不模糊**：所有 ROAS、收益數字皆為實際操盤結果
- **品牌完全去識別化**：僅保留產業類別，不出現品牌名稱
- **每個案例回答三個問題**：做了什麼 → 成效如何 → 能幫對方什麼

- **有截圖佐證**：早期案例附廣告後台原始畫面，陌生開發時可直接反駁「數字是不是編的」

資料來源：已去識別化的月度廣告成效簡報、彙整報表與舊作品集 PDF（過往操作成效.pdf、廣告操作作品集(舊).pdf）

---

## 技術說明

- 零框架、零建置流程，純 HTML / CSS / JS
- 外部依賴僅 Google Fonts（Noto Sans TC）
- 支援 `prefers-reduced-motion`，動畫可被系統設定關閉
- 所有動態內容經 HTML escape 處理
- RWD 斷點：1040px（三欄轉兩欄）、880px、720px（單欄）、400px

---

*最後更新：2026-07-18*
