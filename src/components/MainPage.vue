<template>
  <div class="container">
    <div class="todolist">
      <div class="header">
        <p class="header__text_title">Список задач</p>
      </div>
      <div class="main">
        <div class="main--tasks">
          <RadioBox disabled />
          <input
            class="main--tasks_text"
            type="text"
            placeholder="Введите текст задачи..."
          />
          <div class="main--tasks_add">
            <img src="../assets/images/Plus.svg" alt="" />
          </div>
        </div>
        <div class="main--tasks" v-for="task in tasks" :key="task">
          <radio-box :checked="task.checked" />
          <list-item
            v-for="task in tasks"
            :key="task"
            :note="task.note"
            :checked="task.checked"
          />
        </div>
      </div>
      <div class="footer">
        <div class="footer--btn">
          <div class="footer--btn__actions mark">
            <img
              width="16"
              class="footer--btn__img"
              src="../assets/images/All.svg"
              alt=""
            />
            <p>Отметить все</p>
          </div>
          <div class="footer--btn__actions delete">
            <img
              width="11"
              class="footer--btn__img"
              src="../assets/images/Delete.svg"
              alt=""
            />
            <p>Очистить</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './list-item.vue';
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
    ListItem,
    RadioBox,
  },
};
</script>
