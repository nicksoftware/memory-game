(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),i=(n(12),n(7)),l=n(3),o={createArray:function(e){return Array.from({length:e},(function(e,t){return t}))},sampleArray:function(e,t){for(var n=e.slice(0),c=[],r=0;r<t&&r<n.length;r++){var a=Math.floor(Math.random()*n.length);c.push(n.splice(a,1)[0])}return c},arrayCrossCounts:function(e,t){var n=0,c=0;e:for(var r=0;r<e.length;r++){for(var a=0;a<t.length;a++)if(t[a]===e[r]){n+=1;continue e}c+=1}return[n,c]}},u=n(0),d="white",h="lightblue",m="lightgreen",b="pink",f=function(e){var t=e.width,n=e.gameStatus,c=e.isChallenge,r=e.isPicked,a=e.onClick,s=d;return n!==O.NEW&&(r?s=c?m:b:!c||n!==O.CHALLENGE&&n!==O.LOST||(s=h)),Object(u.jsx)("div",{className:"cell",style:{width:"".concat(t,"%"),backgroundColor:s},onClick:a})},j={NEW:"You will have a few seconds to memorize the blue random cells",CHALLENGE:"Remember these blue cells now",PLAYING:"Which cells were blue?",WON:"Victory!",LOST:"Game Over"};var g=function(e){var t=e.gameStatus,n=e.startGame,c=e.countdown;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"message",children:j[t]}),Object(u.jsx)("div",{className:"button",children:function(){switch(t){case O.NEW:return Object(u.jsx)("button",{onClick:n,children:"Start Game"});case O.CHALLENGE:break;case O.PLAYING:return c;case O.WON:break;case O.LOST:return Object(u.jsx)("button",{onClick:function(){},children:"Play Again"})}}()})]})},O={NEW:"NEW",CHALLENGE:"CHALLENGE",PLAYING:"PLAYING",WON:"WON",LOST:"LOST"};var L=function(e){var t=e.cellIds,n=e.challengeCellIds,r=e.cellWidth,a=e.challengeSize,s=e.challengeSeconds,d=e.playSeconds,h=e.maxWrongAttempts,m=Object(c.useState)(O.NEW),b=Object(l.a)(m,2),j=b[0],L=b[1],N=Object(c.useState)([]),v=Object(l.a)(N,2),C=v[0],S=v[1],A=Object(c.useState)(d),E=Object(l.a)(A,2),G=E[0],x=E[1];return Object(c.useEffect)((function(){var e;return j===O.CHALLENGE&&(e=setTimeout((function(){return L(O.PLAYING)}),1e3*s)),j===O.PLAYING&&(e=setInterval((function(){x((function(t){return 1===t&&(clearTimeout(e),L(O.LOST)),t-1}))}),1e3)),function(){return clearTimeout(e)}}),[j,s]),Object(u.jsxs)("div",{className:"game",children:[Object(u.jsx)("div",{className:"grid",children:t.map((function(e){return Object(u.jsx)(f,{width:r,gameStatus:j,isChallenge:n.includes(e),isPicked:C.includes(e),onClick:function(){return function(e){j===O.PLAYING&&S((function(t){if(t.includes(e))return t;var c=[].concat(Object(i.a)(t),[e]),r=o.arrayCrossCounts(c,n),s=Object(l.a)(r,2),u=s[0],d=s[1];return u===a&&L(O.WON),d===h&&L(O.LOST),c}))}(e)}},e)}))}),Object(u.jsx)(g,{gameStatus:j,startGame:function(){return L(O.CHALLENGE)},countdown:G})]})},N=function(){var e=o.createArray(25),t=o.sampleArray(e,3);return Object(u.jsx)(L,{cellIds:e,challengeCellIds:t,cellWidth:20,challengeSize:3,challengeSeconds:3,playSeconds:10,maxWrongAttempts:3})};n(14);var v=function(){return Object(u.jsx)(N,{})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),C()}},[[15,1,2]]]);
//# sourceMappingURL=main.7e185263.chunk.js.map