webpackJsonp([19],{"5Z11":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var s=this.$createElement,t=this._self._c||s;return t("markdown-wrapper",[t("h1",{attrs:{id:"messagebox"}},[this._v("MessageBox "),t("a",{staticClass:"header-anchor",attrs:{href:"#messagebox","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("blockquote",[t("p",[this._v("A set of modal boxes simulating system message box, mainly for alerting information, confirm operations and prompting messages.")])]),this._v(" "),t("p",[this._v("By design MessageBox provides simulations of browsers' "),t("code",{pre:!0},[this._v("alert")]),this._v(", "),t("code",{pre:!0},[this._v("confirm")]),this._v(" and "),t("code",{pre:!0},[this._v("prompt")]),this._v(". Use Modal instead if needed more complicated contents.")]),this._v(" "),t("p",[t("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4714899946256166","data-ad-slot":"4603582855"}})]),this._v(" "),t("h2",{attrs:{id:"alert"}},[this._v("Alert "),t("a",{staticClass:"header-anchor",attrs:{href:"#alert","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Displays an alert modal with the optional specified content and an OK (auto-focused) button. By default it can not be closed on backdrop click.")]),this._v(" "),t("p",[this._v("An alert example using callback:")]),this._v(" "),t("message-box-alert",{ref:"message-box-alert"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"alert"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Click to open an alert modal"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n      alert () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$alert({\n          "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Title'")]),this._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'This is an alert message.'")]),this._v("\n        }, (msg) => {\n          "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// callback after modal dismissed")]),this._v("\n          "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify("),t("span",{attrs:{class:"hljs-string"}},[this._v("`You selected "),t("span",{attrs:{class:"hljs-subst"}},[this._v("${msg}")]),this._v(".`")]),this._v(")\n        })\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- message-box-alert.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"confirm"}},[this._v("Confirm "),t("a",{staticClass:"header-anchor",attrs:{href:"#confirm","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Displays a modal dialog with an optional message and two buttons, OK (auto-focused) and Cancel.")]),this._v(" "),t("p",[this._v("A confirm example using "),t("code",{pre:!0},[this._v("Promise")]),this._v(":")]),this._v(" "),t("message-box-confirm",{ref:"message-box-confirm"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"confirm"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Click to open a confirm modal"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n      confirm () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$confirm({\n          "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Confirm'")]),this._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'This item will be permanently deleted. Continue?'")]),this._v("\n        })\n          .then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify({\n              "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'success'")]),this._v(",\n              "),t("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Delete completed.'")]),this._v("\n            })\n          })\n          .catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify("),t("span",{attrs:{class:"hljs-string"}},[this._v("'Delete canceled.'")]),this._v(")\n          })\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- message-box-confirm.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"prompt"}},[this._v("Prompt "),t("a",{staticClass:"header-anchor",attrs:{href:"#prompt","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Displays a dialog with an optional message prompting the user to input some text.")]),this._v(" "),t("message-box-prompt",{ref:"message-box-prompt"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"confirm"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Click to open a prompt modal"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n      confirm () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$prompt({\n          "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Welcome'")]),this._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Please input your email:'")]),this._v(",\n          "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// A simple input validator")]),this._v("\n          "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// returns the err msg (not valid) or null (valid)")]),this._v("\n          validator (value) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" "),t("span",{attrs:{class:"hljs-regexp"}},[this._v("/\\S+@\\S+\\.\\S+/")]),this._v(".test(value) ? "),t("span",{attrs:{class:"hljs-literal"}},[this._v("null")]),this._v(" : "),t("span",{attrs:{class:"hljs-string"}},[this._v("'Email address is not valid!'")]),this._v("\n          }\n        })\n          .then("),t("span",{attrs:{class:"hljs-function"}},[this._v("("),t("span",{attrs:{class:"hljs-params"}},[this._v("value")]),this._v(") =>")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify({\n              "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'success'")]),this._v(",\n              "),t("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("`You email address is "),t("span",{attrs:{class:"hljs-subst"}},[this._v("${value}")]),this._v("`")]),this._v("\n            })\n          })\n          .catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify("),t("span",{attrs:{class:"hljs-string"}},[this._v("'Input canceled.'")]),this._v(")\n          })\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- message-box-prompt.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"global-methods"}},[this._v("Global methods "),t("a",{staticClass:"header-anchor",attrs:{href:"#global-methods","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Following global methods for "),t("code",{pre:!0},[this._v("Vue.prototype")]),this._v(" will be added "),t("strong",[this._v("if uiv is installed")]),this._v(":")]),this._v(" "),t("ul",[t("li",[t("code",{pre:!0},[this._v("$alert(options, callback(msg))")])]),this._v(" "),t("li",[t("code",{pre:!0},[this._v("$confirm(options, callback(err, msg))")])]),this._v(" "),t("li",[t("code",{pre:!0},[this._v("$prompt(options, callback(err, msg))")])])]),this._v(" "),t("p",[this._v("Callback params:")]),this._v(" "),t("ul",[t("li",[t("code",{pre:!0},[this._v("err")]),this._v(" as user dismiss or cancel the box, otherwise it will be "),t("code",{pre:!0},[this._v("null")]),this._v(". Note that there is no err in "),t("code",{pre:!0},[this._v("$alert")]),this._v(" callback.")]),this._v(" "),t("li",[t("code",{pre:!0},[this._v("msg")]),this._v(" as the user input while using prompt.")])]),this._v(" "),t("p",[this._v("Each of these methods will return a "),t("code",{pre:!0},[this._v("Promise")]),this._v(" object that resolve / reject while the box is closed (if supported by browser or with es6 promise polyfill).")]),this._v(" "),t("h2",{attrs:{id:"import-individually"}},[this._v("Import individually "),t("a",{staticClass:"header-anchor",attrs:{href:"#import-individually","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("If you prefer importing "),t("code",{pre:!0},[this._v("MessageBox")]),this._v(" individually:")]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" { MessageBox } "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{attrs:{class:"hljs-string"}},[this._v("'uiv'")]),this._v("\n")])]),this._v(" "),t("p",[this._v("The corresponding methods are: "),t("code",{pre:!0},[this._v("MessageBox.alert")]),this._v(", "),t("code",{pre:!0},[this._v("MessageBox.confirm")]),this._v(" and "),t("code",{pre:!0},[this._v("MessageBox.prompt")]),this._v(", with same parameters as above.")]),this._v(" "),t("p",[t("strong",[this._v("Note:")]),this._v(" You CAN NOT use MessageBox individually like this if you're also using "),t("code",{pre:!0},[this._v("vue-i18n")]),this._v(" in the root instance of Vue (because it will not be able to access the correct language pack), a workaround is to register them manually:")]),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{attrs:{class:"hljs-string"}},[this._v("'vue'")]),this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" { MessageBox } "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{attrs:{class:"hljs-string"}},[this._v("'uiv'")]),this._v("\n\nVue.prototype.$alert = MessageBox.alert\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("// ...")]),this._v("\n")])]),this._v(" "),t("h1",{attrs:{id:"api-reference"}},[this._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("h2",{attrs:{id:"messagebox-2"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/services/messagebox/MessageBox.vue"}},[this._v("MessageBox")]),this._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#messagebox-2","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("These props are used as "),t("code",{pre:!0},[this._v("options")]),this._v(" in the methods above.")]),this._v(" "),t("h3",{attrs:{id:"props"}},[this._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[this._v("Name")]),this._v(" "),t("th",[this._v("Type")]),this._v(" "),t("th",[this._v("Default")]),this._v(" "),t("th",[this._v("Required")]),this._v(" "),t("th",[this._v("Description")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[this._v("size")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td",[this._v("sm")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("The alternative modal sizes. Support: "),t("code",{pre:!0},[this._v("lg")]),this._v(" / "),t("code",{pre:!0},[this._v("md")]),this._v(" / "),t("code",{pre:!0},[this._v("sm")]),this._v(".")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("title")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("The modal title.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("content")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("The modal content.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("html")])]),this._v(" "),t("td",[this._v("Boolean")]),this._v(" "),t("td",[t("code",{pre:!0},[this._v("false")])]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Allow HTML in content.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("okText")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Text of ok button.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("okType")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td",[this._v("primary")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Button type of ok button.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("cancelText")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Text of cancel button.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("cancelType")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td",[this._v("default")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Button type of cancel button.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("customClass")])]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Custom classes to modal, anything that can work with "),t("code",{pre:!0},[this._v("v-bind:class")]),this._v(" or "),t("code",{pre:!0},[this._v(":class")]),this._v(".")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("backdrop")])]),this._v(" "),t("td",[this._v("Boolean")]),this._v(" "),t("td",[t("code",{pre:!0},[this._v("false")]),this._v(" if type is alert, otherwise "),t("code",{pre:!0},[this._v("true")])]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Dismiss the modal by backdrop click.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("validator")])]),this._v(" "),t("td",[this._v("Function")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Custom validator function for prompt. Accepts the input value as param, returns the err msg (not valid) or null (valid)")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("defaultValue")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("(0.27.0+) The default value to fill in prompt box.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("inputType")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td",[this._v("text")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("(0.28.0+) The default input type of prompt box.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("auto-focus")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td",[this._v("ok")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("(0.31.0+) Focus on button while message box open. Can be "),t("code",{pre:!0},[this._v("ok")]),this._v(" / "),t("code",{pre:!0},[this._v("cancel")]),this._v(", or empty String to disable the feature.")])])])])])],1)},staticRenderFns:[]},h=a("VU/8")({components:{"message-box-alert":{template:'<div class="markdown-live-example">\n  <btn @click="alert" type="primary">Click to open an alert modal</btn>\n</div>',methods:{alert:function(){var s=this;this.$alert({title:"Title",content:"This is an alert message."},function(t){s.$notify("You selected "+t+".")})}}},"message-box-confirm":{template:'<div class="markdown-live-example">\n  <btn @click="confirm" type="primary">Click to open a confirm modal</btn>\n</div>',methods:{confirm:function(){var s=this;this.$confirm({title:"Confirm",content:"This item will be permanently deleted. Continue?"}).then(function(){s.$notify({type:"success",content:"Delete completed."})}).catch(function(){s.$notify("Delete canceled.")})}}},"message-box-prompt":{template:'<div class="markdown-live-example">\n  <btn @click="confirm" type="primary">Click to open a prompt modal</btn>\n</div>',methods:{confirm:function(){var s=this;this.$prompt({title:"Welcome",content:"Please input your email:",validator:function(s){return/\S+@\S+\.\S+/.test(s)?null:"Email address is not valid!"}}).then(function(t){s.$notify({type:"success",content:"You email address is "+t})}).catch(function(){s.$notify("Input canceled.")})}}}}},i,!1,null,null,null);t.default=h.exports}});
//# sourceMappingURL=19.ad4b0800fdce7cfd7ab6.js.map