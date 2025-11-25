import ReactDOMServer from 'react-dom/server';
import { StrictMode } from 'react';
// 기존 App 컴포넌트를 가져옵니다.
import App from './App';

// 빌드 플러그인이 호출할 함수입니다.
// React 컴포넌트를 HTML 문자열로 변환합니다.
export function render() {
  const html = ReactDOMServer.renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  // { html: '<...>' } 형태로 반환하여 플러그인이 이를 HTML에 삽입하게 합니다.
  return { html };
}