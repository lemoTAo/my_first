(function(){"use strict";var t={4327:function(t,e,r){var a={};r.r(a),r.d(a,{reMuOrderList:function(){return Bt},reqAddOrUpdateShopCar:function(){return St},reqAddressInfo:function(){return Rt},reqCartList:function(){return xt},reqCatergoryList:function(){return kt},reqDeleteCartByid:function(){return Tt},reqGetBanner:function(){return Nt},reqGetCode:function(){return At},reqGetFloor:function(){return Lt},reqGetSearchInfo:function(){return Et},reqGoodsInfo:function(){return Ot},reqLoginOut:function(){return Zt},reqOrderInfo:function(){return qt},reqPayInfo:function(){return Dt},reqPayStatus:function(){return jt},reqSubmitInfo:function(){return Ft},reqUpdateCheckedByid:function(){return Pt},reqUserInfo:function(){return Gt},reqUserLogin:function(){return Ut},reqUserRegister:function(){return $t}});var o=r(7881),n=r.n(o),s=r(1540),i=r.n(s),c=r(6369),u=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view"),e("Footer",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.show,expression:"$route.meta.show"}]})],1)},l=[],d=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("尚品汇欢迎您！")]),t.userName?e("p",[e("a",[t._v(t._s(t.userName))]),e("a",{on:{click:t.logout}},[t._v("退出登录")])]):e("p",[e("span",[t._v("请")]),e("router-link",{attrs:{to:"/login"}},[t._v("登录")]),e("router-link",{staticClass:"register",attrs:{to:"/Register"}},[t._v("免费注册")])],1)]),e("div",{staticClass:"typeList"},[e("router-link",{attrs:{to:"/center"}},[t._v("我的订单")]),e("router-link",{attrs:{to:"/shopcart"}},[t._v("我的购物车")]),e("a",{attrs:{href:"###"}},[t._v("我的尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇会员")]),e("a",{attrs:{href:"###"}},[t._v("企业采购")]),e("a",{attrs:{href:"###"}},[t._v("关注尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("合作招商")]),e("a",{attrs:{href:"###"}},[t._v("商家后台")])],1)])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{to:"/home",title:"尚品汇"}},[e("img",{attrs:{src:r(587),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{action:"###"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:t.goSearch}},[t._v(" 搜索 ")])])])])])},m=[],p=(r(7658),{name:"V-Header",data(){return{keyword:""}},methods:{goSearch(){if(this.$route.query){let t={name:"Search",params:{keyword:this.keyword||void 0}};t.query=this.$route.query,this.$router.push(t)}},async logout(){await this.$store.dispatch("user/userLogout"),this.$router.push({name:"Home"})}},mounted(){this.$bus.$on("clearKeyword",(()=>{this.keyword=""}))},computed:{userName(){return this.$store.state.user.userInfo.loginName}}}),f=p,g=r(1001),h=(0,g.Z)(f,d,m,!1,null,"1c744728",null),v=h.exports,y=function(){var t=this;t._self._c;return t._m(0)},_=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("尚品汇E卡")]),e("li",[t._v("尚品汇通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("img",{attrs:{src:r(2552)}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v(" 友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址：北京市昌平区宏福科技园综合楼6层")]),e("p",[t._v("京ICP备19006430号")])])])])])}],C={name:"v-footer"},b=C,w=(0,g.Z)(b,y,_,!1,null,null,null),I=w.exports,k={name:"App",data(){return{mas:"fdas"}},components:{Header:v,Footer:I},mounted(){this.$store.dispatch("home/categoryList")}},N=k,L=(0,g.Z)(N,u,l,!1,null,null,null),E=L.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"type-nav"},[e("div",{staticClass:"container",on:{mouseleave:t.leaveNav}},[e("h2",{staticClass:"all",on:{mouseenter:t.enterNav}},[t._v("全部商品分类")]),t._m(0),e("transition",{attrs:{name:"sort",appear:""}},[t.show?e("div",{staticClass:"sort"},[e("div",{staticClass:"all-sort-list2",on:{click:t.goSearch1}},t._l(t.categoryList,(function(r,a){return e("div",{key:r.categoryId,staticClass:"item",class:{cur:t.currentIndex==a},on:{mouseenter:function(e){return t.changIndex(a)},mouseleave:t.leaveIndex}},[e("h3",[e("a",{attrs:{"data-categoryName":r.categoryName,"data-categoryId":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex==a,expression:"currentIndex == index"}],staticClass:"item-list clearfix"},[e("div",{staticClass:"subitem"},t._l(r.categoryChild,(function(r){return e("dl",{key:r.categoryId,staticClass:"fore"},[e("dt",[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category2Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("dd",t._l(r.categoryChild,(function(r){return e("em",{key:r.categoryId},[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category3Id":r.categoryId}},[t._v(t._s(r.categoryName))])])})),0)])})),0)])])})),0)]):t._e()])],1)])},S=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},[e("a",{attrs:{href:"###"}},[t._v("服装城")]),e("a",{attrs:{href:"###"}},[t._v("美妆馆")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇超市")]),e("a",{attrs:{href:"###"}},[t._v("全球购")]),e("a",{attrs:{href:"###"}},[t._v("闪购")]),e("a",{attrs:{href:"###"}},[t._v("团购")]),e("a",{attrs:{href:"###"}},[t._v("有趣")]),e("a",{attrs:{href:"###"}},[t._v("秒杀")])])}],x=r(3822),P=r(9289),T=r.n(P),A={name:"TypeNav",data(){return{currentIndex:-1,show:!1}},methods:{changIndex:T()((function(t){this.currentIndex=t}),50),leaveIndex(){this.currentIndex=-1},goSearch1(t){let{categoryname:e,categoryid:r,category2id:a,category3id:o}=t.target.dataset;if(e){let t={name:"Search"},n={categoryName:e};r?n.category1Id=r:a?n.category2Id=a:o&&(n.category3Id=o),this.$route.params&&(t.params=this.$route.params,t.query=n,this.$router.push(t))}},enterNav(){this.show=!0},leaveNav(){"Home"!=this.$route.name&&(this.show=!1)}},mounted(){this.$store.dispatch("home/categoryList"),this.show="/home"==this.$route.path},computed:{...(0,x.rn)({categoryList:t=>t.home.categoryList})}},$=A,U=(0,g.Z)($,O,S,!1,null,null,null),G=U.exports,Z=function(){var t=this,e=t._self._c;return e("div",{ref:"mySwiper",staticClass:"swiper-container swiper-no-swiping"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.list,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.imgUrl}})])})),0),e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-button-next"})])},R=[],q=r(7504),F=r(4594),D=r(5245),j=r(2475);q.Z.use([F.Z,D.Z,j.Z]);var B={name:"N-carousel",props:["list"],watch:{list:{immediate:!0,handler(){this.$nextTick((()=>{new q.Z(this.$refs.mySwiper,{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})}))}}}},H=B,K=(0,g.Z)(H,Z,R,!1,null,null,null),M=K.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("button",{attrs:{disabled:1==t.pageNo},on:{click:function(e){return t.$emit("getpageNo",t.pageNo-1)}}},[t._v("上一页")]),t.startNumAndEndNum.start>1?e("button",{on:{click:function(e){return t.$emit("getpageNo",1)}}},[t._v("1")]):t._e(),t.startNumAndEndNum.start>2?e("button",[t._v("···")]):t._e(),t._l(t.startNumAndEndNum.end,(function(r,a){return r>=t.startNumAndEndNum.start?e("button",{key:a,class:{active:t.pageNo==r},on:{click:function(e){return t.$emit("getpageNo",r)}}},[t._v(t._s(r))]):t._e()})),t.startNumAndEndNum.end+1<t.totalPage?e("button",[t._v("···")]):t._e(),t.startNumAndEndNum.end<t.totalPage?e("button",{on:{click:function(e){return t.$emit("getpageNo",t.totalPage)}}},[t._v(t._s(t.totalPage))]):t._e(),e("button",{attrs:{disabled:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getpageNo",t.pageNo+1)}}},[t._v("下一页")]),e("button",{staticStyle:{"margin-left":"30px"}},[t._v("共 "+t._s(t.total)+" 条")])],2)},V=[],J={name:"v-Pagination",props:["total","pageNo","pageSize","continues"],computed:{totalPage(){return Math.ceil(this.total/this.pageSize)},startNumAndEndNum(){let t=0,e=0;return this.continues>this.totalPage?(t=1,e=this.totalPage):(t=this.pageNo-Math.floor(this.continues/2),e=this.pageNo+Math.floor(this.continues/2),t<1&&(t=1,e=this.continues),e>this.totalPage&&(e=this.totalPage,t=this.pageNo-this.continues+1)),{start:t,end:e}}}},Q=J,Y=(0,g.Z)(Q,z,V,!1,null,"149c2f30",null),W=Y.exports,X=r(2631),tt=(r(1703),r(70)),et=r(530),rt=r.n(et),at=r(536);const ot=()=>{let t=JSON.parse(localStorage.getItem("UUIDTAKEN"));return t||(t=(0,at.Z)(),localStorage.setItem("UUIDTAKEN",JSON.stringify(t))),t};c["default"].use(x.ZP);const nt={async getGoodInfo(t,e){let r=await Ot(e);200==r.code&&t.commit("GETGOODINFO",r.data)},async addOrUpdateShopCar(t,{skuId:e,skuNum:r}){const a=await St(e,r);return new Promise(((t,e)=>{200==a.code?(t("ok"),console.log("请求成功")):e("failen")}))}},st={GETGOODINFO(t,e){t.goodInfo=e}},it={goodInfo:{},uuid_taken:ot()},ct={categoryView(t){return t.goodInfo.categoryView||{}},skuInfo(t){return t.goodInfo.skuInfo||{}},spuSaleAttrList(t){return t.goodInfo.spuSaleAttrList||[]}},ut={namespaced:!0,actions:nt,mutations:st,state:it,getters:ct};var lt=ut;const dt=()=>{const t=localStorage.getItem("TOKEN");return t||""},mt=t=>{localStorage.setItem("TOKEN",t)},pt=()=>{localStorage.removeItem("TOKEN")},ft={async getCode(t,e){const r=await At(e);return new Promise(((e,a)=>{200==r.code?t.commit("GETCODE",r.data):a("获取验证码失败")}))},async UserRegister(t,e){const r=await $t(e);return new Promise(((t,e)=>{200==r.code?t("注册成功"):e("注册失败")}))},async UserLogin(t,e){const r=await Ut(e);return new Promise(((e,a)=>{200==r.code?(mt(r.data.token),t.commit("USERLOGIN"),e("登录成功")):a("登录失败")}))},async getUserInfo(t){let e=await Gt();return new Promise(((r,a)=>{200==e.code?(t.commit("GETUSERINFO",e.data),r("登录成功")):a("登录失败")}))},async userLogout(t){let e=await Zt();return new Promise(((r,a)=>{200==e.code?(t.commit("CLEARALL",e.data),r("登录成功")):a("登出失败")}))}},gt={GETCODE(t,e){t.Code=e},USERLOGIN(t){t.token=dt()},GETUSERINFO(t,e){t.userInfo=e},CLEARALL(t){t.token="",t.userInfo={},pt()}},ht={Code:"",token:dt(),userInfo:{}},vt={},yt={namespaced:!0,actions:ft,mutations:gt,state:ht,getters:vt};var _t=yt;const Ct=tt.Z.create({timeout:5e3,baseURL:"/api"});Ct.interceptors.request.use((t=>(lt.state.uuid_taken&&(t.headers.userTempId=lt.state.uuid_taken),_t.state.token&&(t.headers.token=_t.state.token),rt().start(),t))),Ct.interceptors.response.use((t=>(rt().done(),Promise.resolve(t.data))),(()=>Promise.reject(new Error("fail"))));var bt=Ct;const wt=tt.Z.create({baseURL:"/mock",timeout:5e3});wt.interceptors.request.use((t=>(rt().start(),t))),wt.interceptors.response.use((t=>(rt().done(),Promise.resolve(t.data))),(()=>Promise.reject(new Error("fail"))));var It=wt;const kt=()=>bt.get("/product/getBaseCategoryList"),Nt=()=>It.get("/banner"),Lt=()=>It.get("/floor"),Et=t=>bt({url:"/list",method:"post",data:t}),Ot=t=>bt({url:`/item/${t}`,method:"GET"}),St=(t,e)=>bt({url:`/cart/addToCart/${t}/${e}`,method:"POST"}),xt=()=>bt({url:"/cart/cartList",method:"GET"}),Pt=async({skuId:t,isChecked:e})=>await bt({url:`/cart/checkCart/${t}/${e}`,method:"GET"}),Tt=t=>bt({url:`/cart/deleteCart/${t}`,method:"DELETE"}),At=t=>bt({url:`/user/passport/sendCode/${t}`,method:"GET"}),$t=t=>bt({url:"/user/passport/register",method:"POST",data:t}),Ut=t=>bt({url:"/user/passport/login",method:"POST",data:t}),Gt=()=>bt({url:"/user/passport/auth/getUserInfo",method:"get"}),Zt=()=>bt({url:"/user/passport/logout",method:"get"}),Rt=()=>bt({url:"/user/userAddress/auth/findUserAddressList",method:"get"}),qt=()=>bt({url:"/order/auth/trade",method:"get"}),Ft=(t,e)=>bt({url:`/order/auth/submitOrder?tradeNo=${t}`,method:"POST",data:e}),Dt=t=>bt({url:`/payment/weixin/createNative/${t}`,method:"GET"}),jt=t=>bt({url:`/payment/weixin/queryPayStatus/${t}`,method:"get"}),Bt=(t,e)=>bt({url:`/order/auth/${t}/${e}`,method:"get"});c["default"].use(x.ZP);const Ht={categoryList:[],getBannerList:[],getFloorList:[]},Kt={async categoryList(t){let e=await kt();t.commit("GETEGORYLIST",e)},async getBannerList(t){let e=await Nt();200==e.code&&t.commit("REQGETBANNER",e.data)},async getFloorList(t){let e=await Lt();200==e.code&&t.commit("REQGETFLOOR",e.data)}},Mt={GETEGORYLIST(t,e){const r=e.data;t.categoryList=r.slice(0,15)},REQGETBANNER(t,e){t.getBannerList=e},REQGETFLOOR(t,e){t.getFloorList=e}},zt={},Vt={namespaced:!0,state:Ht,actions:Kt,mutations:Mt,getters:zt};var Jt=Vt;c["default"].use(x.ZP);const Qt={list:[]},Yt={async getList(t,e={}){let r=await Et(e);200==r.code&&t.commit("GETLIST",r.data)}},Wt={async GETLIST(t,e){t.list=await e}},Xt={attrsList(t){return t.list.attrsList},goodsList(t){return t.list.goodsList},trademarkList(t){return t.list.trademarkList}},te={namespaced:!0,state:Qt,actions:Yt,mutations:Wt,getters:Xt};var ee=te;c["default"].use(x.ZP);const re={async getCarList(t){const e=await xt();t.commit("GETCARTLIST",e.data)},async updateCheckedByid(t,{skuId:e,isChecked:r}){const a=await Pt({skuId:e,isChecked:r});return new Promise(((t,e)=>{200==a.code?t("ok"):e("over")}))},async DeleteCart(t,e){const r=await Tt(e);return new Promise(((t,e)=>{r.code?t("ok"):e("fail")}))},deleteAllCheckedCart({dispatch:t,getters:e}){let r=[];return e.carList.cartInfoList.forEach((async e=>{let a="1"==e.isChecked?await t("DeleteCart",e.skuId):"";r.push(a)})),Promise.all(r)},updateAllCheckedByid({dispatch:t,getters:e},r){let a=[];return e.carList.cartInfoList.forEach((async e=>{let o=await t("updateCheckedByid",{skuId:e.skuId,isChecked:r});await a.push(o)})),Promise.all(a)}},ae={GETCARTLIST(t,e){t.carList=e}},oe={carList:[]},ne={carList:t=>t.carList[0]||{}},se={namespaced:!0,actions:re,mutations:ae,state:oe,getters:ne};var ie=se;const ce={async getUserAddress(t){let e=await Rt();new Promise(((r,a)=>{200==e.code?t.commit("ADDRESSINFO",e.data):a("fail")}))},async getOrderInfo(t){let e=await qt();return new Promise(((r,a)=>{200==e.code?(r(e.data),t.commit("GETORDERINFO",e.data)):a("fail")}))}},ue={ADDRESSINFO(t,e){t.address=e},GETORDERINFO(t,e){t.goodsList=e}},le={address:[],goodsList:{}},de={goods(t){return t.goodsList.detailArrayList||[]}},me={namespaced:!0,actions:ce,mutations:ue,state:le,getters:de};var pe=me;c["default"].use(x.ZP);var fe=new x.ZP.Store({modules:{home:Jt,search:ee,detail:lt,shopCart:ie,user:_t,trade:pe}});const ge=[{path:"*",redirect:"/home",component:()=>r.e(630).then(r.bind(r,6630))},{path:"/home",name:"Home",component:()=>r.e(630).then(r.bind(r,6630)),meta:{show:!0}},{path:"/login",name:"Login",component:()=>r.e(449).then(r.bind(r,449))},{path:"/register",component:()=>r.e(341).then(r.bind(r,6341))},{path:"/search/:skuId?",component:()=>r.e(558).then(r.bind(r,8558)),meta:{show:!0},name:"Search"},{path:"/detail/:skuId?",name:"Detail",component:()=>r.e(118).then(r.bind(r,6998))},{path:"/shopCart",name:"ShopCart",component:()=>r.e(582).then(r.bind(r,3582)),meta:{show:!0}},{path:"/AddCartSuccess",name:"AddCartSuccess",component:()=>r.e(698).then(r.bind(r,6698)),meta:{show:!0}},{path:"/trade",name:"Trade",component:()=>r.e(691).then(r.bind(r,5691)),beforeEnter:(t,e,r)=>{"/shopcart"==e.path?r():r(!1)}},{path:"/pay/:orderId?",name:"Pay",component:()=>r.e(830).then(r.bind(r,8830)),beforeEnter:(t,e,r)=>{"/trade"==e.path?r():r(!1)}},{path:"/paySuccess",name:"PaySuccess",component:()=>r.e(462).then(r.bind(r,4462)),beforeEnter:(t,e,r)=>{console.log(e.path),-1!=e.path.indexOf("/pay")?r():r(!1)}},{path:"/center",name:"Center",component:()=>r.e(943).then(r.bind(r,3943)),children:[{path:"myOrder",name:"MyOrder",component:()=>r.e(392).then(r.bind(r,2392))},{path:"groupOrder",name:"GroupOrder",component:()=>r.e(623).then(r.bind(r,8623))},{path:"/center",redirect:"/center/myOrder",component:()=>r.e(392).then(r.bind(r,2392))}]}];c["default"].use(X.ZP);const he=X.ZP.prototype.push,ve=X.ZP.prototype.replace;X.ZP.prototype.push=function(t){return he.call(this,t).catch((t=>t))},X.ZP.prototype.replace=function(t){return ve.call(this,t).catch((t=>t))};let ye=new X.ZP({routes:ge,scrollBehavior(){return{y:100,behavior:"smooth"}}});ye.beforeEach((async(t,e,r)=>{let a=fe.state.user.token,o=fe.state.user.userInfo.name;if(a)if("/login"==t.path)r("/home");else if(o)r();else try{await fe.dispatch("user/getUserInfo"),r()}catch(n){await fe.dispatch("user/userLogout"),r("/login")}else{let e=t.path;-1!=t.path.indexOf("/trade")||-1!=t.path.indexOf("center")||-1!=t.path.indexOf("/paySuccess")||-1!=t.path.indexOf("shopcart")?(console.log("/login?redirect="+e),r(`/login?redirect=${e}`)):r()}}));var _e=ye,Ce=r(6112),be=r.p+"img/R-C.12745c88.gif",we=r(5708),Ie=r(8892),ke=r.n(Ie);c["default"].use(we.ZP),we.ZP.Validator.localize("zh_CN",{message:{...ke().messages,is:t=>`${t} 必须与密码相同`,attributes:{phone:"手机号",code:"验证码",password:"密码",password1:"确认密码",agree:"同意"}}}),we.ZP.Validator.extend("agree",{validate:t=>t,getMessage:t=>{}});var Ne=r(7634),Le=r.n(Ne),Ee=JSON.parse('[{"id":"1","imgUrl":"/images/banner1.jpg"},{"id":"2","imgUrl":"/images/banner2.jpg"},{"id":"3","imgUrl":"/images/banner3.jpg"},{"id":"4","imgUrl":"/images/banner4.jpg"}]'),Oe=JSON.parse('[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴2","4K电视2","空气净化器2","IH电饭煲2","滚筒洗衣机2","电热水器2"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门2"},{"url":"#","text":"大家电2"},{"url":"#","text":"生活电器2"},{"url":"#","text":"厨房电器2"},{"url":"#","text":"应季电器2"},{"url":"#","text":"空气/净水2"},{"url":"#","text":"高端电器2"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]');Le().mock("/mock/banner",{code:200,data:Ee}),Le().mock("/mock/floor",{code:200,data:Oe});r(2633);c["default"].component(G.name,G),c["default"].component(M.name,M),c["default"].component(W.name,W),c["default"].config.productionTip=!1,c["default"].component(i().name,i()),c["default"].prototype.$msgbox=n(),c["default"].prototype.$alert=n().alert,c["default"].use(x.ZP),c["default"].use(Ce.Z,{loading:be}),kt(),Et(),new c["default"]({render:t=>t(E),store:fe,router:_e,beforeCreate(){c["default"].prototype.$bus=this,c["default"].prototype.$API=a}}).$mount("#app")},2552:function(t,e,r){t.exports=r.p+"img/wx_cz.5d92bf53.jpg"},587:function(t,e,r){t.exports=r.p+"img/logo.d600ca2b.png"}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,n){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],n=t[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(i=!1,n<s&&(s=n));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[a,o,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{118:"0081768d",341:"3e2804ad",392:"4fd495f5",449:"01144ebd",462:"c91558fe",558:"54afbf40",582:"0fac28e7",623:"0bb072cb",630:"1c610623",691:"21c2f205",698:"c42dd413",830:"a4a02b80",943:"83bc00d8"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{118:"a1e846e3",341:"b2d5dff3",392:"66ddd216",449:"b96e58c7",462:"d89e0832",558:"a6366362",582:"4831e7d3",630:"7e7ef338",691:"f3e36c45",698:"a739dd2f",830:"18cdf2dc",943:"bdc2d346"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="gshop_1:";r.l=function(a,o,n,s){if(t[a])t[a].push(o);else{var i,c;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+n){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+n),i.src=a),t[a]=[o];var m=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=n,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===t||n===e))return o}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){o=s[a],n=o.getAttribute("data-href");if(n===t||n===e)return o}},a=function(a){return new Promise((function(o,n){var s=r.miniCssF(a),i=r.p+s;if(e(s,i))return o();t(a,i,o,n)}))},o={143:0};r.f.miniCss=function(t,e){var r={118:1,341:1,392:1,449:1,462:1,558:1,582:1,630:1,691:1,698:1,830:1,943:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,a){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(r,a){o=t[e]=[r,a]}));a.push(o[2]=n);var s=r.p+r.u(e),i=new Error,c=function(a){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,o[1](i)}};r.l(s,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,n,s=a[0],i=a[1],c=a[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var l=c(r)}for(e&&e(a);u<s.length;u++)n=s[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(l)},a=self["webpackChunkgshop_1"]=self["webpackChunkgshop_1"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(4327)}));a=r.O(a)})();