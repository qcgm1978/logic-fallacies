System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "lib/main.js",
      "lib/bootstrap.js",
      "npm:underscore@1.8.3.js",
      "npm:underscore@1.8.3/underscore.js",
      "npm:jquery@3.3.1.js",
      "npm:jquery@3.3.1/dist/jquery.js",
      "npm:lodash-node@3.10.2/modern/lang/isEqual.js",
      "npm:lodash-node@3.10.2/modern/internal/bindCallback.js",
      "npm:lodash-node@3.10.2/modern/utility/identity.js",
      "npm:lodash-node@3.10.2/modern/internal/baseIsEqual.js",
      "npm:lodash-node@3.10.2/modern/internal/isObjectLike.js",
      "npm:lodash-node@3.10.2/modern/lang/isObject.js",
      "npm:lodash-node@3.10.2/modern/internal/baseIsEqualDeep.js",
      "npm:lodash-node@3.10.2/modern/lang/isTypedArray.js",
      "npm:lodash-node@3.10.2/modern/internal/isLength.js",
      "npm:lodash-node@3.10.2/modern/lang/isArray.js",
      "npm:lodash-node@3.10.2/modern/internal/getNative.js",
      "npm:lodash-node@3.10.2/modern/lang/isNative.js",
      "npm:lodash-node@3.10.2/modern/lang/isFunction.js",
      "npm:lodash-node@3.10.2/modern/internal/equalObjects.js",
      "npm:lodash-node@3.10.2/modern/object/keys.js",
      "npm:lodash-node@3.10.2/modern/internal/shimKeys.js",
      "npm:lodash-node@3.10.2/modern/object/keysIn.js",
      "npm:lodash-node@3.10.2/modern/internal/isIndex.js",
      "npm:lodash-node@3.10.2/modern/lang/isArguments.js",
      "npm:lodash-node@3.10.2/modern/internal/isArrayLike.js",
      "npm:lodash-node@3.10.2/modern/internal/getLength.js",
      "npm:lodash-node@3.10.2/modern/internal/baseProperty.js",
      "npm:lodash-node@3.10.2/modern/internal/equalByTag.js",
      "npm:lodash-node@3.10.2/modern/internal/equalArrays.js",
      "npm:lodash-node@3.10.2/modern/internal/arraySome.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "components/jquery": "github:components/jquery@3.2.1",
    "core-js": "npm:core-js@1.2.7",
    "jquery": "npm:jquery@3.3.1",
    "lodash-node": "npm:lodash-node@3.10.2",
    "myname": "npm:underscore@1.8.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash-node@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
