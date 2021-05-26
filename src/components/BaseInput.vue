<template>
  <div>
    <ElInput
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- <p>{{ text }}</p> -->
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  props: {
    modelValue: String,
    placehodler: String,
  },
  //   setup(props) {
  //     const text = ref(props.value);
  //     return {
  //       text,
  //     };
  //   },
};
</script>

<style lang="scss" scoped></style>
