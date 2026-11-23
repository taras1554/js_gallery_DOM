var e=document.querySelector("#thumbs"),t=document.querySelector("#largeImg");e.addEventListener("click",function(e){var r;if("IMG"===e.target.tagName)r=e.target.parentElement;else{if("A"!==e.target.tagName)return;r=e.target}e.preventDefault(),t.src=r.href,t.alt=r.title});
//# sourceMappingURL=index.be6f68c3.js.map
