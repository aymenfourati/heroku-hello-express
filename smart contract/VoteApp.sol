pragma solidity ^0.4.22;
import "github.com/provable-things/ethereum-api/provableAPI_0.4.25.sol";

contract VoteApp is usingProvable {
    address public owner;
    string[] public voteArray;
    string public walletAddress;
   event LogConstructorInitiated(string nextStep);
   event LogDataUpdate(string price);
   event LogNewProvableQuery(string description);

   function VoteApp() payable {
            owner = msg.sender;
       LogConstructorInitiated("Constructor was initiated. Call 'updatePrice()' to send the Provable Query.");
   }

    // commitedVote stores whether or not the voter has already commited his vote and whether or not he voted UP or DOWN
    struct commitedVote{

        string updownVote;
        bool commitedupdown;

    }
    // post struct stores the number of Up votes and Down votes on each post plus the voters who have commited their votes on this post and their commitedVotes
    struct post{

        uint256 downvotes;
        uint256 upvotes;

        mapping(address => commitedVote) Voters;

    }

    // an event that grants us an insight on every voteupdate
    event voteUpdate ( uint256 votes, address voter, string voted );
    // posts mapping stores all the posts
    mapping(string => post) private posts;

    function addpost(string memory _post) public{

        post storage newpost = posts[_post];
        voteArray.push(_post);

            }

    function vote(string memory _post,string memory _updown) public{

        require(keccak256(abi.encodePacked(_updown)) == keccak256(abi.encodePacked("up")) || keccak256(abi.encodePacked(_updown)) == keccak256(abi.encodePacked("down")), "unvalid voting");
        require(!posts[_post].Voters[msg.sender].commitedupdown,"you have already voted");

        post storage p = posts[_post];
        p.Voters[msg.sender].commitedupdown= true;

        if (keccak256(abi.encodePacked(_updown)) == keccak256(abi.encodePacked("up"))) {p.upvotes++;}
        else if (keccak256(abi.encodePacked(_updown)) == keccak256(abi.encodePacked("down"))) {p.downvotes++;}

        emit voteUpdate(p.upvotes + p.downvotes,msg.sender,_post);

    }



    function getVotes(string memory _post) public view returns( uint256 upvotes, uint256 downvotes){

        post storage p = posts[_post];

        return(p.upvotes, p.downvotes);

    }
   function __callback(bytes32 myid, string result) {
       if (msg.sender != provable_cbAddress()) revert();
       walletAddress = result;
       LogDataUpdate(result);
   }

   function fetchData() payable {
       if (provable_getPrice("URL") > this.balance) {
           LogNewProvableQuery("Provable query was NOT sent, please add some ETH to cover for the query fee");
       } else {
           LogNewProvableQuery("Provable query was sent, standing by for the answer..");
           provable_query("URL", "json(https://heroku-hello-express.herokuapp.com/users/1).WalletAddress");
       }
   }
}
