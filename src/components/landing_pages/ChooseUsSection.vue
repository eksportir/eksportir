<template>
  <section class="py-24 sm:px-6 md:px-10 lg:px-48 bg-white">
    <p class="text-4xl font-black text-center">Kenapa memilih kami?</p>
    <div class="flex space-x-6 mt-24">
      <choose-card
        title="Legal"
        subtitle="We are legal and certified from our government for business activity and export industries "
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </choose-card>
      <choose-card
        title="Best Price"
        subtitle="We offer competitive price and best value for your business. Contact for more information"
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
        title="Trusted"
        subtitle="You will get best product with good quality ever we have, and best values for any price"
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </choose-card>
    </div>
  </section>
  <section class="bg-white pb-10 px-6 md:px-10 lg:px-48">
    <div
      class="
        flex
        items-center
        justify-between
        w-full
        bg-gradient-to-b
        from-green-400
        to-green-600
        rounded-xl
        px-10
        py-8
      "
    >
      <div class="w-1/3">
        <p class="text-4xl text-gray-100 font-bold">
          Apakah tertarik untuk bekerja sama?
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
        Contact Now
      </button>
    </div>
  </section>
</template>

<script>
import ChooseCard from './ChooseCard.vue'

export default {
  name: 'ChooseUsSection',
  components: { ChooseCard }
}
</script>