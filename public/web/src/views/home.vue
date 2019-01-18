<template >
    <div class="homebox">
    	<el-container class="contera">
        <el-header class="heads">
          <div class="logos">空试商家管理系统</div>
          <el-menu :default-active="defaultActive"  class="el-menu-demo  headAS" mode="horizontal" >
            <el-menu-item index="312321">处理中心</el-menu-item>
            <el-submenu index="1231">
              <template slot="title">我的工作台</template>
              <el-menu-item index="123">选项1</el-menu-item>
              <el-menu-item index="asds">选项2</el-menu-item>
              <el-menu-item index="dsada">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" >消息中心</el-menu-item>
            <el-menu-item index="4"><a href="http://localhost:8080/#/Coupons" target="_blank">优惠劵管理</a></el-menu-item>
          </el-menu>
            <el-dropdown @command="handleCommand" style="float: right;line-height: 60px;color:#fff;font-weight: 600;">
              <span class="el-dropdown-link">
                {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-container>
          <el-aside width="200px" class="centers">
            <el-row> 
              <el-col>
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  router>
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>物流管理</span>
                    </template>
                      <el-menu-item index="LogisticsTools">物流工具</el-menu-item>
                       <!-- <el-menu-item index="DeliverGoods">发货地址</el-menu-item> -->
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-goods"></i>
                      <span>宝贝管理</span>
                    </template>
                      <el-menu-item index="EditGoods">发布宝贝</el-menu-item>
                       <el-menu-item index="babyList">宝贝列表</el-menu-item>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-printer"></i>
                      <span>发货管理</span>
                    </template>
                      <el-menu-item index="Orderlist">订单查询</el-menu-item>
                       <el-menu-item index="DeliverGoods">发货</el-menu-item>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-success"></i>
                      <span>账户资金</span>
                    </template>
                      <el-menu-item index="LoanAccount">货款账户</el-menu-item>
                  </el-submenu>
                  <el-menu-item index="AfterSale">
                    <i class="el-icon-service"></i>
                    <span slot="title">售后管理</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>
              <keep-alive>
                  <router-view style="background-color: #F7F8FA;width: calc(100% - 200px);float: right;margin-top: 40px;"></router-view>
              </keep-alive>
          </el-main>
        </el-container>
    </el-container>
    </div>
</template>

<script>
import { Exitlogon , isLogin ,storeApplyApplyStatus } from '@/api/Sign_in'

export default {
  name: 'home',
  data () {
    return {
        username:'',
       
    }
  },
  methods: {
    async handleCommand() {
        const response = await Exitlogon()
         const responseJson = await response.json();
         if(responseJson.statusCode == 200) {
           this.$message('退出成功');
           this.$router.push('/Sign_in')
         }
      },
     async isLoginFN() {
        // const isLoginAJS = await isLogin()
        //  const isLoginA = await isLoginAJS.json();
        //   if(isLoginA.statusCode==401){
        //        this.$message('未登录');
        //       this.$router.push('/Sign_in')
        //   }else if(isLoginA.statusCode==404){
        //     this.$router.push('/404')
        //   }
      },
    },
  computed: {
      defaultActive: function(){
        return this.$route.path.replace('/', '');
      }
  },
    mounted () {
         this.username=$.cookie('username');
          this.isLoginFN();
          var userobj=$.cookie('userobj');
          var sent=JSON.parse(userobj);
          if(sent.storeId==null){
            this.$router.push('/Shop')
          } 
  },
}
</script>
<style scoped>
.logos{
  float: left;
  line-height: 60px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}
.heads{
  background: #008ae5;
  color: #fff;
  height: 60px;
position: fixed;
width: 100%;
z-index: 1999;
}
.centers{
  border-right: 1px solid gainsboro;
  width: 200px;
height: 100%;
position: fixed;
top: 60px;
background-color: #fff;
}
.homebox{
  height: 100%;
}
.contera{
  height: 100%;
}
.headAS{
  position: absolute;
  left: 200px;
  background: #008ae5;
}
.headAS li {
  color: #fff;
}
</style>
