<template>
  <div class="no-content__wrapper">
    <img src="../../assets/no-content.svg" alt="no content" :width="width">
    <h3 class="message">{{message}}</h3>
    <p class="message-info tix-mt__1 tix-mb__4">{{messageInfo}}</p>
    <app-button btn-text="Create Event" />
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: "no-content.svg"
    },
    message: {
      type: String
    },
    messageInfo: {
      type: String
    },
    width: {
      type: String,
      default: '250'
    }
  }
}
</script>
<style lang="scss" scoped>
  .no-content__wrapper {
    width: 100%;
    background: $white;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid #e0e6ed;
    @include flexed;
    flex-direction: column;
    border-radius: 6px;
    min-height: 350px;
    padding: 40px 20px;
    box-sizing: border-box;
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 8px;
    }
    .message {
      font-size: 21px;
      color: #222;
      font-weight: 500;
      line-height: 31px;
    }
    .message-info {
      color: #6b7280;
      font-size: 14px;
      font-weight: 400;
    }
  }
</style>