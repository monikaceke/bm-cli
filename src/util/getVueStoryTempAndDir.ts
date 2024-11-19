import { IVueStoryTempAndDir } from '../interfaces/interfaces';

export const getVueStoryTempAndDir = (packageType: string): IVueStoryTempAndDir => {
    switch (packageType) {
        case 'nuxt':
            return {
                temp: 'temp-vue-story.txt',
                dir: 'stories',
            };
        case 'vue':
            return {
                temp: 'temp-vuets-story.txt',
                dir: 'src/stories',
            };
        default:
            return {
                temp: '',
                dir: '',
            };
    }
};
