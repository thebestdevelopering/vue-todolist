<template>
  <div class="main--tasks" v-for="task in tasks" :key="task">
    <radio-box :checked="task.checked" />
    <p class="main--tasks__text">
      {{ task.note }}
    </p>
    <div class="main--tasks__actions">
      <div class="main--tasks__actions_block">
        <img class="main--task_edit" src="../assets/images/Edit.svg" alt="" />
      </div>
      <div class="main--tasks__actions_block">
        <img class="main--task_delete" src="../assets/images/Cart.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import RadioBox from './radio-box.vue';

export default {
  data() {
    return {
      tasks: [
        { note: 'Изучить Vue', checked: true },
        { note: 'Проснуться в 7 утра' },
        { note: 'Сделать стрижку' },
        { note: 'Сделать прививку', checked: true },
      ],
    };
  },
  components: {
    RadioBox,
  },
};
</script>
