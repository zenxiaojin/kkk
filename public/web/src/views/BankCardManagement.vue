<template>
  <div class="BankCardManagements">
     <el-dialog title="身份验证" :visible.sync="dialogaddersds" >
        <el-row :gutter="24">
            <el-col :span="6"  style='line-height: 40px;margin: 10px auto;text-align: right;' >
              <div class="grid-content bg-purple">
                  <span>店铺注册手机号:</span>
              </div>
            </el-col>
            <el-col :span="18"  style='margin: 10px auto;' >
              <div class="grid-content bg-purple"  style='width:37%;'>
                  <el-input v-model="storeRegisteredMobilePhoneNumber.mobile" placeholder="请输入持卡人姓名"></el-input>
              </div>
            </el-col>
             <el-col :span="6"  style='line-height: 40px;margin: 10px auto;text-align: right;' >
              <div class="grid-content bg-purple">
                  <span>验证码:</span>
              </div>
            </el-col>
            <el-col :span="18"  style='margin: 10px auto;' >
              <div class="grid-content bg-purple"  style='width: 63%;'>
                   <el-input  placeholder="请输入验证码"  v-model="storeRegisteredMobilePhoneNumber.code">
                      <el-button id="phonecode"  slot="append"  @click="codeA()" :disabled='disableds'>获取验证码</el-button>
                    </el-input>
              </div>
            </el-col>
        </el-row>
        <el-button style='margin: 20px;' type="primary" @click='Preservation_phone'>保存</el-button>
     </el-dialog>




      <el-dialog title="身份验证" :visible.sync="dialogaddersd_phone" >
          <el-row :gutter="24">
            <el-col :span="6"  style='line-height: 40px;margin: 10px auto;' >
              <div class="grid-content bg-purple">
                  <span>持卡人姓名:</span>
              </div>
            </el-col>
            <el-col :span="18"  style='margin: 10px auto;' >
              <div class="grid-content bg-purple"  style='width:37%;'>
                  <el-input v-model="fromdata_s.cnname" placeholder="请输入持卡人姓名"></el-input>
              </div>
            </el-col>
             <el-col :span="6" style='line-height: 40px;margin: 10px auto;'>
              <div class="grid-content bg-purple">
                  <span>银行卡号:</span>
              </div>
            </el-col>
             <el-col :span="18" style='margin: 10px auto;'>
              <div class="grid-content bg-purple" style='width:60%;'>
                  <el-input v-model="fromdata_s.bankNumber" placeholder="请输入银行卡号"></el-input>
              </div>
            </el-col>
             <el-col :span="6" style='line-height: 40px;margin: 10px auto;'>
              <div class="grid-content bg-purple">
                  <span>银行卡预留手机号:</span>
              </div>
            </el-col>
             <el-col :span="18" style='margin: 10px auto;'>
              <div class="grid-content bg-purple" style='width:60%;'>
                  <el-input v-model="fromdata_s.bankPhone" placeholder="请输入银行卡号"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-button type="primary" @click='Preservation_phonefn'>保存</el-button>
     </el-dialog>



    <el-dialog title="绑定银行卡" :visible.sync="dialogaddersd"  >
          <el-row :gutter="24">
            <el-col :span="6"  style='line-height: 40px;margin: 10px auto;' >
              <div class="grid-content bg-purple">
                  <span><span style="color: #f60;margin: 2px;">*</span>持卡人姓名:</span>
              </div>
            </el-col>
            <el-col :span="18"  style='margin: 10px auto;' >
              <div class="grid-content bg-purple"  style='width:37%;'>
                  <el-input v-model="fromdata.cnname" placeholder="请输入持卡人姓名"></el-input>
              </div>
            </el-col>
             <el-col :span="6" style='line-height: 40px;margin: 10px auto;'>
              <div class="grid-content bg-purple">
                  <span><span style="color: #f60;margin: 2px;">*</span>银行:</span>
              </div>
            </el-col>
            <el-col :span="18" style='margin: 10px auto;'>
              <div class="grid-content bg-purple" style='width:37%;'>
                   <el-select v-model="fromdata.bankName" placeholder="请选择银行">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.bankName"
                        :value="item.bankName">
                      </el-option>
                    </el-select>
              </div>
            </el-col>
             <el-col :span="6" style='line-height: 40px;margin: 10px auto;'>
              <div class="grid-content bg-purple">
                  <span><span style="color: #f60;margin: 2px;">*</span>银行卡号:</span>
              </div>
            </el-col>
             <el-col :span="18" style='margin: 10px auto;'>
              <div class="grid-content bg-purple" style='width:60%;'>
                  <el-input v-model="fromdata.bankNumber" placeholder="请输入银行卡号"></el-input>
              </div>
            </el-col>
             <el-col :span="6" style='line-height: 40px;margin: 10px auto;'>
              <div class="grid-content bg-purple">
                  <span><span style="color: #f60;margin: 2px;">*</span>银行卡预留手机号:</span>
              </div>
            </el-col>
             <el-col :span="18" style='margin: 10px auto;'>
              <div class="grid-content bg-purple" style='width:60%;'>
                  <el-input v-model="fromdata.bankPhone" placeholder="请输入银行卡号"></el-input>
              </div>
            </el-col>
            <el-col :span="6" style='line-height: 40px;margin: 10px auto;'>
              <div class="grid-content bg-purple">
                  <span><span style="color: #f60;margin: 2px;">*</span>身份证号:</span>
              </div>
            </el-col>
             <el-col :span="18" style='margin: 10px auto;'>
              <div class="grid-content bg-purple" style='width:60%;'>
                  <el-input v-model="fromdata.personId" placeholder="请输入身份证号"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-button type="primary" class='box_button' @click='Preservations'>保存</el-button>
    </el-dialog>
     <h3 class="fl" style='margin: 20px auto;'>银行卡管理</h3>
     <div class="clears"></div>
      <el-row :gutter="24" class='box_bank'>
        <el-col :span="12" style='border-right: 1px dashed #333;'>
          <div class="grid-content bg-purple">
                <img style='border-radius: 80px;margin: 18px auto 20px auto;'  width='80' src="https://kungshi.oss-cn-shenzhen.aliyuncs.com/goods/20181113162532270.jpg" />
            <div class="clears"></div>
                <span v-if='bankCardData[0].cnname' style='padding-bottom: 11px;display: block;font-family: Microsoft yahei;font-size: 14px;font-weight: 700;margin-top: 12px;color: #333;'>{{bankCardData[0].cnname}}</span>
             <div class="clears"></div>
                <span style='font-family: Microsoft yahei;margin-top: 10px;font-size: 12px;color: #666;'>账户类型：个人账户</span>
             <div class="clears"></div>
                <span style='font-family: Microsoft yahei;margin-top: 10px;font-size: 12px;color: #666;'>身份证号：440881********7128</span>
          </div>
        </el-col>
        <el-col :span="12" style='position: relative;'>
          <div class="grid-content bg-purple" style='position: absolute;width: 100%;left: 25px;'>
                <el-card class="box-card" v-if='bankCardData[0].cnname'>
                  <div slot="header" class="clearfix">
                    <span>{{bankCardData[0].bankName}}</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click='delBankCard'>删除银行卡</el-button>
                  </div>
                  <el-row :gutter="24">
                      <el-col :span="12">
                        <div class="grid-content bg-purple" style='text-align: left;margin: 2px auto;'>
                            <span class="color666">持卡人</span>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="grid-content bg-purple" style='text-align: left;margin: 2px auto;'>
                            <span class="color666">银行预留手机号</span>
                        </div>
                      </el-col>
                       <el-col :span="12">
                        <div class="grid-content bg-purple" style='text-align: left;margin: 2px auto;'>
                            <span class="color333">{{bankCardData[0].cnname}}</span>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="grid-content bg-purple" style='text-align: left;margin: 2px auto;'>
                            <div><span class="color333" style='float: left;'>{{bankCardData[0].bankPhone}}</span>  <span v-if='bankCardData[0].bankPhone' @click='modifys' class="a_herf" style='float: left;margin-left: 12px;'>  修改</span></div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="grid-content bg-purple" style='text-align: left;margin: 2px auto;'>
                            <span class="color666">银行卡号</span>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="grid-content bg-purple" style='text-align: left;margin: 2px auto;'>
                            <span class="color333">{{bankCardData[0].bankNumber}}</span>
                        </div>
                      </el-col>
                    </el-row>
                </el-card>
                <div style='padding: 14%;' v-if='!bankCardData[0].cnname'>
                  <el-button type="primary" @click='dialogaddersd=true'>绑定银行卡</el-button>
                </div>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>

