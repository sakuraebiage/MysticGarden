const TAROT_CARDS = [
  ["愚者","新しい始まり","まだ見ぬ可能性に心を開いてみましょう。小さな一歩が、思いがけない景色につながるかもしれません。","完璧な準備を待たず、まずは好奇心を大切に。","✧"],
  ["魔術師","創造と行動","あなたの中にある力を形にするとき。持っている道具や経験を組み合わせれば、道は開けていきます。","考えていることを一つ、今日の行動に移してみて。","✦"],
  ["女教皇","直感と静けさ","答えを急がず、心の声に耳を傾けて。静かな時間の中に大切なヒントがありそうです。","情報を集めたら、少し距離を置いて考えてみましょう。","☾"],
  ["女帝","豊かさと慈しみ","身近な幸せや、人との温かなつながりに目を向けて。育ててきたものが少しずつ実を結びそうです。","自分にも周りにも、やさしい余白を作って。","❀"],
  ["皇帝","安定と責任","計画を立て、土台を整えるのに向いた日。落ち着いた判断が安心感につながります。","優先順位を決め、一つずつ進めましょう。","♜"],
  ["教皇","学びと導き","経験者の言葉や、昔から受け継がれてきた知恵が助けになりそうです。","信頼できる人に相談してみるのもおすすめ。","✥"],
  ["恋人","選択と調和","心が惹かれるものを見つめ直すタイミング。大切なのは、あなた自身が納得できる選択です。","周囲の期待だけで決めず、自分の気持ちも確かめて。","♡"],
  ["戦車","前進と意志","目標に向かうエネルギーが高まりそう。迷いがあっても、進む方向を定めることが大切です。","勢いと同じくらい、休むタイミングも意識して。","⚑"],
  ["力","優しさと忍耐","強さは、押し切ることだけではありません。穏やかに向き合う姿勢が状況を動かしそうです。","自分にも相手にも、少し寛大になってみて。","♧"],
  ["隠者","内省と探求","一人で考える時間が、心を整理する助けになります。答えは外よりも内側にあるのかもしれません。","静かな場所で、気持ちを書き出してみましょう。","灯"],
  ["運命の輪","転機と流れ","流れが変わるきっかけに気づける日。偶然の出会いや小さな変化を楽しんで。","チャンスと思ったことには、柔軟に反応して。","◎"],
  ["正義","公平と判断","事実を丁寧に見つめることで、納得できる判断に近づけそうです。","感情と事実を分けて整理してみましょう。","⚖"],
  ["吊るされた男","視点の転換","すぐに結果が出なくても、見方を変えることで新しい意味が見えてきます。","急がず、別の角度から眺めてみて。","◇"],
  ["死神","終わりと再生","何かを手放すことが、新しい始まりの余地を作ります。変化を恐れすぎなくて大丈夫。","一区切りつけたいことを一つ選んでみましょう。","☽"],
  ["節制","調和と調整","異なるものをうまく混ぜ合わせる日。無理のないペースを探すことが鍵です。","極端に走らず、ちょうどよいバランスを意識して。","⚗"],
  ["悪魔","誘惑と執着","惰性や思い込みに気づくチャンス。自分を縛っているものを見直してみましょう。","本当に必要か、一度立ち止まって考えて。","⛓"],
  ["塔","気づきと刷新","予想外の出来事も、見直しのきっかけになることがあります。足元を整えることから始めて。","慌てて結論を出さず、まず状況を確認しましょう。","⚡"],
  ["星","希望と癒やし","小さな希望を大切にしたい日。すぐに形にならなくても、未来への種は育っています。","好きなことや、心が軽くなることに触れて。","☆"],
  ["月","感性と不確かさ","想像力が豊かになる一方、曖昧な情報に迷いやすいかも。焦らず確かめる姿勢を。","不安なときは、確認できる事実に戻りましょう。","☾"],
  ["太陽","喜びと活力","明るい気持ちで取り組めそう。素直な喜びを分かち合うと、周りにも温かさが広がります。","うれしかったことを誰かに伝えてみて。","☀"],
  ["審判","目覚めと再出発","過去の経験を振り返り、次の一歩を選ぶタイミング。もう一度挑戦する力が湧いてきそうです。","以前あきらめたことを、小さく見直してみて。","♢"],
  ["世界","完成と達成","積み重ねてきたことに一区切りがつきそう。達成を味わい、次の目標をゆっくり描いて。","できたことを認め、自分をねぎらいましょう。","◎"]
];

