<template>
  <main :class="styles.container" id="about">

  <h1 :class="styles.header"><u>Projects</u></h1>

  <!-- <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" /> -->

  <p :class="styles.text">
    I am great at lots of projects!
  </p>
  </main>
</template>

<script>
import styles from '../styles/About.module.css'

export default {
  name: 'Projects',
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
