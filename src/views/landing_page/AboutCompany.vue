<template>
  <!-- Hero page -->
  <section class="relative mt-20">
    <div
      class="bg-local bg-blend-darken py-28 text-center text-white"
      style="
        background-image: url(https://source.unsplash.com/TD4DBagg2wE/1600x700);
      "
    >
      <p class="text-5xl font-bold leading-normal">About Us</p>
    </div>
  </section>
  <section class="flex py-36 px-6 items-center md:px-10 lg:px-48">
    <div class="flex items-center justify-between gap-6">
      <div class="w-2/5">
        <p class="text-lg text-green-600 font-medium">Ketahui</p>
        <p class="text-4xl font-black">Tentang Kami</p>
        <p class="text-lg font-medium leading-relaxed pt-4">
          Hasil roasting ini menghasilkan biji berwarna hitam mengkilap dengan
          permukaan biji yang berminyak dan rasa sangat pahit ketika dikecap.
          Semakin gelap warna roasting, maka semakin sedikit tingkat keasaman
          yang kamu temukan pada minuman kopimu.
        </p>
      </div>
      <div class="w-1/2 relative">
        <div class="w-full h-80 ring-4 ring-green-300 rounded-lg ring-inset"></div>
        <div class="absolute flex items-center justify-center bg-gradient-to-b
          from-green-300
          to-green-600 shadow-lg rounded-lg w-full h-80 top-6 right-6">
          <img
          src="./../../assets/logo.png"
          
          alt=""
        />
        </div>
      </div>
    </div>
  </section>
  <section class="py-36 bg-gray-300 opacity-80 text-center px-6 items-center md:px-10 lg:px-48 ">
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
