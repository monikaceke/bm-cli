import { getAllowedCommands } from '../util/getAllowedCommands';

describe('util/getAllowedCommands - testing allowed commands', () => {
    it('should return latest command only if package json is invalid', () => {
        const allowedCommands = getAllowedCommands(null);
        expect(allowedCommands).toStrictEqual(['latest-version']);
    });
    it("should return latest command only if package json doesn't contain forwardslash key", () => {
        const packageJson = { name: 'test-package' };
        const allowedCommands = getAllowedCommands(packageJson);
        expect(allowedCommands).toStrictEqual(['latest-version']);
    });
    it('should return wp allowed commands if wp package is found', () => {
        const packageJson = { forwardslash: 'bm_starter_s' };
        const allowedCommands = getAllowedCommands(packageJson);
        expect(allowedCommands).toStrictEqual([
            'create-file',
            'remove-fe',
            'icons',
            'latest-version',
            'npmci',
            'npmi',
            'postinstall',
            'w3Validator',
        ]);
    });
    it('should return vue allowed commands if vue package is found', () => {
        const packageJson = { forwardslash: 'bm_starter_vue' };
        const allowedCommands = getAllowedCommands(packageJson);
        expect(allowedCommands).toStrictEqual([
            'create-file',
            'icons',
            'latest-version',
            'npmci',
            'npmi',
            'w3Validator',
        ]);
    });
    it('should return nuxt allowed commands if nuxt package is found', () => {
        const packageJson = { forwardslash: 'bm_starter_nuxt' };
        const allowedCommands = getAllowedCommands(packageJson);
        expect(allowedCommands).toStrictEqual([
            'create-file',
            'icons',
            'latest-version',
            'npmci',
            'npmi',
            'postinstall',
            'w3Validator',
        ]);
    });
    it('should return next allowed commands if next package is found', () => {
        const packageJson = { forwardslash: 'bm_starter_next' };
        const allowedCommands = getAllowedCommands(packageJson);
        expect(allowedCommands).toStrictEqual(['create-file', 'latest-version', 'npmci', 'npmi', 'w3Validator']);
    });
});
