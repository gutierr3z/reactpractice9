import React from 'react';
import ReactDom from 'react-dom';
//--------------------------------------------------

//==================================================
class Comp2 extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }
    
    render() {
        return (
            <div className = "comp2">
                Comp2
            </div>
        );
    }
};
//==================================================
export default Comp2;