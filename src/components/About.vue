<template>
  <main :class="styles.container" id="about">

  <h1 :class="styles.header"><u>About Me</u></h1>

  <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" />

  <p :class="styles.text">
    Hello! I am a Full Stack developer from Calgary, Alberta with a background in Oil and Gas. I love all things technology, coding, and problem-solving with a bias towards network-related systems, games, and creating polished final products.
  </p>
  </main>
</template>

<script>
import styles from '../styles/About.module.css'

export default {
  name: 'About',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      styles
    }
  }
}
</script>
