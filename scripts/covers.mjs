import { writeFile, readFile } from 'node:fs/promises';

const text = (x,y,label,size=20,color='#222',weight=400) => `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${label}</text>`;
const rect = (x,y,w,h,fill,r=12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
const line = (x,y,w,color='#e8e8e8') => rect(x,y,w,8,color,4);
const browser = (body) => `<g filter="url(#shadow)">${rect(160,190,880,520,'#fff',18)}${rect(160,190,880,40,'#f4f4f4',18)}<path d="M160 215h880v15H160z" fill="#f4f4f4"/><g fill="#d0d0d0"><circle cx="183" cy="210" r="4"/><circle cx="197" cy="210" r="4"/><circle cx="211" cy="210" r="4"/></g>${body}</g>`;
function cover(name,subtitle,bg,ink,body){return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900"><defs><radialGradient id="glow"><stop stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><filter id="shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="${ink}" flood-opacity=".14"/></filter></defs>${rect(0,0,1200,900,bg,0)}<ellipse cx="600" cy="380" rx="620" ry="440" fill="url(#glow)"/>${text(160,112,name,48,ink,700)}${text(160,149,subtitle,18,ink)}${body}${text(160,793,'PRODUCT CONCEPT / '+name.toUpperCase(),13,ink)}<path d="M975 785h65m-16-16 16 16-16 16" stroke="${ink}" stroke-width="2" fill="none"/></svg>`;}

const math = browser(`${rect(160,230,180,480,'#143d36',0)}${text(183,275,'ENT Math',25,'#fff',700)}${text(183,334,'Learn',16,'#bcd4cc')}${rect(177,358,144,40,'#2d574c',8)}${text(191,384,'Mathematics',15,'#fff')}${text(183,439,'Practice',16,'#bcd4cc')}${text(183,483,'Progress',16,'#bcd4cc')}${text(370,282,'Your next step.',34,'#163f35',700)}${text(370,315,'A little practice. A little progress.',17,'#6b8078')}${rect(370,349,636,139,'#edf5ef')}${text(397,387,'MATHEMATICS',13,'#537767',700)}${text(397,431,'Keep learning, every day.',26,'#163f35',700)}${rect(808,385,169,52,'#bce789',10)}${text(832,418,'Start practice',17,'#163f35',700)}${rect(370,511,304,165,'#f7f8f5')}${text(392,547,'Learning route',18,'#163f35',700)}${line(393,574,247,'#dce8dc')}${line(393,599,188,'#dce8dc')}${line(393,624,221,'#dce8dc')}${rect(694,511,312,165,'#f7f8f5')}${text(716,547,'Your progress',18,'#163f35',700)}<path d="M720 638l45-17 45 7 45-45 45 9 52-33" fill="none" stroke="#699f68" stroke-width="4"/>`);
await writeFile('dist/assets/ent-math.svg',cover('ENT Math','Learning, one step at a time.','#d9e8dc','#183c32',math));

const photo = (await readFile('dist/assets/dentalux.jpg')).toString('base64');
const dental = browser(`${text(195,276,'DentaLux',24,'#315951',700)}${text(586,273,'Clinic     Services     Contact',15,'#71847b')}${rect(879,248,124,38,'#e7ede6',19)}${text(896,273,'Book a visit',14,'#315951')}${rect(183,310,834,375,'#f1f2e9',12)}<clipPath id="photo"><rect x="632" y="310" width="385" height="375" rx="12"/></clipPath><image href="data:image/jpeg;base64,${photo}" x="632" y="310" width="385" height="375" preserveAspectRatio="xMidYMid slice" clip-path="url(#photo)"/>${text(216,369,'CARE THAT FEELS PERSONAL',12,'#71847b',700)}${text(215,426,'A reason',43,'#315951',700)}${text(215,476,'to smile.',43,'#315951',700)}${text(216,523,'Thoughtful care. A calmer experience.',16,'#71847b')}${rect(216,564,175,48,'#315951',24)}${text(239,595,'Explore the clinic',16,'#fff')}`);
await writeFile('dist/assets/dentalux-cover.svg',cover('DentaLux','A calmer kind of care.','#eae8df','#315951',dental));

const doc = browser(`${text(193,272,'DocMind',24,'#343731',700)}${text(826,269,'Document assistant',15,'#85867f')}${rect(183,300,296,386,'#efeee9')}${rect(231,335,196,235,'#fff',12)}${text(251,376,'Document.txt',17,'#343731',700)}${line(251,401,153,'#d8d8d0')}${line(251,427,134,'#d8d8d0')}${line(251,453,151,'#d8d8d0')}${line(251,479,108,'#d8d8d0')}${line(251,505,144,'#d8d8d0')}${text(210,624,'Read. Ask. Understand.',18,'#343731',700)}${text(515,333,'Make sense of your documents.',25,'#343731',700)}${rect(633,365,350,55,'#e4e5dd')}${text(652,399,'What is this document about?',17,'#343731')}${rect(515,439,468,146,'#f4f3ee')}${text(536,472,'A clear view, in a few words.',18,'#343731',700)}${line(536,494,418,'#d8d8d0')}${line(536,520,377,'#d8d8d0')}${line(536,546,399,'#d8d8d0')}${rect(515,612,468,53,'#f4f3ee')}${text(535,645,'Ask a question…',16,'#92958b')}${rect(927,622,42,32,'#454b40',8)}${text(942,645,'↑',23,'#fff')}`);
await writeFile('dist/assets/docmind.svg',cover('DocMind','Documents into understanding.','#e5e4dc','#343731',doc));

const phone = `<g filter="url(#shadow)">${rect(442,177,316,550,'#152119',38)}${rect(453,188,294,528,'#202e24',29)}${rect(547,197,106,22,'#101a14',11)}${text(477,266,'Flow',30,'#ddf4bd',700)}${text(477,299,'Your media. To go.',14,'#8fa58f')}${rect(477,329,246,56,'#324235',13)}${text(493,363,'Paste a video link',15,'#a1b69b')}${rect(477,402,246,43,'#c0ed83',12)}${text(554,430,'Download',16,'#203b25',700)}${text(477,486,'Your library',19,'#ddf4bd',700)}${rect(477,505,246,78,'#2b3d30',12)}${rect(490,517,49,49,'#546b48',10)}<path d="m510 532 14 10-14 10z" fill="#d2edae"/>${text(550,535,'Saved video',15,'#e2edd9',700)}${text(550,559,'Ready to play',12,'#8fa58f')}${rect(477,596,246,78,'#2b3d30',12)}${rect(490,609,49,49,'#546b48',10)}${text(505,643,'♪',30,'#d2edae')}${text(550,625,'Saved audio',15,'#e2edd9',700)}${text(550,649,'Always with you',12,'#8fa58f')}</g><g fill="none" stroke="#355738" stroke-opacity=".14"><circle cx="600" cy="450" r="340"/><circle cx="600" cy="450" r="410"/></g>`;
await writeFile('dist/assets/flow-cover.svg',cover('Flow','Your videos. Your music. To go.','#dce7cd','#24412a',phone));

const extras = [
  ['within','Within','A space for what matters.','#d5ded4','#263d31','Your own pace.','Notes, goals, memories.'],
  ['san','SAN Portfolio','Code meets visual expression.','#dce6c7','#263321','SAN','Web / Apps / Design'],
  ['zaga','Zaga Zaga','An independent beverage concept.','#e9ebcf','#3b512d','Stay fresh.','A little more flavor.'],
  ['front-back','Front / Back','Built together.','#e3e6e8','#303b43','Front ↔ Back','A collaborative development project.'],
  ['profile','GitHub Profile','Code. Projects. Experiments.','#d5e5de','#214237','yessensiv','Building. Learning. Exploring.'],
  ['portfolio','This Portfolio','Ideas into digital experiences.','#e9e5dd','#242421','DEVELOPER','Nurdaulet Yessensary']
];
for (const [slug,name,subtitle,bg,ink,title,caption] of extras) {
  let visual = `${rect(160,230,880,480,ink,0)}${text(205,280,name,22,bg,700)}${text(205,407,title,slug==='portfolio'?65:72,bg,700)}${text(205,448,caption,21,bg)}${rect(205,493,181,46,bg,23)}${text(231,523,'Explore project',16,ink,700)}`;
  if (slug==='within') visual += `${rect(205,569,378,104,'#ffffff12')}${text(225,602,'A thought worth keeping',18,bg)}${line(225,625,320,'#ffffff25')}${rect(601,569,378,104,'#ffffff12')}${text(621,602,'Something to work toward',18,bg)}${line(621,625,286,'#ffffff25')}`;
  else if (slug==='zaga') visual += `<g transform="translate(782 335) rotate(12)">${rect(0,0,137,292,'#d1de9e',30)}${rect(5,0,127,18,'#bcc2aa',8)}${text(20,108,'ZAGA',32,ink,700)}${text(20,145,'ZAGA',32,ink,700)}${text(25,240,'FRESH',18,ink,700)}</g>`;
  else visual += `<g opacity=".55">${rect(205,589,220,61,'#ffffff16')}${rect(444,589,220,61,'#ffffff16')}${rect(683,589,296,61,'#ffffff16')}${line(224,614,148,'#ffffff35')}${line(464,614,154,'#ffffff35')}${line(705,614,210,'#ffffff35')}</g>`;
  await writeFile(`dist/assets/${slug}-cover.svg`,cover(name,subtitle,bg,ink,browser(visual)));
}

// Editorial artwork: project identities rather than interface mockups.
const artwork = [
  ['within-cover.svg','Within','A SPACE FOR WHAT MATTERS','#f1dacb','#753f35','#dc957c','orb'],
  ['san-cover.svg','SAN','DESIGN / CODE / MOTION','#171a16','#e7eedc','#c2e87d','star'],
  ['zaga-cover.svg','Zaga Zaga','A LITTLE MORE FLAVOR','#f3db68','#214c39','#81ac72','wave'],
  ['ent-math.svg','ENT Math','LEARN / PRACTICE / GROW','#173f39','#e6efdd','#a8d191','math'],
  ['dentalux-cover.svg','DentaLux','CARE WITH A HUMAN TOUCH','#d8eceb','#174f57','#80bbbd','orb'],
  ['docmind.svg','DocMind','THOUGHTS INTO CLARITY','#dedfd6','#353f35','#b6c2ac','paper'],
  ['flow-cover.svg','Flow','YOUR MEDIA. YOUR RHYTHM.','#17221b','#e7f0d8','#b5dc83','wave'],
  ['front-back-cover.svg','Front / Back','TWO SIDES. ONE EXPERIENCE.','#dbe2e5','#293f4a','#8facb7','code'],
  ['profile-cover.svg','yessensiv','CODE / PROJECTS / EXPERIMENTS','#dce7dc','#1d3d30','#9dbb9c','code'],
  ['portfolio-cover.svg','Nurdaulet','IDEAS INTO DIGITAL EXPERIENCES','#eae6de','#252621','#b2b5a5','star']
];
for (const [file,title,caption,bg,ink,accent,motif] of artwork) {
  let shape='';
  if(motif==='orb') shape=`<g transform="translate(870 470)"><circle r="250" fill="url(#sphere)"/><ellipse rx="292" ry="85" fill="none" stroke="${ink}" stroke-opacity=".35" stroke-width="2" transform="rotate(-32)"/><ellipse rx="292" ry="85" fill="none" stroke="${bg}" stroke-opacity=".65" stroke-width="2" transform="rotate(32)"/></g>`;
  if(motif==='star') shape=`<path d="M875 180Q905 410 1135 440Q905 470 875 700Q845 470 615 440Q845 410 875 180Z" fill="url(#sphere)" stroke="${accent}" stroke-width="2" transform="rotate(16 875 440)"/>`;
  if(motif==='wave') shape=`<g fill="none" stroke="${accent}" stroke-width="19" stroke-linecap="round">${Array.from({length:9},(_,i)=>`<path d="M${635+i*52} ${340+Math.sin(i)*65}v${210-Math.sin(i)*130}"/>`).join('')}</g><circle cx="870" cy="440" r="250" fill="none" stroke="${ink}" stroke-opacity=".15"/>`;
  if(motif==='math') shape=`<g transform="translate(775 255) rotate(-12)"><rect width="320" height="320" rx="40" fill="url(#sphere)"/>${text(44,219,'∑',230,bg,700)}</g><circle cx="820" cy="430" r="270" fill="none" stroke="${accent}" stroke-opacity=".3"/>`;
  if(motif==='paper') shape=`<g transform="translate(730 200) rotate(14)">${rect(24,35,300,360,accent,24)}${rect(0,0,300,360,'#f6f6ef',24)}${text(36, 90,'Aa',62,ink,700)}${line(36,146,221,accent)}${line(36,178,180,accent)}${line(36,210,215,accent)}${line(36,266,142,accent)}</g>`;
  if(motif==='code') shape=`<g transform="translate(620 240) rotate(-8)">${rect(0,0,500,320,ink,32)}${text(54,214,'</>',155,bg,700)}<circle cx="425" cy="65" r="14" fill="${accent}"/></g>`;
  const words=title.split(' ');
  const display=words.length>1?words.map((word,i)=>text(72,280+i*123,word,110,ink,700)).join(''):text(72,290,title,title.length>8?98:140,ink,700);
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><radialGradient id="sphere" cx=".28" cy=".2" r=".8"><stop stop-color="#f5f8ea"/><stop offset=".35" stop-color="${accent}"/><stop offset="1" stop-color="${ink}"/></radialGradient><linearGradient id="wash" x2="1" y2="1"><stop stop-color="${accent}" stop-opacity=".05"/><stop offset="1" stop-color="${accent}" stop-opacity=".7"/></linearGradient></defs>${rect(0,0,1200,800,bg,0)}<path d="M750 0h450v800H360Z" fill="url(#wash)"/><g opacity=".18" fill="none" stroke="${ink}"><circle cx="920" cy="420" r="370"/><circle cx="920" cy="420" r="400"/><circle cx="920" cy="420" r="430"/></g>${text(75,92,'SELECTED / '+String(artwork.findIndex(item=>item[0]===file)+1).padStart(2,'0'),18,ink)}<g transform="translate(45 75) scale(.94)">${shape}</g>${display}${text(77,words.length>1?460:357,caption,19,ink)}<path d="M74 650h130" stroke="${ink}" stroke-width="3"/>${text(75,708,'DESIGN &amp; DEVELOPMENT',18,ink)}<g transform="translate(1058 643)"><circle cx="40" cy="40" r="40" fill="${ink}"/><path d="m24 55 32-32m-32 0h32v32" fill="none" stroke="${bg}" stroke-width="3"/></g></svg>`;
  await writeFile(`dist/assets/${file}`,svg);
}

