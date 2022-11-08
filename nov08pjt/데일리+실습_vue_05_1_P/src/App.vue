<template>
  <div id="app">
    <b-container class="bv-example-row coffee-order">
      <h1>Coffee Order App</h1>
      <b-row class="outerbox">
        <b-col class="innerbox">
          <MenuList/>
        </b-col>
        <!-- <b-col><SizeList/></b-col> -->
        <b-col class="innerbox">
          <SizeList/>
        </b-col>
        <b-col class="innerbox">
          <OptionList/>

        </b-col>
      </b-row>
    </b-container>
    
    <b-container class="bv-example-row coffee-order">
        <OrderList/>
        <!-- <OrderListItem/>> -->
    </b-container>

  <div>
    
  </div>
    
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import SizeList from '@/components/SizeList'
import OrderList from '@/components/OrderList'
// import OrderListItem from '@/components/OrderListItem'


import OptionList from '@/components/OptionList'



export default {
    name: 'App',
    components: {
        MenuList,
        SizeList,
        OrderList,
        OptionList,
    },
    methods: {
      


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
