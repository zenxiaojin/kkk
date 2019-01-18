<template >
<div  v-loading="loading1">
  <div style="margin: 18px auto;background: #fff;box-shadow: 0 -2px 4px 0 rgba(229,229,229,.5);width: 100%;min-height: 32px;padding-bottom: 24px;">
    <h3 style="text-align: center;padding: 20px;margin: 20px;">编辑商品</h3>
    <h4 style="text-align: left;padding: 20px;">商品基本信息</h4>
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;">&nbsp;</p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <p style="text-align: left;margin: 0 30px;float: left;">{{(namea !=='' ? (namea+'>') : namea) +(nameb !=='' ? (nameb+'>') : nameb)+namec}}</p>
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
                      <span class="fl">品牌</span><el-select   v-model="postsdata.brandId" placeholder="请选择">
                        <el-option
                          v-for="iniu in propertysa"
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
                      <span class="fl"><span v-if='init.isRequire ==0' style="color: #f60;margin: 2px;">*</span>{{init.name}}</span><el-input @change='Pleaseinputcontents' v-model="init.idAndValue"    placeholder="请输入内容"></el-input>
                </div>
              </div>
              <div v-if="init.valueType=='1'? true : false" :span="12" >
                <div class="grid-content bg-purple-dark  CategoryAttribute">
                      <span class="fl"><span v-if='init.isRequire ==0' style="color: #f60;margin: 2px;">*</span>{{init.name}}</span>
                      <div>
                        <el-radio  class="fl" v-for="inis in init.property"   v-model="valData[index]" :label="inis.id" :key="index">{{valData[index]}}</el-radio>
                      </div>
                </div>
              </div>
              <div v-if="init.valueType=='2'? true : false" :span="12" >
                <div class="grid-content bg-purple-dark  CategoryAttribute">
                      <span class="fl"><span v-if='init.isRequire ==0' style="color: #f60;margin: 2px;">*</span>{{init.name}}</span>
                      <div>
                        <el-checkbox-group v-model="init.idAndValue" @change="handleCheckedCitiesChange">
                          <el-checkbox @change="handleCheckedCitiesChange"  v-for="(inia) in init.property" :label="inia.id" :key="index">{{inia.value}}</el-checkbox>
                        </el-checkbox-group>
                      </div>
                </div>
              </div>
              <div  v-if="init.valueType=='3' ? true : false" :span="12">
              <div class="grid-content bg-purple-dark  CategoryAttribute">
                    <span class="fl"><span v-if='init.isRequire ==0' style="color: #f60;margin: 2px;">*</span>{{init.name}}</span><el-select @change='Pleaseinputcontents'   v-model="init.idAndValue" placeholder="请选择">
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
          <p style="text-align: right;font-size: 13px;font-weight: 500;">&nbsp;</p>
           
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
            <p v-if='index==0' style="text-align: left;font-size: 13px;font-weight: 500;">商品规格:</p>
              <h5 class="A1-title" >{{init.name}}</h5>
              <div v-if="index==0 ? true : false">
                <el-input  class="spes dsply"  style="width: 22%;height: 30px;margin: 0;float: left;" v-model="Specifications" placeholder="请输入内容"></el-input>


                 <form style="overflow: hidden;cursor: pointer;position: absolute;top: 0;" id="UploadApicture22" method="post" enctype ="multipart/form-data"> 
                           <input type="text" name="pathKey" value="goods" style="display:none;"> 
                          <input id="UploadApicture22s" style="cursor: pointer;float: left;opacity: 0;" type="file" name="files" @change="UploadApicture_json22" /> 
                    </form>



                    <form style="overflow: hidden;cursor: pointer;position: absolute;top: 0;" id="UploadApicture1" method="post" enctype ="multipart/form-data"> 
                           <input type="text" name="pathKey" value="goods" style="display:none;"> 
                          <input id="UploadApicture1s" style="cursor: pointer;float: left;opacity: 0;" type="file" name="files" @change="UploadApicture_json1" /> 
                    </form>


                <img v-if="images11"   :src="imgurl+images11+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="max-width: 100%;width: 30px;float: left;margin-left: 19px;height: auto;" />
                 
                 <el-button   v-if='init.isImg=="0" ? true : false' type="primary" size='small'  style='margin: 0 20px;height: 29px;'  @click='UploadApicture2'>上传图片</el-button> 


                <span  class="add dsply" @click="add(init)">添加</span>
                 <div class='clears'></div>







                <div class="addval Aer" v-for="(inits,index) in objadd">


                  <el-input
                  size='small'
                  style='float: left;width:auto;'
                    placeholder="请输入内容"
                    @change='objadda1'
                    v-model="inits.propertyValue"
                    >
                  </el-input>
                  <div v-if="inits.img" class="positonsa">
                    <img   @click="imageindex1(index)" :src="imgurl+inits.img+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="width: 32px;float: left;height: auto;margin-left: 20px;" />
                    <span class="positonsb"  @click='delk(index)'>x</span>
                  </div>
                  
                  
                  <div v-if="!inits.img  && init.isImg=='0' ? true : false"  class="button_data el-icon-plus avatar-uploader-icon"  @click="imageindex1(index)"></div>


                 <el-button style='float: left;margin: 0 20px;' size='small' type="danger" plain   @click="dellist1(index,inits)">删除</el-button>

                </div>










              </div>

              <div v-if="index==1 ? true : false">
                <el-input class="spes dsply"  style="width: 22%;height: 30px;margin: 0;float: left;" v-model="Specifications2" placeholder="请输入内容"></el-input>

                <form style="overflow: hidden;cursor: pointer;position: absolute;top: 0;" id="Upload_ac" method="post" enctype ="multipart/form-data"> 
                           <input type="text" name="pathKey" value="goods" style="display:none;"> 
                          <input id="Upload_acs" style="cursor: pointer;float: left;opacity: 0;" type="file" name="files" @change="UploadApicture_ac" /> 
                    </form>



                    <form style="overflow: hidden;cursor: pointer;position: absolute;top: 0;" id="Upload_e" method="post" enctype ="multipart/form-data"> 
                           <input type="text" name="pathKey" value="goods" style="display:none;"> 
                          <input id="Upload_es" style="cursor: pointer;float: left;opacity: 0;" type="file" name="files" @change="UploadApicture_a" /> 
                    </form>



                 <img v-if="images_2"   :src="imgurl+images_2+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="max-width: 100%;width: 30px;float: left;margin-left: 19px;height: auto;" />
                 <el-button   v-if='init.isImg=="0" ? true : false' type="primary" size='small'  style='margin: 0 20px;height: 29px;'  @click='UploadApicture_22'>上传图片</el-button> 
                <span  class="add dsply" @click="add2(init)">添加</span>
                 <div class='clears'></div>
                







                <div class="addval Aer" v-for="(initas,index) in objadd2">


                  <el-input
                  size='small'
                  style='float: left;width:auto;'
                    placeholder="请输入内容"
                    @change='objadda2'
                    v-model="initas.propertyValue"
                    >
                  </el-input>

                  <div v-if="initas.img" class="positonsa">
                   <img v-if="initas.img"  @click="imageindex2(index)" :src="imgurl+initas.img+'?x-oss-process=image/resize,m_fixed,w_90,h_90'"  style="width: 32px;float: left;height: auto;margin-left: 20px;" />
                    <span class="positonsb"  @click='delk2(index)'>x</span>
                  </div>

                   

                    <div v-if="!initas.img  && init.isImg=='0' ? true : false"  class="button_data el-icon-plus avatar-uploader-icon"  @click="imageindex2(index)"></div>

                   <el-button style='float: left;margin: 0 20px;' size='small' type="danger" plain   @click="dellist2(index,initas)">删除</el-button>

                </div>



              </div>

          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="display: contents;">
      <el-col :span="3">
        <div class="grid-content bg-purple"> 
            <p style="text-align: right;font-size: 13px;font-weight: 500;">&nbsp;</p>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color">
              <h5 class="A1-title" >商品规格与库存</h5>
              <div style="margin-bottom: 20px;">
                <p class="A1-describe">最多添加两个商品规格，第一个商品规格可添加规格图片</p>
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
              <span class="fl" style="font-size: 14px;font-weight: 500;padding-left: 12px;">总数量</span>
                <div class="fl TotalQuantity">{{vals}}</div>
                <div class="clears"></div>
                <div style="margin: 10px 0px;"  class="pictsa">
                   <span class="fl" style="line-height: 42px;font-size: 14px;font-weight: 500;padding-left: 12px;display: block;"><span style="color: #f60;margin: 2px;">*</span>原价 : </span>
                    <el-input class="fl" style="margin-left: 12px;height: 30px;width: 162px;" v-model="postsdata.price" placeholder="请输入内容"></el-input>
                     <p id='prices' style='margin-top: 10px;font-size: 13px;display: none;text-align: left;color: #c00;float: left;margin-left: 50px;'>原价不能为空！！！</p>
                </div>
                  <div class="clears"></div>

                  <div class="clears"></div>
                <div style="margin: 10px 0px;"  class="pictsa">
                   <span class="fl" style="line-height: 42px;font-size: 14px;font-weight: 500;padding-left: 12px;display: block;"><span style="color: #f60;margin: 2px;">*</span>现价 : </span>
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
                   <span class="fl" style="line-height: 42px;font-size: 14px;font-weight: 500;padding-left: 12px;display: block;">是否为店铺内推荐商品 : </span>
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
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color pat">
              <h5 class="A1-title" style="font-size: 13px;font-weight: 500;">商品轮播图</h5>
              <p class="A1-describe" style="margin-left: 30px;margin-bottom: 20px;">电脑端宝贝图片宝贝主图大小不能超过3MB；700*700 以上图片上传后宝贝详情页自动提供放大镜功能。第五张图发商品白底图可增加手淘首页曝光机会 查看规范 </p>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile" /> 
                    </form>
                    <div class="positons">宝贝主图</div>
                    <span v-if="postsdata.photos[0]" class="postiona" @click='delx()'>x</span>
                    <img v-if="postsdata.photos[0]"  @click="imageS" :src="imgurl+postsdata.photos[0].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces2" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths2" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile2" /> 
                    </form>
                    <span v-if="postsdata.photos[1]" class="postiona" @click='delx1()'>x</span>
                     <img v-if="postsdata.photos[1]"  @click="imageS1" :src="imgurl+postsdata.photos[1].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces3" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths3" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile3" /> 
                    </form>
                     <span v-if="postsdata.photos[2]" class="postiona" @click='delx2()'>x</span>
                     <img v-if="postsdata.photos[2]"  @click="imageS2" :src="imgurl+postsdata.photos[2].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces4" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths4" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile4" /> 
                    </form>
                    <span v-if="postsdata.photos[3]" class="postiona" @click='delx3()'>x</span>
                     <img v-if="postsdata.photos[3]"  @click="imageS3" :src="imgurl+postsdata.photos[3].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
              <div style="margin-left: 30px;margin-bottom: 20px;position: relative;"  class="pathpoth el-icon-plus">
                    <form style="width: 100%;overflow: hidden;height: 100%;cursor: pointer;position: absolute;top: 0;" id="flces5" method="post" enctype ="multipart/form-data"> 
                       <input type="text" name="pathKey" value="goods" style="display:none;"> 
                      <input id="paths5" style="cursor: pointer;float: left;opacity: 0;width: 100%;height: 100%;" type="file" name="files" @change="tirggerFile5" /> 
                    </form>
                    <div class="positons">宝贝白底图</div>
                    <span v-if="postsdata.photos[4]" class="postiona" @click='delx4()'>x</span>
                     <img v-if="postsdata.photos[4]"  @click="imageS4" :src="imgurl+postsdata.photos[4].path"  style="max-height: 100%;max-width: 100%;width: auto;height: auto;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;"/>
              </div>
          </div>
        </div>
      </el-col>
    </el-row>
      <el-row>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <div class="A1-color pat">
              <h5 class="A1-title" style="font-size: 13px;font-weight: 500;">电脑端描述</h5>
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
              <h5 class="A1-title" style="font-size: 13px;font-weight: 500;">服务与承诺</h5>
              <div style="margin-left: 30px;margin-bottom: 20px;">
                <!-- <p class="A1-describe" style="width: 88%;">
                  <el-row :gutter="20">
                    <el-col :span="3"><div class="grid-content bg-purple">普通商品</div></el-col>
                    <el-col :span="2"><div class="grid-content bg-purple">新品</div></el-col>
                    <el-col :span="2"><div class="grid-content bg-purple">非预售</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">承诺发货时间48小时</div></el-col>
                    <el-col :span="7"><div class="grid-content bg-purple">运费模板包邮默认模板-20180327184102</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">2人团 不限购 不限量</div></el-col>
                  </el-row>
                </p> -->
                <span class="fl" style="line-height: 37px;font-size: 13px;margin-right: 10px;">请选择运费模板:</span><el-select  size="small"   v-model="postsdata.transportId" placeholder="请选择">
                      <el-option
                        v-for="item in freighformworkdata"
                        :key="item.value"
                        :label="item.transName"
                        :value="item.id">
                      </el-option>
                    </el-select>
                <div style="line-height: 42px;">
                  <span>承诺发货时间:</span>
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


     <el-button style="margin: 20px auto;width: 152px;" type="primary" @click="sssA()">保存</el-button>
     <div v-for='init in refresh' v-if='false'>{{init}}</div>
  </div>