const TAROT_VISUALS = [
  {
    "roman": "0",
    "number": "0",
    "name": "愚者",
    "symbol": "✧",
    "keyword": "旅立ち",
    "primary": "#b99bd8",
    "gold": "#f4dfb0"
  },
  {
    "roman": "I",
    "number": "1",
    "name": "魔術師",
    "symbol": "✦",
    "keyword": "創造",
    "primary": "#a88acb",
    "gold": "#f6d98d"
  },
  {
    "roman": "II",
    "number": "2",
    "name": "女教皇",
    "symbol": "☾",
    "keyword": "静寂",
    "primary": "#8795bd",
    "gold": "#f2e7c9"
  },
  {
    "roman": "III",
    "number": "3",
    "name": "女帝",
    "symbol": "❀",
    "keyword": "豊穣",
    "primary": "#c58eaa",
    "gold": "#f7dfb4"
  },
  {
    "roman": "IV",
    "number": "4",
    "name": "皇帝",
    "symbol": "♜",
    "keyword": "秩序",
    "primary": "#b18a70",
    "gold": "#f3d9a0"
  },
  {
    "roman": "V",
    "number": "5",
    "name": "教皇",
    "symbol": "✥",
    "keyword": "叡智",
    "primary": "#9d91bb",
    "gold": "#f2dfad"
  },
  {
    "roman": "VI",
    "number": "6",
    "name": "恋人",
    "symbol": "♡",
    "keyword": "絆",
    "primary": "#c58da7",
    "gold": "#f8e4c4"
  },
  {
    "roman": "VII",
    "number": "7",
    "name": "戦車",
    "symbol": "⚑",
    "keyword": "前進",
    "primary": "#879bbd",
    "gold": "#f4d99a"
  },
  {
    "roman": "VIII",
    "number": "8",
    "name": "力",
    "symbol": "♧",
    "keyword": "勇気",
    "primary": "#9da982",
    "gold": "#f1dfad"
  },
  {
    "roman": "IX",
    "number": "9",
    "name": "隠者",
    "symbol": "灯",
    "keyword": "探求",
    "primary": "#8290a6",
    "gold": "#ead8ae"
  },
  {
    "roman": "X",
    "number": "10",
    "name": "運命の輪",
    "symbol": "◎",
    "keyword": "転機",
    "primary": "#a88fc6",
    "gold": "#f7df9e"
  },
  {
    "roman": "XI",
    "number": "11",
    "name": "正義",
    "symbol": "⚖",
    "keyword": "均衡",
    "primary": "#8e9bb2",
    "gold": "#f2dfb0"
  },
  {
    "roman": "XII",
    "number": "12",
    "name": "吊るされた男",
    "symbol": "◇",
    "keyword": "視点",
    "primary": "#8da6a7",
    "gold": "#f5e4bd"
  },
  {
    "roman": "XIII",
    "number": "13",
    "name": "死神",
    "symbol": "☽",
    "keyword": "再生",
    "primary": "#7e829e",
    "gold": "#e8d9c5"
  },
  {
    "roman": "XIV",
    "number": "14",
    "name": "節制",
    "symbol": "⚗",
    "keyword": "調和",
    "primary": "#91aaa1",
    "gold": "#f5e6bf"
  },
  {
    "roman": "XV",
    "number": "15",
    "name": "悪魔",
    "symbol": "⛓",
    "keyword": "誘惑",
    "primary": "#9c7187",
    "gold": "#f0d39d"
  },
  {
    "roman": "XVI",
    "number": "16",
    "name": "塔",
    "symbol": "⚡",
    "keyword": "刷新",
    "primary": "#b77e70",
    "gold": "#f7df9e"
  },
  {
    "roman": "XVII",
    "number": "17",
    "name": "星",
    "symbol": "☆",
    "keyword": "希望",
    "primary": "#819ac4",
    "gold": "#f8e8b8"
  },
  {
    "roman": "XVIII",
    "number": "18",
    "name": "月",
    "symbol": "☾",
    "keyword": "夢",
    "primary": "#777fa8",
    "gold": "#f1dfbd"
  },
  {
    "roman": "XIX",
    "number": "19",
    "name": "太陽",
    "symbol": "☀",
    "keyword": "祝福",
    "primary": "#d0a45f",
    "gold": "#fff0b8"
  },
  {
    "roman": "XX",
    "number": "20",
    "name": "審判",
    "symbol": "♢",
    "keyword": "目覚め",
    "primary": "#9b8bb5",
    "gold": "#f5dfaa"
  },
  {
    "roman": "XXI",
    "number": "21",
    "name": "世界",
    "symbol": "◎",
    "keyword": "完成",
    "primary": "#83a39a",
    "gold": "#f7e7b8"
  }
];

