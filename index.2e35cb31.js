(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),d=()=>{let n="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),document.body.classList.toggle("menu-opened")};t.addEventListener("click",d),n.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=index.2e35cb31.js.map