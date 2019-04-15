import React, {Component} from 'react';
import Style from './Style.module.scss';

class Footer extends Component
{
    render()
    {
        return (
            <div className={Style.Footer}>
                <div className={Style.infoWrapper}>
                    <span className={Style.info}>版权所有：大连理工大学</span>
                    <span className={Style.info}>电话：0411-7120596</span>
                    <span className={Style.info}>辽ICP备12345678号</span>
                    <span className={Style.info}>地址：辽宁省大连市甘井子区</span>
                </div>
            </div>
        );
    }
}

export default Footer;