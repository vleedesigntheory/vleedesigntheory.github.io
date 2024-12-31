(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{264:function(n,e,t){"use strict";t.r(e);var o=t(0),r=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"vue脚手架热更新技术探秘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue脚手架热更新技术探秘"}},[n._v("#")]),n._v(" Vue脚手架热更新技术探秘")]),n._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),t("p",[n._v("热替换(Hot Module Replacement)或热重载(Hot Reload)是指在不停机状态下，实时更新，在前端利于来说，在各大框架中及库中都有体现，比如NG从5开始就提供了热更新，RN也有对应的热更新技术，其实客户端技术很早就已经有这方面的探索，本文主要针对Vue脚手架的热更新，其实主要是"),t("a",{attrs:{href:"https://github.com/vuejs/vue-hot-reload-api.git",target:"_blank",rel:"noopener noreferrer"}},[n._v("Vue-hot-reload-api"),t("OutboundLink")],1),n._v("这个包的应用，对webpack的HMR比较感兴趣的同学推荐冉四夕大佬的这篇文章"),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/30669007",target:"_blank",rel:"noopener noreferrer"}},[n._v("Webpack HMR 原理解析"),t("OutboundLink")],1),n._v("，多说一句，个人认为Webpack可能是最好的node.js的工具库应用。")]),n._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[n._v("#")]),n._v(" 目录")]),n._v(" "),t("ul",[t("li",[n._v("vue-cli脚手架结构")]),n._v(" "),t("li",[n._v("vue-hot-reload-api源码分析")]),n._v(" "),t("li",[n._v("vue-cli热更新 vs webpack热更新")])]),n._v(" "),t("h2",{attrs:{id:"探索案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#探索案例"}},[n._v("#")]),n._v(" 探索案例")]),n._v(" "),t("h3",{attrs:{id:"vue-cli脚手架结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli脚手架结构"}},[n._v("#")]),n._v(" vue-cli脚手架结构")]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/hot20200620/hot01.jpg",alt:"图片"}})]),n._v(" "),t("p",[n._v("[目录结构]")]),n._v(" "),t("ul",[t("li",[n._v("bin\n"),t("ul",[t("li",[n._v("vue")]),n._v(" "),t("li",[n._v("vue-build")]),n._v(" "),t("li",[n._v("vue-init")]),n._v(" "),t("li",[n._v("vue-list")])])]),n._v(" "),t("li",[n._v("lib\n"),t("ul",[t("li",[n._v("ask.js (自定义工具-用于询问开发者)")]),n._v(" "),t("li",[n._v("check-version.js")]),n._v(" "),t("li",[n._v("eval.js")]),n._v(" "),t("li",[n._v("filter.js (自定义工具-用于文件过滤)")]),n._v(" "),t("li",[n._v("generate.js")]),n._v(" "),t("li",[n._v("git-user.js")]),n._v(" "),t("li",[n._v("local-path.js")]),n._v(" "),t("li",[n._v("logger.js (自定义工具-用于日志打印)")]),n._v(" "),t("li",[n._v("options.js (自定义工具-用于获取模板配置)")]),n._v(" "),t("li",[n._v("warnings.js")])])])]),n._v(" "),t("p",[n._v("[目录描述] vue-cli2的目录结构就是bin下的相关模块，vue-cli最新版将各个模块又单独抽成了独立的文件，并引入了插件机pwa等相关周边的工具引入，使得脚手架更加丰富(见下图)，但主要构建流程并未改变，主要就是在bin目录下去配置相关的命令，主要用到了commander处理命令行的包，对于想独立开发个人脚手架的同学可以参考这两篇文章"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000006190814",target:"_blank",rel:"noopener noreferrer"}},[n._v("教你从零开始搭建一款前端脚手架工具"),t("OutboundLink")],1),n._v("，"),t("a",{attrs:{href:"https://www.jianshu.com/p/749b22170b7b",target:"_blank",rel:"noopener noreferrer"}},[n._v("走进Vue-cli源码，自己动手搭建前端脚手架工具"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/hot20200620/hot02.jpeg",alt:"图片"}})]),n._v(" "),t("h3",{attrs:{id:"vue-hot-reload-api源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-hot-reload-api源码分析"}},[n._v("#")]),n._v(" vue-hot-reload-api源码分析")]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/hot20200620/hot03.jpeg",alt:"图片"}})]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let Vue // late bind\nlet version\nconst map = Object.create(null)\nif (typeof window !== 'undefined') {\n  window.__VUE_HOT_MAP__ = map\n}\nlet installed = false\nlet isBrowserify = false\nlet initHookName = 'beforeCreate'\n\nexports.install = (vue, browserify) => {\n  if (installed) return\n  installed = true\n\n  Vue = vue.__esModule ? vue.default : vue\n  version = Vue.version.split('.').map(Number)\n  isBrowserify = browserify\n\n  // compat with < 2.0.0-alpha.7\n  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {\n    initHookName = 'init'\n  }\n\n  exports.compatible = version[0] >= 2\n  if (!exports.compatible) {\n    console.warn(\n      '[HMR] You are using a version of vue-hot-reload-api that is ' +\n        'only compatible with Vue.js core ^2.0.0.'\n    )\n    return\n  }\n}\n\n/**\n * Create a record for a hot module, which keeps track of its constructor\n * and instances\n *\n * @param {String} id\n * @param {Object} options\n */\n\nexports.createRecord = (id, options) => {\n  if(map[id]) return\n\n  let Ctor = null\n  if (typeof options === 'function') {\n    Ctor = options\n    options = Ctor.options\n  }\n  makeOptionsHot(id, options)\n  map[id] = {\n    Ctor,\n    options,\n    instances: []\n  }\n}\n\n/**\n * Check if module is recorded\n *\n * @param {String} id\n */\n\nexports.isRecorded = (id) => {\n  return typeof map[id] !== 'undefined'\n}\n\n/**\n * Make a Component options object hot.\n *\n * @param {String} id\n * @param {Object} options\n */\n\nfunction makeOptionsHot(id, options) {\n  if (options.functional) {\n    const render = options.render\n    options.render = (h, ctx) => {\n      const instances = map[id].instances\n      if (ctx && instances.indexOf(ctx.parent) < 0) {\n        instances.push(ctx.parent)\n      }\n      return render(h, ctx)\n    }\n  } else {\n    injectHook(options, initHookName, function() {\n      const record = map[id]\n      if (!record.Ctor) {\n        record.Ctor = this.constructor\n      }\n      record.instances.push(this)\n    })\n    injectHook(options, 'beforeDestroy', function() {\n      const instances = map[id].instances\n      instances.splice(instances.indexOf(this), 1)\n    })\n  }\n}\n\n/**\n * Inject a hook to a hot reloadable component so that\n * we can keep track of it.\n *\n * @param {Object} options\n * @param {String} name\n * @param {Function} hook\n */\n\nfunction injectHook(options, name, hook) {\n  const existing = options[name]\n  options[name] = existing\n    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]\n    : [hook]\n}\n\nfunction tryWrap(fn) {\n  return (id, arg) => {\n    try {\n      fn(id, arg)\n    } catch (e) {\n      console.error(e)\n      console.warn(\n        'Something went wrong during Vue component hot-reload. Full reload required.'\n      )\n    }\n  }\n}\n\nfunction updateOptions (oldOptions, newOptions) {\n  for (const key in oldOptions) {\n    if (!(key in newOptions)) {\n      delete oldOptions[key]\n    }\n  }\n  for (const key in newOptions) {\n    oldOptions[key] = newOptions[key]\n  }\n}\n\nexports.rerender = tryWrap((id, options) => {\n  const record = map[id]\n  if (!options) {\n    record.instances.slice().forEach(instance => {\n      instance.$forceUpdate()\n    })\n    return\n  }\n  if (typeof options === 'function') {\n    options = options.options\n  }\n  if (record.Ctor) {\n    record.Ctor.options.render = options.render\n    record.Ctor.options.staticRenderFns = options.staticRenderFns\n    record.instances.slice().forEach(instance => {\n      instance.$options.render = options.render\n      instance.$options.staticRenderFns = options.staticRenderFns\n      // reset static trees\n      // pre 2.5, all static trees are cached together on the instance\n      if (instance._staticTrees) {\n        instance._staticTrees = []\n      }\n      // 2.5.0\n      if (Array.isArray(record.Ctor.options.cached)) {\n        record.Ctor.options.cached = []\n      }\n      // 2.5.3\n      if (Array.isArray(instance.$options.cached)) {\n        instance.$options.cached = []\n      }\n\n      // post 2.5.4: v-once trees are cached on instance._staticTrees.\n      // Pure static trees are cached on the staticRenderFns array\n      // (both already reset above)\n\n      // 2.6: temporarily mark rendered scoped slots as unstable so that\n      // child components can be forced to update\n      const restore = patchScopedSlots(instance)\n      instance.$forceUpdate()\n      instance.$nextTick(restore)\n    })\n  } else {\n    // functional or no instance created yet\n    record.options.render = options.render\n    record.options.staticRenderFns = options.staticRenderFns\n\n    // handle functional component re-render\n    if (record.options.functional) {\n      // rerender with full options\n      if (Object.keys(options).length > 2) {\n        updateOptions(record.options, options)\n      } else {\n        // template-only rerender.\n        // need to inject the style injection code for CSS modules\n        // to work properly.\n        const injectStyles = record.options._injectStyles\n        if (injectStyles) {\n          const render = options.render\n          record.options.render = (h, ctx) => {\n            injectStyles.call(ctx)\n            return render(h, ctx)\n          }\n        }\n      }\n      record.options._Ctor = null\n      // 2.5.3\n      if (Array.isArray(record.options.cached)) {\n        record.options.cached = []\n      }\n      record.instances.slice().forEach(instance => {\n        instance.$forceUpdate()\n      })\n    }\n  }\n})\n\nexports.reload = tryWrap((id, options) => {\n  const record = map[id]\n  if (options) {\n    if (typeof options === 'function') {\n      options = options.options\n    }\n    makeOptionsHot(id, options)\n    if (record.Ctor) {\n      if (version[1] < 2) {\n        // preserve pre 2.2 behavior for global mixin handling\n        record.Ctor.extendOptions = options\n      }\n      const newCtor = record.Ctor.super.extend(options)\n      // prevent record.options._Ctor from being overwritten accidentally\n      newCtor.options._Ctor = record.options._Ctor\n      record.Ctor.options = newCtor.options\n      record.Ctor.cid = newCtor.cid\n      record.Ctor.prototype = newCtor.prototype\n      if (newCtor.release) {\n        // temporary global mixin strategy used in < 2.0.0-alpha.6\n        newCtor.release()\n      }\n    } else {\n      updateOptions(record.options, options)\n    }\n  }\n  record.instances.slice().forEach(instance => {\n    if (instance.$vnode && instance.$vnode.context) {\n      instance.$vnode.context.$forceUpdate()\n    } else {\n      console.warn(\n        'Root or manually mounted instance modified. Full reload required.'\n      )\n    }\n  })\n})\n\n// 2.6 optimizes template-compiled scoped slots and skips updates if child\n// only uses scoped slots. We need to patch the scoped slots resolving helper\n// to temporarily mark all scoped slots as unstable in order to force child\n// updates.\nfunction patchScopedSlots (instance) {\n  if (!instance._u) return\n  // https://github.com/vuejs/vue/blob/dev/src/core/instance/render-helpers/resolve-scoped-slots.js\n  const original = instance._u\n  instance._u = slots => {\n    try {\n      // 2.6.4 ~ 2.6.6\n      return original(slots, true)\n    } catch (e) {\n      // 2.5 / >= 2.6.7\n      return original(slots, null, true)\n    }\n  }\n  return () => {\n    instance._u = original\n  }\n}\n")])])]),t("p",[n._v("整体来说vue-hot-reload-api的思路还是很清晰的，主要就是通过维护一个map映射对象，通过对component名称进行对比，这里主要维护了一个Ctor对象，通过hook的方法在vue的生命周期中进行watch监听，然后更新后进行rerender以及reload")]),n._v(" "),t("h3",{attrs:{id:"vue-cli热更新-vs-webpack热更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli热更新-vs-webpack热更新"}},[n._v("#")]),n._v(" vue-cli热更新 vs webpack热更新")]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/hot20200620/hot04.jpg",alt:"图片"}})]),n._v(" "),t("p",[n._v("vue-cli热重载和webpack热更新不同的区别主要在于：\n1、依赖：vue-cli热重载是强依赖于vue框架的，利用的是vue自身的Watcher监听，通过vue的生命周期函数进行名称模块的变更的替换；而webpack则是不依赖于框架，利用的是sock.js进行浏览器端和本地服务端的通信，本地的watch监听则是webpack和webpack-dev-server对模块名称的监听，替换过程用的则是jsonp/ajax的传递；\n2、粒度：vue-cli热重载主要是利用的vue自身框架的component粒度的更新，虽然vue-cli也用到了webpack，其主要是打包和本地服务的用途；而webpack的热更新则是模块粒度的，其主要是模块名称的变化定位去更新，由于其自身是一个工具应用，因而不能确定是哪个框架具体的生命周期，因而其监听内容变化就必须通过自身去实现一套类似的周期变化监听；\n3、定位：vue-cli定位就是vue框架的命令行工具，因而其并不需要特别大的考虑到双方通信以及自定义扩展性等；而webpack本身定位在一个打包工具，或者说其实基于node.js运行时环境的应用，因而也就决定了它必须有更方便、更个性化的扩展和抽象性")]),n._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),t("p",[n._v("在简单小型项目中，直接使用vue-cli脚手架进行vue相关应用的开发即可，但在开发过程中遇到了相关不太明白的渲染问题，也需要弄懂弄通其深层原理(ps:这次就是基于一个生命周期渲染的问题引发的探究，大概描述下就是页面渲染在f5刷新和vue-cli热重载下会出现不同的数据形式，然后便研究了下vue-cli的源码)；而对于大型定制化项目，或者说需要对前端项目组提供一整套的前端工程化工具模板的开发，webpack还是首当其冲的选择，毕竟webpack还是在node.js运行时下有压倒性优势的工具应用。")]),n._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[n._v("vue-cli官网"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000010744600",target:"_blank",rel:"noopener noreferrer"}},[n._v("Vue-hot-reload-api 源码解析"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/749b22170b7b",target:"_blank",rel:"noopener noreferrer"}},[n._v("走进Vue-cli源码，自己动手搭建前端脚手架工具"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/30669007",target:"_blank",rel:"noopener noreferrer"}},[n._v("Webpack HMR 原理解析"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);