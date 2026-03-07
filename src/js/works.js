import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getAllWorks() {
    const file = path.resolve('./src/data/works.yaml');
    const raw = fs.readFileSync(file, 'utf-8');
    const data = yaml.load(raw);
    return Array.isArray(data) ? data : [];
}