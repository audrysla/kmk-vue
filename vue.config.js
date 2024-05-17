const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      css: {
        // 여기에서 전역 CSS 옵션을 설정할 수 있습니다.
      },
      sass: {
        // 전역 SASS/SCSS 파일 설정
        additionalData: `@import "@/assets/scss/base.scss";`
      }
    }
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kmk-vue/'
    : '/'
})
