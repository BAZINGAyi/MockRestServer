(function(){"use strict";var e={606:function(e,t,o){var r=o(751),n=o(641);const s={id:"app"};function l(e,t,o,r,l,a){const i=(0,n.g2)("router-link"),p=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.Lk)("nav",null,[(0,n.bF)(i,{to:"/p_apis"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("APIs")]))),_:1}),(0,n.bF)(i,{to:"/p_api-properties"},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("API Properties")]))),_:1})]),(0,n.bF)(p)])}var a={name:"App"},i=o(262);const p=(0,i.A)(a,[["render",l]]);var d=p,c=o(220),u=o(33);const m={class:"table table-striped mt-4"},f={class:"d-flex align-items-center"},h=["onUpdate:modelValue","onChange"],b=["value"],k=["onClick"],y=["onClick"],L=["onClick"];function v(e,t,o,s,l,a){const i=(0,n.g2)("ApiForm");return(0,n.uX)(),(0,n.CE)("div",null,[t[1]||(t[1]=(0,n.Lk)("h2",null,"API Mock List",-1)),(0,n.bF)(i,{ref:"apiForm",form:l.form,onSave:a.saveApi},null,8,["form","onSave"]),(0,n.Lk)("table",m,[t[0]||(t[0]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"ID"),(0,n.Lk)("th",null,"Name"),(0,n.Lk)("th",null,"URL"),(0,n.Lk)("th",null,"Method"),(0,n.Lk)("th",null,"Description"),(0,n.Lk)("th",null,"Mapping Property"),(0,n.Lk)("th",null,"Actions")])],-1)),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.apis,(e=>((0,n.uX)(),(0,n.CE)("tr",{key:e.id},[(0,n.Lk)("td",null,(0,u.v_)(e.id),1),(0,n.Lk)("td",null,(0,u.v_)(e.name),1),(0,n.Lk)("td",null,(0,u.v_)(e.url),1),(0,n.Lk)("td",null,(0,u.v_)(e.method),1),(0,n.Lk)("td",null,(0,u.v_)(e.description),1),(0,n.Lk)("td",null,[(0,n.Lk)("div",f,[(0,n.bo)((0,n.Lk)("select",{class:"form-select me-2","onUpdate:modelValue":t=>e.apiPropertyId=t,onChange:t=>a.bindProperty(e,t)},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.properties,(e=>((0,n.uX)(),(0,n.CE)("option",{key:e.id,value:e.id},(0,u.v_)(e.propertyName),9,b)))),128))],40,h),[[r.u1,e.apiPropertyId]]),(0,n.Lk)("button",{class:"btn btn-secondary btn-sm",onClick:t=>a.unbindProperty(e)},"Unbind",8,k)])]),(0,n.Lk)("td",null,[(0,n.Lk)("button",{class:"btn btn-primary btn-sm",onClick:t=>a.editApi(e)},"Edit",8,y),(0,n.Lk)("button",{class:"btn btn-danger btn-sm",onClick:t=>a.deleteApi(e.id)},"Delete",8,L)])])))),128))])])])}const A={class:"modal fade",id:"apiModal",tabindex:"-1","aria-labelledby":"apiModalLabel","aria-hidden":"true",ref:"apiModal"},P={class:"modal-dialog"},g={class:"modal-content"},C={class:"modal-header"},F={class:"modal-body"},E={class:"form-group"},I={class:"form-group"},M={class:"form-group"},S={class:"form-group"};function w(e,t,o,s,l,a){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("button",{class:"btn btn-primary mb-3",onClick:t[0]||(t[0]=(...e)=>a.openModal&&a.openModal(...e))},"Add New Mock API"),(0,n.Lk)("div",A,[(0,n.Lk)("div",P,[(0,n.Lk)("div",g,[(0,n.Lk)("div",C,[t[7]||(t[7]=(0,n.Lk)("h5",{class:"modal-title",id:"apiModalLabel"},"API Mock",-1)),(0,n.Lk)("button",{type:"button",class:"btn-close",onClick:t[1]||(t[1]=(...e)=>a.closeModal&&a.closeModal(...e)),"aria-label":"Close"})]),(0,n.Lk)("div",F,[(0,n.Lk)("form",{onSubmit:t[6]||(t[6]=(0,r.D$)(((...e)=>a.submitForm&&a.submitForm(...e)),["prevent"])),class:"mt-4"},[(0,n.Lk)("div",E,[t[8]||(t[8]=(0,n.Lk)("label",{for:"name"},"Name:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>l.localForm.name=e),placeholder:"Name",required:""},null,512),[[r.Jo,l.localForm.name]])]),(0,n.Lk)("div",I,[t[9]||(t[9]=(0,n.Lk)("label",{for:"url"},"URL:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>l.localForm.url=e),placeholder:"URL",required:""},null,512),[[r.Jo,l.localForm.url]])]),(0,n.Lk)("div",M,[t[11]||(t[11]=(0,n.Lk)("label",{for:"method"},"Method:",-1)),(0,n.bo)((0,n.Lk)("select",{class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>l.localForm.method=e),required:""},t[10]||(t[10]=[(0,n.Lk)("option",{value:"GET"},"GET",-1),(0,n.Lk)("option",{value:"POST"},"POST",-1),(0,n.Lk)("option",{value:"PUT"},"PUT",-1),(0,n.Lk)("option",{value:"DELETE"},"DELETE",-1)]),512),[[r.u1,l.localForm.method]])]),(0,n.Lk)("div",S,[t[12]||(t[12]=(0,n.Lk)("label",{for:"description"},"Description:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=e=>l.localForm.description=e),placeholder:"Description"},null,512),[[r.Jo,l.localForm.description]])]),t[13]||(t[13]=(0,n.Lk)("div",{class:"d-flex justify-content-center"},[(0,n.Lk)("button",{type:"submit",class:"btn btn-success btn-lg"},"Save")],-1))],32)])])])],512)])}var $=o(454),_={props:{form:{type:Object,required:!0}},data(){return{localForm:{...this.form},modalInstance:null}},watch:{form:{handler(e){this.localForm={...e}},deep:!0}},methods:{submitForm(){this.$emit("save",this.localForm),this.closeModal()},openModal(e=null){e&&(this.localForm={...e}),this.modalInstance.show()},closeModal(){this.modalInstance.hide(),this.resetForm()},resetForm(){this.localForm={id:null,name:"",url:"",method:"",description:""}}},mounted(){this.modalInstance=new $.aF(this.$refs.apiModal)}};const O=(0,i.A)(_,[["render",w],["__scopeId","data-v-0b340322"]]);var N=O,x=o(335);const j=x.A.create({baseURL:"/i_api",headers:{"Content-Type":"application/json"}});var J={getApis(){return j.get("/api")},saveApi(e){return e.id?j.put(`/api/${e.id}`,e):j.post("/api",e)},deleteApi(e){return j.delete(`/api/${e}`)},bindProperty(e,t){return j.post("/api/bind",{apiId:e,apiPropertyId:t})},unbindProperty(e){return j.post("/api/unbind",{apiId:e})},getApiProperties(){return j.get("/api-properties")},saveApiProperty(e){return e.id?j.put(`/api-properties/${e.id}`,e):j.post("/api-properties",e)},deleteApiProperty(e){return j.delete(`/api-properties/${e}`)}},T={components:{ApiForm:N},data(){return{apis:[],properties:[],form:{id:null,name:"",url:"",method:"",description:""}}},methods:{async fetchApis(){const e=await J.getApis();this.apis=e.data.sort(((e,t)=>e.id-t.id))},async fetchProperties(){const e=await J.getApiProperties();this.properties=e.data},async saveApi(e){try{const t=await J.saveApi(e);console.log(t),alert("API saved successfully"),this.fetchApis()}catch(t){if(t.response){const e=JSON.stringify(t.response.data);alert(`Error: ${t.response.statusText}, info: ${e}`)}else alert(`Error: ${t.message}`);this.fetchApis()}},editApi(e){this.form={...e},this.$refs.apiForm.openModal(this.form)},async deleteApi(e){try{await J.deleteApi(e),alert("API deleted successfully"),this.fetchApis()}catch(t){if(t.response){const e=JSON.stringify(t.response.data);alert(`Error: ${t.response.statusText}, info: ${e}`)}else alert(`Error: ${t.message}`);this.fetchApis()}},async bindProperty(e,t){console.log(e);const o=t.target.value;try{const t=await J.bindProperty(e.id,o);console.log(t),alert("Property bound successfully"),this.fetchApis()}catch(r){if(r.response){const e=JSON.stringify(r.response.data);alert(`Error: ${r.response.statusText}, info: ${e}`)}else alert(`Error: ${r.message}`);this.fetchApis()}},async unbindProperty(e){try{const t=await J.unbindProperty(e.id);console.log(t),alert("Property unbound successfully"),e.propertyId=null,this.fetchApis()}catch(t){if(t.response){const e=JSON.stringify(t.response.data);alert(`Error: ${t.response.statusText}, info: ${e}`)}else alert(`Error: ${t.message}`);this.fetchApis()}},resetForm(){this.form={id:null,name:"",description:""}}},mounted(){this.fetchApis(),this.fetchProperties()}};const U=(0,i.A)(T,[["render",v],["__scopeId","data-v-6a87d2f6"]]);var X=U;const D={class:"table table-striped mt-4"},V=["onUpdate:modelValue"],q=["onClick"],R=["onClick"];function K(e,t,o,s,l,a){const i=(0,n.g2)("ApiPropertyForm");return(0,n.uX)(),(0,n.CE)("div",null,[t[1]||(t[1]=(0,n.Lk)("h2",null,"API Properties List",-1)),(0,n.bF)(i,{ref:"apiPropertyForm",form:l.form,onSave:a.saveApiProperty},null,8,["form","onSave"]),(0,n.Lk)("table",D,[t[0]||(t[0]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"ID"),(0,n.Lk)("th",null,"Property Name"),(0,n.Lk)("th",null,"Response Status Code"),(0,n.Lk)("th",null,"Response Content"),(0,n.Lk)("th",null,"Actions")])],-1)),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.properties,(e=>((0,n.uX)(),(0,n.CE)("tr",{key:e.id},[(0,n.Lk)("td",null,(0,u.v_)(e.id),1),(0,n.Lk)("td",null,(0,u.v_)(e.propertyName),1),(0,n.Lk)("td",null,(0,u.v_)(e.responseStatusCode),1),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("textarea",{class:"form-control",rows:"3",readonly:"","onUpdate:modelValue":t=>e.responseContent=t},null,8,V),[[r.Jo,e.responseContent]])]),(0,n.Lk)("td",null,[(0,n.Lk)("button",{class:"btn btn-primary btn-sm",onClick:t=>a.editApiProperty(e)},"Edit",8,q),(0,n.Lk)("button",{class:"btn btn-danger btn-sm",onClick:t=>a.deleteApiProperty(e.id)},"Delete",8,R)])])))),128))])])])}const G={class:"modal fade",id:"propertyModal",tabindex:"-1","aria-labelledby":"propertyModalLabel","aria-hidden":"true",ref:"propertyModal"},W={class:"modal-dialog"},Q={class:"modal-content"},z={class:"modal-header"},B={class:"modal-body"},H={class:"form-group"},Y={class:"form-group"},Z={class:"form-group"},ee={key:0,class:"text-danger"},te={class:"d-flex justify-content-center"},oe=["disabled"];function re(e,t,o,s,l,a){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("button",{class:"btn btn-primary mb-3",onClick:t[0]||(t[0]=(...e)=>a.openModal&&a.openModal(...e))},"Add New Api Property"),(0,n.Lk)("div",G,[(0,n.Lk)("div",W,[(0,n.Lk)("div",Q,[(0,n.Lk)("div",z,[t[7]||(t[7]=(0,n.Lk)("h5",{class:"modal-title",id:"propertyModalLabel"},"API Property Content",-1)),(0,n.Lk)("button",{type:"button",class:"btn-close",onClick:t[1]||(t[1]=(...e)=>a.closeModal&&a.closeModal(...e)),"aria-label":"Close"})]),(0,n.Lk)("div",B,[(0,n.Lk)("form",{onSubmit:t[6]||(t[6]=(0,r.D$)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"])),class:"mt-4"},[(0,n.Lk)("div",H,[t[8]||(t[8]=(0,n.Lk)("label",{for:"propertyName"},"Property Name:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>l.localForm.propertyName=e),required:""},null,512),[[r.Jo,l.localForm.propertyName]])]),(0,n.Lk)("div",Y,[t[9]||(t[9]=(0,n.Lk)("label",{for:"responseStatusCode"},"Response Status Code:",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>l.localForm.responseStatusCode=e),required:""},null,512),[[r.Jo,l.localForm.responseStatusCode]])]),(0,n.Lk)("div",Z,[t[10]||(t[10]=(0,n.Lk)("label",{for:"responseContent"},"Response Content (JSON):",-1)),(0,n.bo)((0,n.Lk)("textarea",{class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>l.localForm.responseContent=e),onInput:t[5]||(t[5]=(...e)=>a.validateJson&&a.validateJson(...e)),rows:"10",required:""},null,544),[[r.Jo,l.localForm.responseContent]]),l.jsonError?((0,n.uX)(),(0,n.CE)("span",ee,"Invalid JSON format")):(0,n.Q3)("",!0)]),(0,n.Lk)("div",te,[(0,n.Lk)("button",{type:"submit",class:"btn btn-success btn-lg",disabled:l.jsonError},"Save",8,oe)])],32)])])])],512)])}var ne={props:{form:{type:Object,required:!0}},data(){return{localForm:{...this.form},jsonError:!1,modalInstance:null}},watch:{form:{handler(e){this.localForm={...e}},deep:!0}},methods:{validateJson(){try{JSON.parse(this.localForm.responseContent),this.jsonError=!1}catch(e){this.jsonError=!0}},onSubmit(){this.jsonError||(this.$emit("save",this.localForm),this.closeModal())},openModal(e=null){e&&(this.localForm={...e}),this.modalInstance.show()},closeModal(){this.modalInstance.hide(),this.resetForm()},resetForm(){this.localForm={id:null,propertyName:"",responseStatusCode:"",responseContent:""}}},mounted(){this.modalInstance=new $.aF(this.$refs.propertyModal)}};const se=(0,i.A)(ne,[["render",re],["__scopeId","data-v-1499465e"]]);var le=se,ae={components:{ApiPropertyForm:le},data(){return{properties:[],form:{id:null,propertyName:"",responseStatusCode:"",responseContent:""},showModal:!0}},methods:{async fetchApiProperties(){const e=await J.getApiProperties();this.properties=e.data.sort(((e,t)=>e.id-t.id))},async saveApiProperty(e){await J.saveApiProperty(e),this.resetForm(),alert("API Property saved successfully"),this.fetchApiProperties()},editApiProperty(e){this.form={...e},this.$refs.apiPropertyForm.openModal(this.form)},async deleteApiProperty(e){try{await J.deleteApiProperty(e),this.fetchApiProperties()}catch(t){if(console.log(t),t.response){const e=JSON.stringify(t.response.data);alert(`Error: ${t.response.statusText}, info: ${e}`)}else alert(` Error: ${t.message}`)}},resetForm(){this.form={id:null,propertyName:"",responseStatusCode:"",responseContent:""}}},mounted(){this.fetchApiProperties()}};const ie=(0,i.A)(ae,[["render",K],["__scopeId","data-v-509a109e"]]);var pe=ie;o(736);const de=[{path:"/p_apis",component:X},{path:"/p_api-properties",component:pe}],ce=(0,c.aE)({history:(0,c.LA)(),routes:de});(0,r.Ef)(d).use(ce).mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,s){if(!r){var l=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var a=!0,i=0;i<r.length;i++)(!1&s||l>=s)&&Object.keys(o.O).every((function(e){return o.O[e](r[i])}))?r.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(d--,1);var p=n();void 0!==p&&(t=p)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,l=r[0],a=r[1],i=r[2],p=0;if(l.some((function(t){return 0!==e[t]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(i)var d=i(o)}for(t&&t(r);p<l.length;p++)s=l[p],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(606)}));r=o.O(r)})();
//# sourceMappingURL=app.3b9c64c3.js.map