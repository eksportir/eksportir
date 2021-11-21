<template>
  <section class="py-24 px-4 md:px-6 lg:px-20 xl:px-36 bg-white">
    <p class="text-3xl md:text-4xl font-black text-left md:text-center">{{ $t("chooseSection.title") }}</p>
    <div class="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-16 md:space-y-0 mt-24">
      <choose-card
        :title="$t('chooseSection.cardOne.title')"
        :subtitle="$t('chooseSection.cardOne.subtitle')"
      >
        <document-icon />
      </choose-card>
      <choose-card
        :title="$t('chooseSection.cardTwo.title')"
        :subtitle="$t('chooseSection.cardTwo.subtitle')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </choose-card>
      <choose-card
        :title="$t('chooseSection.cardThree.title')"
        :subtitle="$t('chooseSection.cardThree.subtitle')"
      >
        <dollar-icon />
      </choose-card>
    </div>
  </section>
  <section class="bg-white pb-10 px-4 mx:px-6 md:px-10 lg:px-36">
    <div
      class="
        flex flex-col md:flex-row
        items-center
        justify-between
        w-full
        bg-gradient-to-b
        from-green-400
        to-green-600
        rounded-xl
        px-0 md:px-10
        py-8 space-y-4 md:space-y-0
      "
    >
      <div class="w-full md:w-1/3">
        <p class="text-3xl md:text-4xl  text-gray-100 font-bold text-center md:text-left">
          {{ $t("chooseSection.interestedSection") }}
        </p>
      </div>
      <button
        class="
          px-6
          py-3
          bg-white
          text-green-600
          rounded-full
          font-bold
          hover:bg-gray-100 hover:shadow-md
        "
      >
        {{ $t("contactButton") }}
      </button>
    </div>
  </section>
</template>

<script>
import ChooseCard from './ChooseCard.vue'
import DocumentIcon from "./../icons/DocumentIcon.vue"
import DollarIcon from "./../icons/DollarIcon.vue"
export default {
  name: 'ChooseUsSection',
  components: { ChooseCard, DocumentIcon, DollarIcon }
}
</script>