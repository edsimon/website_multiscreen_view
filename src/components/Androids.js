import React, {Component} from "react"
import Simulator from "./Simulator";

class Androids extends Component{
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
                    name={"Google pixel/pixel XL"}
                    width={412}
                    height={732}
                    src={this.props.url}/>
                <Simulator
                    name={"Google 3"}
                    width={412}
                    height={824}
                    src={this.props.url}/>
                <Simulator
                    name={"Google 3 XL"}
                    width={412}
                    height={847}
                    src={this.props.url}/>
                <Simulator
                    name={"Galaxy S7"}
                    width={360}
                    height={640}
                    src={this.props.url}/>
                <Simulator
                    name={"Galaxy Note 5"}
                    width={480}
                    height={853}
                    src={this.props.url}/>
                <Simulator
                    name={"Galaxy Note 9"}
                    width={360}
                    height={853}
                    src={this.props.url}/>
                <Simulator
                    name={"Galaxy S8-S9+"}
                    width={360}
                    height={740}
                    src={this.props.url}/>
                <Simulator
                    name={"One Plus 3"}
                    width={480}
                    height={853}
                    src={this.props.url}/>
            </div>
        );
    }
}
export default Androids;