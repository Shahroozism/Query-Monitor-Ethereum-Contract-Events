const Start_block = 7700000;
const End_block = 7701000;
contract.getPastEvents("allEvents",
    {                               
        fromBlock: Start_block,     
        toBlock: End_block // You can also specify 'latest'          
    })                              
.then(events => console.log(events))
.catch((err) => console.error(err));