<template>
  <section class="pt-20 pb-40 px-6 md:px-10 lg:px-36 space-y-4 md:space-y-20">
    <div class="w-1/3 border-b-2 border-green-700 pb-4">
      <p class="text-lg font-medium text-gray-600">{{ $t("productSection.smallTitle") }}</p>
      <p class="text-4xl font-black text-green-900">{{ $t("productSection.bigTitle") }}</p>
    </div>
    <div class="flex flex-col md:flex-row items-center pb-0 md:pb-24">
      <div class="hidden md:flex relative w-2/3 justify-center">
        <div class="absolute left-0 z-10">
          <img
            src="./../../assets/tree.jpg"
            class="w-2/3 xl:w-1/2 -mt-6 rounded-lg shadow-lg"
            alt=""
          />
        </div>
        <div class="absolute flex w-full justify-end z-10">
          <img
            src="./../../assets/green.jpg"
            class="w-2/3 xl:w-1/2 h-58 object-cover mt-64 mr-16 rounded-lg shadow-lg"
            alt=""
          />
        </div>
        <div class="bg-green-400 opacity-30 rounded-3xl w-3/5 h-96"></div>
      </div>
      <div class="flex-1">
        <p class="text-lg text-green-600 font-medium">{{ $t("productSection.productSmallTitle") }}</p>
        <p class="text-3xl font-black">{{ $t("productSection.productTitle") }}</p>
        <p class="text-lg font-medium pt-4">{{ $t("productSection.description") }}</p>
      </div>
      <div class="pt-10 pb-12">
        <img
        src="./../../assets/green.jpg"
        class="block md:hidden w-full object-cover rounded-lg shadow-lg"
        alt=""
      />
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="w-full md:w-1/2">
        <p class="text-lg text-green-600 font-medium">{{ $t("productSection.variantTitle") }}</p>
        <p class="text-3xl font-black">{{ $t("productSection.variant") }}</p>
        <p class="text-lg font-medium leading-relaxed pt-4">{{ $t("productSection.variantDescription") }}</p>
      </div>
      <div class="block md:hidden">
        <img
          src="./../../assets/green.jpg"
          class="rounded-lg shadow-md w-full"
          alt=""
        />
      </div>
      <div class="hidden md:block w-2/5 relative">
        <div class="w-full h-64 rounded-lg ring-4 ring-green-300 ring-inset"></div>
        <img
          src="./../../assets/green.jpg"
          class="absolute rounded-lg shadow-md w-full h-64 top-6 right-6"
          alt=""
        />
      </div>
    </div>
  </section>
  <section class="bg-green-600 py-10 px-4 md:px-6 lg:px-36 space-y-20">
    <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div class="w-full md:w-1/3">
        <p class="text-4xl text-center md:text-left text-gray-100 font-bold">{{ $t("productSection.getProductTitle") }}</p>
      </div>
      <button
        class="phil-white-button"
      >
        {{ $t("contactButton") }}
      </button>
    </div>
  </section>
</template>