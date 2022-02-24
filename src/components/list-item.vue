<template>
  <div class="main--tasks__text">{{ note }}</div>
  <div class="main--tasks__actions">
    <div class="main--tasks__actions_block">
      <img class="main--task_edit" src="../assets/images/Edit.svg" alt="" />
    </div>
    <div class="main--tasks__actions_block">
      <img class="main--task_delete" src="../assets/images/Cart.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: String,
    checked: Boolean,
  },
};
</script>
