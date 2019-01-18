<template>
  <div class="vbs">
    <h3 style='margin: 20px auto;text-align: left;'>宝贝列表</h3>
      <div style="margin: 18px auto;background: rgb(255, 255, 255) none repeat scroll 0% 0%;box-shadow: rgba(229, 229, 229, 0.5) 0px -2px 4px 0px;width: 100%;min-height: 32px;overflow: hidden;">
        <div style="overflow: hidden;padding: 0 20px;">
              <el-button type="text" class="fl">宝贝查询</el-button>
              <div class="clears"></div>
              <div>
                <el-row :gutter="24">
                  <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <span style="float: left;margin: 10px auto;font-size: 14px;">商品名称:</span>
                         <div style='width: 100%;display: block;overflow: hidden;'>
                          <el-input style="width:52%;float: left;" v-model="datas.goodsName" placeholder="请输入内容" size="small"></el-input>
                        </div>
                      </div>
                  </el-col>
                  <el-col :span="6">
                      <div class="grid-content bg-purple">
                          <span style="float: left;margin: 10px auto;font-size: 14px;">商品编码:</span>
                          <div style='width: 100%;display: block;overflow: hidden;'>
                             <el-input  style="width:52%;float: left;" v-model="datas.serial" placeholder="请输入内容" size="small"></el-input>
                          </div>
                      </div>
                  </el-col>
                  <el-col :span="6">
                     <div class="grid-content bg-purple">
                          <span style="float: left;margin: 10px auto;font-size: 14px;">价格:</span>
                          <div style="display: block;overflow: hidden;width: 100%;">
                            <el-input v-model="datas.leastPrice"  style="width:32%;" class="fl" size="small"></el-input>
                              <span style="float: left;line-height: 36px;font-size: 22px;">-</span>
                            <el-input v-model="datas.mostPrice"  style="width:32%;" class="fl" size="small"></el-input>
                          </div>
                      </div>
                  </el-col>
                </el-row>
              </div>
                        <el-button @click="search()" type="primary" style="margin: 20px auto;float: left;" size="small">搜索</el-button>
            </div>
       </div>
      <div class="clears"></div>
   		<el-table
      v-loading="loading"
    :data="tableData"
    border
    style="width: 100%;text-align: center;">
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
    style="text-align: center;"
      prop="goodsName"
      label="标题">
    </el-table-column>
    <el-table-column
    style="text-align: center;"
      prop="createDate"
      label="发布时间"
       >
    </el-table-column>
    <el-table-column
    style="text-align: center;"
      prop="price"
      label="价格"
      >
    </el-table-column>
     <el-table-column
    style="text-align: center;"
      prop="salenum"
      label="销量">
    </el-table-column>
    <el-table-column
    style="text-align: center;"
      prop="status"
       :formatter="format"
      label="状态">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        <!-- <el-button style="color: #F56C6C;" @click="delss(scope.row)" type="text" size="small">删除</el-button> -->
        <el-button  @click="dels(scope.row)" type="text" size="small">{{scope.row.status =='2' ? '上架' : '下架'}}</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
        background
        @current-change="currents"
        :total="total"
        :page-size='5'
        style="margin: 30px;"
        id="pages"
        layout="prev, pager, next"
        >
      </el-pagination>
  </div>
</template>

<script>

import { goodsList,goodsFindForUpdate,goodsUpdateStatus ,goodsUpdateStatuss,goodsUpdateStatusss} from '@/api/babyList'

