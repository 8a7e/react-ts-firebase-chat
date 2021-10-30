(this["webpackJsonpreact-ts-firebase-chat"]=this["webpackJsonpreact-ts-firebase-chat"]||[]).push([[0],{141:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(58),i=a.n(r),s=a(22),o=a(110),d=a(30),l=a(104),j=a(200),h=a(198),b=a(204),x=a(205),p=a(207),u=a(208),m=a(202),O=a(209),g=a(210),f=a(211),v=a(203),y=a(62),w=a(111),C=(a(128),a(147),y.a.initializeApp({apiKey:"AIzaSyBOSHZiq5FtDl7Bb3P45lur6IQJtzbxx3Q",authDomain:"chat-react-4c8b6.firebaseapp.com",projectId:"chat-react-4c8b6",storageBucket:"chat-react-4c8b6.appspot.com",messagingSenderId:"64897910078",appId:"1:64897910078:web:dd55c37d9351cfd3b1d86f",measurementId:"G-1HVNTT3529"})),S=y.a.firestore(),k=S.collection("messages"),R={store:S,auth:Object(w.a)(C),messages:k,login:function(){var e=new y.a.auth.GoogleAuthProvider;try{y.a.auth().signInWithPopup(e)}catch(t){console.error(t)}},logout:function(){try{y.a.auth().signOut()}catch(e){console.error(e)}},sendMessage:function(e,t){try{k.add({uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,text:t,createdAt:y.a.firestore.FieldValue.serverTimestamp()})}catch(a){console.error(a)}}},I=a(6),W=function(e){var t=e.children,a=e.user,n=e.loading;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(b.a,{sx:{flexGrow:1},children:[Object(I.jsx)(x.a,{position:"static",children:Object(I.jsxs)(p.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(I.jsx)(u.a,{variant:"h6",component:"div",children:"React Firebase Chat"}),a?Object(I.jsxs)(b.a,{sx:{cursor:"pointer"},display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(I.jsxs)(b.a,{p:1,display:"flex",alignItems:"center",borderRight:1,height:"10px",children:[Object(I.jsx)(m.a,{src:a.photoURL}),Object(I.jsx)(u.a,{ml:1,children:a.displayName})]}),Object(I.jsx)(O.a,{onClick:R.logout,color:"inherit",children:"Logout"})]}):Object(I.jsx)(O.a,{onClick:R.login,color:"inherit",children:"Login"})]})}),n&&Object(I.jsx)(b.a,{sx:{width:"100%"},children:Object(I.jsx)(g.a,{})})]}),Object(I.jsx)(f.a,{component:"main",maxWidth:"sm",sx:{mb:4},children:Object(I.jsx)(v.a,{container:!0,minHeight:"80vh",children:t})})]})};var N=function(){return Object(I.jsxs)(v.a,{container:!0,alignSelf:"center",justifyContent:"center",children:[Object(I.jsx)(u.a,{variant:"h6",component:"div",children:"\u0421lick on the login button to access the chat"}),Object(I.jsx)(O.a,{onClick:R.login,type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Login"})]})},A=a(106),B=a(206),D=a(212),T=a(196),L=a(107),F=a.n(L),H=a(197),M=Object(H.a)({messageSent:{borderRadius:"20px 20px 0 20px",marginTop:10,marginRight:10,minWidth:"50%",maxWidth:"50%",padding:15,display:"flex",boxShadow:"0px 5px 5px -5px rgba(34, 60, 80, 0.6)",flexDirection:"column",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",alignSelf:"flex-end",color:"#f2f2f2"},messageReceived:{borderRadius:"20px 20px 0 20px",marginTop:10,minWidth:"50%",maxWidth:"50%",padding:15,display:"flex",flexDirection:"column",wordWrap:"break-word",background:"linear-gradient(45deg, #e6e6e6 30%, #e6e6e6 90%)",color:"#1a1a1a"},time:{marginTop:"10px",opacity:.5},messageBody:{wordWrap:"break-word",overflowyY:"auto",width:"100%"}}),P=function(e){var t=e.message,a=Object(n.createRef)(),c=M(),r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],d=i[1],l=Object(n.useContext)(G),j=Object(n.useCallback)((function(){a.current&&a.current.scrollIntoView({behavior:"smooth"}),l.user.displayName===t.displayName&&d(!0)}),[l.user,t,a]);return Object(n.useEffect)((function(){j()}),[j]),Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(b.a,{className:o?c.messageSent:c.messageReceived,ref:a,sx:{alignSelf:"flex-start"},children:[Object(I.jsx)(m.a,{src:t.photoURL}),Object(I.jsx)(u.a,{variant:"h6",children:t.displayName}),Object(I.jsx)(u.a,{className:c.messageBody,variant:"body1",children:t.text}),Object(I.jsx)(b.a,{children:Object(I.jsx)(u.a,{component:"div",className:c.time,variant:"caption",display:"block",gutterBottom:!0,children:t.createdAt&&"".concat(t.createdAt.toDate().toDateString()," \n              ").concat(t.createdAt.toDate().toLocaleTimeString())})}),Object(I.jsx)(b.a,{})]})})};var U=[{path:"/",Component:function(){var e=Object(n.useContext)(G),t=Object(A.a)(R.messages.orderBy("createdAt")),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),d=o[0],l=o[1];return Object(I.jsx)(f.a,{children:Object(I.jsx)(B.a,{sx:{marginTop:1,padding:"10px"},children:Object(I.jsxs)(v.a,{container:!0,justifyContent:"space-between",minWidth:"100%",children:[Object(I.jsx)(v.a,{children:Object(I.jsxs)(b.a,{sx:{height:"70vh",overflowY:"auto",display:"flex",flexDirection:"column",width:"500px"},children:[r&&Object(I.jsx)(D.a,{}),null===c||void 0===c?void 0:c.map((function(e){return Object(I.jsx)(P,{message:e})}))]})}),Object(I.jsxs)(v.a,{mt:2,width:"600px",children:[Object(I.jsx)(T.a,{value:d,onChange:function(e){return l(e.currentTarget.value)},label:"Message",variant:"outlined",multiline:!0,maxRows:2,fullWidth:!0}),Object(I.jsx)(O.a,{sx:{mt:1},fullWidth:!0,variant:"contained",startIcon:Object(I.jsx)(F.a,{}),onClick:function(){d&&R.sendMessage(e.user,d),l("")},children:"Send"})]})]})})})}}],z=[{path:"/",Component:N}],G=(a(141),Object(n.createContext)({}));var J=function(){var e=Object(l.a)(R.auth),t=Object(s.a)(e,3),a=t[0],n=t[1],c=t[2];return Object(I.jsx)("div",{children:Object(I.jsx)(G.Provider,{value:{user:a},children:Object(I.jsxs)(o.a,{children:[Object(I.jsx)(W,{user:a,loading:n,children:a?Object(I.jsxs)(d.d,{children:[U.map((function(e){var t=e.path,a=e.Component;return Object(I.jsx)(d.b,{path:t,component:a,exact:!0})})),Object(I.jsx)(d.a,{to:"/"})]}):Object(I.jsxs)(d.d,{children:[z.map((function(e){var t=e.path,a=e.Component;return Object(I.jsx)(d.b,{path:t,component:a,exact:!0})})),Object(I.jsx)(d.a,{to:"/"})]})}),Object(I.jsx)(j.a,{open:c,autoHideDuration:5e3,children:Object(I.jsx)(h.a,{severity:"error",sx:{width:"100%"},children:"An error has occurred, please try again."})})]})})})};i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(J,{})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.9693565f.chunk.js.map