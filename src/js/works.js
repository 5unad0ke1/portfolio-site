import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getAllWorks() {
    const dir = path.resolve('./src/data/works');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.yaml'));

    const data = files.map(file => {
        const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
        return yaml.load(raw);
    });

    if (!Array.isArray(data)) {
        throw new Error('src/data/works.yaml must contain a top-level array');
    }
    return data;
}