<template>
  <main :class="styles.container" id="connect">

  <h1 :class="styles.header"><u>Connect</u></h1>

  <!-- <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" /> -->

  <p :class="styles.text">
    CONTACT ME!
  </p>
  </main>
</template>

<script>
import styles from '../styles/About.module.css'

export default {
  name: 'Connect',
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
