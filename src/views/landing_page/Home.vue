<template>
  <hero-section />
  <choose-us-section />
  <product-section />
  <get-touch-section />
</template>

<script>
import HeroSection from "./../../components/landing_pages/HeroSection.vue";
import ChooseUsSection from "./../../components/landing_pages/ChooseUsSection.vue";
import ProductSection from "./../../components/landing_pages/ProductSection.vue";
import GetTouchSection from "./../../components/landing_pages/GetTouchSection.vue";

export default {
  name: "Home",
  components: {
    ChooseUsSection,
    HeroSection,
    ProductSection,
    GetTouchSection,
  },
};
</script>
