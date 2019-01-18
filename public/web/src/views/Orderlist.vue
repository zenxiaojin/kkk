<template>
  <div class="vbs">
    <h3 style='margin: 20px auto;text-align: left;'>订单列表</h3>
      <div style="margin: 18px auto;background: rgb(255, 255, 255) none repeat scroll 0% 0%;box-shadow: rgba(229, 229, 229, 0.5) 0px -2px 4px 0px;width: 100%;min-height: 32px;overflow: hidden;">
        <div style="overflow: hidden;padding: 0 20px;">
              <el-button type="text" class="fl">订单筛选</el-button>
              <div class="clears"></div>
              <div>
                <el-row :gutter="24">
                  <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <span style="float: left;margin: 10px auto;font-size: 14px;">昵称:</span>
                         <div style='width: 100%;display: block;overflow: hidden;'>
                          <el-input style="width:52%;float: left;" v-model="data_screen.nickName" placeholder="请输入内容" size="small"></el-input>
                        </div>
                      </div>
                  </el-col>
                  <el-col :span="6">
                      <div class="grid-content bg-purple">
                          <span style="float: left;margin: 10px auto;font-size: 14px;">评价状态:</span>
                          <div style='width: 100%;display: block;overflow: hidden;'>
                             <el-select style='float: left;'  size="small"   v-model="data_screen.evaluationStatus" placeholder="请选择">
                                <el-option
                                  v-for="iniu in EvaluationState"
                                  :key="iniu.value"
                                  :label="iniu.name"
                                  :value="iniu.value">
                                </el-option>
                              </el-select>
                          </div>
                         
                      </div>
                  </el-col>
                  <el-col :span="6">
                     <div class="grid-content bg-purple">
                          <span style="float: left;margin: 10px auto;font-size: 14px;">订单状态:</span>
                          <div style="display: block;overflow: hidden;width: 100%;">
                            <el-select style='float: left;'  size="small"   v-model="data_screen.orderStatus" placeholder="请选择">
                                <el-option
                                  v-for="iniu in OrderStatus"
                                  :key="iniu.value"
                                  :label="iniu.name"
                                  :value="iniu.value">
                                </el-option>
                              </el-select>
                          </div>
                      </div>
                  </el-col>
                  <el-col :span="6">
                     <div class="grid-content bg-purple">
                          <span style="float: left;margin: 10px auto;font-size: 14px;">订单ID:</span>
                          <div style="display: block;overflow: hidden;width: 100%;">
                               <el-input style="width:52%;float: left;" v-model="data_screen.orderId" placeholder="请输入内容" size="small"></el-input>
                          </div>
                      </div>
                  </el-col>
                </el-row>
              </div>
                        <el-button @click="search()" type="primary" style="margin: 20px auto;float: left;" size="small">搜索</el-button>
            </div>
       </div>
      <div class="clears"></div>


