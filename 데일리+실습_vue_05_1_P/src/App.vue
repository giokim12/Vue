<template>
  <div id="app">
    <b-container class="bv-example-row coffee-order">
      <h1>Coffee Order App</h1>
      <b-row class="outerbox">
        <b-col class="innerbox">
          <MenuList/>
          <MenuListItem/>
        </b-col>
        <!-- <b-col><SizeList/></b-col> -->
        <b-col class="innerbox">
          <SizeList/>
          <SizeListItem/>
        </b-col>
      </b-row>
    </b-container>
    
    
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import MenuListItem from '@/components/MenuListItem'
import SizeList from '@/components/SizeList'
import SizeListItem from '@/components/SizeListItem'

export default {
  name: 'App',
  components: { 
    MenuList,
    MenuListItem,
    SizeList,
    SizeListItem,
  },

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

.coffee-order {
  text-align: center;
  /* width: 1200px; */
} 

.outerbox {
  background-color: #F3F4F6;
  border-radius: 20px;
}

.innerbox {
  background-color: white;
  margin: 20px;
  border-radius: 20px;
}

</style>
