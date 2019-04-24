import React from 'react';
import HospitalConfirmPayment from './View';
import PropTypes from 'prop-types';
import {Actions as ModalActions} from '../../../../ComponentContainers/Modal';
import * as Actions from '../../Actions/Actions';
import {connect} from 'react-redux';
import {MODAL_ID} from '../../../../Constant';
import Api from '../../../../Api';

class HospitalConfirmPaymentContainer extends React.Component
{
    onButtonClick = () =>
    {
        const {showModal} = this.props;
        showModal(MODAL_ID.HOSPITAL_CONFIRM_PAYMENT_MODAL);
    };

    onConfirm = async () =>
    {
        const {directPaymentInfoId, getDirectPaymentInfo, hideModal} = this.props;
        const requestIsSuccessful = await Api.sendPostHospitalConfirmPaymentRequestAsync(directPaymentInfoId);
        if (requestIsSuccessful)
        {
            getDirectPaymentInfo(directPaymentInfoId);
            hideModal(MODAL_ID.HOSPITAL_CONFIRM_PAYMENT_MODAL);
        }
    };

    render()
    {
        return (
            <HospitalConfirmPayment onButtonClick={this.onButtonClick} onConfirm={this.onConfirm} />
        );
    }
}

HospitalConfirmPaymentContainer.propTypes = {
    directPaymentInfoId: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
    showModal: ModalActions.showModalAction,
    hideModal: ModalActions.hideModalAction,
    getDirectPaymentInfo: Actions.getDirectPaymentInfoAction,
};

export default connect(null, mapDispatchToProps)(HospitalConfirmPaymentContainer);