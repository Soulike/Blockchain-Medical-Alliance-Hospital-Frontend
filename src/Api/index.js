import Account from './Account';
import DirectPaymentDetail from './DirectPaymentDetail';
import DirectPaymentProcess from './DirectPaymentProcess';
import InsurancePurchasingProcess from './InsurancePurchasingProcess';

export default {
    ...Account,
    ...DirectPaymentDetail,
    ...DirectPaymentProcess,
    ...InsurancePurchasingProcess,
};