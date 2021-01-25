<template>
  <div class="container">
    <div class="page-header__wrapper">
      <div class="page-header__wrapper-left">
        <h4 class="page-header__title">{{title}}</h4>
        <p class="page-header__sub-title tix-fs__15">{{subTitle}}</p>
      </div>
      <div class="page-header__wrapper-right">
        <slot name="header-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    subTitle: {
      type: String,
      default: '',
      required: false
    }
  },
  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
  .page-header__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  .page-header__title {
    font-size: 20px;
    color: #212229;
    font-weight: 500;
    margin-bottom: 5px;
    text-indent: -1px;
    line-height: 1;
    position: relative;
  }
  .page-header__sub-title {
    line-height: 1.4;
    display: block;
    color: #70737c;
    font-size: 15px;
  }
  .page-header__wrapper-right {
    text-align: right;
  }
</style>