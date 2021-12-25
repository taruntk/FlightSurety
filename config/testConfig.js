
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x0B5Db845a6917284b996218d9D67d683b87ec272",
        "0xD2758DB99b967ce5E337e5EEC3698a0b7C1294F1",
        "0x4383Aa2A198293348cF763e31984E33FDC98Bd6c",
        "0xe45bC36a88A198aE97d8013515eAfd82F7640c10",
        "0xb6af7a8A6Dc56128E3d2DdF7a95679d5877c58cd",
        "0x7C4DD6c1cc4134843F822DcE8F266c27B1efd939",
        "0xD3D7a845b324da3bF21887b67d32E98D54b67eb6",
        "0x49D23f15FB06F4e5C208B11BDb61Ee8E4E66AC04",
        "0x124aE7bd0121dA865E023368e3Cd9ed8FE7aF9EB"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new(firstAirline);
    let flightSuretyApp = await FlightSuretyApp.new(FlightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};