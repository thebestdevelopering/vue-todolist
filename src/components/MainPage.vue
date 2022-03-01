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
            v-model="valueInput"
            @keypress.enter="addTask"
          />
          <button class="main--tasks_add" @click="addTask">
            <img src="../assets/images/Plus.svg" alt="" />
          </button>
        </div>

        <list-item
          v-for="task in tasks"
          :key="task.note"
          :note="task.note"
          :checked="Boolean(task.checked)"
        />
      </div>
      <div class="footer">
        <div class="footer--btn">
          <div class="footer--btn__actions mark" @click="checkAll()">
            <img
              width="16"
              class="footer--btn__img"
              src="../assets/images/All.svg"
              alt=""
            />
            <p>Отметить все</p>
          </div>
          <div class="footer--btn__actions delete" @click="clearAll()">
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
import ListItem from './ListItem.vue';
import RadioBox from './RadioBox.vue';

export default {
  data() {
    return {
      tasks: [
        { note: 'Изучить Vue', checked: true },
        { note: 'Проснуться в 7 утра', checked: false },
        { note: 'Сделать стрижку', checked: false },
        { note: 'Сделать прививку', checked: true },
      ],
      message: '',
      valueInput: '',
    };
  },
  components: {
    ListItem,
    RadioBox,
  },
  methods: {
    addTask() {
      if (this.valueInput === '') {
        return;
      }
      this.tasks.push({
        note: this.valueInput,
      });
      this.valueInput = '';
    },
    clearAll() {
      this.tasks.splice(0);
    },

    checkAll() {
      let checkedAll =
        this.tasks.filter((item) => {
          return item.checked === false;
        }).length === 0;

      let content = this.tasks.map((item) => {
        return (item.checked = !checkedAll);
      });
      console.log(content);
    },
  },
};
</script>
