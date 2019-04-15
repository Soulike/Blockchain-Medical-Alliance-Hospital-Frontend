import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import StageIndicator from './Components/StageIndicator';
import StagePoint from './Components/StagePoint';

class HorizontalStageProgressIndicator extends React.Component
{
    render()
    {
        let {currentStageNumber, maxStageNumber} = this.props;
        if (maxStageNumber < currentStageNumber)
        {
            maxStageNumber = currentStageNumber;
        }
        return (
            <div className={Style.VerticalStageProgressIndicator}>
                {
                    (() =>
                    {
                        const nodeArray = [];
                        if (currentStageNumber === maxStageNumber)
                        {
                            for (let i = 0; i <= maxStageNumber - 1; i++)
                            {
                                nodeArray.push(<StageIndicator hasReached={true} key={i} />);
                            }
                            nodeArray.push(<StagePoint hasReached={true} key={maxStageNumber} />);
                        }
                        else
                        {
                            for (let i = 0; i <= currentStageNumber; i++)
                            {
                                nodeArray.push(<StageIndicator hasReached={true} key={i} />);
                            }
                            for (let i = currentStageNumber + 1; i <= maxStageNumber - 1; i++)
                            {
                                nodeArray.push(<StageIndicator hasReached={false} key={i} />);
                            }
                            nodeArray.push(<StagePoint hasReached={false} key={maxStageNumber} />);
                        }
                        return nodeArray;
                    })()
                }
            </div>
        );
    }
}

HorizontalStageProgressIndicator.propTypes = {
    currentStageNumber: PropTypes.number.isRequired,        // 从 0 开始数，当前状态的编号
    maxStageNumber: PropTypes.number.isRequired,            // 从 0 开始数，最后状态的编号
};

HorizontalStageProgressIndicator.defaultProps = {
    currentStageNumber: 0,
    maxStageNumber: 0,
};

export default HorizontalStageProgressIndicator;