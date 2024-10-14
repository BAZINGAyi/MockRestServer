(function(){"use strict";var e={285:function(e,t,o){var s=o(751),r=o(641);const n={id:"app"},a={class:"navbar navbar-expand-lg navbar-dark bg-dark"},l={class:"container-fluid"},i={class:"collapse navbar-collapse"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},c={class:"nav-item"},p={class:"nav-item"};function u(e,t,o,s,u,m){const h=(0,r.g2)("router-link"),b=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.Lk)("nav",a,[(0,r.Lk)("div",l,[(0,r.bF)(h,{class:"navbar-brand",to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("MockRestServer")]))),_:1}),(0,r.Lk)("div",i,[(0,r.Lk)("ul",d,[(0,r.Lk)("li",c,[(0,r.bF)(h,{class:"nav-link",to:"/p_apis"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("APIs")]))),_:1})]),(0,r.Lk)("li",p,[(0,r.bF)(h,{class:"nav-link",to:"/p_api-properties"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("API Properties")]))),_:1})])])])])]),(0,r.bF)(b)])}var m={name:"App"},h=o(262);const b=(0,h.A)(m,[["render",u]]);var f=b,y=o(220),k=o(33);const v={class:"modal fade",id:"dryRunModal",tabindex:"-1","aria-labelledby":"dryRunModalLabel","aria-hidden":"true"},L={class:"modal-dialog"},g={class:"modal-content"},A={class:"modal-body"},P={class:"table table-striped mt-4"},C={class:"d-flex align-items-center"},F=["onUpdate:modelValue","onChange"],E=["value"],w=["onClick"],M=["onClick"],I=["onClick"],S=["onClick"];function T(e,t,o,n,a,l){const i=(0,r.g2)("ApiForm");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",v,[(0,r.Lk)("div",L,[(0,r.Lk)("div",g,[t[0]||(t[0]=(0,r.Lk)("div",{class:"modal-header"},[(0,r.Lk)("h5",{class:"modal-title",id:"dryRunModalLabel"},"Dry Run Result"),(0,r.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,r.Lk)("div",A,(0,k.v_)(a.dryRunMessage),1),t[1]||(t[1]=(0,r.Lk)("div",{class:"modal-footer"},[(0,r.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1))])])]),t[3]||(t[3]=(0,r.Lk)("h2",null,"API Mock List",-1)),(0,r.bF)(i,{ref:"apiForm",form:a.form,onSave:l.saveApi},null,8,["form","onSave"]),(0,r.Lk)("table",P,[t[2]||(t[2]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"ID"),(0,r.Lk)("th",null,"Name"),(0,r.Lk)("th",null,"URL"),(0,r.Lk)("th",null,"Method"),(0,r.Lk)("th",null,"Description"),(0,r.Lk)("th",null,"Mapping Property"),(0,r.Lk)("th",null,"Actions")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.apis,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.id},[(0,r.Lk)("td",null,(0,k.v_)(e.id),1),(0,r.Lk)("td",null,(0,k.v_)(e.name),1),(0,r.Lk)("td",null,(0,k.v_)(e.url),1),(0,r.Lk)("td",null,(0,k.v_)(e.method),1),(0,r.Lk)("td",null,(0,k.v_)(e.description),1),(0,r.Lk)("td",null,[(0,r.Lk)("div",C,[(0,r.bo)((0,r.Lk)("select",{class:"form-select me-2","onUpdate:modelValue":t=>e.apiPropertyId=t,onChange:t=>l.bindProperty(e,t)},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.properties,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.id},(0,k.v_)(e.propertyName),9,E)))),128))],40,F),[[s.u1,e.apiPropertyId]]),(0,r.Lk)("button",{class:"btn btn-secondary btn-sm",onClick:t=>l.unbindProperty(e)},"Unbind",8,w)])]),(0,r.Lk)("td",null,[(0,r.Lk)("button",{class:"btn btn-primary btn-sm",onClick:t=>l.editApi(e)},"Edit",8,M),(0,r.Lk)("button",{class:"btn btn-danger btn-sm",onClick:t=>l.deleteApi(e.id)},"Delete",8,I),(0,r.Lk)("button",{class:"btn btn-info btn-sm",onClick:t=>l.dryRunApi(e)},"Dry Run",8,S)])])))),128))])]),t[4]||(t[4]=(0,r.Lk)("div",{id:"toast-container",class:"position-fixed top-0 end-0 p-3",style:{"z-index":"1050"}},null,-1))])}const x={class:"d-flex justify-content-start mb-5"},_={class:"ms-0"},$={class:"modal fade",id:"apiModal",tabindex:"-1","aria-labelledby":"apiModalLabel","aria-hidden":"true",ref:"apiModal"},R={class:"modal-dialog"},N={class:"modal-content"},O={class:"modal-header"},j={class:"modal-body"},U={class:"form-group"},J={class:"form-group"},D={key:0,class:"text-danger"},X={class:"form-group"},V={class:"form-group"};function q(e,t,o,n,a,l){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",x,[(0,r.Lk)("div",_,[(0,r.Lk)("button",{class:"btn btn-dark",onClick:t[0]||(t[0]=(...e)=>l.openModal&&l.openModal(...e))},"Add New Mock API")])]),(0,r.Lk)("div",$,[(0,r.Lk)("div",R,[(0,r.Lk)("div",N,[(0,r.Lk)("div",O,[t[7]||(t[7]=(0,r.Lk)("h5",{class:"modal-title",id:"apiModalLabel"},"API Mock",-1)),(0,r.Lk)("button",{type:"button",class:"btn-close",onClick:t[1]||(t[1]=(...e)=>l.closeModal&&l.closeModal(...e)),"aria-label":"Close"})]),(0,r.Lk)("div",j,[(0,r.Lk)("form",{onSubmit:t[6]||(t[6]=(0,s.D$)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent"])),class:"mt-4"},[(0,r.Lk)("div",U,[t[8]||(t[8]=(0,r.Lk)("label",{for:"name"},"Name:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>a.localForm.name=e),placeholder:"Name",required:""},null,512),[[s.Jo,a.localForm.name]])]),(0,r.Lk)("div",J,[t[9]||(t[9]=(0,r.Lk)("label",{for:"url"},"URL:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>a.localForm.url=e),placeholder:"URL",required:""},null,512),[[s.Jo,a.localForm.url]]),a.urlError?((0,r.uX)(),(0,r.CE)("small",D,(0,k.v_)(a.urlError),1)):(0,r.Q3)("",!0)]),(0,r.Lk)("div",X,[t[11]||(t[11]=(0,r.Lk)("label",{for:"method"},"Method:",-1)),(0,r.bo)((0,r.Lk)("select",{class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>a.localForm.method=e),required:""},t[10]||(t[10]=[(0,r.Lk)("option",{value:"GET"},"GET",-1),(0,r.Lk)("option",{value:"POST"},"POST",-1),(0,r.Lk)("option",{value:"PUT"},"PUT",-1),(0,r.Lk)("option",{value:"DELETE"},"DELETE",-1)]),512),[[s.u1,a.localForm.method]])]),(0,r.Lk)("div",V,[t[12]||(t[12]=(0,r.Lk)("label",{for:"description"},"Description:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=e=>a.localForm.description=e),placeholder:"Description"},null,512),[[s.Jo,a.localForm.description]])]),t[13]||(t[13]=(0,r.Lk)("div",{class:"d-flex justify-content-center"},[(0,r.Lk)("button",{type:"submit",class:"btn btn-success btn-lg"},"Save")],-1))],32)])])])],512)])}var B=o(454),z={props:{form:{type:Object,required:!0}},data(){return{localForm:{...this.form},modalInstance:null,urlError:""}},watch:{form:{handler(e){this.localForm={...e}},deep:!0}},methods:{submitForm(){this.validateUrl()&&(this.$emit("save",this.localForm),this.closeModal())},validateUrl(){const e=/^[a-zA-Z0-9_\-+/]+$/;return e.test(this.localForm.url)?(this.urlError="",!0):(this.urlError="Please enter a valid URL.",!1)},openModal(e=null){e&&(this.localForm={...e}),this.modalInstance.show()},closeModal(){this.modalInstance.hide(),this.resetForm()},resetForm(){this.localForm={id:null,name:"",url:"",method:"",description:""}}},mounted(){this.modalInstance=new B.aF(this.$refs.apiModal)}};const G=(0,h.A)(z,[["render",q],["__scopeId","data-v-3297ab05"]]);var H=G,K=o(335);const W=K.A.create({baseURL:"/i_api",headers:{"Content-Type":"application/json"}});var Q={getApis(){return W.get("/api")},saveApi(e){return e.id?W.put(`/api/${e.id}`,e):W.post("/api",e)},deleteApi(e){return W.delete(`/api/${e}`)},bindProperty(e,t){return W.post("/api/bind",{apiId:e,apiPropertyId:t})},unbindProperty(e){return W.post("/api/unbind",{apiId:e})},getApiProperties(){return W.get("/api-properties")},saveApiProperty(e){return e.id?W.put(`/api-properties/${e.id}`,e):W.post("/api-properties",e)},deleteApiProperty(e){return W.delete(`/api-properties/${e}`)},dryrunApi(e){const t=K.A.create({headers:{"Content-Type":"application/json"}});return"GET"===e.method?t.get(e.url):"POST"===e.method?t.post(e.url,e):"PUT"===e.method?t.put(e.url,e):"DELETE"===e.method?t.delete(e.url):void 0}},Z={components:{ApiForm:H},data(){return{apis:[],properties:[],form:{id:null,name:"",url:"",method:"",description:""},dryRunMessage:""}},methods:{async fetchApis(){const e=await Q.getApis();this.apis=e.data.sort(((e,t)=>e.id-t.id))},async fetchProperties(){const e=await Q.getApiProperties();this.properties=e.data},async saveApi(e){try{const t=await Q.saveApi(e);this.resetForm(),console.log(t),this.showToast("API saved successfully","success"),this.fetchApis()}catch(t){this.handleError(t),this.fetchApis()}},editApi(e){this.form={...e},this.$refs.apiForm.openModal(this.form)},async deleteApi(e){try{await Q.deleteApi(e),this.showToast("API deleted successfully","success"),this.fetchApis()}catch(t){this.handleError(t),this.fetchApis()}},async bindProperty(e,t){console.log(e);const o=t.target.value;try{const t=await Q.bindProperty(e.id,o);console.log(t),this.showToast("Property bound successfully","success"),this.fetchApis()}catch(s){this.handleError(s),this.fetchApis()}},async unbindProperty(e){try{const t=await Q.unbindProperty(e.id);console.log(t),this.showToast("Property unbound successfully","success"),e.propertyId=null,this.fetchApis()}catch(t){this.handleError(t),this.fetchApis()}},async dryRunApi(e){const t=e.name;try{const o=await Q.dryrunApi(e);console.log(o),this.showModal(t,o)}catch(o){o.response?this.showModal(t,o.response):(this.dryRunMessage=`Dry Run Error: ${o.message}`,alert(this.dryRunMessage))}},showModal(e,t){console.log(t);const o=JSON.stringify(t.data,null,2),s=t.status,r=document.getElementById("dryRunModal"),n=r.querySelector(".modal-body");n.innerHTML=`\n        <strong>API Name:</strong> ${e} <br><br>\n        <strong>Status Code:</strong> ${s} <br><br>\n        <strong>Response:</strong> <br>\n        <pre>${o}</pre>\n      `;const a=new B.aF(document.getElementById("dryRunModal"));a.show()},handleError(e){if(e.response){const t=JSON.stringify(e.response.data);this.showToast(`Error: ${e.response.statusText}, info: ${t}`,"danger")}else this.showToast(`Error: ${e.message}`,"danger")},resetForm(){this.form={id:null,name:"",description:""}},showToast(e,t="success"){const o=document.getElementById("toast-container"),s=document.createElement("div");s.className=`toast align-items-center text-white bg-${t} border-0`,s.setAttribute("role","alert"),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),s.innerHTML=`\n        <div class="d-flex">\n          <div class="toast-body">${e}</div>\n          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>\n        </div>\n      `,o.appendChild(s);const r=new B.y8(s);r.show()}},mounted(){this.fetchApis(),this.fetchProperties()}};const Y=(0,h.A)(Z,[["render",T],["__scopeId","data-v-ea28f520"]]);var ee=Y;const te={class:"table table-striped mt-4"},oe=["onUpdate:modelValue"],se=["onClick"],re=["onClick"];function ne(e,t,o,n,a,l){const i=(0,r.g2)("ApiPropertyForm");return(0,r.uX)(),(0,r.CE)("div",null,[t[1]||(t[1]=(0,r.Lk)("h2",null,"API Properties List",-1)),(0,r.bF)(i,{ref:"apiPropertyForm",form:a.form,onSave:l.saveApiProperty},null,8,["form","onSave"]),(0,r.Lk)("table",te,[t[0]||(t[0]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"ID"),(0,r.Lk)("th",null,"Property Name"),(0,r.Lk)("th",null,"Response Status Code"),(0,r.Lk)("th",null,"Response Content"),(0,r.Lk)("th",null,"Actions")])],-1)),(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.properties,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.id},[(0,r.Lk)("td",null,(0,k.v_)(e.id),1),(0,r.Lk)("td",null,(0,k.v_)(e.propertyName),1),(0,r.Lk)("td",null,(0,k.v_)(e.responseStatusCode),1),(0,r.Lk)("td",null,[(0,r.bo)((0,r.Lk)("textarea",{class:"form-control",rows:"3",readonly:"","onUpdate:modelValue":t=>e.responseContent=t},null,8,oe),[[s.Jo,e.responseContent]])]),(0,r.Lk)("td",null,[(0,r.Lk)("button",{class:"btn btn-primary btn-sm",onClick:t=>l.editApiProperty(e)},"Edit",8,se),(0,r.Lk)("button",{class:"btn btn-danger btn-sm",onClick:t=>l.deleteApiProperty(e.id)},"Delete",8,re)])])))),128))])]),t[2]||(t[2]=(0,r.Lk)("div",{id:"toast-container",class:"position-fixed top-0 end-0 p-3",style:{"z-index":"1050"}},null,-1))])}const ae={class:"d-flex justify-contentstart mb-3"},le={class:"modal fade",id:"propertyModal",tabindex:"-1","aria-labelledby":"propertyModalLabel","aria-hidden":"true",ref:"propertyModal"},ie={class:"modal-dialog"},de={class:"modal-content"},ce={class:"modal-header"},pe={class:"modal-body"},ue={class:"form-group"},me={class:"form-group"},he={class:"form-group"},be={key:0,class:"text-danger"},fe={class:"d-flex justify-content-center"},ye=["disabled"];function ke(e,t,o,n,a,l){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",ae,[(0,r.Lk)("button",{class:"btn btn-dark",onClick:t[0]||(t[0]=(...e)=>l.openModal&&l.openModal(...e))},"Add New Api Property")]),(0,r.Lk)("div",le,[(0,r.Lk)("div",ie,[(0,r.Lk)("div",de,[(0,r.Lk)("div",ce,[t[7]||(t[7]=(0,r.Lk)("h5",{class:"modal-title",id:"propertyModalLabel"},"API Property Content",-1)),(0,r.Lk)("button",{type:"button",class:"btn-close",onClick:t[1]||(t[1]=(...e)=>l.closeModal&&l.closeModal(...e)),"aria-label":"Close"})]),(0,r.Lk)("div",pe,[(0,r.Lk)("form",{onSubmit:t[6]||(t[6]=(0,s.D$)(((...e)=>l.onSubmit&&l.onSubmit(...e)),["prevent"])),class:"mt-4"},[(0,r.Lk)("div",ue,[t[8]||(t[8]=(0,r.Lk)("label",{for:"propertyName"},"Property Name:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>a.localForm.propertyName=e),required:""},null,512),[[s.Jo,a.localForm.propertyName]])]),(0,r.Lk)("div",me,[t[9]||(t[9]=(0,r.Lk)("label",{for:"responseStatusCode"},"Response Status Code:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"number",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>a.localForm.responseStatusCode=e),required:""},null,512),[[s.Jo,a.localForm.responseStatusCode]])]),(0,r.Lk)("div",he,[t[10]||(t[10]=(0,r.Lk)("label",{for:"responseContent"},"Response Content (JSON):",-1)),(0,r.bo)((0,r.Lk)("textarea",{class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>a.localForm.responseContent=e),onInput:t[5]||(t[5]=(...e)=>l.validateJson&&l.validateJson(...e)),rows:"10",required:""},null,544),[[s.Jo,a.localForm.responseContent]]),a.jsonError?((0,r.uX)(),(0,r.CE)("span",be,"Invalid JSON format")):(0,r.Q3)("",!0)]),(0,r.Lk)("div",fe,[(0,r.Lk)("button",{type:"submit",class:"btn btn-success btn-lg",disabled:a.jsonError},"Save",8,ye)])],32)])])])],512)])}var ve={props:{form:{type:Object,required:!0}},data(){return{localForm:{...this.form},jsonError:!1,modalInstance:null}},watch:{form:{handler(e){this.localForm={...e}},deep:!0}},methods:{validateJson(){try{JSON.parse(this.localForm.responseContent),this.jsonError=!1}catch(e){this.jsonError=!0}},onSubmit(){this.jsonError||(this.$emit("save",this.localForm),this.closeModal())},openModal(e=null){e&&(this.localForm={...e}),this.modalInstance.show()},closeModal(){this.modalInstance.hide(),this.resetForm()},resetForm(){this.localForm={id:null,propertyName:"",responseStatusCode:"",responseContent:""}}},mounted(){this.modalInstance=new B.aF(this.$refs.propertyModal)}};const Le=(0,h.A)(ve,[["render",ke],["__scopeId","data-v-7e7e29b6"]]);var ge=Le,Ae={components:{ApiPropertyForm:ge},data(){return{properties:[],form:{id:null,propertyName:"",responseStatusCode:"",responseContent:""},showModal:!0}},methods:{async fetchApiProperties(){const e=await Q.getApiProperties();this.properties=e.data.sort(((e,t)=>e.id-t.id))},async saveApiProperty(e){await Q.saveApiProperty(e),this.resetForm(),this.showToast("API Property saved successfully","success"),this.fetchApiProperties()},editApiProperty(e){this.form={...e},this.$refs.apiPropertyForm.openModal(this.form)},async deleteApiProperty(e){try{await Q.deleteApiProperty(e),this.fetchApiProperties(),this.showToast("API Property deleted successfully","success")}catch(t){if(console.log(t),t.response){const e=JSON.stringify(t.response.data);this.showToast(`Error: ${t.response.statusText}, info: ${e}`,"danger")}else this.showToast(`Error: ${t.message}`,"danger")}},resetForm(){this.form={id:null,propertyName:"",responseStatusCode:"",responseContent:""}},showToast(e,t){const o=document.getElementById("toast-container"),s=document.createElement("div");s.className=`toast align-items-center text-white bg-${t} border-0`,s.setAttribute("role","alert"),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),s.innerHTML=`\n          <div class="d-flex">\n            <div class="toast-body">${e}</div>\n            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>\n          </div>\n        `,o.appendChild(s);const r=new B.y8(s);r.show()}},mounted(){this.fetchApiProperties()}};const Pe=(0,h.A)(Ae,[["render",ne],["__scopeId","data-v-2f7d9f48"]]);var Ce=Pe;o(736);const Fe=[{path:"/",redirect:"/p_apis"},{path:"/p_apis",component:ee},{path:"/p_api-properties",component:Ce}],Ee=(0,y.aE)({history:(0,y.LA)(),routes:Fe});(0,s.Ef)(f).use(Ee).mount("#app")}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,s,r,n){if(!s){var a=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],n=e[c][2];for(var l=!0,i=0;i<s.length;i++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](s[i])}))?s.splice(i--,1):(l=!1,n<a&&(a=n));if(l){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,r,n]}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,a=s[0],l=s[1],i=s[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(i)var c=i(o)}for(t&&t(s);d<a.length;d++)n=a[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(285)}));s=o.O(s)})();
//# sourceMappingURL=app.19f47afa.js.map