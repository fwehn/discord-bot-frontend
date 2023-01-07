<template>
  <div class="flex flex-col items-center w-100 gap-5">
      <h1 class="mt-5 text-3xl font-bold text-discord-500">Event erstellen</h1>

      <form id="FCreateEvent" class="flex flex-col gap-2 w-1/2 items-center">
<!--                <label for="FCreateEvent">Event erstellen:</label>-->
        <fieldset class="flex flex-col gap-2 w-full border-b-2 border-discord-600 pb-6">
          <label for="IName">Name:</label>
          <input id="IName" type="text" v-model="eventData.name" required>

          <label for="IDescription">Beschreibung:</label>
          <input id="IDescription" type="text" v-model="eventData.description" required>
        </fieldset>

        <fieldset class="flex flex-col gap-2 w-full border-b-2 border-discord-600 pb-6">
          <label for="SChannel">Channel</label>
          <select id="SChannel" v-model="eventData.channel">
            <option v-for="channel in channels" :value="channel.id">{{channel.name}}</option>
          </select>
        </fieldset>

        <fieldset class="w-full mt-3">
<!--          <legend class="text-xl">Time-Slot</legend>-->
          <div class="flex flex-row justify-evenly gap-10">
            <div class="flex flex-col w-1/2">
              <label for="IStartTime">Startzeit:</label>
              <input id="IStartTime" type="datetime-local" :min="eventData.scheduledStartTime" v-model="eventData.scheduledStartTime" required>
            </div>

            <div class="flex flex-col w-1/2">
              <label for="IEndTime">Endzeit:</label>
              <input id="IEndTime" type="datetime-local" :min="eventData.scheduledStartTime" v-model="eventData.scheduledEndTime">
            </div>
          </div>
        </fieldset>

        <button @click="emitCreateEvent" class="mainButton w-56 mt-3">Erstellen</button>
      </form>
  </div>
</template>

<script>

import {apiGetCall} from "@/assets/apiFunctions";

export default {
  name: "CreateEvent",
  props: {
    serverId: null
  },
  data() {
    return {
      modalOpen: false,
      channels: [],
      eventData: {
        name: "TestEvent",
        scheduledStartTime: new Date().toISOString().slice(0,-8),
        scheduledEndTime: "",
        privacyLevel: 2,
        entityType: 2,
        description: "some test description",
        channel: "899649170846130202"
      }
    }
  },
  methods: {
    emitCreateEvent(event){
      event.preventDefault();
      this.$emit('clicked', this.eventData);
    },
    loadChannels(){
      apiGetCall(`server/${this.serverId}/channels`)
          .then(channels => this.channels = channels.filter(channel => channel.type === 2))
          .catch(console.error);
    }
  },
  created() {
    this.loadChannels();
  }
}
</script>