(this["webpackJsonpreact-ts-firebase-chat"]=this["webpackJsonpreact-ts-firebase-chat"]||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(58),c=a.n(n),r=a(22),i=a(1),s=a(110),o=a(30),d=a(104),l=a(202),j=a(200),x=a(197),h=a(206),b=a(207),p=a(209),u=a(210),m=a(204),O=a(211),g=a(212),f=a(213),v=a(205),y=a(62),w=a(111),C=(a(129),a(147),y.a.initializeApp({apiKey:"AIzaSyBOSHZiq5FtDl7Bb3P45lur6IQJtzbxx3Q",authDomain:"chat-react-4c8b6.firebaseapp.com",projectId:"chat-react-4c8b6",storageBucket:"chat-react-4c8b6.appspot.com",messagingSenderId:"64897910078",appId:"1:64897910078:web:dd55c37d9351cfd3b1d86f",measurementId:"G-1HVNTT3529"})),S=y.a.firestore(),k=S.collection("messages"),R={store:S,auth:Object(w.a)(C),messages:k,login:function(){var e=new y.a.auth.GoogleAuthProvider;try{y.a.auth().signInWithPopup(e)}catch(t){console.error(t)}},logout:function(){try{y.a.auth().signOut()}catch(e){console.error(e)}},sendMessage:function(e,t){try{k.add({uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,text:t,createdAt:y.a.firestore.FieldValue.serverTimestamp()})}catch(a){console.error(a)}}},I=a(5),W=function(e){var t=e.children,a=e.user,n=e.loading;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(h.a,{sx:{flexGrow:1},children:[Object(I.jsx)(b.a,{position:"static",children:Object(I.jsxs)(p.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(I.jsx)(u.a,{variant:"h6",component:"div",children:"React Firebase Chat"}),a?Object(I.jsxs)(h.a,{sx:{cursor:"pointer"},display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(I.jsxs)(h.a,{p:1,display:"flex",alignItems:"center",borderRight:1,height:"10px",children:[Object(I.jsx)(m.a,{src:a.photoURL}),Object(I.jsx)(u.a,{ml:1,children:a.displayName})]}),Object(I.jsx)(O.a,{onClick:R.logout,color:"inherit",children:"Logout"})]}):Object(I.jsx)(O.a,{onClick:R.login,color:"inherit",children:"Login"})]})}),n&&Object(I.jsx)(h.a,{sx:{width:"100%"},children:Object(I.jsx)(g.a,{})})]}),Object(I.jsx)(f.a,{component:"main",maxWidth:"sm",sx:{mb:4},children:Object(I.jsx)(v.a,{container:!0,minHeight:"80vh",children:t})})]})};var A=function(){return Object(I.jsxs)(v.a,{container:!0,alignSelf:"center",justifyContent:"center",children:[Object(I.jsx)(u.a,{variant:"h6",component:"div",textAlign:"center",children:"\u0421lick on the login button to access the chat"}),Object(I.jsx)(O.a,{onClick:R.login,type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Login"})]})},N=a(106),B=a(208),D=a(214),F=a(198),L=a(107),T=a.n(L),H=a(199),P=Object(H.a)({messageSent:{borderRadius:"20px 20px 0 20px",marginTop:10,marginRight:10,minWidth:"50%",maxWidth:"50%",padding:15,display:"flex",boxShadow:"5px 5px 10px -5px rgba(34, 60, 80, 0.6)",flexDirection:"column",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",alignSelf:"flex-end",color:"#f2f2f2"},messageReceived:{borderRadius:"20px 20px 0 20px",marginTop:10,minWidth:"50%",maxWidth:"50%",padding:15,display:"flex",boxShadow:"5px 5px 10px -5px rgba(34, 60, 80, 0.6)",flexDirection:"column",wordWrap:"break-word",background:"linear-gradient(45deg, #e6e6e6 30%, #e6e6e6 90%)",color:"#1a1a1a"},time:{marginTop:"10px",opacity:.5},messageBody:{wordWrap:"break-word",overflowyY:"auto",width:"100%"}}),U=function(e){var t=e.message,a=Object(i.createRef)(),n=P(),c=Object(i.useState)(!1),s=Object(r.a)(c,2),o=s[0],d=s[1],l=Object(i.useContext)(J),j=Object(i.useCallback)((function(){a.current&&a.current.scrollIntoView({behavior:"smooth"}),l.user.displayName===t.displayName&&d(!0)}),[l.user,t,a]);return Object(i.useEffect)((function(){j()}),[j]),Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(h.a,{display:"flex",flexDirection:"column",children:Object(I.jsxs)(h.a,{className:o?n.messageSent:n.messageReceived,ref:a,children:[Object(I.jsx)(m.a,{src:t.photoURL}),Object(I.jsx)(u.a,{variant:"h6",children:t.displayName}),Object(I.jsx)(u.a,{className:n.messageBody,variant:"body1",children:t.text}),Object(I.jsx)(h.a,{children:Object(I.jsx)(u.a,{component:"div",className:n.time,variant:"caption",display:"block",gutterBottom:!0,children:t.createdAt&&"".concat(t.createdAt.toDate().toDateString()," \n              ").concat(t.createdAt.toDate().toLocaleTimeString())})})]})})})};var z=[{path:"/",Component:function(){var e=Object(i.useContext)(J),t=Object(N.a)(R.messages.orderBy("createdAt")),a=Object(r.a)(t,2),n=a[0],c=a[1],s=Object(i.useState)(""),o=Object(r.a)(s,2),d=o[0],l=o[1];return Object(I.jsx)(f.a,{component:"main",maxWidth:"sm",sx:{mb:4},children:Object(I.jsxs)(B.a,{variant:"outlined",sx:{my:{xs:1},height:"82vh"},children:[Object(I.jsxs)(h.a,{sx:{maxHeight:"85%",overflow:"auto",p:1},children:[c&&Object(I.jsx)(D.a,{}),null===n||void 0===n?void 0:n.map((function(e){return Object(I.jsx)(U,{message:e},e.createdAt.toString())}))]}),Object(I.jsxs)(h.a,{sx:{pl:1,pr:1},children:[Object(I.jsx)(F.a,{value:d,onChange:function(e){return l(e.currentTarget.value)},label:"Message",variant:"outlined",multiline:!0,maxRows:2,fullWidth:!0}),Object(I.jsx)(O.a,{sx:{mt:1},fullWidth:!0,variant:"contained",startIcon:Object(I.jsx)(T.a,{}),onClick:function(){d&&R.sendMessage(e.user,d),l("")},children:"Send"})]})]})})}}],G=[{path:"/",Component:A}],J=Object(i.createContext)({});var M=function(){var e=Object(d.a)(R.auth),t=Object(r.a)(e,3),a=t[0],n=t[1],c=t[2];return Object(I.jsx)("div",{children:Object(I.jsxs)(J.Provider,{value:{user:a},children:[Object(I.jsx)(x.a,{}),Object(I.jsxs)(s.a,{children:[Object(I.jsx)(W,{user:a,loading:n,children:a?Object(I.jsxs)(o.d,{children:[z.map((function(e){var t=e.path,a=e.Component;return Object(I.jsx)(o.b,{path:t,component:a,exact:!0},t)})),Object(I.jsx)(o.a,{to:"/"})]}):Object(I.jsxs)(o.d,{children:[G.map((function(e){var t=e.path,a=e.Component;return Object(I.jsx)(o.b,{path:t,component:a,exact:!0},t)})),Object(I.jsx)(o.a,{to:"/"})]})}),Object(I.jsx)(l.a,{open:c,autoHideDuration:5e3,children:Object(I.jsx)(j.a,{severity:"error",sx:{width:"100%"},children:"An error has occurred, please try again."})})]})]})})};c.a.render(Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(M,{})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.bca8262c.chunk.js.map