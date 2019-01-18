<template >
    <div class="Shop_box">
      <div>
          <h3 class="shoptitle" style='margin: 20px;text-align: center;'>我要开店</h3>
           <h6 class="text-left magle" style='text-align: center;margin-left: 25px;'>一个身份只能开一家店; 开店后店铺无法注销; 申请到正式开通预计需1~3个工作日。了解更多请看开店规则必看</h6>
           <el-steps :active="active"  align-center  id="io"  style='margin: 18px auto;width: 100%;float: left;'>
            <el-step title="选择开店类型" description="个人店铺, 企业店铺"></el-step>
            <el-step title="阅读开店须知" description="确认自己符合个人店铺的相关规定"></el-step>
            <el-step title="申请开店认证" description="需提供认证相关资料, 等待审核通过"></el-step>
          </el-steps>
      </div>
      <div class='clears'></div>
    <el-row id="step1" >
      <el-col :span="8"  style="margin-left: 8.33333%;">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/334-1.jpg" class="image">
          <div style="padding: 14px;">
            <span>企业店铺</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="next">立即创建</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div id="step2" style="display:none;">
        <p class="question">1、我在淘宝已经开了个店了，我用别人的身份证再开一个店可以吗？</p>
        <p class="answer">答：不可以。未经淘宝平台同意，将本人淘宝账号提供给他人作开店使用，否则由此导致相关争议、诉讼及因店铺经营中的违法违规行为导致一切人身、财产权益损害，均由本人自行承担全部民事、行政及刑事责任。</p>

        <p class="question">2、我可以把店铺转租给其他人吗?</p>
        <p class="answer">答：不可以。未经淘宝平台同意，将本人淘宝账号提供给他人作开店使用，否则由此导致相关争议、诉讼及因店铺经营中的违法违规行为导致一切人身、财产权益损害，均由本人自行承担全部民事、行政及刑事责任。</p>

        <p class="question">3、我可以开多个淘宝店吗?</p>
        <p class="answer">答：不可以。一张身份证（一张营业执照）只能开一个淘宝店铺。开店后请保持营业执照存续状态，不得注销；如若发现营业执照被注销、吊销，淘宝将会对店铺做出永久关闭的处置。</p>

        <p class="question">4、我已经开过淘宝店，现在想要注销原来的店铺重新开店，可以吗?</p>
        <p class="answer">答：不可以，淘宝暂时不提供注销店铺的服务。用户一但成功开店就无法再用身份证（营业执照）另开一家淘宝店铺。</p>

    </div>

         <div id="step3" style="display:none;" class='stop3'>
          <h4>申请开店</h4>
        <el-row :gutter="20">
  
              <el-col :span="5" class='mag_10 text_r'><div class="grid-content bg-purple">店铺名称:</div></el-col>
              <el-col :span="5" class='mag_10'>
                <el-input  v-model="fromApplys.storeName" placeholder="请输入店铺名称"   style="width: 200px;float: left;"></el-input>
                <span id='text_1' style='position: absolute;left: 12px;top: 31px;font-size: 12px;color: rgb(198,0,0);'></span>
              </el-col>
          

          <el-col :span="5" class='mag_10 text_r'><div class="grid-content bg-purple">真实姓名:</div></el-col>
          <el-col :span="5" class='mag_10' style="text-align: left;margin: 10px auto;">   
           <el-input  style='width: 200px;float: left;' v-model="fromApplys.trueName" placeholder="请输入真实姓名" ></el-input>  
            <span id='text_2' style='position: absolute;left: 12px;top: 31px;font-size: 12px;color: rgb(198,0,0);'></span>  
          </el-col>

     
            <el-col :span="5" class='mag_10 text_r'><div class="grid-content bg-purple">性别: </div></el-col>
            <el-col :span="5" style="text-align: left;margin: 10px auto;">  
            <el-radio v-model="fromApplys.sex" label="男" value="男">男</el-radio>
            <el-radio v-model="fromApplys.sex" label="女" value="女">女</el-radio></el-col>


          <el-col :span="5" class='mag_10 text_r'><div class="grid-content bg-purple">身份证号码:</div></el-col>
          <el-col :span="5" class='mag_10'><el-input style='width: 200px;float: left;' v-model="fromApplys.idNum" placeholder="请输入身份证号码,必需是真实有效的"></el-input></el-col>


          <el-col :span="5" class='mag_10 text_r'><div class="grid-content bg-purple">银行卡号:</div></el-col>
          <el-col :span="5" class='mag_10'><el-input style='width: 200px;float: left;' v-model="fromApplys.cardNum" placeholder="请输入银行卡号"></el-input></el-col>

          <el-col :span="5" class='mag_10 text_r'><div class="grid-content bg-purple">手持身份证正面照:</div></el-col>
          <el-col :span="2" class='mag_10'  style='padding-right: 0px;width: auto;height: 10px;'><img src="../assets/Snip20180920_1.png" style="width: 67px;height: 54px;" /></el-col>
           <el-col :span="3" class='mag_10' style="text-align: left;padding-left: 0px;">
             <form id="flcesB" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="storeLogo" style="display:none;"> 
                      <input style="float: left;width: 67px;height: 54px;position: relative;left: -67px;opacity: 0;" type="file" name="files" @change="tirggerFileB"> 
            </form>
           </el-col>
  

          <el-col class='mag_10 text_r' :span="5"><div class="grid-content bg-purple">身份证正面照:</div></el-col>
          <el-col  :span="2" style='padding-right: 0px;width: auto;height: 10px;'><img src="../assets/Snip20180920_2.png" style="width: 67px;height: 54px;" /></el-col>
           <el-col  :span="3" style="text-align: left;padding-left: 0px;">
            <form id="flcesA" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="storeLogo" style="display:none;"> 
                      <input style="float: left;width: 67px;height: 54px;position: relative;left: -67px;opacity: 0;" type="file" name="files" @change="tirggerFileA"> 
            </form>
           </el-col>
  
  
          <el-col class='mag_10 text_r' :span="5"><div class="grid-content bg-purple">固定电话:</div></el-col>
          <el-col class='mag_10' :span="5"><el-input style='width: 200px;float: left;' v-model="fromApplys.phone" placeholder="请输入固定电话"></el-input></el-col>

 
          <el-col class='mag_10 text_r' :span="5"><div class="grid-content bg-purple">紧急联系人电话号码:</div></el-col>
          <el-col class='mag_10' :span="5"><el-input style='width: 200px;float: left;' v-model="fromApplys.emergency" placeholder="请输入固定电话"></el-input></el-col>


          <el-col class='mag_10 text_r' :span="5"><div class="grid-content bg-purple">公司名称: </div></el-col>
          <el-col class='mag_10' :span="5"><el-input style='width: 200px;float: left;' v-model="fromApplys.company" placeholder="请输入公司名称"></el-input></el-col>
 

          <el-col class='mag_10 text_r' :span="5"><div class="grid-content bg-purple">工商号: </div></el-col>
          <el-col class='mag_10' :span="5"><el-input style='width: 200px;float: left;' v-model="fromApplys.commerceNum" placeholder="请输入工商号"></el-input></el-col>


          <el-col :span="5" class='mag_10 text_r'><div class="grid-content bg-purple">营业执照:</div></el-col>
          <el-col :span="2" class='mag_10'  style='padding-right: 0px;width: auto;height: 10px;'><img src="../assets/Snip20180920_1.png" style="width: 67px;height: 54px;" /></el-col>
           <el-col :span="3" class='mag_10' style="text-align: left;padding-left: 0px;">
             <form id="flcesB" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="storeLogo" style="display:none;"> 
                      <input style="float: left;width: 67px;height: 54px;position: relative;left: -67px;opacity: 0;" type="file" name="files" @change="tirggerFile"> 
            </form>
           </el-col>


           <el-col class='mag_10 text_r' :span="5"><div class="grid-content bg-purple">省市地址:</div></el-col>
          <el-col class='mag_10' :span="5">
                       <el-form   label-width="80px" :model="formLabelAlignA" style="line-height: 32px;" >
                  <el-select size='small' class='sam_input' v-model="value" placeholder="请选择省" style="float: left;"  id="vael1">
                    <el-option
                      v-for="item in options"
                      :key="item.areaname"
                      :label="item.areaname"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select size='small' class='sam_input' v-model="value2" placeholder="请选择市" style="float: left;"  id="vael2">
                    <el-option
                      v-for="item in optionsB"
                      :key="item.areaname"
                      :label="item.areaname"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select size='small' class='sam_input' v-model="value3" placeholder="请选择区" style="float: left;"  id="vael3">
                    <el-option
                      v-for="item in optionsC"
                      :key="item.areaname"
                      :label="item.areaname"
                      :value="item.id">
                    </el-option>
                  </el-select>
              </el-form>
            <!-- <el-input style='width: 200px;float: left;' v-model="fromApplys.address" placeholder="请输入固定电话"></el-input> -->
          </el-col>




          <el-col class='mag_10 text_r' :span="5"><div class="grid-content bg-purple">详细地址:</div></el-col>
          <el-col class='mag_10' :span="5"><el-input style='width: 200px;float: left;' type="textarea" v-model="fromApplys.addrDetail" placeholder="请输入详细地址"></el-input></el-col>


        </el-row>
    </div>
    <div id="step4" style="display: none;">
      <el-button type="primary" :loading="true"  style="width: 300px;height: 300px;margin: 52px auto;border-radius: 200px;">申请中</el-button>
    </div>
    <div id="step5" style="display: none;">
      <el-button @click='a_Reapply' type="danger"   style="width: 300px;height: 300px;margin: 52px auto;border-radius: 200px;">
      申请失败
      <br />
      <br />
      重新申请
     </el-button>
    </div>
    <div class='buttons'>
        <el-button class="StepButton  STEBUTT" style="display:none;" @click="TheLastStep">上一步</el-button>
        <el-button id='apply_box'  style="display:none;" type="primary" class="STEBUTTS"  @click="Apply();next()">申请</el-button>
         <el-button type="primary" class="StepButton  STEBUTT2" style="display:none;"  @click="next">我已了解继续开店</el-button>
    </div>
  </div>
