<template>
  <main class="wrapper-items">
    <div class="wrapper">
      <form class="form"  action="">
        <div class="fotm__items">
          <h1 class="form__title">Авторизация</h1>
        </div>
        <h2 class="form__text">Логин или Телефон</h2>
        <div class="form__input-box">
          <img class="form__icon" src="images/telephone.svg" alt="трубка" />
          <input  type="text" placeholder="+7" />
          <div class="form__line"></div>
        </div>
        <div class="input-box">
          <img class="form__icon" src="images/password.svg" alt="замок" />
          <input  type="password" placeholder="Пароль" />
          <img class="form__icon-eye" src="images/eye.svg" alt="показать пароль" />
          <div class="form__line"></div>
        </div>

        <button type="submit" class="form__btn"><router-link to="/table-requests">Войти</router-link></button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "AuthorPage",
};

</script>

<style lang="sass" scoped >

.form {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  width: 100%;
  width: 340px;
  height: 309px;
  top: 223px;
  left: 454px;

 
}


.wrapper-items {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border: none;
  border-radius: 5px;
  background-color: #6d6363;
  background: {
    image: url('/public/images/fon.jpeg');
    size: cover;
    position: center;
  }
}

.wrapper {
  display: flex;
  justify-content: center;
  width: Fill (244px)px;
  height: Hug (18px)px;
  background-color: #FFFFFF;
  position: relative;
  border: none;
  border-radius: 5px;
}

.form__title {
  display: inline-block;
  justify-content: center;
  width: 308px;
  height: 56px;
  left: 16px;
  padding: 10px 0px 0px 0px;
  padding-top: -20px;
  gap: 10px;
  border-radius: 5px 5px 5px 5px;
  opacity: 9.0px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  background: rgba(68, 162, 72, 1);
  margin-top: -18px;   
  color: rgba(255, 255, 255, 1);
}

.form__text {
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-size: 12px;
  width: 244px;
  height: 18px;
  margin-top: 29px;
  align-items: left;
  color: rgba(68, 162, 72, 1);

}

.form__input-box, .input-box {
  width: 300px; 
  height: 120px; 
  position: relative; 
  gap: 8px;
}

.form__line {
  width: 100%;        
  height: 2px;       
  background-color: #ccc; 
  margin-top: 5px;
  
}


.form__icon {
  width: Fill (256px)px;
  height: Fill (56px)px;
  padding: 0px 12px 0px 0px;
  gap: 0px;
  border-radius: 4px 4px 0px 0px;
  border: 0px 0px 1px 0px;
  opacity: 0px;
}

.form__icon {
  left: 20px;
  } 

.form__icon-eye {
  position: absolute;
  top: 20px;
  right: 0px;
}


.form__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 36px;
  padding: 12px 16px;
  gap: 8px;
  border: none;
  border-radius: 4px;
  background-color: rgba(68, 162, 72, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 20px; 
  color: rgba(255, 255, 255, 1);
}

.form__items {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
