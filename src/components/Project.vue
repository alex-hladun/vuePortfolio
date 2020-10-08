<template>
  <!-- <img :class="styles.pic" alt="Alex Hladun" src="../assets/prof2.jpeg" /> -->
  <div :class="styles.projHeader"><u>{{title}}</u></div>
  <p :class="styles.projText">
    {{description}}
    </p>
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
      count: 0,
      styles
    }
  }
}
</script>
