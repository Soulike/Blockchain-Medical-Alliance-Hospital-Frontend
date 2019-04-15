import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';

class StagePoint extends React.Component
{
    render()
    {
        const {hasReached} = this.props;
        return (
            <div className={Style.StagePoint}>
                <div className={`${Style.point} ${hasReached ? Style.reached : null}`} />
            </div>
        );
    }
}

StagePoint.propTypes = {
    hasReached: PropTypes.bool.isRequired,
};

export default StagePoint;