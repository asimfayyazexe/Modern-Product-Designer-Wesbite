const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let timeOut;

// Smooth Animation Using Gsap
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

// Sqeezing the Mouse shape when moving
function sqeezeMouseCircle(){
  let xScale = 1;
  let yScale = 1

  let xPrev = 0;
  let yPrev = 0;
  window.addEventListener("mousemove", function(dets){
    clearTimeout(timeOut);  // Clearing TimeOut Whenever the  Moves

    xScale = gsap.utils.clamp(.8, 1.2, dets.clientX - xPrev)
    yScale = gsap.utils.clamp(.8, 1.2, dets.clientY - yPrev)

    xPrev = dets.clientX;
    yPrev = dets.clientY;

    mouseCircleFollow(xScale, yScale);
    // Move shape will comeback to circle after 1s when mousemove stops
    timeOut = setTimeout(function(){
         document.querySelector("#mouseCircle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  })
}

// Mouse Circle Follows the Cursor 
function mouseCircleFollow(xScale, yScale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#mouseCircle").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`;
  });
}

mouseCircleFollow();
sqeezeMouseCircle();
AnimateHeroPage();