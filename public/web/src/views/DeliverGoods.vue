<template >
    <div  v-loading="loading">
    <el-dialog title="选择发货公司" :visible.sync="dialogaddersd" @close="guanbi" >
          <el-table
                v-loading="loading"
                :data="ConsignmentCompany"
                border
                highlight-current-row
                style="width: 100%">
                <el-table-column
                  type="index"
                  width="100">
                </el-table-column>
                <el-table-column
                  property="companyName"
                  label="物流公司">
                </el-table-column>
                <el-table-column
                   property="companyType"
                  :formatter="formatSex"
                  label="类型">
                </el-table-column>
               
                 <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                      <el-button id="Frozen"  type="text" size="small" @click="entSAM(scope.row);dialogaddersd = false">选择</el-button>
                    </template>
                  </el-table-column>
            </el-table>
            <el-pagination
                background
                layout="prev, pager, next"
                @current-change="currentA"
                :total="total"
                style="margin: 30px;display:none;"
                id="pages"
              >
            </el-pagination>
      </el-dialog>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="待发货" name="first">
        <div v-for='inis in tableData' style='border: 1px solid #cfcfcf;margin: 38px auto;'>
          <div class="Ordernumber">
          <span class='fl'>订单号:{{inis.orderId}}</span>
          <span class='fl' style='margin: 0 52px;'>创建时间:{{inis.createDate}}</span>
        </div>
        <div class='clears'></div>
       <div v-for='init in inis.detail'  class='table_box'>
        <table cellpadding="0" cellspacing="0"  style='width: 100%;'>
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
              {{inis.orderStatus}}
            </td>
            <td>
              {{inis.totalPrice}}
            </td>
            <td>
              <el-button type="primary" @click='DeliverGoods_a(inis);dialogaddersd=true;'>发货</el-button>
            </td>
          </tr>
        </table>
        </div>
        </div>
          <div v-if='tableData.length==0' style="text-align: left;margin: 20px auto;">暂无需要发货的商品</div>
        </el-tab-pane>
        <el-tab-pane label="已收货" name="second">
          <div style="text-align: left;margin: 20px auto;">暂无已收货商品</div>
        </el-tab-pane>
  </el-tabs>
    </div>
</template>
<script>
import { orderList ,expressAdminList ,orderSinglelmport} from '@/api/DeliverGoods'
export default {
  name: 'DeliverGoods',
  data () {
    return {
      total:'',
      ConsignmentCompany:[],
      loading:false,
      dialogaddersd:false,
       activeName: 'first',
       labelPosition: 'left',
       tableData:[],
       data_:{
        orderId:'',
        shipCompany:'',
        shipCompanyId:'',
        shipCode:'312312312312'
       }
    }
  },
  methods: {
    async currentA(row){
        $('#pages').css('display', 'none');
          this.loading=true;
          this.ConsignmentCompany=[];
         const response = await expressAdminList(row)
        const datatable =await  response.json();
        this.ConsignmentCompany=datatable.object;
        if(datatable.statusCode==200){
           $('#pages').css('display', 'block');
           this.total=datatable.total;
          this.loading=false;
        }
    },
      async entSAM(row){
         this.data_.shipCompany=row.companyName;
        this.data_.shipCompanyId=row.id;
         const response = await orderSinglelmport(this.data_)
        const datatable =await  response.json();    
        if(datatable.statusCode==200){
            this.$router.push('Orderlist')
        }
      },
      async DeliverGoods_a(row){
          $('#pages').css('display', 'none');
          this.data_.orderId=row.orderId;
          this.loading=true;
          this.ConsignmentCompany=[];
         const response = await expressAdminList(1)
        const datatable =await  response.json();
        this.ConsignmentCompany=datatable.object;
        if(datatable.statusCode==200){
           $('#pages').css('display', 'block');
           this.total=datatable.total;
          this.loading=false;
        }
      },
      handleChange (row) {
       
      },
       handleClick(tab, event) {

      },
      async fromdata () {
        const isLoginAJS = await sellerReturnAddressAdd(this.formLabelAlign)
         const isLoginA = await isLoginAJS.json();
      },
    },
    async mounted () {
      this.loading=true;
       const isLoginAJS = await orderList()
      const isLoginA = await isLoginAJS.json();
      if(isLoginA.statusCode==200){
             this.tableData=isLoginA.object

             this.loading=false;
      }
  },
  watch: {

  }
    

    

}
</script>
<style scoped>
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
