import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import Modal from '../../../../ComponentContainers/Modal';
import {MODAL_ID} from '../../../../Constant';
import Radio from 'antd/lib/radio';
import Button from 'antd/lib/button';

const RadioGroup = Radio.Group;

function HospitalConfirmPayable(props)
{
    const {
        electronicInsurancePolicy,
        payable,
        onViewElectronicInsurancePolicyButtonClick,
        onViewInsurancePurchasingInfoButtonClick,
        onRadioChange,
        onConfirmButtonClick,
    } = props;
    return [
        <div className={Style.HospitalConfirmPayable} key={Style.HospitalConfirmPayable}>
            <div className={Style.buttonsWrapper}>
                <Button htmlType={'button'} onClick={onViewElectronicInsurancePolicyButtonClick}>查看电子保单</Button>
                <Button htmlType={'button'} onClick={onViewInsurancePurchasingInfoButtonClick}>查看投保信息</Button>
            </div>
            <div className={Style.selectorWrapper}>
                <div className={Style.selectorLabel}>可以直付：</div>
                <div className={Style.radioWrapper}>
                    <RadioGroup onChange={onRadioChange} value={payable}>
                        <Radio value={1}>是</Radio>
                        <Radio value={0}>否</Radio>
                    </RadioGroup>
                </div>
            </div>
            <div className={Style.confirmButtonWrapper}>
                <Button htmlType={'button'} type={'primary'} className={Style.confirmButton}
                        onClick={onConfirmButtonClick}>确定
                </Button>
            </div>
        </div>,
        <Modal modalId={MODAL_ID.ELECTRONIC_INSURANCE_POLICY_MODAL}
               title={'电子保单'}
               key={MODAL_ID.ELECTRONIC_INSURANCE_POLICY_MODAL}>
            {electronicInsurancePolicy}
        </Modal>,
    ];
}

HospitalConfirmPayable.propTypes = {
    electronicInsurancePolicy: PropTypes.string.isRequired,
    payable: PropTypes.oneOf([0, 1]).isRequired,
    onViewElectronicInsurancePolicyButtonClick: PropTypes.func.isRequired,
    onViewInsurancePurchasingInfoButtonClick: PropTypes.func.isRequired,
    onRadioChange: PropTypes.func.isRequired,
    onConfirmButtonClick: PropTypes.func.isRequired,
};

export default HospitalConfirmPayable;