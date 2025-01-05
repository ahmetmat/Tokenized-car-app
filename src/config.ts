import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "ToCar | Car Tokenization Marketplace",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "embeddables-marketplace-1",
    collections: [
        {
            marketplace: "andr1uxj039ax45l94w5hzwz9g2yx3900nu8943kqz4a4uahmx9p8erlsramllp",
            cw721: "andr1hknuzf6n7h6rhxx5cfgq6k9a447r8mtyncek6tkm5tcx4hwhcr5qx7yps6",
            name: "ToCarNFT Collection",
            featured: "BMW-2022-002",
            description: "The ultimate marketplace for tokenized cars on Andromeda.  Mint and trade your favorite car models as NFTs!",
            type: ICollectionType.MARKETPLACE,
            id: "embeddables-marketplace-1"
        }
    ],
};

export default CONFIG;