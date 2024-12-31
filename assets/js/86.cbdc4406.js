(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{289:function(e,n,t){"use strict";t.r(n);var a=t(0),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"基础视频平台树组件踩坑实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础视频平台树组件踩坑实践"}},[e._v("#")]),e._v(" 基础视频平台树组件踩坑实践")]),e._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("树组件是项目中最常见的一种组件，其综合了数据结构的处理、拖拽、点击等前端常见面试题的综合，以下是本次实现过程中遇到的问题汇总")]),e._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/tree20200531/tree01.jpeg",alt:"图片"}})]),e._v(" "),t("h2",{attrs:{id:"问题目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题目录"}},[e._v("#")]),e._v(" 问题目录")]),e._v(" "),t("ul",[t("li",[e._v("json数据处理")]),e._v(" "),t("li",[e._v("$set分析")]),e._v(" "),t("li",[e._v("深拷贝")])]),e._v(" "),t("h2",{attrs:{id:"踩坑案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#踩坑案例"}},[e._v("#")]),e._v(" 踩坑案例")]),e._v(" "),t("h3",{attrs:{id:"json数据处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json数据处理"}},[e._v("#")]),e._v(" json数据处理")]),e._v(" "),t("p",[e._v("[bug描述] 项目中树组件数据所需为三级结构，前两级结构数据与第三级结构数据是不同的接口，商讨过后，决定二级结构后获取三级结构数据，将三级结构数据中的字段获取塞入原数据中，在数据量较大时层级较多时会产生较大延时，影响体验")]),e._v(" "),t("p",[e._v("[bug分析] 大数据量多层级性能较差，需优化")]),e._v(" "),t("p",[e._v("[解决方案] 抽象成两个json数据的映射关系处理")]),e._v(" "),t("p",[e._v("接口1中获取的数据json1如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    [\n        {\n            "name": "组1",\n            "id": "g100001",\n            "type": "group",\n            "children": [\n                {\n                    "name": "摄像机",\n                    "id": "d100001",\n                    "type": "device",   \n                },\n                {\n                    "name": "NVR",\n                    "id": "d100002",\n                    "type": "device",   \n                },\n                {\n                    "name": "摄像机",\n                    "id": "d100003",\n                    "type": "device",   \n                }\n            ]\n        }\n    ]\n')])])]),t("p",[e._v("接口二中获取的数据json2如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    [\n        {\n            "ID": "10001",\n            "DeviceID": "10000101001"\n        },\n        {\n            "ID": "10002",\n            "DeviceID": "10000101002"\n        },\n        {\n            "ID": "10003",\n            "DeviceID": "10000101003"\n        }\n    ]\n')])])]),t("p",[e._v("最终要将json1中的类型为device的id对应获取到的json2数据组合成最终的数据json如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    [\n        {\n            "name": "组1",\n            "id": "g100001",\n            "type": "group",\n            "children": [\n                {\n                    "name": "摄像机",\n                    "id": "d100001",\n                    "type": "device", \n                    ”children": [\n                        {\n                            "name": ID,\n                            "id": DeviceID,\n                            "type": "channel"\n                        },\n                        {\n                            "name": ID,\n                            "id": DeviceID,\n                            "type": "channel"\n                        },\n                        {\n                            "name": ID,\n                            "id": DeviceID,\n                            "type": "channel"\n                        }\n                    ]   \n                }\n            ]\n        }\n    ]\n')])])]),t("p",[e._v('抽象转化 => [\n{\n"children":[\n{...}\n],\n"字段1":"",\n"字段2":""\n}\n]')]),e._v(" "),t("p",[e._v("对于多个json数据的映射组合，常见的方法有：1、硬解；2、转AST；3、动态规划")]),e._v(" "),t("p",[e._v("硬解在本场景下时空复杂度还可控制，倘若出现多层结构的深度递归去解会出现爆栈和性能损耗；转ast可以将所有类似结构进行通解，但是需要去写解释执行器也会占据时间和空间，另外ast更适合数据结构变化非常大的，比如像jsx这种要转换成js就需要ast的引入，本场景多层级结构类似；动态规划是对深度递归的一种优化，将每一个问题转化为子问题，从子问题反推，上边的抽象转化是最小子问题，只需将最小子问题进行反向推导，就可以减少内存使用，提升效率")]),e._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/tree20200531/tree02.jpeg",alt:"图片"}})]),e._v(" "),t("h3",{attrs:{id:"set使用及对watcher的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set使用及对watcher的理解"}},[e._v("#")]),e._v(" $set使用及对Watcher的理解")]),e._v(" "),t("p",[e._v("[bug描述] 由于三层数据是由另外一个接口获取的，其获取后需要重新塞入元数据中，然而再次塞入后却没有被监听到，在视图上没有显示")]),e._v(" "),t("p",[e._v("[bug分析] 没有defineReactive，也就无法被dep收集，Watcher就无法监听")]),e._v(" "),t("p",[e._v("[解决方案] 使用$set方法")]),e._v(" "),t("p",[e._v("Vue中的双向数据绑定是通过defineReactive方法实现，其基本是Object.defineProperty的使用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * Define a reactive property on an Object.\n */\nexport function defineReactive (\n  obj: Object,\n  key: string,\n  val: any,\n  customSetter?: ?Function,\n  shallow?: boolean\n) {\n  const dep = new Dep()\n\n  const property = Object.getOwnPropertyDescriptor(obj, key)\n  if (property && property.configurable === false) {\n    return\n  }\n\n  // cater for pre-defined getter/setters\n  const getter = property && property.get\n  const setter = property && property.set\n  if ((!getter || setter) && arguments.length === 2) {\n    val = obj[key]\n  }\n\n  let childOb = !shallow && observe(val)\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function reactiveGetter () {\n      const value = getter ? getter.call(obj) : val\n      if (Dep.target) {\n        dep.depend()\n        if (childOb) {\n          childOb.dep.depend()\n          if (Array.isArray(value)) {\n            dependArray(value)\n          }\n        }\n      }\n      return value\n    },\n    set: function reactiveSetter (newVal) {\n      const value = getter ? getter.call(obj) : val\n      /* eslint-disable no-self-compare */\n      if (newVal === value || (newVal !== newVal && value !== value)) {\n        return\n      }\n      /* eslint-enable no-self-compare */\n      if (process.env.NODE_ENV !== 'production' && customSetter) {\n        customSetter()\n      }\n      // #7981: for accessor properties without setter\n      if (getter && !setter) return\n      if (setter) {\n        setter.call(obj, newVal)\n      } else {\n        val = newVal\n      }\n      childOb = !shallow && observe(newVal)\n      dep.notify()\n    }\n  })\n}\n")])])]),t("p",[e._v("对于一般对象的属性新增，defineReactive是不能获取到的，因而需要使用$set方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * Set a property on an object. Adds the new property and\n * triggers change notification if the property doesn't\n * already exist.\n */\nexport function set (target: Array<any> | Object, key: any, val: any): any {\n  if (process.env.NODE_ENV !== 'production' &&\n    (isUndef(target) || isPrimitive(target))\n  ) {\n    warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)\n  }\n  if (Array.isArray(target) && isValidArrayIndex(key)) {\n    target.length = Math.max(target.length, key)\n    target.splice(key, 1, val)\n    return val\n  }\n  if (key in target && !(key in Object.prototype)) {\n    target[key] = val\n    return val\n  }\n  const ob = (target: any).__ob__\n  if (target._isVue || (ob && ob.vmCount)) {\n    process.env.NODE_ENV !== 'production' && warn(\n      'Avoid adding reactive properties to a Vue instance or its root $data ' +\n      'at runtime - declare it upfront in the data option.'\n    )\n    return val\n  }\n  if (!ob) {\n    target[key] = val\n    return val\n  }\n  defineReactive(ob.value, key, val)\n  ob.dep.notify()\n  return val\n}\n")])])]),t("p",[e._v("只有在defineReactive中才能被dep收集到，才能通过Watcher进行监听")]),e._v(" "),t("h3",{attrs:{id:"深拷贝导致的数据不能及时更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝导致的数据不能及时更新"}},[e._v("#")]),e._v(" 深拷贝导致的数据不能及时更新")]),e._v(" "),t("p",[e._v("[bug描述] 树组件重命名后，新的名字未能及时响应到页面上，却在第二轮渲染到了页面上")]),e._v(" "),t("p",[e._v("[bug分析] lodash深拷贝和点击发送事件的回调发生时间未知，因而在defineReactive中的值获取到的时间也是未定的，通常点击事件的回调会阻塞js线程，因而在点击后虽然defineReactive改变了，传到子组件中的数据由于有深拷贝也需要时间响应，然而响应完后，页面已经完成，因此在这一个时间周期中，响应后的数据被放到了下一次的渲染中，当再次点击后才会显示")]),e._v(" "),t("p",[e._v("[解决方案] 去除深拷贝，点击后的数据直接传到子组件中，不需要深拷贝执行")]),e._v(" "),t("p",[e._v("Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("加载渲染过程：\n父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted")])]),e._v(" "),t("li",[t("p",[e._v("子组件更新过程：\n父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated")])]),e._v(" "),t("li",[t("p",[e._v("父组件更新过程：\n父 beforeUpdate -> 父 updated")])]),e._v(" "),t("li",[t("p",[e._v("销毁过程：\n父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/tree20200531/tree03.jpeg",alt:"图片"}})]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("树组件是一个比较复杂的组件，同时也是前端基本功的一个很好的测试案例，反复琢磨树组件的基础功能实现会发现面试中常见题目都有体现，其实面试中的常见题目都是日常工作中的抽象化的考察，除了个别的完全不靠谱的题目，大部分题目还是在日常开发中有很好的体现的，比如本次踩坑实践中就有：1、算法考察：动态规划；2、Object基础api考察；3、深拷贝浅拷贝问题；4、EventLoop问题；5、Vue源码...所以，对前端基本功的打磨和修炼才能使自己的前端能力有一个较大的提升，共勉！！！")])])}),[],!1,null,null,null);n.default=r.exports}}]);