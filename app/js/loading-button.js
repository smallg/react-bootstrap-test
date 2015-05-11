/**
 * Created by smallg on 2015/5/11.
 */
//loading buttons
var LoadingButton = React.createClass({
        getInitialState: function () {
            return {
                isLoading: false
            }
        },
        render: function () {
            var isLoading = this.state.isLoading;
            return (
                <Button bsStyle="primary" disabled={isLoading} onClick={!isLoading?this.handleClick:null}>
        {isLoading ? 'Loading...' : 'Loading state'}
        </Button>
);
},
handleClick: function(){
    this.setState({isLoading: true});
    (function(_this){
        setTimeout(function(){
            _this.setState({isLoading: false});
        }, 2000);
    })(this);
}
});
React.render(<LoadingButton />, document.getElementById("loading-button"));