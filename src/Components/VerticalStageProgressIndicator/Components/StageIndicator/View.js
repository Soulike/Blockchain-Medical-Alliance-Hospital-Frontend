import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import StagePoint from '../StagePoint';

class StageIndicator extends React.Component
{
    render()
    {
        const {hasReached, stageLabel} = this.props;
        return [
            <StagePoint hasReached={hasReached} key={'stagePoint'} stageLabel={stageLabel} />,
            <div className={Style.connectLineWrapper} key={'connectLineWrapper'}>
                <div className={`${Style.connectLine} ${hasReached ? Style.reached : null}`} />
            </div>,
        ];
    }
}

StageIndicator.propTypes = {
    hasReached: PropTypes.bool.isRequired,
    stageLabel: PropTypes.string,
};

export default StageIndicator;