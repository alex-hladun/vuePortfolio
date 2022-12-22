<template>
  <main :class="styles.container">
    <h1 :class="styles.header"><u>Skills</u></h1>
    <div :class="styles.skillsHeader"><u>Languages</u></div>
    <p :class="styles.skillsText">
      JavaScript/TypeScript · Python · Java · Kotlin · HTML · CSS · Ruby
    </p>
    <div :class="styles.skillsHeader">
      <u
        ><a href="https://www.credly.com/users/alex-hladun/badges"
          >Cloud Certified</a
        ></u
      >
    </div>
    <p :class="styles.skillsText">
      AWS Devops Engineer Professional · AWS Machine Learning Specialy · AWS
      Certified Developer
    </p>
    <div :class="styles.skillsHeader"><u>Frameworks</u></div>
    <p :class="styles.skillsText">
      React/React Native · Vue · Next.js · Rxdb · Redux/MST · Socket.io · Docker
      · Expo · Express · Android Studio · Ruby on Rails · SASS
    </p>
    <div :class="styles.skillsHeader"><u>Systems / Databases</u></div>
    <p :class="styles.skillsText">PosgreSQL/mySQL · DynamoDB · Firebase</p>

    <div :class="styles.skillsHeader"><u>Testing Suites</u></div>
    <p :class="styles.skillsText">JEST · React Testing Library · Cypress</p>
  </main>
</template>

<script>
import styles from "../styles/About.module.css";

export default {
  name: "Skills",
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
