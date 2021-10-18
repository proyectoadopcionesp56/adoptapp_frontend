<template>
  <input
    type="text"
    v-model="field"
    :placeholder="placeholder"
    class="no-appearance bg-gray-100 w-full leading-normal py-2 px-3 rounded border-b border-green-500 focus:outline-none"
  />
</template>

<script>
export default {
  props: ["type", "field", "placeholder"],
};
</script>

<style></style>
