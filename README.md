# Direct NFT sell in REACH/Algorand blockchain

This is simple example of selling NFT directly to the Buyer .
## Backend reach code
  You can find the backend code inside backend folder. You can find the detail of the backend [here](https://github.com/knightpr/reach-direct-sell) in this repository.

## Run server
Run `ng serve` for a dev server. Navigate to `http://localhosgt:4200/nft` or click on the link on the home page.

You can simulate the NFT buying and selling by opening two different browsers
One will ask as Creator, who is become owner at first. 
### Creator/Owner flow

- select as creator
- confirm you NFT details
- then it creates contract
- then become an owner first
- accept the terms and conditions of owner 
- sign the transaction fee
- set the NFT pricing and timeout (currently timeout is hardcoded)

### Buyer flow

- select as buyer
- attach the contract information
- see the NFT details 
- accept the terms and conditions of the buyer
- confirm buying NFT
- make the transaction

Finally, you will see total balance changes fo the creator and the buyer based on the actions.






