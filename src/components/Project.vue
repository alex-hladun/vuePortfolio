<template>
  <!-- <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" /> -->
  <div :class="styles.projHeader"><u>{{title}}</u></div>
  <p :class="styles.projText">
    <span v-html="description"></span></p>
</template>

<script>
import styles from '../styles/About.module.css'

export default {
  name: 'Project',
  props: {
    title: String,
    description: String
  },
  data() {
    return {
      styles
    }
  }
}
</script>
