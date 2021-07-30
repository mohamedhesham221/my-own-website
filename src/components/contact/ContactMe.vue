<template>
  <div class="container">
    <logo />
      <p class="lead go__home"><span class="text-decoration-underline" @click="goBck()">Home</span>
        &nbsp;/&nbsp;Contact</p>
        <h2 class="h1 contact__head">Feel free to contact me!</h2>
        <div class="contact__me">
          <p class="lead contact__header">Contact</p>
          <p class="lead my__info">
            I'm seeking out opportunities with companies | agencies | Individuals
            (freelancing projects) | internship.
          </p>
            <br>
            <p class="lead">Feel free to each out through any way below:</p>
            <ul class="contact__list list-unstyled">
              <li class="contact__list--item__copy"
                :class="{showCpyTxt:copy}">Copy to clipboard</li>
              <li class="contact__list--item" v-text="mobile" @click="copyToClipboard"></li>
              <li class="contact__list--item">
                <a class="text-decoration-none contact__list--item__link"
                  href="mailto:muhammedheshamm2@gmail.com"
                    target="_blank">@muhammadheshamm2</a>
              </li>
              <li class="contact__list--item">
                <a class="text-decoration-none contact__list--item__link" href="https://www.linkedin.com/in/mohamed-hesham-b7611618a/" target="_blank">Linkedin</a></li>
              <li class="contact__list--item">
                <a class="text-decoration-none contact__list--item__link" href="https://www.frontendmentor.io/profile/mohamedhesham221" target="_blank">Frontend Mentor</a></li>
              <li class="contact__list--item">
                <a class="text-decoration-none contact__list--item__link" href="https://github.com/mohamedhesham221" target="_blank">Github</a></li>
              <li class="contact__list--item">
                <a class="text-decoration-none contact__list--item__link"
                  href="https://doc-04-0g-docs.googleusercontent.com/docs/securesc/trivo2il2h66a3ut4jtnkiboqg5uohim/fegkc1mddi2a6ve1nvlh3qdnfpja8ep6/1627219875000/00845109894199796431/00845109894199796431/1OrAl0ofLsPhlawfxsZni5oMYyBralGCR?e=download&authuser=0" download="resume">Resume</a></li>
            </ul>
        </div>
        <footer-section />
  </div>
</template>
<script>
import Back from '@/mixins/BackMixin';
import Logo from '@/components/Logo.vue';
import FooterSection from '@/components/Footer.vue';

export default {
  name: 'contactMe',
  mixins: [Back],
  data() {
    return {
      mobile: '01025742930',
      copy: false,
    };
  },
  created() {
    setInterval(() => { this.copy = false; }, 4000);
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.mobile);
      this.copy = true;
    },
  },
  components: {
    Logo,
    FooterSection,
  },
};
</script>
