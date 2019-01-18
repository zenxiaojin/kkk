<template >
    <div class="Coupons">
        <el-dialog title="商品列表" :visible.sync="dialogVisible" >
              <el-table
                ref="multipleTable"
                :data="restaurants"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column

                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                      style="text-align: center;"
                        prop="mainPhoto"
                        label="主图"
                        >
                        <template slot-scope="scope">
                        <img  :src="imgurl+scope.row.mainPhoto" alt="" style="width: 50px;height: 50px;">
                        <!-- <span class="fl" style="display: contents;">{{scope.row.goodsName}}</span> -->
                      </template>
                  </el-table-column>
                <el-table-column
                  prop="goodsName"
                  label="商品名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格"
                  width="120">
                </el-table-column>
              </el-table>
        </el-dialog>



                <el-dialog title="商品列表" :visible.sync="dialogsVisibles"  >
              <el-table
                ref="multipleTable"
                :data="restaurants"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChangess">




                <el-table-column
                style="text-align: center;"
                  label="选择"
                  >
                  <template slot-scope="scope">

                     <el-checkbox v-for='(init,index) in restaurants' :key='index'  v-if='init.id==onlinemodification[scope.$index]' :disabled="init.id==onlinemodification[scope.$index]" v-model="trues"  ></el-checkbox>
              
                
                </template>
                </el-table-column>

                <el-table-column
                      style="text-align: center;"
                        prop="mainPhoto"
                        label="主图"
                        >
                        <template slot-scope="scope">
                        <img  :src="imgurl+scope.row.mainPhoto" alt="" style="width: 50px;height: 50px;">
                        <!-- <span class="fl" style="display: contents;">{{scope.row.goodsName}}</span> -->
                      </template>
                </el-table-column>
                <el-table-column
                  prop="goodsName"
                  label="商品名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格"
                  width="120">
                </el-table-column>
              </el-table>
        </el-dialog>

          <el-dialog title="修改优惠劵" :visible.sync="dialogaddersd" >
                      <h4 style='text-align: left;margin: 20px auto;'>基本信息:</h4>
          <el-form :model="modifyCoupons_data" ref="modifyCoupons_data"  label-width="150px"  class="demo-ruleForm"  >
            <el-form-item 
                label="优惠券名称:"  
                prop="name" 
                :rules="[
                    { required: true, message: '优惠券名称不能为空'},
                    { type: 'string', message: '优惠券名称必须为字符串'}
                  ]">
                  <el-input type="name" v-model.string="modifyCoupons_data.name" size="small"   style="width: 188px;float: left;" ></el-input>
            </el-form-item>
             <el-form-item 
                style='float: left;'
                label="优惠劵类型:"  
                prop="type" 
                :rules="[
                    { required: true, message: '优惠劵类型不能为空'},
                    { type: 'string', message: '优惠劵类型必须为字符串'}
                  ]">
                   <el-radio-group v-model="modifyCoupons_data.type" >
                      <el-radio disabled  label="0">店铺优惠券</el-radio>
                    <el-radio disabled  label="1">商品优惠券</el-radio>
                  </el-radio-group>
            </el-form-item>

            <el-form-item 
             style='float: left;'
                label="开始时间:"  
                prop="beginTime" 
                :rules="[
                    { required: true, message: '开始时间不能为空'},
                    { type: 'string', message: '开始时间必须为字符串'}
                  ]">
                            <el-date-picker
                              v-model="modifyCoupons_data.beginTime"
                              type="date"
                              placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd">
                            </el-date-picker>
            </el-form-item>

            <!-- <div class="clears"></div> -->
             <el-form-item 
             style='float: left;'
                label="结束时间:"  
                prop="endTime" 
                :rules="[
                    { required: true, message: '结束时间不能为空'},
                    { type: 'string', message: '结束时间必须为字符串'}
                  ]">
                          <el-date-picker
                              v-model="modifyCoupons_data.endTime"
                              type="date"
                              placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                            </el-date-picker>
                     
            </el-form-item>

            <el-form-item 
            v-if='modifyCoupons_data.type=="1"'
             style='float: left;'
                label="可以使用的商品:"  
                >
    
                                <el-tag 
                                style="display: block;margin: 13px auto;"
                                v-for='(init,index) in restaurants' 
                                :key='index' 
                                v-if='init.id==onlinemodification[index]'>
                                  {{init.goodsName}}
                                </el-tag>

                                  <div class="clears"></div>
                                <el-button class='fl' type="text" @click="dialogsVisibles = true">选择或修改</el-button>
                     
            </el-form-item>


            <div class="clears"></div>
                      <h4 style='text-align: left;margin: 20px auto;margin-left: 50px;'>面额信息:</h4>
            <div class="clears"></div>
            <el-form-item 
             style='float: left;'
                label="每人限领数量:"  
                prop="limit" 
                :rules="[
                    { required: true, message: '每人限领数量不能为空'},
                   
                  ]">
                <el-input v-model.string="modifyCoupons_data.limit"  placeholder="请输入内容"  size="small"></el-input>
            </el-form-item>
            <el-form-item 
             style='float: left;'
                label="优惠劵金额:"  
                prop="amount" 
                :rules="[
                    { required: true, message: '优惠劵金额不能为空'},
                    { type: 'number', message: '优惠劵金额必须为数字值'}
                  ]">
                         <el-input v-model.number="modifyCoupons_data.amount"  placeholder="请输入内容"  size="small"></el-input>
                     
            </el-form-item>
            <el-form-item 
             style='float: left;'
                label="优惠券数量:"  
                prop="count" 
                :rules="[
                    { required: true, message: '优惠券数量不能为空'},
                    { type: 'number', message: '优惠券数量必须为数字值'}
                  ]">
                         <el-input v-model.number="modifyCoupons_data.count"  placeholder="请输入内容"  size="small"></el-input>
                     
            </el-form-item>
            <el-form-item 
             style='float: left;'
                label="满多少金额可使用:"  
                prop="amountAvailable" 
                :rules="[
                    { required: true, message: '满多少金额可使用不能为空'},
                    { type: 'number', message: '满多少金额必须为数字值'}
                  ]">
                         <el-input v-model.number="modifyCoupons_data.amountAvailable"  placeholder="请输入内容"  size="small"></el-input>
                     
            </el-form-item>
            <div class="clears"></div>
               <el-form-item>
                  <el-button type="primary" size="small" style='margin: 20px auto;' @click='Preservation("modifyCoupons_data")' >保存</el-button>
                       <el-button size="small" style='margin: 20px;' @click='dialogaddersd=false'>取消</el-button>
                </el-form-item>
                </el-form>
          </el-dialog>

       <div v-if='createCoupons'>
      <h4 style='text-align: left;margin: 20px;'>创建优惠劵</h4>
      <h4 style='text-align: left;margin: 20px auto;margin-left: 50px;'>基本信息:</h4>
                <el-form :model="data_json" ref="data_json"  label-width="200px"  class="demo-ruleForm"  >
            <el-form-item 
                label="优惠券名称:"  
                prop="name" 
                :rules="[
                    { required: true, message: '优惠券名称不能为空'},
                    { type: 'string', message: '优惠券名称必须为字符串'}
                  ]">
                  <el-input type="name" v-model.string="data_json.name" size="small"   style="width: 188px;float: left;" ></el-input>
            </el-form-item>
          <div class="clears"></div>        
             <el-form-item 
                style='float: left;'
                label="优惠劵类型:"  
                prop="type" 
                :rules="[
                    { required: true, message: '优惠劵类型不能为空'},
                    { type: 'string', message: '优惠劵类型必须为字符串'}
                  ]">
                   <el-radio-group v-model="data_json.type" >
                      <el-radio   label="0">店铺优惠券</el-radio>
                    <el-radio   label="1">商品优惠券</el-radio>
                  </el-radio-group>
            </el-form-item>
          <div class="clears"></div>                        
            <el-form-item 
             style='float: left;'
                label="开始时间:"  
                prop="beginTime" 
                :rules="[
                    { required: true, message: '开始时间不能为空'},
                    { type: 'string', message: '开始时间必须为字符串'}
                  ]">
                            <el-date-picker
                              v-model="data_json.beginTime"
                              type="date"
                              placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd">
                            </el-date-picker>
            </el-form-item>

          <div class="clears"></div>        <!-- <div class="clears"></div> -->
             <el-form-item 
             style='float: left;'
                label="结束时间:"  
                prop="endTime" 
                :rules="[
                    { required: true, message: '结束时间不能为空'},
                    { type: 'string', message: '结束时间必须为字符串'}
                  ]">
                          <el-date-picker
                              v-model="data_json.endTime"
                              type="date"
                              placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                            </el-date-picker>
                     
            </el-form-item>
          <div class="clears"></div>
            <el-form-item 
            v-if='data_json.type=="1"'
             style='float: left;'
                label="可以使用的商品:"  
                >
                          
                              <div v-if='!goodsThatCanBeUsed.length==0' v-for='(init,index) in goodsThatCanBeUsed'>
                                  <el-input
                                    style='width:60%;float: left;margin: 10px auto;'
                                    placeholder="请输入内容"
                                    v-model="init.goodsName"
                                    size="small"
                                    :disabled="true">
                                  </el-input>
                              </div>

                                <el-button class='fl' type="text" @click="dialogVisible = true">选择与修改</el-button>


                     
            </el-form-item>


            <div class="clears"></div>
                      <h4 style='text-align: left;margin: 20px auto;margin-left: 50px;'>面额信息:</h4>
            <div class="clears"></div>
            <el-form-item 
             style='float: left;'
                label="每人限领数量:"  
                prop="limit" 
                :rules="[
                    { required: true, message: '每人限领数量不能为空'},
                    { type: 'number', message: '每人限领数量必须为数字值'}
                  ]">
                         <el-input v-model.number="data_json.limit"  placeholder="请输入内容"  size="small"></el-input>
                     
            </el-form-item>
        <div class="clears"></div>        
            <el-form-item 
             style='float: left;'
                label="优惠劵金额:"  
                prop="amount" 
                :rules="[
                    { required: true, message: '优惠劵金额不能为空'},
                    { type: 'number', message: '优惠劵金额必须为数字值'}
                  ]">
                         <el-input v-model.number="data_json.amount"  placeholder="请输入内容"  size="small"></el-input>
                     
            </el-form-item>
            <div class="clears"></div>        
            <el-form-item 
             style='float: left;'
                label="优惠券数量:"  
                prop="count" 
                :rules="[
                    { required: true, message: '优惠券数量不能为空'},
                    { type: 'number', message: '优惠券数量必须为数字值'}
                  ]">
                         <el-input v-model.number="data_json.count"  placeholder="请输入内容"  size="small"></el-input>
                     
            </el-form-item>
            <div class="clears"></div>        
            <el-form-item 
             style='float: left;'
                label="满多少金额可使用:"  
                prop="amountAvailable" 
                :rules="[
                    { required: true, message: '满多少金额可使用不能为空'},
                    { type: 'number', message: '满多少金额必须为数字值'}
                  ]">
                         <el-input v-model.number="data_json.amountAvailable"  placeholder="请输入内容"  size="small"></el-input>
                     
            </el-form-item>
            <div class="clears"></div>
               <el-form-item style="float: left;">
                  <el-button type="primary" size="small" style='margin: 20px auto;' @click='Coupons_data("data_json")' >创建</el-button>
                       <el-button size="small" style='margin: 20px;' @click='createCoupons=false'>取消</el-button>
                </el-form-item>
                </el-form>
      </div>



      <div v-if='!createCoupons'>
        <h4 style='text-align: left;margin: 20px auto;'>优惠劵列表</h4>
         <el-button  type="primary" size="small" style='float: left;margin: 20px auto;' @click='createCoupons=true'>新增优惠劵</el-button>
         <el-table
          :data="tableData"
          class='Coupon_s'  
          style="width: 100%;text-align: center;"
          >
           <el-table-column
            prop="name"
            label="优惠券名称">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="优惠券金额">
          </el-table-column>
          <el-table-column
            prop="beginTime"
            label="开始时间">
          </el-table-column>
          <el-table-column
            prop="endTime"
            label="结束时间">
          </el-table-column>
          <el-table-column
            prop="limit"
            label="每人限领">
          </el-table-column>
           <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="ModifyCoupons(scope.row);dialogaddersd=true;" type="text" size="small">修改</el-button>
              <el-button type="text" size="small" @click='couponDeletes_a(scope.row)'>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>


      <div v-if='false'>{{sss}}</div>
    </div>
