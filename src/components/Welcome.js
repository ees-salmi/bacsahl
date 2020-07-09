import React , {Component} from 'react'
import alberto from '../shared/images/alberto.png'
import {DISHES} from '../shared/dishes.js';
class Welcome extends Component {

    render(){

        return(
        <div>

            <h1>hello this is from the class welcoming !</h1>
            <img src={alberto} alt="essalmi" />
            <img src={DISHES[3].image} alt={DISHES[3].name} />
        </div>
        );
    }

}

export default Welcome