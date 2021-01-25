<template>
  <div class="analytics">
    <div class="card-top__wrapper">
      <div class="card-top">
        <span class="icon-box">
         <slot></slot>
        </span>
        <div class="analytics-details">
          <p class="analytics-name">{{analytics}}</p>
          <h3 class="analytics-count">{{analyticsCount}}</h3>
        </div>
      </div>
    </div>
    <div class="cta">
      <span class="tix-fs__14 text-primary">View details</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    analytics: {
      type: String,
      required: true
    },
    analyticsCount: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .analytics {
    background: #fff;
    transition: .5s all ease-in-out;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid #e0e6ed;
    border-radius: .5rem;
    overflow: hidden;
    &:hover {
      border-color: $primary;
    }
    .card-top__wrapper {
      flex-grow: 1;
      padding: 20px 15px;
      font-size: 14px;
      .card-top {
        display: flex;
        align-items: flex-start;
        .icon-box {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          border-radius: 0.375rem;
          background: $primary;
          margin-right: 16px;
          svg {
            height: 24px;
            width: 24px;
            color: $white;
          }
        }
        .analytics-details {
          flex-grow: 1;
          .analytics-name {
            font-size: 0.875rem;
            line-height: 1.25rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: rgba(107, 114, 128, 1);
          }
          .analytics-count {
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 600;
            color: rgba(17, 24, 39, 1);
          }
        }
      }
    }
    .cta {
      display: flex;
      background: #F9FAFB;
      justify-content: space-between;
      align-items: center;
      min-height: 1px;
      padding: 10px 15px;
    }
  }
</style>