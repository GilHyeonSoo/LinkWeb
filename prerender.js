// Node.js 환경에서 실행될 스크립트입니다.
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. 빌드된 index.html 템플릿 로드
// dist/client/index.html 경로 확인
const templatePath = path.resolve(__dirname, 'dist', 'client', 'index.html');

// 💡 try-catch 블록을 사용하여 파일 읽기 오류를 방지하고, 
// 💡 readFile의 결과를 변수 template에 할당합니다.
const template = await fs.readFile(templatePath, 'utf-8');

// 2. 서버 번들(SSR 모듈) 로드
const ssrManifestPath = path.resolve(__dirname, 'dist', 'server', 'entry-server.js');
// 💡 render 함수가 객체가 아닌 순수 HTML 문자열을 반환하도록 수정했기 때문에 
// 💡 { render } = ... 로 구조 분해 할당하지 않습니다.
const { render } = await import(ssrManifestPath); 

// 3. 렌더링 실행
// 💡 render() 함수는 이제 순수한 HTML 문자열을 반환해야 합니다.
const appHtml = render(); 

// 4. HTML 템플릿에 삽입 및 저장
// 💡 '' Placeholder를 찾아 서버 렌더링된 HTML로 대체합니다.
// 💡 이 코드가 실패했던 이전 단계와 달리, 이제 Placeholder가 index.html에 있습니다.
const html = template.replace(``, appHtml);

// 5. 최종 HTML 파일을 dist/index.html로 저장
const finalPath = path.resolve(__dirname, 'dist', 'index.html');
await fs.writeFile(finalPath, html);

console.log('✅ Prerender successful! Static HTML generated at dist/index.html');