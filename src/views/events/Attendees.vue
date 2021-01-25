<template>
  <div  class="tix-mt__5">
    <!-- page header -->
    <app-page-header title="Music Concert," sub-title="List of event attendees">
      <template v-slot:header-right>
        <app-button btn-text="Create Event"></app-button>
      </template>
    </app-page-header> 
  </div>

  <div class="container">
    <div class="tix-mt__5 event-attendees__wrapper">
      <event-attendees :attendees="attendees" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import EventAttendees from "@/components/tables/eventAttendees"
import Attendees from '@/json/attendees.json'
export default {
  components: {
    EventAttendees
  },
  setup() {
    const attendees = ref(Attendees);
    return {attendees}
  }
}
</script>
<style lang="scss" scoped>
   .event-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  @media (max-width: 600) {
    .event-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>