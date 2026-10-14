import { readFile, writeFile } from 'node:fs/promises';
const robot = (await readFile('dist/assets/riov-product.png')).toString('base64');
await writeFile('dist/assets/riov-cover.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
<defs><linearGradient id="paper" x2="1" y2="1"><stop stop-color="#f6f3eb"/><stop offset="1" stop-color="#d9d8cc"/></linearGradient><radialGradient id="shadow"><stop stop-color="#252620" stop-opacity=".25"/><stop offset="1" stop-color="#252620" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="800" fill="url(#paper)"/>
<circle cx="940" cy="356" r="298" fill="#e6ed8b"/><circle cx="940" cy="356" r="330" fill="none" stroke="#65675d" stroke-opacity=".12"/>
<g font-family="Arial,sans-serif" fill="#262824"><text x="72" y="97" font-size="18" letter-spacing="3">ORIGINAL ROBOT CONCEPT</text><text x="62" y="325" font-size="160" font-weight="700" letter-spacing="-9">RIOV</text><text x="74" y="377" font-size="24">Form. Character. Motion.</text></g>
<ellipse cx="851" cy="643" rx="343" ry="66" fill="url(#shadow)"/>
<image href="data:image/png;base64,${robot}" x="443" y="40" width="750" height="750" preserveAspectRatio="xMidYMid meet"/>
<path d="M74 642h126" stroke="#262824" stroke-width="3"/><text x="74" y="704" fill="#55594f" font-family="Arial,sans-serif" font-size="18" letter-spacing="2">DESIGN / INTERACTIVE 3D</text>
</svg>`);
