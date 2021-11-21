<template>
  <div class="w-full md:w-1/3">
    <div class="card-wrapper transform transition duration-500 hover:scale-105 hover:shadow-lg">
      <div
        class="
          bg-gradient-to-b
          from-green-300
          to-green-500
          w-min
          p-4
          shadow-lg
          rounded-3xl
          absolute
          -mt-28
          text-white
        "
      >
        <slot></slot>
      </div>
      <p class="text-3xl font-bold text-green-800">{{ title }}</p>
      <p class="text-2xl font-light">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseCard",
  props: {
    icon: String,
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="postcss">
.card-wrapper {
  @apply bg-gray-50
        rounded-3xl
        group-hover:shadow-lg
        border
        px-10
        py-20
        space-y-2;
}
</style>
