"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8672],{67244:function(n,t,e){e.d(t,{LI:function(){return A},LK:function(){return Q},Nl:function(){return N},W:function(){return Z},eh:function(){return B},jj:function(){return M},qn:function(){return E},v:function(){return q},v_:function(){return S},zd:function(){return k}});var r=e(861),u=e.n(r),a=e(17061),i=e.n(a),o=e(17156),l=e.n(o),c=e(42122),m=e.n(c),s=e(27424),f=e.n(s),d=e(43671),v=e(59508),p=e(46495),g=e(17283),h=e(27484),b=e.n(h),y=e(61029),C=e(67294),x=e(92627),P=e(58926),V=e(61895),L=e(37432),U=e(24069),F=e(28722),w=(0,P.oV)();function I(n,t,e){for(var r=n.from,u=n.to,a=[],i=function(n,t){var e=[],r=b().utc(n);for(;r.unix()<=t.unix();)e.push(r),r=r.add(1,"day");return e}(b().utc(1e3*r),b().utc(1e3*u)),o=0,l=function(){var n=m[c],r=t.find((function(t){return D(b().utc(1e3*t.timestamp),n)}));r?a.push(r):a.push(e({timestamp:n.unix()},a[o-1])),o++},c=0,m=i;c<m.length;c++)l();return a}function D(n,t){return n.year()===t.year()&&n.month()===t.month()&&n.date()===t.date()}function B(){var n=b().utc().startOf("day"),t=b().utc().endOf("day");return{from:n.unix(),to:t.unix()}}function S(n){var t=_("{\n    _meta {\n      block {\n        number\n      }\n    }\n  }"),e=f()(t,3),r=e[0],u=e[1],a=e[2],i=(0,C.useState)(),o=f()(i,2),l=o[0],c=o[1];return(0,C.useEffect)((function(){r&&w[n.toString()].getBlock(r._meta.block.number).then((function(n){c(n)})).catch((function(n){console.error(n)}))}),[r,c]),{block:l,loading:u,error:a}}var N=function(n){var t=_('\n  {\n    activities(first: 1000, orderBy: timestamp, where: {  timestamp_gte: "'.concat(n.from,'", timestamp_lte:"').concat(n.to,'" }) {\n      openCount\n      closeCount\n      mintCount\n      burnCount\n      timestamp\n      newUser\n      userCount\n    }\n  }\n  ')),e=f()(t,3),r=e[0],u=e[1],a=e[2],i=0,o=0;return{data:I(n,((null==r?void 0:r.activities)||[]).map((function(n){var t=n.mintCount+n.burnCount,e=n.openCount+n.closeCount,r=e+t;i+=r;var u=n.userCount-n.newUser;return o+=n.newUser,m()(m()({},n),{},{all:r,mintAndBurn:t,trading:e,existingUser:u,cumulativeNewUser:o,cumulative:i})})),(function(n,t){return m()(m()({},n),{},{openCount:0,closeCount:0,mintCount:0,burnCount:0,newUser:0,userCount:0,all:0,mintAndBurn:0,trading:0,existingUser:t?t.existingUser:0,cumulativeNewUser:t?t.cumulativeNewUser:0,cumulative:t?t.cumulative:0})})),loading:u,error:a}};function _(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(t.subgraph,t.subgraphUrl,(0,L.x)()),r=e.chainId,u=(0,C.useState)(),a=f()(u,2),i=a[0],o=a[1],l=(0,C.useState)(!0),c=f()(l,2),m=c[0],s=c[1],h=(0,C.useState)(null),b=f()(h,2),y=b[0],x=b[1];return(0,C.useEffect)((function(){var t=new d.f({link:new v.u({uri:(0,F.x7)(r),fetch:fetch}),cache:new p.h}),e=(0,g.Ps)(n);t.query({query:e}).then((function(n){o(n.data),s(!1)})).catch((function(n){x(n),s(!1)}))}),[n,r]),[i,m,y]}var k=function(n){var t=n.from,e=n.to,r=_('{\n    summaries(where: {period: hourly, timestamp_gte: "'.concat(t,'", timestamp_lte:"').concat(e,'"}) {\n    fees\n    lpVolume\n    openInterest\n    period\n    tradingLPVolume\n    tradingVolume\n    uniqueUsers\n  }}')),u=f()(r,3),a=u[0],i=u[1],o=u[2],l=["fees","openInterest","tradingVolume"];return null!=a&&a.summaries?{data:a.summaries.reduce((function(n,t){var e=O(l,t);return e.lpVolume=e.lpVolume/1e6,e.tradingLPVolume=e.tradingLPVolume/1e6,e.totalVolume=e.tradingVolume+e.tradingLPVolume,n.fees+=e.fees,n.openInterest+=e.openInterest,n.tradingVolume+=e.tradingVolume,n.totalVolume+=e.totalVolume,n.lpVolume+=e.lpVolume,n.uniqueUsers+=e.uniqueUsers,n}),{totalVolume:0,fees:0,tradingLPVolume:0,openInterest:0,tradingVolume:0,lpVolume:0,uniqueUsers:0}),loading:i,error:o}:{data:void 0,loading:i,error:o}},q=function(){var n=l()(i()().mark((function n(t,e){var r,u,a,o,l,c,m,s,d;return i()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=new x.N(t,e)).setChainId(e),n.next=4,r.getVault();case 4:return u=n.sent,n.next=7,r.asset();case 7:return a=n.sent,n.next=10,Promise.all([a.balanceOf(u._address),a.decimals()]);case 10:return o=n.sent,l=f()(o,2),c=l[0],m=l[1],s=(0,U.He)(m),d=(0,U.dN)(c,s),n.abrupt("return",d);case 17:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),M=function(){var n,t=_("{\n  summaries(where: {period: total }) {\n    fees\n    lpVolume\n    openInterest\n    trades\n    period\n    tradingVolume\n    tradingLPVolume\n    uniqueUsers\n  }}"),e=f()(t,3),r=e[0],u=e[1],a=e[2];if(r&&(r.summaries||[]).length>0){(n=O(["fees","openInterest","tradingVolume"],r.summaries[0])).tradingLPVolume=n.tradingLPVolume/1e6,n.totalVolume=n.tradingVolume+n.tradingLPVolume}else n={fees:0,tradingLPVolume:0,totalVolume:0,openInterest:0,tradingVolume:0,lpVolume:0,uniqueUsers:0};return{data:n,loading:u,error:a}},A=function(n){var t=_('{\n    volumes(first: 1000, where: {period: daily, timestamp_gte: "'.concat(n.from,'", timestamp_lte:"').concat(n.to,'"}) {\n      timestamp\n      open\n      liquidation\n      id\n      market\n      close\n      cumulative\n    }\n    lpstats(first: 1000, where: {period: daily,  timestamp_gte: "').concat(n.from,'", timestamp_lte:"').concat(n.to,'" }) {\n      mint\n      burn\n      timestamp\n      period\n    }\n  }')),e=f()(t,3),r=e[0],a=e[1],i=e[2],o=["open","cumulative","liquidation","close"],l=0,c=[],s={buyAndSell:0};null!=r&&r.volumes&&(c=y.Z.chain((null==r?void 0:r.volumes)||[]).groupBy((function(n){return 86400*parseInt("".concat(n.timestamp/86400))})).map((function(n,t){var e=n.reduce((function(n,t){var e=O(o,t);return n.all+=e.cumulative||0,l+=e.cumulative,n.cumulative=l,s[t.market.toUpperCase()]=0,n[t.market.toUpperCase()]=e.cumulative,n}),{all:0,cumulative:0,timestamp:Number(t)});return e})).value());var d=((null==r?void 0:r.lpstats)||[]).map((function(n){var t=n.mint/1e6,e=n.burn/1e6;return m()(m()({},n),{},{buyAndSell:t+e,mint:t,burn:e})})),v=I(n,y.Z.chain([].concat(u()(d),u()(c))).groupBy((function(n){return 86400*parseInt("".concat(n.timestamp/86400))})).map((function(n){return n.reduce((function(n,t){return m()(m()({},n),t)}),m()({},s))})).value(),(function(n,t){return m()(m()(m()({},n),s),{},{all:0,mint:0,burn:0,buyAndSell:0,cumulative:t?t.cumulative:0})})),p=0;return v.reduce((function(n,t,e){var r=t.cumulative;return p+=t.buyAndSell||0,e>0&&void 0===t.cumulative?(r=v[e-1].cumulative,r+=t.buyAndSell):r+=p,t.cumulative=r,t.all=(t.all||0)+t.buyAndSell,n}),v),{data:v,loading:a,error:i}},E=function(n){var t,e,r,u,a,i,o,l,c,s,d=["totalProfit","totalLoss","pnlCumulative","longOpenInterest","openInterest","shortOpenInterest"],v=_('{\n     traders (first: 1000, where: { timestamp_gte: "'.concat(n.from,'", timestamp_lte:"').concat(n.to,'"}) {\n      longOpenInterest\n      openInterest\n      pnlCumulative\n      shortOpenInterest\n      timestamp\n      totalLoss\n      totalProfit\n    }\n  }\n  ')),p=f()(v,3),g=p[0],h=p[1],b=p[2],C=0,x=0,P=0,V=((null==g?void 0:g.traders)||[]).map((function(n){var t=O(d,n),e=t.totalProfit,r=t.totalLoss,u=r+e;return C+=u,P+=e,x-=Math.abs(r),m()(m()({},t),{},{currentLossCumulative:x,currentProfitCumulative:P,pnl:u,currentPnlCumulative:C})})),L=0,U=0,F=0;V.length>0&&(t=null===(o=y.Z.maxBy(V,(function(n){return n.pnl})))||void 0===o?void 0:o.pnl,e=null===(l=y.Z.minBy(V,(function(n){return n.pnl})))||void 0===l?void 0:l.pnl,a=null===(c=y.Z.maxBy(V,(function(n){return n.currentPnlCumulative})))||void 0===c?void 0:c.currentPnlCumulative,r=null===(s=y.Z.minBy(V,(function(n){return n.currentPnlCumulative})))||void 0===s?void 0:s.currentPnlCumulative,u=y.Z.minBy(V,(function(n){return n.totalLoss})).totalLoss,i=y.Z.maxBy(V,(function(n){return n.totalProfit})).totalProfit,L=Math.max(i,-u),U=V[V.length-1].currentProfitCumulative,F=V[V.length-1].currentLossCumulative);return{data:{data:I(n,V,(function(n,t){return m()(m()({},n),{},{longOpenInterest:0,openInterest:0,shortOpenInterest:0,currentLossCumulative:t?t.currentLossCumulative:0,currentProfitCumulative:t?t.currentProfitCumulative:0,pnl:0,currentPnlCumulative:t?t.currentPnlCumulative:0,pnlCumulative:t?t.pnlCumulative:0,totalLoss:0,totalProfit:0})})),stats:{maxPnl:t,maxLoss:u,maxProfit:i,maxProfitLoss:L,maxCurrentCumulativeProfitLoss:Math.max(U,-F),maxCurrentCumulativePnl:a,maxAbsPnl:Math.max(Math.abs(t||0),Math.abs(e||0)),maxAbsCumulativePnl:Math.max(Math.abs(a||0),Math.abs(r||0))}},loading:h,error:b}};function O(n,t){var e=m()({},t);return n.forEach((function(n){e[n]=(0,V.Q6)(t[n]).dividedBy(1e18).toNumber()})),e}var Z=function(){var n=_("{\n   fees(where: {period: daily}) {\n      period\n      cumulative\n      timestamp\n    }\n    totalFees: fees(where: {period: total}) {\n      period\n      cumulative\n      timestamp\n    }\n  }\n  "),t=f()(n,3),e=t[0],r=t[1],u=(t[2],((null==e?void 0:e.fees)||[]).filter((function(n){return D(b().utc(1e3*n.timestamp),b().utc())}))),a=0,i=0;return u.length>0&&(a=(0,V.Q6)(u[0].cumulative).dividedBy(1e18).toNumber()),e&&((null==e?void 0:e.totalFees)||[]).length>0&&(i=(0,V.Q6)(e.totalFees[0].cumulative).dividedBy(1e18).toNumber()),{data:{todayFee:a,total:i},loading:r}},Q=function(n){var t=_('{\n    fees(first: 1000, where: {timestamp_gte: "'.concat(n.from,'", timestamp_lte:"').concat(n.to,'"}) {\n      id\n      open\n      close\n      execution\n      liquidation\n      funding\n      mint\n      timestamp\n      cumulative\n      burn\n    },\n  }\n  ')),e=f()(t,3),r=e[0],u=e[1],a=e[2],i=["open","close","execution","liquidation","funding","mint","burn","cumulative"],o=0;return{data:I(n,((null==r?void 0:r.fees)||[]).map((function(n){var t=O(i,n);o+=t.cumulative;var e=t.cumulative;return m()(m()({},t),{},{all:e,trading:t.open+t.close+t.execution+t.funding,cumulative:o})})),(function(n,t){return m()(m()({},n),{},{open:0,close:0,execution:0,liquidation:0,funding:0,trading:0,mint:0,burn:0,cumulative:t?t.cumulative:0,all:0})})),loading:u,error:a}}},10322:function(n,t,e){e.d(t,{CX:function(){return k},DM:function(){return L},DZ:function(){return x},Fh:function(){return h},Hh:function(){return V},Jv:function(){return C},SV:function(){return F},Yq:function(){return _},aD:function(){return b},g5:function(){return S},kS:function(){return B},mr:function(){return D},uf:function(){return I},xs:function(){return N}});var r=e(38416),u=e.n(r),a=e(42122),i=e.n(a),o=e(27424),l=e.n(o),c=e(70215),m=e.n(c),s=e(861),f=e.n(s),d=e(12001),v=e.n(d),p=e(61895),g=["timestamp"],h=300,b=65,y=Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),C=function(n,t){return x(n,t,!0)},x=function(n,t,e){var r=n;if(!n)return"";r.constructor!==Date&&(r=new Date(1e3*r));var u=t&&t[0]&&t[0].payload&&t[0],a=v()("%d.%m",r),i=u&&u.payload.all;return e||void 0===i||u&&"%"===u.unit?a:"".concat(a,", ").concat(I(i,{currency:!0,compact:!0}))},P=(Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),"#f93333"),V={RED:"#E45571",GREEN:"#70D785",YELLOW:"#FFD15B",BLUE:"#5D75F6",ORANGE:"#F1864A",PURPLE:"#8884FF",CUMULATIVE:"#FFC500"},L=[V.ORANGE,V.BLUE,"#00bfea","#8884ff","#ab6100","#c90000","#7b7b7b","#6464ff","purple","darkgreen","#ff8d00",P,"#ffaf01"],U=function(n){var t=Math.abs(n);return t>=1e9?"".concat((0,p.Q6)(n/1e9).toFixed(2,1),"B"):t>=1e6?"".concat((0,p.Q6)(n/1e6).toFixed(2,1),"M"):t>=1e3?"".concat((0,p.Q6)(n/1e3).toFixed(2,1),"K"):"".concat((0,p.Q6)(n).toFixed(2,1))},F=function(n){return n.toFixed(2)+"%"};function w(n){var t=Math.floor(100*Math.abs(n))/100,e=n<0?-1:1;return y.format(t*e)}var I=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=!!t.currency,r=!!t.compact,u=r?U(n):w(n);return e&&!t.hiddenDollarSign?"$".concat(u):u},D=function(n){return I(n)},B=function(n){return U(n)},S=function(n){return I(n,{currency:!0,compact:!0})},N=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all",r=n;if(!r)return r;if(r.constructor!==Date&&!(r=new Date(1e3*Number(r))).getDate())return r;var u=v()("%d.%m",r),a=t&&t[0];if(a&&"%"===a.unit)return u;var i=a&&a.payload[e];return r.constructor!==Date?"".concat(r,", total: ").concat(I(i)):"".concat(u,", total: ").concat(I(i))},_=function(n,t){var e=t.totalKey,r=void 0===e?"all":e,a=t.ignoreKeys,o=void 0===a?[]:a,c=[].concat(f()(o),[r]);return n.map((function(n){var t,e=n.timestamp,a=m()(n,g),o=n[r];"number"!=typeof o&&(o=Object.entries(a).reduce((function(n,t){var e=l()(t,2),r=e[0],u=e[1];return c.includes(r)||(n+=u),n}),0));var s=Object.entries(a).reduce((function(n,t){var e=l()(t,2),r=e[0],u=e[1];return c.includes(r)?n[r]=u:n[r]=u/o*100,n}),{});return i()(i()({},s),{},(t={},u()(t,r,100),u()(t,"timestamp",e),t))}))},k=function(n,t){return t&&"%"===t.unit?n.toFixed(2):I(n,{currency:!0})}}}]);