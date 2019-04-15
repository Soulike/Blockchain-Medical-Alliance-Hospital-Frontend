export const REGEX = {
    USERNAME: /^\w{5,20}$/,
    PASSWORD: /^\w{10,}$/,
    NAME: /^.+$/,
    AGE: /^\d+$/,
    ADDRESS: /^.+$/,
    EMAIL: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    VERIFICATION_CODE: /^[A-z0-9]+$/,


    INSURANCE_NAME: /^.+$/,
    INSURANCE_AMOUNT: /^\d+(?:.\d{0,2})?$/,
    INSURANCE_PERIOD: /^.+$/,
    INSURANCE_DISEASE_TYPE: /^.+$/,
    COVERING_AGE: /^.+$/,
    SALES_AREA: /^.+$/,
    INSURANCE_PRICE: /^\d+(?:.\d{0,2})?$/,
};

export const REGEX_TEXT = {
    USERNAME: '5~20位的字母、数字或下划线',
    PASSWORD: '10位以上的字母、数字或下划线',
};