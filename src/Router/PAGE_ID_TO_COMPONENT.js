import REQUIRE_LOGIN_PAGE_ID from '../Config/ROUTE/REQUIRE_LOGIN_PAGE_ID';
import NOT_REQUIRE_LOGIN_PAGE_ID from '../Config/ROUTE/NOT_REQUIRE_LOGIN_PAGE_ID';
import Login from '../Pages/Login';
//import SignUp from '../Pages/SignUp';
import PersonalCenter from '../Pages/PersonalCenter';
import DirectPaymentProcess from '../Pages/DirectPaymentProcess';
import DirectPaymentDetail from '../Pages/DirectPaymentDetail';
import InsurancePurchasingProcess from '../Pages/InsurancePurchasingProcess';
import SubmitMedicalRecord from '../Pages/SubmitMedicalRecord';
import QueryMedicalRecord from '../Pages/QueryMedicalRecord';
// 页面 View 从此导入

// 页面对应的组件
export default {
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_INSURANCE_LIST]: null,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_INSURANCE_PUBLICATION]: null,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_DIRECT_PAYMENT_PROCESS]: DirectPaymentProcess,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_DIRECT_PAYMENT_DETAIL]: DirectPaymentDetail,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_INSURANCE_PURCHASING_PROCESS]: InsurancePurchasingProcess,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_INSURANCE_PURCHASING_DETAIL]: null,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_PERSONAL_CENTER]: PersonalCenter,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_INSURANCE_DETAIL]: null,
    [NOT_REQUIRE_LOGIN_PAGE_ID.HOSPITAL_LOGIN]: Login,
    [NOT_REQUIRE_LOGIN_PAGE_ID.HOSPITAL_SIGN_UP]: null,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_SUBMIT_MEDICAL_RECORD]: SubmitMedicalRecord,
    [REQUIRE_LOGIN_PAGE_ID.HOSPITAL_QUERY_MEDICAL_RECORD]: QueryMedicalRecord,
};