<template>
  <div class="menu-list">
    <h1>1. 음료를 고르세요.</h1>
    <b-card>
      <MenuListItem
        v-for="(menu, index) in menuList"
        :key="index"
        :menu="menu"
      />
    </b-card>
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem'

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList() {
        return this.$store.state.menuList
    },
  },
  methods: {
    selectMenu: function () {},
  },
}
</script>

<style>

</style>