</div>
</template>
<script>
import { goodsFindForUpdate ,goodsUpdate,photoAddsss,goodsPropertyAddOnes,goodsPropertyDelOnes,transportLists,goodsBrandAdminLists} from '@/api/edit_commodity'
import { quillEditor } from 'vue-quill-editor'
import {container, ImageExtend} from 'quill-image-extend-module'

 // Quill.register('modules/ImageExtend', ImageExtend)

export default {
  name: 'edit_commodity',
  components: {quillEditor},
  data () {
    return { 
      judge1:null,
      judge2:null,
      index22:null,
      index11:null,
      refresh:[],
      images11:'',
      images_2:'',
      upload1:[],
      upload2:[],
      loading1:false,
      doms:0,
      domd:0,
      domf:0,
      domg:0,
      domgg:0,
      details_json:'',//详情
      photos_json:[],//轮播图
      basePropertys_json:[],//'基本属性值'
      salePropertys_json:[],//销售属性值
      skus_json:[],//sku字符串
      propertysa:[],
      freighformworkdata:[],
      delPhoto:[],
      imgurl:'https://kungshi.oss-cn-shenzhen.aliyuncs.com/',
      chone0:[],
      chone2:[],
      chone3:[],
      data_id0:[],
      data_id2:[],
      data_id3:[],
      notemptys:[null,'',null,'dasdasd','','dsadasd',''],
      sent:'',
      obj2val:[],
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
            delPhoto:[],
            status:'0',
            // introduce:'产品介绍',
            details:'',//详情
            inventory:'',//库存
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
            version:'',
            id:'',
            delSku:[],
            delProperty:[],
            guarantee:{
              deliveryTime:'',// 发货时间承诺
              isReturnable:'0',// 是否7天无理由退换 0 =否 1 =是
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
        stockAndprick:[],

      },
    }
  },



  methods: {
        delk2(index){
          this.domgg=2;
          this.postsdata.delPhoto.push({path:this.objadd2[index].img});
          this.objadd2[index].img='';
         this.refresh.push("1")
        },
        delk(index){
          this.domgg=2;
          this.postsdata.delPhoto.push({path:this.objadd[index].img});
         this.objadd[index].img='';
         this.refresh.push("1")
        },
        objadda2(a){
              if(a==''  || a==null){
                this.$message.error('规格值不能为空!!!');
                  return false;
              }
              this.arr[0]=this.objadd2;
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


                          // if(this.stockAndprick[i].stock=='null' || this.stockAndprick[i].stock==null){
                          //   this.stockAndprick[i].stock='';
                          // }
                          // if(this.stockAndprick[i].price=='null' || this.stockAndprick[i].price==null){
                          //   this.stockAndprick[i].price='';
                          // }
                          if(this.stockAndprick[i]){
                            str += "<tr>" + tmp + "<td><input value='"+this.stockAndprick[i].stock+"'  type='text' id='o"+i+"stock'   /></td>" + "<td><input  type="+'text'+" id='o"+i+"price' value='"+this.stockAndprick[i].price+"' /></td>" + "</tr>";  
                            }else{
                              str += "<tr>" + tmp + "<td><input  type='text' id='o"+i+"stock'   /></td>" + "<td><input  type="+'text'+" id='o"+i+"price'  /></td>" + "</tr>";  
                            } 
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
        objadda1(a){
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
                          //  if(this.stockAndprick[i].stock=='null' || this.stockAndprick[i].stock==null){
                          //   this.stockAndprick[i].stock='';
                          // }
                          // if(this.stockAndprick[i].price=='null' || this.stockAndprick[i].price==null){
                          //   this.stockAndprick[i].price='';
                          // }
                          if(this.stockAndprick[i]){
                            str += "<tr>" + tmp + "<td><input value='"+this.stockAndprick[i].stock+"'  type='text' id='o"+i+"stock'   /></td>" + "<td><input  type="+'text'+" id='o"+i+"price' value='"+this.stockAndprick[i].price+"' /></td>" + "</tr>";  
                            }else{
                              str += "<tr>" + tmp + "<td><input  type='text' id='o"+i+"stock'   /></td>" + "<td><input  type="+'text'+" id='o"+i+"price'  /></td>" + "</tr>";  
                            }
                            
                          
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
                        }else if(asd[i].innerText==''){
                          asd[i].style.display='none';
                        }
                      }
    },
    imageindex2(index){
       this.domgg=3;
      this.domg++;
       this.index22=index;
       $('#Upload_acs').click();
    },
    async UploadApicture_ac(){
         const formDatas = new FormData(document.getElementById('Upload_ac'));
            const ss =$('#Upload_acs')[0].files[0];
            const asda = await photoAddsss(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.objadd2[this.index22].img=datatable.object[0].path;
            this.refresh.push('1');
           }
    },
    UploadApicture_22(index){
      $('#Upload_es').click();
    },
    imageindex1(index){
      this.domgg=3;
      this.domg++;
      this.index11=index;
      $('#UploadApicture22s').click();
    },
    async UploadApicture_a(){
            const formDatas = new FormData(document.getElementById('Upload_e'));
            const ss =$('#Upload_es')[0].files[0];
            const asda = await photoAddsss(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.images_2=datatable.object[0].path;
            this.refresh.push('1');
           }
    },
    async UploadApicture_json22(){
            const formDatas = new FormData(document.getElementById('UploadApicture22'));
            const ss =$('#UploadApicture22s')[0].files[0];
            const asda = await photoAddsss(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.objadd[this.index11].img=datatable.object[0].path;
              this.refresh.push('1');

           }

    },
    async UploadApicture_json1(){
            const formDatas = new FormData(document.getElementById('UploadApicture1'));
            const ss =$('#UploadApicture1s')[0].files[0];
            const asda = await photoAddsss(formDatas);
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            this.images11=datatable.object[0].path;
            this.refresh.push('1');
           }
    },
    UploadApicture2(){
        $('#UploadApicture1s').click();
    },
    UploadApicture11(){
         $('#UploadApicture1s').click();
    },
    Pleaseinputcontents(){
      this.domf++;
    },
    handleChecked(index){
 
    },
    delx (){
        // this.postsdata.photos[0]='';
        this.postsdata.delPhoto.push(this.postsdata.photos[0]);
        this.postsdata.photos.splice(0,1,'');
    },
    delx1(){
        this.postsdata.delPhoto.push(this.postsdata.photos[1]);
        this.postsdata.photos.splice(1,1,'');
    },
    delx2(){
        this.postsdata.delPhoto.push(this.postsdata.photos[2]);
        this.postsdata.photos.splice(2,1,'');
    },
    delx3(){
        this.postsdata.delPhoto.push(this.postsdata.photos[3]);
        this.postsdata.photos.splice(3,1,'');
    },
    delx4(){
        this.postsdata.delPhoto.push(this.postsdata.photos[4]);
        this.postsdata.photos.splice(4,1,'');
    },
    handleCheckedCitiesChange(row){
       this.domf++;
    },
    imageS(){
      $('#paths').click();
    },
    imageS1(){
       $('#paths2').click();
    },
     imageS2(){
       $('#paths3').click();
    },
    imageS3(){
       $('#paths4').click();
    },
    imageS4(){
       $('#paths5').click();
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
            const asda = await photoAddsss(formDatas)
            const datatable =await asda.json();
           if(datatable.statusCode==200){
              this.postsdata.delPhoto.push(this.postsdata.photos[0]);
             this.postsdata.mainPhoto=datatable.object[0].path;
             this.postsdata.photos[0]=datatable.object[0];
           }
           this.refresh.push('1');
           this.domd++;
        },
        async tirggerFile2 (row){
            const formDatas = new FormData(document.getElementById('flces2'));
            const ss =$('#paths2')[0].files[0];
            const asda = await photoAddsss(formDatas)
            const datatable =await asda.json();
           if(datatable.statusCode==200){
            if(this.postsdata.photos[1]){
             this.postsdata.delPhoto.push(this.postsdata.photos[1]);
            }
            this.postsdata.photos[1]=datatable.object[0];
           }
           this.domd++;
           this.refresh.push('1');
        },
        async tirggerFile3 (row){
            const formDatas = new FormData(document.getElementById('flces3'));
            const ss =$('#paths3')[0].files[0];
            const asda = await photoAddsss(formDatas)
            const datatable =await  asda.json();
            if(datatable.statusCode==200){
              if(this.postsdata.photos[2]){
                 this.postsdata.delPhoto.push(this.postsdata.photos[2]);
              }
            this.postsdata.photos[2]=datatable.object[0];
           }
           this.domd++;
           this.refresh.push('1');
        },
        async tirggerFile4 (row){
            const formDatas = new FormData(document.getElementById('flces4'));
            
            const ss =$('#paths4')[0].files[0];

            const asda = await photoAddsss(formDatas)
            const datatable =await  asda.json();
           if(datatable.statusCode==200){
            if(this.postsdata.photos[3]){
                 this.postsdata.delPhoto.push(this.postsdata.photos[3]);
              }
            this.postsdata.photos[3]=datatable.object[0];
           }
           this.domd++;
           this.refresh.push('1');
        },
        async tirggerFile5 (row){
            const formDatas = new FormData(document.getElementById('flces5'));
            const ss =$('#paths5')[0].files[0];
            const asda = await photoAddsss(formDatas)
            const datatable =await  asda.json();
            if(datatable.statusCode==200){
              if(this.postsdata.photos[4]){
                 this.postsdata.delPhoto.push(this.postsdata.photos[4]);
              }
            this.postsdata.photos[4]=datatable.object[0];
           }
           this.domd++;
           this.refresh.push('1');
        },
        async tirggerFile6 (row){
            const formDatas = new FormData(document.getElementById('flces6'));
            const ss =$('#paths6')[0].files[0];
  
            const asda = await photoAddsss(formDatas)
            const datatable =await asda.json();
            if(datatable.statusCode==200){
             $('.ql-container .ql-editor').append("<img src='https://kungshi.oss-cn-shenzhen.aliyuncs.com/"+datatable.object[0].path +"' />");
            }
            this.refresh.push('1');
        },
        notempty (arrays){
                   for(var i = 0 ;i<arrays.length;i++)
                          {
                              if(arrays[i] == null || arrays[i] == "" || typeof(arrays[i]) == "undefined")
                              {
                                  arrays.splice(i,1);
                                  i= i-1;
                              }
                          }
              return arrays;
        },
        trim(s){
            return s.replace(/(^\s*)|(\s*$)/g, "");
        },
        async sssA(){ 
            this.CommodityTitle=String(this.CommodityTitle);
            this.postsdata.price=JSON.stringify(this.postsdata.price);
            this.postsdata.currentPrice=String(this.postsdata.currentPrice);
            this.postsdata.serial=String(this.postsdata.serial);

            this.CommodityTitle=this.CommodityTitle.replace(/(^\s*)|(\s*$)/g, "");
            this.postsdata.price=this.postsdata.price.replace(/(^\s*)|(\s*$)/g, "");
           this.postsdata.currentPrice=this.postsdata.currentPrice.replace(/(^\s*)|(\s*$)/g, "");
           this.postsdata.serial=this.postsdata.serial.replace(/(^\s*)|(\s*$)/g, "");


              if(this.CommodityTitle == null || this.CommodityTitle==""){
                  this.$message.error('标题不能为空!!!');
                  return ;
               }else if(this.postsdata.price == null || this.postsdata.price==""){
                  this.$message.error('原价不能为空!!!');
                  return ;
               }else if(this.postsdata.currentPrice == null || this.postsdata.currentPrice==""){
                  this.$message.error('现价不能为空!!!');
                      return ;
               }else if(this.postsdata.serial == null || this.postsdata.serial==""){
                  this.$message.error('商品编码不能为空!!!');
                      return ;
               }else if(this.postsdata.photos.length==0 || this.postsdata.photos==''){
                    this.$message.error('主图不能为空!!!');
                    return ;
                }


               if(this.postsdata.currentPrice=='null' || this.postsdata.currentPrice==null){
                  this.postsdata.currentPrice='';
               }




                this.postsdata.basePropertys=[];
          for(var i=0;i<this.obj2.length;i++){
            if(this.obj2[i].valueType=='0'){
                const spids ={specId:this.obj2[i].id,propertyValue:this.obj2[i].idAndValue};
                this.postsdata.basePropertys[i]=spids;
            }else if(this.obj2[i].valueType == '3'){
                this.postsdata.basePropertys[i]={specId:this.obj2[i].id,propertyId:this.obj2[i].idAndValue};
            }
          }
          for(var i=0;i<this.obj2.length;i++){
           if(this.obj2[i].valueType == '2'){
                this.postsdata.basePropertys.splice(i, 1);
                const ids = this.obj2[i].id;
                 const zxcsss=this.obj2[i].idAndValue;
                  this.notempty(zxcsss)
                for(var d=0;d<this.obj2[i].idAndValue.length;d++){
                   const idss = this.obj2[i].idAndValue[d];
                  const spid = {specId:ids,propertyId:idss};
                  this.postsdata.basePropertys.push(spid);
                }
            }
          }

              for(var s=0;s<this.objadd.length;s++){
                const  idf={id:this.objadd[s].id};
                if(this.objadd[s].img==null  || this.objadd[s].img=='null'){
                    this.objadd[s].img='';
                }
                const  idfs={id:this.objadd[s].id,img:this.objadd[s].img}
                if(this.judge1=='0'){
                    this.postsdata.salePropertys.push(idfs)
                }else{
                  this.postsdata.salePropertys.push(idf)
                }
              }
              for(var ss=0;ss<this.objadd2.length;ss++){
                 const  idf={id:this.objadd2[ss].id};
                  const  idfs={id:this.objadd2[ss].id,img:this.objadd2[ss].img}
                if(this.judge2=='0'){
                    this.postsdata.salePropertys.push(idfs)
                }else{
                  this.postsdata.salePropertys.push(idf)
                }
               
                 
              }
             
              
              for(var r=0;r<this.postsdata.salePropertys.length;r++){
                  if(!this.postsdata.salePropertys[r].id){
                       this.postsdata.salePropertys.splice(r, 1);
                  }

              }
               this.postsdata.salePropertys=JSON.stringify(this.postsdata.salePropertys);
                this.postsdata.basePropertys=JSON.stringify(this.postsdata.basePropertys);
                // this.sss();     
//SKU数据------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
                            if(this.Stockdata[f]){
                                this.$message('价格不能为空!!!');
                                  return;
                            }else if(this.Pricedata[f]){
                                 this.$message('数量不能为空!!!');
                                  return;
                            }


                  if(this.datasize[f]>this.datacolor[f]){
                    if(this.stockAndprick[f]){
                          if(this.datacolor[f]  && this.datasize[f]){
                             this.objectdata[f]={id:this.stockAndprick[f].id,property:this.datacolor[f]+','+ this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                          }else{
                            if(!this.datacolor[f]){
                                  this.objectdata[f]={id:this.stockAndprick[f].id,property:this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                            }
                            if(!this.datasize[f]){
                                this.objectdata[f]={id:this.stockAndprick[f].id,property:this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                            }
                            
                          }
                          
                      }else{
                        if(this.datacolor[f]  && this.datasize[f]){
                             this.objectdata[f]={property:this.datacolor[f]+','+ this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                          }else{
                            if(!this.datacolor[f]){
                                  this.objectdata[f]={property:this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                            }
                            if(!this.datasize[f]){
                                this.objectdata[f]={property:this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                            }
                            
                          }
                      }
                      
                  }else{
                    if(this.stockAndprick[f]){
                      if(this.datasize[f] && this.datacolor[f]){
                          this.objectdata[f]={id:this.stockAndprick[f].id,property:this.datasize[f]+','+ this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                      }else{
                        if(!this.datasize[f]){
                            this.objectdata[f]={id:this.stockAndprick[f].id,property:this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                        }
                        if(!this.datacolor[f]){
                             this.objectdata[f]={id:this.stockAndprick[f].id,property:this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                        }
                      }
                      
                    }else{
                      if(this.datasize[f] && this.datacolor[f]){
                        this.objectdata[f]={property:this.datasize[f]+','+ this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]};
                      }else{
                          if(!this.datasize[f]){
                            this.objectdata[f]={property:this.datacolor[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                        }
                        if(!this.datacolor[f]){
                             this.objectdata[f]={property:this.datasize[f],stock:this.Stockdata[f],price:this.Pricedata[f]}
                        }
                      }
                      
                    }
                  }
              }
          }   
                this.postsdata.skus=JSON.stringify(this.objectdata);
//SKU数据结束------------------------------------
//富文本数据--------------------------------------------->>>>>>>>>>>>>>
                this.postsdata.details=this.content;
//富文本数据结束---------------------------------------------
                if(this.postsdata.delPhoto.length==0){
                    this.postsdata.delPhoto=[];
                }
                for(var a=0;a<this.postsdata.photos.length;a++){
                    if(this.postsdata.photos[a]==''){
                      this.postsdata.photos.splice(a,1);
                    }
                }
                this.postsdata.delPhoto=JSON.stringify(this.postsdata.delPhoto);
                this.postsdata.photos=JSON.stringify(this.postsdata.photos);
                this.postsdata.guarantee=JSON.stringify(this.postsdata.guarantee);
                if(this.postsdata.delPhoto=='[]'){
                    this.postsdata.delPhoto='';
                }
                if(this.doms==1 || this.doms==null  || this.doms=='null'){
                  this.postsdata.details='';  //详情
                }
                  if(this.domd==1){
                      this.postsdata.photos='';  //轮播图
                  }
                
                if(this.domf==2){
                    this.postsdata.basePropertys='';   //'基本属性值'
                }

                if(this.domg==0 && this.domgg==0){
                  this.postsdata.salePropertys='';   //销售属性值
                   this.postsdata.skus='';   //sku字符串
                }


                if(this.domg==0 && this.domgg==2){
                   this.postsdata.skus='';   //sku字符串
                }


                  
                  
                 








                const zxcv=this.postsdata.photos;
                const asd = await goodsUpdate(this.postsdata);
                const datatable =await asd.json();
                if(datatable.statusCode==200){
                     this.$notify({
                        title: '提示！',
                        message: '修改成功！！！',
                        type: 'success'
                      });
                      // this.$router.push('/babyList')
                }else{
                   this.$message(datatable.message);
                }
        },
        async sss (){

        },
        async dellist1 (a,b){
              this.postsdata.delProperty.push(b.id);
              this.objadd.splice(a, 1); 
              for(var o=0;o<this.stockAndprick.length;o++){
                var str = this.stockAndprick[o].property;
                  var arr = str.split(',');
                  if(b.id==Number(arr[0]) || b.id==Number(arr[1])){
                    this.postsdata.delSku.push(this.stockAndprick[o].id)
                  }
              }
        },
        async dellist2 (a,b){
           this.postsdata.delProperty.push(b.id);
               this.objadd2.splice(a, 1); 
                for(var o=0;o<this.stockAndprick.length;o++){
                var str = this.stockAndprick[o].property;
                  var arr = str.split(',');
                  if(b.id==Number(arr[0]) || b.id==Number(arr[1])){
                    this.postsdata.delSku.push(this.stockAndprick[o].id)
                  }
              }
        },
        AddSpecifications(){
          this.addspes=this.addspes+1;
         if(this.addspes>=2){
          this.addspes=2;
         }
        },
        async add(row){
          this.domgg=3;
          this.domg++;
          this.aname=row.name;
          if(this.Specifications !== ''){
            this.specIddataA.specId=row.id;
            this.specIddataA.propertyValue=this.Specifications;
             const response = await goodsPropertyAddOnes(this.specIddataA)
            const datatable = await  response.json();
            const data=datatable.object;
            if(this.images11){
                 this.objadd.push({id:data.id,img:this.images11,propertyValue:data.propertyValue});

            }else{
               this.objadd.push({id:data.id,propertyValue:data.propertyValue})
            }

           ;
          }
            this.images11='';
            this.Specifications='';
        },
        async add2(row){
          this.domgg=3;
          this.domg++;
          this.bname=row.name;
          if(this.Specifications2 !== ''){
            this.specIddataA.specId=row.id;
            this.specIddataA.propertyValue=this.Specifications2;
             const response = await goodsPropertyAddOnes(this.specIddataA)
            const datatable = await  response.json(); 
            if(datatable.statusCode==200){
                const data=datatable.object;
                if(this.images_2){
                 this.objadd2.push({id:data.id,img:this.images_2,propertyValue:data.propertyValue});

                }else{
                   this.objadd2.push({id:data.id,propertyValue:data.propertyValue})
                }
                if(this.objadd2[0].propertyValue=='false'){
                 this.objadd2.splice(0, 1); 
                }
            }
          }
            this.images_2='';
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
      this.loading1=true;
          const datav = await goodsBrandAdminLists();
         const datavjson = await  datav.json(); 
         if(datavjson.statusCode==401){
               this.$message('未登录');
              this.$router.push('/Sign_in')
            }
         this.propertysa=datavjson.object;
          const datay = await transportLists();
          const datajson = await  datay.json(); 
          
            this.freighformworkdata=datajson.object;

          const caths=this;
          this.objadd2=[{propertyValue:'false'}]
          // this.inin();
            $("#demo").on("change","input",function(event){
                   caths.domg++;
                    var n = Math.floor(Number(event.target.value));
                    if(n !== Infinity && JSON.stringify(n) === event.target.value && n >= 0){
                      caths.sss();
                      caths.Pricedata=caths.Pricedata.map(Number)
                      caths.vals=0;
                      for(var m=0;m<caths.Pricedata.length;m++){
                        if(!caths.Pricedata[m]){
                            caths.Pricedata[m]=0;
                        }
                        caths.vals+=caths.Pricedata[m]
                      }
                    }else{
                      event.target.value='';
                    }
                    
            })
             const ida=$.cookie('ids');
              this.sent=JSON.parse(ida);
               const response = await goodsFindForUpdate(this.sent)
               this.postsdata.id=this.sent;
               const datatable = await  response.json(); 
              if(datatable.statusCode==200){
                   this.loading1=false;
                this.CommodityTitle=datatable.object.goodsName;//标题
                this.obj=datatable.object.saleSpec
                this.obj2=datatable.object.baseSpec;
                this.postsdata.storeRecommend=datatable.object.storeRecommend;
                this.vals=datatable.object.inventory;
                 this.postsdata.price=datatable.object.price;
                 this.postsdata.serial=datatable.object.serial;
                 this.postsdata.version=datatable.object.version
                 this.postsdata.photos=datatable.object.photos;
                 this.postsdata.photos= JSON.parse(datatable.object.photos);
                 this.postsdata.mainPhoto=this.postsdata.photos[0].path;
                 this.postsdata.brandId=datatable.object.brandId;  
                 this.postsdata.currentPrice=datatable.object.currentPrice;
                 this.postsdata.transportId=datatable.object.transportId;
                 if(datatable.object.saleSpec[0].idAndValue!=='null'  && datatable.object.saleSpec[0].idAndValue.length!==0  && datatable.object.saleSpec[0].idAndValue){
                    this.upload1=datatable.object.saleSpec[0].idAndValue;
                     this.judge1=datatable.object.saleSpec[0].isImg;
                  }
                if(datatable.object.saleSpec[1]){
                      if(datatable.object.saleSpec[1].idAndValue!=='null'  && datatable.object.saleSpec[1].idAndValue.length!==1  && datatable.object.saleSpec[1].idAndValue){
                          this.upload2=datatable.object.saleSpec[1].idAndValue;
                           this.judge2=datatable.object.saleSpec[1].isImg;
                       }
                }
                 
                 if(datatable.object.goodsGuaranteeModel){
                  this.postsdata.guarantee.deliveryTime=JSON.stringify(datatable.object.goodsGuaranteeModel.deliveryTime);
                 }
                 
                  const thic=datatable.object.details;
                  $(function() {
                    $('.ql-container .ql-editor').append(thic);
                  })      
                 this.stockAndprick=datatable.object.skus;
                for(var i=0;i<this.obj.length;i++){
                  const valnames={valueType:this.obj[i].valueType,name:this.obj[i].name,id:this.obj[i].id,isImg:this.obj[i].isImg};
                  this.colorlist.push(this.obj[i].property);
                  this.colorname.push(valnames);
                }
              }
                  this.objadd=this.obj[0].idAndValue
                  if(this.obj[1]){
                    this.objadd2=this.obj[1].idAndValue
                  }
                  
                  this.aname=this.obj[0].name

                  if(this.obj[1]){
                     this.bname=this.obj[1].name
                  }
          

          for(var g=0;g<this.obj2.length;g++){
            if(this.obj2[g].valueType=='0'){

              this.data_id0.push(this.obj2[g].id)
                 
            }else if(this.obj2[g].valueType == '2'){
                   this.data_id2.push(this.obj2[g].id)
         
            }else if(this.obj2[g].valueType == '3'){
                   this.data_id3.push(this.obj2[g].id)
            }
          }

          for(var o=0;o<this.valData.length;o++){
              for(var p=0;p<this.data_id0.length;p++){
                  if(this.data_id0[p]==this.valData[o].specId){
                      this.chone0.push(this.valData[o]);
                  }
              }
          }
          for(var o=0;o<this.valData.length;o++){
              for(var p=0;p<this.data_id2.length;p++){
                  if(this.data_id2[p]==this.valData[o].specId){
                  

                      this.chone2.push(this.valData[o]);
                  }
              }
          }

          for(var o=0;o<this.valData.length;o++){
              for(var p=0;p<this.data_id3.length;p++){
                  if(this.data_id3[p]==this.valData[o].specId){
                  

                      this.chone3.push(this.valData[o]);
                      this.chone3[p].propertyValue
                  }
              }
          }
         
  },
  watch: {
    'postsdata.price': function (a,b){
       if(a.indexOf(" ") >= 0 || a == null || a==""){
          $('#prices').css('display', 'block');
       }else{
          $('#prices').css('display', 'none');
       }

    },
    'postsdata.currentPrice': function (a,b){
       if(a.indexOf(" ") >= 0 || a == null || a==""){
          $('#currentPrices').css('display', 'block');
       }else{
          $('#currentPrices').css('display', 'none');
       }

    },
    'postsdata.serial': function (a,b){
       if(a.indexOf(" ") >= 0 || a == null || a==""){
          $('#serials').css('display', 'block');
       }else{
          $('#serials').css('display', 'none');
       }

    },
    CommodityTitle(a,b){

        this.domf++;
        if(this.domf==1){
          return false;
        }
       if(a == null || a==""){
          $('#titles').css('display', 'block');
       }else{
          $('#titles').css('display', 'none');
       }

    },  
    'postsdata.brandId':function (a,b) {
      this.domf++;
    },
    'postsdata.photos': function (a,b) {
      this.domd++;
    },
    content(a,b){
      this.doms++;
    },
  '$route': function (route) {
    if(route.path=="/edit_commodity"){
         location.reload()
    }
  },
    sent(){

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
                          //  if(this.stockAndprick[i].stock=='null' || this.stockAndprick[i].stock==null){
                          //   this.stockAndprick[i].stock='';
                          // }
                          // if(this.stockAndprick[i].price=='null' || this.stockAndprick[i].price==null){
                          //   this.stockAndprick[i].price='';
                          // }
                          if(this.stockAndprick[i]){
                            str += "<tr>" + tmp + "<td><input value='"+this.stockAndprick[i].stock+"'  type='text' id='o"+i+"stock'   /></td>" + "<td><input  type="+'text'+" id='o"+i+"price' value='"+this.stockAndprick[i].price+"' /></td>" + "</tr>";  
                            }else{
                              str += "<tr>" + tmp + "<td><input  type='text' id='o"+i+"stock'   /></td>" + "<td><input  type="+'text'+" id='o"+i+"price'  /></td>" + "</tr>";  
                            }
                            
                          
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
                        }else if(asd[i].innerText==''){
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


                          // if(this.stockAndprick[i].stock=='null' || this.stockAndprick[i].stock==null){
                          //   this.stockAndprick[i].stock='';
                          // }
                          // if(this.stockAndprick[i].price=='null' || this.stockAndprick[i].price==null){
                          //   this.stockAndprick[i].price='';
                          // }
                          if(this.stockAndprick[i]){
                            str += "<tr>" + tmp + "<td><input value='"+this.stockAndprick[i].stock+"'  type='text' id='o"+i+"stock'   /></td>" + "<td><input  type="+'text'+" id='o"+i+"price' value='"+this.stockAndprick[i].price+"' /></td>" + "</tr>";  
                            }else{
                              str += "<tr>" + tmp + "<td><input  type='text' id='o"+i+"stock'   /></td>" + "<td><input  type="+'text'+" id='o"+i+"price'  /></td>" + "</tr>";  
                            } 
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
  padding: 12px 0px;
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
width: 160px;
}
.CategoryAttributebox div{
float: left;
margin: 3px 10px;
width: 306px;
min-height: 60px;
padding-right: 10px;
display: block;
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
.positonsa{
position: relative;

display: inline-block;

float: left;
}
.positonsb{
position: absolute;

color: #f56c6c;

right: -10px;

top: -5px;

height: 0px;

line-height: 12px;
cursor: pointer;
}
</style>