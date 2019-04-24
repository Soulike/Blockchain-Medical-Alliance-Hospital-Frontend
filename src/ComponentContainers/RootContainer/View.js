import React from 'react';
import Root from '../../Components/Root';
import {NOT_REQUIRE_LOGIN_PAGE_ID, PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID, ROUTE_TO_PAGE_ID} from '../../Config';
import {connect} from 'react-redux';

class RootContainer extends React.Component
{
    shouldSubmitMedicalRecordBeActive = pageId =>
    {
        return (
            pageId === REQUIRE_LOGIN_PAGE_ID.HOSPITAL_SUBMIT_MEDICAL_RECORD
        );
    };

    shouldQueryMedicalRecordBeActive = pageId =>
    {
        return (
            pageId === REQUIRE_LOGIN_PAGE_ID.HOSPITAL_QUERY_MEDICAL_RECORD
        );
    };

    shouldDirectPaymentLinkBeActive = pageId =>
    {
        return (
            pageId === REQUIRE_LOGIN_PAGE_ID.HOSPITAL_DIRECT_PAYMENT_DETAIL ||
            pageId === REQUIRE_LOGIN_PAGE_ID.HOSPITAL_DIRECT_PAYMENT_PROCESS
        );
    };

    shouldPersonalCenterLinkBeActive = pageId =>
    {
        return (
            pageId === REQUIRE_LOGIN_PAGE_ID.HOSPITAL_PERSONAL_CENTER
        );
    };

    render()
    {
        const {children, hasLoggedIn} = this.props;
        const currentPageId = ROUTE_TO_PAGE_ID[this.props.location.pathname];
        return (
            <Root hasLoggedIn={hasLoggedIn}
                  directPaymentUrl={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_DIRECT_PAYMENT_PROCESS]}
                  loginUrl={PAGE_ID_TO_ROUTE[NOT_REQUIRE_LOGIN_PAGE_ID.HOSPITAL_LOGIN]}
                  signUpUrl={PAGE_ID_TO_ROUTE[NOT_REQUIRE_LOGIN_PAGE_ID.HOSPITAL_SIGN_UP]}
                  personalCenterUrl={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_PERSONAL_CENTER]}
                  directPaymentLinkIsActive={this.shouldDirectPaymentLinkBeActive(currentPageId)}
                  personalCenterLinkIsActive={this.shouldPersonalCenterLinkBeActive(currentPageId)}
                  queryMedicalRecordUrl={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_QUERY_MEDICAL_RECORD]}
                  submitMedicalRecordUrl={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_SUBMIT_MEDICAL_RECORD]}
                  submitMedicalRecordLinkIsActive={this.shouldSubmitMedicalRecordBeActive(currentPageId)}
                  queryMedicalRecordLinkIsActive={this.shouldQueryMedicalRecordBeActive(currentPageId)}>{children}</Root>
        );
    }
}

const mapStateToProps = state =>
{
    const {AuthProcessor: {hasLoggedIn}} = state;
    return {
        hasLoggedIn,
    };
};

export default connect(mapStateToProps)(RootContainer);