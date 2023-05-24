var capacitorEmarsysSDKCustom = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
