const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

let count = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // text-white -> text-text
    content = content.replace(/\btext-white\b/g, 'text-text');

    // text-white/X -> text-text/X
    content = content.replace(/\btext-white\/90\b/g, 'text-text/90');
    content = content.replace(/\btext-white\/80\b/g, 'text-text/80');
    content = content.replace(/\btext-white\/70\b/g, 'text-text/70');

    // bg-white/5 -> bg-card
    content = content.replace(/\bbg-white\/5\b/g, 'bg-card');
    
    // bg-white/10 -> bg-card-hover
    content = content.replace(/\bbg-white\/10\b/g, 'bg-card-hover');

    // border-white/10 -> border-border
    content = content.replace(/\bborder-white\/10\b/g, 'border-border');

    // border-white/20 -> border-border-hover
    content = content.replace(/\bborder-white\/20\b/g, 'border-border-hover');
    
    // border-white/30 -> border-border-hover
    content = content.replace(/\bborder-white\/30\b/g, 'border-border-hover');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        count++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Finished updating ${count} files.`);
