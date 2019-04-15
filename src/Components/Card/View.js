import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';

class Card extends React.Component
{
    render()
    {
        const {children, className} = this.props;
        return (
            <div className={`${Style.Card} ${className}`}>
                {children}
            </div>
        );
    }
}

Card.propTypes = {
    className: PropTypes.string,
};

export default Card;