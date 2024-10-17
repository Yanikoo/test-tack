const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true, // Для поддержки зависимостей, которые требуют транспиляции
  devServer: {
    port: 8080 // Порт сервера разработки
  }
});