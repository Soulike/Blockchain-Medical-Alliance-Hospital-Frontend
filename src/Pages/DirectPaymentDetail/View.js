import React from 'react';
import Style from './Style.module.scss';
import HorizontalStageProgressIndicator from '../../Components/HorizontalStageProgressIndicator';
import StageTextIndicator from '../../Components/StageTextIndicator';
import {DIRECT_PAYMENT_STAGE_ID, DIRECT_PAYMENT_STAGE_ID_TO_TEXT} from '../../Constant';
import PropTypes from 'prop-types';
import HospitalConfirmPayableDeclinedView from './Components/HospitalConfirmPayableDeclinedView';
import CompleteView from './Components/CompleteView';
import HospitalConfirmPayable from './Components/HospitalConfirmPayable';
import HospitalConfirmPayment from './Components/HospitalConfirmPayment';

function DirectPaymentDetail(props)
{
    const stageTextArray = [...DIRECT_PAYMENT_STAGE_ID_TO_TEXT];
    const {directPaymentInfo} = props;
    const {
        name,
        directPaymentStage,
        directPaymentInfoId,
    } = directPaymentInfo;
    return (
        <div className={Style.DirectPaymentDetail}>
            <div className={Style.stageProgressIndicatorWrapper}>
                <HorizontalStageProgressIndicator currentStageNumber={Math.abs(directPaymentStage)}
                                                  maxStageNumber={stageTextArray.length - 1} />
            </div>
            <div className={Style.title}><span className={Style.name}>{name}</span>直付进度详情</div>
            <div className={Style.stageTextIndicatorWrapper}>
                <StageTextIndicator currentStageNumber={Math.abs(directPaymentStage)}
                                    stageTextArray={stageTextArray} />
            </div>
            <div className={Style.stageProcessorWrapper}>
                {
                    (() =>
                    {
                        switch (directPaymentStage)
                        {
                            case DIRECT_PAYMENT_STAGE_ID.NORMAL.COMPLETE:
                            {
                                return <CompleteView />;
                            }
                            case DIRECT_PAYMENT_STAGE_ID.NORMAL.HOSPITAL_CONFIRM_PAYABLE:
                            {
                                return <HospitalConfirmPayable />;
                            }
                            case DIRECT_PAYMENT_STAGE_ID.DECLINE.HOSPITAL_CONFIRM_PAYABLE_DECLINED:
                            {
                                return <HospitalConfirmPayableDeclinedView />;
                            }
                            case DIRECT_PAYMENT_STAGE_ID.NORMAL.HOSPITAL_CONFIRM_PAYMENT:
                            {
                                return <HospitalConfirmPayment directPaymentInfoId={directPaymentInfoId} />;
                            }
                            default:
                            {
                                return null;
                            }
                        }
                    })()
                }
            </div>
        </div>
    );
}

DirectPaymentDetail.propTypes = {
    directPaymentInfo: PropTypes.object.isRequired,
};

export default DirectPaymentDetail;