<template>
  <main class="header">
    <h1>Списк заявок</h1>
    <div class="wrapper-items">
      <form class="table-requests">
        <button class="table__btn">СОЗДАТЬ</button>
        <div class="table__box-row">
          <div class="table__box-input">
            <div class="table__box-left">
              <input class="table__input-start" type="text" placeholder="Поиск (№ заявки, название)" />
              <div class="table__box-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask
                    id="mask0_4806_110"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_4806_110)">
                    <path
                      d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                      fill="#999999"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="table__box-left">
              <input class="table__input-end" type="text" placeholder="Дом" />
              <div class="table__box-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask
                    id="mask0_4806_140"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_4806_140)">
                    <path d="M12 15.3751L6 9.37509H7.4H12L16.6 9.37543L18 9.37509L12 15.3751Z" fill="#999999" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>

      <!-- <table class="table">
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
      </table>  -->
    </div>
  </main>
</template>

<script>
export default {
  name: 'TableRequests',
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  width: auto;
  height: auto;
  opacity: 1;
  background-color: rgba(238, 238, 238, 1);

  .table {
    &__box-left {
      width: 50%;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #ccc;
      justify-content: space-between;
    }

    &-requests {
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
    &__input-start {
      width: 100%;
    }

    &__box-icon {
      display: flex;
      align-items: right;
    }
    &__btn {
      width: 78px;
      height: 26px;
      border-radius: 2px;
      border: none;
      background: rgba(80, 176, 83, 1);
      color: rgba(255, 255, 255, 1);
      font-family: 'Roboto';
      font-size: 10px;
      font-weight: 400;
      line-height: 11.72px;
      margin-left: auto;
      cursor: pointer;
      margin-bottom: 32px;
    }

    &__btn:hover {
      background-color: rgba(106, 174, 94, 0.25);
      transition: 0.5s;
    }
  }
}

h1 {
  width: 1280px;
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

.table__box-input {
  display: flex;
  align-items: center;
  gap: 15px;
}

// .table__input-start {
//   display: flex;
//   align-items: center;
//   width: 200px;
//   }

// .table__box-left{
//   width: 50%;
//   display: flex;
//   align-items: center;
//   border-bottom: 2px solid #ccc;
// }

.table__box-right {
  width: 50%;
  display: flex;
  align-items: center;
}
</style>
