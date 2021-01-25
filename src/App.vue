<template>
  <app-header />
  <div class="tix-mb__5 tix-pb__5">
    <router-view/>
  </div>
</template>

<script>
import AppHeader from "./components/header"
export default {
  components: {
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
