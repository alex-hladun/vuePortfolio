<template>
  <a href="#about"><div :id="logo" class="logo">A/H</div></a>
  <header id="menubar" class="menubar">
    <div class="menu-item" id="menu-about"><a href="#about">About</a></div>
    <div class="menu-item" id="menu-projects"><a href="#projects">Projects</a></div>
    <div class="menu-spacer" id="menu-spacer"></div>
    <div class="menu-item" id="menu-skills"><a href="#skills">Skills</a></div>
    <div class="menu-item" id="menu-connect"><a href="#connect">Connect</a></div>
    <aside class="scroll-marker"></aside>
  </header>
  <vue-scroll-snap :fullscreen="true">
    <div class="item">
      <Home ref="home" id="home" />
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
import router from "./router";

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
    router.push("/#test");
    console.log("router info", router);

    onMounted(() => {
      let options = {
        root: document.querySelector(".scroll-snap-container"),
        rootMargin: "0px 0px 10px 0px",
        threshold: 1,
      };

      let obsCallback = (entries, observer) => {
        console.log("Obserrrrved");
        // console.log('entries', entries[0])
        console.log("entries", entries[0].target.id);
        // console.log('observer', observer)

        switch (entries[0].target.id) {
          case "about":
            router.push("/#about");
            break;

          case "projects":
            router.push("/#projects");
            break;

          case "skills":
            router.push("/#skills");
            break;
          case "connect":
            router.push("/#connect");
            break;
        }
      };
      let observer = new IntersectionObserver(obsCallback, options);

      let target = document.querySelector("#about");
      let proj = document.querySelector("#projects");
      let skl = document.querySelector("#skills");
      let cnct = document.querySelector("#connect");
      observer.observe(target);
      observer.observe(proj);
      observer.observe(skl);
      observer.observe(cnct);

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
            markers: false,

            // scrub: true,
          },
        }
      );

      let scrollMarkAnim = gsap.timeline();

     
      const menubar = document.querySelector("#menubar");

      const menuWidth = menubar.offsetWidth;
      const totalWidth = document.body.clientWidth;
      const totalHeight = window.innerHeight;
      console.log('total height', totalHeight)
      let start = 1.01*totalHeight;
      let delta = totalHeight;
      let spacing = 1;

      const w1 = document.querySelector("#menu-about").offsetWidth;
      const w2 = document.querySelector("#menu-projects").offsetWidth;
      const w3 = document.querySelector("#menu-spacer").offsetWidth;
      const w4 = document.querySelector("#menu-skills").offsetWidth;
      const w5 = document.querySelector("#menu-connect").offsetWidth;

      const fs = (menuWidth - w1 - w2 - w3 - w4 - w5) / 6;

      console.log(w1, w2, w3, w4, w5, menuWidth);
      console.log(fs);

      scrollMarkAnim
        .fromTo(
          ".scroll-marker",
          { x: -menuWidth / 2 + fs + w1 / 2 },
          {
            x: -menuWidth / 2 + 2 * fs + w1 + w2 / 2,
            scrollTrigger: {
              scroller: ".scroll-snap-container",
              trigger: ".scroll-marker",
              start: start,
              end: start + delta,
              scrub: true,
              // markers: true,
            },
          }
        )
        .to(".scroll-marker", {
          x: -menuWidth / 2 + 4 * fs + w1 + w2 + w3 + w4 / 2,
          immediateRender: false,
          scrollTrigger: {
            scroller: ".scroll-snap-container",

            start: start + delta + spacing,
            end: start + 2 * delta + spacing,
            scrub: true,
            // markers: true,
          },
        })
        .to(".scroll-marker", {
          x: -menuWidth / 2 + 5 * fs + w1 + w2 + w3 + w4 + w5 / 2,
          immediateRender: false,

          scrollTrigger: {
            scroller: ".scroll-snap-container",

            start: start + 2 * delta + 2 * spacing,
            end: start + 3 * delta,
            scrub: true,
            // markers: true,
          },
        });
    });

    // onUnmounted(() => {
    //   document.removeEventListener("scroll", handleScroll);
    // });

    return {};
  },
};
</script>
