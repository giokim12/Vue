<template>
  <div class="home">
    <h1>Home</h1>
    <h2>첫 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
    <h2>두 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style>
  .box {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
  .global {
    display: flex;
    justify-content: center;
  }
</style>