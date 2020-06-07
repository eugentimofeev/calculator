import React from 'react';

const TabPanel = (props) => {

    const {index, value, children} = props;

    return (
        <div
            hidden={value !== index}
        >
            {children}
        </div>
    )
}

export default TabPanel;