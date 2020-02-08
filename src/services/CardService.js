import CardsApi from "../pokeclient/api/CardsApi";

const cardsApi = new CardsApi();

class CardService {

  fetchBoosterPacks = async () => {
    const costs = await cardsApi.cardsPackagesCurrentPackageCostGet();
    const packageNames = await cardsApi.cardsPackagesGet();
    const boosterPacks = [];
    for (let i = 0; i < packageNames.length; i++) {
      const packageCards = await cardsApi.cardsPackagesCardPackNameGet(
        packageNames[i]
      );
      boosterPacks.push({ name: packageNames[i], costs: costs, cards: packageCards });
      // Example for when the API might get changed to where it provides more than just one pack 
      // which then can be also put in boosterPacks
      /** packs.push({
        name: "Special Pack",
        costs: "10",
        cards: packageCards
      });
      */
    }
    return boosterPacks;
  };

  fetchDetailCard = async cardId => {
    const detailCard = await cardsApi.cardsCardIdGet(cardId);
    return detailCard.card;
  };

  buyPack = async packageName => {
    await cardsApi.cardsPackagesCardPackNameBuyDefaultPackageGet(packageName);
    alert("Enjoy your pack!");
  };

  // Fetches all Cards and sorting them in alphabetical order
  fetchAllCards = async () => {
    const opts = { page: 0 };
    const storage = [];

    var fetchNow = async function () {
      const response = await cardsApi.cardsGet(opts);
      if (response.cards.length !== 0) {
        storage.push(...response.cards);
        opts.page += 1;
        await fetchNow();
      }
    };
    await fetchNow();
    storage.sort((a, b) => (a.name > b.name ? 1 : -1));
    return storage;
  };

  // Fetches all User Cards and sorting them in alphabetical order
  fetchUserCards = async () => {
    const storage = [];
    const response = await cardsApi.cardsUsercardsGet();
    const allCards = response.map(async card => {
      const data = await cardsApi.cardsCardIdGet(card.cardId);
      storage.push(data.card);
    });
    await Promise.all(allCards);
    storage.sort((a, b) => (a.name > b.name ? 1 : -1));
    return storage;
  };

  getfilteredCards = (cards, search) => {
    const lowercasedFilter = search.toLowerCase();
    const filteredCards = cards.filter(card => {
      return Object.keys(card).some(() =>
        card.name.toLowerCase().includes(lowercasedFilter)
      );
    });
    return filteredCards;
  };
}

export default CardService;
