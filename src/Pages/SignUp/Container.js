import React from 'react';
import {REGEX} from '../../Config';
import Api from '../../Api';
import SignUp from './View';
import message from 'antd/lib/message';

class SignUpContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.usernameInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.repeatPasswordInputRef = React.createRef();
        this.nameInputRef = React.createRef();
        this.ageInputRef = React.createRef();
        this.addressInputRef = React.createRef();
        this.emailInputRef = React.createRef();
        this.verificationCodeInputRef = React.createRef();

        this.state = {
            hasSendVerificationCode: false,
            timeToNextSend: 0,
            signUpHasSucceeded: false,
        };

    }

    onGetVerificationCodeButtonClick = async () =>
    {
        const {hasSendVerificationCode} = this.state;
        if (!hasSendVerificationCode)
        {
            const email = this.emailInputRef.current.input.value;
            if (!REGEX.EMAIL.test(email))
            {
                message.warning('请输入有效的邮箱');
            }
            else
            {
                const requestIsSuccessful = await Api.sendGetVerificationCodeRequestAsync(email);
                if (requestIsSuccessful)
                {
                    this.setState({
                        hasSendVerificationCode: true,
                        timeToNextSend: 30,
                    }, () =>
                    {
                        const interval = setInterval(() =>
                        {
                            const {timeToNextSend} = this.state;
                            this.setState({
                                timeToNextSend: timeToNextSend - 1,
                            });
                        }, 1000);

                        setTimeout(() =>
                        {
                            clearInterval(interval);
                            this.setState({
                                hasSendVerificationCode: false,
                            });
                        }, 30 * 1000);
                    });
                }
            }
        }
    };

    onSubmit = async e =>
    {
        e.preventDefault();
        const username = this.usernameInputRef.current.input.value;
        const password = this.passwordInputRef.current.input.value;
        const repeatPassword = this.repeatPasswordInputRef.current.input.value;
        const name = this.nameInputRef.current.input.value;
        const age = this.ageInputRef.current.input.value;
        const address = this.addressInputRef.current.input.value;
        const email = this.emailInputRef.current.input.value;
        const verificationCode = this.verificationCodeInputRef.current.input.value;

        if (!REGEX.USERNAME.test(username))
        {
            message.warning('请输入有效的用户名');
        }
        else if (!REGEX.PASSWORD.test(password))
        {
            message.warning('请输入有效的密码');
        }
        else if (password !== repeatPassword)
        {
            message.warning('两次输入密码不一致');
        }
        else if (!REGEX.NAME.test(name))
        {
            message.warning('请输入有效的姓名');
        }
        else if (!REGEX.AGE.test(age))
        {
            message.warning('请输入有效的年龄');
        }
        else if (!REGEX.ADDRESS.test(address))
        {
            message.warning('请输入有效的家庭住址');
        }
        else if (!REGEX.EMAIL.test(email))
        {
            message.warning('请输入有效的邮箱');
        }
        else if (!REGEX.VERIFICATION_CODE.test(verificationCode))
        {
            message.warning('请输入有效的验证码');
        }
        else
        {
            const requestIsSuccessful = await Api.sendPostSignUpRequestAsync(username, password, name, age, address, email, verificationCode);
            if (requestIsSuccessful)
            {
                this.setState({
                    signUpHasSucceeded: true,
                });
            }
        }
    };

    render()
    {
        const {hasSendVerificationCode, timeToNextSend, signUpHasSucceeded} = this.state;
        return <SignUp signUpHasSucceeded={signUpHasSucceeded}
                       onSubmit={this.onSubmit}
                       usernameInputRef={this.usernameInputRef}
                       passwordInputRef={this.passwordInputRef}
                       repeatPasswordInputRef={this.repeatPasswordInputRef}
                       nameInputRef={this.nameInputRef}
                       ageInputRef={this.ageInputRef}
                       addressInputRef={this.addressInputRef}
                       emailInputRef={this.emailInputRef}
                       verificationCodeInputRef={this.verificationCodeInputRef}
                       hasSendVerificationCode={hasSendVerificationCode}
                       timeToNextSend={timeToNextSend}
                       onGetVerificationCodeButtonClick={this.onGetVerificationCodeButtonClick} />;
    }
}

export default SignUpContainer;