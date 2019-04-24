import React from 'react';
import DirectPaymentDetail from './View';
import * as Actions from './Actions/Actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config/ROUTE';

class DirectPaymentDetailContainer extends React.Component
{
    componentDidMount()
    {
        const {directPaymentInfoId} = this.props.location.query;
        if (directPaymentInfoId === undefined)
        {
            browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_DIRECT_PAYMENT_PROCESS]);
        }
        else
        {
            const {getDirectPaymentInfo} = this.props;
            getDirectPaymentInfo(directPaymentInfoId);
        }
    }

    render()
    {
        const {directPaymentInfo} = this.props;
        return (
            <DirectPaymentDetail directPaymentInfo={directPaymentInfo} />
        );
    }
}

const mapStateToProps = state =>
{
    const {DirectPaymentDetail: {directPaymentInfo}} = state;
    return {
        directPaymentInfo,
    };
};

const mapDispatchToProps = {
    getDirectPaymentInfo: Actions.getDirectPaymentInfoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectPaymentDetailContainer);