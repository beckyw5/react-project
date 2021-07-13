import React from 'react';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div className={classes.row}>
            <div>Menu</div>
            <div>Logo</div>
            <nav>
                ...
            </nav>
        </div>
    </header>
);

export default toolbar;