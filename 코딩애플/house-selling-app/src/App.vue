<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class='nav-bar'>
      <a>HOME</a>
      <a>PRODUCTS</a>
      <a>ABOUT</a>
    </div>
    <div class = "class-learn">
      <div>
        원룸샵
        <h4 class="red" style="color:blue" >XX 원룸</h4>
        <!-- data에 넣은 자료를 {{}}으로 불러올 수 있음 -->
        <!-- {{데이터바인딩}} -->
        <!-- vue의 실시간 자동 렌더링을 쓰기 위해 데이터바인딩을 함,,, -->
        <!-- 자주 안변하는 '만원' 이런건 데이터바인딩 XX -->
        <p>{{ price1 }} 만원</p>
      </div>
      <div>
        <h4 :style="스타일">XX 원룸</h4>
        <p>{{ price2 }} 만원</p>
      </div>
    </div>
    <div class='hmwk1'>
      숙제부분
      <h4>{{ products[0] }}</h4>
      <h4>{{ products[1] }}</h4>
      <h4>{{ products[2] }}</h4>
    </div>
    <div>
      숙제부분2
      <h4
        v-for: 'product in products'
        :key = 'product'
      >
      {{ product }}
      </h4>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  // 데이터 보관함부터 필요
  // 데이터는 object 자료로 저장해주기
  // { 자료이름: 자료 내용 }
  // 자주 변할거같으면 데이터에 넣자
  data() {
    return {
      price1 : 60,
      price2 : 80,
      // HTML 속성도 바인딩 가능
      // 근데 :속성 = "데이터이름"
      // : 써야됨 이게 문법임
      스타일: 'color:green',
      products: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.class-learn{ 
  background-color: beige;
}

.hmwk1 {
  background-color: aliceblue;
}

.nav-bar {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.nav-bar a {
  color: white;
  padding: 10px;
}
</style>
