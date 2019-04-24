import Account from './Account';
import DirectPaymentDetail from './DirectPaymentDetail';
import DirectPaymentProcess from './DirectPaymentProcess';
import InsurancePurchasingProcess from './InsurancePurchasingProcess';
import SubmitMedicalRecord from './SubmitMedicalRecord';
import QueryMedicalRecord from './QueryMedicalRecord';

export default {
    ...Account,
    ...DirectPaymentDetail,
    ...DirectPaymentProcess,
    ...InsurancePurchasingProcess,
    ...SubmitMedicalRecord,
    ...QueryMedicalRecord,
};