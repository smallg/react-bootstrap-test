/**
 * Created by smallg on 2015/5/11.
 */
var data = [
    {author: "smallg1", text: "text1"},
    {author: "smallg2", text: "text2"},
];
var CommentForm = React.createClass({
    render: function() {
        return (
            <form className="commentForm">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Say something..." />
                <input type="submit" value="Post" />
            </form>
        );
    }
});
var CommentBox = React.createClass({
    getInitialState: function(){
        return {data: []};
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
})

React.render(<CommentBox data={data}/>, document.getElementById("content"));