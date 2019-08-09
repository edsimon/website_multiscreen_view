import React, {Component} from "react"

class Simulator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            scale: (window.innerHeight*.6)/this.props.height
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        console.log(this.state.height)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            scale: (window.innerHeight*.6)/this.props.height
        });
        console.log("Height: " + this.state.height + "    scale: " + this.state.scale)
    }

    render() {
        return(
            <div className="simulationContainer"
                 style={{
                     width:  this.props.width * this.state.scale  + "px",
                     height: this.props.height * this.state.scale  + "px",
                 }}>
                <h3>{this.props.name}</h3>
                <iframe
                    style={{
                        width:  this.props.width + "px",
                        height: this.props.height + "px",
                        transform: "scale(" + this.state.scale + ")"
                    }}
                    className={"simulationScreen"}
                    src={this.props.src}/>
            </div>
        );
    }
}

export default Simulator;