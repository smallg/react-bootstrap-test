var MyForm = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
        console.log(this.state);
    },
    handleSave: function(e) {
        e.preventDefault();
        var val = this.refs.name.getDOMNode().value;
        console.log(val)
    },
    render: function () {
        var value = this.state.value;
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label>Name</label>
                    <input ref="name" type="text" className="form-control" value={value} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
                </div>
            </form>
        );
    }
});

React.render(<MyForm />, document.getElementById("myForm"));