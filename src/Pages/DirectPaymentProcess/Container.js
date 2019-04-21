import React from 'react';
// import Function from '../../Function';
import {connect} from 'react-redux';
import {MODAL_ID} from '../../Constant';
import Api from '../../Api';
import {browserHistory} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config/ROUTE';
import DirectPaymentProcess from './View';
import {Actions as ModalActions} from '../../ComponentContainers/Modal';

class DirectPaymentProcessContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            directPaymentInfoList: [],
            currentActiveDiagnosticResultInModal: '',
            currentActiveMedicalDescriptionInModal: '',
            hasGotData: false,
        };
    }

    componentDidMount()
    {
        /* const directPaymentInfoList = [];
         for (let i = 0; i < 30; i++)
         {
             directPaymentInfoList.push({
                 directPaymentInfoId: i + 1,
                 name: '罗小黑',
                 age: Math.round(Math.random() * 80 + 1),
                 isMale: 0,
                 healthState: '健康',
                 publicKey: Function.randomString(52),
                 directPaymentMoneyAmount: Math.round(Math.random() * 20000 + 1000),
                 diagnosticResult: Function.randomString(20),
                 medicalDescription: Function.randomString(20),
                 insuranceType: '少年英才保险',
                 insurancePurchasingTime: '2019年03月17日',
                 insurancePeriod: `${Math.round(Math.random() * 10 + 1)} 年`,
                 insurancePrice: Math.round(Math.random() * 20000 + 1000),
                 directPaymentStage: Math.round(Math.random() * 4),
                 responsiblePersonId: 1,
                 responsiblePersonName: '王子贤',
                 insurancePurchasingInfoId: i + 1,
             });
         }

         this.setState({
             directPaymentInfoList,
         });*/

        Api.sendGetDirectPaymentInfoListRequestAsync()
            .then(directPaymentInfoListWrapper =>
            {
                if (directPaymentInfoListWrapper)
                {
                    const {directPaymentInfoList} = directPaymentInfoListWrapper;
                    this.setState({
                        directPaymentInfoList,
                        hasGotData: true,
                    });
                }
            });
    }

    onInsurancePurchasingInfoButtonClick = insurancePurchasingInfoId =>
    {
        return e =>
        {
            e.stopPropagation();
            e.cancelBubble = true;
            browserHistory.push(`${PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_INSURANCE_PURCHASING_PROCESS]}?insurancePurchasingInfoId=${insurancePurchasingInfoId}`);
        };
    };

    onDirectPaymentInfoClick = directPaymentInfoId =>
    {
        browserHistory.push(`${PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_DIRECT_PAYMENT_DETAIL]}?directPaymentInfoId=${directPaymentInfoId}`);
    };

    onDiagnosticResultButtonClick = diagnosticResult =>
    {
        return e =>
        {
            e.stopPropagation();
            e.cancelBubble = true;
            const {showModal} = this.props;
            this.setState({
                currentActiveDiagnosticResultInModal: diagnosticResult,
            }, () =>
            {
                showModal(MODAL_ID.DIAGNOSTIC_RESULT_MODAL);
            });
        };
    };

    onMedicalDescriptionButtonClick = medicalDescription =>
    {
        return e =>
        {
            e.stopPropagation();
            e.cancelBubble = true;
            const {showModal} = this.props;
            this.setState({
                currentActiveMedicalDescriptionInModal: medicalDescription,
            }, () =>
            {
                showModal(MODAL_ID.MEDICAL_DESCRIPTION_MODAL);
            });
        };
    };

    render()
    {
        const {directPaymentInfoList, currentActiveDiagnosticResultInModal, currentActiveMedicalDescriptionInModal, hasGotData} = this.state;
        const {ageRange, stageId} = this.props;
        return <DirectPaymentProcess ageRange={ageRange}
                                     stageId={stageId}
                                     directPaymentInfoList={directPaymentInfoList}
                                     currentActiveDiagnosticResultInModal={currentActiveDiagnosticResultInModal}
                                     currentActiveMedicalDescriptionInModal={currentActiveMedicalDescriptionInModal}
                                     onMedicalDescriptionButtonClick={this.onMedicalDescriptionButtonClick}
                                     onInsurancePurchasingInfoButtonClick={this.onInsurancePurchasingInfoButtonClick}
                                     onDirectPaymentInfoClick={this.onDirectPaymentInfoClick}
                                     onDiagnosticResultButtonClick={this.onDiagnosticResultButtonClick}
                                     hasGotData={hasGotData} />;
    }
}

const mapStateToProps = state =>
{
    const {DirectPaymentProcess: {ageRange, stageId}} = state;
    return {
        ageRange,
        stageId,
    };
};

const mapDispatchToProps = {
    showModal: ModalActions.showModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectPaymentProcessContainer);