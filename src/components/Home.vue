<template>
  
  <main class="container homecontainer" >
    <div class="head1">
    ALEX HLADUN
      </div>
      <div class="head2">
    FULL STACK DEVELOPER
    </div>
  </main>
</template>

<script>
import styles from '../styles/Home.module.css'
import { ref, onMounted, onUnmounted } from "vue";
import gsap from '../scrollTrigger'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      styles
    }
  },
  setup() {
    onMounted(() => {
    
  })
  }
}
</script>
