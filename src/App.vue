<template>
  <app-button @btnClicked="btnClicked()" />
  <router-view/>
</template>

<script>
import AppButton from "./components/Button"
export default {
  components: {
    AppButton
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
  @import "@/assets/scss/_global.scss";
</style>
