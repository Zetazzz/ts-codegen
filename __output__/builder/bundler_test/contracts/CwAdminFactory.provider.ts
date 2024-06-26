/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor } from "./contractContextBase";
import { CwAdminFactoryClient, CwAdminFactoryQueryClient } from "./CwAdminFactory.client";
import { CwAdminFactoryMsgComposer } from "./CwAdminFactory.message-composer";
export class CwAdminFactory extends ContractBase<CwAdminFactoryClient, CwAdminFactoryQueryClient, CwAdminFactoryMsgComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, CwAdminFactoryClient, CwAdminFactoryQueryClient, CwAdminFactoryMsgComposer);
  }
}