<template>
  <div class="bg-gray-200">
    <navigation-bar :class="{ 'bg-white shadow-md': scrollIsActive > 50 }" />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "./../../components/landing_pages/NavigationBar.vue";

export default {
  name: "LandingPage",
  components: {
    NavigationBar,
  },
  data() {
    return {
      scrollIsActive: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollIsActive = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
