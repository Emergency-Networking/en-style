!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports["en-style"]=t(require("vue")):e["en-style"]=t(e.vue)}(self,(e=>(()=>{"use strict";var t={380:t=>{t.exports=e}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}r.r(a),r.d(a,{EnButton:()=>D,useButtonStyles:()=>N});var s="primary",l="secondary",u="tertiary",c="ghost",p="text",f="link",d="icon",y="neutral",b="delete",E="cancel",S="warn",h="with-icon",T="size-medium",A="size-small",g="is-loadable",v="is-loading",m="is-success",_="selected",I="disabled",L="toggleable",C="autoHeight",B="hideLabel",O="noWrap";function N(){var e={PRIMARY:s,SECONDARY:l,TERTIARY:u,GHOST:c,TEXT:p,LINK:f,ICON:d},t={NEUTRAL:y,DELETE:b,CANCEL:E,WARN:S},n={WITH_ICON:h,SIZE_MEDIUM:T,SIZE_SMALL:A,LOADABLE:g,LOADING:v,SUCCESS:m,SELECTED:_,DISABLED:I,TOGGLEABLE:L,AUTO_HEIGHT:C,HIDE_LABEL:B,NO_WRAP:O};return{getStyleClass:function(r,a,i){if(r){var s=Object.values(e);s.includes(r)||console.error('Invalid button variant: "'.concat(r,'". Remove or use one of these: ').concat(s))}var l="";switch(r||a===t.NEUTRAL||(r=e.SECONDARY),r!==e.ICON&&(l+="button "),r){case e.PRIMARY:l+="btn-primary";break;case e.SECONDARY:l+="btn-secondary";break;case e.TERTIARY:l+="btn-tertiary";break;case e.GHOST:l+="btn-ghost";break;case e.LINK:l+="btn-link is-underlined";break;case e.TEXT:l+="btn-text"}switch(a){case t.DELETE:l+=" btn-danger";break;case t.CANCEL:l+=" btn-cancel";break;case t.WARN:l+=" btn-warn"}if(i){var u,c=o(i);try{for(c.s();!(u=c.n()).done;){switch(u.value){case n.WITH_ICON:l+=" with-icon";break;case n.SIZE_MEDIUM:l+=" size-medium";break;case n.SIZE_SMALL:l+=" size-small";break;case n.LOADABLE:l+=" loadable";break;case n.LOADING:l+=" loading";break;case n.SUCCESS:l+=" success";break;case n.SELECTED:l+=" selected";break;case n.DISABLED:l+=" disabled";break;case n.TOGGLEABLE:l+=" toggleable";break;case n.AUTO_HEIGHT:l+=" auto-height";break;case n.HIDE_LABEL:l+=" hide-label";break;case n.NO_WRAP:l+=" no-wrap"}}}catch(e){c.e(e)}finally{c.f()}}return l},VARIANTS:e,INTENTS:t,ATTRIBUTES:n}}var R=r(380);var k=function(e,t,n,r,a,o,i,s){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=l):a&&(l=s?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:u}}({__name:"en-button",props:{as:{type:String,default:"button"},label:{type:String},variant:{type:String},intent:{type:String},inertia:{type:Boolean,default:void 0},href:{type:String},linkPageButton:{type:Boolean,default:!1},icon:{type:String},iconRight:{type:Boolean,default:!1},sizeMedium:{type:Boolean,default:!1},sizeSmall:{type:Boolean,default:!1},loadable:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},isSuccess:{type:Boolean,default:!1},noWrap:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},toggleable:{type:Boolean,default:!1},autoHeight:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},type:{type:String},target:{type:String}},emits:["click"],setup:function(e,t){var n=t.emit,r=e,a=N(),o=a.getStyleClass,i=a.VARIANTS,s=a.INTENTS,l=a.ATTRIBUTES,u=(0,R.computed)((function(){var e=[];return r.icon&&e.push(l.WITH_ICON),r.sizeMedium?e.push(l.SIZE_MEDIUM):r.sizeSmall&&e.push(l.SIZE_SMALL),r.loadable&&e.push(l.LOADABLE),r.isLoading&&e.push(l.LOADING),r.isSuccess&&e.push(l.SUCCESS),r.selected&&e.push(l.SELECTED),r.disabled&&e.push(l.DISABLED),r.toggleable&&e.push(l.TOGGLEABLE),r.autoHeight&&e.push(l.AUTO_HEIGHT),r.hideLabel&&e.push(l.HIDE_LABEL),r.noWrap&&e.push(l.NO_WRAP),e})),c=(0,R.computed)((function(){return(r.inertia||!1!==r.inertia&&r.href)&&!r.target?"Link":r.href?"a":"button"})),p=(0,R.computed)((function(){if(r.linkPageButton){var e=o(i.GHOST);return e+=" w-full py-2 mb-2 is-justify-content-flex-start wrap"}return o(r.variant,r.intent,u.value)})),f=(0,R.computed)((function(){if(r.icon){var e=[r.sizeSmall?"is-size-7":"is-size-6"];return r.icon.startsWith("fa")?(e.push(r.icon),r.icon.includes("fa-")&&e.push("fas")):e.push("fas","fa-"+r.icon),r.hideLabel||(r.iconRight?e.push("ml-2"):e.push("mr-2")),e}return null})),d=(0,R.computed)((function(){return r.type?r.type:r.intent&&r.intent!==s.NEUTRAL?"button":null}));return{__sfc:!0,getStyleClass:o,VARIANTS:i,INTENTS:s,ATTRIBUTES:l,emit:n,props:r,attributes:u,onClicked:function(){n("click")},componentType:c,styleClass:p,faIcon:f,formButtonType:d}}},(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(n.componentType,{tag:"component",class:[n.styleClass],attrs:{href:e.href,as:n.props.as,"aria-label":n.props.label,type:n.formButtonType,target:n.props.target},on:{click:n.onClicked}},[n.props.icon?t("span",{class:n.faIcon,style:e.iconRight?{order:1}:null}):e._e(),e._v(" "),e._t("default",(function(){return[e.hideLabel?e._e():[e._v(e._s(e.label))]]}))],2)}),[],!1,null,null,null);const D=k.exports;return a})()));