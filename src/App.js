import React, {Component} from 'react';
import Iphones from "./components/Iphones"
import Androids from "./components/Androids";
import Tablets from "./components/Tablets";
import Header from "./components/Header";
import {Spring} from "react-spring/renderprops-universal";
import { HashRouter } from "react-router-dom";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: "",
            showAll: false
        };
        this.setUrl = this.setUrl.bind(this);
    }

    setUrl = url => {
        console.log("url: " + url)
        this.setState({
            url: url,
            showAll: true
        })
    };

    render() {
        return (
            <HashRouter basename='/'>
                <div className="App">
                    <Header setUrl={this.setUrl}/>
                    {this.showAll()}
                </div>
            </HashRouter>
        );
    }

    showAll = () => {
        if ( this.state.showAll ) {
            return(
                <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}>
                    {props => (
                        <div style={props} className={"middle"}>
                            <h1 className="iphone">Iphone</h1>
                            <Iphones url={this.state.url}/>
                            {this.break("Android")}
                            <Androids url={this.state.url}/>
                            {this.break("Tablet")}
                            <Tablets url={this.state.url}/>
                        </div>
                    )}
                </Spring>
            )
        }
        else{ return null }
    };

    break = header => {
        return (
            <div className={"break"}>
                <h1 className="headerH1">
                    {header}
                </h1>
            </div>
        )
    }
}
export default App;
