<template>
  <div class="text-discord-500 flex ">

    <div class="fixed top-0 left-16 bg-discord-800 h-screen w-60 m-0 flex flex-col items-center">

      <h1 class="text-3xl font-bold cursor-pointer" @click="mainSectionContent = 0;">{{server["serverData"]["name"]}}</h1>

      <h3 class="list-category">╔═ Events ════════════╗</h3>
      <ul>
        <li v-bind:key="event.id" v-for="event in events" class="list-item" @click="selectedEvent = event; mainSectionContent = 2;">
          {{event.name}}
        </li>
        <li class="list-divider"></li>
        <li class="list-item text-green-600" @click="mainSectionContent = 1">+ Event Erstellen</li>
      </ul>



      <h3 class="list-category">╠═ Active ════════════╣</h3>
      <ul>
        <li v-bind:key="command" v-for="command in activeCommands" class="list-item" @click="activateCommand(command, false)">
          {{command}}
        </li>
      </ul>



      <h3 class="list-category">╠═ Inactive ═══════════╣</h3>
      <ul>
        <li v-bind:key="command" v-for="command in inactiveCommands" class="list-item" @click="activateCommand(command, true)">
          {{command}}
        </li>
      </ul>

    </div>

    <div class="fixed top-0 left-[19rem] right-0 h-screen bg-discord-700 m-0">
<!--      <h3>Members: {{server["serverData"]["members"]}}</h3>-->
      <div v-if="mainSectionContent === 0"><h3>Members: {{server["serverData"]["members"]}}</h3></div>
      <CreateEvent v-else-if="mainSectionContent === 1" :serverId="serverData['id']" @clicked="createEvent"></CreateEvent>
      <EventDetails v-else-if="mainSectionContent === 2" :event="selectedEvent" @clicked="editEvent"></EventDetails>
    </div>


<!--    <div id="DivEventSection">-->
<!--    </div>-->
  </div>
</template>

<script>
import {apiGetCall, apiPostCall, apiDeleteCall} from "@/assets/apiFunctions.js";
import CreateEvent from "@/components/CreateEvent.vue";
import EventDetails from "@/components/EventDetails.vue";

export default {
  name: "ServerDetails",
  components: {EventDetails, CreateEvent},
  props: {
    serverData: null,
  },
  data() {
    return {
      mainSectionContent: 0,
      server: this.serverData,
      activeCommands: [],
      inactiveCommands: [],
      events: [],
      selectedEvent: null
    }
  },
  methods: {
    loadCommands(){
      apiGetCall(`server/${this.server["id"]}/commands`).then(data => {
        this.activeCommands = data["active"];
        this.inactiveCommands = data["inactive"];
      }).catch(console.error);
    },
    loadEvents(){
      apiGetCall(`server/${this.server["id"]}/events`).then(data => {
        this.events = data;
      }).catch(console.error);
    },
    createEvent(data){
      apiPostCall(`server/${this.server["id"]}/events`, data)
          .then(() => {
            this.mainSectionContent = 0;
            this.loadEvents();
          })
          .catch(console.error);
    },
    editEvent(data){
      if (data["delete"]){
        apiDeleteCall(`server/${this.server["id"]}/events`, data["eventId"])
            .then(() => {
              this.mainSectionContent = 0;
              this.selectedEvent = null;
              this.loadEvents();
            })
            .catch(console.error);
      }
    },
    activateCommand(commandName, activate){
      apiPostCall(`server/${this.server["id"]}/commands/activate/${commandName}`, {
        activate: activate
      }).then(() => this.loadCommands()).catch(console.error);
    }
  },
  created() {
    this.loadCommands();
    this.loadEvents();
  }
}
</script>

<style scoped>

</style>