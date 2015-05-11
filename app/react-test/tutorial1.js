var CommentBox = React.createClass({displayName: 'CommentBox1',
    render: function() {
        return (
            React.createElement('div', {className: "commentBox"},
                "Hello, world! I am a CommentBox."
            )
        );
    }
});
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);