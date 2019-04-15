import React, {Component} from 'react';
import Style from './Style.module.scss';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import logo from '../../../../Static/Root/logo.svg';

class Header extends Component
{
    render()
    {
        const {
            hasLoggedIn,
            insuranceUrl,
            insurancePurchasingUrl,
            directPaymentUrl,
            personalCenterUrl,
            signUpUrl,
            loginUrl,
            insuranceLinkIsActive,
            insurancePurchasingLinkIsActive,
            directPaymentLinkIsActive,
            personalCenterLinkIsActive,
        } = this.props;
        return (
            <div className={Style.Header}>
                <div className={Style.logoWrapper}>
                    <div className={Style.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className={Style.rightWrapper}>
                    <nav className={Style.navWrapper}>
                        <Link onlyActiveOnIndex={false}
                              className={`${Style.navItem} ${insuranceLinkIsActive ? Style.active : null}`}
                              to={insuranceUrl}>保险</Link>
                        <Link onlyActiveOnIndex={false}
                              className={`${Style.navItem} ${insurancePurchasingLinkIsActive ? Style.active : null}`}
                              to={insurancePurchasingUrl}>投保</Link>
                        <Link onlyActiveOnIndex={false}
                              className={`${Style.navItem} ${directPaymentLinkIsActive ? Style.active : null}`}
                              to={directPaymentUrl}>直付</Link>
                    </nav>
                    <div className={Style.authControllerWrapper}>
                        {
                            hasLoggedIn
                                ? <Link onlyActiveOnIndex={false}
                                        className={`${Style.link} ${personalCenterLinkIsActive ? Style.active : null}`}
                                        to={personalCenterUrl}>个人中心</Link>
                                : [
                                    <Link onlyActiveOnIndex={false}
                                          className={Style.link}
                                          to={signUpUrl}
                                          key={'注册'}>注册</Link>, ' / ',
                                    <Link onlyActiveOnIndex={false}
                                          className={Style.link}
                                          to={loginUrl}
                                          key={'登录'}>登录</Link>,
                                ]
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    hasLoggedIn: PropTypes.bool.isRequired,
    insuranceUrl: PropTypes.string.isRequired,
    insurancePurchasingUrl: PropTypes.string.isRequired,
    directPaymentUrl: PropTypes.string.isRequired,
    personalCenterUrl: PropTypes.string.isRequired,
    signUpUrl: PropTypes.string.isRequired,
    loginUrl: PropTypes.string.isRequired,
    insuranceLinkIsActive: PropTypes.bool.isRequired,
    insurancePurchasingLinkIsActive: PropTypes.bool.isRequired,
    directPaymentLinkIsActive: PropTypes.bool.isRequired,
    personalCenterLinkIsActive: PropTypes.bool.isRequired,
};

export default Header;