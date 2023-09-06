'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var IconSelector = require('./index-6251b559.js');
require('vue');

var DSLibrary$1 = {
    install: function (app) {
        // Auto import all components
        for (var componentKey in IconSelector.components) {
            app.use(IconSelector.components[componentKey]);
        }
    }
};

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': DSLibrary$1,
    IconSelector: IconSelector.script
});

var DSLibrary = {
    install: function (app) {
        // Auto import all components
        for (var componentKey in components) {
            app.use(components[componentKey]);
        }
    }
};

exports.IconSelector = IconSelector.script;
exports["default"] = DSLibrary;
