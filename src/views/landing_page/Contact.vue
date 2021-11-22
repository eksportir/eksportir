<template>
  <div class="bg-white pb-32">
    <section class="pt-36 pb-48 bg-green-100">
      <div
        class="w-full px-4 space-y-2 flex flex-col items-center justify-center"
      >
        <p class="font-bold text-4xl">{{ $t("getTouchSection.mainTitle") }}</p>
        <p class="text-center">{{ $t("getTouchSection.mainTitleSub") }}</p>
      </div>
    </section>
    <div class="contact-card">
      <div class="contact-information-box hover:text-white">
        <p class="text-2xl font-medium">
          {{ $t("contactPage.contactInformation") }}
        </p>
        <p class="font-light">
          {{ $t("address") }}
        </p>
        <div class="flex items-center pt-4 space-x-3">
          <location-icon />
          <p class="font-semibold">{{ $t("contactPage.regency") }}</p>
        </div>
        <div class="flex items-center pt-4 space-x-3">
          <phone-icon />
          <p class="font-semibold">+828 0000 0000</p>
        </div>
        <div class="flex items-center pt-4 space-x-3">
          <mail-icon />
          <p class="font-semibold">Balamat.email@gmail.com</p>
        </div>
      </div>
      <div class="w-full md:w-2/3 px-2 md:px-20 py-10 md:py-10 space-y-2">
        <div class="w-full space-y-1">
          <p>{{ $t("getTouchSection.name") }}</p>
          <input class="form-input" />
        </div>
        <div class="w-full space-y-1">
          <p>{{ $t("getTouchSection.mail") }}</p>
          <input class="form-input" />
        </div>
        <div class="w-full space-y-1">
          <p>{{ $t("getTouchSection.message") }}</p>
          <textarea rows="4" class="form-input"></textarea>
        </div>
        <button class="submit-button">
          {{ $t("getTouchSection.submit") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LocationIcon from "./../../components/icons/LocationIcon.vue";
import PhoneIcon from "./../../components/icons/PhoneIcon.vue";
import MailIcon from "./../../components/icons/MailIcon.vue";

export default {
  name: "Home",
  components: {
    LocationIcon,
    PhoneIcon,
    MailIcon,
  },
};
</script>

<style lang="postcss">
.contact-card {
  @apply flex flex-col
        md:flex-row
        items-stretch
        mx-4
        md:mx-10
        lg:mx-48
        -mt-28
        bg-white
        rounded-3xl
        shadow-lg
        p-2;
}

.contact-information-box {
  @apply bg-gradient-to-t
          from-green-400
          to-green-600
          items-center
          rounded-3xl
          w-full
          md:w-1/3
          p-6
          text-green-100
          space-y-1;
}
</style>
