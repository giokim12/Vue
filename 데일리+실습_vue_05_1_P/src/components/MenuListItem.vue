<template>
  <div>
    <div 
      class="individual-menu"
      @click="updateMenuStatus"
      :class="{ 'is-selected': menu.selected }"
    >
      <img 
        :src="menu.image"
      >
      <!-- {{ menu.image }} -->
      <div>{{ menu.title }}</div>
      <div>{{ menu.price }}원</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    updateMenuStatus() {
      this.$store.dispatch('updateMenuStatus', this.menu)
    }
  }
}
</script>

<style>
.individual-menu{
  border: 1px solid gray;
  margin: 10px;
  border-radius: 20px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.individual-menu > img {
  height: 50px;
  border-radius: 20px;
}

.is-selected {
  background-color: #43936C;
  color: white;
}
</style>