import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementAction, decrementAction } from "./../actions/index";

class Counter extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { total, incrementAction, decrementAction } = this.props;
        return(

            <div>
                <div>
                    <button type="button" onClick={() => decrementAction(total)}>-</button>
                    <h5>{total}</h5>
                    <button type="button" onClick={() => incrementAction(total)}>+</button>
                </div>
            </div>
        );
    }
}
        //sem action, com função direto no click
        {/* <div>
            <div>
                <button type="button" onClick={() => this.props.dispatch({type: "DECREMENT"})}>-</button>
                <h5>{total}</h5>
                <button type="button" onClick={() => this.props.dispatch({type: "INCREMENT"})}>+</button>
            </div>
        </div> */}

const mapStateToProps = ({ counterReducer: { total } }) => {
    console.log(total)
    return{
        total
        //total: state.total
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ incrementAction, decrementAction }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Counter);