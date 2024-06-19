(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3991:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Fira_Code_22e02c', '__Fira_Code_Fallback_22e02c'","fontStyle":"normal"},
	"className": "__className_22e02c"
};


/***/ }),

/***/ 275:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Raleway_28057e', '__Raleway_Fallback_28057e'","fontStyle":"normal"},
	"className": "__className_28057e"
};


/***/ }),

/***/ 2434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"arguments":[{"subsets":["latin"]}],"import":"Raleway","path":"src\\pages\\_app.tsx","variableName":"raleway"}
var target_arguments_subsets_latin_import_Raleway_path_src_pages_app_tsx_variableName_raleway_ = __webpack_require__(275);
var target_arguments_subsets_latin_import_Raleway_path_src_pages_app_tsx_variableName_raleway_default = /*#__PURE__*/__webpack_require__.n(target_arguments_subsets_latin_import_Raleway_path_src_pages_app_tsx_variableName_raleway_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"arguments":[{"subsets":["latin"],"weight":["300","400","500","600","700"]}],"import":"Fira_Code","path":"src\\pages\\_app.tsx","variableName":"firaCode"}
var target_arguments_subsets_latin_weight_300_400_500_600_700_import_Fira_Code_path_src_pages_app_tsx_variableName_firaCode_ = __webpack_require__(3991);
var target_arguments_subsets_latin_weight_300_400_500_600_700_import_Fira_Code_path_src_pages_app_tsx_variableName_firaCode_default = /*#__PURE__*/__webpack_require__.n(target_arguments_subsets_latin_weight_300_400_500_600_700_import_Fira_Code_path_src_pages_app_tsx_variableName_firaCode_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./src/scss/globals.css
var globals = __webpack_require__(7534);
// EXTERNAL MODULE: ./src/scss/index.scss
var scss = __webpack_require__(3014);
;// CONCATENATED MODULE: ./src/pages/_app.tsx






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "ca57933e2ea73f07",
                dynamic: [
                    (target_arguments_subsets_latin_import_Raleway_path_src_pages_app_tsx_variableName_raleway_default()).style.fontFamily,
                    (target_arguments_subsets_latin_weight_300_400_500_600_700_import_Fira_Code_path_src_pages_app_tsx_variableName_firaCode_default()).style.fontFamily
                ],
                children: `:root{--raleway:${(target_arguments_subsets_latin_import_Raleway_path_src_pages_app_tsx_variableName_raleway_default()).style.fontFamily};--fira-code:${(target_arguments_subsets_latin_weight_300_400_500_600_700_import_Fira_Code_path_src_pages_app_tsx_variableName_firaCode_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: style_default().dynamic([
                    [
                        "ca57933e2ea73f07",
                        [
                            (target_arguments_subsets_latin_import_Raleway_path_src_pages_app_tsx_variableName_raleway_default()).style.fontFamily,
                            (target_arguments_subsets_latin_weight_300_400_500_600_700_import_Fira_Code_path_src_pages_app_tsx_variableName_firaCode_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            ";"
        ]
    });
}


/***/ }),

/***/ 7534:
/***/ (() => {



/***/ }),

/***/ 3014:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2434));
module.exports = __webpack_exports__;

})();