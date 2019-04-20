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
        } = this.props;
        return (
            <div className={Style.Root}>
                <header className={Style.headerWrapper}>
                    <Header {...{
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
    directPaymentUrl: PropTypes.string.isRequired,
    personalCenterUrl: PropTypes.string.isRequired,
    signUpUrl: PropTypes.string.isRequired,
    loginUrl: PropTypes.string.isRequired,
    submitMedicalRecordUrl: PropTypes.string.isRequired,
    submitMedicalRecordLinkIsActive: PropTypes.bool.isRequired,
    queryMedicalRecordUrl: PropTypes.string.isRequired,
    queryMedicalRecordLinkIsActive: PropTypes.string.isRequired,
    directPaymentLinkIsActive: PropTypes.bool.isRequired,
    personalCenterLinkIsActive: PropTypes.bool.isRequired,
};

export default Root;