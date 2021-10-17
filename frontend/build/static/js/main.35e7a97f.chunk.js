(this["webpackJsonpnew-social-network"]=this["webpackJsonpnew-social-network"]||[]).push([[0],{155:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),s=n.n(c),i=n(26),o=n(18),u=n(183),l=n(186),d=n(188),j=n(55),b=n(203),p=n(190),f=n(204),O=n(192),x=n(193),h=n(194),g=n(17),m=function(e){return e.auth},v=n(7),E={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null,loading:!1,error:!1},S=function(){return{type:"REQUEST_USER_DATA"}},w=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},C=function(){return{type:"REQUEST_USER_DATA_FAILED"}},T=function(e,t,n,r){return{type:"FETCHED_LOGIN",email:e,password:t,rememberMe:n,captcha:r}},I=function(){return{type:"FETCHED_LOGOUT"}},_=n(2),y=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),k=function(){var e=Object(g.c)(m),t=e.isAuth,n=e.captchaUrl,a=(e.loading,e.error,y()),c=Object(g.b)(),s=Object(r.useState)(""),u=Object(i.a)(s,2),v=u[0],E=u[1],S=Object(r.useState)(""),w=Object(i.a)(S,2),C=w[0],I=w[1],k=Object(r.useState)(!1),R=Object(i.a)(k,2),A=R[0],U=R[1];return t?Object(_.jsx)(o.a,{to:"/profile"}):Object(_.jsxs)(l.a,{component:"main",maxWidth:"xs",children:[Object(_.jsx)(d.a,{}),Object(_.jsxs)("div",{className:a.paper,children:[Object(_.jsx)(j.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(_.jsxs)("form",{className:a.form,noValidate:!0,children:[Object(_.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:v,onChange:function(e){return E(e.target.value)}}),Object(_.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",autoComplete:"current-password",value:C,onChange:function(e){return I(e.target.value)}}),Object(_.jsx)(p.a,{control:Object(_.jsx)(f.a,{value:"remember",color:"primary"}),label:"Remember me",value:A,onChange:function(){return U(!A)}}),Object(_.jsx)(O.a,{onClick:function(){c(T(v,C,A,n))},fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Sign In"}),Object(_.jsxs)(x.a,{container:!0,children:[Object(_.jsx)(x.a,{item:!0,xs:!0,children:Object(_.jsx)(h.a,{href:"https://social-network.samuraijs.com/login",variant:"body2",children:"Forgot password?"})}),Object(_.jsx)(x.a,{item:!0,children:Object(_.jsx)(h.a,{href:"https://social-network.samuraijs.com/signUp",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})},R=function(e){return e.users},A=n(46),U=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(v.a)(Object(v.a)({},e),r):e}))},N={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,loading:!1,error:!1,followingInProgress:[],filter:{term:"",friend:null}},D=function(e){return{type:"FOLLOW",userId:e}},F=function(e){return{type:"UNFOLLOW",userId:e}},L=function(){return{type:"REQUEST_USERS"}},P=function(e){return{type:"REQUEST_USERS_SUCCESS",users:e}},H=function(){return{type:"REQUEST_USERS_FAILED"}},W=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},Q=function(e){return{type:"SET_FILTER",payload:e}},z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{type:"FETCHED_USERS",currentPage:e,pageSize:t,term:n,friend:r}},M=function(e){return{type:"FETCHED_FOLLOW",userId:e}},G=function(e){return{type:"FETCHED_UNFOLLOW",userId:e}},B=n.p+"static/media/userIcon.c20df02c.jpeg",V=n(32),Z=Object(u.a)((function(e){return{root:{margin:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"3px solid #f7f7f7"},userPhoto:{width:"50px",height:"50px",backgroundSize:"cover",borderRadius:"50%",margin:"10px 20px 10px 100px"},main:{display:"flex",justifyContent:"space-around",alignItems:"center"}}})),q=function(e){var t=e.user,n=e.unfollow,r=e.follow,a=e.followingInProgress,c=Z();return Object(_.jsxs)("div",{className:c.root,children:[Object(_.jsxs)("div",{className:c.main,children:[Object(_.jsx)(V.b,{to:"/profile/"+t.id,children:Object(_.jsx)("img",{src:null!=t.photos.small?t.photos.small:B,className:c.userPhoto})}),Object(_.jsx)(j.a,{variant:"h6",children:t.name})]}),Object(_.jsx)("div",{children:t.followed?Object(_.jsx)(O.a,{variant:"contained",color:"primary",disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Unfollow"}):Object(_.jsx)(O.a,{variant:"contained",color:"primary",disabled:a.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]})},J=n(64),X=n(84),Y=n.n(X),K=Object(u.a)((function(e){return{paginator:{margin:"10px",display:"flex",justifyContent:"center"},pageNumber:{padding:"10px 20px",backgroundColor:"#d7d7d7",borderRadius:"3px",margin:"8px",cursor:"pointer"},selectedPage:{fontWeight:"bold",borderColor:"black",cursor:"pointer"},button:{padding:"10px 30px",height:"50px",marginTop:"7px"}}})),$=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=void 0===a?1:a,s=e.onPageChanged,o=void 0===s?function(e){return e}:s,u=e.portionSize,l=void 0===u?10:u,d=K(),b=Math.ceil(t/n),p=[],f=1;f<=b;f++)p.push(f);var x=Math.ceil(b/l),h=Object(r.useState)(1),g=Object(i.a)(h,2),m=g[0],v=g[1],E=(m-1)*l+1,S=m*l;return Object(_.jsxs)("div",{className:Y()(d.paginator),children:[m>1&&Object(_.jsx)(O.a,{variant:"contained",color:"primary",className:d.button,onClick:function(){v(m-1)},children:"PREV"}),p.filter((function(e){return e>=E&&e<=S})).map((function(e){return Object(_.jsx)(j.a,{variant:"subtitle1",className:Y()(Object(J.a)({},d.selectedPage,c===e),d.pageNumber),onClick:function(t){o(e)},children:e},e)})),x>m&&Object(_.jsx)(O.a,{variant:"contained",color:"primary",className:d.button,onClick:function(){v(m+1)},children:"NEXT"})]})},ee=n(195),te=n.p+"static/media/Iphone-spinner-2.d3fbaf2b.gif",ne=function(){return Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:te})})},re=n(60),ae=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},select:{fontSize:"20px",margin:"10px",padding:"8px",borderRadius:"5px"},input:{fontSize:"20px",marginLeft:"10px",padding:"8px",textAlign:"center",borderRadius:"5px"},button:{padding:"9px 15px"}}})),ce=function(e){return{}},se=a.a.memo((function(e){var t=ae(),n=Object(g.c)(R).filter;return Object(_.jsx)("div",{children:Object(_.jsx)(re.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:ce,onSubmit:function(t,n){var r=n.setSubmitting,a={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(a),r(!1)},children:function(e){var n=e.isSubmitting;return Object(_.jsxs)(re.b,{className:t.root,children:[Object(_.jsx)(j.a,{variant:"h6",children:"Find user:"}),Object(_.jsx)(re.a,{type:"text",name:"term",className:t.input}),Object(_.jsxs)(re.a,{name:"friend",as:"select",className:t.select,children:[Object(_.jsx)("option",{value:"null",children:"All"}),Object(_.jsx)("option",{value:"true",children:"Only followed"}),Object(_.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(_.jsx)(O.a,{className:t.button,variant:"contained",color:"primary",type:"submit",disabled:n,children:"Find"})]})}})})})),ie=n(85),oe=n.n(ie),ue=Object(u.a)((function(e){return{root:{padding:0,margin:"0 10px"},actions:{margin:"10px",padding:"25px",backgroundColor:"#e9e9e9"},users:{margin:"10px",backgroundColor:"#e9e9e9"},notFound:{padding:"30px",display:"flex",justifyContent:"center"}}})),le=function(){var e=ue(),t=Object(g.c)(R),n=Object(g.b)(),a=Object(o.f)();Object(r.useEffect)((function(){var e=oe.a.parse(a.location.search.substr(1)),r=t.currentPage,c=t.filter;switch(e.page&&(r=Number(e.page)),e.term&&(c=Object(v.a)(Object(v.a)({},c),{},{term:e.term})),e.friend){case"null":c=Object(v.a)(Object(v.a)({},c),{},{friend:null});break;case"true":c=Object(v.a)(Object(v.a)({},c),{},{friend:!0});break;case"false":c=Object(v.a)(Object(v.a)({},c),{},{friend:!1})}n(z(r,t.pageSize,c.term,c.friend))}),[]),Object(r.useEffect)((function(){var e={};t.filter.term&&(e.term=t.filter.term),null!==t.filter.friend&&(e.friend=String(t.filter.friend)),1!==t.currentPage&&(e.page=String(t.currentPage)),a.push({search:oe.a.stringify(e)})}),[t.filter,t.currentPage,a]);var c=function(e){n(M(e))},s=function(e){n(G(e))};return t.loading?Object(_.jsx)(ne,{}):Object(_.jsxs)(ee.a,{className:e.root,children:[Object(_.jsx)(ee.a,{className:e.actions,children:Object(_.jsx)(se,{onFilterChanged:function(e){n(z(1,t.pageSize,e.term,e.friend))}})}),Object(_.jsxs)(ee.a,{className:e.users,children:[0===t.users.length&&Object(_.jsx)(ee.a,{className:e.notFound,children:Object(_.jsx)(j.a,{variant:"h5",children:"User with this name not found..."})}),t.users.map((function(e){return Object(_.jsx)(q,{follow:c,unfollow:s,user:e,followingInProgress:t.followingInProgress},e.id)}))]}),0!==t.users.length&&Object(_.jsx)(ee.a,{className:e.actions,children:Object(_.jsx)($,{currentPage:t.pageSize,totalItemsCount:t.totalUsersCount,pageSize:t.pageSize,onPageChanged:function(e){n(z(e,t.pageSize))}})})]})},de=n(196),je=n(197),be=n(191),pe=n(110),fe=n.n(pe),Oe=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"space-between"},item:{display:"flex",justifyContent:"center",alignItems:"center"},weatherInfo:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"50px",backgroundColor:"#E9E9E9",borderRadius:"5px",height:"45px",color:"#000",padding:"0 20px"},img:{marginTop:"8px"},button:{border:"1px solid #E9E9E9",padding:"9px 20px"},loginLink:{color:"#fff",textDecoration:"none"}}})),xe=function(e){var t,n=e.weatherData,r=e.openMenu,a=e.setOpenMenu,c=e.authData,s=Oe(),i=Object(g.b)(),o="http://openweathermap.org/img/w/"+(null===(t=n.weatherData)||void 0===t?void 0:t.weather[0].icon)+".png";return Object(_.jsx)(de.a,{position:"static",children:Object(_.jsxs)(je.a,{className:s.root,children:[Object(_.jsxs)("div",{className:s.item,children:[Object(_.jsx)(be.a,{onClick:function(){return a(!r)},edge:"start",color:"inherit","aria-label":"menu",children:Object(_.jsx)(fe.a,{})}),Object(_.jsx)(j.a,{variant:"h6",children:"Description"})]}),Object(_.jsxs)("div",{className:s.item,children:[n.weatherData&&Object(_.jsxs)("div",{className:s.weatherInfo,children:[Object(_.jsxs)(j.a,{variant:"subtitle2",children:[Object(_.jsx)("b",{children:"In Prague:"}),n.weatherData.main.temp," degree"]}),Object(_.jsx)("img",{src:o,className:s.img})]}),c.isAuth?Object(_.jsx)(O.a,{className:s.button,color:"inherit",onClick:function(){i(I())},children:"Logout"}):Object(_.jsx)(O.a,{className:s.button,color:"inherit",children:Object(_.jsx)(V.b,{className:s.loginLink,to:"/login",children:"Login"})})]})]})})},he=n(205),ge=n(189),me=n(198),ve=n(199),Ee=n(200),Se=n(59),we=n.n(Se),Ce=Object(u.a)((function(e){return Object(he.a)({root:{width:"225px"}})})),Te=function(){var e=Ce(),t=Object(o.f)();return Object(_.jsx)(ee.a,{className:e.root,children:Object(_.jsxs)(ge.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(_.jsxs)(me.a,{button:!0,onClick:function(){return t.push("/profile",{update:!0})},children:[Object(_.jsx)(ve.a,{children:Object(_.jsx)(we.a,{})}),Object(_.jsx)(Ee.a,{primary:"Profile"})]}),Object(_.jsxs)(me.a,{button:!0,onClick:function(){return t.push("/users",{update:!0})},children:[Object(_.jsx)(ve.a,{children:Object(_.jsx)(we.a,{})}),Object(_.jsx)(Ee.a,{primary:"Users"})]}),Object(_.jsxs)(me.a,{button:!0,onClick:function(){return t.push("/chat",{update:!0})},children:[Object(_.jsx)(ve.a,{children:Object(_.jsx)(we.a,{})}),Object(_.jsx)(Ee.a,{primary:"Chat"})]}),Object(_.jsxs)(me.a,{button:!0,onClick:function(){return t.push("/news",{update:!0})},children:[Object(_.jsx)(ve.a,{children:Object(_.jsx)(we.a,{})}),Object(_.jsx)(Ee.a,{primary:"News"})]})]})})},Ie=function(e){return e.app},_e={initialized:!1,loading:!1,error:!1},ye=function(){return{type:"REQUEST_INITIALIZED"}},ke=function(){return{type:"INITIALIZED_SUCCESS"}},Re=function(){return{type:"INITIALIZED_FAILED"}},Ae=function(){return{type:"FETCHED_INITIALIZE_APP"}},Ue=n(201),Ne={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11}],profile:null,status:"",loading:!1,error:!0},De=function(e){return{type:"ADD_POST",newPostText:e}},Fe=function(e){return{type:"DELETE_POST",postId:e}},Le=function(){return{type:"REQUEST_USER_PROFILE"}},Pe=function(e){return{type:"REQUEST_USER_PROFILE_SUCCESS",profile:e}},He=function(e){return{type:"REQUEST_STATUS_SUCCESS",status:e}},We=function(){return{type:"REQUEST_USER_PROFILE_FAILED"}},Qe=function(e){return{type:"REQUEST_PHOTO_SUCCESS",photos:e}},ze=function(e){return{type:"FETCHED_USER_PROFILE",userId:e}},Me=function(e){return{type:"FETCHED_PHOTO",photos:e}},Ge=function(e){return e.profile},Be=n(111),Ve=n.n(Be),Ze=Object(u.a)((function(e){return{wrapper:{margin:"0 10px"},background:{backgroundColor:"#e9e9e9",margin:"15px"},wallpaper:{padding:0},wallpaperImg:{width:"100%",height:"300px"},profileInfo:{display:"flex",margin:"15px",justifyContent:"flex-start",backgroundColor:"#e9e9e9",borderRadius:"5px"},posts:{margin:"20px",padding:"10px"},post:{margin:"10px",padding:"10px",display:"flex",alignItems:"center",justifyContent:"flexStart"},postMessage:{margin:"0 20px"},likesCount:{display:"flex",alignItems:"center"},postImg:{width:"40px",borderRadius:"5px"},addPostButton:{padding:"15px 25px"},deletePostButton:{marginLeft:"20px"},addPostForm:{padding:"30px"},addPostInput:{marginRight:"10px"},addPostText:{marginBottom:"10px"},profileImg:{width:"400px",borderRadius:"10px",margin:"-150px 30px 0 0",padding:0},profileImgButton:{display:"flex",flexDirection:"column",alignItems:"flex-end"},profileButton:{width:"180px",margin:"20px 30px 0 0"},fullName:{margin:"-80px 0 40px 0",color:"#f6f6f6"},line:{border:"1px solid #ccc",backgroundColor:"#cccccc"},contacts:{margin:"10px 30px 0"}}})),qe=function(){var e,t=Ze(),n=Object(g.b)(),a=Object(g.c)(m),c=Object(g.c)(Ge),s=Object(o.g)(),u=Object(o.f)(),l=!s.userId,d=Object(r.useState)(!1),p=Object(i.a)(d,2),f=(p[0],p[1],Object(r.useState)("")),x=Object(i.a)(f,2),h=x[0],v=x[1],E=function(e){n(Fe(e.id))};return Object(r.useEffect)((function(){var e;(null===(e=s)||void 0===e?void 0:e.userId)||(s=a.userId)||u.push("/login"),s?Number(s)?n(ze(s)):n(ze(s.userId)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}),[]),c.profile?Object(_.jsxs)(ee.a,{className:t.wrapper,children:[Object(_.jsx)(Ue.a,{className:t.wallpaper,children:Object(_.jsx)("img",{className:t.wallpaperImg,src:"https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701591408.jpg"})}),Object(_.jsxs)(Ue.a,{className:t.profileInfo,children:[Object(_.jsxs)("div",{className:t.profileImgButton,children:[Object(_.jsx)("img",{className:t.profileImg,src:(null===(e=c.profile)||void 0===e?void 0:e.photos.large)||B}),l&&Object(_.jsxs)(O.a,{className:t.profileButton,size:"large",variant:"contained",component:"label",color:"primary",children:["Change image",Object(_.jsx)("input",{type:"file",hidden:!0,onChange:function(e){e.target.files&&e.target.files.length&&n(Me(e.target.files[0]))}})]})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)(j.a,{variant:"h4",className:t.fullName,children:c.profile.fullName}),Object(_.jsxs)(j.a,{variant:"h6",children:[Object(_.jsx)("b",{children:"Looking for a job:"})," ",c.profile.lookingForAJob?"yes":"no"]}),Object(_.jsx)("hr",{className:t.line}),Object(_.jsxs)(j.a,{variant:"h6",children:[Object(_.jsx)("b",{children:"About me:"})," ",c.profile.aboutMe]}),Object(_.jsx)("hr",{className:t.line}),c.profile.lookingForAJob&&Object(_.jsxs)(j.a,{variant:"h6",children:[Object(_.jsx)("b",{children:"My skills:"})," ",c.profile.lookingForAJobDescription]})]}),Object(_.jsx)("div",{className:t.contacts,children:Object(_.jsxs)(j.a,{variant:"h6",children:[" ",Object(_.jsx)("b",{children:"Contacts:"}),Object(_.jsx)("hr",{className:t.line}),Object.keys(c.profile.contacts).map((function(e){var t;return Object(_.jsx)(Je,{contactTitle:e,contactValue:(null===(t=c.profile)||void 0===t?void 0:t.contacts[e])||"contacts"},e)}))]})})]}),Object(_.jsx)(ee.a,{className:t.background,children:Object(_.jsxs)(Ue.a,{className:t.posts,children:[l&&Object(_.jsx)(ee.a,{className:t.addPostForm,children:Object(_.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(_.jsx)(j.a,{variant:"h5",className:t.addPostText,children:"Add new post"}),Object(_.jsx)(b.a,{value:h,onChange:function(e){return v(e.target.value)},className:t.addPostInput,id:"standard-basic",variant:"outlined",label:"Enter your text..."}),Object(_.jsx)(O.a,{onClick:function(){n(De(h))},variant:"contained",color:"primary",className:t.addPostButton,children:"Add post"})]})}),c.posts.map((function(e){var n;return Object(_.jsxs)(ee.a,{className:t.post,children:[Object(_.jsx)("img",{className:t.postImg,src:(null===(n=c.profile)||void 0===n?void 0:n.photos.large)||B}),Object(_.jsx)(j.a,{variant:"subtitle2",className:t.postMessage,children:e.message}),Object(_.jsxs)(j.a,{variant:"subtitle2",className:t.likesCount,children:[Object(_.jsx)(Ve.a,{}),e.likesCount]}),Object(_.jsx)(O.a,{onClick:E,size:"small",variant:"contained",color:"secondary",className:t.deletePostButton,children:"Delete post"})]},e.id)}))]})})]}):Object(_.jsx)(ne,{})},Je=function(e){var t=e.contactTitle,n=e.contactValue;return Object(_.jsxs)(j.a,{children:[Object(_.jsx)("b",{children:t}),": ",n]})},Xe=n(112),Ye=n(10),Ke=n.n(Ye),$e=n(6),et={"messages-received":[],"status-changed":[]},tt=null,nt=function(){it("pending"),setTimeout(ot,3e3)},rt=function(e){var t=JSON.parse(e.data);et["messages-received"].forEach((function(e){return e(t)}))},at=function(){it("ready")},ct=function(){it("error"),console.error("REFRESH PAGE")},st=function(){var e,t,n,r;null===(e=tt)||void 0===e||e.removeEventListener("close",nt),null===(t=tt)||void 0===t||t.removeEventListener("message",rt),null===(n=tt)||void 0===n||n.removeEventListener("open",at),null===(r=tt)||void 0===r||r.removeEventListener("error",ct)},it=function(e){et["status-changed"].forEach((function(t){return t(e)}))};function ot(){var e;st(),null===(e=tt)||void 0===e||e.close(),tt=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),it("pending"),tt.addEventListener("close",nt),tt.addEventListener("message",rt),tt.addEventListener("open",at),tt.addEventListener("error",ct)}var ut=function(){ot()},lt=function(){var e;et["messages-received"]=[],et["status-changed"]=[],st(),null===(e=tt)||void 0===e||e.close()},dt=function(e,t){return et[e].push(t),function(){et[e]=et[e].filter((function(e){return e!==t}))}},jt=function(e,t){et[e]=et[e].filter((function(e){return e!==t}))},bt=function(e){var t;null===(t=tt)||void 0===t||t.send(e)},pt=Ke.a.mark(mt),ft=Ke.a.mark(Et),Ot=Ke.a.mark(St),xt=Ke.a.mark(wt),ht=Ke.a.mark(Ct),gt=null;function mt(e){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===gt&&(gt=function(e){}),e.abrupt("return",gt);case 2:case"end":return e.stop()}}),pt)}var vt=null;function Et(e){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===vt&&(vt=function(e){}),e.abrupt("return",vt);case 2:case"end":return e.stop()}}),ft)}function St(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.b)(ut);case 2:return e.next=4,Object($e.b)(dt("messages-received",mt));case 4:return e.next=6,Object($e.b)(dt("status-changed",Et));case 6:case"end":return e.stop()}}),Ot)}function wt(e){return Ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($e.b)(bt,e);case 2:case"end":return t.stop()}}),xt)}function Ct(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),ht)}var Tt=function(e){return e.chat},It=function(){return Object(_.jsx)("div",{children:Object(_.jsx)(_t,{})})},_t=function(){var e=Object(g.b)(),t=Object(g.c)(Tt).status;return Object(r.useEffect)((function(){return e(St()),function(){e((jt("messages-received",mt),jt("status-changed",Et),void lt()))}}),[]),Object(_.jsxs)("div",{children:["error"===t&&Object(_.jsx)("div",{children:"Some error occurred. Please refresh the page"}),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(yt,{}),Object(_.jsx)(Rt,{})]})]})},yt=function(e){Object(Xe.a)(e);var t=Object(g.c)(Tt).messages,n=Object(r.useRef)(null),a=Object(r.useState)(!0),c=Object(i.a)(a,2),s=c[0],o=c[1];return Object(r.useEffect)((function(){var e;s&&(null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[t]),Object(_.jsxs)("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!s&&o(!0):s&&o(!1)},children:[t.map((function(e,t){return Object(_.jsx)(kt,{message:e},e.id)})),Object(_.jsx)("div",{ref:n})]})},kt=a.a.memo((function(e){var t=e.message;return console.log(">>>>>>Message"),Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:t.photo,style:{width:"30px"}})," ",Object(_.jsx)("b",{children:t.userName}),Object(_.jsx)("br",{}),t.message,Object(_.jsx)("hr",{})]})})),Rt=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(g.b)(),s=Object(g.c)(Tt).status;return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("textarea",{onChange:function(e){return a(e.currentTarget.value)},value:n})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{disabled:"ready"!==s,onClick:function(){n&&(c(wt(n)),a(""))},children:"Send"})})]})},At={weatherData:null,loading:!1,error:!1},Ut=function(){return{type:"REQUEST_WEATHER_DATA"}},Nt=function(e){return{type:"WEATHER_DATA_SUCCESS",weatherData:e}},Dt=function(){return{type:"WEATHER_DATA_FAILED"}},Ft=function(e){return{type:"FETCHED_WEATHER_DATA",name:e}},Lt=function(e){return e.weather},Pt=Object(u.a)((function(e){return{rootOpen:{backgroundColor:"#eeeeee",display:"grid",gridTemplateColumns:"225px 1fr",gridTemplateRows:"auto",gridGap:"10px 0",padding:0,margin:0,height:"100vh",gridTemplateAreas:'"header header"\n         "navbar content"'},rootClose:{backgroundColor:"#eeeeee",display:"grid",gridGap:"10px 0",gridTemplateColumns:"1fr",gridTemplateRows:"auto",padding:0,margin:0,height:"100vh",gridTemplateAreas:'"header"\n         "content"'},header:{gridArea:"header"},navbar:{gridArea:"navbar"},content:{gridArea:"content"}}}));function Ht(){var e=Object(g.c)(Ie),t=Object(g.c)(m),n=Object(g.c)(Lt),a=Object(g.b)(),c=Object(r.useState)(!1),s=Object(i.a)(c,2),u=s[0],l=s[1],d=Pt();return Object(r.useEffect)((function(){a(Ae()),a(Ft("Prague"))}),[]),e?Object(_.jsxs)("div",{className:u?d.rootOpen:d.rootClose,children:[Object(_.jsx)("div",{className:d.header,children:Object(_.jsx)(xe,{weatherData:n,authData:t,openMenu:u,setOpenMenu:l})}),Object(_.jsx)("div",{className:d.navbar,children:u&&Object(_.jsx)(Te,{})}),Object(_.jsxs)("div",{className:d.content,children:[Object(_.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(_.jsx)(o.a,{to:"/profile"})}}),Object(_.jsx)(o.b,{path:"/users",render:function(){return Object(_.jsx)(le,{})}}),Object(_.jsx)(o.b,{path:"/login",render:function(){return Object(_.jsx)(k,{})}}),Object(_.jsx)(o.b,{path:"/profile/:userId?",render:function(){return Object(_.jsx)(qe,{})}}),Object(_.jsx)(o.b,{path:"/chat",render:function(){return Object(_.jsx)(It,{})}})]})]}):Object(_.jsx)(ne,{})}var Wt,Qt,zt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},Mt=n(47),Gt=n(115),Bt=n(72),Vt=n.n(Bt),Zt=Vt.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7eaf4c11-a445-4b77-be52-da75e1dbe314"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(Wt||(Wt={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(Qt||(Qt={}));var qt=function(){return Zt.get("auth/me").then((function(e){return e.data}))},Jt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Zt.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},Xt=function(){return Zt.delete("auth/login")},Yt=function(){return Zt.get("security/get-captcha-url").then((function(e){return e.data}))},Kt=Ke.a.mark(rn),$t=Ke.a.mark(an),en=Ke.a.mark(cn),tn=Ke.a.mark(sn),nn=Ke.a.mark(on);function rn(){var e,t,n,r,a;return Ke.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object($e.c)(S());case 3:return c.next=5,Object($e.b)(qt);case 5:if(e=c.sent,t=e.data,n=t.id,r=t.login,a=t.email,e.resultCode!==Wt.Success){c.next=10;break}return c.next=10,Object($e.c)(w(n,r,a,!0));case 10:c.next=16;break;case 12:return c.prev=12,c.t0=c.catch(0),c.next=16,Object($e.c)(C());case 16:case"end":return c.stop()}}),Kt,null,[[0,12]])}function an(){var e;return Ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object($e.c)(S());case 3:return t.next=5,Object($e.b)(Yt);case 5:e=t.sent,e,t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object($e.c)(C());case 13:case"end":return t.stop()}}),$t,null,[[0,9]])}function cn(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(S());case 3:return n.next=5,Object($e.b)(Jt,e.email,e.password,e.rememberMe,e.captcha);case 5:if((t=n.sent).resultCode!==Wt.Success){n.next=11;break}return n.next=9,Object($e.b)(rn);case 9:n.next=14;break;case 11:if(t.resultCode!==Qt.CaptchaIsRequired){n.next=14;break}return n.next=14,Object($e.b)(an);case 14:n.next=20;break;case 16:return n.prev=16,n.t0=n.catch(0),n.next=20,Object($e.c)(C());case 20:case"end":return n.stop()}}),en,null,[[0,16]])}function sn(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object($e.c)(S());case 3:return e.next=5,Object($e.b)(Xt);case 5:if(0!==e.sent.data.resultCode){e.next=9;break}return e.next=9,Object($e.c)(w(null,null,null,!1));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,Object($e.c)(C());case 15:case"end":return e.stop()}}),tn,null,[[0,11]])}function on(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)("FETCHED_LOGIN",cn);case 2:return e.next=4,Object($e.e)("FETCHED_LOGOUT",sn);case 4:return e.next=6,Object($e.e)("FETCHED_USER_DATA",rn);case 6:return e.next=8,Object($e.e)("FETCHED_CAPTCHA_URL",an);case 8:case"end":return e.stop()}}),nn)}var un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Zt.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},ln=function(e){return Zt.post("follow/".concat(e)).then((function(e){return e.data}))},dn=function(e){return Zt.delete("follow/".concat(e)).then((function(e){return e.data}))},jn=Ke.a.mark(On),bn=Ke.a.mark(xn),pn=Ke.a.mark(hn),fn=Ke.a.mark(gn);function On(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(L());case 3:return n.next=5,Object($e.c)(W(e.currentPage));case 5:return n.next=7,Object($e.c)(Q({term:e.term,friend:e.friend}));case 7:return n.next=9,Object($e.b)(un,e.currentPage,e.pageSize,e.term,e.friend);case 9:return t=n.sent,n.next=12,Object($e.c)(P(t));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object($e.c)(H());case 18:case"end":return n.stop()}}),jn,null,[[0,14]])}function xn(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(L());case 3:return n.next=5,Object($e.b)(ln,e.userId);case 5:return t=n.sent,n.next=8,Object($e.c)(D(t));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object($e.c)(H());case 14:case"end":return n.stop()}}),bn,null,[[0,10]])}function hn(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(L());case 3:return n.next=5,Object($e.b)(dn,e.userId);case 5:return t=n.sent,n.next=8,Object($e.c)(F(t));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object($e.c)(H());case 14:case"end":return n.stop()}}),pn,null,[[0,10]])}function gn(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)("FETCHED_USERS",On);case 2:return e.next=4,Object($e.e)("FETCHED_FOLLOW",xn);case 4:return e.next=6,Object($e.e)("FETCHED_UNFOLLOW",hn);case 6:case"end":return e.stop()}}),fn)}var mn=Ke.a.mark(En),vn=Ke.a.mark(Sn);function En(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object($e.c)(ye());case 3:return e.next=5,Object($e.b)(rn);case 5:return e.next=7,Object($e.c)(ke());case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object($e.c)(Re());case 13:case"end":return e.stop()}}),mn,null,[[0,9]])}function Sn(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)("FETCHED_INITIALIZE_APP",En);case 2:case"end":return e.stop()}}),vn)}var wn=function(e){return Zt.get("profile/"+e).then((function(e){return e.data}))},Cn=function(e){return Zt.get("profile/status/"+e).then((function(e){return e.data}))},Tn=function(e){return Zt.put("profile/status",{status:e}).then((function(e){return e.data}))},In=function(e){var t=new FormData;return t.append("image",e),Zt.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},_n=function(e){return Zt.put("profile",e).then((function(e){return e.data}))},yn=Ke.a.mark(Dn),kn=Ke.a.mark(Fn),Rn=Ke.a.mark(Ln),An=Ke.a.mark(Pn),Un=Ke.a.mark(Hn),Nn=Ke.a.mark(Wn);function Dn(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(Le());case 3:return n.next=5,Object($e.b)(wn,e.userId);case 5:return t=n.sent,n.next=8,Object($e.c)(Pe(t));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object($e.c)(We());case 14:case"end":return n.stop()}}),yn,null,[[0,10]])}function Fn(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(Le());case 3:return n.next=5,Object($e.b)(Cn,e);case 5:return t=n.sent,n.next=8,Object($e.c)(He(t));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object($e.c)(We());case 14:case"end":return n.stop()}}),kn,null,[[0,10]])}function Ln(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(Le());case 3:return n.next=5,Object($e.b)(Tn,e);case 5:return t=n.sent,n.next=8,Object($e.c)(He(t));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object($e.c)(We());case 14:case"end":return n.stop()}}),Rn,null,[[0,10]])}function Pn(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(Le());case 3:return n.next=5,Object($e.b)(In,e.photos);case 5:return t=n.sent,n.next=8,Object($e.c)(Qe(t));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object($e.c)(We());case 14:case"end":return n.stop()}}),An,null,[[0,10]])}function Hn(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(Le());case 3:return n.next=5,Object($e.d)((function(e){return e.auth.userId}));case 5:return t=n.sent,n.next=8,Object($e.b)(_n,e);case 8:if(0!==n.sent.resultCode){n.next=16;break}if(null==t){n.next=15;break}return n.next=13,Object($e.b)(Dn,t);case 13:n.next=16;break;case 15:throw new Error("userId can't be null");case 16:n.next=22;break;case 18:return n.prev=18,n.t0=n.catch(0),n.next=22,Object($e.c)(We());case 22:case"end":return n.stop()}}),Un,null,[[0,18]])}function Wn(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)("FETCHED_USER_PROFILE",Dn);case 2:return e.next=4,Object($e.e)("FETCHED_STATUS",Fn);case 4:return e.next=6,Object($e.e)("FETCHED_NEW_STATUS",Ln);case 6:return e.next=8,Object($e.e)("FETCHED_PHOTO",Pn);case 8:return e.next=10,Object($e.e)("FETCHED_NEW_USER_PROFILE",Hn);case 10:case"end":return e.stop()}}),Nn)}var Qn=function(e){return Vt.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&lang=ru&units=metric&appid=55598e00e9fc9fb8f3777e1dd9e2aef8")).then((function(e){return e.data}))},zn=Ke.a.mark(Gn),Mn=Ke.a.mark(Bn);function Gn(e){var t;return Ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object($e.c)(Ut());case 3:return n.next=5,Object($e.b)(Qn,e.name);case 5:return t=n.sent,n.next=8,Object($e.c)(Nt(t));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object($e.c)(Dt());case 14:case"end":return n.stop()}}),zn,null,[[0,10]])}function Bn(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)("FETCHED_WEATHER_DATA",Gn);case 2:case"end":return e.stop()}}),Mn)}var Vn=Ke.a.mark(Zn);function Zn(){return Ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.a)([on(),gn(),Sn(),Wn(),Ct(),Bn()]);case 2:case"end":return e.stop()}}),Vn)}var qn=n(113),Jn={messages:[],status:"pending"},Xn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGES_RECEIVED":return Object(v.a)(Object(v.a)({},e),{},{messages:[].concat(Object(A.a)(e.messages),Object(A.a)(t.payload.messages.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{id:Object(qn.v1)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"STATUS_CHANGED":return Object(v.a)(Object(v.a)({},e),{},{status:t.payload.status});default:return e}},Yn=Object(Mt.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_USER_DATA":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"SET_USER_DATA":case"GET_CAPTCHA_URL_SUCCESS":return Object(v.a)(Object(v.a)({},e),t.payload);case"REQUEST_USER_DATA_FAILED":return Object(v.a)(Object(v.a)({},e),{},{error:!0});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(v.a)(Object(v.a)({},e),{},{users:U(e.users,t.userId,"id",{followed:!1})});case"REQUEST_USERS":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"REQUEST_USERS_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{users:t.users.items,totalUsersCount:t.users.totalCount,loading:!1});case"SET_CURRENT_PAGE":return Object(v.a)(Object(v.a)({},e),{},{currentPage:t.currentPage,loading:!1});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(v.a)(Object(v.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case"SET_FILTER":return Object(v.a)(Object(v.a)({},e),{},{filter:t.payload,loading:!1});case"REQUEST_USERS_FAILED":return Object(v.a)(Object(v.a)({},e),{},{error:!0});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:3,message:t.newPostText,likesCount:0};return Object(v.a)(Object(v.a)({},e),{},{posts:[].concat(Object(A.a)(e.posts),[n])});case"REQUEST_USER_PROFILE":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"REQUEST_STATUS_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{status:t.status,loading:!1});case"REQUEST_USER_PROFILE_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{profile:t.profile,loading:!1});case"DELETE_POST":return Object(v.a)(Object(v.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"REQUEST_PHOTO_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{profile:Object(v.a)(Object(v.a)({},e.profile),{},{photos:t.photos,loading:!1})});case"REQUEST_USER_PROFILE_FAILED":return Object(v.a)(Object(v.a)({},e),{},{error:!0});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_INITIALIZED":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"INITIALIZED_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{initialized:!0,loading:!1});case"INITIALIZED_FAILED":return Object(v.a)(Object(v.a)({},e),{},{error:!0,loading:!1});default:return e}},chat:Xn,weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_WEATHER_DATA":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"WEATHER_DATA_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{weatherData:t.weatherData,loading:!1});case"WEATHER_DATA_FAILED":return Object(v.a)(Object(v.a)({},e),{},{error:!0,loading:!1});default:return e}}}),Kn=Object(Gt.a)(),$n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Mt.c,er=Object(Mt.d)(Yn,$n(Object(Mt.a)(Kn)));Kn.run(Zn);var tr=n(202),nr=n(114),rr=Object(nr.a)({});s.a.render(Object(_.jsx)(tr.a,{theme:rr,children:Object(_.jsx)(V.a,{children:Object(_.jsx)(g.a,{store:er,children:Object(_.jsx)(Ht,{})})})}),document.getElementById("root")),zt()}},[[155,1,2]]]);
//# sourceMappingURL=main.35e7a97f.chunk.js.map