module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/util/_variables.scss";
          @import "@/assets/scss/mixins/_responsiveness.scss";
          @import "@/assets/scss/mixins/_flex.scss";
        `
      }
    }
  }
};