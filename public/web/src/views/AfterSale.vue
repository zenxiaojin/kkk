<template >
    <div class="fillcontain">
        <div style="margin: 18px auto;background: rgb(255, 255, 255) none repeat scroll 0% 0%;box-shadow: rgba(229, 229, 229, 0.5) 0px -2px 4px 0px;width: 100%;min-height: 32px;overflow: hidden;">
          <el-row :gutter="24">
            <el-col :span="8">
              <div class="grid-content bg-purple" style="text-align: left;margin: 20px 40px;">退款未完结总计：<span style='color:#008ae5;'>{{tableDataA.unFinish}}</span></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" style="text-align: left;margin: 20px 40px;">退款卖家未处理统计：<span style='color:#008ae5;'>{{tableDataA.unHandle}}</span></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" style="text-align: left;margin: 20px 40px;">退款待买家发货统计：<span style='color:#008ae5;'>{{tableDataA.unDelivery}}</span></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" style="text-align: left;margin: 20px 40px;">退款待卖家发货统计：<span style='color:#008ae5;'>{{tableDataA.unReceive}}</span></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" style="text-align: left;margin: 20px 40px;">卖家拒绝退款统计：<span style='color:#008ae5;'>{{tableDataA.refused}}</span></div>
            </el-col>
        </el-row>
        <el-form ref="form" :model="form" label-width="100px" style="margin: 20px auto;">
        <el-form-item label="售后状态：">
          <el-select v-model="form.returnStatus" placeholder="请选择活动区域"  style="float: left;" @change="fromdata">
            <el-option label="退款待处理" value="1"></el-option>
            <el-option label="待买家发货" value="2"></el-option>
            <el-option label="待商家收货" value="3"></el-option>
            <el-option label="商家已拒绝" value="4"></el-option>
             <el-option label="退款关闭" value="5"></el-option>
             <el-option label="退款成功" value="6"></el-option>
             <el-option label="退款完结" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
        </el-form-item>
  </el-form>
        </div>
        <div class="table_container">
            <el-table
                  v-loading="loading"
                  :data="tableData"
                  border
                  highlight-current-row
                  style="width: 100%">
                <el-table-column
                  type="index">
                </el-table-column>
                <el-table-column
                  property="orderId"
                  label="订单号">
                </el-table-column>
                <el-table-column
                  property="returnId"
                  label="退款编号">
                </el-table-column>
                <el-table-column
                  property="returnReason"
                  label="退款原因">
                </el-table-column>
                 <el-table-column
                  property="returnStatus"
                  :formatter="returnStatuss"
                  label="订单状态">
                </el-table-column>
                <el-table-column
                  property="goodStatus"
                  :formatter="returnStatussa"
                  label="退款状态">
                </el-table-column>
                <el-table-column
                  property="payMethod"
                  :formatter="returnStatussas"
                  label="退款方式">
                </el-table-column>
                 <el-table-column
                  property="transactionMoney"
                  label="交易金额">
                </el-table-column>
                <el-table-column
                  property="returnMoney"
                  label="退款金额">
                </el-table-column>
                <el-table-column
                  property="detailExpressCompany"
                  label="退货物流公司名称">
                </el-table-column>
                <el-table-column
                  property="detaiExpressNumber"
                  label="退货物流编号">
                </el-table-column>
                <el-table-column
                  property="updateDate"
                  label="最新更新时间">
                </el-table-column>
                 <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button v-if='scope.returnStatus==6' @click="friendCircleDetailFN(scope.row);dialogTableVisible = true"  type="text" size="small">同意</el-button>
                    <el-button v-if='scope.returnStatus==6'  type="text" size="small"  @click="Deletes(scope.row)">拒绝</el-button>
                  </template>
                </el-table-column>
            </el-table>
            <el-pagination
              background
              layout="prev, pager, next"
              @current-change="currentS"
              :total="total"
              style="margin: 30px;display:none;"
              id="pages"
              >
            </el-pagination>
        </div>
    </div>
</template>

<script>

import { goodsReturnList,goodsReturnListb,goodsReturnUnFinishCount,alipayRefund,wxRefund,unionRefund,goodsReturnConfirm} from '@/api/AfterSale';

