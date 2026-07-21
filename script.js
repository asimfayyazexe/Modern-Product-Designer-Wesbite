const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let timeOut;

// Smooth Animation Using Gsap
function AnimateHeroPage() {
  var t1 = gsap.timeline();

  t1.from(".nav", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "expo.out"
  })

    .to(".block-text", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.15
    })

    .to(".block-text-2", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "expo.ease",
      stagger: 0.2
    })

    .from(".hero-footer", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "expo.ease"
    })
}

// Sqeezing the Mouse shape when moving
function sqeezeMouseCircle() {
  let xScale = 1;
  let yScale = 1

  let xPrev = 0;
  let yPrev = 0;
  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeOut);  // Clearing TimeOut Whenever the  Moves

    xScale = gsap.utils.clamp(.8, 1.2, dets.clientX - xPrev)
    yScale = gsap.utils.clamp(.8, 1.2, dets.clientY - yPrev)

    xPrev = dets.clientX;
    yPrev = dets.clientY;

    mouseCircleFollow(xScale, yScale);
    // Move shape will comeback to circle after 1s when mousemove stops
    timeOut = setTimeout(function () {
      document.querySelector(".mouseCircle").style.transform =
        `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  })
}

// Mouse Circle Follows the Cursor 
function mouseCircleFollow(xScale, yScale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(".mouseCircle").classList.remove("displayMouse");
    document.querySelector(".mouseCircle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`;
  });
}

// Select all elements
document.querySelectorAll(".element").forEach(function (elem) {
  var img = elem.querySelector("img");

  var rotate = 0;
  var xDiff = 0;

  // Hide image when mouse leaves
  elem.addEventListener("mouseleave", function () {
    gsap.to(img, {
      opacity: 0,
    });
  });

  // Show image and move it with mouse
  elem.addEventListener("mousemove", function (dets) {

    // Mouse position inside current element
    var x = dets.clientX - elem.getBoundingClientRect().left;
    var y = dets.clientY - elem.getBoundingClientRect().top;

    // Calculate movement for rotation
    xDiff = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(img, {
      opacity: 1,
      top: y,
      left: x,
      rotate: gsap.utils.clamp(-20, 20, xDiff),  // Rotate image based on mouse speed
      ease: "power3.out"
    });

  });

});


mouseCircleFollow();
sqeezeMouseCircle();
AnimateHeroPage();