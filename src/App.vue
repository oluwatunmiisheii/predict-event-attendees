<template>
  <app-header />
  <app-button @btnClicked="btnClicked()" />
  <router-view/>
</template>

<script>
import AppButton from "./components/button"
import AppHeader from "./components/header"
export default {
  components: {
    AppButton,
    AppHeader
  },
  setup() {
    function btnClicked() {
      console.log('button clicked')
    }
    return {btnClicked}
  }
  
}
</script>
<style lang="scss">
  @import "@/assets/scss/util/_typography.scss";
  @import "@/assets/scss/util/_spacing.scss";
  @import "@/assets/scss/_global.scss";
</style>
