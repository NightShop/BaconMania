(()=>{"use strict";function e(e,t,n){const d=document.createElement(e);return""!=n&&d.classList.add(n),d.textContent=t,d}function t(e,t=""){const n="../img/"+e,d=document.createElement("img");return""!=t&&d.classList.add(t),d.setAttribute("src",n),d}function n(e){document.querySelector("#content").appendChild(e)}function d(){let e=document.querySelector("#content");const t=document.querySelector("body");return t.removeChild(e),e=document.createElement("div"),e.setAttribute("id","content"),t.appendChild(e),e}function c(){const t=d();document.querySelectorAll("button").forEach((e=>e.classList.remove("active"))),document.querySelector(".homeButton").classList.add("active"),n(e("h3","We care about one thing..."));let c=document.createElement("div");c.classList.add("pictureContainer"),t.appendChild(c);let a=e("p","Sizzling..","punchlines");c.appendChild(a);let o=e("p","..Crispy..","punchlines");c.appendChild(o);let i=e("p","..Golden brown..","punchlines");c.appendChild(i);let l=e("p","..Salty..","punchlines");c.appendChild(l);let p=e("p","..Fatty..","punchlines");c.appendChild(p);let s=e("p","BACON","punchlines");c.appendChild(s);let r=e("p","And that, toped with chedar.","footprint");c.appendChild(r)}const a=document.querySelector("#content"),o=document.querySelector("body"),i=e("h1",'Welcome to "Everywhere Bacon"™',"hero");o.insertBefore(i,a);const l=document.createElement("div"),p=document.createElement("button");p.textContent="Home",p.classList.add("homeButton"),p.addEventListener("click",c),l.appendChild(p);const s=document.createElement("button");s.textContent="Menu",s.classList.add("menuButton"),s.addEventListener("click",(function(){d(),document.querySelectorAll("button").forEach((e=>e.classList.remove("active"))),document.querySelector(".menuButton").classList.add("active");let c=document.createElement("div");c.classList.add("singleItem");let a=e("h4","Bacon Sandwich");c.appendChild(a);let o=e("p","Bacon");c.appendChild(o),o=e("p","Chedar"),c.appendChild(o),o=e("p","Homemade Buns"),c.appendChild(o),o=e("p","Egg"),c.appendChild(o);let i=t("bacon-sandwich.jpg","itemPic");c.appendChild(i),n(c),c=document.createElement("div"),c.classList.add("singleItem"),a=e("h4","Hamburger"),c.appendChild(a),o=e("p","Bacon"),c.appendChild(o),o=e("p","Chedar"),c.appendChild(o),o=e("p","Homemade Buns"),c.appendChild(o),o=e("p","Egg"),c.appendChild(o),i=t("hamburger.jpg","itemPic"),c.appendChild(i),n(c),c=document.createElement("div"),c.classList.add("singleItem"),a=e("h4","Hamburger"),c.appendChild(a),o=e("p","Bacon"),c.appendChild(o),o=e("p","Chedar"),c.appendChild(o),o=e("p","Homemade Buns"),c.appendChild(o),o=e("p","Egg"),c.appendChild(o),i=t("eggs.jpg","itemPic"),c.appendChild(i),n(c)})),l.appendChild(s);const r=document.createElement("button");r.textContent="Contact",r.classList.add("contactButton"),r.addEventListener("click",(function(){d(),document.querySelectorAll("button").forEach((e=>e.classList.remove("active"))),document.querySelector(".contactButton").classList.add("active");const t=document.createElement("div");t.classList.add("addressDiv");let c=e("p","Upper Trenta Valley 6","contactInfo");t.appendChild(c),c=e("p","Bovec, Slovenia","contactInfo"),t.appendChild(c),c=e("p","++386 555 4127","contactInfo"),t.appendChild(c),c=e("p","baconEverywhere@crispy.com","contactInfo"),t.appendChild(c),n(t)})),l.appendChild(r),o.insertBefore(l,a),c()})();