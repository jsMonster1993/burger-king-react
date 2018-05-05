import React from 'react';

import  Classes from './BuildControl.css';

const buildControl = (props) =>(
    <div className={Classes.BuildControl}>
        <div className={Classes.Label}>{props.label}</div>
        <button onClick={props.removed} className={Classes.Less}>Less</button>
        <button onClick={props.added} className={Classes.More}>more</button>
    </div>
);

export default buildControl;