<template>
  <!-- Hero page -->
  <section class="relative mt-20">
    <div
      class="bg-local bg-blend-darken py-28 text-center text-white"
      style="
        background-image: url(https://ik.imagekit.io/n0t5masg5jg/bg_coffee_v1uve0BSv.jfif?updatedAt=1637636563607);
      "
    >
      <p class="text-5xl font-bold leading-normal">{{ $t("menu[2]") }}</p>
    </div>
  </section>
  <section class="flex py-20 md:py-36 px-4 items-center md:px-10 lg:px-36">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="w-full md:w-2/5">
        <p class="text-lg text-green-600 font-medium">Know</p>
        <p class="text-4xl font-black">About Us</p>
        <p class="text-lg font-medium leading-relaxed pt-4">
          Hasil roasting ini menghasilkan biji berwarna hitam mengkilap dengan
          permukaan biji yang berminyak dan rasa sangat pahit ketika dikecap.
          Semakin gelap warna roasting, maka semakin sedikit tingkat keasaman
          yang kamu temukan pada minuman kopimu.
        </p>
      </div>
      <div class="w-full md:w-1/2 relative">
        <div
          class="w-full h-80 ring-4 ring-green-300 rounded-lg ring-inset"
        ></div>
        <div class="company-image">
          <img src="./../../assets/logo.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section
    class="
      py-36
      bg-gray-300
      opacity-80
      text-center
      px-6
      items-center
      md:px-10
      lg:px-36
    "
  >
    <p class="text-2xl font-black">Visi</p>
    <p class="text-2xl font-black">Misi</p>
  </section>
</template>

<script>
export default {
  name: "Product",
  components: {},
};
</script>

<style lang="postcss">
.company-image {
  @apply absolute
            flex
            items-center
            justify-center
            bg-gradient-to-b
            from-green-300
            to-green-600
            shadow-lg
            rounded-lg
            w-full
            h-80
            top-0
            md:top-6
            right-0
            md:right-6;
}
</style>
