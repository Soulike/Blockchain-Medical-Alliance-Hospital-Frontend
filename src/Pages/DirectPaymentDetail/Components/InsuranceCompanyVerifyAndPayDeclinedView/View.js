import React from 'react';
import Style from './Style.module.scss';
import Icon from 'antd/lib/icon';

function InsuranceCompanyVerifyAndPayDeclinedView()
{
    return (
        <div className={Style.InsuranceCompanyVerifyAndPayDeclinedView}>
            <Icon type="close-circle" theme="twoTone" twoToneColor={'#F00'} className={Style.icon} />
            <span className={Style.text}>审核未通过</span>
        </div>
    );
}

export default InsuranceCompanyVerifyAndPayDeclinedView;