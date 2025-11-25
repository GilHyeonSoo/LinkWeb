// Node.js 환경에서 실행될 스크립트입니다.
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. 빌드된 index.html 템플릿 로드
const templatePath = path.resolve(__dirname, 'dist', 'client', 'index.html');
const template = await fs.readFile(templatePath, 'utf-8');

// 2. 서버 번들(SSR 모듈) 로드
const ssrManifestPath = path.resolve(__dirname, 'dist', 'server', 'entry-server.js');
const { render } = await import(ssrManifestPath); 

// 3. 렌더링 실행
// ✅ 수정: 이제 render()는 순수 문자열을 반환하므로 바로 변수에 저장합니다.
const appHtml = render(); 

// 4. HTML 템플릿에 삽입 및 저장
// ✅ 수정: index.html에 넣어둔 '' 주석을 찾아 실제 내용으로 바꿉니다.
const html = template.replace('', appHtml);

// 5. 최종 HTML 파일을 dist/index.html로 저장
const finalPath = path.resolve(__dirname, 'dist', 'index.html');
await fs.writeFile(finalPath, html);

console.log('✅ Prerender successful! Static HTML generated at dist/index.html');