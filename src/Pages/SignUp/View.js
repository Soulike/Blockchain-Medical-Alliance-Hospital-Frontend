import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import AccountPageCard from '../../Components/AccountPageCard';
import {browserHistory, Link} from 'react-router';
import {NOT_REQUIRE_LOGIN_PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Config/ROUTE';
import {REGEX_TEXT} from '../../Config';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

function SignUp(props)
{
    const {
        signUpHasSucceeded,
        onSubmit,
        usernameInputRef,
        passwordInputRef,
        repeatPasswordInputRef,
        nameInputRef,
        ageInputRef,
        addressInputRef,
        emailInputRef,
        verificationCodeInputRef,
        hasSendVerificationCode,
        timeToNextSend,
        onGetVerificationCodeButtonClick,
    } = props;
    return (
        <AccountPageCard>
            <div className={Style.SignUp}>
                {signUpHasSucceeded ?
                    <div className={Style.signUpSuccessPart}>
                        <div className={Style.title}>注册成功</div>
                        <div className={Style.buttonWrapper}>
                            <Button htmlType={'button'} className={Style.toLoginButton} onClick={() =>
                            {
                                browserHistory.push(PAGE_ID_TO_ROUTE[NOT_REQUIRE_LOGIN_PAGE_ID.HOSPITAL_LOGIN]);
                            }
                            }>去登录
                            </Button>
                        </div>
                    </div> :
                    <div className={Style.signUpPart}>
                        <div className={Style.title}>注册</div>
                        <form className={Style.signUpForm} onSubmit={onSubmit}>
                            <div className={Style.inputWrapper}>
                                <Input className={Style.input}
                                       type="text"
                                       placeholder={`用户名 (${REGEX_TEXT.USERNAME})`}
                                       autoFocus={true}
                                       ref={usernameInputRef} />
                                <Input className={Style.input}
                                       type="password"
                                       placeholder={`密码 (${REGEX_TEXT.PASSWORD})`}
                                       ref={passwordInputRef} />
                                <Input className={Style.input}
                                       type="password"
                                       placeholder={'确认密码'}
                                       ref={repeatPasswordInputRef} />
                                <Input className={Style.input} type="text" placeholder={'姓名'} ref={nameInputRef} />
                                <Input className={Style.input} type="number" placeholder={'年龄'} ref={ageInputRef} />
                                <Input className={Style.input} type="text" placeholder={'家庭住址'} ref={addressInputRef} />
                                <Input className={Style.input}
                                       type="email"
                                       placeholder={'邮箱 (接收验证码的邮箱)'}
                                       ref={emailInputRef} />
                                <Input type="text"
                                       placeholder={'验证码'}
                                       className={Style.input}
                                       ref={verificationCodeInputRef}
                                       addonAfter={
                                           <span className={Style.verificationCodeInputLabel}
                                                 onClick={onGetVerificationCodeButtonClick}>
                                                    {
                                                        hasSendVerificationCode ? timeToNextSend : '发送'
                                                    }
                                               </span>
                                       } />
                            </div>
                            <div className={Style.linkWrapper}>
                                <Link onlyActiveOnIndex={false}
                                      to={PAGE_ID_TO_ROUTE[NOT_REQUIRE_LOGIN_PAGE_ID.HOSPITAL_LOGIN]}>已有帐号？</Link>
                            </div>
                            <div className={Style.buttonWrapper}>
                                <Button htmlType={'button'}
                                        className={Style.submitButton}
                                        onClick={onSubmit}>确认</Button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </AccountPageCard>
    );
}

SignUp.propTypes = {
    signUpHasSucceeded: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    usernameInputRef: PropTypes.object.isRequired,
    passwordInputRef: PropTypes.object.isRequired,
    repeatPasswordInputRef: PropTypes.object.isRequired,
    nameInputRef: PropTypes.object.isRequired,
    ageInputRef: PropTypes.object.isRequired,
    addressInputRef: PropTypes.object.isRequired,
    emailInputRef: PropTypes.object.isRequired,
    verificationCodeInputRef: PropTypes.object.isRequired,
    hasSendVerificationCode: PropTypes.bool.isRequired,
    timeToNextSend: PropTypes.number.isRequired,
    onGetVerificationCodeButtonClick: PropTypes.func.isRequired,
};

export default SignUp;