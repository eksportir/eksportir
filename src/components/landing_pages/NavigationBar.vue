<template>
  <nav class="fixed top-0 py-2 w-full z-20">
    <div
      class="
        flex
        w-full
        py-4
        items-center
        justify-between
        px-4
        sm:px-6
        md:px-10
        lg:px-48
      "
    >
      <div class="flex-none">
        <a href="">
          <img class="w-24" src="./../../assets/logo.png" alt="" />
        </a>
      </div>
      <div class="flex-initial">
        <ul
          class="
            flex
            cursor-pointer
            space-x-6
            text-lg
            font-semibold
            items-center
          "
        >
          <li class="text-gray-600 hover:text-gray-900">
            <router-link to="/" exact>
              Home
            </router-link>
          </li>
          <li class="text-gray-600 hover:text-gray-900">
            <router-link to="/product">
              Produk
            </router-link>
          </li>
          <li class="text-gray-600 hover:text-gray-900">
            <router-link to="/about">
              Tentang Kami
            </router-link>
          </li>
          <li class="text-gray-600 hover:text-gray-900">
            <router-link to="/contact">
              Kontak
            </router-link>
          </li>
          <li class="relative">
            <button
              @click.prevent="menuResponse"
              class="
                flex px-3 py-1
                bg-green-400
                items-center
                font-semibold
                rounded-full
                text-gray-100
                hover:bg-green-500
                focus:ring-4 focus:ring-green-300
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span class="px-1">Bahasa</span>
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div v-if="dropdown" class="absolute mt-2 shadow-md">
              <div class="bg-white">
                <a
                  @click="lang"
                  class="
                    py-2
                    px-4
                    block
                    text-sm
                    font-medium
                    hover:text-gray-900
                    focus:text-gray-900
                    hover:bg-gray-100
                    focus:bg-gray-200 focus:outline-none
                  "
                  href="#"
                  >Bahasa Indonesia</a
                >
                <a
                  @click="lang"
                  class="
                    py-2
                    px-4
                    block
                    text-sm
                    font-medium
                    hover:bg-gray-200
                    focus:bg-gray-400 focus:outline-none focus:shadow-outline
                  "
                  href="#"
                  >English</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      show: false,
      dropdown: false,
    };
  },
  methods: {
    menuResponse() {
      this.dropdown = !this.dropdown;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdown = false;
      }
    },
    lang: function () {
      console.log("Indonesiea");
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  unmounted() {
    document.removeEventListener("click", this.close);
  },
};
</script>

<style lang="postcss">
.nav-link {
  @apply text-gray-400 text-lg hover:text-blue-300 cursor-pointer select-none;
}

.active {
  @apply border-b-2 border-green-500 text-gray-900;
}
</style>
