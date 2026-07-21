const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function mouseCircleFollow() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#mouseCircle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

mouseCircleFollow();