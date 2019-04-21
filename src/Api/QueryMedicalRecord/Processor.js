import Function from '../../Function';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';
import {QUERY_MEDICAL_RECORD} from './ROUTE';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';

export async function sendPostQueryMedicalRecordRequestAsync(publicKey)
{
    try
    {
        const {code, data} = await Function.getAsync(QUERY_MEDICAL_RECORD, false, {
            publicKey,
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
                message.error('获取病历操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('公钥不存在');
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
                message.error('未知原因的获取病历失败');
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