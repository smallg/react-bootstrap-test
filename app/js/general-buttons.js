/**
 * Created by smallg on 2015/5/11.
 */
//general buttons
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var buttonsInstance = (
    <ButtonToolbar>
        <Button>Default</Button>

        <Button bsStyle='primary'>Primary</Button>

        <Button bsStyle='success'>Success</Button>

        <Button bsStyle='info' disabled>Info</Button>

        <Button bsStyle='warning'>Warning</Button>

        <Button bsStyle='danger' active>Danger</Button>

        <Button bsStyle='link'>Link</Button>
    </ButtonToolbar>
);
React.render(buttonsInstance, document.getElementById("button"));