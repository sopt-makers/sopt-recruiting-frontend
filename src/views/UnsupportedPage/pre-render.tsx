import ReactDOM from 'react-dom/server';
import fs from 'node:fs';
import path from 'node:path';
import UnsupportedPage from './index';

const str = ReactDOM.renderToString(<UnsupportedPage />);

const html = `
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SOPT - 지원하지 않는 브라우저 입니다</title>
      <link rel="stylesheet" href="./unsupported.css" />
    </head>
    <body>
      ${str}
    </body>
  </html>
`;

fs.writeFileSync(path.resolve('./public/unsupported.html'), html, 'utf-8');
