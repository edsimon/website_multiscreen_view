import React, {Component} from "react"
import Simulator from "./Simulator";

class Iphones extends Component{
    constructor(props) {
        super(props);
        this.state = {
            marginLeft: 0,
            x: 0,
            y: 0
        }
        console.log(this.state.url)
    }

    goLeft = () => {
        console.log(this.props.windowH);
        this.setState({
            marginLeft: this.state.marginLeft + 50
        })
    }
    goRight= () => {
        this.setState({
            marginLeft: this.state.marginLeft-50
        })
    }

    render() {
        return(
            <div className="simulationContent" style={{marginLeft: this.state.marginLeft}}>
                <Simulator
                    windowH={this.props.windowH}
                    name={"Iphone 5"}
                    width={320}
                    height={568}
                    src={this.props.url}/>
                <Simulator
                    name={"Iphone 6/7/8"}
                    width={375}
                    height={667}
                    src={this.props.url}/>
                <Simulator
                    name={"Iphone 6/7/8 Plus"}
                    width={414}
                    height={736}
                    src={this.props.url}/>
                <Simulator
                    name={"Iphone X/XS"}
                    width={375}
                    height={812}
                    src={this.props.url}/>
                <Simulator
                    name={"Iphone XR/XS Max"}
                    width={414}
                    height={896}
                    src={this.props.url}/>
                <button className={"leftButton navigation"}
                        onClick={this.goLeft}>&#8592;</button>
                <button className={"rightButton navigation"}
                        onClick={this.goRight}>&#8594;	</button>
            </div>
        );
    }
}
export default Iphones;