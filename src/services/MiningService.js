import BlockchainApi from "./../pokeclient/api/BlockchainApi.js";
import AddBlockBody from "./../pokeclient/model/AddBlockBody";
import mineWorker from "workerize-loader!./../workers/mineWorker.js"; // eslint-disable-line import/no-webpack-loader-syntax
import WalletApi from "../pokeclient/api/WalletApi";
import { setCoins } from "../actions/userActions";
import { setMinedCoins } from "../actions/userActions";
import { store } from "../index";

const walletApi = new WalletApi();
const blockchainApi = new BlockchainApi();
const workerInstance = mineWorker();

class MiningService {
  constructor() {
    this.initWorker();
    this.data = "";
  }

  initWorker = () => {
    workerInstance.addEventListener("message", result => {
      if (result.data.type != "RPC") {
        var addBlockBody = this.buildBlockBody(result)
        this.postBlock(addBlockBody)

      }
    });
  };

  buildBlockBody(result) {
    return new AddBlockBody(
      result.data.lastBlockHash,
      result.data.data,
      result.data.timestamp,
      result.data.nonce
    );
  }

  postBlock(addBlockBody) {
    blockchainApi
      .blockchainBlocksPost(addBlockBody)
      .then(response => {
        store.dispatch(setMinedCoins());
        walletApi.walletBalanceGet().then(response => {
          store.dispatch(setCoins(response.amount));
        });
        this.startMining(this.data);
      })
      .catch(err => {
        this.startMining(this.data);
      });
  }

  startMining() {
    workerInstance.getHash(this.data);
  }

  stopMining() {
    workerInstance.terminate();
  }

}

export default MiningService;