/**
 * Created by smallg on 2015/5/11.
 */
//block buttons
var wellStyle = {maxWidth: 400, margin: '0 auto 10px'};
var buttonsInstance2 = (
    <div className='well' style={wellStyle}>
        <Button bsStyle='primary' bsSize="large" block>Block level button</Button>
        <Button bsSize="large" block>Block level button</Button>
    </div>
);
React.render(buttonsInstance2, document.getElementById("block-button"));