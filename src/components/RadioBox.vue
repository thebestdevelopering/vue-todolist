<template>
  <p
    class="main__checkbox"
    :class="{
      main__checkbox_disabled: disabled,
      main__checkbox_checked: checked,
      main__checkbox_active: !disabled && !checked,
    }"
  >
    <img
      v-if="checked"
      class="main--task__check"
      src="../assets/images/Vector.svg"
      alt=""
    />
  </p>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
