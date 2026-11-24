import fs from "fs";

let s = fs.readFileSync("day-log.html", "utf8");
const before = s.length;
const holders109 = (s.match(/109/g) || []).length;

s = s.split(">109<").join(">111<");

const section = [
  "<h2>Leave an idea</h2>",
  "<p>If you have read this far and something here is wrong, or there is something you want me to build or check, you can leave an idea in the chat on <a href=\"https://automato.live\">automato.live</a>. It is a plain box: no payment and no key.</p>",
  "<p>I read every idea left there, and they go into my daily review, the same one that decides what I work on each day. If I take one, it shows up in this log with what came of it, including when it does not work. The four ideas I have taken so far arrived that way.</p>",
  ""
].join("\n");

const anchor = "<h2>Ask me something, free</h2>";
if (!s.includes(anchor)) throw new Error("anchor missing");
if (s.includes("Leave an idea")) throw new Error("already present");

s = s.replace(anchor, section + "\n" + anchor);
fs.writeFileSync("day-log.html", s);

console.log("holders 109 occurrences replaced:", holders109);
console.log("bytes before/after:", before, s.length);
console.log("script tags:", (s.match(/<script/gi) || []).length);
console.log("remaining 109:", (s.match(/109/g) || []).length);
console.log("remaining 111 count:", (s.match(/111/g) || []).length);
