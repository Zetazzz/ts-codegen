/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { CanExecuteRelayResponse, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, ExecuteMsgForEmpty, Addr, RelayTransaction, Guardians, MultiSig, InfoResponse, ContractVersion, InstantiateMsg, CreateWalletMsg, QueryMsg, Uint64 } from "./Proxy.types";
import { ProxyQueryClient } from "./Proxy.client";
export interface ProxyCanExecuteRelayQuery {
  client: ProxyQueryClient;
  options?: UseQueryOptions<CanExecuteRelayResponse, Error, CanExecuteRelayResponse, (string | undefined)[]>;
  args: {
    sender: string;
  };
}
export function useProxyCanExecuteRelayQuery({
  client,
  args,
  options
}: ProxyCanExecuteRelayQuery) {
  return useQuery<CanExecuteRelayResponse, Error, CanExecuteRelayResponse, (string | undefined)[]>(["proxyCanExecuteRelay", client.contractAddress, JSON.stringify(args)], () => client.canExecuteRelay({
    sender: args.sender
  }), options);
}
export interface ProxyInfoQuery {
  client: ProxyQueryClient;
  options?: UseQueryOptions<InfoResponse, Error, InfoResponse, (string | undefined)[]>;
}
export function useProxyInfoQuery({
  client,
  options
}: ProxyInfoQuery) {
  return useQuery<InfoResponse, Error, InfoResponse, (string | undefined)[]>(["proxyInfo", client.contractAddress], () => client.info(), options);
}