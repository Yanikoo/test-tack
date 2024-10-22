<template>
<main class="header">
    <h1>Списк заявок</h1>
    <form class="table-requests">
        <button class="table__btn">СОЗДАТЬ</button>
        <div class="table__box-input">
            <input type="text" placeholder="Поиск (№ заявки, название)">
            <img src="images/Poisk.jpg" alt="трубка" />
        </div>
            <div class="table__line"></div>
        <div class="table__box-input">
            <input type="text" placeholder="ДОМ">
            <img src="images/strel.jpg" alt="кнопка расскрыть" />
        </div>
        <div class="table__line"></div>
    </form>
    <table class="table">
        <tr class="table__items">
            <th>№</th>
            <img src="images/Hint.jpg" alt="#" class="table__img">
            <th>Создана</th>
            <img src="images/Arrow.jpg" alt="#" class="table__img">
            <th>Адрес</th>
            <th>Заявитель</th>
            <th>Описание</th>
            <th>Срок</th>
            <th>Статус</th>
            <img src="images/Hint.jpg" alt="#" class="table__img">
        </tr>
        <tr class="table__items">Блок</tr>
            <td></td>
    </table>
</main>
  </template>
  
  <script>
  export default {
    name: 'TableRequests',
  };
  </script>
  
  <style lang="sass" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 1280px;
  height: auto;
  opacity: 1;
}

h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #000;
}

.table-requests {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.table__btn {
  width: 598px;
  height: 56px;
  border-radius: 4px;
  background: rgba(80, 176, 83, 1);
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  margin-left: auto;  // Чтобы кнопка располагалась справа
  opacity: 1;
  cursor: pointer;
}

.table__box-input {
  display: flex;
  align-items: center;
  width: 598px;
  height: 56px;
  margin-top: 16px;  // Отступ между кнопкой и полем ввода
}

input {
  width: calc(100% - 32px);  // Убираем ширину иконки
  height: 40px;
  padding: 0 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

img {
  width: 24px;
  height: 40px;
  margin-left: 8px;
  opacity: 1;
}

.table__line {
  width: 100%;
  height: 1px;
  background: #ccc;
  margin-top: 8px;  
}

// Стили для таблицы
table {
  width: 100%;
  border-collapse: collapse;
}

.table__items {
  th, td {
    border: none;
    padding: 8px;
    text-align: left;
  }
}

  </style>