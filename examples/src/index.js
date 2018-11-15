import React from 'react';
import { render} from 'react-dom';
import DashboardNotifications from '../../src';

function getValues(values) {
    console.log(values);
}

const App = () => (
    <DashboardNotifications
    />
);
render(<App />, document.getElementById("root"));