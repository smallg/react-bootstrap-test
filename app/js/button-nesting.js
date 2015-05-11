/**
 * Created by smallg on 2015/5/11.
 */
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var buttonGroupInstance = (
    <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <DropdownButton title='Dropdown'>
            <MenuItem eventKey='1'>Dropdown link</MenuItem>
            <MenuItem eventKey='2'>Dropdown link</MenuItem>
        </DropdownButton>
    </ButtonGroup>
);
React.render(buttonGroupInstance, document.getElementById("button-nesting"));