var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (request, response, next) {
    console.log(request.url);

    if (request.get('Origin')) {
        response.set(
            {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
                'Access-Control-Allow-Headers': 'accept, origin, content-type',
                'Access-Control-Max-Age': 3600
            }
        );
    }
    if (request.method == 'OPTIONS') {
        response.send(200);
    } else {
        next();
    }
});

app.post('/system-console-api/j_spring_security_check', function (request, response) {
    if (request.body.j_username == 'admin' && request.body.j_password == 'admin') {
        response.send(200);
    } else {
        response.send(400);
    }
});

app.get('/system-console-api/certificate/all', function (request, response) {
    var result = [
        {alias: "uzi900010079", serialNumber: "bb1d2b740b2e9ad0fdc0a7daea14bc49", uziNumber: "900010079", uziMemberShipNumber: "90000380", validFrom: "2013/12/11 13:00:00", validTo: "2016/12/11 13:00:00", subject: "SERIALNUMBER=900010079, CN=demo236.demo.enovation.net, O=T¨¦st Zorginstelling 01, C=NL, ST=Zuid-Holland, L=Den Haag", thumbprint: "559c26d571664cef729915e621d58aac0254fc6a", issuer: "CN=TEST UZI-register Server CA G21, O=agentschap Centraal Informatiepunt Beroepen Gezondheidszorg, C=NL", usable: true, certificateSigningCompleted: true,serialNumberAsDecimalString:"248717093158217263706113692249630227529",keyPassword:"pw1370418739067"},
        {alias: "uzi900010213", serialNumber: "bb1d2b740b2e9ad0fdc0a7daea14bc49", uziNumber: "900010213", uziMemberShipNumber: "90000380", validFrom: "2013/1/11 17:00:00", validTo: "2017/12/11 13:00:00", subject: "SERIALNUMBER=900010079, CN=demo236.demo.enovation.net, O=T¨¦st Zorginstelling 01, C=NL, ST=Zuid-Holland, L=Den Haag", thumbprint: "559c26d571664cef729915e621d58aac0254fc6a", issuer: "CN=TEST UZI-register Server CA G21, O=agentschap Centraal Informatiepunt Beroepen Gezondheidszorg, C=NL", usable: false, certificateSigningCompleted: true,serialNumberAsDecimalString:"248717093158217263706113692249630227529",keyPassword:"pw1370418739067"},
        {alias: "uzi900010101", serialNumber: "bb1d2b740b2e9ad0fdc0a7daea14bc49", uziNumber: "900010101", uziMemberShipNumber: "90000380", validFrom: "2013/2/11 19:00:00", validTo: "2018/12/11 13:00:00", subject: "SERIALNUMBER=900010079, CN=demo236.demo.enovation.net, O=T¨¦st Zorginstelling 01, C=NL, ST=Zuid-Holland, L=Den Haag", thumbprint: "559c26d571664cef729915e621d58aac0254fc6a", issuer: "CN=TEST UZI-register Server CA G21, O=agentschap Centraal Informatiepunt Beroepen Gezondheidszorg, C=NL", usable: true, certificateSigningCompleted: false,serialNumberAsDecimalString:"248717093158217263706113692249630227529",keyPassword:"pw1370418739067"}
    ];
    response.json(200, result);
});

server.listen(8080);
console.log('listening on port 8080');
