const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Clean cache
execSync('npx rimraf node_modules/.cache/gh-pages', { stdio: 'inherit' });

// Build
execSync('vite build', { stdio: 'inherit' });

// Copy index.html → 404.html
fs.copyFileSync(path.join('dist', 'index.html'), path.join('dist', '404.html'));

// Deploy
execSync('npx gh-pages -d dist', { stdio: 'inherit' });
