<template>
  <div class="container">
    <div class="todolist">
      <div class="header">
        <div class="header__text">
          <p class="header__text_title">Список задач</p>
        </div>
      </div>
      <div class="main">
        <div class="main--tasks">
          <p class="main--tasks__checkbox"></p>
          <input
            class="main--tasks_text"
            type="text"
            placeholder="Введите текст задачи"
          />
          <div class="main--tasks_add">
            <p class="main--tasks_plus">+</p>
          </div>
        </div>

        <div class="main--tasks">
          <p class="main--tasks__checkbox work"></p>
          <p class="main--tasks__text">Изучить ReactJS</p>
          <div class="main--tasks__actions">
            <div class="main--tasks__actions_block">
              <img class="main--task__img" src="../assets/Edit.svg" alt="" />
            </div>
            <div class="main--tasks__actions_block">
              <img class="main--task__img" src="../assets/Cart.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="main--tasks">
          <p class="main--tasks__checkbox active">
            <img class="main--task__check" src="../assets/Vector.svg" alt="" />
          </p>
          <p class="main--tasks__text">Создать TODO</p>
          <div class="main--tasks__actions">
            <div class="main--tasks__actions_block">
              <img class="main--task__img" src="../assets/Edit.svg" alt="" />
            </div>
            <div class="main--tasks__actions_block">
              <img class="main--task__img" src="../assets/Cart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer--btn">
          <div class="footer--btn__actions mark">
            <img class="footer--btn__img" src="../assets/All.svg" alt="" />
            <p>Отметить все</p>
          </div>
          <div class="footer--btn__actions delete">
            <img class="footer--btn__img" src="../assets/Delete.svg" alt="" />
            <p>Очистить</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.container {
  margin: auto;
  width: 530px;
  height: 500px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.01),
    0px 25px 40px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
}

.header {
  width: 100%;
  height: 63px;
  background: #db4c3f;
  border-radius: 6px 6px 0px 0px;
}

.header__text_title {
  text-align: left;
  padding: 19px 0px 18px 27px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
}
.main {
  height: 348px;
}

.main--tasks {
  display: flex;
  border-bottom: 1px solid #bfbfbf;
}
.main--tasks__checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid #b8b8b8;
  border-radius: 24px;
  margin-left: 27px;
}
.work {
  border: 2px solid #db4c3f;
}
.active {
  border: 2px solid #db4c3f;
  background: #db4c3f;
}
.main--tasks_text {
  width: calc(100% - 130px);
  margin-left: 14px;
  border: none;
}
.main--tasks__text {
  width: calc(100% - 130px);
  text-align: left;
  margin-left: 14px;
  border: none;
  font-family: Roboto;
  font-size: 18px;
  color: #323232;
}
.main--tasks_add {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 64px;
  background: #fbfbfb;
}
.main--tasks_plus {
  color: #c7c7c7;
  width: 18px;
  height: 18px;
}
.main--task__img {
  width: 20px;
  height: 20px;
  margin: 24px 24px 24px 0px;
}
.main--task__check {
  margin-top: 8px;
}
.main--tasks__actions {
  display: flex;
}
.main--tasks__actions_block {
  height: 64px;
}
.footer {
  width: 100%;
  height: 64px;
  border-top: 1px solid #f4f4f4;
  margin-bottom: 100px;
}
.footer--btn {
  display: flex;
  margin: 13px 0px;
}
.footer--btn__actions {
  height: 38px;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border-radius: 30px;
  margin-left: 18px;
  padding: 0px 10px;
}
.mark {
  width: 145px;
}
.delete {
  width: 115px;
}
.footer--btn__img {
  padding-right: 10px;
  width: 16px;
}
</style>
