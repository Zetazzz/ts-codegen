/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, getSigningClientDefault, getQueryClientDefault, getMessageComposerDefault } from "./contractContextBase";
import { FactoryClient } from "./Factory.client.ts";
import { FactoryQueryClient } from "./Factory.client.ts";
import { FactoryMessageComposer } from "./Factory.message-composer.ts";
export class Factory extends ContractBase {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }) {
    super(address, cosmWasmClient, signingCosmWasmClient);
  }

}