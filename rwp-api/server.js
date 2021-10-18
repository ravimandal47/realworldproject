const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Web3 = require('web3');
const ScanItContract = require('./build/contracts/Scanit.json');
var QRCode = require('qrcode')
const secret_id = process.env.secret || "realworldproject";

const saltRounds = 10;
// IP and port
const IP = '127.0.0.1';
const port = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const connection = mysql.createConnection({
    host: IP,
    user: process.env.database_user || 'root',
    password: process.env.database_password || 'scanit@123-dev',
    database: 'scanit-db'
});

// const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// console.log(`Talking with a geth server ${web3.version.api} \n`);

// const address = '0x5d3ba8b58f8402fe667e43d9040aa6679cb6972d';

// const contractObj = web3.eth.contract(ScanItContract.abi);

// const contractInstance = contractObj.at(address);
//web3.eth.defaultAccount = web3.eth.coinbase;



connection.connect(function(err) {
    if (!err) {
        console.log('Connected to MySql!\n');
    } else {
        console.log('Not connected to MySql.\n');
        console.log(err);
    }
});

function generateQRCode() {
    return crypto.randomBytes(20).toString('hex');
}

// Hash password using bcrypt
function hashBcrypt(password) {
    return bcrypt.hashSync(password, saltRounds);
}

// Hash email using md5
function hashMD5(email) {
    return crypto.createHash('md5').update(email).digest('hex');
}


