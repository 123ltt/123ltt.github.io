(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7230b4fe"],{3844:function(e,t,a){"use strict";var l=a("40047"),o=a.n(l);o.a},40047:function(e,t,a){},dfe8:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CRow",[a("CCol",{attrs:{sm:"12"}},[a("CCard",[a("CCardHeader",[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-col",{staticStyle:{"padding-top":"5px"},attrs:{span:8}},[a("el-dropdown",{attrs:{placement:"top"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.command)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"全部客户"}},[e._v("全部客户")]),a("el-dropdown-item",{attrs:{command:"我的客户"}},[e._v("我的客户")]),a("el-dropdown-item",{attrs:{command:"我协作的客户"}},[e._v("我协作的客户")])],1)],1)],1),a("el-col",{staticStyle:{"white-space":"nowrap","text-align":"right"},attrs:{span:16}},[a("span",[e._v(" 显示筛选 "),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),a("span",[a("el-input",{staticStyle:{width:"220px",margin:"0 12px"},attrs:{placeholder:"请输入客户名称或编码",size:"small"},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),a("span",[a("el-button",{attrs:{type:"success",icon:"el-icon-plus",size:"small"}},[e._v(" 新增客户 ")])],1)])],1)],1),a("CCardBody",[a("el-row",[a("el-col",{attrs:{span:23}},[e._v("跟进状态： "),a("el-radio-group",{staticStyle:{"margin-left":"30px"},attrs:{size:"mini"},model:{value:e.radio0,callback:function(t){e.radio0=t},expression:"radio0"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"待付定金"}}),a("el-radio-button",{attrs:{label:"待预约"}}),a("el-radio-button",{attrs:{label:"待量尺"}}),a("el-radio-button",{attrs:{label:"待签约"}}),a("el-radio-button",{attrs:{label:"待设计"}}),a("el-radio-button",{attrs:{label:"待安装派工"}}),a("el-radio-button",{attrs:{label:"已完成"}}),a("el-radio-button",{attrs:{label:"客户丢失"}})],1)],1),a("el-col",{staticStyle:{"text-align":"right","font-size":"20px",color:"#0B897E","padding-right":"10px"},attrs:{span:1}},[a("i",{staticClass:"el-icon-s-tools"})])],1),a("el-row",{staticClass:"mt-2"},[a("el-col",{attrs:{span:24}},[e._v("下次跟进时间： "),a("el-radio-group",{attrs:{size:"mini"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"今天"}}),a("el-radio-button",{attrs:{label:"明天"}}),a("el-radio-button",{attrs:{label:"本周"}}),a("el-radio-button",{attrs:{label:"本月"}}),a("el-radio-button",{attrs:{label:"下月"}}),a("el-radio-button",{attrs:{label:"空白"}}),a("el-radio-button",{attrs:{label:"自定义时间"}})],1)],1)],1),a("el-row",{staticClass:"mt-2"},[a("el-col",{attrs:{span:24}},[e._v(" 负责人： "),a("el-select",{staticStyle:{"margin-left":"40px"},attrs:{clearable:"",placeholder:"请选择用户",size:"mini"},model:{value:e.value0,callback:function(t){e.value0=t},expression:"value0"}},e._l(e.items0,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-row",{staticClass:"mt-3"},[a("el-col",{attrs:{span:24}},[e._v(" 设计师： "),a("el-select",{staticStyle:{"margin-left":"40px"},attrs:{clearable:"",placeholder:"全部",size:"mini"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.items1,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)],1)],1),a("el-row",{attrs:{id:"totalRecord"}},[a("el-col",{staticStyle:{padding:"16px"},attrs:{span:20}},[a("input",{attrs:{type:"checkbox"}}),e._v(" 共 128 条记录，选中 2 条 ")]),a("el-col",{staticStyle:{"text-align":"right","padding-right":"20px","padding-top":"3px"},attrs:{span:4}},[a("CButton",{staticClass:"btn-sm mt-2 mb-2",attrs:{color:"success",variant:"outline"}},[a("CIcon",{attrs:{name:"cil-file"}}),e._v(" 导出 ")],1),a("el-popover",{attrs:{placement:"bottom",title:"自定义展示字段",width:"200",trigger:"click"}},[a("input",{attrs:{placeholder:"搜索字段"}}),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handleCustomerID()}},model:{value:e.toggleCustomerID,callback:function(t){e.toggleCustomerID=t},expression:"toggleCustomerID"}}),e._v(" 客户编码 "),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handleCustomerName()}},model:{value:e.toggleCustomerName,callback:function(t){e.toggleCustomerName=t},expression:"toggleCustomerName"}}),e._v(" 客户名称 "),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handleTraceState()}},model:{value:e.toggleTraceState,callback:function(t){e.toggleTraceState=t},expression:"toggleTraceState"}}),e._v(" 跟进状态 "),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handleTraceRecord()}},model:{value:e.toggleTraceRecord,callback:function(t){e.toggleTraceRecord=t},expression:"toggleTraceRecord"}}),e._v(" 跟进记录 "),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handleNextTraceTime()}},model:{value:e.toggleNextTraceTime,callback:function(t){e.toggleNextTraceTime=t},expression:"toggleNextTraceTime"}}),e._v(" 下次跟进时间 "),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handlePersonInCharge()}},model:{value:e.togglePersonInCharge,callback:function(t){e.togglePersonInCharge=t},expression:"togglePersonInCharge"}}),e._v(" 负责人 "),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handleDesigner()}},model:{value:e.toggleDesigner,callback:function(t){e.toggleDesigner=t},expression:"toggleDesigner"}}),e._v(" 设计师 "),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handleTelephone()}},model:{value:e.toggleTelephone,callback:function(t){e.toggleTelephone=t},expression:"toggleTelephone"}}),e._v(" 联系电话 "),a("br"),a("br"),a("el-switch",{attrs:{"active-color":"#0B897E","inactive-color":"#ddd","active-value":"1","inactive-value":"0"},on:{change:function(t){return e.handleAddress()}},model:{value:e.toggleAddress,callback:function(t){e.toggleAddress=t},expression:"toggleAddress"}}),e._v(" 详细地址 "),a("el-button",{staticClass:"ml-2 cilEqualizer",attrs:{slot:"reference",size:"mini",circle:""},slot:"reference"},[a("CIcon",{attrs:{name:"cil-equalizer"}})],1)],1)],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{color:"",type:"selection"}}),1==e.toggleCustomerID?a("el-table-column",{attrs:{sortable:"",prop:"customerID",label:"客户编码"}}):e._e(),1==e.toggleCustomerName?a("el-table-column",{attrs:{sortable:"",prop:"customerName",label:"客户名称"}}):e._e(),1==e.toggleTraceState?a("el-table-column",{attrs:{sortable:"",prop:"traceState",label:"跟进状态"}}):e._e(),1==e.toggleTraceRecord?a("el-table-column",{attrs:{sortable:"",prop:"traceRecord",label:"跟进记录"}}):e._e(),1==e.toggleNextTraceTime?a("el-table-column",{attrs:{sortable:"",prop:"nextTraceTime",label:"下次跟进时间"}}):e._e(),1==e.togglePersonInCharge?a("el-table-column",{attrs:{sortable:"",prop:"personInCharge",label:"负责人"}}):e._e(),1==e.toggleDesigner?a("el-table-column",{attrs:{sortable:"",prop:"designer",label:"设计师"}}):e._e(),1==e.toggleTelephone?a("el-table-column",{attrs:{sortable:"",prop:"telephone",label:"联系电话"}}):e._e(),1==e.toggleAddress?a("el-table-column",{attrs:{sortable:"",prop:"address",label:"详细地址"}}):e._e(),a("el-table-column"),a("el-table-column",{attrs:{prop:"operation",fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return null!=t.row.operation?[a("a",{attrs:{href:t.row.url,target:"_blank"}},[a("CIcon",{attrs:{name:"cil-media-stop"}}),e._v(" "+e._s(t.row.operation)+" ")],1)]:void 0}}],null,!0)})],1),a("el-pagination",{attrs:{center:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:40},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},o=[],r={name:"Customers",components:{},data:function(){return{command:localStorage.getItem("command"),radio0:"全部",radio1:"本周",currentPage:3,switchValue:!0,toggleCustomerID:localStorage.getItem("toggleCustomerID"),toggleCustomerName:localStorage.getItem("toggleCustomerName"),toggleTraceState:localStorage.getItem("toggleTraceState"),toggleTraceRecord:localStorage.getItem("toggleTraceRecord"),toggleNextTraceTime:localStorage.getItem("toggleNextTraceTime"),togglePersonInCharge:localStorage.getItem("togglePersonInCharge"),toggleDesigner:localStorage.getItem("toggleDesigner"),toggleTelephone:localStorage.getItem("toggleTelephone"),toggleAddress:localStorage.getItem("toggleAddress"),inputValue:"",value:"",value0:"",items0:[{value:"选项1",label:"张三"},{value:"选项2",label:"李四"},{value:"选项3",label:"王五"}],value1:"",items1:[{value:"选项1",label:"赵六"},{value:"选项2",label:"钱七"},{value:"选项3",label:"孙八"}],tableData:[{customerID:29559,customerName:"黄先生",traceState:"完成交易",traceRecord:"尽快联系，签单",nextTraceTime:"2020/4/21 17:00",personInCharge:"王铁蛋",designer:"成功设计",telephone:13925678962,address:"金海新源小区",operation:"立即签约",url:"#"},{customerID:29559,customerName:"黄先生",traceState:"待量尺",traceRecord:"后续询问客户满意……",nextTraceTime:"2020/4/21 17:00",personInCharge:"王铁蛋",designer:"成功设计",telephone:13925678962,address:"金海新源小区",operation:null,url:"#"},{customerID:29559,customerName:"黄先生",traceState:"待下单",traceRecord:"跟进设计情况",nextTraceTime:"2020/4/21 17:00",personInCharge:"王铁蛋",designer:"成功设计",telephone:13925678962,address:"金海新源小区",operation:"提交量尺",url:"#"},{customerID:29559,customerName:"黄先生",traceState:"待设计",traceRecord:"尽快下单",nextTraceTime:"2020/4/21 17:00",personInCharge:"王铁蛋",designer:"成功设计",telephone:13925678962,address:"金海新源小区",operation:"立即下单",url:"#"},{customerID:29559,customerName:"黄先生",traceState:"待签约",traceRecord:"暂无跟进记录",nextTraceTime:"2020/4/21 17:00",personInCharge:"王铁蛋",designer:"成功设计",telephone:13925678962,address:"金海新源小区",operation:"提交设计",url:"#"},{customerID:29559,customerName:"黄先生",traceState:"完成交易",traceRecord:"尽快联系，签单",nextTraceTime:"2020/4/21 17:00",personInCharge:"王铁蛋",designer:"成功设计",telephone:13925678962,address:"金海新源小区",operation:"立即签约",url:"#"},{customerID:29559,customerName:"黄先生",traceState:"待付定金",traceRecord:"后续询问客户满意……",nextTraceTime:"2020/4/21 17:00",personInCharge:"王铁蛋",designer:"成功设计",telephone:13925678962,address:"金海新源小区",operation:null,url:"#"}]}},methods:{handleCommand:function(e){this.$set(this.$data,"command",e),localStorage.setItem("command",e)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},handleCustomerID:function(){1==Number(localStorage.getItem("toggleCustomerID"))?localStorage.setItem("toggleCustomerID","0"):localStorage.setItem("toggleCustomerID","1")},handleCustomerName:function(){1==Number(localStorage.getItem("toggleCustomerName"))?localStorage.setItem("toggleCustomerName","0"):localStorage.setItem("toggleCustomerName","1")},handleTraceState:function(){1==Number(localStorage.getItem("toggleTraceState"))?localStorage.setItem("toggleTraceState","0"):localStorage.setItem("toggleTraceState","1")},handleTraceRecord:function(){1==Number(localStorage.getItem("toggleTraceRecord"))?localStorage.setItem("toggleTraceRecord","0"):localStorage.setItem("toggleTraceRecord","1")},handleNextTraceTime:function(){1==Number(localStorage.getItem("toggleNextTraceTime"))?localStorage.setItem("toggleNextTraceTime","0"):localStorage.setItem("toggleNextTraceTime","1")},handlePersonInCharge:function(){1==Number(localStorage.getItem("togglePersonInCharge"))?localStorage.setItem("togglePersonInCharge","0"):localStorage.setItem("togglePersonInCharge","1")},handleDesigner:function(){1==Number(localStorage.getItem("toggleDesigner"))?localStorage.setItem("toggleDesigner","0"):localStorage.setItem("toggleDesigner","1")},handleTelephone:function(){1==Number(localStorage.getItem("toggleTelephone"))?localStorage.setItem("toggleTelephone","0"):localStorage.setItem("toggleTelephone","1")},handleAddress:function(){1==Number(localStorage.getItem("toggleAddress"))?localStorage.setItem("toggleAddress","0"):localStorage.setItem("toggleAddress","1")}},created:function(){null==localStorage.getItem("command")?localStorage.setItem("command","全部客户"):localStorage.setItem("command",this.command)}},n=r,c=(a("3844"),a("2877")),s=Object(c["a"])(n,l,o,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-7230b4fe.e41d61d1.js.map