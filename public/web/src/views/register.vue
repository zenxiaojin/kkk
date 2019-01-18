<template >
    <div class="login_page fillcontain">
      <transition name="form-fade">
        <section class="form_contianerAS" >
          <div class="manage_tip">
            <p style="font-weight: 500;color: #000;font-size: 30px;">二元科技空试商家注册</p>
          </div>
          <el-form  >
          <el-form-item >
            <el-input  placeholder="请输入手机号码"  v-model="loginForm.mobile"></el-input>
          </el-form-item> 
          <el-form-item >
            <el-input  placeholder="请输入验证码"  v-model="loginForm.code">
              <el-button id="phonecode"  slot="append"  @click="codeA()">获取验证码</el-button>
            </el-input>
          </el-form-item> 
          
          <el-form-item >
            <el-input  type="password" placeholder="请输入密码"  v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input  type="password" placeholder="请确认密码"  v-model="passworda"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button style="width: 100%;font-size: 16px;" type="primary" @click="submitForm()"  class="submit_btn">注册</el-button>
            </el-form-item>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip"  @click="Sign_ins">有账号?，去登录</p>
        </section>
      </transition>
    </div>
</template>

<script>
import { usrRegister,usrRegiSend  } from '@/api/register'
export default {


  name: 'register',
  data () {
    return {
     loginForm: {
        mobile: '',
        code: '',
        password: ''
      },
      passworda: '',
      wait: 60,
       
    }
  },
  methods: {
        Sign_ins(){
             this.$router.push('Sign_in')
        },
        async codeA () {
          const myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
           if(this.loginForm.mobile=="" || this.loginForm.mobile==null){
            this.$message.error('请输入手机号码!!!');
              return false;
          }else if (!myreg.test(this.loginForm.mobile)){
             this.$message.error('手机号码不正确!!!');
              return false
          }
              const _this=this;
              if (_this.wait == 0) { 
               $('#phonecode span').text('获取验证码');
               this.wait = 60;
              } else { 
               this.wait--;
              $('#phonecode span').text(this.wait+'秒后在试');
                var timer=setTimeout(function(){
                  _this.codeA();
                 },1000)     
              }

              if(_this.wait == 59){
                const res = await usrRegiSend(this.loginForm.mobile)
                const data = await res.json();
              }
        },
        async submitForm() {
            const myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
　　        if (!myreg.test(this.loginForm.mobile)){
             this.$message.error('手机号码不正确!!!');
              return false
          }else if(this.loginForm.mobile==''){
               this.$message.error('手机号码不能为空!!!');
              return false
          }else if (this.loginForm.code == ''){
              this.$message.error('验证码不能为空!!!');
              return false
          }else if (this.loginForm.password == ''){
              this.$message.error('密码不能为空!!!');
              return false
          }else if (this.passworda !== this.loginForm.password){
              this.$message.error('两次密码不一致!!!');
              return false
          }
        const res = await usrRegister(this.loginForm)
        const data = await res.json();
        if (data.statusCode == 200) {
          const objString = JSON.stringify(data.object);
           $.cookie('username', 'asdasd'); // 存储 cookie 
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
.form_contianerAS{
    width: 320px;
height: 342px;
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
</style>