// Server start
app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}...\n`);
});

app.post('/signUp', (req, res) => {
    console.log('Request to /signUp\n');
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone;
    let hashedPassword = hashBcrypt(password);
    console.log(`Email: ${email} \n`);
    // Adding the user in MySQL
    connection.query('SELECT * FROM USER WHERE Email = ? LIMIT 1', [email], (error, results) => {
        if (error) {
            callback(error);
            return res.status(400);
        }
        if (results.length) {
            return res.status(400).send('Email already exists!');
        }
        connection.query('INSERT INTO USER (`Name`, `Email`, `Password`, `Phone`) VALUES (?,?,?,?)', [name, email, hashedPassword, phone], (error, results) => {
            if (error) {
                callback(error);
                return res.status(400);
            }
            res.status(200).send('Signup successful!');
            // Adding user to the Blockchain
            hashedEmail = hashMD5(email);
            return;
            let ok = createCustomer(hashedEmail, name, phone);
            if (ok) {
                console.log(`User ${hashedEmail} successfully added to Blockchain!\n`);
            } else {
                console.log('ERROR! User could not be added to Blockchain.\n');
            }
        });
    });
});

// Add the user in Blockchain
function createCustomer(hashedEmail, name, phone) {
    return contractInstance.createCustomer(hashedEmail, name, phone, { from: web3.eth.accounts[0], gas: 3000000 });
}



/**
 * Description: Login the user to the app
 * Request:     POST /login
 * Send:        JSON object which contains email, password
 * Receive:     200 if successful, 400 otherwise
 */
app.post('/login', (req, res) => {
    console.log('Request to /login\n');
    let email = req.body.email;
    let password = req.body.password;
    console.log(`Email: ${email} \n`);
    connection.query('SELECT * FROM USER WHERE Email = ? LIMIT 1', [email], (error, results) => {
        if (error) {
            callback(error);
            return res.status(400);
        }
        if (results.length) {
            connection.query('SELECT Password FROM USER WHERE Email = (?)', [email], (error, results) => {
                if (error) {
                    callback(error);
                    return res.status(400);
                }
                let pass = results[0].Password;
                if (bcrypt.compareSync(password, pass)) {
                    console.log(`Login successful with ${email} \n`);
                    return res.status(200).send('Login successful!');
                }
                return res.status(400).send('Login failed.');
            });
        }
        else {
            console.log('Email does not exist!\n');
            return res.status(400).send('Email does not exist!');
        }
    });
});


/**
 * Description: Adds a retailer to the database and to the blockchain
 * Request:     POST /retailerSignUp
 * Send:        JSON object which contains name, email, password, location
 * Receive:     200 if successful, 400 otherwise
 */
app.post('/retailerSignup', (req, res) => {
    console.log('Request to /retailerSignup\n');
    let retailerEmail = req.body.email;
    let retailerName = req.body.name;
    let retailerLocation = req.body.location;
    let retailerPassword = req.body.password;
    let retailerHashedPassword = hashBcrypt(retailerPassword);
    let retailerHashedEmail = hashMD5(retailerEmail);
    console.log(`retailerEmail: ${retailerEmail}, hashedEmail: ${retailerHashedEmail} \n`);
    // Adding the retailer in MySQL
    connection.query('SELECT * FROM RETAILER WHERE retailerEmail = ? LIMIT 1', [retailerEmail], (error, results) => {
        if (error) {
            callback(error);
            return res.status(400).send('Some SQL Error');
        }
        if (results.length) {
            return res.status(400).send('Email already exists!');
        }
        connection.query('INSERT INTO RETAILER (`retailerName`, `retailerEmail`, `retailerLocation`, `retailerHashedPassword`) VALUES (?,?,?,?)', [retailerName, retailerEmail, retailerLocation,
                                                                    retailerHashedPassword], (error, results) => {
            if (error) {
                callback(error);
                return res.status(400).send('Some SQL Error');
            }

            return;
            // Adding retailer to Blockchain
            let ok = createRetailer(retailerHashedEmail, retailerName, retailerLocation);
            if (ok) {
                console.log(`Retailer ${retailerHashedEmail} successfully added to Blockchain!\n`);
                return res.status(200).send('Retailer successfully added');
            }
            console.log('ERROR! Retailer could not be added to Blockchain.\n');
            return res.status(400).send('Adding Retailer Unsuccessful');
        });
    });
});

function createRetailer(retailerHashedEmail, retailerName, retailerLocation) {
    return contractInstance.createRetailer(retailerHashedEmail, retailerName, retailerLocation,
                                        { from: web3.eth.accounts[0], gas: 3000000 });
}


app.post('/retailerLogin', (req, res) => {
    console.log('Request to /retailerLogin\n');
    let retailerEmail = req.body.email;
    let retailerPassword = req.body.password;
    console.log(`Email: ${retailerEmail} \n`);
    connection.query('SELECT retailerHashedPassword FROM RETAILER WHERE retailerEmail = ?', [retailerEmail], (error, results) => {
        if (error) {
            callback(error);
            return res.status(400);
        }
        let pass = results[0].retailerHashedPassword ;
        if (bcrypt.compareSync(retailerPassword, pass)){
            console.log(`${retailerEmail} has successfully logged in\n`);
            return res.status(200).send('Retailer login successful!');
        }
        console.log(`${retailerEmail} COULD NOT login\n`);
        return res.status(400).send('Retailer login failed.');
    })
});


app.get('/retailerDetails', (req, res) => {
    connection.query('Select Id, retailerName, retailerEmail, retailerLocation from RETAILER', (error, results) => {
        if(error) {
            callback(error);
            return res.status(400).send('ERROR');
        }
        console.log(`Retailer details are:\n ${results} \n`);
        return res.status(400).send(JSON.parse(JSON.stringify(results)));
    })
});

app.get('/getCustomerDetails', (req, res) => {
    console.log('Request to /getCustomerDetails\n');
    let email = req.body.email;
    let hashedEmail = hash(email);
    let customerDetails = contractInstance.getCustomerDetails(hashedEmail);
    console.log(`Email: ${email} \n`);
    let customerDetailsObj = {
        'name': customerDetails[0], 'phone': customerDetails[1]
    };
    res.status(200).send(JSON.parse(JSON.stringify(customerDetailsObj)));
});

app.get('/getManufactrer', (req, res) => {
    connection.query('Select Id, Name from MANUFACTRER', (error, results) => {
        if(error) {
            callback(error);
            return res.status(400).send('ERROR');
        }
        return res.status(200).send(JSON.parse(JSON.stringify(results)));
    })
});

app.post('/addProducts', (req, res) => {

    let productName = req.body.product.productName;
    let manufactrerId = 1;
    let retailerId = 1;
    let serialCode = req.body.product.serialCode;
    let price = req.body.product.price;
    
    connection.query('INSERT INTO `scanit-db`.`RETAILERPRODUCTS`( `Name`, `SerialCode`, `ManufactrerId`, `RetailerId`, `Price`) VALUES (?, ?, ?, ?, ?);', [productName, serialCode, manufactrerId, retailerId, price], (error, results) => {
        if (error) {
            callback(error);
            return res.status(400).send('ERROR');
        }
        QRCode.toDataURL(serialCode, function (err, url) {
            return res.status(200).send({'qrcode' : url});
        });
    });

    
});

app.get('/getProducts', (req, res) => {
    connection.query('SELECT RETAILERPRODUCTS.Id, RETAILERPRODUCTS.Name as ProductName, RETAILERPRODUCTS.Price, RETAILERPRODUCTS.SerialCode, RETAILERPRODUCTS.Name FROM RETAILERPRODUCTS INNER JOIN MANUFACTRER  ON RETAILERPRODUCTS.ManufactrerId = MANUFACTRER.Id ORDER BY RETAILERPRODUCTS.Id ASC;', (error, results) => {
        if(error) {
            callback(error);
            return res.status(400).send('ERROR');
        }
        return res.status(200).send(JSON.parse(JSON.stringify(results)));
    })
});

app.get('/getProduct/:serialcode', (req, res) => {
    var serialCode = req.params.serialcode;
    connection.query('SELECT RETAILERPRODUCTS.Id, RETAILERPRODUCTS.Name as ProductName, RETAILERPRODUCTS.Price, RETAILERPRODUCTS.SerialCode, MANUFACTRER.Name as ManufactrerName FROM RETAILERPRODUCTS INNER JOIN MANUFACTRER  ON RETAILERPRODUCTS.ManufactrerId = MANUFACTRER.Id WHERE RETAILERPRODUCTS.SerialCode = ?',[serialCode], (error, results) => {
        if(error) {
            callback(error);
            return res.status(400).send('ERROR');
        }
        if(results.length > 0){
        return res.status(200).send(JSON.parse(JSON.stringify(results[0])));}
        else{
            return res.status(200).send({});
        }

    })
});





function callback(error){
    console.log(error);
}