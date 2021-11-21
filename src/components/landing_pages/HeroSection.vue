<template>
  <section class="flex flex-col md:flex-row py-32 md:py-44 px-4 mc:px-6 items-center md:px-10 lg:px-36 bg-green-50 space-x-0 md:space-x-4">
    <div class="order-reverse flex-1 space-y-4 text-center md:text-left">
      <p class="text-4xl md:text-4xl xl:text-5xl font-black">{{ $t("heroSection.title") }}</p>
      <p class="w-full md:w-10/12 text-lg pb-4">{{ $t("heroSection.subtitle") }}</p>
      <div class="flex justify-center md:justify-start space-x-2">
        <button
          class="started-btn"
        >
          {{ $t("heroSection.getStartedButton") }}
        </button>
        <button
          class="explore-btn"
        >
          <span>{{ $t("heroSection.ExploreButton") }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="order flex-1 pb-8 md:pb-0">
      <div class="w-full text-center bg-white rounded-md shadow-lg">
        <img src="https://source.unsplash.com/BXF8PUmBt9E/1920x1280" class="object-cover w-full rounded-md" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style lang="postcss">
.started-btn {
  @apply px-4
            py-2
            bg-gradient-to-b
            from-green-400
            to-green-500
            hover:shadow-md
            font-semibold
            rounded-full
            hover:bg-green-500
            focus:ring-4 focus:ring-green-300
            text-white
}

.explore-btn {
  @apply flex
            items-center
            px-4
            py-2
            bg-green-50
            text-green-600
            hover:shadow-md
            font-semibold
            rounded-full
            hover:bg-green-400 hover:text-white
            ring-2 ring-green-400
            ring-inset;
}

.order {
  @apply order-1 md:order-2;
}

.order-reverse {
  @apply order-2 md:order-1;
}

</style>