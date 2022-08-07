/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export type Addr = string;
export type PaymentInfo = {
  none: {};
} | {
  native_payment: {
    payment_amount: Uint128;
    token_denom: string;
  };
} | {
  cw20_payment: {
    payment_amount: Uint128;
    token_address: string;
  };
};
export type Uint128 = string;
export interface ConfigResponse {
  admin: Addr;
  payment_info: PaymentInfo;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  register: {
    chain_id: string;
    checksum: string;
    code_id: number;
    name: string;
    version: string;
  };
} | {
  set_owner: {
    chain_id: string;
    name: string;
    owner?: string | null;
  };
} | {
  unregister: {
    chain_id: string;
    code_id: number;
  };
} | {
  update_config: {
    admin?: string | null;
    payment_info?: PaymentInfo | null;
  };
};
export type Binary = string;
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
  [k: string]: unknown;
}
export interface GetRegistrationResponse {
  registration: Registration;
}
export interface Registration {
  checksum: string;
  code_id: number;
  registered_by: Addr;
  version: string;
}
export interface InfoForCodeIdResponse {
  checksum: string;
  name: string;
  registered_by: Addr;
  version: string;
}
export interface InstantiateMsg {
  admin: string;
  payment_info: PaymentInfo;
}
export interface ListRegistrationsResponse {
  registrations: Registration[];
}
export type QueryMsg = {
  config: {};
} | {
  get_registration: {
    chain_id: string;
    name: string;
    version?: string | null;
  };
} | {
  info_for_code_id: {
    chain_id: string;
    code_id: number;
  };
} | {
  list_registrations: {
    chain_id: string;
    name: string;
  };
};
export type ReceiveMsg = {
  register: {
    chain_id: string;
    checksum: string;
    code_id: number;
    name: string;
    version: string;
  };
};
export type CwCodeIdRegistryExecuteMsg = ExecuteMsg;
export interface CwCodeIdRegistryReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  getRegistration: ({
    chainId,
    name,
    version
  }: {
    chainId: string;
    name: string;
    version?: string;
  }) => Promise<GetRegistrationResponse>;
  infoForCodeId: ({
    chainId,
    codeId
  }: {
    chainId: string;
    codeId: number;
  }) => Promise<InfoForCodeIdResponse>;
  listRegistrations: ({
    chainId,
    name
  }: {
    chainId: string;
    name: string;
  }) => Promise<ListRegistrationsResponse>;
}
export class CwCodeIdRegistryQueryClient implements CwCodeIdRegistryReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.getRegistration = this.getRegistration.bind(this);
    this.infoForCodeId = this.infoForCodeId.bind(this);
    this.listRegistrations = this.listRegistrations.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  getRegistration = async ({
    chainId,
    name,
    version
  }: {
    chainId: string;
    name: string;
    version?: string;
  }): Promise<GetRegistrationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_registration: {
        chain_id: chainId,
        name,
        version
      }
    });
  };
  infoForCodeId = async ({
    chainId,
    codeId
  }: {
    chainId: string;
    codeId: number;
  }): Promise<InfoForCodeIdResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info_for_code_id: {
        chain_id: chainId,
        code_id: codeId
      }
    });
  };
  listRegistrations = async ({
    chainId,
    name
  }: {
    chainId: string;
    name: string;
  }): Promise<ListRegistrationsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_registrations: {
        chain_id: chainId,
        name
      }
    });
  };
}
export interface CwCodeIdRegistryInterface extends CwCodeIdRegistryReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  register: ({
    chainId,
    checksum,
    codeId,
    name,
    version
  }: {
    chainId: string;
    checksum: string;
    codeId: number;
    name: string;
    version: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setOwner: ({
    chainId,
    name,
    owner
  }: {
    chainId: string;
    name: string;
    owner?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  unregister: ({
    chainId,
    codeId
  }: {
    chainId: string;
    codeId: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    admin,
    paymentInfo
  }: {
    admin?: string;
    paymentInfo?: PaymentInfo;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CwCodeIdRegistryClient extends CwCodeIdRegistryQueryClient implements CwCodeIdRegistryInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.register = this.register.bind(this);
    this.setOwner = this.setOwner.bind(this);
    this.unregister = this.unregister.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
  }

  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, funds);
  };
  register = async ({
    chainId,
    checksum,
    codeId,
    name,
    version
  }: {
    chainId: string;
    checksum: string;
    codeId: number;
    name: string;
    version: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      register: {
        chain_id: chainId,
        checksum,
        code_id: codeId,
        name,
        version
      }
    }, fee, memo, funds);
  };
  setOwner = async ({
    chainId,
    name,
    owner
  }: {
    chainId: string;
    name: string;
    owner?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_owner: {
        chain_id: chainId,
        name,
        owner
      }
    }, fee, memo, funds);
  };
  unregister = async ({
    chainId,
    codeId
  }: {
    chainId: string;
    codeId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unregister: {
        chain_id: chainId,
        code_id: codeId
      }
    }, fee, memo, funds);
  };
  updateConfig = async ({
    admin,
    paymentInfo
  }: {
    admin?: string;
    paymentInfo?: PaymentInfo;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        admin,
        payment_info: paymentInfo
      }
    }, fee, memo, funds);
  };
}