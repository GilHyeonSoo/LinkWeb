// Node.js 환경에서 실행될 스크립트입니다.
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. 빌드된 index.html 템플릿 로드
const templatePath = path.resolve(__dirname, 'dist', 'index.html');  // ⬅️ client 제거
const template = await fs.readFile(templatePath, 'utf-8');

// 2. 서버 번들(SSR 모듈) 로드
const ssrManifestPath = path.resolve(__dirname, 'dist', 'server', 'entry-server.js');
const { render } = await import(ssrManifestPath); 

// 3. 렌더링 실행
const appHtml = render(); 

// 4. HTML 템플릿에 삽입
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

// 5. 최종 HTML 파일을 dist/index.html로 저장
const finalPath = path.resolve(__dirname, 'dist', 'index.html');
await fs.writeFile(finalPath, html);

console.log('✅ Prerender successful! Static HTML generated at dist/index.html');
