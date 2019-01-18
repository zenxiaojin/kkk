<template >
<div>
  <div style="margin: 18px auto;background: #fff;box-shadow: 0 -2px 4px 0 rgba(229,229,229,.5);width: 100%;min-height: 32px;padding-bottom: 24px;">
    <h3 style="text-align: center;padding: 20px;padding: 20px;">新建商品</h3>
    <h4 style="text-align: left;padding: 20px;">商品基本信息</h4>
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;">商品分类:</p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <p style="text-align: left;margin: 0 30px;float: left;">{{(namea !=='' ? (namea+'>') : namea) +(nameb !=='' ? (nameb+'>') : nameb)+namec}}</p>
          <p style="float: left;color:#008ae5;cursor: pointer;" @click="go">修改分类</p>
        </div>
      </el-col>
    </el-row>
    <el-row style="line-height: 40px;line-height: 40px;margin: 10px auto;">
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;"><span style="color: #f60;margin: 2px;">*</span>商品标题:</p>
        </div>
      </el-col>
      <el-col :span="21">
         <div class="grid-content bg-purple-light" style="width: 100%;float: left;margin: 0 30px;">
            <el-input style='width: 34%;float: left;margin-left: 28px;' v-model="CommodityTitle"  placeholder="请输入商品标题"></el-input>
            <p id='titles' style='font-size: 13px;display: none;text-align: left;color: #c00;float: left;margin-left: 50px;'>标题不能为空！！！</p>
        </div>
      </el-col>
    </el-row>
     <el-row style="line-height: 40px;line-height: 40px;margin: 10px auto;">
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;">类目属性:</p>
        </div>
      </el-col>
      <el-col :span="21"  class="fl">
        <div class="grid-content bg-purple-light  CategoryAttributebox" style="width: 800px;float: left;margin: 0 30px;">
            <div>
                <div class="grid-content bg-purple-dark  CategoryAttribute">
                      <span class="fl"><span style="color: #f60;margin: 2px;">*</span>品牌</span><el-select   v-model="postsdata.brandId" placeholder="请选择">
                        <el-option
                          v-for="iniu in propertys"
                          :key="iniu.value"
                          :label="iniu.name"
                          :value="iniu.id">
                        </el-option>
                      </el-select>
              </div>
            </div>
            <div   v-for="(init,index) in obj2"  :key="index">
             <div  v-if="init.valueType=='0'? true : false" :span="12" >
                <div class="grid-content bg-purple-dark  CategoryAttribute">
                      <span class="fl"><span v-if='init.isRequire ==0' style="color: #f60;margin: 2px;">*</span>{{init.name}}</span><el-input v-model="valData[index]"  placeholder="请输入内容"></el-input>
                </div>
              </div>


              <div v-if="init.valueType=='2'? true : false" :span="12" >
                <div class="grid-content bg-purple-dark  CategoryAttribute">
                      <span class="fl"><span v-if='init.isRequire ==0' style="color: #f60;margin: 2px;">*</span>{{init.name}}</span>
                      <div>



                        <el-checkbox-group v-model="cent" @change="handleCheckedCitiesChange">
                          <el-checkbox v-for="(inia) in init.property" :label="inia.id" :key="index">{{inia.value}}</el-checkbox>
                        </el-checkbox-group>


                      </div>
                      
                </div>
              </div>
              <div  v-if="init.valueType=='3' ? true : false" :span="12" >
              <div class="grid-content bg-purple-dark  CategoryAttribute">
                    <span class="fl"><span v-if='init.isRequire ==0' style="color: #f60;margin: 2px;">*</span>{{init.name}}</span><el-select   v-model="valData[index]" placeholder="请选择">
                      <el-option
                        v-for="item in init.property"
                        :key="item.value"
                        :label="item.value"
                        :value="item.id">
                      </el-option>
                    </el-select>
              </div>
            </div>
             
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div style="margin: 18px auto;background: #fff;box-shadow: 0 -2px 4px 0 rgba(229,229,229,.5);width: 100%;min-height: 32px;padding-bottom: 24px;">
    <h4 style="text-align: left;padding: 20px;">商品销售信息</h4>
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;">商品规格:</p>

        </div>
      </el-col>
    </el-row>
    <el-row style="display: contents;" v-for="(init,index) in colorname"  :key="index">
      <el-col :span="3">

        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;">&nbsp;</p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color">
              <p v-if='index==0 ? true : false' class="A1-describe">最多添加两个商品规格，第一个商品规格可添加规格图片</p>
              <h5 class="A1-title" >{{init.name}}</h5>
              <div v-if="index==0 ? true : false">
                <el-input  class="spes dsply"  style="width: 22%;height: 30px;margin: 0;float: left;" v-model="Specifications" placeholder="请输入内容"></el-input>


                    <form style="overflow: hidden;cursor: pointer;position: absolute;top: 0;" id="UploadApicture" method="post" enctype ="multipart/form-data"> 
                           <input type="text" name="pathKey" value="goods" style="display:none;"> 
                          <input id="UploadApictures" style="cursor: pointer;float: left;opacity: 0;" type="file" name="files" @change="UploadApicture_json" /> 
                    </form>



                    <form style="overflow: hidden;cursor: pointer;position: absolute;top: 0;" id="index_img1" method="post" enctype ="multipart/form-data"> 
                           <input type="text" name="pathKey" value="goods" style="display:none;"> 
                          <input id="index_img2" style="cursor: pointer;float: left;opacity: 0;" type="file" name="files" @change="index_img" /> 
                    </form>


              
                <img v-if="images"   :src="imgurl+images+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="max-width: 100%;width: 30px;float: left;margin-left: 19px;height: auto;" />
                 <el-button   v-if='init.isImg=="0" ? true : false' type="primary" size='small'  style='margin: 0 20px;height: 29px;'  @click='UploadApicture'>上传图片</el-button>
                <span  class="add dsply" @click="add(init)">添加</span>
                <div class='clears'></div>
                <div class="addval  Aer" v-for="(inits,index) in objadd">

                  <el-input
                  size='small'
                  style='float: left;width:auto;'
                    placeholder="请输入内容"
                    @change='objadda1'
                    v-model="inits.propertyValue"
                    >
                  </el-input>

                  <img v-if="salesAttributes1[index].img"  @click="imageindex(index)" :src="imgurl+salesAttributes1[index].img+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="width: 32px;float: left;height: auto;margin-left: 20px;" />
                  
                 
                  <div v-if="!salesAttributes1[index].img && init.isImg=='0' ? true : false"  class="button_data el-icon-plus avatar-uploader-icon"  @click="imageindex(index)"></div>

                   <el-button style='float: left;margin: 0 20px;' size='small' type="danger" plain   @click="dellist1(index,inits)">删除</el-button>

                </div>







                 
              </div>

              <div v-if="index==1 ? true : false">
                <el-input class="spes dsply"  style="width: 22%;height: 30px;margin: 0;float: left;" v-model="Specifications2" placeholder="请输入内容"></el-input>




                      <form style="overflow: hidden;cursor: pointer;position: absolute;top: 0;" id="UploadApicture22" method="post" enctype ="multipart/form-data"> 
                           <input type="text" name="pathKey" value="goods" style="display:none;"> 
                          <input id="UploadApictures22" style="cursor: pointer;float: left;opacity: 0;" type="file" name="files" @change="UploadApicture_json22" /> 
                    </form>



                    <form style="overflow: hidden;cursor: pointer;position: absolute;top: 0;" id="UploadApicture2" method="post" enctype ="multipart/form-data"> 
                           <input type="text" name="pathKey" value="goods" style="display:none;"> 
                          <input id="UploadApicture2s" style="cursor: pointer;float: left;opacity: 0;" type="file" name="files" @change="UploadApicture_json2" /> 
                    </form>


                <img v-if="images2"   :src="imgurl+images2+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="max-width: 100%;width: 30px;float: left;margin-left: 19px;height: auto;" />
                 <el-button   v-if='init.isImg=="0" ? true : false' type="primary" size='small'  style='margin: 0 20px;height: 29px;'  @click='UploadApicture2'>上传图片</el-button>


                <span  class="add dsply" @click="add2(init);">添加</span>
                 <div class='clears'></div>
                <div class="addval listadd  Aer" v-for="(initer,index) in objadd2"  v-if='initer.propertyValue == "false"  ? false : true '>
                    
                  <el-input
                  size='small'
                  style='float: left;width:auto;'
                    placeholder="请输入内容"
                    @change='objadda2'
                    v-model="initer.propertyValue"
                    >
                  </el-input>

                  <img v-if="salesAttributes2[index].img"  @click="imageindex2(index)" :src="imgurl+salesAttributes2[index].img+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="width: 32px;float: left;height: auto;margin-left: 20px;" />

                  <div v-if="!salesAttributes2[index].img  && init.isImg=='0' ? true : false"  class="button_data el-icon-plus avatar-uploader-icon"  @click="imageindex2(index)"></div>

                   <el-button style='float: left;margin: 0 20px;' size='small' type="danger" plain   @click="dellist2(index,initer)">删除</el-button>
 



                </div>







              </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="display: contents;">
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;">规格与库存:</p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color">
              <div style="margin-left: 30px;margin-bottom: 20px;">
               
                <div id="demo" class="demo">  
                  
                </div>
              </div>
          </div>
        </div>
      </el-col>
    </el-row>


    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;">&nbsp;</p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color" style="padding: 0px 0px 50px 0px;">
              <span class="fl" style="font-size: 14px;font-weight: 500;"><span style="color: #f60;margin: 2px;float: left;">*</span>总数量</span>
                <div class="fl TotalQuantity">{{vals}}</div>
                <div class="clears"></div>
                <div style="margin: 10px 0px;"  class="pictsa">
                  <div class="clears"></div>
                  <div class="seizeAseat">
                      <span style="color: #f60;margin: 2px;float: left;">*</span><span class="fl" style="font-size: 14px;font-weight: 500;display: block;">原价 : </span>
                  </div>
                    <el-input class="fl" style="margin-left: 12px;height: 30px;width: 162px;" v-model="postsdata.price" placeholder="请输入内容"></el-input>
                    <p id='prices' style='margin-top: 10px;font-size: 13px;display: none;text-align: left;color: #c00;float: left;margin-left: 50px;'>原价不能为空！！！</p>
                </div>
                <div class="clears"></div>

                 <div style="margin: 10px 0px;"  class="pictsa">
                  <div class="clears"></div>
                  <div class="seizeAseat">
                      <span style="color: #f60;margin: 2px;float: left;">*</span><span class="fl" style="font-size: 14px;font-weight: 500;display: block;">现价 : </span>
                  </div>
                    <el-input class="fl" style="margin-left: 12px;height: 30px;width: 162px;" v-model="postsdata.currentPrice" placeholder="请输入内容"></el-input>
                    <p id='currentPrices' style='margin-top: 10px;font-size: 13px;display: none;text-align: left;color: #c00;float: left;margin-left: 50px;'>现价不能为空！！！</p>
                </div>

                  <div class="clears"></div>
                <div style="margin: 10px 0px;"  class="pictsa">
                   <span class="fl" style="line-height: 42px;font-size: 14px;font-weight: 500;padding-left: 12px;display: block;">商品编码 : </span>
                    <el-input class="fl" style="margin-left: 12px;height: 30px;width: 162px;" v-model="postsdata.serial" placeholder="请输入内容"></el-input>
                    <p id='serials' style='margin-top: 10px;font-size: 13px;display: none;text-align: left;color: #c00;float: left;margin-left: 50px;'>商品编码不能为空！！！</p>
                </div>
                    <div class="clears"></div>
                <div style="margin: 10px 0px;"  class="pictsa">
                  <div class="seizeAseat">
                   <span style="color: #f60;margin: 2px;float: left;">*</span><span class="fl" style="font-size: 14px;font-weight: 500;display: block;">是否为店铺内推荐商品 : </span>
                  </div>
                   <div class="fl" style="line-height: 42px;margin-left: 20px;">
                    <el-radio v-model="postsdata.storeRecommend" label="0">是</el-radio>
                    <el-radio v-model="postsdata.storeRecommend" label="1">不是</el-radio>
                   </div>
                </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>


    <div style="margin: 18px auto;background: #fff;box-shadow: 0 -2px 4px 0 rgba(229,229,229,.5);width: 100%;min-height: 32px;padding-bottom: 24px;">
      <h4 style="text-align: left;padding: 20px;">图文描述:</h4>
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;"></p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color pat">
              <p style="text-align: left;font-size: 13px;font-weight: 500;padding: 12px;line-height: 24px;">商品轮播图</p>
              <p class="A1-describe" style="margin-left: 30px;margin-bottom: 20px;">电脑端宝贝图片宝贝主图大小不能超过3MB；700*700 以上图片上传后宝贝详情页自动提供放大镜功能。第五张图发商品白底图可增加手淘首页曝光机会 查看规范 </p>
              <div  style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile" /> 
                    </form>
                    <div class="positons"><span style="color: #f60;margin: 2px;">*</span>宝贝主图</div>
                     <span v-if="postsdata.photos[0]" class="postiona" @click='delx()'>x</span>
                    <img v-if="postsdata.photos[0]"  @click="imageS" :src="imgurl+postsdata.photos[0].path+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces2" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths2" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile2" /> 
                    </form>
                     <span v-if="postsdata.photos[1]" class="postiona" @click='delx1()'>x</span>
                     <img v-if="postsdata.photos[1]"  @click="imageS" :src="imgurl+postsdata.photos[1].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces3" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths3" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile3" /> 
                    </form>
                    <span v-if="postsdata.photos[2]" class="postiona" @click='delx2()'>x</span>
                     <img v-if="postsdata.photos[2]"  @click="imageS" :src="imgurl+postsdata.photos[2].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces4" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths4" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile4" /> 
                    </form>
                    <span v-if="postsdata.photos[3]" class="postiona" @click='delx3()'>x</span>
                     <img v-if="postsdata.photos[3]"  @click="imageS" :src="imgurl+postsdata.photos[3].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces5" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths5" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile5" /> 
                    </form>
                    <div class="positons">宝贝白底图</div>
                    <span v-if="postsdata.photos[4]" class="postiona" @click='delx4()'>x</span>
                     <img v-if="postsdata.photos[4]"  @click="imageS" :src="imgurl+postsdata.photos[4].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
          </div>
        </div>
      </el-col>
    </el-row>

      <el-row>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color pat">
              <h5 class="A1-title">商品详情</h5>
              <p class="A1-describe" style="margin-left: 30px;margin-bottom: 20px;">电脑端宝贝图片宝贝主图大小不能超过3MB；700*700 以上图片上传后宝贝详情页自动提供放大镜功能。第五张图发商品白底图可增加手淘首页曝光机会 查看规范 </p>
               <quill-editor 
               style="width: calc(100% - 30px);margin-left: 30px;"
                v-model="content" 
                ref="myQuillEditor" 
                :options="editorOption" 
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"> 
              </quill-editor>
              
              <form style="width: 100%;z-index: -1;overflow: hidden;height: 100%;cursor: pointer;opacity: 0;position: absolute;top: 0;" id="flces6" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths6" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile6" /> 
              </form>
              
             
          </div>
        </div>
      </el-col>
    </el-row>

        <el-row>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color">
              <h5 class="A1-title">服务与承诺</h5>
              <div style="margin-left: 30px;margin-bottom: 20px;">


                <span class="fl" style="line-height: 37px;font-size: 13px;margin-right: 10px;"><span style="color: #f60;margin: 2px;">*</span>请选择运费模板:</span><el-select  size="small"   v-model="postsdata.transportId" placeholder="请选择">
                      <el-option
                        v-for="item in freighformworkdata"
                        :key="item.value"
                        :label="item.transName"
                        :value="item.id">
                      </el-option>
                    </el-select>
                <div style="line-height: 42px;">
                  <span style="line-height: 37px;font-size: 13px;margin-right: 10px;"><span style="color: #f60;margin: 2px;">*</span>承诺发货时间:</span>
                    <el-radio v-model="postsdata.guarantee.deliveryTime" label="48">48小时</el-radio>
                    <el-radio v-model="postsdata.guarantee.deliveryTime" label="24">24小时</el-radio>
                   </div>
                <el-checkbox style="display: block;margin: 0 auto;"   v-model="checked2" disabled>7天无理由退换货该类商品，必须支持【七天无理由退换货】服务</el-checkbox>
                <el-checkbox style="display: block;margin: 0 auto;" v-model="checked2" disabled>假一赔十该类商品，必须支持假一赔十服务</el-checkbox>
              </div>
          </div>
        </div>
      </el-col>
    </el-row>


     <el-button style="margin: 20px auto;width: 152px;" type="primary" @click="sssA()">发布</el-button>
  </div>

  <div v-for='init in refresh' v-if='false'>{{init}}</div>

