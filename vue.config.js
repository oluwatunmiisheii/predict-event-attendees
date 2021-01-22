module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/util/_typography.scss";
          @import "@/assets/scss/util/_variables.scss";
          @import "@/assets/scss/mixins/_responsiveness.scss";
          @import "@/assets/scss/mixins/_flex.scss";
        `
      }
    }
  }
};