<div v-for='inis in tableData' style='border: 1px solid #cfcfcf;margin: 38px auto;'>
    <div class="Ordernumber">
      <span class='fl'>订单号:{{inis.orderId}}</span>
      <span class='fl' style='margin: 0 84px;'>创建时间:{{inis.createDate}}</span>
    </div>
    <div class='clears'></div>
    <div v-for='(init,index) in inis.detail'  class='table_box'>
        <table cellpadding="0" cellspacing="0"  style='width: 100%;'>
          <tr>
            <th v-if='index==0' style='height: 36px;border: 1px solid #d8d8d8;'>
              <el-row>
                <el-col :span="9">
                  <div class="grid-content bg-purple">
                    宝贝
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    单价
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple-light">
                    数量
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                      售后
                  </div>
                </el-col>
              </el-row>
            </th>
            <th v-if='index==0' style='height: 36px;border: 1px solid #d8d8d8;'>买家</th>
            <th v-if='index==0' style='height: 36px;border: 1px solid #d8d8d8;'>交易状态</th>
            <th v-if='index==0' style='height: 36px;border: 1px solid #d8d8d8;'>实收款</th>
          </tr>
          <tr>
            <td style='width: 60%;'>

              <el-row>
                <el-col :span="9">
                  <div class="grid-content bg-purple">
                    <img class="fl" :src='init.mainPhoto' />
                
                     <span style='display: block;text-align: left;'>{{init.goodsName}}</span>
                    <span style='display: block;text-align: left;color: #bfbfbf;margin-top: 6px;'>{{init.propertyInfo}}</span>
       
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <span style='line-height: 51px;'>￥{{init.price}}</span>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content bg-purple-light">
                    <span style='line-height: 51px;'>{{init.count}}</span>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="1"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="2"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="3"'>支付成功</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="4"'>待收货</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="5"'>交易成功</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="6"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="7"'>退款中</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="8"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="9"'>退款完成</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="10"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="11"'>交易关闭</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="12"'>待支付</span>
                  </div>
                </el-col>
              </el-row>


                
                
                 
            </td>

            <td>
              {{inis.nickName}}
             
            </td>

            <td>
               <span style='line-height: 51px;' v-if='inis.orderStatus=="1"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="2"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="3"'>支付成功</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="4"'>待收货</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="5"'>交易成功</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="6"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="7"'>退款中</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="8"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="9"'>退款完成</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="10"'>待支付</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="11"'>交易关闭</span>
                    <span style='line-height: 51px;' v-if='inis.orderStatus=="12"'>待支付</span>
              <!-- {{inis.orderStatus}} -->
              
            </td>

            <td>
              {{inis.totalPrice}}
            </td>
          </tr>
        </table>
    </div>
</div>

  </div>
</template>

<script>

import {orderList,orderLists} from '@/api/Orderlist'

export default {
  name: 'Orderlist',
     data() {
      return {
        EvaluationState:[
                {
                      name:'需我评价',
                      value:'0'
                },{
                      name:'我已评价',
                      value:'1'
                },{
                      name:'对方已评',
                      value:'2'
                },{
                      name:'双方已评',
                      value:'3'
                },
          ],
          OrderStatus:[
              {
                      name:'待支付',
                      value:'1'
                },{
                      name:'支付成功',
                      value:'2'
                },{
                      name:'待收货',
                      value:'3'
                },{
                      name:'交易成功',
                      value:'4'
                },{
                      name:'退款中',
                      value:'5'
                },{
                      name:'退款完成',
                      value:'6'
                },{
                      name:'交易关闭',
                      value:'7'
                },
          ],
        data_screen:{
          page:'1',
          nickName:'',
          evaluationStatus:'',
          orderStatus:'',
          orderId:'',
        },
        tableData:[],
        loading:false,
        total:null,
      }
    },
     methods: {
      async search(row){
          const response = await orderLists(this.data_screen);
          const datatable =await  response.json();
          if(datatable.statusCode==401){
               this.$message('未登录');
              this.$router.push('/Sign_in')
        }else if(datatable.statusCode==200){
            this.tableData=datatable.object;
            this.total=datatable.total;
        }
         
      },
      async currentS (row) {
        this.loading=true;
         $('#pages').css('display', 'none');
        const response = await orderList(row)
        const datatable =await  response.json();
       this.tableData=datatable.object;
       $('#pages').css('display', 'block');
       if(datatable.statusCode==200){
          this.loading=false;
        }
      },

   	 },
    async mounted () {
       const goodsLists = await orderList(0)
      	const goodsListdata = await goodsLists.json();
       if(goodsListdata.statusCode==401){
               this.$message('未登录');
              this.$router.push('/Sign_in')
        }
      		this.tableData=goodsListdata.object;
          this.total=goodsListdata.total;
  	},
      watch: {

      }
}
</script>

<style  scoped>
.Ordernumber{
  overflow: hidden;

background-color: #f1f1f1;

padding: 7px;
}
.table_box  tr td{
border: 1px solid #d8d8d8;
padding: 10px;
}
.table_box{

   border-collapse: collapse;
     border: none;

}
</style>