const ZODIAC = [
  ["牡羊座","♈"],["牡牛座","♉"],["双子座","♊"],["蟹座","♋"],
  ["獅子座","♌"],["乙女座","♍"],["天秤座","♎"],["蠍座","♏"],
  ["射手座","♐"],["山羊座","♑"],["水瓶座","♒"],["魚座","♓"]
];
const DAILY_MESSAGES = [
  ["小さな一歩が、思いがけない可能性につながりそう。","新しいことを始めるなら、気負わず楽しむ気持ちを大切に。"],
  ["身近な人との会話に、うれしいヒントが隠れているかも。","相手の話をゆっくり聞くことで、関係が穏やかに深まりそう。"],
  ["いつもより丁寧に過ごすと、心に余裕が生まれそう。","急がなくても大丈夫。自分のペースを取り戻しましょう。"],
  ["気になっていたことを整理するのに向いた日。","机の上や予定を整えると、気持ちもすっきりしそう。"],
  ["好きなものに触れる時間が、明日の元気を育ててくれそう。","自分を喜ばせる小さなご褒美を用意してみて。"]
];
const COLORS = ["ラベンダー","ミルキーホワイト","シャンパンゴールド","ペールブルー","ローズピンク","セージグリーン"];
const ITEMS = ["お気に入りのペン","小さなノート","温かい飲み物","ハンカチ","本","月のモチーフ"];

const STORAGE_KEY = "mysticGardenHistoryV1";
const $ = (id) => document.getElementById(id);

function dateKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return h >>> 0;
}
function seededIndex(seed, length) { return hashString(seed) % length; }
function readHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch { return []; }
}
function saveHistory(entry) {
  const history = readHistory();
  history.unshift({ ...entry, savedAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 30)));
  renderHistory();
}
function renderDaily() {
  const today = dateKey();
  const date = new Date();
  $("todayDate").textContent = `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;
  const idx = seededIndex(today + "daily", DAILY_MESSAGES.length);
  const [title, message] = DAILY_MESSAGES[idx];
  $("dailyTitle").textContent = title;
  $("dailyMessage").textContent = message;
  $("luckyColor").textContent = COLORS[seededIndex(today+"color", COLORS.length)];
  $("luckyItem").textContent = ITEMS[seededIndex(today+"item", ITEMS.length)];
}

function tarotArtwork(cardIndex, reversed = false) {
  const v = TAROT_VISUALS[cardIndex];
  const safeSymbol = v.symbol.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const stars = Array.from({ length: 18 }, (_, i) => {
    const x = 24 + ((i * 47 + cardIndex * 19) % 192);
    const y = 28 + ((i * 61 + cardIndex * 13) % 310);
    const r = i % 4 === 0 ? 2.2 : 1.2;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff4d5" opacity="${i % 3 === 0 ? .95 : .55}"/>`;
  }).join("");
  const angle = reversed ? 180 : 0;
  return `
    <svg class="tarot-illustration" viewBox="0 0 240 370" role="img" aria-label="${v.name}のタロットカード">
      <defs>
        <linearGradient id="cardBg${cardIndex}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${v.primary}"/>
          <stop offset="100%" stop-color="#514666"/>
        </linearGradient>
        <radialGradient id="cardGlow${cardIndex}">
          <stop offset="0%" stop-color="${v.gold}" stop-opacity=".65"/>
          <stop offset="100%" stop-color="${v.gold}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect x="5" y="5" width="230" height="360" rx="13" fill="#f8edcf"/>
      <rect x="10" y="10" width="220" height="350" rx="10" fill="url(#cardBg${cardIndex})"/>
      <rect x="17" y="17" width="206" height="336" rx="7" fill="none" stroke="#e8cf91" stroke-width="1.4"/>
      <rect x="23" y="23" width="194" height="324" rx="5" fill="none" stroke="#f8e9c5" stroke-opacity=".35"/>
      ${stars}
      <circle cx="120" cy="174" r="91" fill="url(#cardGlow${cardIndex})"/>
      <g transform="rotate(${angle} 120 174)">
        <circle cx="120" cy="174" r="66" fill="none" stroke="#f4dfad" stroke-width="1.5" opacity=".8"/>
        <circle cx="120" cy="174" r="54" fill="none" stroke="#f4dfad" stroke-width=".8" stroke-dasharray="2 5" opacity=".8"/>
        <path d="M120 91 L132 158 L199 174 L132 190 L120 257 L108 190 L41 174 L108 158 Z" fill="none" stroke="#f4dfad" stroke-width="1.2" opacity=".65"/>
        <circle cx="120" cy="174" r="37" fill="#fff7e7" fill-opacity=".12" stroke="#f8e7bf" stroke-width="1.2"/>
        <text x="120" y="190" text-anchor="middle" font-size="${v.symbol === "灯" ? 36 : 52}" fill="#fff0c9" font-family="serif">${safeSymbol}</text>
      </g>
      <path d="M42 286 Q120 264 198 286" fill="none" stroke="#e9d49e" stroke-opacity=".65"/>
      <text x="120" y="307" text-anchor="middle" fill="#fff2d2" font-size="11" letter-spacing="2">${v.keyword}</text>
      <text x="120" y="331" text-anchor="middle" fill="#f9e8c1" font-size="10" letter-spacing="1.5">${v.roman}</text>
    </svg>`;
}

function renderTarotChoices() {
  const deck = $("tarotChoices");
  deck.innerHTML = "";
  ["A", "B", "C"].forEach((label, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tarot-choice";
    button.setAttribute("aria-label", `カード${label}を選ぶ`);
    button.innerHTML = `
      <span class="tarot-card-back" aria-hidden="true">
        <span class="back-orbit"></span><span class="back-moon">☾</span>
        <span class="back-star">✧</span><small>${label}</small>
      </span>
      <span class="tarot-choice-label">CARD ${label}</span>`;
    button.addEventListener("click", () => drawTarot(index, button));
    deck.appendChild(button);
  });
}

function drawTarot(slot = 1, selectedButton = null) {
  const cardIndex = Math.floor(Math.random() * TAROT_CARDS.length);
  const reversed = Math.random() < 0.35;
  const [name, theme, upright, advice] = TAROT_CARDS[cardIndex];
  const visual = TAROT_VISUALS[cardIndex];
  const meaning = reversed
    ? `逆位置：${theme}のテーマを、少し立ち止まって見直すタイミングかもしれません。無理に進めず、整えることから始めてみましょう。`
    : `正位置：${upright}`;

  document.querySelectorAll(".tarot-choice").forEach((button) => {
    button.disabled = true;
    button.classList.remove("chosen");
  });
  if (selectedButton) {
    selectedButton.classList.add("chosen", "revealed");
    const cardBack = selectedButton.querySelector(".tarot-card-back");
    if (cardBack) cardBack.innerHTML = tarotArtwork(cardIndex, reversed);
  }

  $("tarotArt").innerHTML = tarotArtwork(cardIndex, reversed);
  $("tarotName").textContent = `${visual.roman}　${name}`;
  $("tarotOrientation").textContent = reversed ? "REVERSED・逆位置" : "UPRIGHT・正位置";
  $("tarotMeaning").textContent = meaning;
  $("tarotAdvice").textContent = `今日のヒント：${advice}`;
  $("tarotResult").classList.remove("hidden");
  $("tarotResult").classList.remove("tarot-reveal");
  void $("tarotResult").offsetWidth;
  $("tarotResult").classList.add("tarot-reveal");
  saveHistory({ type: "タロット", title: `${name}（${reversed ? "逆位置" : "正位置"}）` });
}

