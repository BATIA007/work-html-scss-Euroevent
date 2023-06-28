const slider1 = new Swiper(".info__slider", {
  pagination: {
    el: ".info__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
});

const slider2 = new Swiper(".features__slider", {
  pagination: {
    el: ".features__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
});

const slider3 = new Swiper(".event__slider", {
  pagination: {
    el: ".event__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
});

const slider4 = new Swiper(".format__slider", {
  pagination: {
    el: ".format__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
  on: {
    slideChange: function (swiper) {
      const item = swiper.slides[swiper.activeIndex];
      const title = document.querySelector(".format__subtitle-1");
      const text = document.querySelector(".format__text");
      if (item) {
        title.textContent = item.dataset.title;
        text.textContent = item.dataset.text;
      }
    },
  },
});

const slider5 = new Swiper(".lead__slider", {
  autoHeight: true,
  pagination: {
    el: ".lead__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
});

const slider6 = new Swiper(".design__slider", {
  pagination: {
    el: ".design__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
  on: {
    slideChange: function (swiper) {
      const item = swiper.slides[swiper.activeIndex];
      const title = document.querySelector(".design__subtitle-1");
      const text = document.querySelector(".design__text");
      if (item) {
        title.textContent = item.dataset.title;
        text.textContent = item.dataset.text;
      }
    },
  },
});

const slider7 = new Swiper(".personal__slider", {
  pagination: {
    el: ".personal__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
  on: {
    slideChange: function (swiper) {
      const item = swiper.slides[swiper.activeIndex];
      const title = document.querySelector(".personal__subtitle span");
      const text = document.querySelector(".personal__text");
      if (item) {
        title.textContent = item.dataset.title;
        text.textContent = item.dataset.text;
      }
    },
  },
});

const slider8 = new Swiper(".about__slider", {
  pagination: {
    el: ".about__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
});

const slider9 = new Swiper(".overlay__slider", {
  autoHeight: true,
  navigation: {
    nextEl: ".overlay__right",
    prevEl: ".overlay__left",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const isPortfolio = document.querySelector(".item");
  const loopItems = document.querySelectorAll(".loop");
  const overlay = document.querySelector(".overlay");

  if (isPortfolio) {
    for (let item of loopItems) {
      item.addEventListener("click", (e) => {
        const num = Number(
          item.parentElement.querySelector("img").dataset.item
        );
        overlay.classList.add("overlay-active");
        document.body.style.overflowY = "hidden";
        slider9.slideTo(num - 1, 0, false);
      });
    }

    overlay.addEventListener("click", overlayClose2);

    overlay.addEventListener("transitionstart", (e) => {
      overlay.removeEventListener("click", overlayClose2);
    });

    overlay.addEventListener("transitionend", (e) => {
      overlay.addEventListener("click", overlayClose2);
    });

    const arrLeft = document.querySelector(".overlay__left");
    const arrRight = document.querySelector(".overlay__right");
    const closeOverlay = document.querySelector(".overlay__close");
    closeOverlay.addEventListener("click", overlayClose);

    function overlayClose2(e) {
      if (
        e.target === arrLeft ||
        e.target === arrRight ||
        e.target.classList.contains("overlay__image") ||
        e.target === closeOverlay
      ) {
        null;
      } else {
        overlayClose();
      }
    }

    function overlayClose() {
      document.body.style.overflowY = "auto";
      overlay.classList.remove("overlay-active");
    }
  }
});
