'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const EmarsysSDKCustom = core.registerPlugin('EmarsysSDKCustom', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.EmarsysSDKCustomWeb()),
});

class EmarsysSDKCustomWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async getUUID(value) {
        console.log('ECHO', value);
        return { value: value };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    EmarsysSDKCustomWeb: EmarsysSDKCustomWeb
});

exports.EmarsysSDKCustom = EmarsysSDKCustom;
//# sourceMappingURL=plugin.cjs.js.map
