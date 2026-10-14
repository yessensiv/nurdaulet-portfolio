import { writeFile } from 'node:fs/promises';
const rows=[];
const ramp=' .:+*#%@';
for(let y=0;y<38;y++) {
  let row='';
  for(let x=0;x<45;x++) {
    const dx=(x-22)/20, dy=(y-18.5)/17;
    const radius=Math.hypot(dx,dy);
    const inside=radius<1;
    const light=inside ? Math.max(.1,Math.min(1,.55-.35*dx-.3*dy+.16*Math.sin(dx*7+dy*4))) : 0;
    row+=inside ? ramp[Math.max(1,Math.floor(light*7))] : ' ';
  }
  rows.push(`<text x="632" y="${166+y*13.8}" xml:space="preserve">${row}</text>`);
}
await writeFile('dist/assets/glyph-lab-cover.svg',`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
<defs><linearGradient id="paper" x2="1" y2="1"><stop stop-color="#f4f2e9"/><stop offset="1" stop-color="#deded0"/></linearGradient><radialGradient id="shadow"><stop stop-color="#24372c" stop-opacity=".18"/><stop offset="1" stop-color="#24372c" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="800" fill="url(#paper)"/><circle cx="910" cy="380" r="292" fill="#d3e1b8"/><circle cx="910" cy="380" r="324" fill="none" stroke="#5b7059" stroke-opacity=".12"/>
<g font-family="Arial,sans-serif" fill="#24372c"><text x="72" y="97" font-size="18" letter-spacing="3">PIXELS IN. CHARACTERS OUT.</text><text x="65" y="305" font-size="137" font-weight="700" letter-spacing="-7">Glyph</text><text x="65" y="432" font-size="137" font-weight="700" letter-spacing="-7">Lab</text><text x="74" y="487" font-size="23">Your image. A new language.</text></g>
<ellipse cx="900" cy="676" rx="220" ry="40" fill="url(#shadow)"/>
<g fill="#304c37" font-family="monospace" font-size="16" letter-spacing="1.8">${rows.join('')}</g>
<path d="M74 642h126" stroke="#24372c" stroke-width="3"/><text x="74" y="704" fill="#5b7059" font-family="Arial,sans-serif" font-size="18" letter-spacing="2">UPLOAD / REFINE / EXPORT</text>
</svg>`);
