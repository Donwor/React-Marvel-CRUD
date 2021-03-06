var React = require('react');

var HeroError = React.createClass({
    getDefaultProps: function(){
        return{
            title:'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function(){
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: function(){
        var {title, message} = this.props;
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>Error: {message}</p>
                <button className="button hollow" data-close="">Close</button>                
            </div>
        )
    }
});   


module.exports = HeroError;
