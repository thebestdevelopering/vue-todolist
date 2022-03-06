<template>
  <div class="main--tasks">
    <radio-box @click="$emit('checkboxClick')" :checked="checked" />
    <div
      class="main--tasks__text"
      :class="{ 'main--tasks__text_lined': checked }"
    >
      {{ note }}
    </div>
    <div class="main--tasks__actions">
      <div class="main--tasks__actions_block">
        <img class="main--task_edit" src="../assets/images/Edit.svg" alt="" />
      </div>
      <div class="main--tasks__actions_block" @click="clearOne()">
        <img class="main--task_delete" src="../assets/images/Cart.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import RadioBox from './RadioBox.vue';

export default {
  components: {
    RadioBox,
  },
  props: {
    note: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    clearOne() {
      this.$emit('clearOne');
    },
  },
};
</script>