import {  withdrawList , withdrawDelete ,bankList ,withdrawAdd,withdrawBankUpdateSend,withdrawBankUpdateValidate,withdrawBankUpdateBankInfo} from '@/api/BankCardManagement'
//cnname 持卡人姓名
// bankName  银行列表中选一个
// bankNumber  银行卡号  
// personId   身份证号
export default {
  name: 'BankCardManagement',
     data() {
      return {
        dialogaddersd_phone:false,
        disableds:false,
        storeRegisteredMobilePhoneNumber:{
          mobile:'',
          code:''
        },
        dialogaddersds:false,
          bankCardData:[{cnname:'',bankName:'',bankPhone:'',bankNumber:''}],
          dialogaddersd:false,
          fromdata:{
            cnname:'',
            bankName:'',
            bankNumber:'',
            personId:'',
            bankPhone:''
          },
          fromdata_s:{
            cnname:'',
            bankName:'',
            bankNumber:'',
            bankPhone:''
          },
          options:[],
          wait:60,
      }
    },
     methods: {
            async Preservation_phonefn(){
                const res = await withdrawBankUpdateBankInfo(this.fromdata_s)
                const data = await res.json();
                if(data.statusCode==200){
                   this.$message({
                        message: data.message,
                        type: 'success'
                      });
                    setTimeout(function(){  
                        window.location.reload();
                      },2000);
                }else{
                  this.$message({
                      message: data.message,
                      type: 'warning'
                    });
                }
            },
            async Preservation_phone(){
                 const res = await withdrawBankUpdateValidate(this.storeRegisteredMobilePhoneNumber)
                const data = await res.json();
                if(data.statusCode==200){
                   this.$message({
                        message: data.message,
                        type: 'success'
                      });
                   this.fromdata_s=data.object;
                   this.disableds=false;
                   this.dialogaddersd_phone=true;

                }else{
                  this.$message({
                      message: data.message,
                      type: 'warning'
                    });
                }
            },
           async codeA () {
            if(this.wait!==60){
                this.disableds=true;
            }
            if(this.wait!==60  && this.wait==0){

                this.disableds=false;
            }
          const myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
           if(this.storeRegisteredMobilePhoneNumber.mobile=="" || this.storeRegisteredMobilePhoneNumber.mobile==null){
            this.$message.error('请输入手机号码!!!');
              return false;
          }else if (!myreg.test(this.storeRegisteredMobilePhoneNumber.mobile)){
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
                const res = await withdrawBankUpdateSend(this.storeRegisteredMobilePhoneNumber.mobile)
                const data = await res.json();
                if(data.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
                }else if(data.statusCode==200){
                   this.$message({
                        message: data.message,
                        type: 'success'
                      });
                }else{
                  this.$message({
                      message: data.message,
                      type: 'warning'
                    });
                }
              }
        },
          modifys() {
            this.$confirm('若修改手机号, 需更换银行卡,在填写银行预留手机号时,填写新的手机号更换银行卡信息成功后,即可完成手机号修改!', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.dialogaddersds=true;
              // this.$message({
              //   type: 'success',
              //   message: '删除成功!'
              // });
            }).catch(() => {
              // this.$message({
              //   type: 'info',
              //   message: '已取消删除'
              // });          
            });
          },
          async Preservations(){
              if(this.fromdata.cnname=='' || this.fromdata.cnname==null){
                  this.$message.error('持卡人姓名不能为空!!!');
                  return false;
              }else if(this.fromdata.bankName=='' || this.fromdata.bankName==null){
                  this.$message.error('请选择银行!!!');
                  return false;
              }else if(this.fromdata.bankNumber=='' || this.fromdata.bankNumber==null){
                  this.$message.error('输入银行卡卡号!!!');
                  return false;
              }else if(this.fromdata.bankPhone=='' || this.fromdata.bankPhone==null){
                  this.$message.error('银行卡预留手机号!!!');
                  return false;
              }else if(this.fromdata.personId=='' || this.fromdata.personId==null){
                  this.$message.error('请输入身份证号!!!');
                  return false;
              }
              const response = await withdrawAdd(this.fromdata)
              const datatable =await  response.json(); 
                      if(datatable.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
                    }else if(datatable.statusCode==200){
                        this.$message({
                            message: '恭喜你,'+datatable.message,
                            type: 'success'
                          });
                         setTimeout(function(){  
                            window.location.reload();
                          },2000);
              }else{
                 this.$message.error(datatable.message);
              }
          },
          async delBankCards(row){
                  const response = await withdrawDelete(this.bankCardData[0].id)
                   const datatable =await  response.json(); 
                            if(datatable.statusCode==401){
                             this.$message('未登录');
                            this.$router.push('/Sign_in')
                            }else if(datatable.statusCode==200){
                              this.$message({
                                  message: '恭喜你,'+datatable.message,
                                  type: 'success'
                                });
                               setTimeout(function(){  
                                  window.location.reload();
                                },2000);
                    }else{
                       this.$message.error(datatable.message);
                    }
          },
         async delBankCard(row){
              this.$confirm('此操作将删除该绑定的银行卡, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                  this.delBankCards();
              }).catch(() => {
                          
              });
    
          },

   	 },
    async mounted () {
          const response = await withdrawList()
          const datatable =await  response.json(); 
            if(datatable.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
            }else if(datatable.statusCode==200){
            if(datatable.object.length!==0){
              this.bankCardData=datatable.object;
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
            }
          }else{
             this.$message.error(datatable.message);
          }

           const responses = await bankList()
          const datatables =await  responses.json(); 
          if(datatables.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
            }else if(datatables.statusCode==200){
              this.options=datatables.object;
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }else{
             this.$message.error(datatables.message);
          }
  	},
      watch: {
        
      }
}
</script>

<style  scoped>
.box_bank{
  margin-left: -12px;

margin-right: -12px;

background-color: #fff;

background: rgb(255, 255, 255) none repeat scroll 0% 0%;

box-shadow: rgba(229, 229, 229, 0.5) 0px -2px 4px 0px;

width: 100%;

min-height: 32px;

overflow: hidden;
padding: 52px;
}
.color666{
  color: #666;

font-family: Microsoft yahei;

font-size: 12px;

margin-bottom: 3px;
}
.color333{
  color: #333;

font-size: 16px;

font-family: Microsoft yahei;
}
.a_herf{
  float: right;

height: 36px;

cursor: pointer;

line-height: 36px;

background-color: #fff;

text-align: center;

font-size: 12px;

color: #307ab8;

margin-top: -8px;
}
.box_button{
  display: block;

overflow: hidden;

margin-left: 36px;

margin-top: 16px;
}
</style>
