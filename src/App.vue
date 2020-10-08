<template>
  <a href="#about"><div :id="logo" class="logo">A/H</div></a>
  <header :id="menubar" class="menubar">
    <div class="menu-item"><a href="#about">About</a></div>
    <div class="menu-item"><a href="#projects">Projects</a></div>
    <div class="menu-spacer"></div>
    <div class="menu-item"><a href="#skills">Skills</a></div>
    <div class="menu-item"><a href="#connect">Connect</a></div>
  </header>
  <vue-scroll-snap :fullscreen="true">
    <div class="item">
      <Home ref="home" id="one" />
    </div>
    <div class="item" id="about">
      <About />
    </div>
    <div class="item" id="projects">
      <Projects />
    </div>
    <div class="item" id="skills">
      <Skills />
    </div>
    <div class="item" id="connect">
      <Connect />
    </div>
  </vue-scroll-snap>

  <!-- <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view> -->
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Connect from "./components/Connect.vue";
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "./scrollTrigger";
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: "App",
  components: {
    VueScrollSnap,
    Home,
    About,
    Projects,
    Skills,
    Connect,
  },
  setup() {
    // const home = ref(null);
    console.log("running SETUP");

    let options = {
      root: document.querySelector(".scroll-snap-container"),
      rootMargin: "0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver(
      () => console.log("Obserrrrved"),
      options
    );

    let target = document.querySelector("#about");
    observer.observe(target);

    onMounted(() => {
      // document.addEventListener("scroll", handleScroll);

      // gsap.to(".logo", {
      //   left: "50%",
      //   xPercent: -50,
      //   // ease: "slow",
      //   scrollTrigger: {
      //     scroller: '.scroll-snap-container',
      //     duration: 2,
      //     // end: "1200",
      //     toggleActions: "play none none reverse",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });

      gsap.fromTo(
        ".menubar",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          scrollTrigger: {
            scroller: ".scroll-snap-container",
            start: "100",
            end: "1400",
            toggleActions: "play none none reverse",
            markers: true,

            // scrub: true,
          },
        }
      );
    });

    // onUnmounted(() => {
    //   document.removeEventListener("scroll", handleScroll);
    // });

    return {};
  },
};
</script>
