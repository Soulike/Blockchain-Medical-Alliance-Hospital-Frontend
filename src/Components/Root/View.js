import React, {Component} from 'react';
import Style from './Style.module.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PropTypes from 'prop-types';

class Root extends Component
{
    render()
    {
        const {
            children,
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
            <div className={Style.Root}>
                <header className={Style.headerWrapper}>
                    <Header {...{
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
                    }} />
                </header>
                <main className={Style.mainContent}>
                    {children}
                </main>
                <footer className={Style.footerWrapper}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

Root.propTypes = {
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

export default Root;