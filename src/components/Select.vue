<template name="component-name">
  <div my-select>
    <!-- Selected : {{ value }} -->
    <!-- {{ options }} -->
    <select v-model="value">
      <option value="" selected>-- Select One --</option>
      <template v-if="optionsType === 'string'">
        <option :value="option" v-for="(option, i) in options" :key="i">
          {{ option }}
        </option>
      </template>
      <template v-else>
        <option
          :value="option"
          v-for="(option, i) in Object.keys(options)"
          :key="i"
        >
          {{ option }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: ["modelValue", "options"],
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    optionsType() {
      let ot = "array";
      if (this.options && typeof this.options[0] === "string") {
        ot = "string";
      }
      return ot;
    },
  },
};
</script>

<style></style>
