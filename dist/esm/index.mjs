import { c as components$1, s as script } from './index-12cebec5.mjs';
export { s as IconSelector } from './index-12cebec5.mjs';
import 'vue';

var DSLibrary$1 = {
    install: function (app) {
        // Auto import all components
        for (var componentKey in components$1) {
            app.use(components$1[componentKey]);
        }
    }
};

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': DSLibrary$1,
    IconSelector: script
});

var DSLibrary = {
    install: function (app) {
        // Auto import all components
        for (var componentKey in components) {
            app.use(components[componentKey]);
        }
    }
};

export { DSLibrary as default };
