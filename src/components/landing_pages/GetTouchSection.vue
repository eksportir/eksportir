<template>
  <section class="py-20 px-6 md:px-10 lg:px-48 space-y-20">
    <p class="text-4xl font-black text-center">Get in Touch</p>
    <div class="flex items-start justify-between">
      <div class="w-1/3 space-y-2">
        <p class="text-2xl font-bold">Have an inquiry?</p>
        <p class="text-lg font-medium leading-snug">
          Get in touch and ask something. Or visit our social media below
        </p>
        <div class="flex w-full gap-2">
          <div class="w-14 bg-white rounded-full hover:shadow-md p-4">
            <img src="./../../assets/icons8-facebook-f-500.png" class="" alt="" />
          </div>

          <div class="w-14 bg-white rounded-full hover:shadow-md p-4">
            <img src="./../../assets/instagram.png" class="" alt="" />
          </div>
          <div class="w-14 bg-white rounded-full hover:shadow-md p-4">
            <img src="./../../assets/whatsapp.png" class="" alt="" />
          </div>
        </div>
      </div>
      <div class="bg-white w-1/2 p-10 rounded-lg shadow-md space-y-2">
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
        <div class="w-full text-right">
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
  </section>
</template>