<template >
    <div class='facebook' v-loading="loading6">
      <el-dialog title="编辑运费模板" :visible.sync="dialogTableVisibleent" class="dinalog" v-loading="loading3">
        <div style="margin:0 20px;">
           <span class="fl" style="margin-right: 10px;font-size: 13px;line-height: 30px;">模板名称: </span><el-input class="FreightManagementinput" size="small" v-model="objects.transName" placeholder="请输入内容" style="float: left;display: inline-block;width: 230px;height: 30px;"></el-input>
           <div class="clears"></div>
           <div style="margin: 20px auto;"  class="NewShippingTemplate">
              <div class="clears"></div>
              <span class="fl" style="margin-right: 10px;font-size: 13px;line-height: 30px;">发货时间: </span>
             <el-select v-model="objects.transTime" placeholder="请选择" class="fl">
                <el-option
                  v-for="item in DeliveryTimeData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
           <div class="clears"></div>
            <div style="margin: 20px auto;">
               <span class="fl" style="margin-right: 10px;font-size: 13px;line-height: 30px;">是否包邮: </span>
                <div class="fl" style="height: 30px;line-height: 30px;">
                   <el-radio @change="handleCheckedCitiesChangeAa" v-model="objects.isFreeMail" label="0">全国包邮</el-radio>
                    <el-radio @change="handleCheckedCitiesChangeAa" v-model="objects.isFreeMail" label="1">自定义</el-radio>
                </div>
            </div>
            <div class="clears"></div>
            <div style="margin: 20px auto;">
               <span class="fl" style="margin-right: 10px;font-size: 13px;line-height: 30px;">计价方式: </span>
                <div class="fl" style="height: 30px;line-height: 30px;">
                   <el-radio v-model="objects.transType" label="0">按件数</el-radio>
                    <el-radio v-model="objects.transType" label="1">按重量</el-radio>
                    <el-radio v-model="objects.transType" label="2">按体积</el-radio>
                </div>
            </div>

            <div class="clears"></div>
            <div style="margin: 20px auto;"  class="express">
               <span class="fl" style="margin-right: 10px;font-size: 13px;line-height: 30px;">运送方式: </span>
                <div class="fl" style="line-height: 30px;text-align: left;">
                    <el-checkbox-group v-model="checkedCitiesd" @change="handleCheckedCitiesChangead">
                      <el-checkbox  label="1" >
                        快递
                      </el-checkbox>
                      <div class="check_box" id="chek11" style="display: none;">
                          <div class="check_titles">
                            <p class="text_fl">默认运费</p>
                            <el-input v-model="objects.emsInfo.num"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{InsidePart}}</p>
                            <el-input v-model="objects.emsInfo.fee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                             <p class="text_fl">元,&nbsp;&nbsp;&nbsp;每增加</p>
                            <el-input v-model="objects.emsInfo.addNum"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{IncreaseFreightCharges}}</p>
                            <el-input v-model="objects.emsInfo.addFee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">元</p>
                          </div>
                          <div class="address">
                            <p>运送到</p>

                            <div style='max-width: 150px;' v-for='(inin,index) in objects.emsInfo.specCity_id'>
                              <span class='fl' v-for="(inis) in options"  v-if='inin==inis.id'>{{ inis.areaname+'、' }}</span>
                            </div>
                            <div class='clears'></div>
                            <p @click="dialogaddersd11=true" style="color: #388be8;cursor: pointer;margin-right: 10px;">添加地区</p>
                            <div class="tableaddress">
                              <table>
                                <thead>
                                  <tr>
                                    <th>{{firstPiece}}</th>
                                    <th>首费(元)</th>
                                    <th>{{Continuity}}</th>
                                    <th>续费(元)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>
                                    <el-input v-model="objects.emsInfo.specNum" ></el-input>
                                  </td>
                                  <td>
                                   <el-input v-model="objects.emsInfo.specFee" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="objects.emsInfo.specAddNum" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="objects.emsInfo.specAddFee" ></el-input>
                                  </td>
                                
                                </tr>
                                </tbody>
                            </table>


                            </div>
                          </div>
                      </div>
                      <el-checkbox  label="2" >
                      EMS 
                      </el-checkbox>
                      <div class="check_box" id="chek22" style="display: none;">
                          <div class="check_titles">
                            <p class="text_fl">默认运费</p>
                            <el-input v-model="objects.expressInfo.num"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{InsidePart}}</p>
                            <el-input v-model="objects.expressInfo.fee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                             <p class="text_fl">元,&nbsp;&nbsp;&nbsp;每增加</p>
                            <el-input v-model="objects.expressInfo.addNum"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{IncreaseFreightCharges}}</p>
                            <el-input v-model="objects.expressInfo.addFee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">元</p>
                          </div>
                          <div class="address">
                            <p>运送到</p>
                            <!--  <div style="width: 150px;">
                              <span v-for="inis in nameaddb">{{inis}}丶</span>
                            </div> -->
                            <div style='max-width: 150px;' v-for='(inin,index) in objects.expressInfo.specCity_id'>
                              <span class='fl' v-for="(inis) in options"  v-if='inin==inis.id'>{{ inis.areaname+'、' }}</span>
                            </div>
                            <div class='clears'></div>
                            <p @click="dialogaddersd26=true" style="color: #388be8;cursor: pointer;margin-right: 10px;">添加地区</p>
                            <div class="tableaddress">
                              
                              <table>
                                <thead>
                                  <tr>
                                    <th>{{firstPiece}}</th>
                                    <th>首费(元)</th>
                                    <th>{{Continuity}}</th>
                                    <th>续费(元)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>
                                    <el-input v-model="objects.expressInfo.specNum" ></el-input>
                                  </td>
                                  <td>
                                   <el-input v-model="objects.expressInfo.specFee" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="objects.expressInfo.specAddNum" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="objects.expressInfo.specAddFee" ></el-input>
                                  </td>
                                
                                </tr>
                                </tbody>
                            </table>


                            </div>
                          </div>
                      </div>
                      <el-checkbox  label="3" >
                        平邮
                      </el-checkbox>
                      <div class="check_box" id="chek33" style="display: none;">
                          <div class="check_titles">
                            <p class="text_fl">默认运费</p>
                            <el-input v-model="objects.mailInfo.num"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{InsidePart}}</p>
                            <el-input v-model="objects.mailInfo.fee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                             <p class="text_fl">元,&nbsp;&nbsp;&nbsp;每增加</p>
                            <el-input v-model="objects.mailInfo.addNum"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{IncreaseFreightCharges}}</p>
                            <el-input v-model="objects.mailInfo.addFee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">元</p>
                          </div>
                          <div class="address">
                            <p>运送到</p>
                             <!-- <div style="width: 150px;">
                              <span v-for="inis in nameaddc">{{inis}}丶</span>
                            </div> -->

                             <div style='max-width: 150px;' v-for='(inin,index) in objects.mailInfo.specCity_id'>
                              <span class='fl' v-for="(inis) in options"  v-if='inin==inis.id'>{{ inis.areaname+'、' }}</span>
                            </div>
                             <div class='clears'></div>
                            <p @click="dialogaddersd36=true" style="color: #388be8;cursor: pointer;margin-right: 10px;">添加地区</p>
                            <div class="tableaddress">
                              
                              <table>
                                <thead>
                                  <tr>
                                    <th>{{firstPiece}}</th>
                                    <th>首费(元)</th>
                                    <th>{{Continuity}}</th>
                                    <th>续费(元)</th>
                                  </tr>
                                </thead>
                               <tbody>
                                <tr>
                                  <td>
                                    <el-input v-model="objects.mailInfo.specNum" ></el-input>
                                  </td>
                                  <td>
                                   <el-input v-model="objects.mailInfo.specFee" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="objects.mailInfo.specAddNum" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="objects.mailInfo.specAddFee" ></el-input>
                                  </td>
                                </tr>
                                </tbody>
                            </table>


                            </div>
                          </div>
                      </div>
                    </el-checkbox-group>
                </div>
            </div>
             <div class="clears"></div>
             <div style="display: block;overflow: hidden;">
                <el-button @click="Preservation" type="primary"  style="float: left;margin: 20px auto;">保存</el-button>
                <el-button style="float: left;margin: 20px;">取消</el-button>
             </div>
           
           </div>
           
      </div>
          </el-dialog>
        <el-dialog title="选择区域" :visible.sync="dialogaddersd" @close="guanbi"  class="dias">
              <el-checkbox-group v-model="freightFormwork.emsInfo.specCity_id" @change="handleCheckedCitiesChangeert">
                <el-checkbox v-for="city in optionsADDS" :label="city.id" :key="city.id">{{city.areaname}}</el-checkbox>
              </el-checkbox-group>
              <el-button @click="dialogaddersd=false" type="success"  style="display: block;margin: 25px auto;">确定</el-button>
          </el-dialog>
           <el-dialog title="选择区域" :visible.sync="dialogaddersd2"  class="dias">
            <el-checkbox-group v-model="freightFormwork.expressInfo.specCity_id" @change="handleCheckedCitiesChangeert2">
                <el-checkbox v-for="city in optionsADDS" :label="city.id" :key="city.id">{{city.areaname}}</el-checkbox>
              </el-checkbox-group>
              <el-button @click="dialogaddersd2=false" type="success"  style="display: block;margin: 25px auto;">确定</el-button>
          </el-dialog>
           <el-dialog title="选择区域" :visible.sync="dialogaddersd3"  class="dias">
            <el-checkbox-group v-model="freightFormwork.mailInfo.specCity_id" @change="handleCheckedCitiesChangeert3">
                <el-checkbox v-for="city in optionsADDS" :label="city.id" :key="city.id">{{city.areaname}}</el-checkbox>
              </el-checkbox-group>
              <el-button @click="dialogaddersd3=false" type="success"  style="display: block;margin: 25px auto;">确定</el-button>
          </el-dialog>


          <el-dialog title="选择区域" :visible.sync="dialogaddersd11" @close="guanbi"  class="dias">
              <el-checkbox-group v-model="objects.emsInfo.specCity_id" @change="handleCheckedCitiesChangeert12">
                <el-checkbox v-for="city in optionsADDS" :label="city.id" :key="city.id">{{city.areaname}}</el-checkbox>
              </el-checkbox-group>
              <el-button @click="dialogaddersd11=false" type="success"  style="display: block;margin: 25px auto;">确定</el-button>
          </el-dialog>
          <el-dialog title="选择区域" :visible.sync="dialogaddersd26"  class="dias">
            <el-checkbox-group v-model="objects.expressInfo.specCity_id" @change="handleCheckedCitiesChangeert21">
                <el-checkbox v-for="city in optionsADDS" :label="city.id" :key="city.id">{{city.areaname}}</el-checkbox>
              </el-checkbox-group>
              <el-button @click="dialogaddersd26=false" type="success"  style="display: block;margin: 25px auto;">确定</el-button>
          </el-dialog>
          <el-dialog title="选择区域" :visible.sync="dialogaddersd36"  class="dias">
            <el-checkbox-group v-model="objects.mailInfo.specCity_id" @change="handleCheckedCitiesChangeert36">
                <el-checkbox v-for="city in optionsADDS" :label="city.id" :key="city.id">{{city.areaname}}</el-checkbox>
              </el-checkbox-group>
              <el-button @click="dialogaddersd36=false" type="success"  style="display: block;margin: 25px auto;">确定</el-button>
          </el-dialog>

          

          <el-dialog title="修改地址" :visible.sync="dialogTableVisible">
            <div  class="AddressLibrary">
              <el-form  :label-position="labelPosition" label-width="80px" :model="formLabelAlignA" style="line-height: 32px;" >
                    <el-form-item label="联系人:">
                      <el-input v-model="formLabelAlignA.consignee" size="small" style='width: 179px;float: left;'></el-input>
                    </el-form-item>
                <el-form-item label="所在地区:">
                  <el-select v-model="formLabelAlignA.province" placeholder="请选择省" style="float: left;width: 33%;" size="small"  id="vael1" >
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.areaname"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select v-model="formLabelAlignA.city" placeholder="请选择市" style="float: left;width: 33%;" size="small"  id="vael2" >
                    <el-option
                      v-for="item in optionsB"
                      :key="item.id"
                      :label="item.areaname"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select v-model="formLabelAlignA.county" placeholder="请选择区" style="float: left;width: 33%;" size="small"  id="vael3" >
                    <el-option
                      v-for="item in optionsC"
                      :key="item.id"
                      :label="item.areaname"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="街道地址:">
                  <el-input type="textarea" v-model="formLabelAlignA.deliveryAddress"></el-input>
                </el-form-item>
                <el-form-item label="邮政编码:">
                  <el-input style='float: left;width: 179px;'  v-model="formLabelAlignA.postalCode" size="small"></el-input>
                </el-form-item>
                <el-form-item label="电话号码:">
                  <el-input style="  float: left;width: 179px;" v-model="formLabelAlignA.telephone" size="small"></el-input>
                  <!-- <span style="  float: left;width: 15px;">-</span>
                  <el-input style="  float: left;width: 72px;" v-model="telephone2" size="small"></el-input>
                  <span style="  float: left;width: 15px;">-</span>
                  <el-input style="  float: left;width: 72px;" v-model="telephone3" size="small"></el-input>
                  <span style="  float: left;margin: 0 22px;">区号-电话-分机号码</span> -->
                </el-form-item>
                 <el-form-item label="手机号码:">
                  <el-input size="small" style='width: 179px;float: left;'  v-model="formLabelAlignA.contactPhone"></el-input>
                </el-form-item>
                 <el-form-item label="公司名称:">
                  <el-input size="small" style='width: 179px;float: left;'  v-model="formLabelAlignA.company"></el-input>
                </el-form-item>
              </el-form>
            </div>
               <el-button style="margin: 20px 80px;" type="primary"  @click="fromdataA()">保存</el-button>
              
          </el-dialog>
       <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="地址库" name="first">
      <div  class="AddressLibrary">
        <div v-if='Address'>
          <h6 style="margin: 20px auto;text-align:left;">添加新地址:电话号码、手机号码选填一项，备注和公司名称为可填项，其余均为必填项</h6>
          

















































          <el-form :model="formLabelAlign" ref="formLabelAlign"  label-width="100px"  class="demo-ruleForm">
            <el-form-item 
                label="联系人:"  
                prop="consignee" 
                :rules="[
                    { required: true, message: '联系人不能为空'},
                    { type: 'string', message: '年龄必须为字符串'}
                  ]">
                  <el-input type="consignee" v-model.string="formLabelAlign.consignee" size="small"   style="width: 188px;float: left;" autocomplete="off"></el-input>
            </el-form-item>

         <el-form-item label="所在地区:" required>
           <el-form-item prop="province" 
           style="float: left;"
           :rules="[
                { required: true, message: '省不能为空'},
              ]">
              <el-select  v-model.string="formLabelAlign.province" placeholder="请选择省" style="float: left;"  id="vael1" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.areaname"
                  :label="item.areaname"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>


            <el-form-item 
            style="float: left;"
              prop="city" 
              :rules="[
                { required: true, message: '市不能为空'},
              ]">
              <el-select  v-model.string="formLabelAlign.city" placeholder="请选择市" style="float: left;"  id="vael2" size="small">
                <el-option
                  v-for="item in optionsB"
                  :key="item.areaname"
                  :label="item.areaname"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item 
            style="float: left;"
              prop="county" 
              :rules="[
                { required: true, message: '区不能为空'},
              ]">
              <el-select  v-model.string="formLabelAlign.county" placeholder="请选择区" style="float: left;"  id="vael3" size="small">
                <el-option
                  v-for="item in optionsC"
                  :key="item.areaname"
                  :label="item.areaname"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>

            </el-form-item>

            <el-form-item label="街道地址:"  prop="deliveryAddress" 
              :rules="[
                { required: true, message: '街道地址不能为空'},
                { type: 'string', message: '街道地址必须为字符串'}
              ]">
              <el-input style="width: 188px;float: left;" type="textarea" v-model="formLabelAlign.deliveryAddress" size="small"></el-input>
            </el-form-item>

          <el-form-item label="邮政编码:" prop="postalCode" 
              :rules="[
                { required: true, message: '邮政编码不能为空'},
                { type: 'number', message: '邮政编码必须为数字'}
              ]">
              <el-input  style="width: 188px;float: left;"  v-model.number="formLabelAlign.postalCode" size="small"></el-input>
            </el-form-item>
            <el-form-item label="电话号码:"  prop="telephone" 
                :rules="[
                    { required: true, message: '电话号码不能为空'},
                    { type: 'number', message: '电话号码必须为数字'}
                  ]">
              <el-input style="  float: left;width: 188px;" v-model.number="formLabelAlign.telephone" size="small"></el-input>
            </el-form-item>

             <el-form-item label="手机号码:" prop="contactPhone" 
                :rules="[
                    { required: true, message: '手机号码不能为空'},
                    { type: 'number', message: '手机号码必须为数字'}
                  ]">
              <el-input   style="width: 188px;float: left;" @change="formLabelAlign.contactPhone=formLabelAlign.contactPhone.replace(/[^\d]/g,'')"  v-model.number="formLabelAlign.contactPhone" size="small"></el-input>
            </el-form-item>
            <el-form-item label="公司名称:"  prop="company" 
                :rules="[
                    { required: true, message: '公司名称不能为空'},
                  ]">
              <el-input    style="width: 188px;float: left;" v-model="formLabelAlign.company" size="small"></el-input>
            </el-form-item>
                <el-form-item>
               <el-button style="float: left;margin: 20px auto;"  type="primary"  @click="fromdata('formLabelAlign')">保存</el-button>
                <el-button style="float: left;margin: 20px;"  @click='Addressa=true;Address=false;'>取消</el-button>
              </el-form-item>
          </el-form>

            </div>
        <el-button style="float: left;margin: 20px 0;" v-if='Addressa' size="small" type="primary" @click='Address=true;Addressa=false;xjdz()'>新建地址</el-button>
          <el-table
          v-if="Addressa"
          v-loading="loading"
          :data="tableData"
          stripe
          style="width: 100%" id="address">

          <el-table-column
              style="text-align: center;"
                prop="isDefaultDelivery"
                label="发货地址"
                >
                <template slot-scope="scope">

                 <el-radio  border @change='isDefaultDelivery_fn(scope.row)' v-model="scope.row.isDefaultDelivery" :label="1" :name="Delivergoods">默认</el-radio>
                
              </template>
          </el-table-column>

          <el-table-column
              style="text-align: center;"
                prop="isDefaultReturn"
                label="退货地址"
                >
                <template slot-scope="scope">

                 <el-radio border @change='isDefaultReturn_fn(scope.row)'  v-model="scope.row.isDefaultReturn" :label="1"  :name="Returngoods">默认</el-radio>
                
              </template>
          </el-table-column>

          <el-table-column
            prop="consignee"
            label="联系人">
          </el-table-column>

              <el-table-column
              style="text-align: center;"
                prop="province"
                label="所在地区"
                >
                <template slot-scope="scope">

                <span v-trigger @click='toggle(init.id)'  class="fl" style="display: contents;"  v-for='init in options'  v-if='init.id==scope.row.province'>{{init.areaname}}、</span>
                <span v-triggers @click='toggles(init.id)'  class="fl" style="display: contents;"  v-for='init in optionsB'  v-if='init.id==scope.row.city'>{{init.areaname}}、</span>
                <span  class="fl" style="display: contents;"  v-for='init in optionsC'  v-if='init.id==scope.row.county'>{{init.areaname}}</span>
                
              </template>
              </el-table-column>


          <el-table-column
            prop="deliveryAddress"
            label="街道地址">
          </el-table-column>
          <el-table-column
            prop="postalCode"
            label="邮政编码">
          </el-table-column>
           <el-table-column
            prop="telephone"
            label="电话号码">
          </el-table-column>
           <el-table-column
            prop="contactPhone"
            label="手机号码">
          </el-table-column>
           <el-table-column
            prop="company"
            label="公司名称">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
