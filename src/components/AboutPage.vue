<template>
    <div class="wrapper">
    <form action="">
      <h1>Авторизация</h1>

      <div class="input-box">
        <img src="imges/telephone.svg" alt="трубка">
        <input type="text" placeholder="+7">
      </div>
      <div class="input-box">
        <img src="imges/password.svg" alt="замок">
        <input type="password" placeholder="Пароль">
        <img src="imges/eye.svg" alt="показать пароль">
      </div>

      <button type="submit" class="btn">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style lang="scss" scoped>
.input-box {
  background-color: red;
}
</style>
