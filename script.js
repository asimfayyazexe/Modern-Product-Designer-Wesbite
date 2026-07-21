const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function AnimateHeroPage() {
  var t1 = gsap.timeline();

  t1.from(".nav", {
    y: 20,
    opacity: 0,
    duration: .5,
    ease: Expo.ease
  })
    .to(".block-text", {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: Expo.ease,
      stagger: .5
    }
    )

    .to(".block-text-2", {
      y: 0,
      opacity: 1,
      duration: .5,
      ease: Expo.ease,
      stagger: .3
    })
    .from(".hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1,
      ease: Expo.ease
    })
}

function mouseCircleFollow() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#mouseCircle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

mouseCircleFollow();
AnimateHeroPage()