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
                  :href="href" download="resume">Resume</a></li>
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
      href: 'https://api.cloudinary.com/v1_1/etsh22194/image/download?api_key=749311196436358&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiMmYyY2I3ZTE0OWI2OGQwZjFiODExYzFhYjYzYzE4YmMiLCJ1c2VyX2V4dGVybmFsX2lkIjoiOGNkM2U3NjIyMzcyOTI1YTAzNWE0YmFiZTJlMGZmIiwidXNlcl9jdXN0b21faWQiOiJtb2htYWRldHNoODc0QGdtYWlsLmNvbSIsImNvbXBvbmVudCI6ImNvbnNvbGUifQ%3D%3D&public_id=mohamed_hesham_rnvdvl&signature=cb0585245e09cff1d7539541002ce3725e9a011d&target_filename=mohamed_hesham_rnvdvl.pdf&timestamp=1627665714&type=upload',
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
