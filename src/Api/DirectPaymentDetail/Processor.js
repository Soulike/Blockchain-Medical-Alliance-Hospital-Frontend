import Function from '../../Function';
import {
    GET_DIRECT_PAYMENT_INFO,
    GET_ELECTRONIC_INSURANCE_POLICY,
    HOSPITAL_CONFIRM_PAYABLE,
    HOSPITAL_CONFIRM_PAYMENT,
} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';

export async function sendGetDirectPaymentInfoRequestAsync(directPaymentInfoId)
{
    try
    {
        const {code, data} = await Function.getAsync(GET_DIRECT_PAYMENT_INFO, false, {
            directPaymentInfoId,
        });
        switch (code)
        {
            case STATUS_CODE.OK:
            {
                return data;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                message.error('参数错误');
                return null;
            }
            case STATUS_CODE.UNAUTHORIZED:
            {
                message.error('未登录操作');
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                message.error('获取直付信息操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('直付信息不存在');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('与服务器资源冲突');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的获取直付信息失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}

export async function sendPostHospitalConfirmPaymentRequestAsync(directPaymentInfoId)
{
    try
    {
        const {code} = await Function.postAsync(HOSPITAL_CONFIRM_PAYMENT, {
            directPaymentInfoId,
        });
        switch (code)
        {
            case STATUS_CODE.OK:
            {
                message.success('确认支付成功');
                return true;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                message.error('参数错误');
                return null;
            }
            case STATUS_CODE.UNAUTHORIZED:
            {
                message.error('未登录操作');
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                message.error('确认支付操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('直付信息不存在');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('与服务器资源冲突');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的确认支付失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}

export async function sendGetElectronicInsurancePolicyRequestAsync(insurancePurchasingInfoId)
{
    try
    {
        const {code, data} = await Function.getAsync(GET_ELECTRONIC_INSURANCE_POLICY, false, {
            insurancePurchasingInfoId,
        });
        switch (code)
        {
            case STATUS_CODE.OK:
            {
                return data;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                message.error('参数错误');
                return null;
            }
            case STATUS_CODE.UNAUTHORIZED:
            {
                message.error('未登录操作');
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                message.error('获取电子保单操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('电子保单不存在');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('与服务器资源冲突');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的获取电子保单失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}

export async function sendPostHospitalConfirmPayableRequestAsync(directPaymentInfoId, payable)
{
    try
    {
        const {code} = await Function.postAsync(HOSPITAL_CONFIRM_PAYABLE, {
            directPaymentInfoId,
            payable,
        });
        switch (code)
        {
            case STATUS_CODE.OK:
            {
                message.success('确认可直付成功');
                return true;
            }
            case STATUS_CODE.BAD_REQUEST:
            {
                message.error('参数错误');
                return null;
            }
            case STATUS_CODE.UNAUTHORIZED:
            {
                message.error('未登录操作');
                AuthProcessorFunction.setLoggedOut();
                return null;
            }
            case STATUS_CODE.FORBIDDEN:
            {
                message.error('确认可直付操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('直付信息不存在');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('与服务器资源冲突');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的确认可直付失败');
                return null;
            }
        }
    }
    catch (e)
    {
        console.error(e);
        message.error('网络异常');
        return null;
    }
}