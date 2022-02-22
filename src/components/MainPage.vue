<template>
  <div class="container">
    <div class="todolist">
      <div class="header">
        <p class="header__text_title">Список задач</p>
      </div>
      <div class="main">
        <div class="main--tasks">
          <p class="main__checkbox main__checkbox_disabled"></p>
          <input
            class="main--tasks_text"
            type="text"
            placeholder="Введите текст задачи..."
          />
          <div class="main--tasks_add">
            <img src="../assets/images/Plus.svg" alt="" />
          </div>
        </div>

        <div class="main--tasks">
          <p class="main__checkbox main__checkbox_active"></p>
          <p class="main--tasks__text">Изучить ReactJS</p>
          <div class="main--tasks__actions">
            <div class="main--tasks__actions_block">
              <img
                class="main--task_edit"
                src="../assets/images/Edit.svg"
                alt=""
              />
            </div>
            <div class="main--tasks__actions_block">
              <img
                class="main--task_delete"
                src="../assets/images/Cart.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="main--tasks">
          <Radio checked />
          <!-- <p class="main__checkbox checked">
            <img
              class="main--task__check"
              src="../assets/images/Vector.svg"
              alt=""
            />
          </p> -->
          <p class="main--tasks__text">Создать TODO</p>
          <div class="main--tasks__actions">
            <div class="main--tasks__actions_block">
              <img
                class="main--task_edit"
                src="../assets/images/Edit.svg"
                alt=""
              />
            </div>
            <div class="main--tasks__actions_block">
              <img
                class="main--task_delete"
                src="../assets/images/Cart.svg"
                alt=""
              />
            </div>
          </div>
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
import Radio from './radio-box.vue';

export default {
  components: {
    Radio,
  },
};
</script>
