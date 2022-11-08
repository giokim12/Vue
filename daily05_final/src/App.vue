<template>
  <div id="app">
    <h1>Coffee Order App</h1>
      <b-row class="outerbox">
        <b-col class="innerbox">
          <MenuList/>
        </b-col>
        <b-col class="innerbox">
          <SizeList/>
        </b-col>
        <b-col class="innerbox">
          <OptionList/>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import SizeList from '@/components/SizeList'
import OptionList from './components/OptionList.vue'

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OptionList,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
</style>
