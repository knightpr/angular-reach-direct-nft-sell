import {Component, OnInit} from '@angular/core';
import * as backend from './build/index.main';
import {loadStdlib} from '@reach-sh/stdlib';
import MyAlgoConnect from "@reach-sh/stdlib/ALGO_MyAlgoConnect";

const stdlib = loadStdlib("ALGO");


stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: "TestNet",
    MyAlgoConnect,
  })
);
let resolveHandPlayer;
let resolveConfirmNftDetail;

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})


export class NftComponent implements OnInit {

  acc: any;
  bal: any;
  type: string;
  who: string;
  ctc: any;
  ctcInfo: any;
  acceptedTandC: boolean = false;
  showAcceptTandC: boolean = false;
  showWhoAreYou: boolean = false;
  showCTCInputBox: boolean = false;
  showCtcInfo: boolean = true;
  isLoading: boolean = false;
  errorMessage: string = '';

  before: any = 0;
  trades = {
    trade: 0,
  };
  private showOwnerMessage: string;
  private showbuyNftMessage: string;
  private showInformTimeoutMessage: string;
  private showNoBuyMessage: string;
  private showAuctionPropMessage: string;
  private showGetAuctionPropMessage: string;
  private after: string;
  private showPriceBox: boolean;
  private priceInput: string;
  private showNFTConfirmBox: boolean = true;
  private nftId: any;
  private artistId: any;
  private createdAt: any;
  private managerAddress: any;
  private showNFTDetail: boolean = false;


  constructor() {
  }

  fmt = (x) => stdlib.formatCurrency(x, 4);
  getBalance = async () => this.fmt(await stdlib.balanceOf(this.acc));

  async later() {
    const after = await this.getBalance();
    console.log(` ${this.who} went from ${this.before} Algo to ${after} Algo`);
    this.after = after;
    console.log("|-----------------------------------------------------------------------------------------------|");
  }

