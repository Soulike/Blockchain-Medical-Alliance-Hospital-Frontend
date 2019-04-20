import React from 'react';
import Style from './Style.module.scss';
import Icon from 'antd/lib/icon';

function CompleteView()
{
    return (
        <div className={Style.CompleteView}>
            <Icon type="check-circle" theme="twoTone" className={Style.icon} />
            <span className={Style.text}>直付已完成</span>
        </div>
    );
}

export default CompleteView;