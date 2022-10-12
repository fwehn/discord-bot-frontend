<template>
  <div>
    <button @click="returnToHome">Back</button>
    <h1>{{server["serverData"]["name"]}}</h1>
    <h3>Members: {{server["serverData"]["members"]}}</h3>

    <h2>Commands</h2>
    <div id="commandSection">

      <!--<t-button/>-->


      <div>
        <h3>Active</h3>
        <ul>
          <li v-bind:key="command" v-for="command in activeCommands">
            <t-button @click="activateCommand(command, false)">{{command}}</t-button>
          </li>
        </ul>
      </div>

      <div>
        <h3>Inactive</h3>
        <ul>
          <li v-bind:key="command" v-for="command in inactiveCommands">
            <button @click="activateCommand(command, true)">{{command}}</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {apiGetCall, apiPostCall} from "@/apiFunctions";

export default {
  name: "ServerDetails",
  props: {
    serverData: null,
  },
  data() {
    return {
      server: this.serverData,
      activeCommands: {},
      inactiveCommands: {}
    }
  },
  methods: {
    returnToHome(){
      this.$emit('clicked', null);
    },
    loadCommands(){
      apiGetCall(`server/${this.server["id"]}/commands`).then(data => {
        console.log(data)
        this.activeCommands = data["active"];
        this.inactiveCommands = data["inactive"];
      }).catch(console.error);
    },
    activateCommand(commandName, activate){
      console.log(commandName)
      apiPostCall(`server/${this.server["id"]}/commands/activate/${commandName}`, {
        activate: activate
      }).then(() => this.loadCommands()).catch(console.error);
    }
  },
  created() {
    this.loadCommands();
  }
}
</script>

<style scoped>

div {
  display: flex;
  flex-direction: column;
}

button {
  width: 50px;
}

#commandSection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 200px;
}

ul {
  list-style: none;
  padding: 0;
}

</style>