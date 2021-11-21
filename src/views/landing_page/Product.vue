<template>
  <!-- Hero page -->
  <section class="relative mt-20">
    <div
      class="bg-local bg-blend-darken py-28 text-center text-white"
      style="
        background-image: url(https://source.unsplash.com/TD4DBagg2wE/1600x700);
      "
    >
      <p class="text-5xl font-bold leading-normal">Explore</p>
      <p class="text-5xl font-bold">Our Products</p>
    </div>
  </section>

  <section class="px-4 py-20 md:py-32 md:px-10 lg:px-36 space-y-6">
    <div class="w-1/3 pb-4">
      <p class="text-lg font-medium text-gray-600">Let's check</p>
      <p class="text-4xl font-black text-green-900">All PRODUCT</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="flex flex-col h-full max-w-lg mx-auto bg-white shadow hover:shadow-xl cursor-pointer duration-700 rounded-lg">
        <img
          class="rounded-lg rounded-b-none"
          src="https://source.unsplash.com/BXF8PUmBt9E/1920x1280"
          alt="thumbnail"
          loading="lazy"
        />
        <div class="p-4 space-y-2">
          <h1 class="text-2xl font-bold text-green-900">Biji Kopi Liberika</h1>
          <p class="font-normal leading-5 tracking-wide">
            Tailwind CSS v2.1 introduces a new just-in-time compiler for
            Tailwind CSS that generates your styles on-demand...
          </p>
          <button
            class="
              flex
              px-3
              py-1
              bg-green-400
              items-center
              font-semibold
              rounded-full
              text-gray-100
              hover:bg-green-500
              focus:ring-4 focus:ring-green-300
            "
          >
            Selengkapnya
          </button>
        </div>
      </div>

      <div class="flex flex-col h-full max-w-lg mx-auto bg-white shadow hover:shadow-xl cursor-pointer duration-700 rounded-lg">
        <img
          class="rounded-lg rounded-b-none"
          src="https://source.unsplash.com/6D71rfz7j1E/1920x1280"
          alt="thumbnail"
          loading="lazy"
        />
        <div class="p-4 space-y-2">
          <h1 class="text-2xl font-bold text-green-900">Stem Charcoal</h1>
          <p class="font-normal leading-5 tracking-wide">
            Tailwind CSS v2.1 introduces a new just-in-time compiler for
            Tailwind CSS that generates your styles on-demand...
          </p>
          <button
            class="
              flex
              px-3
              py-1
              bg-green-400
              items-center
              font-semibold
              rounded-full
              text-gray-100
              hover:bg-green-500
              focus:ring-4 focus:ring-green-300
            "
          >
            Selengkapnya
          </button>
        </div>
      </div>

      <div class="flex flex-col h-full max-w-lg mx-auto bg-white shadow hover:shadow-xl cursor-pointer duration-700 rounded-lg">
        <img
          class="rounded-lg rounded-b-none"
          src="https://source.unsplash.com/8I0SAYz0PIs/1920x1280"
          alt="thumbnail"
          loading="lazy"
        />
        <div class="px-4 py-5 space-y-2">
          <h1 class="text-2xl font-bold text-green-900">Karet</h1>
          <p class="font-normal leading-5 tracking-wide">
            Tailwind CSS v2.1 introduces a new just-in-time compiler for
            Tailwind CSS that generates your styles on-demand...
          </p>
          <button
            class="
              flex
              px-3
              py-1
              bg-green-400
              items-center
              font-semibold
              rounded-full
              text-gray-100
              hover:bg-green-500
              focus:ring-4 focus:ring-green-300
            "
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
  components: {},
};
</script>
