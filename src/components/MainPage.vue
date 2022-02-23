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
        <ListItem />
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
  components: {
    ListItem,
    RadioBox,
  },
};
</script>
