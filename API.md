# 接口文档

## 返回格式约定

所有后台返回的数据格式均为 JSON，JSON 对应对象格式如下

```js
{
    code: Number,
    data: Object
}
```

`code` 指定这次请求的状态，前端可以根据这个编码来决定做什么。目前需要的代码如下

- 200 请求成功
- 400 请求参数不正确，比如提交的对象需要提供键 a 但提交上来的对象没有
- 401 当前请求 Session 无效
- 403 请求被拒绝，用于处理不合理的请求，例如登录密码错误或删除别人的东西
- 404 请求的内容不存在
- 409 请求存在冲突，例如注册已存在的用户名
- 500 服务器发生错误

`data` 的具体格式根据情况决定。

---

## 名词解释

- 请求体：在 GET 请求中指查询字符串内容，在 POST 请求中指请求体中内容。项目不会出现其他请求方式
- 响应体：指返回 JSON 中 data 键对应对象的内容

---

## 各个请求的详细信息 (所有请求前缀均为 `/server`)

### 投保信息列表部分（请求前缀为 `/insurancePurchasingProcess`）

#### `/getInsurancePurchasingInfoList`

- 功能说明：获取与该医院相关的投保信息列表
- 请求方法：GET
- 请求体：无
- 响应体：
```js
{
    insurancePurchasingInfoList: [                  // 数组，内含多条投保信息
        {
            insurancePurchasingInfoId: String,      // 这条信息的唯一识别 ID
            name: String,                           // 投保人姓名
            age: Number,                            // 投保人年龄
            isMale: Number,                         // 投保人是不是男性，0为女，1为男
            healthState: String,                    // 投保人健康状况
            publicKey: String,                      // 投保人公钥
            insuranceType: String,                  // 保险类型
            insurancePurchasingTime: String,        // 投保时间
            insurancePeriod: String,                // 保险时长
            insurancePrice: Number,                 // 保金，单位人民币元
            insurancePurchasingStage: ENUM_NUMBER,  // 投保阶段，枚举值
        },
    ]
}
```
- 其他说明
  - 这个接口主要是为了获取直付信息对应的投保信息使用
  - 投保阶段枚举值
```js
{
    APPLICATION: 0, // 投保人申请
    INSURANCE_COMPANY_VERIFY: 1,      // 保险公司审核
    PAY: 2,         // 投保人缴费，保险公司确认并发布保单
    COMPLETE: 3,    // 完成
    INSURANCE_COMPANY_VERIFY_DECLINED: -1,  // 保险公司审核未通过
};
```

---

### 直付处理列表部分（请求前缀为 `/directPaymentProcess`）

#### `/getDirectPaymentInfoList`

- 功能说明：获取直付处理信息列表
- 请求方法：GET
- 请求体：无
- 响应体：
```js
{
    directPaymentInfoList: [        // 数组，内含多条直付信息
        {
            directPaymentInfoId: String,            // 这条直付信息的唯一识别 ID
            name: String,                           // 投保人姓名
            age: Number,                            // 投保人年龄
            isMale: Number,                         // 投保人是不是男性，0为女，1为男
            healthState: String,                    // 投保人健康状况
            publicKey: String,                      // 投保人公钥
            directPaymentMoneyAmount: Number,       // 直付金额，单位是人民币元
            diagnosticResult: String,               // 诊断结果
            medicalDescription: String,             // 医疗说明
            insurancePurchasingInfoId: String,      // 对应保险投保信息的 ID
            directPaymentStage: ENUM_NUMBER,        // 枚举值，直付阶段
        },
    ]
}
```
- 其他说明
  - 直付阶段枚举值
```js
{
    APPLICATION: 0,                         // 投保人申请
    HOSPITAL_CONFIRM_PAYABLE: 1,            // 待医院确认是否可以直付
    INSURANCE_COMPANY_VERIFY_AND_PAY: 2,    // 待保险公司审核及支付
    HOSPITAL_CONFIRM_PAYMENT: 3,            // 等待医院确认收款
    COMPLETE: 4,                            // 完成
    HOSPITAL_CONFIRM_PAYABLE_DECLINED: -1,            // 医院确认不可直付
    INSURANCE_COMPANY_VERIFY_AND_PAY_DECLINED: -2,    // 保险公司审核不通过
};
```

---

### 直付详情部分（请求前缀为 `/directPaymentDetail`）

#### `/getDirectPaymentInfo`

- 功能说明：获取直付详细信息
- 请求方法：GET
- 请求体：
```js
{
    directPaymentInfoId: String,    // 直付信息 ID
}
```
- 响应体：
```js
{
    directPaymentInfoId: String,            // 这条直付信息的唯一识别 ID
    name: String,                           // 投保人姓名
    age: Number,                            // 投保人年龄
    isMale: Number,                         // 投保人是不是男性，0为女，1为男
    healthState: String,                    // 投保人健康状况
    publicKey: String,                      // 投保人公钥
    directPaymentMoneyAmount: Number,       // 直付金额，单位是人民币元
    diagnosticResult: String,               // 诊断结果
    medicalDescription: String,             // 医疗说明
    insurancePurchasingInfoId: String,      // 对应保险投保信息的 ID
    directPaymentStage: ENUM_NUMBER,        // 枚举值，直付阶段
}
```
- 其他说明：无

#### `/hospitalConfirmPayment`

- 功能说明：医院确认保险公司已支付直付金额
- 请求方法：POST
- 请求体：
```js
{
    directPaymentInfoId: String,        // 直付信息 ID
}
```
- 响应体：无
- 其他说明：无

#### `/hospitalConfirmPayable`

- 功能说明：医院确认可直付
- 请求方法：POST
- 请求体：
```js
{
    directPaymentInfoId: String,
    payable: Number,                // 0或1
}
```
- 响应体：无
- 其他说明：无

#### `/getElectronicInsurancePolicy`

- 功能说明：获取电子保单
- 请求方法：GET
- 请求体：
```js
{
    insurancePurchasingInfoId: String,
}
```
- 响应体：
```js
{
    electronicInsurancePolicy: String,  // 电子保单内容
}
```
- 其他说明：无

---

### 提交病历部分（前缀为 `/submitMedicalRecord`）

#### `/submitMedicalRecord`

- 功能说明：提交病历
- 请求方法：POST
- 请求体：
```js
{
    publicKey: String,      // 病人公钥
    medicalRecordList: [    // 病历数组
        {
            treatmentDate: String,              // 接受治疗时间
            treatmentHospital: String,          // 接受治疗所在医院
            doctor: String,            // 治疗的医生
            medicalRecordContent: String,       // 病历内容
        },
    ]
}
```
- 响应体：无
- 其他说明：无

### 查询病历部分（前缀为 `/queryMedicalRecord`）

#### `/queryMedicalRecord`

- 功能说明：根据公钥查询病历
- 请求方法：GET
- 请求体：
```js
{
    publicKey: String,
}
```
- 响应体：
```js
{
    medicalRecordList: [    // 病历数组
        {
            treatmentDate: String,              // 接受治疗时间
            treatmentHospital: String,          // 接受治疗所在医院
            doctor: String,            // 治疗的医生
            medicalRecordContent: String,       // 病历内容
        },
    ]
}
```
- 其他说明：无