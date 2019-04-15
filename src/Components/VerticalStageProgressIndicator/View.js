import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import StageIndicator from './Components/StageIndicator';
import StagePoint from './Components/StagePoint';

class VerticalStageProgressIndicator extends React.Component
{
    render()
    {
        let {currentStageNumber, maxStageNumber, stageLabelArray} = this.props;
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
                                nodeArray.push(<StageIndicator hasReached={true} stageLabel={stageLabelArray[i]} />);
                            }
                            nodeArray.push(<StagePoint hasReached={true}
                                                       stageLabel={stageLabelArray[maxStageNumber]} />);
                        }
                        else
                        {
                            for (let i = 0; i <= currentStageNumber; i++)
                            {
                                nodeArray.push(<StageIndicator hasReached={true} stageLabel={stageLabelArray[i]} />);
                            }
                            for (let i = currentStageNumber + 1; i <= maxStageNumber - 1; i++)
                            {
                                nodeArray.push(<StageIndicator hasReached={false} stageLabel={stageLabelArray[i]} />);
                            }
                            nodeArray.push(<StagePoint hasReached={false}
                                                       stageLabel={stageLabelArray[maxStageNumber]} />);
                        }
                        return nodeArray;
                    })()
                }
            </div>
        );
    }
}

VerticalStageProgressIndicator.propTypes = {
    currentStageNumber: PropTypes.number.isRequired,        // 从 0 开始数，当前状态的编号
    maxStageNumber: PropTypes.number.isRequired,            // 从 0 开始数，最后状态的编号
    stageLabelArray: PropTypes.arrayOf(PropTypes.string),   // 数组，存放每个状态对应的文字
};

VerticalStageProgressIndicator.defaultProps = {
    stageLabelArray: [],
};

export default VerticalStageProgressIndicator;