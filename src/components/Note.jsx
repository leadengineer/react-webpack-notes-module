/**KYIV MEDIA 02.12.2019 */
var React = require('react');
var createReactClass = require('create-react-class');

require('./Note.css');

var Note = createReactClass({
    render: function() {
        var style = { backgroundColor: 'this.props.color' };

        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Note;