</template>

<script>

import { couponAdd , goodsLists , couponList , couponUpdate , couponDelete , couponDetail} from '@/api/Coupons';

export default {
  name: 'Coupons',
  data () {
    return {
      trues:true,
      indexMethod:'',
      pushbox:[],
      dialogsVisibles:false,
      imgurl:'https://kungshi.oss-cn-shenzhen.aliyuncs.com/',
      dialogVisible:false,
      nutton:true,
      goodsThatCanBeUsed:[],
      onlinemodification:[],
      goods_that_can_be_used:null,
      loading:false,
      dialogaddersd:false,
      modifyCoupons_data:{
          type:'',
          id:'',
          amount:'',
          beginTime:'',
          count:'',
          endTime:'',
          name:'',
          amountAvailable:'',
          goods:[],
          limit:'',
          version:''
      },
      tableData:[],
      createCoupons:false,
      datas:{
          page:'1',
          goodsName:'',//商品名称
          serial:'',//商家编码
          leastPrice:'',//最少价格
          mostPrice:'',//最多价格
        },
        goods_s:[],
        restaurants: [],
        state: '',
        data_json:{
          type:'',
          amount:'',
          beginTime:'',
          count:'',
          endTime:'',
          name:'',
          amountAvailable:'',
          goods:[],
          limit:'',

        },
        sss:[],
        asp:0,
    }
  },
  methods: {
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
    handleSelectionChange(row){
      this.goodsThatCanBeUsed=row;
      console.log("row",row)
    },
    handleSelectionChangess(row){
      console.log("this,pushbox",this.pushbox)
      this.onlinemodification=[];
      for(var i=0;i<row.length;i++){
          this.onlinemodification.push(row[i].id)
      }
      this.sss.push("asdasd")
      console.log("roweqwq3qew",this.onlinemodification)
    },
    async couponDeletes_a(row){
      console.log("row",row)
         const goodsLists=await couponDelete(row)
          const goodsListdata = await goodsLists.json();
          if(goodsListdata.statusCode==200){
              this.$notify({
                        title: '提示！',
                        message: '删除成功！！！',
                        type: 'success'
                      });
                     setTimeout(function(){  
                        window.location.reload();
                      },2000);
          }
    },
    async Preservation(formName){
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
                }

      this.modifyCoupons_data.goods=[];
          if(this.onlinemodification.length!==0){
                for(var i=0;i<this.onlinemodification.length;i++){
                      this.modifyCoupons_data.goods.push(this.onlinemodification[i])
                }
            }else{
                 this.modifyCoupons_data.goods=[];
            }
            this.modifyCoupons_data.goods=JSON.stringify(this.modifyCoupons_data.goods);
            if(this.modifyCoupons_data.type=='0'){
                    this.modifyCoupons_data.goods=[];
              }
          const goodsLists=await couponUpdate(this.modifyCoupons_data)
          const goodsListdata = await goodsLists.json();
          if(goodsListdata.statusCode==200){
              this.$notify({
                        title: '提示！',
                        message: '修改成功！！！',
                        type: 'success'
                      });
                     setTimeout(function(){  
                        window.location.reload();
                      },2000);
          }


    },
    async ModifyCoupons(row){
        this.onlinemodification=[];
        this.modifyCoupons_data=row;
        // this.goods_that_can_be_used=JSON.parse(this.modifyCoupons_data.goods);
            const goodsList_a = await couponDetail(row.id)
            const goodsListdata = await goodsList_a.json();
           if(goodsListdata.statusCode==401){
             this.$message('未登录');
            this.$router.push('/Sign_in')
            }else if(goodsListdata.statusCode==200){
                this.data_a = goodsListdata.object;
               this.onlinemodification= this.data_a.goods.split(',');
               this.onlinemodification=this.onlinemodification.map(Number)
               console.log(this.onlinemodification)

            }
    },
        dels(index){
          this.goods_s.splice(index, 1); 
        },
        dels_a(index){
             this.goodsThatCanBeUsed.splice(index, 1); 
        },
       async Coupons_data(formName){
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
                }
                console.log("goodsThatCanBeUsed",this.goodsThatCanBeUsed)
            if(this.goodsThatCanBeUsed.length!==0){
                for(var i=0;i<this.goodsThatCanBeUsed.length;i++){
                      this.data_json.goods.push(this.goodsThatCanBeUsed[i].id)
                }
            }else{
                 this.data_json.goods=[];
            }
            // this.data_json.goods=JSON.stringify(this.data_json.goods);
            if(this.data_json.type=='0'){
                    this.data_json.goods=[];
              }
            
          const goodsLists=await couponAdd(this.data_json)
          const goodsListdata = await goodsLists.json();
          if(goodsListdata.statusCode==200){
              this.$notify({
                        title: '提示！',
                        message: '创建成功！！！',
                        type: 'success'
                      });
                     // setTimeout(function(){  
                     //    window.location.reload();
                     //  },2000);
          }
        },
        querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        this.goods_s.push(item);
        console.log(item);
      },
      handleSelect_a(item){
           this.goodsThatCanBeUsed.push(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    directives:{
          trigger:{
           inserted(el,binging){
              el.click()
             //$(el).trigger('click');
            }
         },
      },
   async mounted () {
            const goodsList_a = await goodsLists(this.datas)
            const goodsListdata = await goodsList_a.json();
           if(goodsListdata.statusCode==401){
             this.$message('未登录');
            this.$router.push('/Sign_in')
            }else if(goodsListdata.statusCode==200){
                this.restaurants = goodsListdata.object;
                console.log("this.restaurants",this.restaurants)
            }
            

        const couponList_data = await couponList(1)
        const couponList_json = await couponList_data.json();
         if(couponList_json.statusCode==200){
             this.tableData=couponList_json.object;
        }

        
        
  },
  watch : {
      'data_json.type':function (a,b) {
        
      }
  }

}
</script>
<style scoped>
.coupont{
  margin: 20px auto;
}
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
