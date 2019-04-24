import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
// import 所有 Reducer
import {Reducer as AuthProcessorReducer} from './Components/AuthProcessor';
import {Reducer as ModalReducer} from './ComponentContainers/Modal';
import {Reducer as DirectPaymentProcessReducer} from './Pages/DirectPaymentProcess';
import {Reducer as DirectPaymentDetailReducer} from './Pages/DirectPaymentDetail';
import {DIRECT_PAYMENT_STAGE_ID} from './Constant';

// Store 中的初始值，根据开发需要进行改变
const initValues = {
    AuthProcessor: {
        hasLoggedIn: true,
    },
    Modal: {
        currentVisibleModalIdSet: new Set(),
    },
    DirectPaymentProcess: {
        ageRange: [Number.MIN_VALUE, Number.MAX_VALUE],     // 筛选器年龄范围
        stageId: DIRECT_PAYMENT_STAGE_ID.DEVELOPMENT.ALL_STAGES,  // 筛选器阶段
    },
    DirectPaymentDetail: {
        directPaymentInfo: {
            /*directPaymentInfoId: 'aaaa',            // 这条直付信息的唯一识别 ID
            name: '啊啊啊',                           // 投保人姓名
            age: 1,                            // 投保人年龄
            isMale: 1,                         // 投保人是不是男性，0为女，1为男
            healthState: 'aaa',                    // 投保人健康状况
            publicKey: 'String',                      // 投保人公钥
            directPaymentMoneyAmount: 233,       // 直付金额，单位是人民币元
            diagnosticResult: 'String',               // 诊断结果
            medicalDescription: 'String',             // 医疗说明
            insurancePurchasingInfoId: 'String',      // 对应保险投保信息的 ID
            directPaymentStage: DIRECT_PAYMENT_STAGE_ID.NORMAL.HOSPITAL_CONFIRM_PAYMENT,        // 枚举值，直付阶段*/
        },
    },
};

// 所有中间件放在此处
const middleWares = [thunk];

const storeEnhancers = compose(
    applyMiddleware(...middleWares),
);

// 所有 Reducer 放在此处
const Reducer = combineReducers({
    AuthProcessor: AuthProcessorReducer,
    Modal: ModalReducer,
    DirectPaymentProcess: DirectPaymentProcessReducer,
    DirectPaymentDetail: DirectPaymentDetailReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);