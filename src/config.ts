import { Address } from "viem";
import { Token } from "./types/Token";
import { mainnet } from "viem/chains";

const config = {
  chains: [mainnet],
  walletConnectProjectId: "dea2d82872bed3f9df1be0f04be7aad0", // REPLACE WITH YOUR WALLET CONNECT PROJECT ID

  rewardToken: {
    [mainnet.id]: {
      symbol: "STEALTH",
      address: "0xB18F98822C22492Bd6b77D19cae9367f3D60fcBf", // YOUR REWARD TOKEN SMART CONTRACT
      decimals: 18,
    },
  } as Record<number, Token>,

  votingContract: {
    [mainnet.id]: "0x97f9f803c7456b1ac0D22058b9A03CA741B4E77b", // YOUR VOTING SMART CONTRACT
  } as Record<number, Address>,
};

export default config;
