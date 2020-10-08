<template>
  <main :class="styles.container" id="about">

  <h1 :class="styles.header"><u>Projects</u></h1>

  <!-- <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" /> -->
  <div :class="styles.projHeader"><u>battleShipReact</u></div>
  <p :class="styles.projText">
    An online battleship clone. Play against your friends or the computer! Made with React, Redux, TypeScript, Express and Websockets. (Deployed / Git)
    </p>
  </main>
</template>

<script>
import styles from '../styles/About.module.css'
import Project from './Project.vue'

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
