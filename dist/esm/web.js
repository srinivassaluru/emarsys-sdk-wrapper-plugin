import { WebPlugin } from '@capacitor/core';
export class EmarsysSDKCustomWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async getUUID(value) {
        console.log('ECHO', value);
        return { value: value };
    }
}
//# sourceMappingURL=web.js.map