</div>
</template>
<script>
import {goodsGetSpec,goodsPropertyAddOne,goodsPropertyDelOne,photoAdds,goodsAddas,goodsBrandAdminList,transportList} from '@/api/NewGoods'
import { quillEditor } from 'vue-quill-editor'
import {container, ImageExtend} from 'quill-image-extend-module'

 // Quill.register('modules/ImageExtend', ImageExtend)

export default {
  name: 'NewGoods',
  components: {quillEditor},
  data () {
    return { 
      salesAttributes1:[],
      salesAttributes2:[],
      index_false2:null,
      indexs2:null,
      index_false:null,
      images2:null,
      indexs:null,
      images:null,
       refresh:[],
      freighformworkdata:[],
      propertys:[],
      imgurl:'https://kungshi.oss-cn-shenzhen.aliyuncs.com/',
      cent:[],
      valData:[],
      images1:'',
      pict:0,
      vals:0,
      content:null,
      editorOption: {
                     modules: {
                         ImageExtend: {
                             loading: true,  // 可选参数 是否显示上传进度和提示语
                             name: 'files',  // 图片参数名 updateUrl
                             size: 3,  // 可选参数 图片大小，单位为M，1M = 1024kb
                             action: 'http://192.168.100.113:8080/eryuan-vfmall-businessManage/biz/photo/add',
                                // 服务器地址, 如果action为空，则采用base64插入图片
                             // response 为一个函数用来获取服务器返回的具体图片地址
                             // 例如服务器返回{code: 200; data:{ url: 'baidu.com'}}
                             // 则 return res.data.url
                             response: (res) => {
                                 return res.info
                             },
                             headers: (xhr) => {
                               xhr.setRequestHeader('Access-Control-Allow-Origin', localStorage.getItem("*"));
                                return xhr
                             },  // 可选参数 设置请求头部
                             start: () => {},  // 可选参数 自定义开始上传触发事件
                             end: () => {},  // 可选参数 自定义上传结束触发的事件，无论成功或者失败
                             error: () => {},  // 可选参数 自定义网络错误触发的事件
                             change: (xhr, formData) => {} // 可选参数 选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
                         },
                         toolbar: {
                             container: container,  // container为工具栏，此次引入了全部工具栏，也可自行配置
                             handlers: {
                                 'image': function () {  // 劫持原来的图片点击按钮事件
                                     document.querySelector('#paths6').click();
                                 }
                             }
                         }
                     }
                 },
      ids:'',
      valueobj: '',
      checked2:true,
      tableData: [],
      activeNameS:"C1",
      activeName: 'A1',
      color1: '#e4393c',
        namea:'',
        nameb:'',
        namec:'',
        CommodityTitle:'',
        fromdata:{
          id:'',
          typeId:'',
        },
        postsdata : {
            status:'0',
            // introduce:'产品介绍',
            details:'',//详情
            inventory:0,//库存
            goodsName:'',//标题
            price:'',//价格
            currentPrice:'',
            // recommend:'是否为推荐商品',
            serial:'',//商品编码
            storeRecommend:'',//是否为店铺内推荐商品 0:是 1 否
            typeId:'',//类目id
            brandId:'',//品牌
            mainPhoto:'',//主图
            photos:[],//轮播图
            transportId:'',//运费模板
            basePropertys:[],//'基本属性值'
            salePropertys:[],//销售属性值
            skus:[],//sku字符串
            guarantee:{
              deliveryTime:'',// 发货时间承诺
              isReturnable:'1',// 是否7天无理由退换 0 =否 1 =是
              isfakepayten:'1'//* 是否假一赔十 0 =否 1 =是
            },
        },
        sizeForm: {
          region: '',
        },
        obj:null,
        obj2:null,
        colorval:[''],
        objcolor:[{}],
        dx:{},
        index:"",
        colorfrom:null,
        arr:[[],[]],
        objadd:[],
        Specifications:'',
        Specifications2:'',
        addspes:0,
        valueobj2:'',
        objadd2:[],
        aname:'',
        bname:'',
        specIddataA:{
          specId:'',
          propertyValue:'',
        },
        colorlist:[],
        colorname:[],
        Stockdata:[],
        Pricedata:[],
        colordata:[],
        sizedata:[],
        objectdata:[],
        datasize:[],
        datacolor:[],
        formLabelWidth: '120px',
        forment: {
        companyMark: '',
        companyName: '',
        companyType:'',
        goods:null,
        dnf:{pathKey:'goods'},

      },
    }
  },



  methods: {
        objadda2(a,b){
          if(a==''  || a==null){
                this.$message.error('规格值不能为空!!!');
                  return false;
          }
      
              this.arr[0]==this.objadd2;
              if(this.arr[0].length!==0 && this.arr[1].length!==0){
              function combine(arr) {  
                          var r = [];  
                          (function f(t, a, n) {  
                              if (n == 0) return r.push(t);  
                              for (var i = 0; i < a[n-1].length; i++) {  
                                  f(t.concat(a[n-1][i]), a, n - 1);  
                              }  
                          })([], arr, arr.length);  
                          return r;  
                      }  
                      var res = combine(this.arr);  
                       //合并单元格  
                      var row = [];  
                      var rowspan = res.length;  
                      for(var n=this.arr.length-1; n>-1; n--) {  
                          row[n] = parseInt(rowspan/this.arr[n].length);  
                          rowspan = row[n];  
                      }  
                      row.reverse();  
                      //table tr td  
                      var str = "";  

                      var len = res[0].length;  
                      for (var i=0; i<res.length; i++) {  
                          var tmp = "";  
                          for(var j=0; j<len; j++) {  
                              if(i%row[j]==0 && row[j]>1) {  
                                  tmp += "<td rowspan='"+ row[j] +"'>"+res[i][j].propertyValue+"</td>";  
                              }else if(row[j]==1){  
                                  tmp += "<td class="+"bannes"+">"+res[i][j].propertyValue+"</td>";  
                              }  
                          }  
                          str += "<tr>" + tmp + "<td><input value='' type="+'text'+" id='o"+i+"stock' /></td>" + "<td><input value='' type="+'text'+"  id='o"+i+"price' /></td>" + "</tr>";  
                      }  
                        
                      //thead  
                      var th = "";  
                      
                      th = "<th>"+ this.aname +"</th>"+"<th class="+"bannes"+">"+this.bname  +"</th>";  

                      th = "<thead>"+th+"<th>价格</th>" + "<th>数量</th>" +"</thead>";  
                      str = "<table>" + th + str + "</table>";  
                        
                      document.getElementById('demo').innerHTML = str;  
          }
                      $('#demo table').css('width', '96%');
                      $('#demo table tr td').css('border', '1px solid #eee%');



                      


    },
      objadda1(a,b){
              if(a==''  || a==null){
                this.$message.error('规格值不能为空!!!');
                  return false;
              }
              this.arr[1]=this.objadd;

              if(this.arr[0].length!==0 && this.arr[1].length!==0){
              function combine(arr) {  

                          var r = [];  
                          (function f(t, a, n) {  
                              if (n == 0) return r.push(t);  
                              for (var i = 0; i < a[n-1].length; i++) {  
                                  f(t.concat(a[n-1][i]), a, n - 1);  
                              }  
                          })([], arr, arr.length);  
                          return r;  
                      }  
                      var res = combine(this.arr);  
                       //合并单元格  
                      var row = [];  
                      var rowspan = res.length;  
                      for(var n=this.arr.length-1; n>-1; n--) {  
                          row[n] = parseInt(rowspan/this.arr[n].length);  
                          rowspan = row[n];  
                      }  

                      row.reverse();  

                      //table tr td  
                      var str = "";  

                      var len = res[0].length;  

                      for (var i=0; i<res.length; i++) {  
                          var tmp = "";  
                          for(var j=0; j<len; j++) {  
                              if(i%row[j]==0 && row[j]>1) { 
                                  tmp += "<td rowspan='"+ row[j] +"'>"+res[i][j].propertyValue+"</td>";  
                              }else if(row[j]==1){  
                                  tmp += "<td class="+"bannes"+">"+res[i][j].propertyValue+"</td>";  
                              }  
                          }  
                          str += "<tr>" + tmp + "<td><input value=''  type='text' id='o"+i+"stock'   /></td>" + "<td><input value=''  type="+'text'+" id='o"+i+"price' /></td>" + "</tr>";  
                      }  
                       
                      //thead  
                      var th = "";  
                      
                      th = "<th>"+ this.aname +"</th>"+"<th class="+"bannes"+">"+ this.bname +"</th>";  

                      th = "<thead>"+th+"<th>价格</th>" + "<th>数量</th>" +"</thead>";  
                      str = "<table>" + th + str + "</table>";  
                        
                      document.getElementById('demo').innerHTML = str;  
          }
                      $('#demo table').css('width', '96%');
                      $('#demo table tr td').css('border', '1px solid #eee%');

                      var asd=$('.bannes');
                     
                      for(var i=0;i<asd.length;i++){
                      
                        if(asd[i].innerText=='false'){
                       
                          asd[i].style.display='none';
                        }
                      }



    },
    delx (){
        this.postsdata.photos.splice(0,1,'');
    },
    delx1 (){
        this.postsdata.photos.splice(1,1,'');
    },
    delx2 (){
        this.postsdata.photos.splice(2,1,'');
    },
    delx3(){
        this.postsdata.photos.splice(3,1,'');
    },
    delx4 (){
        this.postsdata.photos.splice(4,1,'');
    },
    indexr(index){
      this.index_false=null;
      console.log("this.objadd.length",this.objadd.length)
        console.log("index",index)
        if(this.objadd.length==0){
             this.index_false=this.objadd.length+index;
        }else{
          this.index_false=(this.objadd.length+index)-1;
        }
       
        console.log("index_false", this.index_false)
    },
    indexr2(index){
       this.index_false2=null;
      console.log("this.objadd2.length",this.objadd2.length)
        console.log("index",index)
        if(this.objadd2.length==0){
             this.index_false2=this.objadd2.length+index;
        }else{
          this.index_false2=(this.objadd2.length+index)-1;
        }
       
        console.log("index_false2", this.index_false2)
    },
   async index_img(){
        const formDatas = new FormData(document.getElementById('index_img1'));
            const ss =$('#index_img2')[0].files[0];
            const asda = await photoAdds(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.salesAttributes1[this.indexs].img=datatable.object[0].path;
            this.refresh.push('1');
           }
    },
    async UploadApicture_json22(){
        const formDatas = new FormData(document.getElementById('UploadApicture22'));
            const ss =$('#UploadApictures22')[0].files[0];
            const asda = await photoAdds(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.indexs2=this.objadd.length+this.indexs2;
            this.salesAttributes2[this.indexs2].img=datatable.object[0].path;
            this.refresh.push('1');
           }
    },
    imageindex(index){
      this.indexs=index;
      $('#index_img2').click();
      // this.postsdata.salePropertys
    },
    imageindex2(index){
      this.indexs2=index;
      $('#UploadApictures22').click();
      // this.postsdata.salePropertys
    },
    async UploadApicture2(){
            $('#UploadApicture2s').click();
    },
    async UploadApicture_json2(){
         const formDatas = new FormData(document.getElementById('UploadApicture2'));
            const ss =$('#UploadApicture2s')[0].files[0];
            const asda = await photoAdds(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.images2=datatable.object[0].path;
            this.refresh.push('1');
           }
    },
   async UploadApicture_json(){
            const formDatas = new FormData(document.getElementById('UploadApicture'));
            const ss =$('#UploadApictures')[0].files[0];
            const asda = await photoAdds(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.images=datatable.object[0].path;
            this.refresh.push('1');
           }
    },
    UploadApicture(){
        $('#UploadApictures').click();
    },
    isValid(){
             return {
            //非空
            isNotEmpty:function(val){
              return val == '' || val == undefined ||  val == null ? false : true ;
            },
            //验证长度
            validLength:function(val,min,max){
              return val.length <= max && val.length >= min ? true : false ;
            },
            //两值是否相等
            isEqual: function(v1,v2){
              return v1 == v2 ? true : false;
            }
            
          }
    },
    handleChecked(index){

    },
    handleCheckedCitiesChange(row){
  
    },
    imageS(){
      $('#paths').click();
    },
    onEditorBlur(){
 
     },
      onEditorFocus(){
     
      },
       onEditorChange(){ 

       },
        async tirggerFile (row){
            const formDatas = new FormData(document.getElementById('flces'));
            const ss =$('#paths')[0].files[0];
            const asda = await photoAdds(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.postsdata.mainPhoto=datatable.object[0].path;
            this.postsdata.photos[0]=datatable.object[0];
            this.refresh.push('1');
           }
        },
        async tirggerFile2 (row){
          
            const formDatas = new FormData(document.getElementById('flces2'));
            const ss =$('#paths2')[0].files[0];
           
            const asda = await photoAdds(formDatas)
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.postsdata.photos[1]=datatable.object[0];
            this.refresh.push('1');
           }
          
        },
        async tirggerFile3 (row){
        
            const formDatas = new FormData(document.getElementById('flces3'));
            const ss =$('#paths3')[0].files[0];
          
            const asda = await photoAdds(formDatas)
            const datatable =await  asda.json();
            if(datatable.statusCode==200){
            this.postsdata.photos[2]=datatable.object[0];
            this.refresh.push('1');
           }
          
        },
        async tirggerFile4 (row){
        
            const formDatas = new FormData(document.getElementById('flces4'));
            
            const ss =$('#paths4')[0].files[0];
           
            const asda = await photoAdds(formDatas)
            const datatable =await  asda.json();
           if(datatable.statusCode==200){
            this.postsdata.photos[3]=datatable.object[0];
            this.refresh.push('1');
           }
           
        },
        async tirggerFile5 (row){
         
            const formDatas = new FormData(document.getElementById('flces5'));
            
            const ss =$('#paths5')[0].files[0];
           
            const asda = await photoAdds(formDatas)
            const datatable =await  asda.json();
            if(datatable.statusCode==200){
            this.postsdata.photos[4]=datatable.object[0];
            this.refresh.push('1');
           }
          
        },
        async tirggerFile6 (row){
            const formDatas = new FormData(document.getElementById('flces6'));
            const ss =$('#paths6')[0].files[0];
           
            const asda = await photoAdds(formDatas)
            const datatable =await asda.json();
            if(datatable.statusCode==200){
             $('.ql-container .ql-editor').append("<img src='https://kungshi.oss-cn-shenzhen.aliyuncs.com/"+datatable.object[0].path +"' />");
             this.refresh.push('1');
            }

        },
        async sssA(){

            this.CommodityTitle=String(this.CommodityTitle);
            this.postsdata.price=String(this.postsdata.price);
            this.postsdata.currentPrice=String(this.postsdata.currentPrice);
            this.postsdata.serial=String(this.postsdata.serial);

            this.CommodityTitle=this.CommodityTitle.replace(/(^\s*)|(\s*$)/g, "");
            this.postsdata.price=this.postsdata.price.replace(/(^\s*)|(\s*$)/g, "");
           this.postsdata.currentPrice=this.postsdata.currentPrice.replace(/(^\s*)|(\s*$)/g, "");
           this.postsdata.serial=this.postsdata.serial.replace(/(^\s*)|(\s*$)/g, "");

            for(var t=0;t<this.obj2.length;t++){
              if(this.obj2[t].isRequire==0){
                  if(!this.valData[t]){
                     this.$message.error("类目属性:"+this.obj2[t].name+'不能为空!!!');
                      return ;
                  }
                
              }
            }
              if(this.CommodityTitle == null || this.CommodityTitle==""){
                  this.$message.error('标题不能为空!!!');
                   $('#titles').css('display', 'block');
                  return ;
               }else if(this.postsdata.brandId == null || this.postsdata.brandId==""){
                  this.$message.error('品牌不能为空!!!');
                  return ;
               }else if(this.postsdata.price == null || this.postsdata.price==""){
                  this.$message.error('原价不能为空!!!');
                  $('#prices').css('display', 'block');
                  return ;
               }else if(this.postsdata.currentPrice == null || this.postsdata.currentPrice==""){
                  this.$message.error('现价不能为空!!!');
                  $('#currentPrices').css('display', 'block');
                  return ;
               }else if(this.postsdata.serial == null || this.postsdata.serial==""){
                  this.$message.error('商品编码不能为空!!!');
                  $('#serials').css('display', 'block');
                  return ;
               }

           this.postsdata.basePropertys=[];
          for(var i=0;i<this.obj2.length;i++){
            if(this.obj2[i].valueType == '0'){
               // const spids = {specId:this.obj2[i].id,propertyValue:this.valData[i]};
                this.postsdata.basePropertys[i]={specId:this.obj2[i].id,propertyValue:this.valData[i],isImg:''};
            }else if(this.obj2[i].valueType !== '2'  && this.obj2[i].valueType !== '0'){
                this.postsdata.basePropertys[i]={specId:this.obj2[i].id,propertyId:this.valData[i],isImg:''};
            }
          }
          for(var s=0;s<this.obj2.length;s++){
           if(this.obj2[s].valueType == '2'){
                this.postsdata.basePropertys.splice(s, 1); 
                const ids = this.obj2[s].id;
                for(var d=0;d<this.cent.length;d++){
                  const spid = {specId:ids,propertyId:this.cent[d],isImg:''};
                  this.postsdata.basePropertys.push(spid)
                }
            }

          }

              

                  
                  this.postsdata.salePropertys= this.salesAttributes1.concat(this.salesAttributes2);
                  this.postsdata.salePropertys=JSON.stringify(this.postsdata.salePropertys);
                  this.postsdata.basePropertys=JSON.stringify(this.postsdata.basePropertys);
                 this.postsdata.guarantee=JSON.stringify(this.postsdata.guarantee);
                  this.sss();     
                 this.postsdata.details=this.content;   
                this.postsdata.photos=JSON.stringify(this.postsdata.photos);
                const zxcv=this.postsdata.photos;
                console.log("this.postsdata.photos",typeof(this.postsdata.photos))
                if(this.postsdata.photos=='[]'){
                  this.postsdata.photos='';
                }
                if(this.postsdata.basePropertys=='[]'){
                  this.postsdata.basePropertys='';
                }
                if(this.postsdata.salePropertys=='[]'){
                  this.postsdata.salePropertys='';
                }
                if(this.postsdata.skus=='[]'){
                  this.postsdata.skus='';
                }
                
                if(this.postsdata.goodsName==''){
                    this.$message({
                      message: '请输入标题!!!',
                      type: 'warning'
                    });
                    return false;
                }
                if(this.postsdata.brandId==''){
                    this.$message({
                      message: '请选择品牌!!!',
                      type: 'warning'
                    });
                    return false;
                }
                if(this.postsdata.price==''){
                    this.$message({
                      message: '请输入商品价格!!!',
                      type: 'warning'
                    });
                    return false;
                }
                if(this.postsdata.storeRecommend==''){
                    this.$message({
                      message: '请选择是否为推荐商品!!!',
                      type: 'warning'
                    });
                    return false;
                }
                
                if(this.postsdata.transportId==''){
                    this.$message({
                      message: '请选择运费模板!!!',
                      type: 'warning'
                    });
                    return false;
                }
                if(this.postsdata.guarantee.deliveryTime==''){
                    this.$message({
                      message: '请选择承诺发货时间!!!',
                      type: 'warning'
                    });
                    return false;
                }
                
                if(this.postsdata.photos[0]=='undefined'  || this.postsdata.photos[0]==undefined){
                    this.$message({
                      message: '请插入主图!!!',
                      type: 'warning'
                    });
                    return false;
                }

                
// 富文本        
                const asd = await goodsAddas(this.postsdata);
                const datatable =await asd.json();

                if(datatable.statusCode==200){
                     this.$notify({
                        title: '提示！',
                        message: '发布成功！！！',
                        type: 'success'
                      });
                      this.$router.push('/babyList')
                }else{
                  this.$notify.error({
                        title: '错误',
                        message: '发布失败！！！'
                      });
                  // location.reload();   
                }
        },
        async sss (){

              this.postsdata.inventory=this.vals;
              this.postsdata.goodsName=this.CommodityTitle;
              const len=this.objadd.length * this.objadd2.length;
              this.datasize=[];
              this.datacolor=[];
              for(var b=0;b<this.arr[0].length;b++){
                  this.sizedata[b]=this.arr[0][b].id;
              }
              for(var c=0;c<this.arr[1].length;c++){
                  this.colordata[c]=this.arr[1][c].id;
              }
              const colorlen=this.colordata.length;

              const sizelen=this.sizedata.length;

              for(var g=0;g<colorlen;g++){
                 for(var h=0;h<sizelen;h++){
                  this.datasize.push(this.sizedata[h]);
               }
              }

              for(var j=0;j<colorlen;j++){
                 for(var k=0;k<sizelen;k++){
                  this.datacolor.push(this.colordata[j])
               }
              }

             

              const datas={property:null,stock:null,price:null};
              for(var a=0;a<len;a++){
                        this.Stockdata[a]=parseInt($('#o'+ a +'stock').val());
                        this.Pricedata[a]=parseInt($('#o'+ a +'price').val());
                        }
              
          for(var e=0;e<colorlen;e++){
            for(var f=0;f<(sizelen * colorlen);f++){
                  if(this.datasize[f]>this.datacolor[f]){
                    if(!this.datacolor[f]){
                        this.objectdata[f]={property:this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                    }else if(!this.datasize[f]){
                        this.objectdata[f]={property:this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                    }else{
                      this.objectdata[f]={property:this.datacolor[f]+','+ this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                    }
                  }else{
                    if(!this.datacolor[f]){
                        this.objectdata[f]={property:this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]} 
                    }else if(!this.datasize[f]){
                        this.objectdata[f]={property:this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                    }else{
                        this.objectdata[f]={property:this.datasize[f]+','+ this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                    }
                  }
                      
              }
          }   
                this.postsdata.skus=JSON.stringify(this.objectdata);
                 
                 
        },
        async dellist1 (a,b){
        this.salesAttributes1.splice(a,1); 
        this.objadd.splice(a,1); 
        },
        async dellist2 (a,b){
           this.objadd2.splice(a,1); 
           this.salesAttributes2.splice(a,1); 
        },
        AddSpecifications(){
          this.addspes=this.addspes+1;
         if(this.addspes>=2){
          this.addspes=2;
         }
        },
        async add(row){
         
          this.aname=row.name;
          if(this.Specifications !== ''){
            this.specIddataA.specId=row.id;
            this.specIddataA.propertyValue=this.Specifications;
             const response = await goodsPropertyAddOne(this.specIddataA)
            const datatable = await  response.json(); 
            const data=datatable.object;
            if(this.images){
              this.salesAttributes1.push({id:datatable.object.id,img:this.images});
                 // this.postsdata.salePropertys.push({id:datatable.object.id,img:this.images});
                  // this.salesAttributes1.push({img:this.images});
                  this.images='';
                  this.objadd.push(data);
            }else{
             // this.postsdata.salePropertys.push({id:datatable.object.id});
             this.salesAttributes1.push({id:datatable.object.id});
              this.objadd.push(data);
            }
            
          }
            this.Specifications='';

        },
        async add2(row){
         
          this.bname=row.name;
          if(this.Specifications2 !== ''){
            this.specIddataA.specId=row.id;
            this.specIddataA.propertyValue=this.Specifications2;
             const response = await goodsPropertyAddOne(this.specIddataA)
            const datatable = await  response.json(); 
            if(datatable.statusCode==200){
                const data=datatable.object;
                if(this.images2){

                 // this.postsdata.salePropertys.push({id:datatable.object.id,img:this.images2});
                  this.salesAttributes2.push({id:datatable.object.id,img:this.images2});
                  // this.salesAttributes2.push({img:this.images2});
                  this.images2='';
                  this.objadd2.push(data);

                }else{
                 // this.postsdata.salePropertys.push({id:datatable.object.id});
                 this.salesAttributes2.push({id:datatable.object.id});
                  this.objadd2.push(data);
                }
                if(this.objadd2[0].propertyValue=='false'){
                 this.objadd2.splice(0, 1); 
                }
                console.log("postsdata.salePropertys",this.postsdata.salePropertys)
            }
            
          }
            this.Specifications2='';
        },
        del1(a){
          this.addspes=this.addspes-1;
          if(this.addspes<=0){
              this.addspes=0;
            }

        },
        del2(a){
            this.addspes=this.addspes-1;
            if(this.addspes<=0){
              this.addspes=0;
            }
        },
        aa(a){
          this.colorval[this.index]=a;
          this.dx={};
         this.objcolor.push(this.dx);
          this.colorval.push('');
        },
        ABfunction(a){
          
         $('.AA-box').eq(a).css('height', '0px');
         $('.AA-box').eq(a).css('border', 'none');
         
        },
        AIfunction(a){
          this.index=a;
           $('.AA-box').eq(a).css('height', '400px');
           $('.AA-box').eq(a).css('border', '1px solid #d6d6d6');
        },
        go(){
          this.$router.push('/EditGoods');
        },
        fromchange(row){
        },
        inin (){
           const self = this;
           const ss = self.$refs.mybox;
        },
    },
    async mounted () {
        var getLocalData = JSON.parse(localStorage.getItem('temp2')); 
        this.namea = getLocalData.a
         this.nameb = getLocalData.b
          this.namec = getLocalData.c
          this.fromdata.id = getLocalData.id;
          this.fromdata.typeId = getLocalData.typeId;
          const response = await goodsGetSpec(this.fromdata)
          const datatable = await  response.json(); 
           if(datatable.statusCode==401){
               this.$message('未登录');
              this.$router.push('/Sign_in')
        }
          this.postsdata.typeId=getLocalData.typeId;
          this.obj=datatable.object.sale;
          this.obj2=datatable.object.base;
       
           this.colorlist=[];

          for(var i=0;i<datatable.object.sale.length;i++){
            const valnames={valueType:this.obj[i].valueType,name:this.obj[i].name,id:this.obj[i].id,isImg:this.obj[i].isImg};
            this.colorlist.push(this.obj[i].property);
            this.colorname.push(valnames);
           
          }
        
          const cath=this;
          
          this.bname="false"
          this.objadd2=[{propertyValue:'false'}]

          this.inin();

          
            $("#demo").on("change","input",function(event){
                 
                    var n = Math.floor(Number(event.target.value));
                    if(n !== Infinity && String(n) === event.target.value && n >= 0){
                      cath.sss();
                      cath.Pricedata=cath.Pricedata.map(Number)
                      cath.vals=0;
                      for(var m=0;m<cath.Pricedata.length;m++){
                        if(!cath.Pricedata[m]){
                            cath.Pricedata[m]=0;
                        }
                     
                        cath.vals+=cath.Pricedata[m]
                        
                      }
                    }else{
                      cath.$message.error('格式不正确!!!');
                      event.target.value='';
                    }
                    
            })
             const responses = await goodsBrandAdminList();
          const datatables = await  responses.json(); 
            this.propertys=datatables.object;
            console.log("this.propertys",this.propertys)

            const datay = await transportList();
          const datajson = await  datay.json(); 
          
            this.freighformworkdata=datajson.object;
            

  },
  watch: {
    'postsdata.serial': function (a,b){
       if(a.indexOf(" ") >= 0 || a == null || a==""){
          $('#serials').css('display', 'block');
       }else{
          $('#serials').css('display', 'none');
       }

    },
    'postsdata.currentPrice': function (a,b){
       if(a.indexOf(" ") >= 0 || a == null || a==""){
          $('#currentPrices').css('display', 'block');
       }else{
          $('#currentPrices').css('display', 'none');
       }

    },
    'postsdata.price': function (a,b){
       if(a.indexOf(" ") >= 0 || a == null || a==""){
          $('#prices').css('display', 'block');
       }else{
          $('#prices').css('display', 'none');
       }

    },
    CommodityTitle(a,b){
        this.CommodityTitle=this.CommodityTitle.replace(/(^\s*)|(\s*$)/g, "");
       if(a == null || a==""){
          $('#titles').css('display', 'block');
       }else{
          $('#titles').css('display', 'none');
       }

    },  
    valueobj (a,b){
      this.specIddataA.specId=a.id
      this.aname=a.name;
     if(a!=='' && a!==null){
        $('.dsply').css('display', 'inline-block');
     }
     if(a!==b){
        this.objadd=[];
     }
    },
    valueobj2 (a,b){

      this.bname=a.name;

     if(a!=='' && a!==null){
        $('.dsply2').css('display', 'inline-block');
     }
     if(a!==b){
        this.objadd2=[];

     }
    },
    addspes (a,b){
        if(a==1){
          $('#A1-dspaly').css('display', 'block');
          $('#A2-dspaly').css('display', 'none');
         }else if(a==2){
          $('#A2-dspaly').css('display', 'block');
          $('#A1-dspaly').css('display', 'block');
          $('#stylenone').css('display', 'none');
          this.objadd2=[]
         }else{
          $('#A1-dspaly').css('display', 'none');
          $('#A2-dspaly').css('display', 'none');
          $('#stylenone').css('display', 'block');
         }
    },
    objadd(a,b){

              this.arr[1]=a;

              if(this.arr[0].length!==0 && this.arr[1].length!==0){
              function combine(arr) {  

                          var r = [];  
                          (function f(t, a, n) {  
                              if (n == 0) return r.push(t);  
                              for (var i = 0; i < a[n-1].length; i++) {  
                                  f(t.concat(a[n-1][i]), a, n - 1);  
                              }  
                          })([], arr, arr.length);  
                          return r;  
                      }  
                      var res = combine(this.arr);  
                       //合并单元格  
                      var row = [];  
                      var rowspan = res.length;  
                      for(var n=this.arr.length-1; n>-1; n--) {  
                          row[n] = parseInt(rowspan/this.arr[n].length);  
                          rowspan = row[n];  
                      }  

                      row.reverse();  

                      //table tr td  
                      var str = "";  

                      var len = res[0].length;  

                      for (var i=0; i<res.length; i++) {  
                          var tmp = "";  
                          for(var j=0; j<len; j++) {  
                              if(i%row[j]==0 && row[j]>1) { 
                                  tmp += "<td rowspan='"+ row[j] +"'>"+res[i][j].propertyValue+"</td>";  
                              }else if(row[j]==1){  
                                  tmp += "<td class="+"bannes"+">"+res[i][j].propertyValue+"</td>";  
                              }  
                          }  
                          str += "<tr>" + tmp + "<td><input value=''  type='text' id='o"+i+"stock'   /></td>" + "<td><input value=''  type="+'text'+" id='o"+i+"price' /></td>" + "</tr>";  
                      }  
                       
                      //thead  
                      var th = "";  
                      
                      th = "<th>"+ this.aname +"</th>"+"<th class="+"bannes"+">"+ this.bname +"</th>";  

                      th = "<thead>"+th+"<th>价格</th>" + "<th>数量</th>" +"</thead>";  
                      str = "<table>" + th + str + "</table>";  
                        
                      document.getElementById('demo').innerHTML = str;  
          }
                      $('#demo table').css('width', '96%');
                      $('#demo table tr td').css('border', '1px solid #eee%');

                      var asd=$('.bannes');
                     
                      for(var i=0;i<asd.length;i++){
                      
                        if(asd[i].innerText=='false'){
                       
                          asd[i].style.display='none';
                        }
                      }



    },
    objadd2(a,b){
              this.arr[0]=a;
              if(this.arr[0].length!==0 && this.arr[1].length!==0){
              function combine(arr) {  
                          var r = [];  
                          (function f(t, a, n) {  
                              if (n == 0) return r.push(t);  
                              for (var i = 0; i < a[n-1].length; i++) {  
                                  f(t.concat(a[n-1][i]), a, n - 1);  
                              }  
                          })([], arr, arr.length);  
                          return r;  
                      }  
                      var res = combine(this.arr);  
                       //合并单元格  
                      var row = [];  
                      var rowspan = res.length;  
                      for(var n=this.arr.length-1; n>-1; n--) {  
                          row[n] = parseInt(rowspan/this.arr[n].length);  
                          rowspan = row[n];  
                      }  
                      row.reverse();  
                      //table tr td  
                      var str = "";  

                      var len = res[0].length;  
                      for (var i=0; i<res.length; i++) {  
                          var tmp = "";  
                          for(var j=0; j<len; j++) {  
                              if(i%row[j]==0 && row[j]>1) {  
                                  tmp += "<td rowspan='"+ row[j] +"'>"+res[i][j].propertyValue+"</td>";  
                              }else if(row[j]==1){  
                                  tmp += "<td class="+"bannes"+">"+res[i][j].propertyValue+"</td>";  
                              }  
                          }  
                          str += "<tr>" + tmp + "<td><input value='' type="+'text'+" id='o"+i+"stock' /></td>" + "<td><input value='' type="+'text'+"  id='o"+i+"price' /></td>" + "</tr>";  
                      }  
                        
                      //thead  
                      var th = "";  
                      
                      th = "<th>"+ this.aname +"</th>"+"<th class="+"bannes"+">"+this.bname  +"</th>";  

                      th = "<thead>"+th+"<th>价格</th>" + "<th>数量</th>" +"</thead>";  
                      str = "<table>" + th + str + "</table>";  
                        
                      document.getElementById('demo').innerHTML = str;  
          }
                      $('#demo table').css('width', '96%');
                      $('#demo table tr td').css('border', '1px solid #eee%');



                      


    },
    postsdata(a,b){
        console.log("a",a)
    },
    '$route': function (route,b) {
              if(route.path=='/NewGoods'){
                   location.reload()
              }
    },
  },
}
</script>
<style scoped>
.A1-color{
  text-align: left;
  background-color: #ffffff;
  margin-left: 30px;
  padding-bottom: 20px;
}
.C1-size{
  text-align: left;
  background-color: #ffffff;
  border: 1px solid #eee;
}
.A1-title{
  padding: 12px ;
  line-height: 24px;
}
.A1-describe{
  font-size: 12px;
}
.C1-describe{
  font-size: 12px;
}
.A1-input-color{
  width: 300px;
  height: 28px;
  background-color: #fff;
  border-color: #d7d7d7;
}
.B1-title{
  font-size: 13px;
  margin: 5px auto;
}
.B2-color{
  overflow: hidden;
  float: left;
  width: 110px;
  height: 30px;
}
.B2-color:hover{
  background-color: #eee;
  cursor: pointer;
}
.C1-title{
  padding: 12px;
  line-height: 24px;
}
.add{
  cursor: pointer;
  color: #008ae5;
  margin: 0 10px;
}
.addval{
/*background-color: #eee;
min-width: 90px;
margin-right: 10px;*/
margin-bottom: 10px;
height: 30px;
line-height: 30px;
text-align: center;
position: relative;
display: block;
padding-right: 15px;
margin-top: 16px;
}
.adddel{
 position: absolute;
right: 0;
top: 0px;
color: #fff;
width: 16px;
border-radius: 27px;
display: block;
height: 16px;
line-height: 16px;
}
.addval .adddel:hover {
cursor: pointer;
background-color: red;
}
.borders{
border: 1px dashed #c4c6cf;
}
.pathpoth{
border: 1px dashed #c4c6cf;
overflow: hidden;
width: 90px;
height: 90px;
}
.positons{
position: absolute;
top: 0px;
width: 100%;
height: 20px;
text-align: center;
line-height: 20px;
background-color: rgba(51, 51, 51, 0.7);
color: #fff;
font-size: 12px;
font-weight: 602;
}
.TotalQuantity{
font-size: 12px;
line-height: 20px;
pointer-events:none;
margin: 0 10px;
background-color: #ccc;
padding: 0 10px;
width: 138px;
}
.CategoryAttributebox div{
float: left;
margin: 3px 10px;
width: 306px;
min-height: 60px;
padding-right: 10px;
display: block;
}
.seizeAseat{
display: inline-block;
float: left;
line-height: 40px;
}
.color_{
border: 1px solid #333;
width: 27px;
height: 27px;
display: inline-block;
float: left;
text-align: center;
line-height: 27px;
}
.postiona{
position: absolute;
z-index: 99999999999;
color: red;
top: -1px;
right: 3px;
font-size: 18px;
cursor: pointer;
}
.button_data{
float: left;
width: 79px;
margin-left: 20px;
height: 32px;
line-height: 32px;
border: 1px dashed #d9d9d9;
border-radius: 6px;
cursor: pointer;
position: relative;
overflow: hidden;
}
</style>