import { registerPlugin } from '@capacitor/core';
const EmarsysSDKCustom = registerPlugin('EmarsysSDKCustom', {
    web: () => import('./web').then(m => new m.EmarsysSDKCustomWeb()),
});
export * from './definitions';
export { EmarsysSDKCustom };
//# sourceMappingURL=index.js.map