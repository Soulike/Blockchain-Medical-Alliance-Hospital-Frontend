import Function from '../../Function';
import {GET_VERIFICATION_CODE, LOGIN, SIGN_UP} from './ROUTE';
import {STATUS_CODE} from '../../Constant';
import message from 'antd/lib/message';
import {Function as AuthProcessorFunction} from '../../Components/AuthProcessor';

export async function sendPostLoginRequestAsync(username, password)
{
    try
    {
        const {code} = await Function.postAsync(LOGIN, {
            username,
            password,
        });
        switch (code)
        {
            case STATUS_CODE.OK:
            {
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
                message.error('用户名或密码错误');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('用户名或密码错误');
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
                message.error('未知原因的登录失败');
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

export async function sendGetVerificationCodeRequestAsync(email)
{
    try
    {
        const {code} = await Function.getAsync(GET_VERIFICATION_CODE, false, {
            email,
        });
        switch (code)
        {
            case STATUS_CODE.OK:
            {
                message.success('验证码已发送至您的邮箱');
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
                message.error('获取验证码操作被拒绝');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('获取验证码失败');
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
                message.error('未知原因的获取验证码失败');
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

export async function sendPostSignUpRequestAsync(username, password, name, age, address, email, verificationCode)
{
    try
    {
        const {code} = await Function.postAsync(SIGN_UP, {
            username,
            password,
            name,
            age: parseInt(age, 10),
            address,
            email,
            verificationCode,
        });

        switch (code)
        {
            case STATUS_CODE.OK:
            {
                message.success('注册成功');
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
                message.error('验证码错误');
                return null;
            }
            case STATUS_CODE.NOT_FOUND:
            {
                message.error('注册失败');
                return null;
            }
            case STATUS_CODE.CONFLICT:
            {
                message.error('用户名已存在');
                return null;
            }
            case STATUS_CODE.INTERNAL_SERVER_ERROR:
            {
                message.error('服务器错误');
                return null;
            }
            default:
            {
                message.error('未知原因的注册失败');
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