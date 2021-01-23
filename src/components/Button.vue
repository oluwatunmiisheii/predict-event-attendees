<template>
  <button class="trix-button" :class="btnClass" @click="btnClicked">Hello</button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'trix-button__primary',
      required: false,
      validator: function(value) {
        // The value must match one of these strings
        return ['trix-button__primary'].indexOf(value) !== -1
      }
    }
  },
  setup(props, context) {
    function btnClicked() {
      context.emit('btnClicked')
    }
    return {btnClicked};
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/scss/components/_button.scss"
</style>