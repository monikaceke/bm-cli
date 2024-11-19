interface IPackageProps {
    type: string;
    allowedCommands: Array<string>;
}

interface IPackage {
    [key: string]: IPackageProps;
}

export const PACKAGE_TYPES: IPackage = {
    bm_starter_s: {
        type: 'wp',
        allowedCommands: [
            'create-file',
            'remove-fe',
            'icons',
            'latest-version',
            'npmci',
            'npmi',
            'postinstall',
            'w3Validator',
        ],
    },
    bm_starter_vue: {
        type: 'vue',
        allowedCommands: ['create-file', 'icons', 'latest-version', 'npmci', 'npmi', 'w3Validator'],
    },
    bm_starter_nuxt: {
        type: 'nuxt',
        allowedCommands: ['create-file', 'icons', 'latest-version', 'npmci', 'npmi', 'postinstall', 'w3Validator'],
    },
    bm_starter_next: {
        type: 'next',
        allowedCommands: ['create-file', 'latest-version', 'npmci', 'npmi', 'w3Validator'],
    },
    bm_global: {
        type: 'global',
        allowedCommands: ['latest-version'],
    },
};
