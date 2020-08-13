(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58aaf683"],{1486:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddPerm}},[e._v("添加权限")]),n("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.permsList,border:""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"权限标识",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.key)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"权限名称",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),n("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.handleEdit(t)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑权限":"添加权限"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.perm,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"标识"}},[n("el-input",{attrs:{placeholder:"权限标识"},model:{value:e.perm.key,callback:function(t){e.$set(e.perm,"key",t)},expression:"perm.key"}})],1),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{attrs:{placeholder:"权限名称"},model:{value:e.perm.name,callback:function(t){e.$set(e.perm,"name",t)},expression:"perm.name"}})],1),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"权限描述"},model:{value:e.perm.description,callback:function(t){e.$set(e.perm,"description",t)},expression:"perm.description"}})],1)],1),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmPerm}},[e._v("确认")])],1)],1)],1)},i=[],a=(n("a4d3"),n("e01a"),n("99af"),n("a434"),n("b0c0"),n("96cf"),n("1da1")),s=n("ed08"),c=n("b775");function l(){return Object(c["a"])({url:"/admin/permissions",method:"get"})}function o(e){return Object(c["a"])({url:"/admin/permissions",method:"post",data:e})}function u(e,t){return Object(c["a"])({url:"/admin/permissions/".concat(e),method:"put",data:t})}function d(e){return Object(c["a"])({url:"/admin/permissions/".concat(e),method:"delete"})}var p={id:0,key:"",name:"",description:""},m={data:function(){return{perm:Object.assign({},p),permsList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{},created:function(){this.getPerms()},methods:{getPerms:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:n=t.sent,e.permsList=n.data;case 4:case"end":return t.stop()}}),t)})))()},handleAddPerm:function(){this.perm=Object.assign({},p),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.perm=Object(s["c"])(e.row),this.$nextTick((function(){t.checkStrictly=!1}))},handleDelete:function(e){var t=this,n=e.$index,r=e.row;this.$confirm("确认移除这个权限吗?","Warning",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d(r.id);case 2:t.permsList.splice(n,1),t.$message({type:"success",message:"删除成功!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},confirmPerm:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a,s,c,l,d,p,m,f,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="edit"===e.dialogType,!n){t.next=19;break}return t.next=4,u(e.perm.id,e.perm);case 4:if(r=t.sent,i=r.code,a=r.data,200!==i){t.next=17;break}e.perm=a,s=0;case 10:if(!(s<e.permsList.length)){t.next=17;break}if(e.permsList[s].id!==e.perm.id){t.next=14;break}return e.permsList.splice(s,1,Object.assign({},e.perm)),t.abrupt("break",17);case 14:s++,t.next=10;break;case 17:t.next=25;break;case 19:return t.next=21,o(e.perm);case 21:c=t.sent,l=c.code,d=c.data,200===l&&(e.perm=d.data,e.permsList.push(e.perm));case 25:p=e.perm,m=p.description,f=p.name,b=p.key,e.dialogVisible=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>权限标识: ".concat(b,"</div>\n            <div>权限名称: ").concat(f,"</div>\n            <div>描述: ").concat(m,"</div>\n          "),type:"success"});case 28:case"end":return t.stop()}}),t)})))()}}},f=m,b=(n("64a4"),n("2877")),h=Object(b["a"])(f,r,i,!1,null,"bf541240",null);t["default"]=h.exports},"215b":function(e,t,n){},"64a4":function(e,t,n){"use strict";var r=n("215b"),i=n.n(r);i.a}}]);