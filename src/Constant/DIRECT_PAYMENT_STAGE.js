export const DIRECT_PAYMENT_STAGE_ID = {
    DEVELOPMENT: {
        ALL_STAGES: Symbol('allStages'),                         // 所有状态，开发用
    },
    NORMAL: {
        APPLICATION: 0,                         // 投保人申请
        HOSPITAL_CONFIRM_PAYABLE: 1,            // 待医院确认是否可以直付
        INSURANCE_COMPANY_VERIFY_AND_PAY: 2,    // 待保险公司审核及支付
        HOSPITAL_CONFIRM_PAYMENT: 3,            // 医院已确认收款
        COMPLETE: 4,                            // 完成
    },
    DECLINE: {
        HOSPITAL_CONFIRM_PAYABLE_DECLINED: -1,            // 医院确认不可直付
        INSURANCE_COMPANY_VERIFY_AND_PAY_DECLINED: -2,    // 保险公司审核不通过
    },
};

export const DIRECT_PAYMENT_STAGE_ID_TO_TEXT = {
    [DIRECT_PAYMENT_STAGE_ID.DEVELOPMENT.ALL_STAGES]: '全部',
    [DIRECT_PAYMENT_STAGE_ID.NORMAL.APPLICATION]: '投保人已申请',
    [DIRECT_PAYMENT_STAGE_ID.NORMAL.HOSPITAL_CONFIRM_PAYABLE]: '医院确认直付',
    [DIRECT_PAYMENT_STAGE_ID.NORMAL.INSURANCE_COMPANY_VERIFY_AND_PAY]: '公司审核付款',
    [DIRECT_PAYMENT_STAGE_ID.NORMAL.HOSPITAL_CONFIRM_PAYMENT]: '医院确认收款',
    [DIRECT_PAYMENT_STAGE_ID.NORMAL.COMPLETE]: '已完成',

    // 为了进度组件取 Label 方便，增加迭代器跳过 -1
    [Symbol.iterator]: function* ()
    {
        for (let i = 0; i < Object.keys(DIRECT_PAYMENT_STAGE_ID.NORMAL).length; i++)
        {
            yield this[i];
        }
    },
};