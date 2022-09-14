/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, Binary, Expiration, Timestamp, Uint64, QueryMsg, Uint128, ArrayOfSharesResponseItem, SharesResponseItem, AllNftInfoResponseForEmpty, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, OperatorsResponse, TokensResponse, ApprovalResponse, ApprovalsResponse, ContractInfoResponse, MinterResponse, NumTokensResponse, String } from "./AccountsNft.types";
export interface AccountsNftReadOnlyInterface {
  contractAddress: string;
  proposedNewOwner: () => Promise<String>;
  allDebtShares: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string[][];
  }) => Promise<ArrayOfSharesResponseItem>;
  ownerOf: ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<OwnerOfResponse>;
  approval: ({
    includeExpired,
    spender,
    tokenId
  }: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  }) => Promise<ApprovalResponse>;
  approvals: ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<ApprovalsResponse>;
  allOperators: ({
    includeExpired,
    limit,
    owner,
    startAfter
  }: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<OperatorsResponse>;
  numTokens: () => Promise<NumTokensResponse>;
  contractInfo: () => Promise<ContractInfoResponse>;
  nftInfo: ({
    tokenId
  }: {
    tokenId: string;
  }) => Promise<NftInfoResponseForEmpty>;
  allNftInfo: ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<AllNftInfoResponseForEmpty>;
  tokens: ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<TokensResponse>;
  allTokens: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<TokensResponse>;
  minter: () => Promise<MinterResponse>;
}
export class AccountsNftQueryClient implements AccountsNftReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.proposedNewOwner = this.proposedNewOwner.bind(this);
    this.allDebtShares = this.allDebtShares.bind(this);
    this.ownerOf = this.ownerOf.bind(this);
    this.approval = this.approval.bind(this);
    this.approvals = this.approvals.bind(this);
    this.allOperators = this.allOperators.bind(this);
    this.numTokens = this.numTokens.bind(this);
    this.contractInfo = this.contractInfo.bind(this);
    this.nftInfo = this.nftInfo.bind(this);
    this.allNftInfo = this.allNftInfo.bind(this);
    this.tokens = this.tokens.bind(this);
    this.allTokens = this.allTokens.bind(this);
    this.minter = this.minter.bind(this);
  }

  proposedNewOwner = async (): Promise<String> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposed_new_owner: {}
    });
  };
  allDebtShares = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string[][];
  }): Promise<ArrayOfSharesResponseItem> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_debt_shares: {
        limit,
        start_after: startAfter
      }
    });
  };
  ownerOf = async ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<OwnerOfResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner_of: {
        include_expired: includeExpired,
        token_id: tokenId
      }
    });
  };
  approval = async ({
    includeExpired,
    spender,
    tokenId
  }: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  }): Promise<ApprovalResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      approval: {
        include_expired: includeExpired,
        spender,
        token_id: tokenId
      }
    });
  };
  approvals = async ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<ApprovalsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      approvals: {
        include_expired: includeExpired,
        token_id: tokenId
      }
    });
  };
  allOperators = async ({
    includeExpired,
    limit,
    owner,
    startAfter
  }: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<OperatorsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_operators: {
        include_expired: includeExpired,
        limit,
        owner,
        start_after: startAfter
      }
    });
  };
  numTokens = async (): Promise<NumTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      num_tokens: {}
    });
  };
  contractInfo = async (): Promise<ContractInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      contract_info: {}
    });
  };
  nftInfo = async ({
    tokenId
  }: {
    tokenId: string;
  }): Promise<NftInfoResponseForEmpty> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft_info: {
        token_id: tokenId
      }
    });
  };
  allNftInfo = async ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<AllNftInfoResponseForEmpty> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_nft_info: {
        include_expired: includeExpired,
        token_id: tokenId
      }
    });
  };
  tokens = async ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<TokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      tokens: {
        limit,
        owner,
        start_after: startAfter
      }
    });
  };
  allTokens = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<TokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_tokens: {
        limit,
        start_after: startAfter
      }
    });
  };
  minter = async (): Promise<MinterResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      minter: {}
    });
  };
}
export interface AccountsNftInterface extends AccountsNftReadOnlyInterface {
  contractAddress: string;
  sender: string;
  proposeNewOwner: ({
    newOwner
  }: {
    newOwner: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  acceptOwnership: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  mint: ({
    user
  }: {
    user: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  transferNft: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  sendNft: ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: Binary;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  approve: ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  revoke: ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  approveAll: ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  revokeAll: ({
    operator
  }: {
    operator: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  burn: ({
    tokenId
  }: {
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class AccountsNftClient extends AccountsNftQueryClient implements AccountsNftInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.proposeNewOwner = this.proposeNewOwner.bind(this);
    this.acceptOwnership = this.acceptOwnership.bind(this);
    this.mint = this.mint.bind(this);
    this.transferNft = this.transferNft.bind(this);
    this.sendNft = this.sendNft.bind(this);
    this.approve = this.approve.bind(this);
    this.revoke = this.revoke.bind(this);
    this.approveAll = this.approveAll.bind(this);
    this.revokeAll = this.revokeAll.bind(this);
    this.burn = this.burn.bind(this);
  }

  proposeNewOwner = async ({
    newOwner
  }: {
    newOwner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      propose_new_owner: {
        new_owner: newOwner
      }
    }, fee, memo, funds);
  };
  acceptOwnership = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_ownership: {}
    }, fee, memo, funds);
  };
  mint = async ({
    user
  }: {
    user: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {
        user
      }
    }, fee, memo, funds);
  };
  transferNft = async ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      transfer_nft: {
        recipient,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  sendNft = async ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: Binary;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      send_nft: {
        contract,
        msg,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  approve = async ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      approve: {
        expires,
        spender,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  revoke = async ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      revoke: {
        spender,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  approveAll = async ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      approve_all: {
        expires,
        operator
      }
    }, fee, memo, funds);
  };
  revokeAll = async ({
    operator
  }: {
    operator: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      revoke_all: {
        operator
      }
    }, fee, memo, funds);
  };
  burn = async ({
    tokenId
  }: {
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      burn: {
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
}