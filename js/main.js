document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__mobile");

  burger.addEventListener("click", (e) => {
    const list = document.querySelector(".header__nav");
    burger.classList.toggle("header__mobile-active");
    const active = burger.classList.contains("header__mobile-active");
    handleOpen(list, active);
  });

  const up = document.querySelector(".up");

  document.addEventListener("scroll", (e) => {
    window.pageYOffset > 500
      ? up.classList.add("up-active")
      : up.classList.remove("up-active");
  });

  up.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
  });

  const loopItems = document.querySelectorAll(".loop");
  const overlay = document.querySelector(".overlay");
  const isPortfolio = document.querySelector(".item");
  const overlayWrap = overlay.querySelector(".overlay__content");
  if (!isPortfolio) {
    for (let item of loopItems) {
      item.addEventListener("click", (e) => {
        const imgItem = item.parentElement.querySelector("img");
        overlay.classList.add("overlay-active");
        document.body.style.overflowY = "hidden";
        overlayWrap.insertAdjacentHTML(
          "beforeend",
          `<img src="${
            imgItem.srcset.trim().split(" ")[0]
          }" alt="big-img" class="overlay__image" />`
        );
      });
    }

    overlay.addEventListener("click", overlayClose2);

    overlay.addEventListener("transitionstart", (e) => {
      overlay.removeEventListener("click", overlayClose2);
    });

    overlay.addEventListener("transitionend", (e) => {
      overlay.addEventListener("click", overlayClose2);
    });

    const closeOverlay = document.querySelector(".overlay__close");
    closeOverlay.addEventListener("click", overlayClose);

    function overlayClose2(e) {
      if (
        e.target.classList.contains("overlay__image") ||
        e.target === closeOverlay
      ) {
        null;
      } else {
        overlayClose();
      }
    }

    function overlayClose() {
      const overlayImage = overlay.querySelector(".overlay__image");
      document.body.style.overflowY = "auto";
      overlay.classList.remove("overlay-active");
      setTimeout(() => overlayImage.remove(), 410);
    }
  }

  const handleOpen = (elBlock, active, x = 1) => {
    if (active) {
      elBlock.style.height = `${x * elBlock.scrollHeight}px`;
    } else {
      elBlock.style.height = `${elBlock.scrollHeight}px`;
      window.getComputedStyle(elBlock, null).getPropertyValue("height");
      elBlock.style.height = "0";
    }

    elBlock.addEventListener("transitionend", () => {
      if (elBlock.style.height !== "0px") {
        elBlock.style.height = "auto";
      }
    });
  };
});
