import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.buildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.buttonLess}>Less</button>
        <button className={classes.buttonMore}>More</button>
    </div>
);

export default buildControl;