<template>
  <div>
    Event: {{event}}

    <button @click="emitEditEvent(event)">Edit/Delete</button>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
  props: {
    event: null
  },
  methods: {
    emitEditEvent() {
      this.$emit('clicked', {
        eventId: this.event.id,
        delete: true,
        options: {}
    });
    }
  }
}
</script>

<style scoped>

</style>