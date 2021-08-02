<template>
  <div class="container">
    <logo />
      <p class="lead go__home"><span class="text-decoration-underline" @click="goBck()">Home</span>
        &nbsp;/&nbsp;Works</p>
        <h2 class="h1 works__head">Projects</h2>
        <div class="works__filter">
          <ul class="works__filter--list list-unstyled d-flex justify-content-between
            align-items-center">
            <li class="works__filter--list__item" :class="{isActive: activeEl == 1}"
              @click="allFilter">All</li>
            <li class="works__filter--list__item" :class="{isActive: activeEl == 2}"
              @click="spaFilter">SPA</li>
            <li class="works__filter--list__item" :class="{isActive: activeEl == 3}"
              @click="pwaFilter">PWA</li>
            <li class="works__filter--list__item" :class="{isActive: activeEl == 4}"
              @click="landingFilter">Landing pages</li>
            <li class="works__filter--list__item" :class="{isActive: activeEl == 5}"
              @click="webFilter">websites</li>
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
  </div>
</template>
<script>
import Back from '@/mixins/BackMixin';
import { BIconGithub } from 'bootstrap-vue';
import Logo from '@/components/Logo.vue';
import MyProjects from '../../assets/projects.json';

export default {
  name: 'MyWorks',
  mixins: [Back],
  data() {
    return {
      projects: [],
      activeEl: 0,
    };
  },
  components: {
    BIconGithub,
    Logo,
  },
  created() {
    this.addProjects();
  },
  methods: {
    addProjects() {
      this.projects = MyProjects;
    },
    allFilter() {
      this.addActiveClass(1);
      this.addProjects();
    },
    spaFilter() {
      this.addActiveClass(2);
      this.addProjects();
      const spaFilterd = this.projects.filter((project) => project.category.match('spa'));
      this.projects = spaFilterd;
    },
    pwaFilter() {
      this.addActiveClass(3);
      this.addProjects();
      const pwaFilterd = this.projects.filter((project) => project.category.match('pwa'));
      this.projects = pwaFilterd;
    },
    landingFilter() {
      this.addActiveClass(4);
      this.addProjects();
      const landingFilterd = this.projects.filter((project) => project.category.match('landing'));
      this.projects = landingFilterd;
    },
    webFilter() {
      this.addActiveClass(5);
      this.addProjects();
      const webFilterd = this.projects.filter((project) => project.category.match('web'));
      this.projects = webFilterd;
    },
    addActiveClass(el) {
      this.activeEl = el;
    },
  },
};
</script>
