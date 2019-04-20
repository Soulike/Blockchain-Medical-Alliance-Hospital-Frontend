import React from 'react';
import {connect} from 'react-redux';
import {changeFilterAgeRangeAction, changeFilterInsurancePurchasingStageAction} from '../../Actions/Actions';
import DirectPaymentProcessSelector from './View';

class DirectPaymentProcessSelectorContainer extends React.Component
{
    render()
    {
        const {ageRange, stageId: currentSelectedStageId, changeFilterAgeRange, changeFilterInsurancePurchasingStage} = this.props;
        return <DirectPaymentProcessSelector ageRange={ageRange}
                                             currentSelectedStageId={currentSelectedStageId}
                                             changeFilterAgeRange={changeFilterAgeRange}
                                             changeFilterInsurancePurchasingStage={changeFilterInsurancePurchasingStage} />;
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
    changeFilterAgeRange: changeFilterAgeRangeAction,
    changeFilterInsurancePurchasingStage: changeFilterInsurancePurchasingStageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectPaymentProcessSelectorContainer);