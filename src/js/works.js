import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getAllWorks() {
    const dir = path.resolve('./src/data/works');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.yaml'));

    const data = files.map(file => {
        const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
        const work = yaml.load(raw);

        if (!work || typeof work !== 'object' || Array.isArray(work)) {
            throw new Error(`${file} must contain a single work object`);
        }

        const requiredKeys = ['id', 'name', 'about', 'role', 'status', 'languages', 'description', 'image'];
        for (const key of requiredKeys) {
            if (!(key in work)) {
                throw new Error(`${file} is missing required field: ${key}`);
            }
        }

        if (!Array.isArray(work.languages)) {
            throw new Error(`${file} field "languages" must be an array`);
        }

        return work;
    });

    return data;
}