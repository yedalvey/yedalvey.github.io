"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7700],{48268:function(e,s,i){i.d(s,{y_:function(){return u}});var l=i(42122),a=i.n(l),n=i(67294),r=i(61895),d=i(85893),c=1,o=0,t=function(e){var s=e.defaultValue,i=void 0===s?"-":s,l=e.value,a=e.defaultValueIncludeSuffix,t=void 0!==a&&a,u=e.displayDecimals,v=void 0===u?2:u,x=e.label,m=void 0===x?"":x,f=e.thousandSeparator,j=void 0===f||f,p=e.prefix,h=void 0===p?"":p,_=e.suffix,N=void 0===_?"":_,g=e.riseColor,y=e.fallColor,P=e.style,Z=e.trend,S=(0,n.useMemo)((function(){return null==l||""===l?t?"".concat(h||"").concat(i).concat(N||""):i:(0,r.dp)(l,v).display({thousandSeparator:j,prefix:h,suffix:N})}),[l,i,v,j,h,N]),z=(0,n.useMemo)((function(){var e=P||Object.create(null);return void 0!==Z&&Z!==o&&(e.color=c===Z?g:y),e}),[g,y,Z,P]);return(0,d.jsxs)("span",{style:z,children:[m&&(0,d.jsx)("span",{title:m,children:m}),S]})},u=function(e){var s=e.separator,i=void 0===s?"/":s,l=e.values;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,a()({},l[0]||{})),i,(0,d.jsx)(t,a()({},l[1]||{}))]})};s.ZP=t},87700:function(e,s,i){i.r(s),i.d(s,{default:function(){return v}});var l=i(48268),a=i(98330),n=i(42157),r="card___bBUN1",d="row___t22fR",c="item___rImEx",o="title___LOKcM",t="price___DjA_x",u=i(85893),v=function(e){e.summaryLoading;var s,i,v=e.summaryData,x=e.summariesLastHours,m=(e.poolLoading,e.feeByToday),f=e.totalAssets,j=(0,a.Z)().t;return(0,u.jsxs)("div",{className:r,children:[(0,u.jsxs)("div",{className:d,children:[(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("div",{className:o,children:j("Total Trading Volume")}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(l.ZP,{value:null==v?void 0:v.totalVolume,prefix:"$"})}),(0,u.jsx)(n.z,{prefix:"$",price:null==x?void 0:x.totalVolume})]}),(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("div",{className:o,children:j("Open Interest")}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(l.ZP,{value:null==v?void 0:v.openInterest,prefix:"$"})}),(0,u.jsx)(n.z,{prefix:"$",price:null==x?void 0:x.openInterest})]})]}),(0,u.jsxs)("div",{className:d,children:[(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("div",{className:o,children:j("Total Fees")}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(l.ZP,{prefix:"$",value:null==m||null===(s=m.data)||void 0===s?void 0:s.total})}),(0,u.jsx)(n.z,{prefix:"$",price:null==m||null===(i=m.data)||void 0===i?void 0:i.todayFee})]}),(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("div",{className:o,children:j("BLP Pool")}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(l.ZP,{prefix:"$",value:f})}),(0,u.jsx)(n.z,{prefix:"$",price:null==x?void 0:x.lpVolume})]})]}),(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("div",{className:o,children:j("Total Users")}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(l.ZP,{value:null==v?void 0:v.uniqueUsers})}),(0,u.jsx)(n.z,{hiddenDollarSign:!0,price:(null==x?void 0:x.uniqueUsers)||0})]})]})}},42157:function(e,s,i){i.d(s,{z:function(){return p},Z:function(){return h}});var l=i(38416),a=i.n(l),n=i(50888),r=i(94184),d=i.n(r),c=i(10322),o="loading___aP5ZE",t="card___zhLax",u="price___S7iyd",v="neg___drPsm",x="title___gB9uU",m="info___amemd",f="content___wzxup",j=i(85893),p=function(e){var s=e.price,i=e.hiddenDollarSign,l=e.prefix,n=void 0===l?"":l;return s&&0!==Number(s)?(0,j.jsxs)("div",{className:d()(u,a()({},v,s<0)),children:[s>0?"+":"-",(0,c.uf)(Math.abs(s),{currency:!0,compact:!0,hiddenDollarSign:i})]}):(0,j.jsx)("div",{className:u,children:"+".concat(n,"0.00")})},h=function(e){var s=e.title,i=e.price,l=e.prefix,a=void 0===l?"":l,r=e.content,d=e.loading,c=e.hiddenDollarSign,u=void 0!==c&&c;return(0,j.jsx)("div",{className:t,children:d?(0,j.jsx)("div",{className:o,children:(0,j.jsx)(n.Z,{spin:!0,rev:!0,style:{color:"#fff"}})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:x,children:s}),(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)("div",{className:f,children:r}),(0,j.jsx)(p,{price:i,hiddenDollarSign:u,prefix:a})]})]})})}}}]);