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
            directPaymentUrl,
            personalCenterUrl,
            signUpUrl,
            loginUrl,
            submitMedicalRecordUrl,
            submitMedicalRecordLinkIsActive,
            queryMedicalRecordUrl,
            queryMedicalRecordLinkIsActive,
            directPaymentLinkIsActive,
            personalCenterLinkIsActive,
        }
            = this.props;
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
                              className={`${Style.navItem} ${directPaymentLinkIsActive ? Style.active : null}`}
                              to={directPaymentUrl}>直付</Link>
                        <Link onlyActiveOnIndex={false}
                              className={`${Style.navItem} ${submitMedicalRecordLinkIsActive ? Style.active : null}`}
                              to={submitMedicalRecordUrl}>提交病历</Link>
                        <Link onlyActiveOnIndex={false}
                              className={`${Style.navItem} ${queryMedicalRecordLinkIsActive ? Style.active : null}`}
                              to={queryMedicalRecordUrl}>查询病历</Link>
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
    directPaymentUrl: PropTypes.string.isRequired,
    personalCenterUrl: PropTypes.string.isRequired,
    signUpUrl: PropTypes.string.isRequired,
    loginUrl: PropTypes.string.isRequired,
    submitMedicalRecordUrl: PropTypes.string.isRequired,
    submitMedicalRecordLinkIsActive: PropTypes.bool.isRequired,
    queryMedicalRecordUrl: PropTypes.string.isRequired,
    queryMedicalRecordLinkIsActive: PropTypes.bool.isRequired,
    directPaymentLinkIsActive: PropTypes.bool.isRequired,
    personalCenterLinkIsActive: PropTypes.bool.isRequired,
};

export default Header;