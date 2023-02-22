import { Component } from "react";
import { startTransition, useState } from "react";

export default class Count extends Component{
    SECOND = 1000;
    MAX_COUNTER = 20;

    constructor(props){
        super(props);
        this.state = {
            count : 0,
            active : false
        }

        this.interval = null;

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    start(){
        clearInterval(this.interval);

        this.setState({active : true});

        const step = this.props.step ? this.props.step : 1 ;

        this.interval = setInterval(() => {
            this.setState({ count : this.state.count + step });
        }, this.SECOND);
    }

    stop(){
        clearInterval(this.interval);
        this.setState({active : false});
    }

    reset(){
       this.stop();
       this.setState({ count : 0 });
    }

    componentDidUpdate(prevProps, prevStates){
        if( this.state.count >= this.MAX_COUNTER && this.state.active !== false ) this.stop();
    }

    calculBinary(count){

        return parseInt(count, 10).toString(2);
    }

    render(){
        const { count, active } = this.state;
        const { step, binary } = this.props;

        return(
            <div className="app__counter">
                <button 
                    className="btn btn-primary "
                    onClick={this.start}
                    disabled={active}
                >
                    { binary ? 'binary' : `Start +1` }
                </button>

                <button 
                    className="btn btn-primary "
                    onClick={this.stop}
                    disabled={!active}
                >
                    Stop 
                </button>
                { count > 0 && (
                    <button 
                        className="btn btn-primary "
                        onClick={this.reset}
                    >
                        reset
                    </button>
                )}
                { binary ? ( <p className="">{this.calculBinary(count)}</p> ) : (  <p className="">{count}</p> ) }
            </div>
        )
    }
}
