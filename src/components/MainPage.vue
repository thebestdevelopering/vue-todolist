<template>
  <div class="container">
    <div class="todolist">
      <div class="header">
          <p class="header__text_title">Список задач</p>
      </div>
      <div class="main">
        <div class="main--tasks">
          <p class="main--tasks__checkbox"></p>
          <input
            class="main--tasks_text"
            type="text"
            placeholder="Введите текст задачи..."
          />
          <div class="main--tasks_add">
            <img src="../assets/images/Plus.svg" alt="">
          </div>
        </div>

        <div class="main--tasks">
          <p class="main--tasks__checkbox work"></p>
          <p class="main--tasks__text">Изучить ReactJS</p>
          <div class="main--tasks__actions">
            <div class="main--tasks__actions_block">
              <img
                class="main--task__img"
                src="../assets/images/Edit.svg"
                alt=""
              />
            </div>
            <div class="main--tasks__actions_block">
              <img
                class="main--task__img"
                src="../assets/images/Cart.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="main--tasks">
          <p class="main--tasks__checkbox active">
            <img
              class="main--task__check"
              src="../assets/images/Vector.svg"
              alt=""
            />
          </p>
          <p class="main--tasks__text">Создать TODO</p>
          <div class="main--tasks__actions">
            <div class="main--tasks__actions_block">
              <img
                class="main--task__img"
                src="../assets/images/Edit.svg"
                alt=""
              />
            </div>
            <div class="main--tasks__actions_block">
              <img
                class="main--task__img"
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
              class="footer--btn__img"
              src="../assets/images/All.svg"
              alt=""
            />
            <p>Отметить все</p>
          </div>
          <div class="footer--btn__actions delete">
            <img
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
