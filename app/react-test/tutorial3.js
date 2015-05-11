/**
 * Created by smallg on 2015/5/11.
 */
var Comment = React.createClass({
    displayName:"CommentTest",/* element name */
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {/*element text*/}
                {this.props.children}
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="smallg01">This is one comment.</Comment>
                <Comment author="smallg02">This is two comment.</Comment>
            </div>
        );
    }
});

React.render(<CommentList />, document.getElementById("content"));