const SMSClient = require('@alicloud/sms-sdk');

const crypto = require('crypto');

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.126.com', //主机地址
  port: 25, //端口
  auth: {
    user: 'kangliuyong@126.com', //发件邮箱
    pass: 'q152w192' //授权码  
  }
});

class Utils {
  constructor () {}

  //短信功能
  sendMessage(phone, code) {
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'LTAIKCrVJA7qlpgu';
    const secretAccessKey = 'PTuws2haI4TdZSBuM1n5dRVMzMS5BF';
    //初始化sms_client
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
    //发送短信
    return smsClient.sendSMS({
      PhoneNumbers: phone, //接收短信手机号
      SignName: '二元科技', //签名名称
      TemplateCode: 'SMS_133180155', //模板号
      TemplateParam: '{"code":' + code +'}' //模板验证码
    });

    //    //设置超时时间-可自行调整
    // System.setProperty("sun.net.client.defaultConnectTimeout", "10000");
    // System.setProperty("sun.net.client.defaultReadTimeout", "10000");
    // //初始化ascClient需要的几个参数
    // final String product = "Dysmsapi";//短信API产品名称（短信产品名固定，无需修改）
    // final String domain = "dysmsapi.aliyuncs.com";//短信API产品域名（接口地址固定，无需修改）
    // //替换成你的AK
    // final String accessKeyId = "yourAccessKeyId";//你的accessKeyId,参考本文档步骤2
    // final String accessKeySecret = "yourAccessKeySecret";//你的accessKeySecret，参考本文档步骤2
    // //初始化ascClient,暂时不支持多region（请勿修改）
    // IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyId,
    // accessKeySecret);
    // DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", product, domain);
    // IAcsClient acsClient = new DefaultAcsClient(profile);
    //  //组装请求对象
    //  SendSmsRequest request = new SendSmsRequest();
    //  //使用post提交
    //  request.setMethod(MethodType.POST);
    //  //必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式
    //  request.setPhoneNumbers("1500000000");
    //  //必填:短信签名-可在短信控制台中找到
    //  request.setSignName("云通信");
    //  //必填:短信模板-可在短信控制台中找到
    //  request.setTemplateCode("SMS_1000000");
    //  //可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时,此处的值为
    //  //友情提示:如果JSON中需要带换行符,请参照标准的JSON协议对换行符的要求,比如短信内容中包含\r\n的情况在JSON中需要表示成\\r\\n,否则会导致JSON在服务端解析失败
    //  request.setTemplateParam("{\"name\":\"Tom\", \"code\":\"123\"}");
    //  //可选-上行短信扩展码(扩展码字段控制在7位或以下，无特殊需求用户请忽略此字段)
    //  //request.setSmsUpExtendCode("90997");
    //  //可选:outId为提供给业务方扩展字段,最终在短信回执消息中将此值带回给调用者
    //  request.setOutId("yourOutId");
    // //请求失败这里会抛ClientException异常
    // SendSmsResponse sendSmsResponse = acsClient.getAcsResponse(request);
    // if(sendSmsResponse.getCode() != null && sendSmsResponse.getCode().equals("OK")) {
    // //请求成功
    // }
  }

  //加密功能
  addCrypto(o, field) {
    //使用md5方式加密
    let md5 = crypto.createHash('md5');

    //指定加密字段
    md5.update(o[field]);

    o[field] = md5.digest('hex');
  }


  //发邮件
  sendEmail (options, fn) {
    transporter.sendMail(options, fn);
  }

}

module.exports = new Utils();