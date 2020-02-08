import WalletApi from "../pokeclient/api/WalletApi";

const walletApi = new WalletApi();

class WalletService {
    getUserCoins = async () => {
        const coins = await walletApi.walletBalanceGet();
        return coins.amount;
    }
}

export default WalletService;