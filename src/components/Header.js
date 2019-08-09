import React, {Component} from "react";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            url: this.state.value
        });
        this.props.setUrl(this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <div className="header">
                <h1 className="headerH1">
                    Screen Resolution Tester
                </h1>
                <p className="headerInfo">
                    Put your websites address in the textbox below and you can observe and test your project
                </p>
                <form onSubmit={this.handleSubmit} className={"form"}>
                    <label>
                        URL:
                        <input className={"inputbox"} type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Go!" />
                </form>
            </div>
        );
    }
}
export default Header;