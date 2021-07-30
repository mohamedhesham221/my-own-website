<template>
  <div class="container">
    <logo />
      <p class="lead go__home"><span class="text-decoration-underline" @click="goBck()">Home</span>
        &nbsp;/&nbsp;Works</p>
        <h2 class="h1 works__head">Projects</h2>
        <div class="works__filter">
          <ul class="works__filter--list list-unstyled d-flex justify-content-between
            align-items-center">
            <li class="works__filter--list__item" @click="allFilter">All</li>
            <li class="works__filter--list__item" @click="spaFilter">SPA projects</li>
            <li class="works__filter--list__item" @click="pwaFilter">PWA projects</li>
            <li class="works__filter--list__item" @click="landingFilter">Landing pages</li>
            <li class="works__filter--list__item" @click="webFilter">websites</li>
          </ul>
        </div>
        <div class="projects">
          <div v-for="project in projects" :key="project.id" class="projects__item">
          <a :href="project.live" target="_blank" class="project__live text-decoration-none"
              v-text="project.name">
          </a>
          <a :href="project.github" target="_blank" class="project__github">
            <b-icon-github />
          </a>
          <p class="lead project__desc" v-text="project.desc"></p>
          </div>
        </div>
        <footer-section />
  </div>
</template>
<script>
import Back from '@/mixins/BackMixin';
import { BIconGithub } from 'bootstrap-vue';
import Logo from '@/components/Logo.vue';
import FooterSection from '@/components/Footer.vue';
import MyProjects from '../../assets/projects.json';

export default {
  name: 'MyWorks',
  mixins: [Back],
  data() {
    return {
      projects: [],
    };
  },
  components: {
    BIconGithub,
    Logo,
    FooterSection,
  },
  created() {
    this.addProjects();
  },
  methods: {
    addProjects() {
      this.projects = MyProjects;
    },
    allFilter() {
      this.addProjects();
    },
    spaFilter() {
      this.addProjects();
      const spaFilterd = this.projects.filter((project) => project.category.match('spa'));
      this.projects = spaFilterd;
    },
    pwaFilter() {
      this.addProjects();
      const pwaFilterd = this.projects.filter((project) => project.category.match('pwa'));
      this.projects = pwaFilterd;
    },
    landingFilter() {
      this.addProjects();
      const landingFilterd = this.projects.filter((project) => project.category.match('landing'));
      this.projects = landingFilterd;
    },
    webFilter() {
      this.addProjects();
      const webFilterd = this.projects.filter((project) => project.category.match('web'));
      this.projects = webFilterd;
    },
  },
};
</script>
