!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=(e,t)=>{const r=new Array(e).fill(0);return{length:e,cells:r,isSunk:()=>r.every(e=>"X"===e),hit:e=>(r[e]="X",r),isHorizontal:t}};var a=(e,t,r)=>({active:e,board:t,pastMoves:r});var o=()=>{const e=new Array(10);for(let t=0;t<10;t+=1)e[t]=new Array(10).fill(" ");return{board:e,placeShip:(t,r)=>{if(!((t,r,n)=>{if(" "!==e[n[0]][n[1]]||r&&n[1]+t>10||!r&&n[0]+t>10)return!1;const a=n[0],o=n[1];let l=a-1;0===a&&(l=0);let s,d,i=o-1;0===o&&(i=0),r?(s=a+2,9===a&&(s=10),d=o+t+1,o+t===10&&(d=10)):(s=a+t+1,a+t===10&&(s=10),d=o+2,9===o&&(d=10));for(let t=l;t<s;t+=1)for(let r=i;r<d;r+=1)if(" "!==e[t][r])return!1;return!0})(t.length,t.isHorizontal,r))return-1;if(t.isHorizontal){const n=r[0];for(let a=r[1],o=0;a<r[1]+t.length;a+=1,o+=1)t.cells[o]=[n,a],e[n][a]=t}else{const n=r[1];for(let a=r[0],o=0;a<r[0]+t.length;a+=1,o+=1)t.cells[o]=[a,n],e[a][n]=t}return t},receiveAttack:(t,r)=>{let n;if(" "===e[t][r])e[t][r]="M",n=!1;else{const a=e[t][r],o=a.cells.findIndex(e=>e[0]===t&&e[1]===r);a.hit(o),n=!0}return n},allSunk:()=>{for(let t=0;t<e.length;t+=1)for(let r=0;r<e.length;r+=1)if("object"==typeof e[t][r]&&!e[t][r].isSunk())return!1;return!0}}};var l={displayBoard:(e,t)=>{for(let r=0;r<10;r+=1)for(let n=0;n<10;n+=1){const a=document.createElement("div");null===t?(a.setAttribute("data-index",`${r}${n}`),a.classList.add("computerBoard")):(a.setAttribute("id",`${r}${n}`),a.classList.add("playerBoard")," "!==t[r][n]&&"M"!==t[r][n]&&a.classList.add("ship")),e.appendChild(a)}},displayShips:e=>{e.forEach(e=>{for(let t=0;t<e.cells.length;t+=1){const r=document.getElementById(`${e.cells[t][0]}${e.cells[t][1]}`);0===t&&r.classList.add("first-cell"),t===e.cells.length-1&&r.classList.add("last-cell"),e.isHorizontal?r.classList.add("horizontal"):r.classList.add("vertical")}})},addClassToDiv:(e,t)=>{e.classList.add(t)},cleanBoard:(e,t)=>{const r=document.querySelectorAll(e),n=document.getElementById(t);[...r].forEach(e=>{n.removeChild(e)})},displayMessage:e=>{document.getElementById("message").textContent=e}};const s=()=>{return[Math.round(9*Math.random()),Math.round(9*Math.random())]},d=()=>Math.random()>.5;var i=(()=>{const e=e=>{let t=0,r=0;const a=[];for(;t<4;){const r=n(1,!0),o=e.placeShip(r,s());-1!==o&&(t+=1,a.push(o))}for(;r<3;){const t=n(2,d()),o=e.placeShip(t,s());-1!==o&&(r+=1,a.push(o))}return a},t=(e,t)=>{let r;if(e.board.allSunk()||t.board.allSunk()){e.active=!1,t.active=!1,t.board.allSunk()?l.displayMessage("Player Wins!"):l.displayMessage("Computer Wins!");const n=document.getElementById("restart");n.classList.remove("hide"),n.addEventListener("click",()=>{window.location.reload()},!1),r=!0}else r=!1;return r},r=(e,t,r,n,a)=>{if(!e.active)return;const o=t.board.receiveAttack(r,n)?"hit":"miss";return l.addClassToDiv(a,o),"miss"===o&&(e.active=!1,t.active=!0),o},i=(e,n)=>{let a,o,l=!1;function d(e){return e[0]===a&&e[1]===o}for(;!l;){const e=s();a=e[0],o=e[1],-1===n.pastMoves.findIndex(d)&&(l=!0)}n.pastMoves.push([a,o]);const i=document.getElementById(`${a}${o}`);r(n,e,a,o,i),t(e,n)};return{startGame:()=>{const n=document.getElementById("playerBoard"),s=document.getElementById("computerBoard"),d=o(),c=o(),u=e(d);e(c);const f=a(!0,d,null),p=a(!1,c,[]);l.displayBoard(n,f.board.board),l.displayBoard(s,null),l.displayShips(u);const m=e=>{const n=e.target.getAttribute("data-index")[0],a=e.target.getAttribute("data-index")[1];if(r(f,p,+n,+a,e.target),!t(f,p))for(;p.active;)i(f,p)};[...document.querySelectorAll(".computerBoard")].forEach(e=>{e.addEventListener("click",m,!1),l.addClassToDiv(e,"inactive")})}}})();const c=document.getElementById("play"),u=document.getElementById("randomize");u.addEventListener("click",function(){l.cleanBoard(".playerBoard","playerBoard"),l.cleanBoard(".computerBoard","computerBoard"),i.startGame()},!1),c.addEventListener("click",function(){[...document.querySelectorAll(".computerBoard")].forEach(e=>{e.classList.remove("inactive")}),l.addClassToDiv(u,"hide"),l.addClassToDiv(c,"hide")},!1),i.startGame()}]);