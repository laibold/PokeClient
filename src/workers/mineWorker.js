import CryptoJS from "crypto-js";

const blockchainApi = new BlockchainApi();
import BlockchainApi from "./../pokeclient/api/BlockchainApi.js";

const setLastBlockHash = async () => {
  const response = await blockchainApi.blockchainLastBlockGet();
  return response.hash 
}

const setDifficulty = async () => {
  const response = blockchainApi.blockchainCurrentDifficultyGet()
  return response
}

const setTimestamp = () => {
  return Math.floor(Date.now())
}

export const getHash = async (data) => {
  var hash = '';
  var nonce = 0;
  var difficultyString = ""
  var timestamp = setTimestamp()
  var difficulty = await setDifficulty()
  var lastBlockHash = await setLastBlockHash()

  for (var i=0; i < difficulty; i++){
    difficultyString += "0"
  }

  while (true){
    var str = lastBlockHash +
        timestamp.toString() +
        data +
        nonce.toString();

    hash = CryptoJS.SHA256(str).toString();

    if (hash.substring(0, difficulty) === difficultyString) {

      var block = {
        lastBlockHash : lastBlockHash.toString(),
        data : data,
        timestamp : timestamp,
        nonce : nonce
      }

      self.postMessage(block);
      return;
    } else {
      nonce++;
      if (nonce % 200000 === 0){
        lastBlockHash = await setLastBlockHash()
      }
    }
  }
  
}