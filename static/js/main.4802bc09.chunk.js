(this.webpackJsonplemonai=this.webpackJsonplemonai||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(4),s=n.n(o),a=(n(10),n(5)),r=n(2);n(13);function d(){return Math.floor(9*Math.random())+42}var u=n(0);var l=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(r.useSpeechSynthesis)().speak,s=Object(r.useSpeechRecognition)({onResult:function(e){i(e)}}),l=s.listen,h=s.listening,v=s.stop;function f(){v(),"\ubd88 \ucf1c \uc918"==n?(o({text:"\ub124 \uc54c\uaca0\uc2b5\ub2c8\ub2e4"}),document.querySelector(".switch").click()):"\ubd88 \uaebc \uc918"==n?(o({text:"\ub124 \uc54c\uaca0\uc2b5\ub2c8\ub2e4"}),document.querySelector(".switch_off").click()):("\ud604\uc7ac \ubbf8\uc138\uba3c\uc9c0 \uc5b4\ub54c"==n||"\ud604\uc7ac \ubbf8\uc138 \uba3c\uc9c0 \uc5b4\ub54c"==n)&&o({text:d()+" \uc73c\ub85c, \uc88b\uc74c \uc785\ub2c8\ub2e4"})}return"mediaDevices"in navigator&&navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"videoinput"===e.kind}));if(0===t.length)throw"No camera found on this device.";var n=t[t.length-1];navigator.mediaDevices.getUserMedia({video:{deviceId:n.deviceId,facingMode:["user","environment"],height:{ideal:1080},width:{ideal:1920}}}).then((function(e){var t=e.getVideoTracks()[0];new ImageCapture(t).getPhotoCapabilities().then((function(){var e=document.querySelector(".switch"),n=document.querySelector(".switch_off");e.addEventListener("click",(function(){t.applyConstraints({advanced:[{torch:!0}]})})),n.addEventListener("click",(function(){t.applyConstraints({advanced:[{torch:!1}]})}))}))}))})),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"3103 \uae40\uba85\uc900 \uc791\ud488\uba85: \ubbf8\uc138\uba3c\uc9c0 \uc54c\ub824\uc8fc\ub294 \uc2a4\ub9c8\ud2b8 \uc2a4\ud0e0\ub4dc"}),Object(u.jsxs)("div",{class:"buttons",children:[Object(u.jsx)("div",{class:"vl",children:Object(u.jsx)("button",{class:"ai",onMouseDown:l,children:"\uc778\uc2dd \uc2dc\uc791"})}),Object(u.jsx)("div",{class:"vl",children:Object(u.jsx)("button",{class:"ai",onMouseDown:function(){f()},children:"\uc778\uc2dd \uc911\uc9c0"})})]}),Object(u.jsx)("button",{class:"switch sw",children:"On / Off"}),Object(u.jsx)("button",{class:"switch_off sw",children:"Off"}),Object(u.jsx)("div",{children:n}),h&&Object(u.jsx)("div",{children:"\uc74c\uc131\uc778\uc2dd \ud65c\uc131\ud654 \uc911"})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.4802bc09.chunk.js.map