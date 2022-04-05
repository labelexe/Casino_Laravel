(self.webpackChunk=self.webpackChunk||[]).push([[3336],{35425:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});const s={props:["id","small"]}},22241:(t,e,n)=>{"use strict";n.d(e,{s:()=>s,x:()=>r});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[n("v-btn",t._g({attrs:{icon:""}},s),[n("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{to:{name:"admin.chat.messages.delete",params:{id:t.id}},exact:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{small:t.small}},[t._v("mdi-delete")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("Delete")))])],1)],1)],1)],1)},r=[]},10842:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>$});var s=n(87757),r=n.n(s),a=n(50175),o=n.n(a);function i(t,e,n,s,r,a,o){try{var i=t[a](o),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(s,r)}const c={middleware:["auth","verified","2fa_passed","admin"],components:{ChatMessageMenu:n(83642).Z},props:["id"],metaInfo:function(){return{title:this.$t("Chat message {0}",[this.id])}},data:function(){return{form:new(o())}},methods:{destroy:function(){var t,e=this;return(t=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.delete("/api/admin/chat/messages/".concat(e.id));case 2:e.$store.dispatch("message/success",{text:e.$t("Message successfully deleted.")}),e.$router.push({name:"admin.chat.messages.index"});case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(s,r){var a=t.apply(e,n);function o(t){i(a,s,r,o,c,"next",t)}function c(t){i(a,s,r,o,c,"throw",t)}o(void 0)}))})()}}};var l=n(51900),u=n(43453),v=n.n(u),d=n(4330),m=n(43776),f=n(5255),h=n(17024),p=n(66530),_=n(83240),b=n(6571),g=n(57894),y=n(22515),Z=n(40961),w=n(73845),V=(0,l.Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",[n("v-toolbar",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Chat message {0}",[t.id]))+"\n          ")]),t._v(" "),n("v-spacer"),t._v(" "),n("chat-message-menu",{attrs:{id:t.id}})],1),t._v(" "),n("v-card-text",[n("p",[t._v("\n            "+t._s(t.$t("Are you sure you want to delete this message?"))+"\n          ")]),t._v(" "),n("v-form",{on:{submit:function(e){return e.preventDefault(),t.destroy(e)}}},[n("v-btn",{attrs:{type:"submit",color:"error",disabled:t.form.busy,loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("Delete"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const $=V.exports;v()(V,{VBtn:d.Z,VCard:m.Z,VCardText:f.ZB,VCol:h.Z,VContainer:p.Z,VForm:_.Z,VIcon:b.Z,VRow:g.Z,VSpacer:y.Z,VToolbar:Z.Z,VToolbarTitle:w.qW})}}]);
//# sourceMappingURL=admin-chat-messages-delete.js.map