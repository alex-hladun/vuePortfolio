<template>
  <main :class="styles.container" id="about">
    <h1 :class="styles.header"><u>Projects</u></h1>
    <!-- <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" /> -->
    <Project
      v-for="(project, index) in projList"
      v-bind:key="index"
      v-bind:title="project.title"
      v-bind:description="project.description"
    >
    </Project>
  </main>
</template>

<script>
import styles from "../styles/About.module.css";
import Project from "./Project.vue";

const projList = [
  {
    description: "Ask about client projects"
  },
  {
    title: "battleShipReact",
    description:
      'An online battleship clone. Play against your friends or the computer! Made with React, Redux, TypeScript, Express and Websockets. (<a href="https://github.com/alex-hladun/battleShipReact"><b><u>Git</b></u>)'
  },
  {
    title: "debatR",
    description:
      'A live video-chat debating app where users can debate over topics and score points for influencing other users. Uses React, Node, Express, Websockets, GitHub oAuth and WebRTC. (<a href="https://github.com/alex-hladun/DEBATR"><b><u>Git</b></u>)'
  },
  {
    title: "APS Drones",
    description:
      'A blazing-fast SSR website built for a customer using Next.js. Has a dashboard with full authentication and user-specific project details. (<a href="https://apsdrones.ca/"><b><u>Deployed</u></b></a>)'
  },
  {
    title: "BlackJackTV",
    description:
      'A blackjack game for AndroidTV written in Kotlin. Includes animations, and the ability to double and split. Needs to be deployed to Google Play. (<a href="https://github.com/alex-hladun/BlackJackAndroid"><b><u>Git</u></b></a>)'
  }
];

export default {
  name: "Projects",
  props: {
    msg: String
  },
  components: {
    Project
  },
  data() {
    return {
      styles,
      projList
    };
  }
};
</script>
