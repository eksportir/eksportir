<template>
  <footer class="bg-green-600">
    <div class="px-4 md:px-10 lg:px-36 py-14">
      <div class="flex flex-col md:flex-row items-start justify-between gap-10">
        <div class="flex-1">
          <img src="./../../assets/logo.png" alt="" />
          <p>{{ $t("address") }}</p>
          <p>{{ $t("city") }}</p>
        </div>
        <div class="">
          <p class="text-xl font-semibold text-gray-900">Menu</p>
          <ul class="gap-4 text-lg font-light space-y-1 mt-2 text-gray-800 cursor-pointer">
            <li class="hover:text-white hover:underline">{{ $t("menu[0]") }}</li>
            <li class="hover:text-white hover:underline">{{ $t("menu[1]") }}</li>
            <li class="hover:text-white hover:underline">{{ $t("menu[2]") }}</li>
            <li class="hover:text-white hover:underline">{{ $t("menu[3]") }}</li>
          </ul>
        </div>
        <div class="">
          <p class="text-xl font-semibold text-gray-900">Social Media</p>
          <ul class="gap-4 text-lg font-light space-y-1 mt-2 text-gray-800 cursor-pointer">
            <li class="hover:text-white hover:underline">Facebook</li>
            <li class="hover:text-white hover:underline">Instagram</li>
            <li class="hover:text-white hover:underline">Whatsapp</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-green-700 py-2">
      <p class="text-center text-lg font-medium text-gray-100">
        S. Eksportir &copy; 2021 Allright Reserved
      </p>
    </div>
  </footer>
</template>