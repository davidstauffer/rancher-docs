"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[73542],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 93322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const frontMatter = {
    title: 'Custom Branding'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding",
    "id": "how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding",
    "title": "Custom Branding",
    "description": "Rancher v2.6 introduced the ability to customize Rancher’s branding and navigation links.",
    "source": "@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding.md",
    "sourceDirName": "how-to-guides/new-user-guides/authentication-permissions-and-global-configuration",
    "slug": "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding",
    "permalink": "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/custom-branding.md",
    "tags": [],
    "version": "current",
    "lastUpdatedAt": 1670452794,
    "formattedLastUpdatedAt": "Dec 7, 2022",
    "frontMatter": {
        "title": "Custom Branding"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Configuring a Global Default Private Registry",
        "permalink": "/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"
    },
    "next": {
        "title": "Cluster Administration",
        "permalink": "/pages-for-subheaders/manage-clusters"
    }
};
const assets = {};
const toc = [
    {
        value: 'Changing Brand Settings',
        id: 'changing-brand-settings',
        level: 2
    },
    {
        value: 'Brand Configuration',
        id: 'brand-configuration',
        level: 2
    },
    {
        value: 'Private Label Company Name',
        id: 'private-label-company-name',
        level: 3
    },
    {
        value: 'Support Links',
        id: 'support-links',
        level: 3
    },
    {
        value: 'Logo',
        id: 'logo',
        level: 3
    },
    {
        value: 'Primary Color',
        id: 'primary-color',
        level: 3
    },
    {
        value: 'Fixed Banners',
        id: 'fixed-banners',
        level: 3
    },
    {
        value: 'Custom Navigation Links',
        id: 'custom-navigation-links',
        level: 2
    },
    {
        value: 'Adding a Custom Navigation Link',
        id: 'adding-a-custom-navigation-link',
        level: 3
    },
    {
        value: 'Link Configuration',
        id: 'link-configuration',
        level: 2
    },
    {
        value: '<code>name</code>',
        id: 'name',
        level: 3
    },
    {
        value: '<code>group</code>',
        id: 'group',
        level: 3
    },
    {
        value: '<code>iconSrc</code>',
        id: 'iconsrc',
        level: 3
    },
    {
        value: '<code>annotation</code>',
        id: 'annotation',
        level: 3
    },
    {
        value: '<code>label</code>',
        id: 'label',
        level: 3
    },
    {
        value: '<code>sideLabel</code>',
        id: 'sidelabel',
        level: 3
    },
    {
        value: '<code>target</code>',
        id: 'target',
        level: 3
    },
    {
        value: '<code>toService</code>',
        id: 'toservice',
        level: 3
    },
    {
        value: '<code>toUrl</code>',
        id: 'tourl',
        level: 3
    },
    {
        value: 'Link Examples',
        id: 'link-examples',
        level: 2
    },
    {
        value: 'Example of Link with <code>toUrl</code>',
        id: 'example-of-link-with-tourl',
        level: 3
    },
    {
        value: 'Example of Link with <code>toService</code>',
        id: 'example-of-link-with-toservice',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const Tabs = makeShortcode("Tabs");
const TabItem = makeShortcode("TabItem");
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components  } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher v2.6 introduced the ability to customize Rancher’s branding and navigation links.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "changing-brand-settings"
    }, `Changing Brand Settings`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "title": "Prerequisite:",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `You will need to have at least cluster member permissions.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To configure the brand settings,`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰ > Global settings`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Branding`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "brand-configuration"
    }, `Brand Configuration`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "private-label-company-name"
    }, `Private Label Company Name`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This option replaces “Rancher” with the value you provide in most places. Files that need to have Rancher in the name, such as “rancher-compose.yml”, will not be changed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "support-links"
    }, `Support Links`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Use a url address to send new "File an Issue" reports instead of sending users to the Github issues page. Optionally show Rancher community support links.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "logo"
    }, `Logo`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Upload light and dark logos to replace the Rancher logo in the top-level navigation header.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "primary-color"
    }, `Primary Color`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can override the primary color used throughout the UI with a custom color of your choice.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "fixed-banners"
    }, `Fixed Banners`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Tabs, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabItem, {
        value: "Rancher before v2.6.4",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Display a custom fixed banner in the header, footer, or both.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabItem, {
        value: "Rancher v2.6.4+",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Display a custom fixed banner in the header, footer, or both.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `As of Rancher v2.6.4, configuration of fixed banners has moved from the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Branding`), ` tab to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Banners`), ` tab.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `To configure banner settings,`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰ > Global settings`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Banners`), `.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "custom-navigation-links"
    }, `Custom Navigation Links`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In this section, you'll learn how to configure the links in the left navigation bar of the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Cluster Dashboard`), `. To get to the cluster dashboard,`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `In the upper left corner, click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `☰ > Cluster Management`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `On the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Clusters`), ` page, go to the cluster where you want custom navigation links and click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "li"
    }, `Explore`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It can be useful to add a link for quick access to services installed on a cluster. For example, you could add a link to the Kiali UI for clusters with Istio installed, or you could add a link to the Grafana UI for clusters with Rancher monitoring installed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The custom links don't affect who has access to each service.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Links can be created at the top level and multiple links can be grouped together.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "adding-a-custom-navigation-link"
    }, `Adding a Custom Navigation Link`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "title": "Prerequisite:",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `You will need to have at least cluster member or project member permissions.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `☰ > Cluster Management`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `On the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Clusters`), ` page, go to the cluster where you would like to add custom navigation links and click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Explore`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `In the top navigation menu, click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `🔍 (Resource Search)`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Type `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Nav`), ` and click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Nav Links`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Create from YAML`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `The simplest way to create a navigation link is to add these fields:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `name: linkname
toURL: https://example.com
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `For more details on setting up links, including optional fields, see `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "#link-configuration"
    }, `Link Configuration.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Click `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Create`), `.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "link-configuration"
    }, `Link Configuration`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "name"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `name`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Display name for the link. Required.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "group"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `group`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Name of a group of links that expands when clicked.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Optional. If not provided, the link appears standalone.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Groups are displayed separately from standalone links, as shown below:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Screenshot of group and standalone link",
        src: (__webpack_require__(59287)/* ["default"] */ .Z),
        width: "456",
        height: "160"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "iconsrc"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `iconSrc`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Icon source in in base64 format.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Below is an example of the Grafana logo in base64 format:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `data:image/png;base64,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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "annotation"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `annotation`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `A Kubernetes annotation for the NavLink custom resource.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "label"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `label`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `A Kubernetes label for the NavLink custom resource.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "sidelabel"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `sideLabel`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Label that appears in the left navigation bar`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "target"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `target`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Sets the target property of the link's anchor tag (`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `<a>`), `), which (depending on browsers) determines if it opens in a new window or in an existing tab.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The default value is `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `_self`), `, which opens the link on the current tab. To open the link in a new window or tab, set the target to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `_blank`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For more information about the target property, see `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.w3schools.com/tags/att_a_target.asp"
    }, `this page.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "toservice"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `toService`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Has five fields that are constructed to create a URL like the following: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `https://<RANCHER_SERVER_URL>/k8s/clusters/<CLUSTER>/k8s/namespace/<NAMESPACE>/service/<SCHEME>:<NAME>:<PORT>/proxy/<PATH>`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For example, a link to a monitoring service can be set up as follows:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `name: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `rancher-monitoring-grafana`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `namespace: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `cattle-monitoring-system`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `path: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `proxy/?orgId=1`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `port: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `"80"`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `scheme: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `http`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It is required to provide either the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `toService`), ` directive or the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `toURL`), ` directive.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "tourl"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `toUrl`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Can be any link, even to links outside of the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It is required to provide either the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `toService`), ` directive or the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `toURL`), ` directive.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "link-examples"
    }, `Link Examples`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "example-of-link-with-tourl"
    }, `Example of Link with `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `toUrl`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This example NavLink YAML shows an example of configuring a NavLink to a Grafana dashboard:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: ui.cattle.io/v1
