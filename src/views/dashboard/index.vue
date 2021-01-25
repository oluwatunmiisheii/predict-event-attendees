<template>
  <div class="tix-mt__5">

    <!-- page header -->
    <app-page-header title="Hi Oluwatunmise," sub-title="It's a great day to create a tix event">
      <template v-slot:header-right>
        <app-button btn-text="Create Event" />
      </template>
    </app-page-header>

    <!-- dashboard analytics -->
    <div class="container">
      <div class="tix-mt__5 dashboard-analytics">
        <dashboard-analytics analytics="Total Events" analyticsCount="10">
          <EventIcon />
        </dashboard-analytics>

        <dashboard-analytics analytics="Total Tickets Sold" analyticsCount="30"> 
          <EventIcon />
        </dashboard-analytics>

        <dashboard-analytics analytics="Total Amount" analyticsCount="8000">
          <money-icon />
        </dashboard-analytics>

        <dashboard-analytics analytics="Upcoming Events" analyticsCount="0">
          <upcoming-event-icon />
        </dashboard-analytics>
      </div>
    </div>

    <!-- upcoming event list -->
    <section class="tix-mt__5">
      <div class="container">
        <no-content message="No upcoming event" message-info="Click on the button below to create a new event" />
      </div>
    </section>
  </div>
</template>

<script>
import {computed, provide} from 'vue'
import DashboardAnalytics from "@/components/cards/analytics/dashboard"
import EventIcon from "@/components/vectors/Event"
import MoneyIcon from "@/components/vectors/Money"
import UpcomingEventIcon from "@/components/vectors/Calendar"
import NoContent from "@/components/shared/NoContent"
export default {
  components: {
    DashboardAnalytics,
    EventIcon,
    MoneyIcon,
    UpcomingEventIcon,
    NoContent
  },
  setup() {
    const greeting = computed(() => {
      let finalString = ""
      const hrs = new Date().getHours();
      if (hrs < 12) finalString =  "Good Morning";
      else if (hrs >= 12 && hrs <= 17) finalString = "Good Afternoon";
      else if (hrs >= 17 && hrs <= 24) finalString = "Good Evening";
      return finalString
    });
    provide('greeting', greeting)
    return {greeting}
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-analytics {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
  @media (max-width: 600) {
    .dashboard-analytics {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
