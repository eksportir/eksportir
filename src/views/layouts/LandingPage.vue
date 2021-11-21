<template>
  <div class="bg-gray-200">
    <navigation-bar
      :class="{ 'bg-transpatent md:bg-white shadow-md': scrollIsActive > 1 }"
    />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import NavigationBar from "./../../components/landing_pages/NavigationBar.vue";
import TheFooter from "./../../components/commons_component/TheFooter.vue";

export default {
  name: "LandingPage",
  components: {
    NavigationBar,
    TheFooter,
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
