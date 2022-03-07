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
          @update="editTask(task.note, $event)"
          @clearOne="deleteTask(index)"
          v-for="task in tasks"
          :key="task.note"
          :note="task.note"
          :checked="Boolean(task.checked)"
          @checkbox-click="task.checked = !task.checked"
        />
      </div>
      <div class="footer">
        <div class="footer--btn">
          <div
            class="footer--btn__actions mark unselectable"
            @click="checkAll()"
          >
            <img
              width="16"
              class="footer--btn__img"
              src="../assets/images/All.svg"
              alt=""
            />
            <p>
              {{ checkedAll ? 'Снять все' : 'Отметить все' }}
            </p>
          </div>
          <div
            class="footer--btn__actions delete unselectable"
            @click="clearAll()"
          >
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
      message: [],
      valueInput: '',
    };
  },
  components: {
    ListItem,
    RadioBox,
  },

  computed: {
    checkedAll() {
      return this.tasks.filter((item) => item.checked === false).length === 0;
    },
  },
  methods: {
    editTask(note, event) {
      let index = this.tasks.findIndex((item) => {
        return item.note === note;
      });
      console.log(event);

      this.tasks[index].note = event.value;
    },
    deleteTask(id) {
      this.tasks.splice(id, 1);
    },
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
      let checkedAll = this.checkedAll; // cache the value
      this.tasks.map((item) => {
        return (item.checked = !checkedAll);
      });
    },
  },
};
</script>
