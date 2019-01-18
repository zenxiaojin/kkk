<template>
  <div class="CashWithdrawals">
    <h3 style="text-align: left;margin: 20px;">绑定支付宝</h3>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
         <el-form-item label="支付宝账号:" prop="alipayAccount" class='fl' style="width:100%;">
            <el-input  class='fl' v-model="ruleForm.alipayAccount"  style='width:188px;'></el-input>
          </el-form-item>
          <el-form-item label="持有人姓名:" prop="cnname" class='fl' style="width:100%;">
             <el-input  class='fl' v-model="ruleForm.cnname"  style='width:188px;'></el-input>
          </el-form-item>
          <div class="clears"></div> 
          <el-form-item label="绑定手机:" prop="bindingPhone" class='fl'>
           <el-input v-model="ruleForm.bindingPhone"  style='width:188px;'></el-input>

          </el-form-item>
            <div class="clears"></div> 
          <el-form-item label="收到的验证码:" prop="code" class='fl'>
                <el-input  placeholder="请输入验证码" v-model="ruleForm.code" >
                  <el-button id="phonecode"  slot="append"  @click="codeA()" :disabled='disableds'>获取验证码</el-button>
                </el-input>
          </el-form-item>
          <div class="clears"></div>
          <el-form-item class='fl'>
            <el-button type="primary" @click="submitForm('ruleForm')">绑定</el-button>
            <el-button @click="resetForm()">返回</el-button>
          </el-form-item>
</el-form>
  </div>
</template>

<script>
import { aliBindingAdd , aliBindingAddSend} from '@/api/Alipay'
export default {
  name: 'Alipay',
     data() {
      return {
        disableds:false,
        nus:true,
        wait:60,
       ruleForm: {
          alipayAccount: '',
          cnname:'',
          bindingPhone:'',
          code:''
        },
        rules: {
          alipayAccount: [
            { required: true, message: '请输入支付宝账号', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          cnname: [
            { required: true, message: '请输入持有人姓名', trigger: 'change' }
          ],
          bindingPhone: [
           { required: true, message: '绑定手机不能为空', trigger: 'change' }
          ],
          code: [
           { required: true, message: '收到的验证二维码不能为空', trigger: 'change' }
          ],
        }
      }
    },
     methods: {
//提现类型1=银行卡   2=支付宝  withdrawType
//银行卡账号或支付宝账号  withdrawAccount
//申请提现金额 withdrawApplyTotal
      async submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.nus=true;
          } else {
            this.nus=false;
            return;
          }
        });
        if(this.nus){
            const response = await aliBindingAdd(this.ruleForm)
             const responseJson = await response.json();
             // if(responseJson.statusCode == 200) {

             // }
        }
      },
      resetForm() {
         this.$router.push('CashWithdrawal')
      },
      async codeA(){
            if(this.wait!==60){
                this.disableds=true;
            }
            if(this.wait!==60  && this.wait==0){
                this.disableds=false;
            }
          const myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
           if(this.ruleForm.bindingPhone=="" || this.ruleForm.bindingPhone==null){
            this.$message.error('请输入手机号码!!!');
              return false;
          }else if (!myreg.test(this.ruleForm.bindingPhone)){
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
                const res = await aliBindingAddSend(this.ruleForm.bindingPhone)
                const data = await res.json();
                if(data.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
                }else if(data.statusCode==200){
                   this.$message({
                        message: data.message,
                        type: 'success'
                      });
                    const thisc=this;
                    setTimeout(function(){  
                       thisc.$router.push('/CashWithdrawal')
                      },2000);
                }else{
                  this.$message({
                      message: data.message,
                      type: 'warning'
                    });
                }
              }
      },
    },
    async mounted () {
         // const response = await accountDetailList()
         // const responseJson = await response.json();
         // if(responseJson.statusCode == 200) {
         //  this.tableData=responseJson.object;
         // }
  	},
    watch: {        
          
    }
}
</script>

<style  scoped>
.CashWithdrawals{
padding:0 20px;
}
</style>