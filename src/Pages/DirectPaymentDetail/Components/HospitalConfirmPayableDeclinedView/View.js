import React from 'react';
import Style from './Style.module.scss';
import Icon from 'antd/lib/icon';

function HospitalConfirmPayableDeclinedView()
{
    return (
        <div className={Style.HospitalConfirmPayableDeclinedView}>
            <Icon type="close-circle" theme="twoTone" twoToneColor={'#F00'} className={Style.icon} />
            <span className={Style.text}>医院已拒绝申请</span>
        </div>
    );
}

export default HospitalConfirmPayableDeclinedView;