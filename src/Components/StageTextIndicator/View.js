import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';

class StageTextIndicator extends React.Component
{
    render()
    {
        const {currentStageNumber, stageTextArray} = this.props;
        return (
            <div className={Style.StageTextIndicator}>
                {
                    stageTextArray.map((stageText, i) =>
                        <span className={i === currentStageNumber ? Style.active : null} key={i}>{stageText}</span>)
                }
            </div>
        );
    }
}

StageTextIndicator.propTypes = {
    currentStageNumber: PropTypes.number.isRequired,        // 从 0 开始数，当前状态的编号
    stageTextArray: PropTypes.arrayOf(PropTypes.string).isRequired, // 所有状态的名称数组，和编号对应
};

StageTextIndicator.defaultProps = {
    currentStageNumber: 0,
    stageTextArray: [],
};

export default StageTextIndicator;