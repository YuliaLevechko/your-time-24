(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    linkAbout: document.querySelector("[data-link-about]"),
    linkCatalog: document.querySelector("[data-link-catalog]"),
    linkSale: document.querySelector("[data-link-sale]"),
  };
  refs.openMenuBtn. addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("appear");
    document.body.classList.toggle("no-scroll");
  }
  refs.linkAbout.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("appear");
    document.body.classList.toggle("no-scroll");
  }
  refs.linkCatalog.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("appear");
    document.body.classList.toggle("no-scroll");
  }
  refs.linkSale.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("appear");
    document.body.classList.toggle("no-scroll");
  }
})();