<template>
  <p class="main__checkbox" :class="{ checked: isActive }">
    <img class="main--task__check" src="../assets/images/Vector.svg" alt="" />
  </p>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    checked: Boolean,
  },
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
};
</script>
