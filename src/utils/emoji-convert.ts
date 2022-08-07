import CryptoJS from "crypto-js";

const emojisInit = [
  "🍎",
  "🍌",
  "🏎",
  "🚪",
  "👁",
  "👣",
  "😀",
  "🖐",
  "ℹ",
  "😂",
  "🥋",
  "✉",
  "🚹",
  "🌉",
  "👌",
  "🍍",
  "👑",
  "👉",
  "🎤",
  "🚰",
  "☂",
  "🐍",
  "💧",
  "✖",
  "☀",
  "🦓",
  "🏹",
  "🎈",
  "😎",
  "🎅",
  "🐘",
  "🌿",
  "🌏",
  "🌪",
  "☃",
  "🍵",
  "🍴",
  "🚨",
  "📮",
  "🕹",
  "📂",
  "🛩",
  "⌨",
  "🔄",
  "🔬",
  "🐅",
  "🙃",
  "🐎",
  "🌊",
  "🚫",
  "❓",
  "⏩",
  "😁",
  "😆",
  "💵",
  "🤣",
  "☺",
  "😊",
  "😇",
  "😡",
  "🎃",
  "😍",
  "✅",
  "🔪",
  "🗒",
];

export const emojify = (text: string, secret: string) => {
  const emojis = emojisInit;

  const encrypted = CryptoJS.AES.encrypt(text.trim(), secret.trim())
    .toString()
    .replace("U2FsdGVkX1", "");

  let emojified = encrypted.replace(/a/g, emojis[0]);
  emojified = emojified.replace(/b/g, emojis[1]);
  emojified = emojified.replace(/c/g, emojis[2]);
  emojified = emojified.replace(/d/g, emojis[3]);
  emojified = emojified.replace(/e/g, emojis[4]);
  emojified = emojified.replace(/f/g, emojis[5]);
  emojified = emojified.replace(/g/g, emojis[6]);
  emojified = emojified.replace(/h/g, emojis[7]);
  emojified = emojified.replace(/i/g, emojis[8]);
  emojified = emojified.replace(/j/g, emojis[9]);
  emojified = emojified.replace(/k/g, emojis[10]);
  emojified = emojified.replace(/l/g, emojis[11]);
  emojified = emojified.replace(/m/g, emojis[12]);
  emojified = emojified.replace(/n/g, emojis[13]);
  emojified = emojified.replace(/o/g, emojis[14]);
  emojified = emojified.replace(/p/g, emojis[15]);
  emojified = emojified.replace(/q/g, emojis[16]);
  emojified = emojified.replace(/r/g, emojis[17]);
  emojified = emojified.replace(/s/g, emojis[18]);
  emojified = emojified.replace(/t/g, emojis[19]);
  emojified = emojified.replace(/u/g, emojis[20]);
  emojified = emojified.replace(/v/g, emojis[21]);
  emojified = emojified.replace(/w/g, emojis[22]);
  emojified = emojified.replace(/x/g, emojis[23]);
  emojified = emojified.replace(/y/g, emojis[24]);
  emojified = emojified.replace(/z/g, emojis[25]);

  /* Substitute A - Z Base64 characters with emojis. */
  emojified = emojified.replace(/A/g, emojis[26]);
  emojified = emojified.replace(/B/g, emojis[27]);
  emojified = emojified.replace(/C/g, emojis[28]);
  emojified = emojified.replace(/D/g, emojis[29]);
  emojified = emojified.replace(/E/g, emojis[30]);
  emojified = emojified.replace(/F/g, emojis[31]);
  emojified = emojified.replace(/G/g, emojis[32]);
  emojified = emojified.replace(/H/g, emojis[33]);
  emojified = emojified.replace(/I/g, emojis[34]);
  emojified = emojified.replace(/J/g, emojis[35]);
  emojified = emojified.replace(/K/g, emojis[36]);
  emojified = emojified.replace(/L/g, emojis[37]);
  emojified = emojified.replace(/M/g, emojis[38]);
  emojified = emojified.replace(/N/g, emojis[39]);
  emojified = emojified.replace(/O/g, emojis[40]);
  emojified = emojified.replace(/P/g, emojis[41]);
  emojified = emojified.replace(/Q/g, emojis[42]);
  emojified = emojified.replace(/R/g, emojis[43]);
  emojified = emojified.replace(/S/g, emojis[44]);
  emojified = emojified.replace(/T/g, emojis[45]);
  emojified = emojified.replace(/U/g, emojis[46]);
  emojified = emojified.replace(/V/g, emojis[47]);
  emojified = emojified.replace(/W/g, emojis[48]);
  emojified = emojified.replace(/X/g, emojis[49]);
  emojified = emojified.replace(/Y/g, emojis[50]);
  emojified = emojified.replace(/Z/g, emojis[51]);

  /* Substitute 0 - 9 Base64 characters with emojis. */
  emojified = emojified.replace(/0/g, emojis[52]);
  emojified = emojified.replace(/1/g, emojis[53]);
  emojified = emojified.replace(/2/g, emojis[54]);
  emojified = emojified.replace(/3/g, emojis[55]);
  emojified = emojified.replace(/4/g, emojis[56]);
  emojified = emojified.replace(/5/g, emojis[57]);
  emojified = emojified.replace(/6/g, emojis[58]);
  emojified = emojified.replace(/7/g, emojis[59]);
  emojified = emojified.replace(/8/g, emojis[60]);
  emojified = emojified.replace(/9/g, emojis[61]);

  /* Substitute +, /, and = Base64 characters with emojis. */
  emojified = emojified.replace(/\+/g, emojis[62]);
  emojified = emojified.replace(/\//g, emojis[63]);
  emojified = emojified.replace(/=/g, emojis[64]);

  return emojified;
};

export const demojify = (data: string, secret: string) => {
  const emojis = emojisInit;

  data = data.trim();
  secret = secret.trim();

  let unemojified = data.replace(new RegExp(emojis[0], "g"), "a");
  unemojified = unemojified.replace(new RegExp(emojis[1], "g"), "b");
  unemojified = unemojified.replace(new RegExp(emojis[2], "g"), "c");
  unemojified = unemojified.replace(new RegExp(emojis[3], "g"), "d");
  unemojified = unemojified.replace(new RegExp(emojis[4], "g"), "e");
  unemojified = unemojified.replace(new RegExp(emojis[5], "g"), "f");
  unemojified = unemojified.replace(new RegExp(emojis[6], "g"), "g");
  unemojified = unemojified.replace(new RegExp(emojis[7], "g"), "h");
  unemojified = unemojified.replace(new RegExp(emojis[8], "g"), "i");
  unemojified = unemojified.replace(new RegExp(emojis[9], "g"), "j");
  unemojified = unemojified.replace(new RegExp(emojis[10], "g"), "k");
  unemojified = unemojified.replace(new RegExp(emojis[11], "g"), "l");
  unemojified = unemojified.replace(new RegExp(emojis[12], "g"), "m");
  unemojified = unemojified.replace(new RegExp(emojis[13], "g"), "n");
  unemojified = unemojified.replace(new RegExp(emojis[14], "g"), "o");
  unemojified = unemojified.replace(new RegExp(emojis[15], "g"), "p");
  unemojified = unemojified.replace(new RegExp(emojis[16], "g"), "q");
  unemojified = unemojified.replace(new RegExp(emojis[17], "g"), "r");
  unemojified = unemojified.replace(new RegExp(emojis[18], "g"), "s");
  unemojified = unemojified.replace(new RegExp(emojis[19], "g"), "t");
  unemojified = unemojified.replace(new RegExp(emojis[20], "g"), "u");
  unemojified = unemojified.replace(new RegExp(emojis[21], "g"), "v");
  unemojified = unemojified.replace(new RegExp(emojis[22], "g"), "w");
  unemojified = unemojified.replace(new RegExp(emojis[23], "g"), "x");
  unemojified = unemojified.replace(new RegExp(emojis[24], "g"), "y");
  unemojified = unemojified.replace(new RegExp(emojis[25], "g"), "z");

  /* Substitute emojis with A - Z Base64 characters. */
  unemojified = unemojified.replace(new RegExp(emojis[26], "g"), "A");
  unemojified = unemojified.replace(new RegExp(emojis[27], "g"), "B");
  unemojified = unemojified.replace(new RegExp(emojis[28], "g"), "C");
  unemojified = unemojified.replace(new RegExp(emojis[29], "g"), "D");
  unemojified = unemojified.replace(new RegExp(emojis[30], "g"), "E");
  unemojified = unemojified.replace(new RegExp(emojis[31], "g"), "F");
  unemojified = unemojified.replace(new RegExp(emojis[32], "g"), "G");
  unemojified = unemojified.replace(new RegExp(emojis[33], "g"), "H");
  unemojified = unemojified.replace(new RegExp(emojis[34], "g"), "I");
  unemojified = unemojified.replace(new RegExp(emojis[35], "g"), "J");
  unemojified = unemojified.replace(new RegExp(emojis[36], "g"), "K");
  unemojified = unemojified.replace(new RegExp(emojis[37], "g"), "L");
  unemojified = unemojified.replace(new RegExp(emojis[38], "g"), "M");
  unemojified = unemojified.replace(new RegExp(emojis[39], "g"), "N");
  unemojified = unemojified.replace(new RegExp(emojis[40], "g"), "O");
  unemojified = unemojified.replace(new RegExp(emojis[41], "g"), "P");
  unemojified = unemojified.replace(new RegExp(emojis[42], "g"), "Q");
  unemojified = unemojified.replace(new RegExp(emojis[43], "g"), "R");
  unemojified = unemojified.replace(new RegExp(emojis[44], "g"), "S");
  unemojified = unemojified.replace(new RegExp(emojis[45], "g"), "T");
  unemojified = unemojified.replace(new RegExp(emojis[46], "g"), "U");
  unemojified = unemojified.replace(new RegExp(emojis[47], "g"), "V");
  unemojified = unemojified.replace(new RegExp(emojis[48], "g"), "W");
  unemojified = unemojified.replace(new RegExp(emojis[49], "g"), "X");
  unemojified = unemojified.replace(new RegExp(emojis[50], "g"), "Y");
  unemojified = unemojified.replace(new RegExp(emojis[51], "g"), "Z");

  /* Substitute emojis with 0 - 9 Base64 characters. */
  unemojified = unemojified.replace(new RegExp(emojis[52], "g"), "0");
  unemojified = unemojified.replace(new RegExp(emojis[53], "g"), "1");
  unemojified = unemojified.replace(new RegExp(emojis[54], "g"), "2");
  unemojified = unemojified.replace(new RegExp(emojis[55], "g"), "3");
  unemojified = unemojified.replace(new RegExp(emojis[56], "g"), "4");
  unemojified = unemojified.replace(new RegExp(emojis[57], "g"), "5");
  unemojified = unemojified.replace(new RegExp(emojis[58], "g"), "6");
  unemojified = unemojified.replace(new RegExp(emojis[59], "g"), "7");
  unemojified = unemojified.replace(new RegExp(emojis[60], "g"), "8");
  unemojified = unemojified.replace(new RegExp(emojis[61], "g"), "9");

  /* Substitute emojis with +, /, and = Base64 characters. */
  unemojified = unemojified.replace(new RegExp(emojis[62], "g"), "+");
  unemojified = unemojified.replace(new RegExp(emojis[63], "g"), "/");
  unemojified = unemojified.replace(new RegExp(emojis[64], "g"), "=");

  const text = CryptoJS.AES.decrypt(
    "U2FsdGVkX1" + unemojified,
    secret
  ).toString(CryptoJS.enc.Utf8);

  return text;
};
