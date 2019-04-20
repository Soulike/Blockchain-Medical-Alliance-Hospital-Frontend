import React from 'react';
import PropTypes from 'prop-types';
import {MODAL_ID} from '../../../../Constant';
import Api from '../../../../Api';
import {getDirectPaymentInfoAction} from '../../Actions/Actions';
import {connect} from 'react-redux';
import InsuranceCompanyVerifyAndPayProcessor from './View';
import {Actions as ModalActions} from '../../../../ComponentContainers/Modal';

class InsuranceCompanyVerifyAndPayProcessorContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentSelectedRadio: false,
            electronicInsurancePolicy: '',
            medicalRecord: '',
        };
    }

    onRadioChange = e =>
    {
        this.setState({
            currentSelectedRadio: e.target.value,
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

    onViewMedicalRecordButtonClick = async () =>
    {
        const {insurancePurchasingInfoId, showModal} = this.props;
        const medicalRecordWrapper = await Api.sendGetMedicalRecordRequestAsync(insurancePurchasingInfoId);
        if (medicalRecordWrapper)
        {
            const {medicalRecord} = medicalRecordWrapper;
            this.setState({
                medicalRecord,
            }, () =>
            {
                showModal(MODAL_ID.MEDICAL_RECORD_MODAL);
            });
        }
    };

    onConfirmButtonClick = async () =>
    {
        const {currentSelectedRadio} = this.state;
        const {directPaymentInfoId, getDirectPaymentInfo} = this.props;
        const requestIsSuccessful = await Api.sendPostSubmitInsuranceCompanyVerifyAndPayResultRequestAsync(directPaymentInfoId, currentSelectedRadio);
        if (requestIsSuccessful)
        {
            getDirectPaymentInfo(directPaymentInfoId);
        }
    };

    render()
    {
        const {electronicInsurancePolicy, medicalRecord} = this.state;
        return <InsuranceCompanyVerifyAndPayProcessor electronicInsurancePolicy={electronicInsurancePolicy}
                                                      medicalRecord={medicalRecord}
                                                      onViewElectronicInsurancePolicyButtonClick={this.onViewElectronicInsurancePolicyButtonClick}
                                                      onViewMedicalRecordButtonClick={this.onViewMedicalRecordButtonClick}
                                                      onRadioChange={this.onRadioChange}
                                                      onConfirmButtonClick={this.onConfirmButtonClick} />;
    }
}

InsuranceCompanyVerifyAndPayProcessorContainer.propTypes = {
    insurancePurchasingInfoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    directPaymentInfoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const mapDispatchToProps = {
    getDirectPaymentInfo: getDirectPaymentInfoAction,
    showModal: ModalActions.showModalAction,
};

export default connect(null, mapDispatchToProps)(InsuranceCompanyVerifyAndPayProcessorContainer);