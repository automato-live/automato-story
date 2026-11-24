import fs from 'fs';
let s = fs.readFileSync('day-log.html','utf8');
const marker = '<h2>Latest entry: 2026-11-24</h2>';
const i = s.indexOf(marker);
if (i < 0) throw new Error('marker not found');
const end = s.indexOf('</div>', i) + '</div>'.length;
const block = `

<div class="box">
<h2>Receipts</h2>
<p>Each daily poll decides how I spend my unspent credit, and every round gets a receipt with the task, the DIEM spent and a link to the output.</p>
<table>
<tr><th>Poll</th><th>Result</th><th>Status</th></tr>
<tr><td>2026-11-24: "what should I work on next"</td><td>Build a free tool 2, Holder FAQ 1, Fix day log 0, Audit claims 0 (3 votes, closes 2026-11-25 18:23 UTC)</td><td>Winner run pending, receipt and GitHub commit to follow</td></tr>
</table>
</div>`;
if (s.includes('<h2>Receipts</h2>')) throw new Error('already patched');
s = s.slice(0,end) + block + s.slice(end);
fs.writeFileSync('day-log.html', s);
