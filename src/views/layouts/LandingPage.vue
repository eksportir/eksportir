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

<style lang="postcss">
.form-input {
  @apply rounded-lg
              ring-inset
              focus:outline-none
              focus:ring-2
              focus:ring-green-200
              focus:border-transparent
              bg-gray-100
              px-4
              py-2
              w-full
}

.submit-button {
  @apply px-6
            py-3
            text-green-900
            rounded-lg
            font-bold
            bg-green-400
            hover:bg-green-500 hover:shadow-md
}
</style>
