This project is a simple example of an offchain search.


The smart contract VoteApp is a voting algorithm to be deployed on the ethereum network.
We used a nodejs server where we kept some dummy data for testing pruposes and deployed it on heroku.
Please note that this project is mearly the testing process of a single feature of this smart contract that is : Fetching data offchain using the Provable smart contract.
Provable is the leading oracle service for smart contracts and blockchain applications, serving thousands of requests every day on platforms like Ethereum.



To be able to run this project on your local machine, you need to replace the 

import "github.com/provable-things/ethereum-api/provableAPI_0.4.25.sol";

with a local import. Or just copy and past in on remix and deploy it on a Injected Web3 enviorment.



