<template>
  <main :class="styles.container">
    <h1 :class="styles.header"><u>About Me</u></h1>

    <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" />

    <p :class="styles.text">
      Hello! I am a Full Stack developer from Calgary, Alberta with a background
      in Oil and Gas. I love all things technology, software dev, and problem
      solving! (also golf)
    </p>
  </main>
</template>

<script>
import styles from "../styles/About.module.css";

export default {
  name: "About",
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      styles
    };
  }
};
</script>
