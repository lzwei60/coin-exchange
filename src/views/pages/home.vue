<template>
  <a-layout class="layout">
    <header class="layout-header">
      <div class="logo">coin</div>
      <a-menu v-model="selectedKeys" mode="horizontal" style="line-height: 4em;">
        <a-menu-item :key="item.menu_id" v-for="item in routeArr">{{item.description}}</a-menu-item>
      </a-menu>
    </header>
    <a-layout-content style="padding: 1em 2em;">
      <div class="layout-content">
        <a-tabs v-model="activeKey">
          <a-tab-pane key="1" tab="寄卖订单">
            <antd-table></antd-table>
          </a-tab-pane>
          <a-tab-pane key="2" tab="最新成交" force-render>
            
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center;padding: 2em 2em;">
      coin-echange
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { MenuType } from '@/constant/interface';
import { api } from '@/api/api';
import antdTable from "@/components/antdTable.vue";
import { useSessionStorage } from '@/utils/useLocalStorage'
export default defineComponent({
  components: { antdTable },
  setup(){
    useSessionStorage().setItem("test",'test')
    api.article.yiqin().then((res: any)=>{
      console.log(res)
    })
    // 定义菜单
    const routeArr = reactive<MenuType[]>(
      [{menu_id: "1",path: "/", name: "home", description: "首页"}]
    )
    return {
      selectedKeys: reactive<string[]>(['1']),
      activeKey: ref<string>('1'),
      routeArr
    };
  }
});
</script>
<style lang="scss" scoped>
.layout{
  .layout-header{
    height: 4em;
    padding: 0 5em 0 0;
    color: rgba(0, 0, 0, 0.85);
    line-height: 4em;
    background: #fff;
    .logo {
      float: left;
      width: 4em;
      height: 1.5em;
      //margin: 1.5em 0 1em 0;
      background: rgba(255, 255, 255, 0.3);
    }
  }
  .layout-content{
    width: 100%;
    height: calc(100vh - 11.6em);
    background: #fff; 
    padding: 1em;
  }
}

.ant-row-rtl .logo {
  float: right;
  margin: 1em 0 1em 1.7em;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