export default {
  name: 'AfterSale',
  data () {
    return {
        dialogTableVisible:false,
        returnStatuss : function (row, column, cellValue) {
             if (cellValue === "1"){
                return '退款待处理';
            }else if (cellValue === "2"){
                return '待买家发货';
            }else if (cellValue === "3"){
                return '待商家收货';
            }else if (cellValue === "4"){
                return '商家已拒绝';
            }else if (cellValue === "5"){
                return '退款关闭';
            }else if (cellValue === "6"){
                return '退款成功';
            }else if (cellValue === "7"){
                return '退款完结';
            }
        },
        returnStatussa : function (row, column, cellValue) {
             if (cellValue === "1"){
                return '仅退款';
            }else if (cellValue === "2"){
                return '退货退款';
            }
        },
         returnStatussas : function (row, column, cellValue) {
            if (cellValue === "1"){
                return '支付宝';
            }else if (cellValue === "2"){
                return '微信';
            }else if (cellValue === "3"){
                return '银联';
            }
        },
      form: {
         returnStatus:null,
         page:1,
        },
      tableData :[
      ],
        loading: false,
        total:null,
        tableDataA:{
          // unFinish:null,
          // unHandle:null,
          // unDelivery:null,
          // unReceive:null,
          // refused:null,
      },
    }
  },
  methods: {
    async friendCircleDetailFN(row){
      if(row.goodStatus==1 && row.returnStatus==1){
         const response = await goodsReturnConfirm(row.id)
          const datatable =await  response.json(); 
          if(datatable.statusCode==200){
                  this.$notify({
                        title: '提示！',
                        message: datatable.message,
                        type: 'success'
                      });
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }else{
             this.$message.error(datatable.message);
          }
          return;                   
      }
      if(row.goodStatus==1 && row.returnStatus==3){
              if(row.payMethod==1){
          const response = await alipayRefund(row)
          const datatable =await  response.json(); 
          if(datatable.statusCode==200){
                  this.$notify({
                        title: '提示！',
                        message: datatable.message,
                        type: 'success'
                      });
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }else{
             this.$message.error(datatable.message);
          }
                    
      }else if(row.payMethod==2){
        console.log("微信")
          const response = await wxRefund(row)
          const datatable =await  response.json(); 
                      if(datatable.statusCode==200){
                  this.$notify({
                        title: '提示！',
                        message: datatable.message,
                        type: 'success'
                      });
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }else{
             this.$message.error(datatable.message);
          }
      }else if(row.payMethod==3){
          const response = await unionRefund(row)
          const datatable =await  response.json(); 
                    if(datatable.statusCode==200){
                  this.$notify({
                        title: '提示！',
                        message: datatable.message,
                        type: 'success'
                      });
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }
      }else{
         this.$message.error(datatable.message);
      }
          return;                   
      }
      if(row.payMethod==1){
          const response = await alipayRefund(row)
          const datatable =await  response.json(); 
          if(datatable.statusCode==200){
                  this.$notify({
                        title: '提示！',
                        message: datatable.message,
                        type: 'success'
                      });
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }else{
             this.$message.error(datatable.message);
          }
                    
      }else if(row.payMethod==2){
        console.log("微信")
          const response = await wxRefund(row)
          const datatable =await  response.json(); 
                      if(datatable.statusCode==200){
                  this.$notify({
                        title: '提示！',
                        message: datatable.message,
                        type: 'success'
                      });
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }else{
             this.$message.error(datatable.message);
          }
      }else if(row.payMethod==3){
          const response = await unionRefund(row)
          const datatable =await  response.json(); 
                    if(datatable.statusCode==200){
                  this.$notify({
                        title: '提示！',
                        message: datatable.message,
                        type: 'success'
                      });
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }
      }else{
         this.$message.error(datatable.message);
      }
    },
    async fromdata(){
      $('#pages').css('display', 'none');
       this.loading=true;
       this.tableData=[];
        const response = await goodsReturnListb(this.form)
        const datatable =await  response.json();
        if(datatable.statusCode==200){
          this.tableData=datatable.object;
        $('#pages').css('display', 'block');
          this.loading=false;
        }else if(datatable.statusCode==401){
             this.$message('未登录');
            this.$router.push('/Sign_in')
        }
    },
     onSubmit(row) {
        console.log('submit!',row);
      },
     async currentS (row) {
      $('#pages').css('display', 'none');
      this.loading=true;
      this.tableData=[];
         const response = await goodsReturnList(row)
        const datatable =await  response.json();
        this.tableData=datatable.object;
        $('#pages').css('display', 'block');
        if(datatable.statusCode==200){
          this.loading=false;
        }else if(datatable.statusCode==401){
             this.$message('未登录');
            this.$router.push('/Sign_in')
        }
      },
    },
   async mounted () {
      this.tableData=[];
      this.loading=true;
      const response = await goodsReturnList(1)
      const datatable =await  response.json();
       this.tableData=datatable.object;
       this.total=datatable.total;
       $('#pages').css('display', 'block');
       if(datatable.statusCode==200){
          this.loading=false;
        }else if(datatable.statusCode==401){
             this.$message('未登录');
            this.$router.push('/Sign_in')
        }
        const responsea = await goodsReturnUnFinishCount(1)
        const datatablea =await  responsea.json();
         if(datatablea.statusCode==401){
             this.$message('未登录');
            this.$router.push('/Sign_in')
          }
      this.tableDataA=datatablea.object;
        
  },
  watch : {
    total (curVal,oldVal){
        if(curVal<=10){
          $('#pages').css('display', 'none');
        }
    },
  }

}
</script>
<style scoped>
.table_container{
/*padding: 20px;*/
}
.excls{
  color: #fff;
background-color: #67c23a;
border-color: #67c23a;
display: inline-block;
line-height: 1;
white-space: nowrap;
cursor: pointer;
border: 1px solid #dcdfe6;
border-top-color: rgb(220, 223, 230);
border-right-color: rgb(220, 223, 230);
border-bottom-color: rgb(220, 223, 230);
border-left-color: rgb(220, 223, 230);
-webkit-appearance: none;
text-align: center;
-webkit-box-sizing: border-box;
box-sizing: border-box;
outline: 0;
margin: 0;
-webkit-transition: .1s;
transition: .1s;
font-weight: 500;
padding: 12px 20px;
font-size: 14px;
border-radius: 4px;
}
</style>
