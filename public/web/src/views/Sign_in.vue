<template >
    <div class="login_page fillcontain">
      <transition name="form-fade">
        <section class="form_contianer" >
          <div class="manage_tip">
            <p style="font-weight: 500;color: #000;font-size: 30px;">空试商家管理系统</p>
            <p style="font-weight: 500;color: #5C5C5C;font-size: 21px;margin: 8px;position: relative;text-align: right;">
              <span class="straightLine"></span>
            二元科技
            </p>
          </div>
          <el-form  >
          <el-form-item >
            <el-input  placeholder="用户名"  v-model="loginForm.mobile"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input  type="password" placeholder="密码"  v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button style="width: 100%;font-size: 16px;" type="primary" @click="submitForm('loginForm')"  class="submit_btn">登陆</el-button>
            </el-form-item>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip"  @click="registerA">没有账号?，立即注册</p>
        </section>
      </transition>
    </div>
</template>
<script>
import { loginByUsername  } from '@/api/Sign_in'
export default {
  name: 'Sign_in',
  data () {
    return {
     loginForm: {
        mobile: '',
        password: ''
      },
    }
  },
  methods: {
        registerA () {
            this.$router.push('register')
        },
        async submitForm() {
        const res = await loginByUsername(this.loginForm)
        const data = await res.json();
        console.log("data",data)
        if (data.statusCode == 300) {
          const objString = JSON.stringify(data.object);
          if(data.nickName){
                $.cookie('username', data.object.nickName); // 存储 cookie 
          }else{
               $.cookie('username', data.object.mobile); // 存储 cookie 
          }
          $.cookie('userobj', objString); // 存储 cookie 
            
              this.$message({
                            type: 'success',
                            message: '登录成功'
                        });
              this.$router.push('/')
            }else{
              this.$message({
                            type: 'error',
                            message: data.message
                        });
            }
      },
    },
    mounted () {
                 $(function(){
                      $(document).keydown(function(event){
                      if(event.keyCode==13){
                      $(".submit_btn").click();
                      }
                      });
                  })
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login_page{
  background: url(../assets/bg1.jpg);
}
.manage_tip{
  font-size: 34px;
color: #fff;
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
}
.form_contianer{
    width: 320px;
height: 210px;
position: absolute;
top: 50%;
left: 50%;
margin-top: -105px;
margin-left: -160px;
padding: 25px;
border-radius: 5px;
text-align: center;
background-color: #fff;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
  }
.tip{
    font-size: 12px;
    color: red;
    cursor: pointer;
}
.form-fade-enter-active, .form-fade-leave-active {
      transition: all 1s;
}
.form-fade-enter, .form-fade-leave-active {
      transform: translate3d(0, -50px, 0);
      opacity: 0;
}
.straightLine{
border-top: 1px solid #4B4B4B;

width: 36px;

display: inline-block;

position: absolute;

right: 95px;

top: 15px;
}
</style>
