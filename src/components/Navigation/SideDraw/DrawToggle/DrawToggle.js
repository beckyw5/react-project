import React from 'react';
import classes from './DrawToggle.css';

const drawToggle = (props) => (
    <div className={classes.drawToggle} onClick={props.clicked}>
        <div/>
        <div/>
        <div/>
    </div>
);

export default drawToggle;