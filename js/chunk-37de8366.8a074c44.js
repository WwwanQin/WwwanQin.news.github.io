(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37de8366"],{7183:function(e,t,s){},a55b:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"loginPage"},[e._m(0),e._m(1),s("div",{staticClass:"loginLabel"},[s("van-form",{staticClass:"form"},[s("van-field",{ref:"login",attrs:{name:"手机号码",label:"手机号码",placeholder:"手机号码",rules:[{required:!0,message:"请填写手机号码"}]},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),s("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("div",{staticClass:"regBtn"},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:e.onSubmit}},[e._v(" 登录 ")])],1)],1),s("van-form",{staticClass:"form"},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:e.register}},[e._v(" 注册 ")])],1)],1)])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logout"},[s("span",{staticClass:"iconfont iconicon-test"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logo"},[s("span",{staticClass:"iconfont iconnew"})])}],r={data:function(){return{user:{username:"",password:""}}},methods:{onSubmit:function(e){var t=this;this.$axios({url:"/login",method:"post",data:this.user}).then((function(e){localStorage.setItem("news_User_Data",JSON.stringify(e.data.data)),t.$router.push("/")}))},register:function(e){this.$router.push("/register")}},mounted:function(){this.$refs.login.focus()}},i=r,o=(s("e5ff"),s("2877")),u=Object(o["a"])(i,n,a,!1,null,"61e829fd",null);t["default"]=u.exports},e5ff:function(e,t,s){"use strict";var n=s("7183"),a=s.n(n);a.a}}]);
//# sourceMappingURL=chunk-37de8366.8a074c44.js.map