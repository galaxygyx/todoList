<template>
  <div class="todo-wrapper">
    <h2>todos</h2>
    <div class="todo-content">
      <el-input v-model="input" placeholder="try todo" @keyup.enter.native="handleEnter"></el-input>
      <el-checkbox-group v-model="checkList" @change="handleCheckedChange">
        <el-checkbox v-for="item in todoList" :key="item" :label="item">
          <span>{{item}}</span>
          <i class="el-icon-close" @click.prevent="hadleDelete(item)"></i>
        </el-checkbox>
      </el-checkbox-group>
      <div class="info-list">
        <span>{{todoList.length - checkList.length}} items left</span>
        <span>
          <el-button type="text" @click="handleAll">All</el-button>
          <el-button type="text" @click="handleActived">Actived</el-button>
          <el-button type="text" @click="handleCompleted">Completed</el-button>
        </span>
        <span>
          <el-button type="text" @click="handleClear" v-if="checkList.length > 0">clear completed</el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      todoList: [],
      checkList: []
    }
  },
  methods: {
    handleEnter () {
      console.log('handleEnter')
      this.todoList.push(this.input)
      this.input = ''
    },
    hadleDelete (val) {
      console.log(val, 'hadleDelete')
      this.todoList = this.todoList.filter(item => item !== val)

    },
    handleCheckedChange (value) {
      console.log(value, 'handleCheckedChange')
    },
    handleAll () {
      console.log('handleAll')
    },
    handleActived () {
      console.log('handleActived')
    },
    handleCompleted () {
      console.log('handleCompleted')
    },
    handleClear () {
      console.log('handleClear')
    }
  }
}
</script>

<style lang="scss">
.todo-wrapper {
  padding: 50px;
  h2 {
    color: #333;
    font-size: 60px;
    font-weight: bold;
  }
  .todo-content {
    margin: 50px auto;
    width: 500px;
    .el-checkbox-group {
      margin: 50px 0;
      text-align: left;
    }
    .el-checkbox {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin: 20px 0;
      &.is-checked {
        .el-checkbox__label {
          span {
            text-decoration: line-through;
          }
        }
      }
    }
    .el-checkbox__input {
      .el-checkbox__inner {
        height: 20px;
        width: 20px;
        &::after {
          left: 7px;
          top: 4px;
        }
      }
    }
    .el-checkbox__label {
      display: flex;
      font-size: 20px;
      justify-content: space-between;
      // padding: 0 20px;
      width: 100%;
    }
    .el-icon-close {
      color: #333 !important;
      &:hover {
        color: #409eff !important;
      }
    }
    .info-list {
      display: flex;
      justify-content: space-between;
      line-height: 40px;
    }
  }
}
</style>