var MyForm = React.createClass({
    getInitialState: function () {
        return {username: 'admin', pwd: 'admin'};
    },
    handleChange: function (event) {
        this.setState({value: event.target.value});
        console.log(this.state);
    },
    handleSave: function (e) {
        e.preventDefault();
        var username = this.refs.username.getDOMNode().value;
        var pwd = this.refs.pwd.getDOMNode().value;
        console.log(username);
        $.ajax({
            url: "http://localhost:8080/test-api/login",
            type: "POST",
            data: {
                username: username,
                pwd: pwd
            }
        });
    },
    render: function () {
        var username = this.state.username;
        var pwd = this.state.pwd;
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label>Name</label>
                    <input ref="username" type="text" className="form-control" value={username}
                           onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input ref="pwd" type="password" className="form-control" value={pwd}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
                </div>
            </form>
        );
    }
});

React.render(<MyForm />, document.getElementById("myForm"));