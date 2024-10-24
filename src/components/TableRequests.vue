<template>
 <main class="header">
    <h1>Списк заявок</h1>
    <div class="wrapper-items">

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
          <thead class="table__items">
              <th>№</th>
              <img src="images/Arrow.svg" alt="#" class="table__img">
              <th>Создана</th>
              <img src="images/Hint.svg" alt="#" class="table__img">
              <th>Адрес</th>
              <th>Заявитель</th>
              <th>Описание</th>
              <th>Срок</th>
              <th>Статус</th>
              <img src="images/Arrow.svg" alt="#" class="table__img">
          </thead>
          <tbody>
            <tr class="table__items">Блок</tr>
                <td></td>
          </tbody>
      </table>

    </div>
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
  padding: 20px;
  gap: 20px;
  width: 1280px;
  height: auto;
  opacity: 1;
  background-color: rgba(238, 238, 238, 1);
}

h1 {
  width: 1,280px;
  height: 73px;
  padding: 0px 32px 0px 32px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(69, 69, 69, 1);
}

.wrapper-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  margin-top: 20px; 
  top: 27px;
  left: 15px;
  padding: 10px 20px 10px 20px;
  gap: 32px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
}

.table-requests {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
}

.table__btn {
  // display: flex;
  width: 78px;
  height: 26px;
  border-radius: 4px;
  border: none;
  background: rgba(80, 176, 83, 1);
  color: rgba(255, 255, 255, 1);
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  margin-left: auto;  
  cursor: pointer;
  margin-left: auto;
}

 .table__btn:hover {
    background-color: rgba(106, 174, 94, 0.25);
    transition: 0.5s;
} 

.table__box-input {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 40px;
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
  display: flex;
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