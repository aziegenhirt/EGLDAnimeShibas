import * as Dapp from "@elrondnetwork/dapp";

export const dAppName = "Elrond AnimeShibas";
export const decimals = 2;
export const denomination = 18;
export const gasPrice = 1000000000;
export const version = 1;
export const gasLimit = 50000;
export const gasPerDataByte = 1500;

export const walletConnectBridge = "https://bridge.walletconnect.org";
export const walletConnectDeepLink =
  "https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet.dev&link=https://maiar.com/";

export const contractAddress =
  "erd1qqqqqqqqqqqqqpgqgsgcdhvtpf96wgest9052mqnmade0l9zs5vq08xl3c";
export const bech32ContractAddress =
  "00000000000000000500441186dd8b0a4ba72330595f456c13df5b97fca28518";

export const network: Dapp.NetworkType = {
  id: "mainnet",
  name: "Mainnet",
  egldLabel: "EGLD",
  walletAddress: "https://wallet.elrond.com",
  apiAddress: "https://api.elrond.com",
  gatewayAddress: "https://gateway.elrond.com",
  explorerAddress: "http://explorer.elrond.com/",
};
