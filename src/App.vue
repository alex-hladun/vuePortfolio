<template>
  <a href="#about"><div :id="logo" class="logo">A/H</div></a>
  <header :id="menubar" class="menubar">
    <div class="menu-item" id="aboutNav"><a href="#about">About</a></div>
    <div class="menu-item" id="projectsNav"><a href="#projects">Projects</a></div>
    <div class="menu-spacer"></div>
    <div class="menu-item" id="skillsNav"><a href="#skills">Skills</a></div>
    <div class="menu-item" id="connectNav"><a href="#connect">Connect</a></div>
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
import router from './router'

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
    router.push('/#test')
    console.log('router info', router)

    onMounted(() => {
      let options = {
        root: document.querySelector(".scroll-snap-container"),
        rootMargin: "0px 0px 10px 0px",
        threshold: 1,
      };

      let obsCallback = (entries, observer) => {
          console.log("Obserrrrved");
          // console.log('entries', entries[0])
          console.log('entries', entries[0].target.id)
          // console.log('observer', observer)

          switch(entries[0].target.id) {
            case 'about':
            router.push('/#about')
            break

            case 'projects':
            router.push('/#projects')
            break

            case 'skills':
            router.push('/#skills')
            break
            case 'connect':
            router.push('/#connect')
            break
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

      let scrollMarkAnim = gsap.timeline()

      scrollMarkAnim.to(".scroll-marker", {
        x:() => '+=$(projectsNav.width)',
        // xPercent: 20,
        // ease: "slow",
        scrollTrigger: {
          scroller: '.scroll-snap-container',
          trigger: '.scroll-marker',
          start: "1400",
          end:"3000",
          // duration: 2,
          // end: "1200",
          // toggleActions: "play none none reverse",
          scrub: true,
          markers: true,
        },
      })
      .to(".scroll-marker", {
        x:'+=345',
        immediateRender: false,
        // xPercent: 20,
        // ease: "slow",
        scrollTrigger: {
          scroller: '.scroll-snap-container',
          start: "3100",
          end:"4200",
          // duration: 2,
          // end: "1200",
          // toggleActions: "play none none reverse",
          scrub: true,
          markers: true,
        },
      })
      .to(".scroll-marker", {
        x:'+=160',
        immediateRender: false,

        scrollTrigger: {
          scroller: '.scroll-snap-container',
          start: "4300",
          end:"5200",
          // duration: 2,
          // end: "1200",
          // toggleActions: "play none none reverse",
          scrub: true,
          markers: true,
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
