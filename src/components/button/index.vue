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
        return ['tix-button__primary'].indexOf(value) !== -1
      }
    }
  },
  
  setup(props, context) {
    /**
     * function to emit a click event when the button component is clicked 
     */
    function btnClicked() {
      context.emit('btnClicked')
    }
    return {btnClicked};
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/scss/components/_button.scss";
</style>