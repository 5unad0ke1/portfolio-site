import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getAllWorks() {
    const file = path.resolve('./src/data/works.yaml');
    const raw = fs.readFileSync(file, 'utf-8');
    const data = yaml.load(raw);
    if (!Array.isArray(data)) {
        throw new Error('src/data/works.yaml must contain a top-level array');
    }
    return data;
}