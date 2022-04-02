import { web3 } from "@project-serum/anchor";

export interface TokenAccount {
  amount: number;
  // closeAuthority: PublicKey;
  // closeAuthorityOption: number;
  // delegate: PublicKey;
  // delegateOption: number;
  delegatedAmount: number;
  isNative: number;
  // isNativeOption: number;
  mint: web3.PublicKey;
  owner: web3.PublicKey;
  state: number;
}

export interface TokenAccountWithKey extends TokenAccount {
  key: web3.PublicKey;
}
