import ReactDOMServer from 'react-dom/server';
import { StrictMode } from 'react';
import App from './App';

export function render() {
  const html = ReactDOMServer.renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  // ✅ 수정: 객체가 아닌 순수 HTML 문자열을 반환합니다.
  return html;
}