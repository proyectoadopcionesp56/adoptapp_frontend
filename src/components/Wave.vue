<template>
  <svg
    :class="`absolute ${top ? 'top-0' : 'bottom-0'} left-0 w-full ${height}`"
    viewBox="0 0 500 150"
    preserveAspectRatio="none"
  >
    <path :d="d" :class="`stroke-0 fill-current ${color}`"></path>
  </svg>
</template>

<script>
export default {
  props: ["color", "height", "top", "d"],
  created: function() {
    console.log(this.color);
    console.log(this.height);
  },
};
</script>

<style></style>
