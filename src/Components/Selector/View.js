import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {Series} from './Object';

class Selector extends React.Component
{
    render()
    {
        const {seriesArray, className} = this.props;
        return (
            <div className={`${Style.Selector} ${className}`}>
                {
                    seriesArray.map(series =>
                    {
                        const caption = series.getCaption();
                        const itemArray = series.getItemArray();
                        return (
                            <div className={Style.series} key={caption}>
                                <div className={Style.caption}>{caption}</div>
                                <div className={Style.itemWrapper}>
                                    {
                                        itemArray.map(item =>
                                        {
                                            const text = item.getText();
                                            const onClick = item.getOnClick();
                                            const isActive = item.getIsActive();
                                            return <div className={`${Style.item} ${isActive ? Style.active : null}`}
                                                        onClick={onClick}
                                                        key={text}>{text}</div>;
                                        })
                                    }
                                </div>
                            </div>);
                    })
                }
            </div>
        );
    }
}

Selector.propTypes = {
    seriesArray: PropTypes.arrayOf(PropTypes.instanceOf(Series)).isRequired,
    className: PropTypes.string,
};

export default Selector;