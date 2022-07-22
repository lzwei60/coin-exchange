<template>
  <div class="bg-body">
    <div class="login-main">
      <div class="login-box">
        <div class="login-title">
          <p>登录coin-exchange</p>
          <p>请确认您正在访问：http://localhost:8282</p>
        </div>
        <div class="login-body">
            <a-input placeholder="用户名" />
            <a-input placeholder="登陆密码" />
            <div class="login-confim">
              <a-checkbox class="login-confim-left">是否确认选中(安全选项)</a-checkbox>
              <span class="login-confim-forgot">忘记密码?</span>
            </div>
            <div class="login-log">
              <a-button type="primary" loading>登录</a-button>
            </div>
        </div>
        <div class="login-footer">
          <span class="login-footer-tips">还不是coin-exchange用户？</span><span class="login-footer-register">免费注册</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(){
    
  }
});
</script>
<style lang="scss" scoped>
.bg-body{
  width: 100%;
  min-height: 100%;
  background: #f0f2f5 url('@/assets/login_bg.jpg') no-repeat 50%;
  background-size: cover;
  position: relative;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  .login-main{
    max-width: 25em;
    margin: 0 10px;
    padding: 20px 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 3px rgb(255 255 255 / 50%);
    flex: 1;
    .login-box{
      padding: 20px 10px;
      .login-title{
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-start;
        p{
          color: #666;
          vertical-align: text-bottom;
          display: inline-block;
          padding-right: 5px;
        }
        >p:first-child{
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 0.3em;
        }
      }
      .login-body{
        margin-bottom: 2em;
      }
    }
  }
}

</style>