</template>

<script>

import { storeApplyAdd , photoAdd ,storeApplyApplyStatus,transAreaGetProvinceArea,transAreaGetCityArea,transAreaGetDistrictArea} from '@/api/Shop'
export default {

  name: 'Shop',
  data () {
    return {
      formLabelAlignA:'',
      valueA:'',
      valueB:'',
      valueC:'',
      value:'',
      value2:'',
      value3:'',
      options:[],
      optionsB:[],
      optionsC:[],
       active: 1,
       fromApplys:{
        storeName:"",
        trueName: "",
        sex: "",
        idNum: "",
        cardNum: "",
        frontImg: "",
        idImg: "",
        phone: "",
        emergency: "",
        address: "",
        addrDetail: "",
        licenseImg: "",
        company: "",
        commerceNum: ""
       },
       
    }
  },
  methods: {
    a_Reapply(){
        $('#step1').css('display', 'block');
             $('#step2').css('display', 'none');
            $('#step3').css('display', 'none');
            $('#step4').css('display', 'none');
            $('#step5').css('display', 'none');
             $('.STEBUTTS').css('display', 'none');
            $('.STEBUTT').css('display', 'none');
              $('.STEBUTT2').css('display', 'none');
              $('#io').css('display', 'none');
    },
    async tirggerFile () {
        var formData = new FormData(document.getElementById('flces'));
        const response = await photoAdd(formData)
        const datatable =await  response.json();
        this.fromApplys.licenseImg=datatable.object[0].path;
    },
    async tirggerFileA(){
        var formDataA = new FormData(document.getElementById('flcesA'));
        const response = await photoAdd(formDataA)
        const datatables =await  response.json();
        this.fromApplys.idImg=datatables.object[0].path;
    },
    async tirggerFileB(){
        var formData = new FormData(document.getElementById('flcesB'));
        const response = await photoAdd(formData)
        const datatable =await  response.json();
        this.fromApplys.frontImg=datatable.object[0].path;
    },
    async Apply () {


          // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
          var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
          if(reg.test(this.fromApplys.idNum) === false) 
          { 
            this.$message.error("身份证输入不合法");
            return false; 
          }
      
      this.fromApplys.address=this.valueA+this.valueB+this.valueC
        const res = await storeApplyAdd(this.fromApplys)
        const data = await res.json();
            if(data.statusCode==200){
              this.$message({
              message: data.message,
              type: 'success'
            });
              setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
                window.location.reload();//页面刷新
              },2000);

        }else{
            this.$message.error( data.message);
        }
        
    },
    next() {
        this.active++
      },
      TheLastStep () {
         this.active--
      },

    },
    async mounted () {
        const res = await storeApplyApplyStatus()
        const data = await res.json();
        if(data.statusCode==401){
               this.$message('未登录');
              this.$router.push('/Sign_in')
        }
        if(data.object.status==0){
            $('#step1').css('display', 'none');
             $('#step2').css('display', 'none');
            $('#step3').css('display', 'none');
            $('#step4').css('display', 'block');
             $('.STEBUTTS').css('display', 'none');
            $('.STEBUTT').css('display', 'none');
              $('.STEBUTT2').css('display', 'none');
              $('#io').css('display', 'none');
        }else if(data.object.status==2){
            $('#step1').css('display', 'none');
             $('#step2').css('display', 'none');
            $('#step3').css('display', 'none');
            $('#step4').css('display', 'none');
             $('#step5').css('display', 'block');
             $('.STEBUTTS').css('display', 'none');
            $('.STEBUTT').css('display', 'none');
              $('.STEBUTT2').css('display', 'none');
              $('#io').text('some text')
              $('#io').css('display', 'none');
        };

              //省
      const optionsA = await transAreaGetProvinceArea()
      const optionsAA = await optionsA.json();
      this.options=optionsAA.object;

        
  },
  watch : {
    'fromApplys.storeName': function (a,b) {
       var reg=/[@#\$%\^&amp;\*]+/g;
       if(reg.test(a)){
         $('#text_1').text('含有非法字符!!!');
         // cursor: default;
         $("#apply_box").attr('disabled',true);
         
          $("#apply_box").css('cursor','not-allowed');
       }else{
        $('#text_1').text('');
         $("#apply_box").attr('disabled',false);
         $("#apply_box").css('cursor','pointer');
       }

    },
    'fromApplys.trueName': function (a,b) {
       var reg=/[@#\$%\^&amp;\*]+/g;
       if(reg.test(a)){
         $('#text_2').text('含有非法字符!!!');

         $("#apply_box").attr('disabled',true);
         
          $("#apply_box").css('cursor','not-allowed');
       }else{
        $('#text_2').text('');
         $("#apply_box").attr('disabled',false);
         $("#apply_box").css('cursor','pointer');
       }

    },
    active (curVal,oldVal){
      console.log("curVal",curVal)
        if (curVal > 3){ 
          curVal = 0
        }
        else if(curVal==1){
            $('#step1').css('display', 'block');
             $('#step3').css('display', 'none');
            $('#step2').css('display', 'none');
             $('.STEBUTTS').css('display', 'none');
            $('.StepButton').css('display', 'none');
        }else if(curVal==2){
           $('#step1').css('display', 'none');
             $('#step3').css('display', 'none');
            $('#step2').css('display', 'block');
             $('.STEBUTTS').css('display', 'none');
            $('.StepButton').css('display', 'inline-block');
        }else if(curVal==3){
          $('#step1').css('display', 'none');
             $('#step2').css('display', 'none');
            $('#step3').css('display', 'block');
             $('.STEBUTTS').css('display', 'inline-block');
            $('.STEBUTT').css('display', 'inline-block');
              $('.STEBUTT2').css('display', 'none');
        }
    },
     async value (curVal,oldVal){
      var ctens=this;
      $(function(){
          ctens.valueA=$('#vael1').val()
        
      })
        this.value2='';
         this.optionsB=[];
         this.optionsC=[];
         //市
       const optionsB = await transAreaGetCityArea(curVal)
      const optionsBB = await optionsB.json();
      this.optionsB=optionsBB.object;
    },
    async value2 (curVal,oldVal) {
     if(curVal==null || curVal==""){
        this.value3='';
       this.optionsC=[];
        return;
     }
      var ctens=this;
      $(function(){
          ctens.valueB=$('#vael2').val()
        
      })
       this.value3='';
       this.optionsC=[];
         //区
       const OPSON = await transAreaGetDistrictArea(curVal)
      const optionsd = await OPSON.json();
      this.optionsC=optionsd.object;
      
    },
    async value3 (curVal,oldVal) {
      var ctens=this;
      $(function(){
          ctens.valueC=$('#vael3').val()
        
      })
    },
  }
    

    

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-left{
  text-align: center;
}
.shoptitle{
  text-align: center;
  margin: 0px auto;
}
.magle{
  margin: 10px auto;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
   #step1{
    margin: 50px auto;
  }
  #step2{
    border: 1px solid #d6d6d6;
padding: 25px 50px;
display: block;

width: 70%;

margin: 36px auto;
  }
   #step3{
    width: 1024px;

margin: 0 auto;
  }
     #step4{
    width: 80%;

margin: 0 auto;
  }
  .question{
    font-size: 12px;
    color: #000;
    text-align: left;
  }
  .answer{
    margin-bottom: 38px;
    text-align: left;
    font-size: 12px;
    color: #666;
  }
  .stop3{
    display: block;

margin: 18px auto;

background: rgb(255, 255, 255) none repeat scroll 0% 0%;

box-shadow: rgba(229, 229, 229, 0.5) 0px -2px 4px 0px;

width: 72%;

min-height: 32px;

padding-bottom: 24px;

padding-top: 24px;
}
.mag_10{
  margin: 10px auto;
  position: relative;
}
.sam_input{
  width: 199px;
  margin: 10px auto;
}
.text_r{
  text-align: right;
}
.buttons{
margin: 20px;
}
</style>
