import React, {Component} from "react"
import Simulator from "./Simulator";

class Tablets extends Component{
    constructor(props) {
        super(props);
        this.state = {
            marginLeft: 0
        }
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
                <button className={"leftButton navigation"}
                        onClick={this.goLeft}>&#8592;</button>
                <button className={"rightButton navigation"}
                        onClick={this.goRight}>&#8594;	</button>
                <Simulator
                    windowH={this.props.windowH}
                    name={"IPad Pro"}
                    width={1024}
                    height={1366}
                    src={this.props.url}/>
                <Simulator
                    name={"IPad 4/5th Mini"}
                    width={768}
                    height={1024}
                    src={this.props.url}/>
                <Simulator
                    name={"Nexus 9"}
                    width={768}
                    height={1024}
                    src={this.props.url}/>
                <Simulator
                    name={"Nexus 7"}
                    width={600}
                    height={960}
                    src={this.props.url}/>
                <Simulator
                    name={"Galaxy Tab 10"}
                    width={800}
                    height={1280}
                    src={this.props.url}/>
            </div>
        );
    }
}
export default Tablets;