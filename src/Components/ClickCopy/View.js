import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

class ClickCopy extends React.Component
{
    constructor(props)
    {
        super(props);
        this.clickRef = React.createRef();
    }

    componentDidMount()
    {
        const {onCopySuccess, onCopyError} = this.props;
        const clipboard = new Clipboard(this.clickRef.current);
        clipboard.on('success', onCopySuccess);
        clipboard.on('error', onCopyError);
    }

    render()
    {
        const {className, copyText, children} = this.props;
        return (
            <div className={className} data-clipboard-text={copyText} ref={this.clickRef} onClick={e =>
            {
                e.preventDefault();
                e.stopPropagation();
                e.cancelBubble = true;
            }}>
                {children}
            </div>
        );
    }
}

ClickCopy.propTypes = {
    className: PropTypes.string,
    copyText: PropTypes.string.isRequired,
    onCopySuccess: PropTypes.func,
    onCopyError: PropTypes.func,
};

ClickCopy.defaultProps = {
    onCopySuccess: () => null,
    onCopyError: () => null,
};

export default ClickCopy;