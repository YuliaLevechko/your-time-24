(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:0,loop:!0,keyboard:{enabled:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"}});(()=>{const o={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),linkAbout:document.querySelector("[data-link-about]"),linkCatalog:document.querySelector("[data-link-catalog]"),linkSale:document.querySelector("[data-link-sale]")};o.openMenuBtn.addEventListener("click",e),o.closeMenuBtn.addEventListener("click",e),o.linkAbout.addEventListener("click",e),o.linkCatalog.addEventListener("click",e),o.linkSale.addEventListener("click",e);function e(){o.menu.classList.toggle("appear"),document.body.classList.toggle("no-scroll")}})();