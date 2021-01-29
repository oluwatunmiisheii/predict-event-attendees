<template>
  <div class="attendees-table__wrapper">
    <div class="table-head">
      <div class="user-name w-30">Name</div>
      <div class="user-email w-30">Email</div>
      <div class="user-gender w-10">Gender</div>
      <div class="user-nationality w-20">Nationality</div>
      <div class="user-nationality w-20">Action</div>
    </div>
    <template v-for="attendee in attendees" :key="attendee.id">
      <div class="table-body">
        <div class="user-name w-30">{{attendee.name}}</div>
        <div class="user-email w-30">{{attendee.email}}</div>
        <div class="user-gender w-10">{{attendee.gender}}</div>
         <div class="user-nationality w-20">{{attendee.nationality ? attendee.nationnality : ""}}</div>
        <div class="user-nationality w-20"><app-button btn-text="Guess Nationality" @btnClicked="getUserNationality(attendee.name, attendee.id)"></app-button></div>
      </div>
    </template>
  </div>
</template>

<script>
import apiClient from '@/services/api'
import {ref, onMounted} from 'vue'
export default {
  props: {
    attendees: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(props, {store}) {
    let userNationality = ref("")
    async function getUserNationality(name, userId) {
     const userNationalityResponse = await apiClient.get(`?name=${name}`)
     userNationality.value = userNationalityResponse.data.country[0].country_id
      let attendeeInfo = props.attendees.find(user => user.id === userId)
      attendeeInfo.nationality =  userNationality.value
      console.log(attendeeInfo, userNationality)
    }
     onMounted(() => { console.log(store)});
    return {userNationality, getUserNationality}
  }
}
</script>

<style lang="scss" scoped>
.attendees-table__wrapper {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  .table-head {
    background: #F9FAFB;
    border-bottom: 1px solid #e0e6ed;
  }
  .table-head, .table-body {
    padding: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
  }
  .table-body {
    border-bottom: 1px solid  #F9FAFB;
    background: #fff;
  }
}
</style>