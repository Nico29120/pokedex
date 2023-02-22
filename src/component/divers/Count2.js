import { Component } from "react";

export default class Count2 extends Component{

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
        this.max = 20;
        this.step = 1 ;
        this.interval = null;
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    };

    start(){
        clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + this.step })
        }, 1000);
        
        if( this.state.count >= this.max ) this.stop();
    };

    stop(){
        clearInterval(this.interval);
    };

    reset(){
        this.stop();
        this.setState({ count: 0 });
    };

    
    render(){
        return(
            <div>
                <button onClick={this.start}>
                    Start +1
                </button>

                <button onClick={this.stop}>
                    Stop 
                </button>

                { (this.state.count > 0) ? 
                    <button onClick={this.reset}>
                        reset
                    </button>
                    :
                    <></>
                }
                <p>{this.state.count}</p>
            </div>
        )
    }
}

