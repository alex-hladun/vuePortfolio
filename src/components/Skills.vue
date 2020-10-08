<template>
  <main :class="styles.container">

  <h1 :class="styles.header"><u>Skills</u></h1>

  <!-- <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" /> -->

  <p :class="styles.text">
    I have so many skills!
  </p>
  </main>
</template>

<script>
import styles from '../styles/About.module.css'

export default {
  name: 'Skills',
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
