<template>
  <div  class="tix-mt__5">
    <!-- page header -->
    <app-page-header title="My Events," sub-title="">
      <template v-slot:header-right>
        <app-button btn-text="Create Event" />
      </template>
    </app-page-header> 
  </div>

  <div class="container">
    <div class="tix-mt__5 event-wrapper">
      <template v-for="event in events" :key="event.id">
        <event-card :event-details="event" />
      </template>
      
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import EventCard from "@/components/cards/event/index"
export default {
  components: {
    EventCard
  },
  setup() {
    const events = ref([
      {
        id: 1,
        title: 'Music Concert',
        image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "A concert is a live music performance in front of an audience. The performance may be by a single musician, sometimes then called a recital, or by a musical ensemble, such as an orchestra, choir, or band.",
        category: "online"
      },
      {
        id: 2,
        title: 'Yoga Lessons',
        image: "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "A set of specific exercises, called poses, combined with specific breathing techniques and meditation principles are the building blocks of a yoga class.",
        category: "online"
      },
      {
        id: 3,
        title: 'Art Exhibition',
        image: "https://images.pexels.com/photos/3597326/pexels-photo-3597326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description: "A set of specific exercises, called poses, combined with specific breathing techniques and meditation principles are the building blocks of a yoga class.",
        category: "online"
      }
    ]);
    return {events}
  }
}
</script>
<style lang="scss" scoped>
   .event-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
</style>