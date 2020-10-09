<template>
  <main :class="styles.container">
    <h1 :class="styles.header"><u>Skills</u></h1>

    <!-- <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" /> -->

    <div :class="styles.skillsHeader"><u>Languages</u></div>
    <p :class="styles.skillsText">
      JavaScript/TypeScript · Python · Java · Kotlin · HTML · CSS · Ruby
    </p>
    <div :class="styles.skillsHeader"><u>Frameworks</u></div>
    <p :class="styles.skillsText">
      NodeJS · React · Vue · Next.js · Redux · Express · Android Studio · Ruby on Rails · Socket.io · SASS
    </p>
    <div :class="styles.skillsHeader"><u>Systems / Databases</u></div>
    <p :class="styles.skillsText">
      PosgreSQL · mySQL · Git · Firebase · GCP · AWS · RESTful
    </p>
    <div :class="styles.skillsHeader"><u>Testing Suites</u></div>
    <p :class="styles.skillsText">
       Mocha/Chai · JEST · Cypress · RSpec
    </p>
  </main>
</template>

<script>
import styles from "../styles/About.module.css";

export default {
  name: "Skills",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      styles,
    };
  },
};
</script>
