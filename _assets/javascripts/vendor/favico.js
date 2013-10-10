/**
 * @fileOverview Favico animations
 * @author Miroslav Magda, http://blog.ejci.net
 * @version 0.2.1
 */
var Favico=function(a){"use strict";function y(a){if(a.paused||a.ended||n)return!1;try{h.clearRect(0,0,f,e),h.drawImage(a,0,0,f,e)}catch(b){}setTimeout(y,C.duration,a),z.setIcon(g)}function A(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,b,c,d){return b+b+c+c+d+d});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16)}:!1}function B(a,b){var c={};for(var d in a)c[d]=a[d];for(var d in b)c[d]=b[d];return c}a=a?a:{};var c,d,e,f,g,h,i,j,k,l,m,n,o,b={bgColor:"#d00",textColor:"#fff",type:"circle",animation:"slide",elementId:!1},p=[];m=function(){},j=n=!1;var q=function(){c=B(b,a),c.bgColor=A(c.bgColor),c.textColor=A(c.textColor),c.animation=C.types[""+c.animation]?c.animation:b.animation,c.type=s[""+c.type]?c.type:b.type;try{d=z.getIcon(),g=document.createElement("canvas"),i=document.createElement("img"),i.setAttribute("src",d.getAttribute("href")),i.onload=function(){e=i.height>0?i.height:32,f=i.width>0?i.width:32,g.height=e,g.width=f,h=g.getContext("2d"),r.ready()},o={},o.ff=/firefox/i.test(navigator.userAgent.toLowerCase()),o.chrome=/chrome/i.test(navigator.userAgent.toLowerCase()),o.opera=/opera/i.test(navigator.userAgent.toLowerCase()),o.ie=/msie/i.test(navigator.userAgent.toLowerCase())||/trident/i.test(navigator.userAgent.toLowerCase()),o.supported=o.chrome||o.ff||o.opera}catch(j){throw"Error initializing favico..."}},r={};r.ready=function(){j=!0,r.reset(),m()},r.reset=function(){p=[],k=!1,h.clearRect(0,0,f,e),h.drawImage(i,0,0,f,e),z.setIcon(g)},r.start=function(){if(j&&!l){var a=function(){k=p[0],l=!1,p.length>0&&(p.shift(),r.start())};p.length>0&&(l=!0,k?C.run(k.options,function(){C.run(p[0].options,function(){a()},!1)},!0):C.run(p[0].options,function(){a()},!1))}};var s={},t=function(a){return a.n=Math.abs(a.n),a.x=f*a.x,a.y=e*a.y,a.w=f*a.w,a.h=e*a.h,a};s.circle=function(a){a=t(a);var b=a.n>9;b&&(a.x=a.x-.4*a.w,a.w=1.4*a.w),h.clearRect(0,0,f,e),h.drawImage(i,0,0,f,e),h.beginPath(),h.font="bold "+Math.floor(a.h)+"px sans-serif",h.textAlign="center",b?(h.moveTo(a.x+a.w/2,a.y),h.lineTo(a.x+a.w-a.h/2,a.y),h.quadraticCurveTo(a.x+a.w,a.y,a.x+a.w,a.y+a.h/2),h.lineTo(a.x+a.w,a.y+a.h-a.h/2),h.quadraticCurveTo(a.x+a.w,a.y+a.h,a.x+a.w-a.h/2,a.y+a.h),h.lineTo(a.x+a.h/2,a.y+a.h),h.quadraticCurveTo(a.x,a.y+a.h,a.x,a.y+a.h-a.h/2),h.lineTo(a.x,a.y+a.h/2),h.quadraticCurveTo(a.x,a.y,a.x+a.h/2,a.y)):h.arc(a.x+a.w/2,a.y+a.h/2,a.h/2,0,2*Math.PI),h.fillStyle="rgba("+c.bgColor.r+","+c.bgColor.g+","+c.bgColor.b+","+a.o+")",h.fill(),h.closePath(),h.beginPath(),h.stroke(),h.fillStyle="rgba("+c.textColor.r+","+c.textColor.g+","+c.textColor.b+","+a.o+")",h.fillText(b?"9+":a.n,Math.floor(a.x+a.w/2),Math.floor(a.y+a.h-.15*a.h)),h.closePath()},s.rectangle=function(a){a=t(a);var b=a.n>9;b&&(a.x=Math.floor(a.x-.4*a.w),a.w=Math.floor(1.4*a.w)),h.clearRect(0,0,f,e),h.drawImage(i,0,0,f,e),h.beginPath(),h.font="bold "+Math.floor(a.h)+"px sans-serif",h.textAlign="center",h.fillStyle="rgba("+c.bgColor.r+","+c.bgColor.g+","+c.bgColor.b+","+a.o+")",h.fillRect(a.x,a.y,a.w,a.h),h.fillStyle="rgba("+c.textColor.r+","+c.textColor.g+","+c.textColor.b+","+a.o+")",h.fillText(b?"9+":a.n,Math.floor(a.x+a.w/2),Math.floor(a.y+a.h-.15*a.h)),h.closePath()};var u=function(a,b){m=function(){try{if(a>0){if(C.types[""+b]&&(c.animation=b),p.push({type:"badge",options:{n:a}}),p.length>100)throw"Too many badges requests in queue...";r.start()}else r.reset()}catch(d){throw"Error setting badge..."}},j&&m()},v=function(a){m=function(){try{var b=a.width,c=a.height,d=document.createElement("img"),i=c/e>b/f?b/f:c/e;d.setAttribute("src",a.getAttribute("src")),d.height=c/i,d.width=b/i,h.clearRect(0,0,f,e),h.drawImage(d,0,0,f,e),z.setIcon(g)}catch(j){throw"Error setting image..."}},j&&m()},w=function(a){m=function(){try{if("stop"===a)return n=!0,r.reset(),n=!1,void 0;a.width,a.height,a.addEventListener("play",function(){y(this)},!1)}catch(g){throw"Error setting video..."}},j&&m()},x=function(a){if(window.URL&&window.URL.createObjectURL||(window.URL=window.URL||{},window.URL.createObjectURL=function(a){return a}),o.supported){var b=!1;navigator.getUserMedia=navigator.getUserMedia||navigator.oGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia,m=function(){try{if("stop"===a)return n=!0,r.reset(),n=!1,void 0;b=document.createElement("video"),b.width=f,b.height=e,navigator.getUserMedia({video:!0,audio:!1},function(a){b.src=URL.createObjectURL(a),b.play(),y(b)},function(){})}catch(c){throw"Error setting webcam..."}},j&&m()}},z={};z.getIcon=function(){var a=!1,b=function(){for(var a=document.getElementsByTagName("head")[0].getElementsByTagName("link"),b=a.length,c=b-1;c>=0;c--)if(/icon/i.test(a[c].getAttribute("rel")))return a[c];return!1};return c.elementId?(a=document.getElementById(c.elementId),a.setAttribute("href",a.getAttribute("src"))):(a=b(),a===!1&&(a=document.createElement("link"),a.setAttribute("rel","icon"),document.getElementsByTagName("head")[0].appendChild(a))),a.setAttribute("type","image/png"),a},z.setIcon=function(a){var b=a.toDataURL("image/png");if(c.elementId)document.getElementById(c.elementId).setAttribute("src",b);else if(o.ff||o.opera){d.getAttribute("rel");var f=d;d=document.createElement("link"),o.opera&&d.setAttribute("rel","icon"),d.setAttribute("rel","icon"),d.setAttribute("type","image/png"),document.getElementsByTagName("head")[0].appendChild(d),d.setAttribute("href",b),f.parentNode&&f.parentNode.removeChild(f)}else d.setAttribute("href",b)};var C={};return C.duration=40,C.types={},C.types.fade=[{x:.4,y:.4,w:.6,h:.6,o:0},{x:.4,y:.4,w:.6,h:.6,o:.1},{x:.4,y:.4,w:.6,h:.6,o:.2},{x:.4,y:.4,w:.6,h:.6,o:.3},{x:.4,y:.4,w:.6,h:.6,o:.4},{x:.4,y:.4,w:.6,h:.6,o:.5},{x:.4,y:.4,w:.6,h:.6,o:.6},{x:.4,y:.4,w:.6,h:.6,o:.7},{x:.4,y:.4,w:.6,h:.6,o:.8},{x:.4,y:.4,w:.6,h:.6,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}],C.types.none=[{x:.4,y:.4,w:.6,h:.6,o:1}],C.types.pop=[{x:1,y:1,w:0,h:0,o:1},{x:.9,y:.9,w:.1,h:.1,o:1},{x:.8,y:.8,w:.2,h:.2,o:1},{x:.7,y:.7,w:.3,h:.3,o:1},{x:.6,y:.6,w:.4,h:.4,o:1},{x:.5,y:.5,w:.5,h:.5,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}],C.types.popFade=[{x:.75,y:.75,w:0,h:0,o:0},{x:.65,y:.65,w:.1,h:.1,o:.2},{x:.6,y:.6,w:.2,h:.2,o:.4},{x:.55,y:.55,w:.3,h:.3,o:.6},{x:.5,y:.5,w:.4,h:.4,o:.8},{x:.45,y:.45,w:.5,h:.5,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}],C.types.slide=[{x:.4,y:1,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.8,w:.6,h:.6,o:1},{x:.4,y:.7,w:.6,h:.6,o:1},{x:.4,y:.6,w:.6,h:.6,o:1},{x:.4,y:.5,w:.6,h:.6,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}],C.run=function(a,b,d,e){var f=C.types[c.animation];return e=d===!0?"undefined"!=typeof e?e:f.length-1:"undefined"!=typeof e?e:0,b=b?b:function(){},e<f.length&&e>=0?(s[c.type](B(a,f[e])),setTimeout(function(){d?e-=1:e+=1,C.run(a,b,d,e)},C.duration),z.setIcon(g),void 0):(b(),void 0)},q(),{badge:u,video:w,image:v,webcam:x,reset:r.reset}};