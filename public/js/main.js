import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/configueStore";
import Conversion from './Container/Conversion.js';
import { Provider } from "react-redux";


class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <Conversion />
            </div>
        )
    }
}


ReactDOM.render(<Provider store={store}><MainComponent /></Provider>, document.getElementById('container'));
