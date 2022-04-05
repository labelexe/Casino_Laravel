(self.webpackChunk=self.webpackChunk||[]).push([[685],{57689:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(87757),o=r.n(n),a=r(15566),s=r(68843);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,n,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){c(a,n,o,s,i,"next",e)}function i(e){c(a,n,o,s,i,"throw",e)}s(void 0)}))}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===i(e)&&(r=e,e=""),r=f({url:e,title:t,width:600,height:720},r);var n=void 0!==window.screenLeft?window.screenLeft:window.screen.left,o=void 0!==window.screenTop?window.screenTop:window.screen.top,a=window.innerWidth||document.documentElement.clientWidth||window.screen.width,s=window.innerHeight||document.documentElement.clientHeight||window.screen.height;r.left=a/2-r.width/2+n,r.top=s/2-r.height/2+o;var c=Object.keys(r).reduce((function(e,t){return e.push("".concat(t,"=").concat(r[t])),e}),[]).join(","),u=window.open(e,t,c);return window.focus&&u.focus(),u}const p={name:"OAuth",computed:f(f({},(0,r(20629).rn)("auth",["user"])),{},{providers:function(){return(0,a.v)("oauth")},providersCount:function(){return this.providers?Object.keys(this.providers).length:0}}),mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{ucfirst:s.Ps,loginWith:function(e){var t=this;return u(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=m("",t.$t("Log in with {0}",[e])),r.next=3,t.$store.dispatch("auth/fetchOAuthRedirectUrl",{provider:e});case 3:n.location.href=r.sent;case 4:case"end":return r.stop()}}),r)})))()},onMessage:function(e){var t=this;return u(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.origin===window.origin&&e.data.user){r.next=2;break}return r.abrupt("return");case 2:t.$store.dispatch("auth/updateUser",e.data.user),t.user.two_factor_auth_enabled&&!t.user.two_factor_auth_passed?t.$router.push({name:"2fa"}):window.location.reload();case 4:case"end":return r.stop()}}),r)})))()}}}},79606:(e,t,r)=>{"use strict";r.d(t,{s:()=>n,x:()=>o});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.providersCount?r("v-row",[r("v-col",{staticClass:"text-center"},[e._l(e.providers,(function(t,n){return r("v-btn",{key:n,staticClass:"mx-2",attrs:{fab:"",icon:"",elevation:"5"},on:{click:function(t){return e.loginWith(n)}}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(o){var a=o.on;return[r("v-icon",e._g({attrs:{large:""}},a),[e._v("\n            mdi-"+e._s(t.mdi||n)+"\n          ")])]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(e.$t("Log in with {0}",[e.ucfirst(n)])))])])],1)})),e._v(" "),r("v-divider",{staticClass:"my-7"})],2)],1):e._e()},o=[]},23580:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var n=r(87757),o=r.n(n),a=r(15566),s=r(50175),i=r.n(s),c=r(18623),u=r(57591),l=r(97991);function f(e,t,r,n,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}const d={components:{OAuth:u.Z,VueRecaptcha:l.Z},mixins:[c.Z],middleware:"guest",metaInfo:function(){return{title:this.$t("Registration")}},data:function(){return{agreementAccepted:!1,showPassword:!1,showPassword2:!1,form:new(i())({name:null,email:null,password:null,password_confirmation:null,recaptcha:null})}},computed:{appLogoUrl:function(){return(0,a.v)("app.logo")},emailVerification:function(){return(0,a.v)("settings.email_verification")},recaptchaPublicKey:function(){return(0,a.v)("services.recaptcha.public_key")}},methods:{register:function(){var e,t=this;return(e=o().mark((function e(){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/auth/register").catch((function(){return t.recaptchaPublicKey&&(t.form.recaptcha=null,t.$refs.recaptcha.reset()),{}}));case 2:r=e.sent,(n=r.data)&&(t.$store.dispatch("auth/updateUser",n),t.$store.dispatch("message/success",{text:t.emailVerification?["We have sent a verification link to your email.","Please click on that link to verify your email and continue using our website."].map((function(e){return t.$t(e)})).join(" "):t.$t("You have successfully registered!")}),t.$router.push({name:"home"}));case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){f(a,n,o,s,i,"next",e)}function i(e){f(a,n,o,s,i,"throw",e)}s(void 0)}))})()}}};var m=r(51900),p=r(43453),v=r.n(p),h=r(97844),w=r(4330),y=r(43776),g=r(5255),b=r(59933),_=r(17024),k=r(66530),x=r(83240),P=r(17100),$=r(57894),O=r(22515),V=r(54933),C=r(40961),j=r(73845),Z=(0,m.Z)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary"}},[r("router-link",{attrs:{to:{name:"home"}}},[r("v-avatar",{attrs:{size:"40",tile:""}},[r("v-img",{attrs:{src:e.appLogoUrl}})],1)],1),e._v(" "),r("v-toolbar-title",{staticClass:"ml-2"},[e._v("\n            "+e._s(e.$t("Registration"))+"\n          ")]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-card-text",[r("o-auth"),e._v(" "),r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.register(t)}},model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[r("v-text-field",{attrs:{label:e.$t("Name"),type:"text",name:"name",rules:[e.validationRequired],error:e.form.errors.has("name"),"error-messages":e.form.errors.get("name"),outlined:""},on:{keydown:function(t){return e.clearFormErrors(t,"name")}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Email"),type:"email",name:"email",rules:[e.validationRequired,e.validationEmail],error:e.form.errors.has("email"),"error-messages":e.form.errors.get("email"),outlined:""},on:{keydown:function(t){return e.clearFormErrors(t,"email")}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Password"),"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",name:"password",rules:[e.validationRequired,function(t){return e.validationMinLength(t,6)}],error:e.form.errors.has("password"),"error-messages":e.form.errors.get("password"),outlined:"",counter:!0},on:{"click:append":function(t){e.showPassword=!e.showPassword},keydown:function(t){return e.clearFormErrors(t,"password")}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Confirm password"),"append-icon":e.showPassword2?"mdi-eye":"mdi-eye-off",type:e.showPassword2?"text":"password",name:"password_confirmation",rules:[e.validationRequired,function(t){return e.validationMatch(e.form.password,t)}],error:e.form.errors.has("password_confirmation"),"error-messages":e.form.errors.get("password_confirmation"),outlined:"",counter:!0},on:{"click:append":function(t){e.showPassword2=!e.showPassword2},keydown:function(t){return e.clearFormErrors(t,"password_confirmation")}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}}),e._v(" "),r("v-checkbox",{attrs:{color:"primary"},scopedSlots:e._u([{key:"label",fn:function(){return[r("i18n",{attrs:{path:"I accept {0} and {1}",tag:"div"},scopedSlots:e._u([{key:"0",fn:function(){return[r("a",{attrs:{href:"/pages/terms-of-use",target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[e._v("\n                      "+e._s(e.$t("Terms of use"))+"\n                    ")])]},proxy:!0},{key:"1",fn:function(){return[r("a",{attrs:{href:"/pages/privacy-policy",target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[e._v("\n                      "+e._s(e.$t("Privacy policy"))+"\n                    ")])]},proxy:!0}])})]},proxy:!0}]),model:{value:e.agreementAccepted,callback:function(t){e.agreementAccepted=t},expression:"agreementAccepted"}}),e._v(" "),e.recaptchaPublicKey?r("vue-recaptcha",{ref:"recaptcha",staticClass:"mb-3",attrs:{sitekey:e.recaptchaPublicKey,loadRecaptchaScript:!0,theme:this.$vuetify.theme.isDark?"dark":"light"},on:{verify:function(t){return e.form.recaptcha=t}}}):e._e(),e._v(" "),r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"text-center text-md-left"},[r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.formIsValid||e.form.busy||!e.agreementAccepted||!!e.recaptchaPublicKey&&!e.form.recaptcha,loading:e.form.busy}},[e._v("\n                  "+e._s(e.$t("Register"))+"\n                ")])],1),e._v(" "),r("v-col",{staticClass:"text-center text-md-right"},[r("router-link",{attrs:{to:{name:"login"}}},[e._v("\n                  "+e._s(e.$t("Already signed up?"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const E=Z.exports;v()(Z,{VAvatar:h.Z,VBtn:w.Z,VCard:y.Z,VCardText:g.ZB,VCheckbox:b.Z,VCol:_.Z,VContainer:k.Z,VForm:x.Z,VImg:P.Z,VRow:$.Z,VSpacer:O.Z,VTextField:V.Z,VToolbar:C.Z,VToolbarTitle:j.qW})}}]);
//# sourceMappingURL=register.js.map