<!--               <el-button style='margin-left: 0px;' type="text" size="small" @click="DefaultAddress(scope.row)">设置为默认发货地址</el-button>
              <el-button style='margin-left: 0px;' type="text" size="small" @click="DefaultAddress(scope.row)">设置为默认退货地址</el-button> -->
              <el-button @click="modify(scope.row);dialogTableVisible=true;" type="text" size="small">修改</el-button>
              <el-button type="text" size="small" @click="delscope(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="运费管理" name="second" >

      <div  v-if='!freightformworks'   class='freightformwork_box'>
         <el-button type="primary" size="small" style="float: left;margin: 20px 0px;"  @click='freightformworks=true;newShippingTemplatefn'>新建运费模板</el-button>
         
      <el-table
          v-loading="loading"
    :data="Freightmanagement"
    style="width: 100%"  id="address">
    <el-table-column type="expand">
      <template slot-scope="props">
      <div v-if='props.row.emsInfo.specCity_id.length ==0 ? false :true' style='overflow: hidden;position: relative;z-index: 999;background-color: #f1f1f1;padding: 0 14.4%;border: 1px solid #d5e5f5;'>
          <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="运送方式:">
            <span>快递</span>
          </el-form-item>
          <el-form-item label="运送到 :">
            <span v-for='(inin,index) in props.row.emsInfo.specCity_id'>
              <span v-for="(inis) in options"  v-if='inin==inis.id'>{{ inis.areaname+'、' }}</span>
            </span>
          </el-form-item>
          <el-form-item :label="props.row.transType  == 0 ? '首件(个)' : props.row.transType ==1 ? '首重(kg)' : '首体积(m³)' +':'">
            <span>{{ props.row.emsInfo.specNum }}</span>
          </el-form-item>
          <el-form-item label="运费(元) :">
            <span>{{ props.row.emsInfo.specFee }}</span>
          </el-form-item>
          <el-form-item :label="props.row.transType  == 0 ? '续件(个)' : props.row.transType ==1 ? '续重(kg)' : '续体积(m³)' +':'">
            <span>{{ props.row.emsInfo.specAddNum }}</span>
          </el-form-item>
          <el-form-item label="运费(元) :">
            <span>{{ props.row.emsInfo.specAddFee }}</span>
          </el-form-item>
        </el-form>
      </div>

     <div v-if='props.row.expressInfo.specCity_id.length ==0 ? false :true' style='overflow: hidden;position: relative;z-index: 999;background-color: #f1f1f1;padding: 0 14.4%;border: 1px solid #d5e5f5;'>
        <el-form label-position="left" inline class="demo-table-expand" >
          <el-form-item label="运送方式:">
            <span>EMS</span>
          </el-form-item>
          <el-form-item label="运送到 :">
            <span v-for='(inin,index) in props.row.expressInfo.specCity_id'>
              <span v-for="(inis) in options"  v-if='inin==inis.id'>{{ inis.areaname+'、' }}</span>
            </span>
          </el-form-item>
          <el-form-item :label="props.row.transType  == 0 ? '首件(个)' : props.row.transType ==1 ? '首重(kg)' : '首体积(m³)' +':'">
            <span>{{ props.row.expressInfo.specNum }}</span>
          </el-form-item>
          <el-form-item label="运费(元) :">
            <span>{{ props.row.expressInfo.specFee }}</span>
          </el-form-item>
          <el-form-item :label="props.row.transType  == 0 ? '续件(个)' : props.row.transType ==1 ? '续重(kg)' : '续体积(m³)' +':'">
            <span>{{ props.row.expressInfo.specAddNum }}</span>
          </el-form-item>
          <el-form-item label="运费(元) :">
            <span>{{ props.row.expressInfo.specAddFee }}</span>
          </el-form-item>
        </el-form>
      </div>

         <div v-if='props.row.mailInfo.specCity_id.length ==0 ? false :true' style='overflow: hidden;position: relative;z-index: 999;background-color: #f1f1f1;padding: 0 14.4%;border: 1px solid #d5e5f5;'>
          <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="运送方式:">
            <span>平邮</span>
          </el-form-item>
          <el-form-item label="运送到 :">
            <span v-for='(inin,index) in props.row.mailInfo.specCity_id'>
              <span v-for="(inis) in options"  v-if='inin==inis.id'>{{ inis.areaname+'、' }}</span>
            </span>
          </el-form-item>
          <el-form-item :label="props.row.transType  == 0 ? '首件(个)' : props.row.transType ==1 ? '首重(kg)' : '首体积(m³)' +':'">
            <span>{{ props.row.mailInfo.specNum }}</span>
          </el-form-item>
          <el-form-item label="运费(元) :">
            <span>{{ props.row.mailInfo.specFee }}</span>
          </el-form-item>
          <el-form-item :label="props.row.transType  == 0 ? '续件(个)' : props.row.transType ==1 ? '续重(kg)' : '续体积(m³)' +':'">
            <span>{{ props.row.mailInfo.specAddNum }}</span>
          </el-form-item>
          <el-form-item label="运费(元) :">
            <span>{{ props.row.mailInfo.specAddFee }}</span>
          </el-form-item>
        </el-form>
      </div>
      </template>
    </el-table-column>



    <el-table-column
      label="模板名称"
      prop="transName">
    </el-table-column>
    <el-table-column
      label="是否包邮"
      prop="isFreeMail"
       :formatter="formata">
    </el-table-column>
    <el-table-column
     prop="transType"
      :formatter="formataaa"
      label="计价方式">
    </el-table-column>
        <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClicka(scope.row);dialogTableVisibleent=true;" type="text" size="small">修改</el-button>
        <el-button type="text" size="small" @click="delscopes(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>









      </div>
      <div v-if='freightformworks'>
      <h5 style="text-align: left;margin: 20px;">新增运费模板</h5>

          <el-form :model="freightFormwork" ref="freightFormwork"  label-width="100px"  class="demo-ruleForm"  >
            <el-form-item 
                label="模板名称:"  
                prop="transName" 
                :rules="[
                    { required: true, message: '模板名称不能为空'},
                    { type: 'string', message: '模板名称必须为字符串'}
                  ]">
                  <el-input type="transName" v-model.string="freightFormwork.transName" size="small"   style="width: 188px;float: left;" autocomplete="off"></el-input>
            </el-form-item>

             <el-form-item 
                label="发货时间:"  
                prop="transTime" 
                :rules="[
                    { required: true, message: '发货时间不能为空'},
                    { type: 'string', message: '发货时间必须为字符串'}
                  ]">
                  <el-select v-model.string="freightFormwork.transTime" placeholder="请选择" class="fl">
                <el-option
                  v-for="item in DeliveryTimeData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
            </el-form-item>

            <el-form-item 
             style='float: left;'
                label="是否包邮:"  
                prop="isFreeMail" 
                :rules="[
                    { required: true, message: '是否包邮不能为空'},
                    { type: 'string', message: '是否包邮必须为字符串'}
                  ]">
                  <el-radio-group v-model="freightFormwork.isFreeMail" @change="handleCheckedCitiesChangeA">
                      <el-radio label="0">全国包邮</el-radio>
                      <el-radio label="1">自定义</el-radio>
                  </el-radio-group>
            </el-form-item>

            <div class="clears"></div>
             <el-form-item 
             style='float: left;'
                label="计价方式:"  
                prop="transType" 
                :rules="[
                    { required: true, message: '计价方式不能为空'},
                    { type: 'string', message: '计价方式必须为字符串'}
                  ]">
                  <el-radio-group v-model="freightFormwork.transType" >
                      <el-radio  label="0">按件数</el-radio>
                    <el-radio  label="1">按重量</el-radio>
                    <el-radio  label="2">按体积</el-radio>
                  </el-radio-group>
                     
            </el-form-item>




            <div class="clears"></div>
               <el-form-item label="运送方式:" >
                <div class="fl" style="line-height: 42px;text-align: left;">
                  <!--  <el-radio v-model="radio" label="1">快递</el-radio>
                    <el-radio v-model="radio" label="2">EMS</el-radio>
                    <el-radio v-model="radio" label="3">平邮</el-radio> -->
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                      <el-checkbox  label="1" >
                        快递
                      </el-checkbox>
                      <div class="check_box" id="chek1" style="display: none;">
                          <div class="check_titles">
                            <p class="text_fl">默认运费</p>
                            <el-input v-model="freightFormwork.emsInfo.num"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{InsidePart}}</p>
                            <el-input v-model="freightFormwork.emsInfo.fee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                             <p class="text_fl">元,&nbsp;&nbsp;&nbsp;每增加</p>
                            <el-input v-model="freightFormwork.emsInfo.addNum"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{IncreaseFreightCharges}}</p>
                            <el-input v-model="freightFormwork.emsInfo.addFee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">元</p>
                          </div>
                          <div class="address">
                            <p>运送到</p>
                            <div style="width: 150px;">
                              <span v-for="inis in asname">{{inis}}丶</span>
                            </div>
                            <p @click="dialogaddersd=true" style="color: #388be8;cursor: pointer;margin-right: 10px;">添加地区</p>
                            <div class="tableaddress">
                              <table>
                                <thead>
                                  <tr>
                                    <th>{{firstPiece}}</th>
                                    <th>首费(元)</th>
                                    <th>{{Continuity}}</th>
                                    <th>续费(元)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>
                                    <el-input v-model="freightFormwork.emsInfo.specNum" ></el-input>
                                  </td>
                                  <td>
                                   <el-input v-model="freightFormwork.emsInfo.specFee" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="freightFormwork.emsInfo.specAddNum" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="freightFormwork.emsInfo.specAddFee" ></el-input>
                                  </td>
                                </tr>
                                </tbody>
                            </table>


                            </div>
                          </div>
                      </div>
                      <el-checkbox  label="2" >
                      EMS 
                      </el-checkbox>
                      <div class="check_box" id="chek2" style="display: none;">
                          <div class="check_titles">
                            <p class="text_fl">默认运费</p>
                            <el-input v-model="freightFormwork.expressInfo.num"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{InsidePart}}</p>
                            <el-input v-model="freightFormwork.expressInfo.fee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                             <p class="text_fl">元,&nbsp;&nbsp;&nbsp;每增加</p>
                            <el-input v-model="freightFormwork.expressInfo.addNum"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{IncreaseFreightCharges}}</p>
                            <el-input v-model="freightFormwork.expressInfo.addFee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">元</p>
                          </div>
                          <div class="address">
                            <p>运送到</p>
                             <div style="width: 150px;">
                              <span v-for="inis in bsname">{{inis}}丶</span>
                            </div>
                            <p @click="dialogaddersd2=true" style="color: #388be8;cursor: pointer;margin-right: 10px;">添加地区</p>
                            <div class="tableaddress">
                              
                              <table>
                                <thead>
                                  <tr>
                                    <th>{{firstPiece}}</th>
                                    <th>首费(元)</th>
                                    <th>{{Continuity}}</th>
                                    <th>续费(元)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>
                                    <el-input v-model="freightFormwork.expressInfo.specNum" ></el-input>
                                  </td>
                                  <td>
                                   <el-input v-model="freightFormwork.expressInfo.specFee" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="freightFormwork.expressInfo.specAddNum" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="freightFormwork.expressInfo.specAddFee" ></el-input>
                                  </td>
                                
                                </tr>
                                </tbody>
                            </table>


                            </div>
                          </div>
                      </div>
                      <el-checkbox  label="3" >
                        平邮
                      </el-checkbox>
                      <div class="check_box" id="chek3" style="display: none;">
                          <div class="check_titles">
                            <p class="text_fl">默认运费</p>
                            <el-input v-model="freightFormwork.mailInfo.num"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{InsidePart}}</p>
                            <el-input v-model="freightFormwork.mailInfo.fee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                             <p class="text_fl">元,&nbsp;&nbsp;&nbsp;每增加</p>
                            <el-input v-model="freightFormwork.mailInfo.addNum"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">{{IncreaseFreightCharges}}</p>
                            <el-input v-model="freightFormwork.mailInfo.addFee"  size="mini" style="width:60px;float: left;"></el-input>
                            <div class="clears"></div>
                            <p class="text_fl">元</p>
                          </div>
                          <div class="address">
                            <p>运送到</p>
                             <div style="width: 150px;">
                              <span v-for="inis in csname">{{inis}}丶</span>
                            </div>
                            <p @click="dialogaddersd3=true" style="color: #388be8;cursor: pointer;margin-right: 10px;">添加地区</p>
                            <div class="tableaddress">
                              
                              <table>
                                <thead>
                                  <tr>
                                    <th>{{firstPiece}}</th>
                                    <th>首费(元)</th>
                                    <th>{{Continuity}}</th>
                                    <th>续费(元)</th>
                                  </tr>
                                </thead>
                               <tbody>
                                <tr>
                                  <td>
                                    <el-input v-model="freightFormwork.mailInfo.specNum" ></el-input>
                                  </td>
                                  <td>
                                   <el-input v-model="freightFormwork.mailInfo.specFee" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="freightFormwork.mailInfo.specAddNum" ></el-input>
                                  </td>
                                  <td>
                                    <el-input v-model="freightFormwork.mailInfo.specAddFee" ></el-input>
                                  </td>
                                </tr>
                                </tbody>
                            </table>


                            </div>
                          </div>
                      </div>
                    </el-checkbox-group>
                </div>
               </el-form-item>
             <div class="clears"></div>
             <el-form-item >
              <el-button @click="transportAddfn('freightFormwork')" type="primary"   style="float: left;margin: 20px auto;">新建</el-button>
              <el-button style="float: left;margin: 20px;"  @click='freightformworks=false'>取消</el-button>
            </el-form-item>
          </el-form>
    </div>
    </el-tab-pane>
    <el-tab-pane label="物流跟踪" name="third" >
      <div style='background-color: #fff;padding: 37px;display: flex;'>
        <span class='fl' style='line-height: 33px;'>订单编号:</span>
        <el-input  class='fl' size='small' style='width: 200px;margin: 0 18px;' v-model="expressCompanyExpressTracking_id" placeholder="请输入订单编号"></el-input>
        <el-button  class='fl' size='small' type="primary" @click='expressCompanyExpressTracking_fn'>搜索</el-button>
      </div>
      <div class='clears'></div>
      <el-row :gutter="12" style='margin:20px auto;' v-if='expressCompanyExpressTracking_if'  v-loading="loading6">
        <el-col :span="8" class='fl'>
          <el-card shadow="always" class='box'>
            <span class="box_title">快递状态:</span>
            <span class="text_box">{{expressCompanyExpressTracking_data.state}}</span>
          </el-card>
        </el-col>
        <el-col :span="8" class='fl'>
          <el-card shadow="always" class='box'>
            <span class="box_title">快递编码:</span>
            <span class="text_box">{{expressCompanyExpressTracking_data.com}}</span>
          </el-card>
        </el-col>
        <el-col :span="8" class='fl'>
          <el-card shadow="always" class='box'>
            <span class="box_title">单号:&#12288;&#12288;</span>
            <span class="text_box">{{expressCompanyExpressTracking_data.nu}}</span>
          </el-card>
        </el-col>
        <el-col :span="8" class='fl'>
          <el-card shadow="always" class='box'>
            <span class="box_title">时间:&#12288;&#12288;</span>
            <span class="text_box">{{expressCompanyExpressTracking_data.data[0].ftime}}</span>
          </el-card>
        </el-col>
        <el-col :span="8" class='fl'>
          <el-card shadow="always" class='box'>
            <span class="box_title">内容:&#12288;&#12288;</span>
            <span class="text_box">{{expressCompanyExpressTracking_data.data[0].context}}</span>
          </el-card>
        </el-col>
      </el-row>


    </el-tab-pane>
    <!-- <el-tab-pane label="定时任务补偿" name="fourth" >定时任务补偿</el-tab-pane> -->
  </el-tabs>
  <div v-if='false'>{{postadd}}</div>
    </div>
