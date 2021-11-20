<template>
  <div class="bg-white pb-32">
    <section class="pt-36 pb-48 bg-green-100">
      <div class="w-full flex flex-col items-center justify-center">
        <p class="font-bold text-4xl">Get In Touch</p>
        <p>Contact us if your have any inquiry or anything about business</p>
      </div>
    </section>
    <div
      class="
        flex
        items-stretch
        sm:mx-6
        md:mx-10
        lg:mx-48
        -mt-28
        bg-white
        rounded-3xl
        shadow-lg
        p-2
      "
    >
      <div
        class="
          bg-gradient-to-t
          from-green-400
          to-green-600
          items-center
          rounded-3xl
          w-1/3
          p-6
          text-green-100
          space-y-1
        "
      >
        <p class="text-2xl font-medium">Contact Information</p>
        <p class="font-light">
          Jl. Utama No 12, Selatpanjang Timur, Kab. Kepulauan Meranti
        </p>
        <div class="flex items-center pt-4 space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
          <p class="font-semibold">Provinsi Riau, Indonesia</p>
        </div>
        <div class="flex items-center pt-4 space-x-3">
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p class="font-semibold">+828 0000 0000</p>
        </div>
        <div class="flex items-center pt-4 space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
          <p class="font-semibold">Balamat.email@gmail.com</p>
        </div>
      </div>
      <div class="w-2/3 px-14 py-8">
        <div class="w-full p-8 space-y-2">
          <div class="w-full space-y-1">
            <p>Nama</p>
            <input
              class="
                rounded-lg
                ring-inset
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
                focus:border-transparent
                bg-gray-100
                px-4
                py-2
                w-full
              "
            />
          </div>
          <div class="w-full space-y-1">
            <p>Email</p>
            <input
              class="
                rounded-lg
                ring-inset
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
                focus:border-transparent
                bg-gray-100
                px-4
                py-2
                w-full
              "
            />
          </div>
          <div class="w-full space-y-1">
            <p>Message</p>
            <textarea
              rows="4"
              class="
                rounded-lg
                ring-inset
                focus:outline-none
                focus:ring-2
                focus:ring-green-200
                focus:border-transparent
                bg-gray-100
                px-4
                py-2
                w-full
              "
            ></textarea>
          </div>
          <button
            class="
              px-6
              py-3
              text-white
              rounded-lg
              font-bold
              bg-green-400
              hover:bg-green-500 hover:shadow-md
            "
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GetTouchSection from "./../../components/landing_pages/GetTouchSection.vue";

export default {
  name: "Home",
  components: {
    // GetTouchSection,
  },
};
</script>
