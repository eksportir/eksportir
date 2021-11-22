<template>
  <section class="py-20 px-4 md:px-6 lg:px-36 space-y-10 md:space-y-20">
    <p class="text-4xl font-black text-center">
      {{ $t("getTouchSection.mainTitle") }}
    </p>
    <div
      class="
        flex flex-col
        md:flex-row
        items-start
        justify-between
        space-y-8
        md:space-y-0
      "
    >
      <div class="w-full md:w-1/3 space-y-2">
        <p class="text-2xl font-bold">{{ $t("getTouchSection.title") }}</p>
        <p class="text-lg font-medium leading-snug">
          {{ $t("getTouchSection.subtitle") }}
        </p>
        <div class="flex w-full gap-2">
          <div class="w-14 bg-white rounded-full hover:shadow-md p-4">
            <img
              src="./../../assets/icons8-facebook-f-500.png"
              class=""
              alt=""
            />
          </div>
          <div class="w-14 bg-white rounded-full hover:shadow-md p-4">
            <img src="./../../assets/instagram.png" class="" alt="" />
          </div>
          <div class="w-14 bg-white rounded-full hover:shadow-md p-4">
            <img src="./../../assets/whatsapp.png" class="" alt="" />
          </div>
        </div>
      </div>
      <div
        class="
          bg-white
          w-full
          md:w-3/5
          lg:w-1/2
          p-4
          md:p-6
          rounded-lg
          shadow-md
          space-y-2
        "
      >
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
        <div class="w-full text-right">
          <button class="submit-button">
            {{ $t("getTouchSection.submit") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
