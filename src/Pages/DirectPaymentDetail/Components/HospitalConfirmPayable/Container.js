import React from 'react';
import HospitalConfirmPayable from './View';
import Api from '../../../../Api';
import {MODAL_ID} from '../../../../Constant';
import {browserHistory} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../../../Config/ROUTE';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as Actions from '../../Actions/Actions';

class HospitalConfirmPayableContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            payable: 0,
            electronicInsurancePolicy: '',
        };
    }

    onRadioChange = e =>
    {
        this.setState({
            payable: e.target.value,
        });
    };

    onViewElectronicInsurancePolicyButtonClick = async () =>
    {
        const {insurancePurchasingInfoId, showModal} = this.props;
        const electronicInsurancePolicyWrapper = await Api.sendGetElectronicInsurancePolicyRequestAsync(insurancePurchasingInfoId);
        if (electronicInsurancePolicyWrapper)
        {
            const {electronicInsurancePolicy} = electronicInsurancePolicyWrapper;
            this.setState({
                electronicInsurancePolicy,
            }, () =>
            {
                showModal(MODAL_ID.ELECTRONIC_INSURANCE_POLICY_MODAL);
            });
        }
    };

    onViewInsurancePurchasingInfoButtonClick = async () =>
    {
        const {insurancePurchasingInfoId} = this.props;
        browserHistory.push(`${PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_INSURANCE_PURCHASING_PROCESS]}?insurancePurchasingInfoId=${insurancePurchasingInfoId}`);
    };

    onConfirmButtonClick = async () =>
    {
        const {payable} = this.state;
        const {directPaymentInfoId, getDirectPaymentInfo} = this.props;
        const requestIsSuccessful = await Api.sendPostHospitalConfirmPayableRequestAsync(directPaymentInfoId, payable);
        if (requestIsSuccessful)
        {
            getDirectPaymentInfo(directPaymentInfoId);
        }
    };

    render()
    {
        const {electronicInsurancePolicy, payable} = this.state;
        return <HospitalConfirmPayable onRadioChange={this.onRadioChange}
                                       electronicInsurancePolicy={electronicInsurancePolicy}
                                       onViewElectronicInsurancePolicyButtonClick={this.onViewElectronicInsurancePolicyButtonClick}
                                       onViewInsurancePurchasingInfoButtonClick={this.onViewInsurancePurchasingInfoButtonClick}
                                       onConfirmButtonClick={this.onConfirmButtonClick}
                                       payable={payable} />;
    }
}

HospitalConfirmPayableContainer.propTypes = {
    directPaymentInfoId: PropTypes.string.isRequired,
    insurancePurchasingInfoId: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
    getDirectPaymentInfo: Actions.getDirectPaymentInfoAction,
};

export default connect(null, mapDispatchToProps)(HospitalConfirmPayableContainer);