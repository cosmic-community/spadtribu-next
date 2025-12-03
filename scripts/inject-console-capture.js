const fs = require('fs');
const path = require('path');

function injectScript(htmlPath) {
  if (!fs.existsSync(htmlPath)) return;
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  if (html.includes('dashboard-console-capture.js')) {
    return;
  }
  
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `  ${scriptTag}\n  </head>`);
  } else if (html.includes('<body>')) {
    html = html.replace('<body>', `<body>\n  ${scriptTag}`);
  }
  
  fs.writeFileSync(htmlPath, html);
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.html')) {
      injectScript(fullPath);
    }
  });
}

const outputDir = path.join(process.cwd(), '.next');
processDirectory(outputDir);

console.log('Console capture script injection complete!');