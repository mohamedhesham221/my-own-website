<template>
  <div>
    <div id="nav" @click="changeState">
      <particles-bg type="cobweb" :bg="true" color="#fffdfd" :num=num  class="nav__canvas"/>
      <div class="container d-block d-lg-none" >
      <transition name="slide1" mode="out-in">
        <router-link to="/about" class="link color__white text-decoration-none"
          v-if="change">About</router-link>
      <p v-else class="lead color__white">Hello.</p>
      </transition>
      <transition name="slide2" mode="out-in">
        <router-link to="/works" class="link text-decoration-none color__red"
          v-if="change">Works</router-link >
      <p v-else class="lead color__red">I am</p>
      </transition>
      <transition name="slide3" mode="out-in">
        <router-link to="/contact" class="link text-decoration-none color__red"
          v-if="change">contact</router-link>
      <p v-else class="lead color__red">Mohamed</p>
      </transition>
      <p class="lead tap">Tap anywhere</p>
      </div>
      <div class="container d-none d-lg-block">
        <p class="lead about-router" @mouseover="about = true" @mouseout="about = false"
            :class="{translate:about}"><router-link :to="about ? '/about' : '#'"
            class="link color__white text-decoration-none">
          {{ about ? 'About' : 'Hello.' }}</router-link>
        </p>
        <p class="lead works-router" @mouseover="works = true" @mouseout="works = false"
            :class="{translate:works}"><router-link :to="works ? '/works' : '#'"
            class="link color__red text-decoration-none">
          {{ works ? 'Works' : 'I am' }}</router-link>
        </p>
        <p class="lead contact-router" @mouseover="contact = true" @mouseout="contact = false"
            :class="{translate:contact}"><router-link :to="contact ? '/contact' : '#'"
            class="link color__red text-decoration-none">
          {{ contact ? 'Contact' : 'Mohamed'  }}</router-link>
        </p>
      </div>

    </div>
    <router-view />
  </div>
</template>
<script>
import { ParticlesBg } from 'particles-bg-vue';

export default {
  name: 'Navbar',
  data() {
    return {
      change: false,
      about: false,
      works: false,
      contact: false,
      num: 25,
    };
  },
  created() {
    this.changeCanvasNum();
  },
  components: {
    ParticlesBg,
  },
  methods: {
    changeState() {
      this.change = !this.change;
    },
    changeCanvasNum() {
      if (window.innerWidth === 1024) {
        this.num = 50;
      } else if (window.innerWidth > 1024) {
        this.num = 100;
      }
    },
  },
};
</script>
