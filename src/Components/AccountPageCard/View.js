import React from 'react';
import Style from './Style.module.scss';
import Card from '../Card';
import '../../Static/Account/background.png';
import '../../Static/Account/sideImage.png';

class AccountPageCard extends React.Component
{
    render()
    {
        const {children} = this.props;
        return (
            <div className={Style.AccountPageCard}>
                <div className={Style.background} />
                <Card className={Style.contentWrapper}>
                    <div className={Style.imageWrapper}>
                        <div className={Style.image} />
                    </div>
                    <div className={Style.childrenWrapper}>
                        {children}
                    </div>
                </Card>
            </div>
        );
    }
}

export default AccountPageCard;