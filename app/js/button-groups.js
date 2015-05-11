/**
 * Created by smallg on 2015/5/11.
 */
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var buttonGroupsInstance = (
    <div>
        <ButtonToolbar>
            <ButtonGroup bsSize='large'>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
            <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
            <ButtonGroup bsSize='small'>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
            <ButtonGroup bsSize='xsmall'>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </ButtonToolbar>
    </div>
);

React.render(buttonGroupsInstance, document.getElementById("button-groups"));