</template>

<script>

import {sellerReturnAddressUpdate,transAreaGetDistrictArea,sellerReturnAddressAdd,transAreaGetProvinceArea,sellerReturnAddressList,sellerReturnAddressDelete,transAreaGetCityArea,transportAdd,transportList,transportDelete,transportSelectById,transportUpdate,sellerReturnAdd_s,sellerReturnAdd_a,expressCompanyExpressTracking} from '@/api/LogisticsTools'

export default {
  name: 'LogisticsTools',
  data () {
    return {
      postadd:[],
      nutton:true,
      Continuity:'续件数(件)',
      firstPiece:'首件数(件)',
      InsidePart:'件内',
      EveryIncrease:'元,   每增加',
      IncreaseFreightCharges:'件,   增加运费',
      expressCompanyExpressTracking_if:false,
      expressCompanyExpressTracking_data:{state:'',data:[{ftime:'',context:''}]},
      expressCompanyExpressTracking_id:'',
      Delivergoods:'a',
      Returngoods:'b',
      boolean1:0,
      boolean2:0,
      boolean3:0,
      dialogaddersd36:false,
      dialogaddersd26:false,
      freightformworks:false,
      Addressa:true,
      Address:false,
      dialogaddersd11:false,
      nameaddc:[],
      nameaddb:[],
      nameadd:[],
      addressdata:[],
      checkedCitiesd:[],
      objects:{
        id:'',
        isFreeMail:'',//是否包邮 '0：是  1：否' 
        emsInfo:{num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]},
        expressInfo:{num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]},
        mailInfo:{num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]},
        transName:'',//模板名称
        storeId:'',//店铺id
        transTime:'',//发货时间
        transType:''//计件方式
      },
      dialogTableVisibleent:false,
      dataform:{
        version:'',
        id:''
      },
      formata : function (row, column, cellValue) {
            if (cellValue === '0'){
                return '全国包邮';
            }else if (cellValue === '1'){
                return '自定义';
            }
        },
         formataa : function (row, column, cellValue) {
            if (cellValue === 4){
                return '4小时内';
            }else if (cellValue === 8){
                return '8小时内';
            }else if (cellValue === 12){
                return '12小时内';
            }
        },
        formataaa : function (row, column, cellValue) {
            if (cellValue === 0){
                return '按件数';
            }else if (cellValue === 1){
                return '按重量';
            }else if (cellValue === 2){
                return '按体积';
            }
        },
        formataaaa : function (row, column, cellValue) {
            if (cellValue === 0){
                return '快递';
            }else if (cellValue === 1){
                return 'EMS';
            }else if (cellValue === 2){
                return '平邮';
            }
        },
      Freightmanagement:[],
      csname:[],
      bsname:[],
      asname:[],
      namea:[],
      optionsADDS:[],
      optionsADDS2:[],
      optionsADDS3:[],
      checkedCities:[],
      freightFormwork:{
        isFreeMail:'',//是否包邮 '0：是  1：否' 
        emsInfo:{num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]},
        expressInfo:{num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]},
        mailInfo:{num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]},
        transName:'',//模板名称
        storeId:'',//店铺id
        transTime:'',//发货时间
        transType:''//计件方式
      },
      loading:false,
      loading3:false,
      loading6:false,
      options: [],
      optionsB:[],
      optionsC:[],
      value2:'',
      value: '',
      value3: '',
       valueA:'',
      valueB: '',
      valueC: '',
      tableData: null,
       activeName: 'first',
       labelPosition: 'left',
        formLabelAlign: {
          consignee: "",


          baseArea: null,  


          province:'',//省
          city:'',//市
          county:'',//区

          deliveryAddress: "",
          postalCode: "",
          telephone: null,
          contactPhone: "",
          company: "",
        },
        formLabelAlignA: {
          id:"",
          consignee: "",

          province:'',//省
          city:'',//市
          county:'',//区


          deliveryAddress: "",
          postalCode: "",
          telephone: null,
          contactPhone: "",
          company: "",
        },
       telephone1:null,
       telephone2:null,
       telephone3:null,
       dialogaddersd:false,
       dialogaddersd2:false,
       dialogaddersd3:false,
       dialogTableVisible: false,
       loading2:false,
       DeliveryTimeData:[{
          value: '4',
          label: '4小时内'
        }, {
          value: '8',
          label: '8小时内'
        }, {
          value: '12',
          label: '12小时内'
        }],
        values: '',
    }
  },
  methods: {
    newShippingTemplatefn(){

    },
    xjdz(){


     
          this.formLabelAlign.consignee="";


          this.formLabelAlign.baseArea=null;  


          this.formLabelAlign.province='';//省
          this.formLabelAlign.city='';//市
          this.formLabelAlign.county='';//区

          this.formLabelAlign.deliveryAddress="";
          this.formLabelAlign.postalCode="";
          this.formLabelAlign.telephone=null;
          this.formLabelAlign.contactPhone="";
          this.formLabelAlign.company="";




        this.postadd.push("sabdjsa")
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    async expressCompanyExpressTracking_fn(){
      this.loading6=true;
          const data= await expressCompanyExpressTracking(this.expressCompanyExpressTracking_id);
          const datas= await data.json();
      if(datas.statusCode==200){
           this.$message({
              message: datas.message,
              type: 'success'
            });
           this.expressCompanyExpressTracking_data=datas.object;
           this.expressCompanyExpressTracking_if=true;
            this.loading6=false;
              // setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
              //   window.location.reload();//页面刷新
              // },2000);
       }
    },
    async isDefaultReturn_fn(row){
         const jsons={id:row.id,isDefaultReturn:'1'};
          const data= await sellerReturnAdd_a(jsons);
          const datas= await data.json();
      if(datas.statusCode==200){
           this.$message({
              message: datas.message,
              type: 'success'
            });
              setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
                window.location.reload();//页面刷新
              },2000);
       }
    },
    async isDefaultDelivery_fn(row){
      const jsons={id:row.id,isDefaultDelivery:'1'};
      const data= await sellerReturnAdd_s(jsons);
      const datas= await data.json();
      if(datas.statusCode==200){
           this.$message({
              message: datas.message,
              type: 'success'
            });
              setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
                window.location.reload();//页面刷新
              },2000);
       }
      
    },
    toggles(row){
      this.formLabelAlignA.city=parseInt(row);
    },
    toggle(row){
      this.formLabelAlignA.province=parseInt(row);
    },
    modify(row){

      this.formLabelAlignA=row;
      this.formLabelAlignA.province=parseInt(this.formLabelAlignA.province);
      this.formLabelAlignA.city=parseInt(this.formLabelAlignA.city);
      this.formLabelAlignA.county=parseInt(this.formLabelAlignA.county);
          console.log("row",this.formLabelAlignA.province)
      },
    handleCheckedCitiesChangeert36(row){
       this.objects.mailInfo.specCity_id=row;
       console.log("this.objects.mailInfo.specCity_id",this.objects.mailInfo.specCity_id)
    },
    handleCheckedCitiesChangeert21(row){
       this.objects.expressInfo.specCity_id=row;
    },
    handleCheckedCitiesChangeert12(row){
       this.objects.emsInfo.specCity_id=row;

    },
    async Preservation(){

      
      if(this.objects.isFreeMail=='1'){
      if(this.checkedCitiesd.length==1){
          if(this.checkedCitiesd[0]=='1'){
           this.objects.expressInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
             this.objects.mailInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
        }else if(this.checkedCitiesd[0]=='2'){
         this.objects.emsInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
             this.objects.mailInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
        }else if(this.checkedCitiesd[0]=='3'){
         this.objects.emsInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
             this.objects.expressInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
        }
      }

      if(this.checkedCitiesd.length==2){
          if(this.checkedCitiesd[0]=='1' && this.checkedCitiesd[1]=='2'  ||  this.checkedCitiesd[0]=='2' && this.checkedCitiesd[1]=='1'){
             this.objects.mailInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
        }else if(this.checkedCitiesd[0]=='1' && this.checkedCitiesd[1]=='3' || this.checkedCitiesd[0]=='3' && this.checkedCitiesd[1]=='1'){
                      this.objects.expressInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
        }else if(this.checkedCitiesd[0]=='2' && this.checkedCitiesd[1]=='3' || this.checkedCitiesd[0]=='3' && this.checkedCitiesd[1]=='2'){
                       this.objects.emsInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
        }
      }
        


      if(this.checkedCitiesd.length==0){
            this.objects.emsInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
             this.objects.expressInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
             this.objects.mailInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
      }
    }else{
        
    }
      if(this.objects.isFreeMail=='0'){
          this.objects.emsInfo='';
          this.objects.expressInfo='';
          this.objects.mailInfo='';
      }else{
              this.objects.emsInfo=JSON.stringify(this.objects.emsInfo);
      this.objects.expressInfo=JSON.stringify(this.objects.expressInfo);
      this.objects.mailInfo=JSON.stringify(this.objects.mailInfo);
      }


      const data=await transportUpdate(this.objects)
     const datas=await data.json();
       if(datas.statusCode==200){
           this.$message({
              message: datas.message,
              type: 'success'
            });
              setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
                window.location.reload();//页面刷新
              },2000);
       }
    },
    async handleClicka(row){
      this.freightFormwork.storeId=row.storeId;
      this.objects.storeId=row.storeId;
      this.checkedCitiesd=[];
      $('#chek11').css('display', 'none');
      $('#chek22').css('display', 'none');
      $('#chek33').css('display', 'none');

      this.loading3=true;
      this.objects.id=row.id;
      console.log("row",row)
     const data=await transportSelectById(row.id)
     const datas=await data.json();
     if(datas.statusCode==200){
      if(datas.object.isFreeMail){
        this.objects.isFreeMail=datas.object.isFreeMail;
      }else{
         this.objects.isFreeMail='';
      }
      if(datas.object.emsInfo && datas.object.emsInfo!=='""'){
        
        $('#chek11').css('display', 'block');
        this.objects.emsInfo=JSON.parse(datas.object.emsInfo);
   
        if(this.objects.emsInfo.num){
              this.checkedCitiesd.push('1');
        }else{

        }
        this.addressdata=this.objects.emsInfo.specCity_id;
        this.nameadd=[];
          for(var i=0;i<this.options.length;i++){
            for(var j=0;j<this.objects.emsInfo.specCity_id.length;j++){
                if(this.options[i].id==this.objects.emsInfo.specCity_id[j]){
                    this.nameadd.push(this.options[i].areaname);
                }
            }
          }

      }else{
        this.objects.emsInfo='';
      }
      if(datas.object.expressInfo && datas.object.expressInfo!=='""'){

       
        $('#chek22').css('display', 'block');
         this.objects.expressInfo=JSON.parse(datas.object.expressInfo);
         if(this.objects.expressInfo.num){
              this.checkedCitiesd.push('2');
        }else{

        }

        this.nameaddb=[];
        for(var i=0;i<this.options.length;i++){
            for(var j=0;j<this.objects.expressInfo.specCity_id.length;j++){
                if(this.options[i].id==this.objects.expressInfo.specCity_id[j]){
                    this.nameaddb.push(this.options[i].areaname);
                }
            }
          }
      }else{
        this.objects.expressInfo='';
      }
      if(datas.object.mailInfo && datas.object.mailInfo!=='""'){
       
        $('#chek33').css('display', 'block');
        this.nameaddc=[];
         this.objects.mailInfo=JSON.parse(datas.object.mailInfo);

          if(this.objects.mailInfo.num){
            this.checkedCitiesd.push('3');
          }else{

          }

          for(var i=0;i<this.options.length;i++){
            for(var j=0;j<this.objects.mailInfo.specCity_id.length;j++){
                if(this.options[i].id==this.objects.mailInfo.specCity_id[j]){
                    this.nameaddc.push(this.options[i].areaname);
                }
            }
          }
      }else{
        this.objects.mailInfo='';
      }
     
      this.objects.transName=datas.object.transName;
      this.objects.storeId=datas.object.storeId;
      this.objects.transTime=datas.object.transTime;
      this.objects.transType=JSON.stringify(datas.object.transType);
       this.loading3=false;
     }
     console.log("this.objects",this.objects.transName)
    },
    async delscopes(row){
      console.log("row",row)
        this.dataform.version=row.version;
        this.dataform.id=row.id;
          const del = await transportDelete(this.dataform)
         const deldata = await del.json();
         if(deldata.statusCode==200){
             this.$message({
              message: deldata.message,
              type: 'success'
            });
              setTimeout(function(){  //使用  setTimeout（）方法设定定时2000毫秒
                window.location.reload();//页面刷新
              },2000);
         }
    },
    guanbi(){
       this.namea=[];
        // this.freightFormwork.emsInfo.specCity_id=[];
    },
    handleClose(row,index){
      // this.namea=[];
      // // this.freightFormwork.emsInfo.specCity_id=[];
      //    this.optionsADDS.splice(index, 1); 
      //    for(var i=0;i<this.optionsADDS.length;i++){
      //     this.namea[i]=this.optionsADDS[i].areaname;
      //     this.freightFormwork.emsInfo.specCity_id[i]=this.optionsADDS[i].id
      //    }

    },
    handleClose2(row,index){
         this.optionsADDS2.splice(index, 1); 
    },
    handleClose3(row,index){

         this.optionsADDS3.splice(index, 1); 
    },
    add_address(){

    },
    handleCheckedCitiesChangeert3(row){
      console.log("row",row)
       this.csname=[];
       this.freightFormwork.mailInfo.specCity_id=row;
            for(var i=0;i<this.options.length;i++){
        for(var j=0;j<this.freightFormwork.mailInfo.specCity_id.length;j++){
            if(this.options[i].id==this.freightFormwork.mailInfo.specCity_id[j]){
                this.csname.push(this.options[i].areaname);
                console.log("this.options[i].id",this.csname)
            }
        }
      }
    },
    handleCheckedCitiesChangeert2(row){
       console.log("rowskdaksd",row)
        this.bsname=[];
       this.freightFormwork.expressInfo.specCity_id=row;
      for(var i=0;i<this.options.length;i++){
        for(var j=0;j<this.freightFormwork.expressInfo.specCity_id.length;j++){
            if(this.options[i].id==this.freightFormwork.expressInfo.specCity_id[j]){
                this.bsname.push(this.options[i].areaname);
                console.log("this.options[i].id",this.bsname)
            }
        }
      }
    },
    handleCheckedCitiesChangeert(row){
       console.log("rowskdaksd",row)
       this.asname=[];
      this.freightFormwork.emsInfo.specCity_id=row;
      for(var i=0;i<this.options.length;i++){
        for(var j=0;j<this.freightFormwork.emsInfo.specCity_id.length;j++){
            if(this.options[i].id==this.freightFormwork.emsInfo.specCity_id[j]){
                this.asname.push(this.options[i].areaname);
                console.log("this.options[i].id",this.asname)
            }
        }
      }
    },
    handleCheckedCitiesChangeAa(row){
            if(this.objects.isFreeMail=='1'){

      if(row.length==1){
          if(row[0]=='1'){
          $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'none');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='2'){
          $('#chek22').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='3'){
          $('#chek33').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
        }
      }

      if(row.length==2){
          if(row[0]=='1' && row[1]=='2'  ||  row[0]=='2' && row[1]=='1'){
          $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'block');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='1' && row[1]=='3' || row[0]=='3' && row[1]=='1'){
          $('#chek22').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek33').css('display', 'block');
        }else if(row[0]=='2' && row[1]=='3' || row[0]=='3' && row[1]=='2'){
          $('#chek33').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'block');
        }
      }
        
      if(row.length==3){
         $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'block');
           $('#chek33').css('display', 'block');
      }

      if(row.length==0){
         $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
           $('#chek33').css('display', 'none');
      }
    }else{
         $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
           $('#chek33').css('display', 'none');
    }
    },
    handleCheckedCitiesChangeA(){
       const row =  this.checkedCities;

    if(this.freightFormwork.isFreeMail=='1'){
      if(row.length==1){
          if(row[0]=='1'){
          $('#chek1').css('display', 'block');
          $('#chek2').css('display', 'none');
          $('#chek3').css('display', 'none');
        }else if(row[0]=='2'){
          $('#chek2').css('display', 'block');
          $('#chek1').css('display', 'none');
          $('#chek3').css('display', 'none');
        }else if(row[0]=='3'){
          $('#chek3').css('display', 'block');
          $('#chek1').css('display', 'none');
          $('#chek2').css('display', 'none');
        }
      }

      if(row.length==2){
          if(row[0]=='1' && row[1]=='2'  ||  row[0]=='2' && row[1]=='1'){
          $('#chek1').css('display', 'block');
          $('#chek2').css('display', 'block');
          $('#chek3').css('display', 'none');
        }else if(row[0]=='1' && row[1]=='3' || row[0]=='3' && row[1]=='1'){
          $('#chek2').css('display', 'block');
          $('#chek1').css('display', 'none');
          $('#chek3').css('display', 'block');
        }else if(row[0]=='2' && row[1]=='3' || row[0]=='3' && row[1]=='2'){
          $('#chek3').css('display', 'block');
          $('#chek1').css('display', 'none');
          $('#chek2').css('display', 'block');
        }
      }
        
      if(row.length==3){
         $('#chek1').css('display', 'block');
          $('#chek2').css('display', 'block');
           $('#chek3').css('display', 'block');
      }

      if(row.length==0){
         $('#chek1').css('display', 'none');
          $('#chek2').css('display', 'none');
           $('#chek3').css('display', 'none');
      }
    }else{
         $('#chek1').css('display', 'none');
          $('#chek2').css('display', 'none');
           $('#chek3').css('display', 'none');
    }
    },
    handleCheckedCitiesChange(row){
    if(this.freightFormwork.isFreeMail=='1'){

      if(row.length==1){
          if(row[0]=='1'){
          $('#chek1').css('display', 'block');
          $('#chek2').css('display', 'none');
          $('#chek3').css('display', 'none');
        }else if(row[0]=='2'){
          $('#chek2').css('display', 'block');
          $('#chek1').css('display', 'none');
          $('#chek3').css('display', 'none');
        }else if(row[0]=='3'){
          $('#chek3').css('display', 'block');
          $('#chek1').css('display', 'none');
          $('#chek2').css('display', 'none');
        }
      }

      if(row.length==2){
          if(row[0]=='1' && row[1]=='2'  ||  row[0]=='2' && row[1]=='1'){
          $('#chek1').css('display', 'block');
          $('#chek2').css('display', 'block');
          $('#chek3').css('display', 'none');
        }else if(row[0]=='1' && row[1]=='3' || row[0]=='3' && row[1]=='1'){
          $('#chek2').css('display', 'block');
          $('#chek1').css('display', 'none');
          $('#chek3').css('display', 'block');
        }else if(row[0]=='2' && row[1]=='3' || row[0]=='3' && row[1]=='2'){
          $('#chek3').css('display', 'block');
          $('#chek1').css('display', 'none');
          $('#chek2').css('display', 'block');
        }
      }
        
      if(row.length==3){
         $('#chek1').css('display', 'block');
          $('#chek2').css('display', 'block');
           $('#chek3').css('display', 'block');
      }

      if(row.length==0){
         $('#chek1').css('display', 'none');
          $('#chek2').css('display', 'none');
           $('#chek3').css('display', 'none');
      }
    }else{
         $('#chek1').css('display', 'none');
          $('#chek2').css('display', 'none');
           $('#chek3').css('display', 'none');
    }

    },
    async handleCheckedCitiesChangead(row){
            if(this.objects.isFreeMail=='1'){

      if(row.length==1){
          if(row[0]=='1'){
          $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'none');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='2'){
          $('#chek22').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='3'){
          $('#chek33').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
        }
      }

      if(row.length==2){
          if(row[0]=='1' && row[1]=='2'  ||  row[0]=='2' && row[1]=='1'){
          $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'block');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='1' && row[1]=='3' || row[0]=='3' && row[1]=='1'){
          $('#chek22').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek33').css('display', 'block');
        }else if(row[0]=='2' && row[1]=='3' || row[0]=='3' && row[1]=='2'){
          $('#chek33').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'block');
        }
      }
        
      if(row.length==3){
         $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'block');
           $('#chek33').css('display', 'block');
      }

      if(row.length==0){
         $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
           $('#chek33').css('display', 'none');
      }
    }else{
         $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
           $('#chek33').css('display', 'none');
    }
    },
    async optionW (row) {

    },
    async transportAddfn(formName){
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
       // this.freightFormwork.emsInfo='' 
      if(this.freightFormwork.transName==''  || this.freightFormwork.transName==null){
          this.$notify.error({
              title: '错误',
              message: '请输入模板名称!!!'
            });
          return false;
       }else if(this.freightFormwork.transTime==''  || this.freightFormwork.transTime==null){
          this.$notify.error({
              title: '错误',
              message: '请选择发货时间!!!'
            });
          return false;
       }else if(this.freightFormwork.isFreeMail==''  || this.freightFormwork.isFreeMail==null){
          this.$notify.error({
              title: '错误',
              message: '请选择是否包邮!!!'
            });
          return false;
       }else if(this.freightFormwork.transType==''  || this.freightFormwork.transType==null){
          this.$notify.error({
              title: '错误',
              message: '请选择计件方式!!!'
            });
          return false;
       }
      
        if(this.freightFormwork.isFreeMail=='0'){
              this.freightFormwork.emsInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
             this.freightFormwork.expressInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
             this.freightFormwork.mailInfo={num:'',fee:'',addNum:'',addFee:'',specNum:'',specFee:'',specAddNum:'',specAddFee:'',specCity_id:[]};
              this.freightFormwork.emsInfo=JSON.stringify(this.freightFormwork.emsInfo);
           this.freightFormwork.expressInfo=JSON.stringify(this.freightFormwork.expressInfo);
           this.freightFormwork.mailInfo=JSON.stringify(this.freightFormwork.mailInfo);
        }else{
            this.freightFormwork.emsInfo=JSON.stringify(this.freightFormwork.emsInfo);
           this.freightFormwork.expressInfo=JSON.stringify(this.freightFormwork.expressInfo);
           this.freightFormwork.mailInfo=JSON.stringify(this.freightFormwork.mailInfo);
        }

          const isLoginAJSs = await transportAdd(this.freightFormwork)
         const isLoginAs = await isLoginAJSs.json();
         if(isLoginAs.statusCode==200){
            this.$notify({
              title: '成功',
              message: '恭喜你，新建成功!!!',
              type: 'success'
            });
            // setTimeout(function(){  
            //   window.location.reload();
            // },2000);
         }else{
           this.$notify.error({
              title: '错误',
              message: isLoginAs.message
            });
         }
         this.freightformworks=false;
    },
    async deleteAAWWR (row) {
          const isLoginAJS = await sellerReturnAddressDelete(row.id)
         const isLoginA = await isLoginAJS.json();
        if(isLoginA.statusCode==200){
              this.$notify({
              title: '成功',
              message: '恭喜你，你以成功删除!!!',
              type: 'success'
            });
                 location.reload()
        }else{
            this.$notify.error({
              title: '错误',
              message: isLoginA.message
            });
        }
    },
      async delscope (row) {
        const cate=row;
        this.$confirm('你确定要删除吗？', '提示', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        })
          .then(() => {
            this.deleteAAWWR(cate);
           
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '放弃保存并离开页面'
                : '停留在当前页面'
            })
          });
        
      },
      handleChange (row) {

      },
       handleClick(tab, event) {
        if(tab.index=='0'){
          window.sessionStorage["searchIndex"] = '0';
         
        
        }else if(tab.index=='1'){
           window.sessionStorage["searchIndex"] = '1';
           
        }else if(tab.index=='2'){
           window.sessionStorage["searchIndex"] = '2';
           
        }else if(tab.index=='3'){
           window.sessionStorage["searchIndex"] = '3';
           
        }
        this.formLabelAlignA.id=tab.id

      },
      async fromdata (formName) {
                  const catn=this;
                    this.$refs[formName].validate((valid) => {
                      if (valid) {
                         catn.nutton=true;
                      } else {
                        catn.nutton=false;
                      }
                    });
                    console.log("this.nutton",this.nutton)
                if(!this.nutton){
                    return;
                }
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.formLabelAlign.contactPhone)) {
              this.$message.error("请输入正确的手机号码！！！");
              $('.contactPhones').css('display', 'block');
                return false;
            } else {
                // return true;
            }
        


        const isLoginAJS = await sellerReturnAddressAdd(this.formLabelAlign)
         const isLoginA = await isLoginAJS.json();
         if(isLoginA.statusCode==200){
              this.$notify({
                    message: '恭喜你，操作成功!!!',
                    type: 'success'
                  });
              setTimeout(function (argument) {
                 location.reload();
               },1000);
                
         }else{
            this.$message.error(isLoginA.message);
         }

         

          
      },
         async fromdataA(){


        const Update = await sellerReturnAddressUpdate(this.formLabelAlignA)

         const apdatefrom = await Update.json();
         if(apdatefrom.statusCode==200){
              this.$notify({
                    message: '恭喜你，你以成功修改地址!!!',
                    type: 'success'
                  });
                 setTimeout(function (argument) {
                 location.reload();
               },1000);
         }else{
            this.$message.error(apdatefrom.message);
         }        
    },
    },
    directives:{
          trigger:{
           inserted(el,binging){
              el.click()
             //$(el).trigger('click')
            }
         },
         triggers:{
           inserted(el,binging){
              el.click()
             //$(el).trigger('click')
            }
         },
      },
   async mounted () {
     const userobj=$.cookie('userobj');
          const sent=JSON.parse(userobj);
          console.log('sent',sent)
          this.freightFormwork.storeId=sent.storeId;
       const transportListdata = await transportList()
      const transportLists = await transportListdata.json();
      if(transportLists.statusCode==200){
        this.Freightmanagement=transportLists.object;
        // const sdsd= JSON.parse(transportLists.object);
        for(var o=0;o<this.Freightmanagement.length;o++){
            this.Freightmanagement[o].emsInfo=JSON.parse(this.Freightmanagement[o].emsInfo);
            this.Freightmanagement[o].expressInfo=JSON.parse(this.Freightmanagement[o].expressInfo);
            this.Freightmanagement[o].mailInfo=JSON.parse(this.Freightmanagement[o].mailInfo);
        }
        console.log("Freightmanagement",this.Freightmanagement[0].emsInfo);
      }else if(transportLists.statusCode==401){
               this.$message('未登录');
              this.$router.push('/Sign_in')
        }
      this.loading=true;
      const isLoginAJSa = await sellerReturnAddressList(1)
      const isLoginAa = await isLoginAJSa.json();
      if(isLoginAa.statusCode==200){
        this.loading=false;
        this.tableData=isLoginAa.object;
      }
      
      //省
      const optionsA = await transAreaGetProvinceArea()
      const optionsAA = await optionsA.json();
      this.options=optionsAA.object;
       this.optionsADDS=optionsAA.object;
       this.optionsADDS2=optionsAA.object;
       this.optionsADDS3=optionsAA.object;
      
     const ssion=JSON.parse(window.sessionStorage.getItem("searchIndex"));
     if(ssion==0){
        this.activeName='first';
     }else if(ssion==1){
         this.activeName='second';
     }else if(ssion==2){
        this.activeName='third';
     }else if(ssion==3){
        this.activeName='fourth';
     }
    
      
      
  },
   watch : {
    'freightFormwork.transType':function (a,b) {
      if(a=='0'  || a==0){
        this.InsidePart='件内';
        this.IncreaseFreightCharges='件,   增加运费';
        this.firstPiece='首件数(件)';
        this.Continuity='续件数(件)';
      }else if(a=='1'  || a==1){
        this.InsidePart='kg内';
        this.IncreaseFreightCharges='kg,   增加运费';
         this.firstPiece='首重量(kg)';
         this.Continuity='续重量(kg)';
      }else if(a=='2'  || a==2){
        this.InsidePart='m³内';
        this.IncreaseFreightCharges='m³,   增加运费';
         this.firstPiece='首体积(m³)';
         this.Continuity='续体积(m³)';
      }
    },
    'objects.transType':function (a,b) {
       if(a=='0'  || a==0){
        this.InsidePart='件内';
        this.IncreaseFreightCharges='件,   增加运费';
        this.firstPiece='首件数(件)';
        this.Continuity='续件数(件)';
      }else if(a=='1'  || a==1){
        this.InsidePart='kg内';
        this.IncreaseFreightCharges='kg,   增加运费';
         this.firstPiece='首重量(kg)';
         this.Continuity='续重量(kg)';
      }else if(a=='2'  || a==2){
        this.InsidePart='m³内';
        this.IncreaseFreightCharges='m³,   增加运费';
         this.firstPiece='首体积(m³)';
         this.Continuity='续体积(m³)';
      }
    },
    'expressCompanyExpressTracking_data.state':function(a,b){
        if(a==0){
          this.expressCompanyExpressTracking_data.state='在途中!!!'
        }else if(a==1){
          this.expressCompanyExpressTracking_data.state='以揽收!!!'
        }else if(a==2){
          this.expressCompanyExpressTracking_data.state='疑难!!!'
        }else if(a==3){
          this.expressCompanyExpressTracking_data.state='已签收!!!'
        }else if(a==4){
          this.expressCompanyExpressTracking_data.state='退签!!!'
        }else if(a==5){
          this.expressCompanyExpressTracking_data.state='同城派送中!!!'
        }else if(a==6){
          this.expressCompanyExpressTracking_data.state='退回!!!'
        }else if(a==7){
          this.expressCompanyExpressTracking_data.state='转单!!!'
        }
    },
    checkedCitiesd(row,oldVal){
      if(this.objects.isFreeMail=='1'){
      if(row.length==1){
          if(row[0]=='1'){
          $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'none');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='2'){
          $('#chek22').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='3'){
          $('#chek33').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
        }
      }

      if(row.length==2){
          if(row[0]=='1' && row[1]=='2'  ||  row[0]=='2' && row[1]=='1'){
          $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'block');
          $('#chek33').css('display', 'none');
        }else if(row[0]=='1' && row[1]=='3' || row[0]=='3' && row[1]=='1'){
          $('#chek22').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek33').css('display', 'block');
        }else if(row[0]=='2' && row[1]=='3' || row[0]=='3' && row[1]=='2'){
          $('#chek33').css('display', 'block');
          $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'block');
        }
      }
        
      if(row.length==3){
         $('#chek11').css('display', 'block');
          $('#chek22').css('display', 'block');
           $('#chek33').css('display', 'block');
      }

      if(row.length==0){
         $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
           $('#chek33').css('display', 'none');
      }
    }else{
         $('#chek11').css('display', 'none');
          $('#chek22').css('display', 'none');
           $('#chek33').css('display', 'none');
    }

    },
    'objects.isFreeMail':function(){
          if(this.objects.isFreeMail=='0'){
              $('#chek11').css('display', 'none');
              $('#chek22').css('display', 'none');
               $('#chek33').css('display', 'none');
          }
    },
    async dialogaddersd(curVal,oldVal){
      if(curVal){
         const optionsA = await transAreaGetProvinceArea()
          const optionsAA = await optionsA.json();
          this.options=optionsAA.object;
          this.optionsADDS=optionsAA.object;
      }
    },
    async dialogaddersd2(curVal,oldVal){
        if(curVal){
            const optionsA = await transAreaGetProvinceArea()
          const optionsAA = await optionsA.json();
          this.options=optionsAA.object;
         this.optionsADDS2=optionsAA.object;
       }
    },
    async dialogaddersd3(curVal,oldVal){
        if(curVal){
          const optionsA = await transAreaGetProvinceArea()
          const optionsAA = await optionsA.json();
          this.options=optionsAA.object;
         this.optionsADDS3=optionsAA.object;
       }
    },
    async  'formLabelAlign.province' (curVal,oldVal){
      var ctens=this;
      $(function(){
          ctens.valueA=$('#vael1').val()
        
      })
        this.formLabelAlign.city='';
         this.optionsB=[];
         this.optionsC=[];
         //市
       const optionsB = await transAreaGetCityArea(curVal)
      const optionsBB = await optionsB.json();
      this.optionsB=optionsBB.object;
    },
     async  'formLabelAlignA.province' (curVal,oldVal){
      this.boolean1++;
      var ctens=this;
      $(function(){
          ctens.valueA=$('#vael1').val()
        
      })
        if(this.boolean1==1){

        }else{
           this.formLabelAlignA.city='';
           this.formLabelAlignA.county='';
        }
       
         this.optionsB=[];
         this.optionsC=[];
         //市
       const optionsB = await transAreaGetCityArea(curVal)
      const optionsBB = await optionsB.json();
      this.optionsB=optionsBB.object;
    },
    valueB (curVal,oldVal){

    },
    async 'formLabelAlign.city' (curVal,oldVal) {

     if(curVal==null || curVal==""){
        this.formLabelAlign.county='';
       this.optionsC=[];
        return;
     }
      var ctens=this;
      $(function(){
          ctens.valueB=$('#vael2').val()
        
      })


       this.optionsC=[];
         //区
       const OPSON = await transAreaGetDistrictArea(curVal)
      const optionsd = await OPSON.json();
      this.optionsC=optionsd.object;
      
    },
      async 'formLabelAlignA.city' (curVal,oldVal) {
     if(curVal==null || curVal==""){
        
       this.optionsC=[];
        return;
     }
     
      var ctens=this;
      $(function(){
          ctens.valueB=$('#vael2').val()
        
      })
      this.boolean2++
      if(this.boolean2==1){

        }else{
          this.formLabelAlignA.county='';
         }

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
    }
  }
    

    

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  float: left;
  font-size: 13px;
  margin: 16px auto;
}
.check_titles{
  font-size: 13px;
  background-color: rgba(64,158,255,.1);
    width: 550px;
  padding: 6px;
}
.address{
    font-size: 13px;
  /*background-color: rgba(64,158,255,.1);*/
  width: 550px;
  padding: 6px;

position: relative;
padding-bottom: 66px;
}
.check_box{
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.5),1px -2px 4px 0 rgba(0,0,0,.3);
}
#chek1{

}
.check_input{
  border:1px solid #eee;
}
.text_fl{
  text-align: left;
}
.tableaddress{
overflow: hidden;

position: absolute;

top: 16px;

right: 12px;
width: 70%;
}
.tableaddress table{
  float: right;
}
.tableaddress table th{
  margin: 0 6px;
}
.dias .el-tag{
width: 130px;

margin: 10px;
position: relative;
text-align: left;
}
.box{
  position: relative;
  margin: 10px auto;
}
.box_title{
position: absolute;

left: 6px;

top: 3px;
}
.text_box{
  text-align: left;

float: left;

margin: 22px;
}
.contactPhones{
  margin-top: 0px;

font-size: 13px;

display: block;

text-align: left;

color: rgb(204, 0, 0);

float: left;

margin-left: 50px;
}
</style>
