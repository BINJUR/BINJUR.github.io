(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b6b9b9c"],{"1dde":function(e,t,n){var o=n("d039"),r=n("b622"),c=n("2d00"),a=r("species");e.exports=function(e){return c>=51||!o((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"56b7":function(e,t,n){var o=n("d75c");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("6b892ed8",o,!0,{sourceMap:!1,shadowMode:!1})},"69e0":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Quick Start 快速开始")]),n("h3",[e._v("首先引入 Neumorphic-UI")]),n("p",[e._v("目前仅支持全局引入，CSS 也会被引入")]),e._v(" main.js "),e._m(0),n("p",[e._v("引入之后，我们就可以在项目中使用了。")]),n("p",[e._v("看个小栗子")]),n("source-code",{attrs:{source_code:e.source_code}},[n("neu-tooltip",{attrs:{content:"点击就可以发送消息提示了喔"}},[n("neu-button",{on:{click:e.sendMessage}},[e._v("来个消息提示")])],1)],1),n("p",[e._v("感觉如何，使用起来是不是非常简单？")]),e._m(1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("      "),n("code",[e._v("\nimport Vue from 'vue';\nimport App from './App.vue';\nimport router from './router';\nimport neumorphic from 'neumorphic-ui-vue';\nVue.use(neumorphic);\nVue.config.productionTip = false;\n\nnew Vue({\n  router,\n  render: (h) => h(App),\n}).$mount('#app');\n      ")]),e._v("\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("正式开启你的 "),n("b",[e._v("Neumorphic")]),e._v(" 之旅吧！")])}],c=n("d4ec"),a=n("bee2"),s=n("262e"),i=n("2caf"),u=n("9ab4"),p=n("60a3"),l=n("8359"),d=n("fae1"),f=function(e){Object(s["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.source_code="\n<template>\n  <neu-tooltip content=\"点击就可以发送消息提示了喔\">\n    <neu-button @click=\"sendMessage\">来个消息提示</neu-button>\n  </neu-tooltip>\n</template>\n<script lang='ts'>\nimport { Component, Vue } from 'vue-property-decorator'\nimport MessageBox from 'neumorphic-ui-vue/packages/messageBox/src/messageBox';\n@Component\nexport default class Quickstart extends Vue {\n  private sendMessage() {\n    const messageConfig = {\n      message: '你好，欢迎使用 Neumorphic-UI',  // 信息内容\n      type: 'success',    // 信息类型\n      styleTimeout: 2000, // 样式过渡时间\n      removeTimeout: 3000 // 移除时间\n    };\n    MessageBox.send(messageConfig);\n  }\n}\n<\/script>",e}return Object(a["a"])(n,[{key:"sendMessage",value:function(){var e={message:"你好，欢迎使用 Neumorphic-UI",type:"success",styleTimeout:2e3,removeTimeout:3e3};d["a"].send(e)}}]),n}(p["c"]);f=Object(u["a"])([Object(p["a"])({components:{"source-code":l["a"]}})],f);var m=f,v=m,h=(n("96d9"),n("2877")),b=Object(h["a"])(v,o,r,!1,null,"710374d4",null);t["default"]=b.exports},8359:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("div",{staticClass:"source"},[n("div",[e._t("default")],2)]),n("neu-collapse",[n("neu-collapse-item",{attrs:{title:"详细代码"}},[n("pre",[e._v("        "),n("code",{domProps:{textContent:e._s(e.source_code)}},[e._v("\n        ")]),e._v("\n      ")])])],1)],1)},r=[],c=n("d4ec"),a=n("262e"),s=n("2caf"),i=n("9ab4"),u=n("60a3"),p=function(e){Object(a["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);Object(i["a"])([Object(u["b"])({type:String})],p.prototype,"source_code",void 0),p=Object(i["a"])([u["a"]],p);var l=p,d=l,f=n("2877"),m=Object(f["a"])(d,o,r,!1,null,"d6194cf4",null);t["a"]=m.exports},8418:function(e,t,n){"use strict";var o=n("c04e"),r=n("9bf2"),c=n("5c6c");e.exports=function(e,t,n){var a=o(t);a in e?r.f(e,a,c(0,n)):e[a]=n}},"96d9":function(e,t,n){"use strict";var o=n("56b7"),r=n.n(o);r.a},"99af":function(e,t,n){"use strict";var o=n("23e7"),r=n("d039"),c=n("e8b5"),a=n("861d"),s=n("7b0b"),i=n("50c4"),u=n("8418"),p=n("65f0"),l=n("1dde"),d=n("b622"),f=n("2d00"),m=d("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=f>=51||!r((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),g=l("concat"),_=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:c(e)},y=!b||!g;o({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,o,r,c,a=s(this),l=p(a,0),d=0;for(t=-1,o=arguments.length;t<o;t++)if(c=-1===t?a:arguments[t],_(c)){if(r=i(c.length),d+r>v)throw TypeError(h);for(n=0;n<r;n++,d++)n in c&&u(l,d,c[n])}else{if(d>=v)throw TypeError(h);u(l,d++,c)}return l.length=d,l}})},bee2:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return r}))},d75c:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".neumorphic-collapse-item[data-v-710374d4]:not([open]){height:7%}",""]),e.exports=t},fae1:function(e,t,n){"use strict";n("99af");var o=n("d4ec"),r=n("bee2"),c=function(){function e(){Object(o["a"])(this,e),this.root=this.generateElement("div","neumorphic-messagebox"),this.topList=[],this.root.style.display="inline",this.root.style.height="0",document.body.appendChild(this.root)}return Object(r["a"])(e,[{key:"send",value:function(e){var t={message:"Default Message",type:"info",styleTimeout:2e3,removeTimeout:3e3};this.generateMessageBox(Object.assign(t,e))}},{key:"generateMessageBox",value:function(e){var t=this,n=this.generateElement("div","",e.type);this.topList.push(1);var o=this.generateElement("p","neumorphic-messagebox-text",e.type);o.appendChild(document.createTextNode(e.message)),n.appendChild(o),this.root.appendChild(n),setTimeout((function(){n.style.transform="translate(50%, -100px)"}),e.styleTimeout),setTimeout((function(){t.root.removeChild(n),t.topList.pop()}),e.removeTimeout)}},{key:"generateElement",value:function(e,t,n){var o=document.createElement(e);return t&&"p"===e?o.className="".concat(t,"-").concat(n," ").concat(t):t&&(o.className=t),o}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();t["a"]=c.getInstance()}}]);
//# sourceMappingURL=chunk-0b6b9b9c.7e6ceb79.js.map