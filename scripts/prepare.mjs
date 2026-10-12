import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const context = { window: {} };
vm.runInNewContext(await readFile(path.join(root, 'content.js'), 'utf8'), context);
const routes = ['work', ...context.window.portfolio.projects.map(project => `work/${project.slug}`)];
for (const route of routes) {
  if (!/^work(?:\/[a-zA-Z0-9_-]+)?$/.test(route)) throw new Error(`Invalid project slug: ${route}`);
  const directory = path.join(root, route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
}
await writeFile(path.join(root, '404.html'), html);
console.log(`Prepared home, ${routes.length} work routes, and the 404 page.`);