  ngOnInit() {

    try {
      if (stdlib) {
        this.getDefaultAccount();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getDefaultAccount() {
    try {
      const acc = await stdlib.getDefaultAccount();
      console.log(acc);
      const balAtomic = await stdlib.balanceOf(acc);
      const bal = stdlib.formatCurrency(balAtomic, 4);
      console.log("Balance is:", bal);
      this.before = bal;
      this.setAccount(acc, bal);
    } catch (e) {
      console.log(e);
    }
  }

  setAccount(acc, bal) {
    this.acc = acc;
    this.bal = bal;
  }

  setPrice() {
    try {
      console.log(this.who + ":Your price is" + this.priceInput);
      resolveHandPlayer(this.priceInput);
      this.showPriceBox = false;
      return false;
    } catch (e) {
      console.log(e);
    }
  }

  initNFTDetail() {
    this.nftId = stdlib.randomUInt();
    this.artistId = stdlib.randomUInt();
    this.createdAt = "Milano";
    this.managerAddress = this.acc.networkAccount.addr;

  }

  setNFTDetail() {
    try {
      const nftProps = {
        nftId: this.nftId, //Random NFT ID
        artistId: this.artistId, // Random Artist ID
        createdAt: this.createdAt,
        managerAddress: this.managerAddress, // For Etheruem, You have to do "acc.networkAccount.address" - For Algorand, You have to do "acc.networkAccount.addr"
      };
      console.log(this.who + ":NFT detail" + nftProps);
      resolveConfirmNftDetail(nftProps);
      this.showNFTConfirmBox = false;
      this.showNFTDetail = false;
      return false;
    } catch (e) {
      console.log(e);
    }
  }

  deployer() {

    try {
      this.initNFTDetail();
      this.showNFTDetail = true;
      this.isLoading = true;
      this.showWhoAreYou = true;
      this.who = 'Creator';
      const ctc = this.acc.contract(backend);
      this.ctc = ctc;
      ctc.getInfo().then((info) => {
        console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
        this.ctcInfo = info;
        this.isLoading = false;
      });
      let interact;
      interact = {
        getNftProps: async () => {
          console.log(` Creator makes id #${this.nftId}`);
          console.log(` Artist id #${this.artistId}`);
          console.log(` CreatedAt: ${this.createdAt}`);
          console.log(` Manager Address: ${this.managerAddress}`);
          this.showGetAuctionPropMessage = ` Creator makes id #${this.nftId} <br/>`;
          this.showGetAuctionPropMessage += ` Artist id #${this.artistId}<br/>`;
          this.showGetAuctionPropMessage += ` CreatedAt: ${this.createdAt}<br/>`;
          this.showGetAuctionPropMessage += ` Manager Address: ${this.managerAddress}<br/>`;
          const confirtNftCreation = await new Promise(resolve => {
            //  this.showPriceBox = true;
            console.log(resolve);
            resolveConfirmNftDetail = resolve;
          });
          console.log("NFT detail", confirtNftCreation);
          return confirtNftCreation;
        },
        showOwner: async (nftId, nftPrice, owner) => {
          console.log("|-----------------------------------------------------------------------------------------------|");
          console.log(` I am (${this.who})\n New owner is ${owner}\n NFT Price: ${this.fmt(nftPrice)} Algo\n NFT ID: #${nftId}`);
          console.log("|-----------------------------------------------------------------------------------------------|");
          this.showOwnerMessage = ` I am (${this.who})\n New owner is ${owner}\n NFT Price: ${this.fmt(nftPrice)} Algo\n NFT ID: #${nftId}`;
          await this.later();
        },
        informTimeout: async (nftId, nftPrice, owner) => {
          console.log(`Timeout!.`);
          this.showInformTimeoutMessage = `Timeout!.`;
          await this.later();
          // process.exit(0);
        }
      }
      backend.Creator(this.ctc, interact).catch(error => {
        console.log("Error", error);
        this.errorMessage = error;
      });
      return false;
    } catch (e) {
      console.log("in the error!", e);
      return false;
    }
  }

  attacher(buyer) {
    this.who = (buyer) ? 'Buyer' : 'Owner';
    this.showWhoAreYou = true;
    this.showCTCInputBox = true;
    return false;
  }

  attach() {
    try {
      this.showCtcInfo = false;
      const ctc = this.acc.contract(backend, JSON.parse(this.ctcInfo));
      this.ctc = ctc;

      console.log("attached", ctc);
      console.log(ctc.getInfo());
      this.showAcceptTandC = true;
      return false;
    } catch (e) {
      console.log(e);
    }
  }

  acceptBuyer() {
    try {
      console.log(this.ctc);
      let interact;
      let obj = this;

      interact = {
        showOwner: async (nftId, nftPrice, owner) => {
          // if ( stdlib.addressEq(owner, this.acc.networkAccount.addr) ) {  // For Etheruem, You have to do "acc.networkAccount.address" - For Algorand, You have to do "acc.networkAccount.addr"
          console.log("|-----------------------------------------------------------------------------------------------|");
          console.log(` I am (${this.who})\n New owner is ${owner}\n NFT Price: ${this.fmt(nftPrice)} Algo\n NFT ID: #${nftId}`);
          console.log("|-----------------------------------------------------------------------------------------------|");
          this.showOwnerMessage = ` I am (${this.who})\n New owner is ${owner}\n NFT Price: ${this.fmt(nftPrice)} Algo\n NFT ID: #${nftId}`;
          this.trades.trade += 1;
          await this.later();
          // };
        },
        buyNft: async (nftPrice, nftId, artistId) => {
          console.log("");
          if (this.trades.trade < 1) {
            this.trades.trade += 1;
            console.log(` NFT ID: #${nftId}\n Artist ID: #${artistId}\n NFT Price: ${this.fmt(nftPrice)} Algo`)
            this.showbuyNftMessage = ` NFT ID: #${nftId}\n Artist ID: #${artistId}\n NFT Price: ${this.fmt(nftPrice)} Algo`;
          }
          var value = confirm("Want to buy?");
          return value;
        },
        informTimeout: async () => {
          console.log(`Buyer didn't pay for NFT.`);
          this.showInformTimeoutMessage = 'Buyer didn\'t pay for NFT.';
          //await later();
          //process.exit(0);
        },
        noBuy: async (buy) => {
          console.log(`buy=>`, buy);
          this.showNoBuyMessage = 'Buyer decliened the offer!';
          await this.later();
          // process.exit(0);
        }


      };
      backend.Buyer(this.ctc, interact).catch(error => {
        console.log("Error", error);
        this.errorMessage = error;
      });

    } catch (e) {
      console.log(e);
    }
  }

  acceptOwner() {
    try {
      console.log(this.ctc);
      let interact;
      interact = {
        showOwner: (nftId, nftPrice, owner) => {
          // if ( stdlib.addressEq(owner, this.acc.networkAccount.addr) ) {  // For Etheruem, You have to do "acc.networkAccount.address" - For Algorand, You have to do "acc.networkAccount.addr"
          console.log("|-----------------------------------------------------------------------------------------------|");
          console.log(` I am (${this.who})\n New owner is ${owner}\n NFT Price: ${this.fmt(nftPrice)} Algo\n NFT ID: #${nftId}`);
          console.log("|-----------------------------------------------------------------------------------------------|");
          this.showOwnerMessage = ` I am (${this.who})\n New owner is ${owner}\n NFT Price: ${this.fmt(nftPrice)} Algo\n NFT ID: #${nftId}`;
          this.trades.trade += 1;
          //};
        },
        getAuctionProps: async () => {
          if (this.trades.trade > 1) { // If you want to increase the number of trades, you should also add Alice to the auctionProps.
            await this.later();
            console.log("first trade is done!");
            //process.exit(0);
          }
          console.log("Need to set price!");
          const timeout = 20;
          const price = await new Promise(resolve => {
            this.showPriceBox = true;
            console.log(resolve);
            resolveHandPlayer = resolve;
          });
          console.log("price is" + price);
          const p = stdlib.parseCurrency(price);
          var data = {nftPrice: p, timeout: timeout};
          console.log("data", data);
          this.showAuctionPropMessage = `${this.who} set the selling price of NFT as ${this.fmt(p)} Algo`;
          return data;
        },
        informTimeout: async (nftId, nftPrice, owner) => {
          console.log(`Timeout!.`);
          this.showInformTimeoutMessage = `Timeout!.`;
          await this.later();
          // process.exit(0);
        }
      };
      backend.Owner(this.ctc, interact).catch(error => {
        console.log("Error", error);
        this.errorMessage = error;
      });

    } catch (e) {
      console.log(e);
    }
  }

  acceptTandC(owner) {
    try {
      console.log("accepted!");
      this.acceptedTandC = true;
      if (owner) {
        this.acceptOwner();
        this.showPriceBox = true;
      } else {
        this.acceptBuyer();
      }
    } catch (e) {
      console.log(e);
    }
  }

}