function renderZodiac() {
  const grid = $("zodiacGrid");
  ZODIAC.forEach(([name, symbol], index) => {
    const button = document.createElement("button");
    button.className = "zodiac-item";
    button.type = "button";
    button.innerHTML = `<span aria-hidden="true">${symbol}</span><strong>${name}</strong>`;
    button.addEventListener("click", () => showZodiac(index));
    grid.appendChild(button);
  });
}
function showZodiac(index) {
  const [name, symbol] = ZODIAC[index];
  const messages = [
    "自分のペースを大切にすると、落ち着いて物事を進められそうです。",
    "小さな積み重ねがうれしい手応えにつながる日。丁寧さを味方に。",
    "好奇心が新しい発見を連れてきそう。気軽な会話を楽しんで。",
    "安心できる場所や人との時間が、心を整えてくれそうです。",
    "あなたらしい明るさが周囲にも伝わりそう。自信を持って。",
    "細かな気配りが役立つ日。完璧を求めすぎないことも大切。",
    "バランス感覚が冴えそう。相手の立場にも目を向けてみて。",
    "集中力を活かせそうな日。大切なことから取り組みましょう。",
    "新しい景色に目を向けると、気分転換になりそうです。",
    "計画を少し整えると、安心して前に進めそうです。",
    "自由な発想がヒントに。いつもと違う方法も試してみて。",
    "感受性が豊かな日。心地よい距離感を大切にしましょう。"
  ];
  const score = 60 + seededIndex(dateKey()+index+"score", 41);
  $("zodiacSymbol").textContent = symbol;
  $("zodiacName").textContent = name;
  $("zodiacMessage").textContent = messages[index];
  $("zodiacScore").textContent = `運勢 ${score}点`;
  $("zodiacResult").classList.remove("hidden");
  document.querySelectorAll(".zodiac-item").forEach((el, i) => el.classList.toggle("active", i === index));
  saveHistory({ type: "星座占い", title: name });
}
function renderHistory() {
  const history = readHistory();
  const list = $("historyList");
  list.innerHTML = "";
  if (!history.length) {
    list.innerHTML = '<p class="empty-state">まだ記録はありません。最初の占いを楽しんでみましょう。</p>';
    $("clearHistory").classList.add("hidden");
    return;
  }
  history.slice(0, 10).forEach((entry) => {
    const item = document.createElement("div");
    item.className = "history-entry";
    const date = new Date(entry.savedAt);
    item.innerHTML = `<span class="history-icon" aria-hidden="true">✧</span><div><strong></strong><small></small></div>`;
    item.querySelector("strong").textContent = `${entry.type}：${entry.title}`;
    item.querySelector("small").textContent = date.toLocaleString("ja-JP");
    list.appendChild(item);
  });
  $("clearHistory").classList.remove("hidden");
}
renderTarotChoices();
$("drawAgain").addEventListener("click", () => {
  $("tarotResult").classList.add("hidden");
  renderTarotChoices();
});
$("clearHistory").addEventListener("click", () => {
  if (confirm("この端末に保存された占い履歴をすべて削除しますか？")) {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
  }
});
$("menuButton").addEventListener("click", () => {
  const open = $("mainNav").classList.toggle("open");
  $("menuButton").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => {
  $("mainNav").classList.remove("open");
  $("menuButton").setAttribute("aria-expanded", "false");
}));
$("year").textContent = new Date().getFullYear();
renderDaily();
renderZodiac();
renderHistory();
