<template>
  <main class="main">
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

      <table class="custom-table">
        <thead class="custom-table__items">
          <tr>
            <th>
              №
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask
                  id="mask0_4829_140"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_4829_140)">
                  <path
                    d="M7.33333 12V5.86668L4.93333 8.26668L4 7.33334L8 3.33334L12 7.33334L11.0667 8.26668L8.66667 5.86668V12H7.33333Z"
                    fill="#CCCCCC"
                  />
                </g>
              </svg>
            </th>
            <th>
              Создана
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask
                  id="mask0_4829_586"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_4829_586)">
                  <path
                    d="M7.33333 12V5.86668L4.93333 8.26668L4 7.33334L8 3.33334L12 7.33334L11.0667 8.26668L8.66667 5.86668V12H7.33333Z"
                    fill="#333333"
                  />
                </g>
              </svg>
            </th>
            <th>Адрес</th>
            <th>Заявитель</th>
            <th>Описание</th>
            <th>Срок</th>
            <th>
              Статус
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask
                  id="mask0_4829_140"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_4829_140)">
                  <path
                    d="M7.33333 12V5.86668L4.93333 8.26668L4 7.33334L8 3.33334L12 7.33334L11.0667 8.26668L8.66667 5.86668V12H7.33333Z"
                    fill="#CCCCCC"
                  />
                </g>
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button class="custom-table__btn-number" aria-label="390">390</button>
            </td>
            <td>01/01/2023</td>
            <td>ул. Примерная, 1</td>
            <td>Забавкин А.П.</td>
            <td>Подкрасить царапины на стенах в гостиной.</td>
            <td>24.04.2024 10:00</td>
            <td>Новая</td>
          </tr>
        </tbody>
      </table>

      <nav class="navigation">
        <div class="navigation__select">
          <select v-model="selectedRecords" @change="onChangeRecords">
            <option v-for="option in recordOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          <button class="navigation__expand-button" @click="toggleList" aria-label="Развернуть список">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6.37512L0 0.375122H1.4H6L10.6 0.375464L12 0.375122L6 6.37512Z" fill="#999999" />
            </svg>
          </button>
        </div>
        <div class="navigation__record-list" v-if="isListVisible">
          <ul>
            <li v-for="record in records" :key="record.id">{{ record.name }}</li>
          </ul>
        </div>

        <!-- <nav class="pagination">
          <button class="pagination__button" @click="prevPage" :disabled="currentPage === 1"></button>

          <span class="pagination__pages">
            <button
              v-for="page in totalPages"
              :key="page"
              class="pagination__item"
              :class="{ active: page === currentPage }"
              @click="setPage(page)"
            >
              {{ page }}
            </button>
          </span>

          <button class="pagination__button" @click="nextPage" :disabled="currentPage === totalPages"></button>
        </nav> -->
      </nav>
    </div>
  </main>
</template>

<script>
export default {
  name: 'TableRequests',
}
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
  width: auto;
  height: auto;
  background-color: rgba(238, 238, 238, 1);

  .wrapper-items {
    width: auto;
    margin-top: 20px;
    top: 27px;
    left: 15px;
    padding: 10px 20px 10px 20px;
    gap: 32px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
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
  .table {
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
    &__box-input {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    &__box-left {
      width: 50%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      justify-content: space-between;
    }
    &__input-start,
    &__input-end {
      width: 100%;
      margin-bottom: 10px;
    }
    &__box-icon {
      display: flex;
      align-items: right;
      margin-bottom: 10px;
    }
  }
  .custom-table {
    width: 100%;
    margin-top: 32px;
    &__items {
      width: 100%;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      text-align: left;
      color: rgba(80, 176, 83, 1);
    }
    th,
    td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ccc;
    }
    tr:hover {
      background-color: rgba(80, 176, 83, 0.1);
    }
    &__btn-number {
      width: 56px;
      height: 28px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      color: rgba(255, 255, 255, 1);
      background: rgba(80, 176, 83, 1);
    }
    &__btn-number:hover {
      background-color: rgba(106, 174, 94, 0.25);
      transition: 0.5s;
    }
  }
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    &__select {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    &__select select {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    &__button {
      margin: 0 5px;
    }
    &____pages {
      display: flex;
      align-items: center;
    }
    &__item {
      width: 32px;
      height: 32px;
      padding: 10px 16px;
      gap: 4px;
      border-radius: 50px 0 0 0;
      background: transparent;
      border: none;
      cursor: pointer;
      opacity: 0.6;
      transition:
        0.3s,
        opacity 0.3s;
    }
  }
}
</style>
