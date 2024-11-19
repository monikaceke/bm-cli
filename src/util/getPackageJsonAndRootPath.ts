import { existsSync, readdirSync } from 'fs';
import { resolve } from 'path';

interface IJsonAndRootPath {
    rootPath: string;
    jsonPath: string;
}

export const getPackageJsonAndRootPath = (): IJsonAndRootPath => {
    try {
        if (existsSync(resolve(process.cwd(), 'wp-content', 'themes'))) {
            const themesDir = readdirSync(resolve(process.cwd(), 'wp-content', 'themes'));
            if (themesDir.length) {
                const theme = themesDir.find((dir) => dir.startsWith('bm-'));
                if (theme) {
                    return {
                        jsonPath: resolve(process.cwd(), 'wp-content', 'themes', theme, 'package.json'),
                        rootPath: resolve(process.cwd(), 'wp-content', 'themes', theme),
                    };
                }
            }
        }
        return { jsonPath: resolve(process.cwd(), 'package.json'), rootPath: resolve(process.cwd()) };
    } catch (err) {
        console.log(err);
        return { jsonPath: '', rootPath: '' };
    }
};