export default {
  name: 'babyList',
     data() {
      return {
        loading:false,
        total:0,
        datas:{
          page:1,
          goodsName:'',//商品名称
          serial:'',//商家编码
          leastPrice:'',//最少价格
          mostPrice:'',//最多价格
        },
        imgurl:'https://kungshi.oss-cn-shenzhen.aliyuncs.com/',
        format : function (row, column, cellValue) {
            if (cellValue === "0"){
                return '销售中';
            }else if (cellValue === "1"){
                return '仓库中';
            }else if (cellValue === "2"){
                return '下架';
            }else if (cellValue === "3"){
                return '删除';
            }
        },
        tableData: [],
      }
    },
     methods: {
      async currents(row){
            this.loading=true;
            this.datas.page=row;
            const goodsLists = await goodsList(this.datas)
            const goodsListdata = await goodsLists.json();
             if(goodsListdata.statusCode==401){
                        this.$message('未登录');
                        this.$router.push('/Sign_in')
            }else if(goodsListdata.statusCode==200){
              this.tableData=goodsListdata.object;
            }
             this.loading=false;
      },
      async search(){
              this.loading=true;
              const goodsLists = await goodsList(this.datas)
              const goodsListdata = await goodsLists.json();
           if(goodsListdata.statusCode==401){
              this.$message('未登录');
              this.$router.push('/Sign_in')
               }else if(goodsListdata.statusCode==200){
              this.tableData=goodsListdata.object;
            }
            this.loading=false;
      },
      async delss(row){
          const data={version:row.version,id:row.id};
          const goodsLists=await goodsUpdateStatuss(data)
          const goodsListdata = await goodsLists.json();
          console.log("goodsListdata",goodsListdata)
          if(goodsListdata.statusCode==200){
             this.$notify({
                        title: '提示！',
                        message: goodsListdata.message,
                        type: 'success'
                      });
                     setTimeout(function(){  
                          window.location.reload();
                      },2000);
          }else if(goodsListdata.statusCode==401){
             this.$message('未登录');
            this.$router.push('/Sign_in')
          }
      },
      async dels(row){
        if(row.status=='0'){
                  const data={version:row.version,id:row.id};
                  const goodsLists=await goodsUpdateStatus(data)
                  const goodsListdata = await goodsLists.json();
                  if(goodsListdata.statusCode==200){
                      this.$notify({
                        title: '提示！',
                        message: goodsListdata.message,
                        type: 'success'
                      });
                     setTimeout(function(){  
                        window.location.reload();
                      },2000);
                  }else if(goodsListdata.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
                    }
        }
        if(row.status=='1'){
                   const data={version:row.version,id:row.id};
                  const goodsLists=await goodsUpdateStatus(data)
                  const goodsListdata = await goodsLists.json();
                  if(goodsListdata.statusCode==200){
                      this.$notify({
                        title: '提示！',
                        message: goodsListdata.message,
                        type: 'success'
                      });
                     setTimeout(function(){  
                        window.location.reload();
                      },2000);
                  }else if(goodsListdata.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
                    }
        }else if(row.status=='2'){
                  const data={version:row.version,id:row.id};
                  const goodsLists=await goodsUpdateStatusss(data)
                  const goodsListdata = await goodsLists.json();
                  if(goodsListdata.statusCode==200){
                       this.$notify({
                        title: '提示！',
                        message: goodsListdata.message,
                        type: 'success'
                      });
                      setTimeout(function(){  
                        window.location.reload();
                      },2000);
                  }else if(goodsListdata.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
                    }
        }
 
      },
     	async handleClick(row){
       $.cookie('ids', row.id); // 存储 cookie 
        this.$router.push('/edit_commodity')
       
     	},

   	 },
    async mounted () {
       this.loading=true;
        const goodsLists = await goodsList(this.datas)
      	const goodsListdata = await goodsLists.json();
             if(goodsListdata.statusCode==401){
                       this.$message('未登录');
                      this.$router.push('/Sign_in')
            }else if(goodsListdata.statusCode==200){
              this.tableData=goodsListdata.object;
              this.total=goodsListdata.total;
              if(this.total<5){
                $('#pages').css('display', 'none');
              }else{
                 $('#pages').css('display', 'block');
              }
            }
             this.loading=false;
  	},
      watch: {
              '$route': function (route,b) {
              if(route.path=='/babyList'  && b.path=='/edit_commodity'){
                   location.reload()
              }
          },
      }
}
</script>

<style  scoped>

</style>
