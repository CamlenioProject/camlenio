const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const srcDir = path.join(process.cwd(), 'src');

function getAllFiles(dir, exts, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, exts, fileList);
    } else {
      if (!exts || exts.some(ext => file.endsWith(ext))) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const publicFiles = getAllFiles(publicDir, ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.mp4', '.glb']);
const srcFiles = getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js', '.css']);

let srcContents = '';
for (const src of srcFiles) {
  srcContents += fs.readFileSync(src, 'utf-8') + '\n';
}

const unused = [];
for (const pub of publicFiles) {
  const filename = path.basename(pub);
  const relPath = pub.replace(publicDir, '').replace(/\\/g, '/'); // e.g. /favicon.ico
  
  if (!srcContents.includes(filename)) {
    unused.push(pub);
  } else {
    // If filename is included, it might be a coincidence (like "logo.png" vs "/Homepage/logo.png")
    // But if we delete based on exact relPath not being present:
    // Sometimes paths are constructed like `/Homepage/${folder}/bg.png`
    // So simple filename match is safer to avoid false positives.
  }
}

console.log('Total public images:', publicFiles.length);
console.log('Unused public images:', unused.length);
fs.writeFileSync('unused_files.json', JSON.stringify(unused, null, 2));
