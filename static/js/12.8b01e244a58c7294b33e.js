webpackJsonp([12],{JJTE:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var s=this.$createElement,t=this._self._c||s;return t("markdown-wrapper",[t("h1",{attrs:{id:"progressbar"}},[this._v("ProgressBar "),t("a",{staticClass:"header-anchor",attrs:{href:"#progressbar","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("blockquote",[t("p",[this._v("Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.")])]),this._v(" "),t("p",[t("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4714899946256166","data-ad-slot":"4603582855"}})]),this._v(" "),t("h2",{attrs:{id:"example"}},[this._v("Example "),t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Default progress bar.")]),this._v(" "),t("progress-bar-example",{ref:"progress-bar-example"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress"')]),this._v("/>")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("66")]),this._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- progress-bar-example.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"with-label"}},[this._v("With label "),t("a",{staticClass:"header-anchor",attrs:{href:"#with-label","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("To ensure that the label text remains legible even for low percentages, consider use "),t("code",{pre:!0},[this._v("min-width")]),this._v(" prop.")]),this._v(" "),t("progress-bar-with-label",{ref:"progress-bar-with-label"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("h4")]),this._v(">")]),this._v("Default Label"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("h4")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("h4")]),this._v(">")]),this._v("Custom Label"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("h4")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label-text")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"Loading......Please wait."')]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("h4")]),this._v(">")]),this._v("Minimum Width"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("h4")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress1"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("min-width")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("/>")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress1")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("1")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("66")]),this._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- progress-bar-with-label.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"contextual-alternatives"}},[this._v("Contextual alternatives "),t("a",{staticClass:"header-anchor",attrs:{href:"#contextual-alternatives","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Progress bars use some of the same button and alert classes for consistent styles.")]),this._v(" "),t("progress-bar-contextual-alternatives",{ref:"progress-bar-contextual-alternatives"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress40"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress20"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"info"')]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress60"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"warning"')]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress80"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"danger"')]),this._v("/>")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress20")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress40")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("40")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress60")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("60")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress80")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("80")]),this._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- progress-bar-contextual-alternatives.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"striped"}},[this._v("Striped "),t("a",{staticClass:"header-anchor",attrs:{href:"#striped","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Uses a gradient to create a striped effect. Not available in IE9 and below.")]),this._v(" "),t("progress-bar-striped",{ref:"progress-bar-striped"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress40"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("striped")]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress20"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"info"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("striped")]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress60"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"warning"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("striped")]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress80"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"danger"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("striped")]),this._v("/>")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress20")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress40")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("40")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress60")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("60")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress80")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("80")]),this._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- progress-bar-striped.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"animated"}},[this._v("Animated "),t("a",{staticClass:"header-anchor",attrs:{href:"#animated","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Animate the stripes right to left. Not available in IE9 and below.")]),this._v(" "),t("progress-bar-animated",{ref:"progress-bar-animated"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("striped")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("active")]),this._v("/>")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("40")]),this._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- progress-bar-animated.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h2",{attrs:{id:"stacked"}},[this._v("Stacked "),t("a",{staticClass:"header-anchor",attrs:{href:"#stacked","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[this._v("Place multiple "),t("code",{pre:!0},[this._v("<progress-bar-stack>")]),this._v(" into the same "),t("code",{pre:!0},[this._v("<progress-bar>")]),this._v(" to stack them.")]),this._v(" "),t("progress-bar-stacked",{ref:"progress-bar-stacked"}),this._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar-stack")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress35"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar-stack")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress20"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"warning"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("striped")]),this._v("/>")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar-stack")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"progress10"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"danger"')]),this._v("/>")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("progress-bar")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress20")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress35")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("35")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("progress10")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("10")]),this._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- progress-bar-stacked.vue --\x3e")]),this._v("\n")])]),this._v(" "),t("h1",{attrs:{id:"api-reference"}},[this._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("h2",{attrs:{id:"progressbar-2"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/components/progressbar/ProgressBar.js"}},[this._v("ProgressBar")]),this._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#progressbar-2","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("h3",{attrs:{id:"props"}},[this._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[this._v("Name")]),this._v(" "),t("th",[this._v("Type")]),this._v(" "),t("th",[this._v("Default")]),this._v(" "),t("th",[this._v("Required")]),this._v(" "),t("th",[this._v("Description")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[this._v("v-model")])]),this._v(" "),t("td",[this._v("Number")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("✔")]),this._v(" "),t("td",[this._v("Current progress (0 ~ 100).")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("label")])]),this._v(" "),t("td",[this._v("Boolean")]),this._v(" "),t("td",[this._v("false")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Show label on progress bar.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("label-text")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Custom label text.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("min-width")])]),this._v(" "),t("td",[this._v("Boolean")]),this._v(" "),t("td",[this._v("false")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Apply a minimum width to the progress bar, useful when showing label and small current value.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("type")])]),this._v(" "),t("td",[this._v("String")]),this._v(" "),t("td"),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Progress bar type, support success / info / warning / danger. Or you can add custom types.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("striped")])]),this._v(" "),t("td",[this._v("Boolean")]),this._v(" "),t("td",[this._v("false")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Apply striped style.")])]),this._v(" "),t("tr",[t("td",[t("code",{pre:!0},[this._v("active")])]),this._v(" "),t("td",[this._v("Boolean")]),this._v(" "),t("td",[this._v("false")]),this._v(" "),t("td"),this._v(" "),t("td",[this._v("Apply active to striped style.")])])])])]),t("h3",{attrs:{id:"slots"}},[this._v("Slots "),t("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[this._v("Name")]),this._v(" "),t("th",[this._v("Description")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[this._v("default")])]),this._v(" "),t("td",[this._v("Use this slot if need stacked progress bar, see example in the code panel above.")])])])])]),t("h2",{attrs:{id:"progressbarstack"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/components/progressbar/ProgressBarStack.js"}},[this._v("ProgressBarStack")]),this._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#progressbarstack","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),t("p",[t("code",{pre:!0},[this._v("ProgressBar")]),this._v(" and "),t("code",{pre:!0},[this._v("ProgressBarStack")]),this._v(" shared same props.")])],1)},staticRenderFns:[]},h=a("VU/8")({components:{"progress-bar-example":{template:'<div class="markdown-live-example">\n  <progress-bar v-model="progress"/>\n</div>',data:function(){return{progress:66}}},"progress-bar-with-label":{template:'<div class="markdown-live-example">\n  <section>\n    <h4>Default Label</h4>\n    <progress-bar v-model="progress" label/>\n    <h4>Custom Label</h4>\n    <progress-bar v-model="progress" label label-text="Loading......Please wait."/>\n    <h4>Minimum Width</h4>\n    <progress-bar v-model="progress1" min-width label/>\n  </section>\n</div>',data:function(){return{progress1:1,progress:66}}},"progress-bar-contextual-alternatives":{template:'<div class="markdown-live-example">\n  <section>\n    <progress-bar v-model="progress40" type="success"/>\n    <progress-bar v-model="progress20" type="info"/>\n    <progress-bar v-model="progress60" type="warning"/>\n    <progress-bar v-model="progress80" type="danger"/>\n  </section>\n</div>',data:function(){return{progress20:20,progress40:40,progress60:60,progress80:80}}},"progress-bar-striped":{template:'<div class="markdown-live-example">\n  <section>\n    <progress-bar v-model="progress40" type="success" striped/>\n    <progress-bar v-model="progress20" type="info" striped/>\n    <progress-bar v-model="progress60" type="warning" striped/>\n    <progress-bar v-model="progress80" type="danger" striped/>\n  </section>\n</div>',data:function(){return{progress20:20,progress40:40,progress60:60,progress80:80}}},"progress-bar-animated":{template:'<div class="markdown-live-example">\n  <progress-bar v-model="progress" striped active/>\n</div>',data:function(){return{progress:40}}},"progress-bar-stacked":{template:'<div class="markdown-live-example">\n  <progress-bar>\n    <progress-bar-stack v-model="progress35" type="success"/>\n    <progress-bar-stack v-model="progress20" type="warning" striped/>\n    <progress-bar-stack v-model="progress10" type="danger"/>\n  </progress-bar>\n</div>',data:function(){return{progress20:20,progress35:35,progress10:10}}}}},r,!1,null,null,null);t.default=h.exports}});
//# sourceMappingURL=12.8b01e244a58c7294b33e.js.map