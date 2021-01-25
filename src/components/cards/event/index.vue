<template>
  <div class="event-card__wrapper">
    <div class="event-card">
      
      <div class="event-card__image">
        <img :src="eventDetails.image" alt="">
      </div>

      <div class="event-card__text-container">
        <div class="event-card__heading">
          <h2>
            {{eventDetails.title}}
          </h2>
        </div>
        <div class="event-card__static-content">
          <p class="event-card__description">{{eventDetails.description}}</p>
          <div class="tix-mt__auto">
            <!-- <a class=""> -->
              <router-link :to='{name: "EventAttendees"}' class="event-card__mail-link-text-link pointer text-primary">
                View attendees
              </router-link>
            <!-- </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eventDetails: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.event-card__wrapper {
  padding-bottom: 30px;
  height: 100%;
  position: relative;
  .event-card {
    border-radius: .25rem;
    background-color: #fff;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid #e0e6ed;
    transition: box-shadow 300ms ease;
    height: auto;
    min-height: 100%;
    position: relative;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .event-card__image {
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .event-card__text-container {
      background-color: #fff;
      transition: transform .3s ease;
      width: 100%;
      display: flex;
      flex-direction: column;
      flex: 1 auto;
      .event-card__heading {
          margin-top: 0;
          padding: 2rem 2rem 0 2rem;
        h2 {
          // padding-right: 2rem;
          position: relative;
          width: 100%;
          text-align: left;
          margin-bottom: 1rem;
          color: #261f44;
          font-size: 20px;
          line-height: 1.3rem;
        }
      }
      .event-card__static-content {
        position: relative;
        padding: 0 2rem 2rem 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 1 auto;
        .event-card__description {
          font-weight: 500;
          line-height: 1.6;
          color: #6f6985;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          text-overflow: ellipsis;
          text-decoration: none;
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>