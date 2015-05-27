/**
 * Created by smallg on 2015/5/27.
 */
var TableList = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        var data = this.props.data.map(function(d, i){
            return (
                <tr data-key={i}>
                    <td>{d.alias}</td>
                    <td>{d.serialNumber}</td>
                    <td>{d.uziNumber}</td>
                    <td>{d.uziMemberShipNumber}</td>
                    <td>{d.validFrom}</td>
                    <td>{d.validTo}</td>
                    <td>{d.subject}</td>
                    <td>{d.thumbprint}</td>
                    <td>{d.issuer}</td>
                    <td>{d.usable}</td>
                </tr>
            );
        });

        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Alias</th>
                    <th>SerialNumber</th>
                    <th>UziNumber</th>
                    <th>UziMemberShipNumber</th>
                    <th>ValidFrom</th>
                    <th>ValidTo</th>
                    <th>Subject</th>
                    <th>Thumbprint</th>
                    <th>Issuer</th>
                    <th>Usable</th>
                </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        );
    }
});
$.ajax({
    url: "http://localhost:8080/test-api/certificate/all",
    type: "GET"
}).done(function (data) {
    console.log(data);
    React.render(<TableList data={data} />, document.getElementById("my-table"));
});
