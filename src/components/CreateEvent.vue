<template>
  <div class="flex flex-col items-center w-100 gap-5">
      <h1 class="mt-5 text-3xl font-bold text-discord-500">Event erstellen</h1>

      <form id="FCreateEvent" class="grid">
<!--                <label for="FCreateEvent">Event erstellen:</label>-->

        <label>
          Name:
          <input id="IName" type="text" v-model="eventData.name" required>
        </label>


        <label>
          Beschreibung:
          <input id="IDescription" type="text" v-model="eventData.description" required>
        </label>

        <label>
          Startzeit:
          <input id="IStartTime" type="datetime-local" v-model="eventData.scheduledStartTime" required>
        </label>

        <!--  <label for="IEndTime">Endzeit:</label>-->
        <!--  <input id="IEndTime" type="datetime-local">-->
        <button @click="emitCreateEvent">Erstellen</button>
      </form>
  </div>
</template>

<script>

export default {
  name: "CreateEvent",
  props: {
    serverId: null
  },
  data() {
    return {
      modalOpen: false,
      eventData: {
        name: "TestEvent",
        scheduledStartTime: new Date().toISOString().slice(0,-8),
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
    }
  }
}
</script>