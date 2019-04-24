import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import Modal from '../../../../ComponentContainers/Modal';
import {MODAL_ID} from '../../../../Constant';

function HospitalConfirmPayment(props)
{
    const {onButtonClick, onConfirm} = props;
    return [
        <div className={Style.HospitalConfirmPayment} key={Style.HospitalConfirmPayment}>
            <Button type={'primary'} size={'large'} onClick={onButtonClick}>确认保险公司已支付</Button>
        </div>,
        <Modal modalId={MODAL_ID.HOSPITAL_CONFIRM_PAYMENT_MODAL}
               width={500}
               title={'确认保险公司已支付'}
               onOk={onConfirm}
               key={MODAL_ID.HOSPITAL_CONFIRM_PAYMENT_MODAL} okText={'确认'}>
            <p>确认保险公司已支付后，直付流程将会完成。</p>
            <p><strong>请务必确认保险公司已支付全部金额。</strong></p>
        </Modal>,
    ];
}

HospitalConfirmPayment.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default HospitalConfirmPayment;