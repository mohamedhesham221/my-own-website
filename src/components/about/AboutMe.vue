<template>
  <div class="container">
    <logo />
      <p class="lead go__home"><span class="text-decoration-underline" @click="goBck()">Home</span>
        &nbsp;/&nbsp;About</p>
    <h2 class="h1 about__head">I Build &amp; Design front end websites.</h2>
    <div class="about__me">
      <img class="img-fluid" src="../../assets/me.webp" alt="my picture">
      <p class="lead about__header">About Me</p>
      <p class="lead my__info">My name is Mohamed Hesham and I graduated from ASU, faculty of Arts,
        I have a career history that is not long but
        I gained good experience in various fields such as tourism,
        antiquities restoration, sales, and customer service,
        I am interested in web design and development and
          I found my passion as a front-End Developer.<br>
          My job involves doing what I love, developing new websites.
            I absolutely love learning new things and taking on new challenges.
            <br><br>
            my responsibility <br>
            -&nbsp;Developing new user-facing features <br>
            -&nbsp;Building reusable code and libraries for future use <br>
            -&nbsp;Ensuring the technical feasibility of UI/UX designs <br>
            -&nbsp;Optimizing application for maximum speed and scalability <br>
            -&nbsp;Assuring that all user input is validated before submitting to back-end <br>
            -&nbsp;Collaborating with other team members and stakeholders.
</p>
    </div>
    <div class="skills">
      <p class="lead skills__header">My Skills</p>
      <div class="skills__items d-flex d-md-block">
        <ul class="skills__list__left d-md-flex justify-content-evenly align-items-center">
      <li class="icon-html">HTML/5</li>
      <li class="icon-css">CSS/3</li>
      <li class="icon-js">JavaScript/ES6</li>
      <li class="icon-vue">Vue.JS</li>
      <li class="icon-bootstrap">Bootstrap</li>
      <li class="icon-json">JSON</li>
    </ul>
    <ul class="skills__list__right d-md-flex justify-content-between align-items-center">
      <li class="icon-jquery">jQuery</li>
      <li class="icon-scss">SCSS</li>
      <li class="icon-gulp">Gulp.JS</li>
      <li class="icon-ajax">Ajax</li>
      <li class="icon-git">Git</li>
      <li class="icon-github">Github</li>
    </ul>
      </div>
    </div>
    <footer-section />
  </div>
</template>
<script>
import Back from '@/mixins/BackMixin';
import Logo from '@/components/Logo.vue';
import FooterSection from '@/components/Footer.vue';

export default {
  name: 'AboutMe',
  mixins: [Back],
  components: {
    Logo,
    FooterSection,
  },
};
</script>
