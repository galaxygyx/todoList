<template>
  <div class="todo-wrapper">
    <h2>todos</h2>
    <div class="todo-content">
      <el-input v-model="input" placeholder="try to input todo" @keyup.enter.native="handleEnter"></el-input>
      <el-checkbox-group v-model="checkList">
        <el-checkbox
          v-for="item in todoList"
          :key="item.id"
          :label="item.id"
          v-show="selectedStatus === 0 || (selectedStatus === 1 ? !item.status : item.status)"
          @change="handleCheckedChange($event, item)"
        >
          <span v-show="!item.isEdit">{{item.value}}</span>
          <el-input
            :ref="item.value"
            type="text"
            class="edit-input"
            v-model="item.value"
            v-show="item.isEdit"
            @blur="handleEdit(item, false)"
            @keyup.enter.native="handleEdit(item, false)"
          />
          <span>
            <i class="icon el-icon-edit" @click.prevent="handleEdit(item, true)"></i>
            <i class="icon el-icon-close" @click.prevent="hadleDelete(item.id)"></i>
          </span>
        </el-checkbox>
      </el-checkbox-group>
      <div class="info-list" v-if="todoList.length > 0">
        <span>{{todoList.length - checkList.length}} items left</span>
        <span>
          <el-radio-group v-model="selectedStatus" size="mini">
            <el-radio :label="0" border>All</el-radio>
            <el-radio :label="1" border>Actived</el-radio>
            <el-radio :label="2" border>Completed</el-radio>
          </el-radio-group>
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
      input: '', // 输入框的值
      todoList: [], // 所有状态的列表
      checkList: [], // 选中项列表
      selectedStatus: 0, // 0: 全部  1: 激活  2: 已完成
      id: 0
    }
  },
  methods: {
    // 回车增加事件
    handleEnter () {
      console.log('handleEnter')
      if (!this.input) return
      this.todoList.push({ value: this.input, status: false, isEdit: false, id: this.id++ })
      if (this.selectedStatus === 2) {
        this.selectedStatus = 0
      }
      this.input = ''
    },
    // 删除事件
    hadleDelete (id) {
      console.log(id, 'hadleDelete')
      this.todoList = this.todoList.filter(item => item.id !== id)
      this.checkList = this.checkList.filter(item => item !== id)
    },
    // 监听选中改变事件
    handleCheckedChange (value, item) {
      console.log(value, 'handleCheckedChange')
      item.status = value
    },
    // 清空已完成
    handleClear () {
      console.log('handleClear')
      this.todoList = this.todoList.filter(item => item.status !== true)
      this.checkList = []
    },
    // 编辑事件
    handleEdit (item, flag) {
      console.log(this.todoList, this.checkList, 'handleEdit')
      item.isEdit = flag
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
      min-height: 200px;
    }
    .el-checkbox {
      border-bottom: 1px dashed #e1e1e1;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px 0;
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
      align-items: center;
      width: 100%;
    }
    .edit-input {
      input {
        height: 22px;
        line-height: 22px;
      }
    }
    .icon {
      color: #333 !important;
      margin-left: 12px;
      &:hover {
        color: #409eff !important;
      }
    }
    .info-list {
      border-top: 1px solid #e1e1e1;
      display: flex;
      justify-content: space-between;
      line-height: 40px;
      .el-radio-group {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6px;
        .el-radio {
          margin-right: 0;
        }
      }
      span {
        flex: 1;
        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
        }
      }
    }
  }
}
</style>