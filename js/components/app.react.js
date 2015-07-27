var React = require("react");

var App = React.createClass({
    getInitialState: function() {
        return {color:'#FF0000'};
    },

    _changeColor: function() {
        this.setState({color: this._getRandomColor()});
    },

    _getRandomColor: function() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },

    render: function() {
        return (
            <div>
                <h1 onClick={this._changeColor} style={{color:this.state.color,cursor:'pointer'}}>
                    Hello react-isomorphic
                </h1>
            </div>
        );
    }
});

module.exports = App;