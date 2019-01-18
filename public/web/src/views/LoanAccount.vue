<template>
  <div class="LoanAccounts">
      <div class="box_LoanAccount">
          <el-row>
            <el-col :span="3">
              <div class="grid-content bg-purple">
               <h3 class="fl">贷款账户</h3>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple-light">
               <span class="fl" style='font-size: 12px;line-height: 36px;'>查看收支明细</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple-light">
                提现中
              </div>
            </el-col>
          </el-row>
          <el-row style='margin: 9px auto;'>
            <el-col :span="3">
              <div class="grid-content bg-purple">
               <h3 >{{datas.withDrawalMoney}}元</h3>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple-light">
                <el-button size='mini' class='fl' @click='CashWithdrawalfn'>提现</el-button>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple-light">
               {{datas.accountMoney}}元
              </div>
            </el-col>
          </el-row>
          <span class="BankCardManagement"  @click='routers'>银行卡管理</span>
      </div>
      <h5 class="fl" style="margin-bottom: 12px;margin-left: 13px;">提现记录共查询到11条数据 </h5>
        <el-table
      :data="tableDatas"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="name"
        label="提现类型">
      </el-table-column>
       <el-table-column
        prop="name"
        label="提现金额">
      </el-table-column>
       <el-table-column
        prop="name"
        label="技术服务费">
      </el-table-column>
       <el-table-column
        prop="name"
        label="收款账户">
      </el-table-column>
       <el-table-column
        prop="name"
        label="提现状态">
      </el-table-column>
       <el-table-column
        prop="name"
        label="说明">
      </el-table-column>
    </el-table>
    <h5 class="fl" style="margin: 13px;">收支明细查看全部</h5>
            <el-table
      :data="tableData"
      style="width: 100%;text-align: center;">
      <el-table-column
       style="text-align: center;"
        prop="createDate"
        label="入账时间">
      </el-table-column>
      <el-table-column
        prop="orderId"
        label="商户订单号">
      </el-table-column>
       <el-table-column
        prop="accountType"
        :formatter="returnStatussas"
        label="账务类型">
      </el-table-column>
       <el-table-column
        prop="price"
        label="收支金额(元)">
      </el-table-column>
       <el-table-column
        prop="name"
        label="备注">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import { accountDetailList ,storeQueryAccountlnfo} from '@/api/LoanAccount'

export default {
  name: 'LoanAccount',
     data() {
      return {
          tableData:[],
          tableDatas:[],
          datas:{
            withDrawalMoney:0,
            accountMoney:0
          },
          returnStatussas : function (row, column, cellValue) {
            if (cellValue === 1){
                return '交易收入';
            }else if (cellValue === 2){
                return '提现';
            }else if (cellValue === 3){
                return '技术服务费';
            }else if (cellValue === 4){
                return '退款 ';
            }
        },
      }
    },
     methods: {
        CashWithdrawalfn(){
            this.$router.push('CashWithdrawal')
        },
        routers(){
          this.$router.push('BankCardManagement')
        },

   	 },
    async mounted () {
         const response = await accountDetailList()
         const responseJson = await response.json();
         if(responseJson.statusCode == 200) {
          this.tableData=responseJson.object;
         }
          const responses = await storeQueryAccountlnfo()
         const responsesJson = await responses.json();
         if(responsesJson.statusCode == 200) {
          this.datas=responsesJson.object;
         }
  	},
      watch: {
        
      }
}
</script>

<style  scoped>
.box_LoanAccount{
  background-color: #fff;

padding: 20px;

margin: 20px auto;
position: relative;
}
.BankCardManagement{
  top: 10px;

right: 19px;

position: absolute;

font-size: 14px;
color: #337ab7 !important;
cursor: pointer;
}
</style>
