var express = require('express');
const app = express();

let users = {
    1: { 
        "id" : "Dayami Huffman",
        "WalletAdress":"0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        "email": "dayami@myemail.com"
    }, 
    2: { 
        "id" : "Troy Webb",
        "WalletAdress":"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
        "email": "troy@myemail.com"
    },
    3: {
        "id" : "Jason Villegas",
        "WalletAdress":"0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
        "email": "jason@myemail.com"

    },
    4: {
        "id" : "Amya Odom",
        "WalletAdress":"0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
        "email": "amya@myemail.com"
    },
    5: {
        "id" : "Ari David",
        "WalletAdress":"0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
        "email": "ari@myemail.com"
    }
  };
  
  let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };



  app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });
  
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
  
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
  
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
  app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
  });
  
  app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
  
  app.put('/users/:userId', (req, res) => {
    return res.send(
      `PUT HTTP method on user/${req.params.userId} resource`,
    );
  });
  
  app.delete('/users/:userId', (req, res) => {
    return res.send(
      `DELETE HTTP method on user/${req.params.userId} resource`,
    );
  });
  
  app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
  });
  
  app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
  });

  app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId])
  });

  app.get('/users/:userId/WalletAdress', (req, res) => {
    return res.send(users[req.params.userId].WalletAdress)
  });

  app.get('/users/:userId/email', (req, res) => {
    return res.send(users[req.params.userId].email)
  });

  app.get('/users/:userId/id', (req, res) => {
    return res.send(users[req.params.userId].id)
  });


  app.listen(process.env.PORT || 3000);