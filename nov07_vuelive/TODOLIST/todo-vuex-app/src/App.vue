<template>
  <div id="app">
    <h1>TODO LIST</h1>
    <h2>ALL TODOS: {{ allTodosCount }}</h2>
    <h2>COMPLETED TODOS: {{ completedTodosCount }}</h2>
    <h2>INCOMPLETE TODOS: {{ incompleteTodosCount }}</h2>
    <TodoList/>
    <Todoform/>
    <!-- 데이터 다시 불러오는 버튼 만들기 -->
    <!-- <button @click='loadTodos'>할일 불러오기</button> -->
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import Todoform from '@/components/Todoform'

export default {
  name: 'App',
  components: {
    TodoList,
    Todoform,
  },
  methods: {
    loadTodos() {
        this.$store.dispatch('loadTodos')
    },
  },
  computed: {
    allTodosCount() {
        return this.$store.getters.allTodosCount
    },
    completedTodosCount() {
        return this.$store.getters.completedTodosCount
    },
    incompleteTodosCount() {
        return this.$store.getters.incompleteTodosCount
    }
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
</style>
