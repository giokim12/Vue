<template>
  <div>
    <b-container>
      <b-button block variant="outline-success" class="m-1">
        <b-row 
          class='one-menu'
          :class="{ 'is-selected': menu.selected }"
        >
        
          <b-col><img style= "width: 50px; height: 50px" :src="menu.image"></b-col>
          <b-col>{{ menu.title }}</b-col>
          <b-col>{{ menu.price }}원</b-col>
        </b-row>
      </b-button>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
}
</script>

<style>
</style>