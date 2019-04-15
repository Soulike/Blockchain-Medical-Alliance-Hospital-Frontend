import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';

class StagePoint extends React.Component
{
    render()
    {
        const {hasReached, stageLabel} = this.props;
        return (
            <div className={Style.StagePoint}>
                <div className={`${Style.point} ${hasReached ? Style.reached : null}`} />
                {
                    stageLabel ? <div className={Style.label}>{stageLabel}</div> : null
                }
            </div>
        );
    }
}

StagePoint.propTypes = {
    hasReached: PropTypes.bool.isRequired,
    stageLabel: PropTypes.string,
};

export default StagePoint;