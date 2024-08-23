const cursorEffect = () => {
    let cursor = document.getElementById("mouse");
    let page = document.getElementById("layer");

    page.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.pageX,
            y: e.pageY,
            opacity: 1,
            delay: 0.2,
            duration: 0.5,
        });
    });

    page.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        });
    });
    page.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        });
    });

    page.addEventListener("mousestop", () => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        });
    });
};
cursorEffect();

const gsapEnging = () => {
  
    const tl = gsap.timeline();
     tl.from("#ball", {
        x:-500,
        opacity: 0,
        duration: 1,
        yoyo: true
     })

    tl.from("#nav", {
        // opacity: 0,
        x: -10000,
        scaleX: 0,
        duration: 1,
        stagger: 0.3,
    });

    tl.from("#nav h1", {
        x: -200,
        opacity: 0,
        // scale: 6,
        stagger: 0.2,
    }).from("#nav h3", {
        x: 100,
        opacity: 0,
        // scale: 6,
    });
    tl.from(".side-links li", {
        opacity: 0,
        y: 200,
        duration: 1,
        stagger: 0.5,
    }).from(".social-media li", {
        opacity: 0,
        x: 100,
        duration: 1,
        stagger: 0.5,
    });

    // function RRR() {
    //     document.addEventListener("wheel", (event) => {
    //         if (event.deltaY > 0) {
    //           tl.from(".text-area h4", {
    //            x:-100,
    //             duration: 1,
    //             stagger: 0.5,
    //           })
    //         }
    //         console.log("ok");
    //     });
    // }  
    
    // RRR();

    tl.from(".text-area h4", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
    });
    tl.from(".text-area h1", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
    })
    tl.from(".comment h3", {
        y:-200,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
    })
    tl.from(".comment div, .comment div h4, .comment div p", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
    })
};

gsapEnging();

const hackerText = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    document.querySelector(".hacker").onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };
};
hackerText();


function popup () {
    let btn = document.querySelector(".btn")
    let upnav = document.querySelector(".popup")

    btn.addEventListener("click", () => {
        const tl = gsap.timeline();
        tl.to(upnav, {
        y: 670,
        scale: 1,
        borderRadius: 50,
        duration: 1,
       })
     
       tl.to(".left-child .video", {
        scaleX:1,
        duration:1,
        delay: .6
       })
       tl.to(".right-child ul li div h4", {
        scaleX:1,
        duration:1,
        delay: .6,
        stagger: 0.2
       })
    })
}

popup();

function close () {
    let btn = document.getElementById("close")
    let upnav = document.querySelector(".popup")
    
    btn.addEventListener("click", () => {
       const tl = gsap.timeline()
       gsap.to(upnav, {
        y: -700,
        scale: 0,
        borderRadius: 50,
        duration: 1.5,
        delay:.7
       })
       tl.to(".left-child .video", {
        scaleX:  0,
        duration: .5,
       })
       tl.to(".right-child ul li div h4", {
        scaleX:0,
        duration:1,
        delay: .6,
        stagger: 0.2
       })
    })
}

close();

