<template>
  <div>{{msg}}</div>
  <a-button type="primary" @click="ChangeMsg">Primary Button</a-button>
  <a-table :dataSource="dataSource" :columns="columns" />
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  setup(){
    const msg = ref("这是子组件");
    const ChangeMsg = ()=>{
      msg.value = "1"
    }
    return {
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ],
      msg,
      ChangeMsg
    }
  }
})
</script>