kind: NavLink
metadata:
  name: grafana
spec:
  group: "Monitoring Dashboards"
  toURL: https://<RANCHER_SERVER_URL>/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-grafana:80/proxy/?orgId=1
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Adding the above YAML results in a link to Grafana being created, as shown in the following screenshot:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Screenshot of Grafana Link",
        src: (__webpack_require__(66131)/* ["default"] */ .Z),
        width: "1824",
        height: "810"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "example-of-link-with-toservice"
    }, `Example of Link with `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `toService`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This example YAML shows an example of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `toService`), ` used for the link target:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: ui.cattle.io/v1
kind: NavLink
metadata:
  annotations:
    key: annotation
    labels:
      key: label
  name: navlinkname
spec:
  description: This is a description field # Optional.
  group: "group1" # Optional. If not provided, the links appear standalone.
  iconSrc: data:image/jpeg;base64,[icon source string is clipped for brevity]
  label: This is a label # Optional.
  sideLabel: A side label. # Optional.
  target: _blank #Optional. _blank opens the link in a new tab or window.
  toService: # toService or #toUrl needs to be provided.
    name: rancher-monitoring-grafana
    namespace: cattle-monitoring-system
    path: proxy/?orgId=1
    port: "80"
    scheme: http
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Adding the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `toService`), ` parameters above results in a link to Grafana being created, as shown in the following screenshot:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Screenshot of Grafana Link",
        src: (__webpack_require__(80952)/* ["default"] */ .Z),
        width: "1526",
        height: "432"
    })));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 66131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/example-grafana-link-d630011e61c4205d0c886b6edde46beb.png");

/***/ }),

/***/ 80952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/example-service-link-b67510fbaec8699a4df251046d606e89.png");

/***/ }),

/***/ 59287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/grouped-vs-standalone-links-c6501b902b9efe59fdae3dc683446c32.png");

/***/ })

}]);