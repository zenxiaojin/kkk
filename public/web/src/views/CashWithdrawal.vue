<template>
  <div class="CashWithdrawals">
    <h3 style="text-align: left;margin: 20px;">提现</h3>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
   <!--       <el-form-item label="提现银行卡:" prop="withdrawType" class='fl' style="width:100%;">
            <el-radio-group v-model="ruleForm.withdrawType" style='width: 52%;text-align: left;border: 1px solid #6bc3fc;height: 36px;text-indent: 6px;float: left;line-height: 44px;'>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543488848152&di=1532478c0bb518f692a96ca6c5cce344&imgtype=0&src=http%3A%2F%2Fimg.coreldraw.com.cn%2Fdata%2Fattachment%2Fmaterial%2F2017-11-08%2Fpre_bEQx9Lg8CvHjcuTC.jpg" style='width: 25px;position: absolute;top: 10px;left: 1px;'/>
              <el-radio style="margin-left: 16px;" label="1">中国银行</el-radio>
            </el-radio-group>
            <span class="fl" style="color: #337ab7 !important;cursor: pointer;margin-left: 15px;">管理银行卡</span>
          </el-form-item> -->
          <el-form-item label="提现到支付宝:" prop="withdrawType" class='fl' style="width:100%;">
            <el-radio-group v-if='tableData.alipayAccount' v-model="ruleForm.withdrawType" style='width: 52%;text-align: left;border: 1px solid #6bc3fc;height: 36px;text-indent: 6px;float: left;line-height: 44px;position: relative;'>
              <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&amp;quality=100&amp;size=b4000_4000&amp;sec=1543475470&amp;di=932805131d8243b0b964720ac390588a&amp;src=http://pic.baike.soso.com/ugc/baikepic2/15696/20170825221628-1162233375_jpg_400_320_10454.jpg/0" style='width: 25px;position: absolute;top: 10px;left: 0;'/>
              <el-radio  style="margin-left: 16px;" label="2">{{tableData.cnname+"&emsp;&emsp;"+tableData.alipayAccount}}</el-radio>
            </el-radio-group>
            <span v-if='!tableData.alipayAccount' class="fl" style="color: #337ab7 !important;cursor: pointer;margin-left: 15px;" @click='Alipay'>去绑定</span>
             <span v-if='tableData.alipayAccount' class="fl" style="color: #337ab7 !important;cursor: pointer;margin-left: 15px;" @click='Alipay'>修改</span>
          </el-form-item>
          <!-- <div class="clears"></div>  -->
<!--           <el-form-item label="账户总额:" prop="name" class='fl'>
           {{ruleForm.name==''?0:0}}
          </el-form-item> -->
            <div class="clears"></div> 
          <el-form-item label="提现金额:" prop="withdrawApplyTotal" class='fl'>
            <el-input v-model="ruleForm.withdrawApplyTotal"  style='width:188px;'></el-input>
          </el-form-item>
          <div class="clears"></div>
            <el-form-item label="提现绑定手机号:" class='fl'>
                <span>{{mobile}}</span>
                <span style='color: rgb(51, 122, 183) !important;cursor: pointer;margin-left: 15px;'>修改手机号码</span>
            </el-form-item>
          <div class="clears"></div>
            <el-form-item label="验证码:" prop="name" class='fl'>
            <el-input  placeholder="请输入验证码"  v-model="ruleForm.code" style='width:300px;'>
              <el-button id="phonecode"  slot="append"  @click="codeA()">获取验证码</el-button>
            </el-input>
            </el-form-item>
          <div class="clears"></div>
          <el-form-item class='fl'>
            <el-button type="primary" @click="submitForm('ruleForm')">立即申请</el-button>
            <el-button @click="resetForm()">取消</el-button>
          </el-form-item>
</el-form>
  </div>
</template>

<script>

import { withdrawalAdd , aliBindingQuery , withdrawalWithdrawalSend} from '@/api/CashWithdrawal'

export default {
  name: 'CashWithdrawal',
     data() {
      return {
        mobile:'',
        disableds:true,
        wait:60,
        nutton:true,
        tableData:[],
       ruleForm: {
          withdrawType:'',
          withdrawAccount:'',
          withdrawApplyTotal:'',
          bindingPhone:'',
          code:''
        },
        rules: {
          withdrawType: [
            { required: true, message: '提现类型', trigger: 'change' }
          ],
          // withdrawAccount: [
          //   { required: true, message: '银行卡账号或支付宝账号', trigger: 'change' }
          // ],
          withdrawApplyTotal: [
            { required: true, message: '申请提现的金额', trigger: 'change' }
          ],
        }
      }
    },
     methods: {
       async submitForm(formName) {
              const catn=this;
              this.$refs[formName].validate((valid) => {
                      if (valid) {
                         catn.nutton=true;
                      } else {
                        catn.nutton=false;
                      }
                    });
                if(!this.nutton){
                    return;
                }else{
                    if(this.ruleForm){
                        if(this.ruleForm.withdrawType==1){

                        }else if(this.ruleForm.withdrawType==2){
                            this.ruleForm.withdrawAccount=this.tableData.alipayAccount;
                            this.ruleForm.bindingPhone=this.tableData.bindingPhone;
                        }

                         const response = await withdrawalAdd(this.ruleForm)
                           const responseJson = await response.json();
                           if(responseJson.statusCode == 200) {
                            // this.tableData=responseJson.object;
                           }
                    }
                }
      },
      resetForm(formName) {
         this.$router.push('LoanAccount')
      },
      Alipay(){
         this.$router.push('Alipay')
      },
      async codeA(){
              if(this.wait!==60){
                this.disableds=true;
            }
            if(this.wait!==60  && this.wait==0){

                this.disableds=false;
            }
          const myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
           if(this.tableData.alipayAccount=="" || this.tableData.alipayAccount==null){
            this.$message.error('请输入手机号码!!!');
              return false;
          }else if (!myreg.test(this.tableData.alipayAccount)){
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
                const res = await withdrawalWithdrawalSend(this.tableData.alipayAccount)
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
                    // setTimeout(function(){  
                    //    thisc.$router.push('/CashWithdrawal')
                    //   },2000);
                    
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
       var userobj=$.cookie('userobj');
          var sent=JSON.parse(userobj);
          this.mobile=sent.mobile;
         const response = await aliBindingQuery()
         const responseJson = await response.json();
         if(responseJson.statusCode == 200) {
          this.tableData=responseJson.object;
         }

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
