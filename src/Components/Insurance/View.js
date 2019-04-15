import React, {Component} from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import '../../Static/InsuranceList/insurance.jpg';

class Insurance extends Component
{
    render()
    {
        const {insuranceSource, insuranceDuration, insurancePrice} = this.props;
        return (
            <div className={Style.Insurance}>
                <div className={Style.image} />
                <div className={Style.infoWrapper}>
                    <div className={Style.info}>来源：<span className={Style.infoValue}>{insuranceSource}</span></div>
                    <div className={Style.info}>保期：<span className={Style.infoValue}>{insuranceDuration}</span></div>
                    <div className={Style.info}>保金：<span className={Style.infoValue}>{insurancePrice} 元</span></div>
                </div>
            </div>
        );
    }
}

Insurance.propTypes = {
    insuranceSource: PropTypes.string.isRequired,
    insuranceDuration: PropTypes.string.isRequired,
    insurancePrice: PropTypes.number.isRequired,
};

export default Insurance;