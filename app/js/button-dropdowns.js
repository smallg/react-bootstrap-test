/**
 * Created by smallg on 2015/5/11.
 */
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];
var SplitButton = ReactBootstrap.SplitButton;
function renderDropdownButton (title, i) {
    return (
        <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i}>
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Another action</MenuItem>
            <MenuItem eventKey='3'>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4'>Separated link</MenuItem>
        </DropdownButton>
    );
}
function renderSplitDropdownButton (title, i){
    return (
        <SplitButton bsStyle={title.toLowerCase()} title={title} key={i}>
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Another action</MenuItem>
            <MenuItem eventKey='3'>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4'>Separated link</MenuItem>
        </SplitButton>
    );
}
var buttonsInstance = (
    <div>
        <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
        <p></p>
        <ButtonToolbar>{BUTTONS.map(renderSplitDropdownButton)}</ButtonToolbar>
    </div>
);
React.render(buttonsInstance, document.getElementById("button-dropdowns"));