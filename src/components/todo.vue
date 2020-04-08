<template>
  <div class="todo-wrapper">
    <h2>todos</h2>
    <div class="todo-content">
      <el-input placeholder="try todo" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.todo-wrapper {
  padding: 50px;
  h2 {
    color: #333;
    font-size: 60px;
    font-weight: bold;
  }
  .todo-content{
    margin: 50px auto;
    width: 500px;
  }
}
</style>