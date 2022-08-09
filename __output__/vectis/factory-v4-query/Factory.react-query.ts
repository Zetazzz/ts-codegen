/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AdminAddrResponse, CodeIdResponse, CodeIdType, Uint128, Binary, CreateWalletMsg, Guardians, MultiSig, Coin, Cw20Coin, ExecuteMsg, Addr, ProxyMigrationTxMsg, WalletAddr, CanonicalAddr, RelayTransaction, FeeResponse, GovecAddrResponse, InstantiateMsg, QueryMsg, WalletQueryPrefix, Duration, StakingOptions, WalletInfo, ContractVersion, WalletsOfResponse, WalletsResponse } from "./Factory.types";
import { FactoryQueryClient } from "./Factory.client";
export interface FactoryReactQuery<TResponse> {
  client: FactoryQueryClient;
  options?: Omit<UseQueryOptions<TResponse, Error, TResponse, (string | undefined)[]>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface FactoryAdminAddrQuery extends FactoryReactQuery<AdminAddrResponse> {}
export function useFactoryAdminAddrQuery({
  client,
  options
}: FactoryAdminAddrQuery) {
  return useQuery<AdminAddrResponse, Error, AdminAddrResponse, (string | undefined)[]>(["factoryAdminAddr", client.contractAddress], () => client.adminAddr(), options);
}
export interface FactoryGovecAddrQuery extends FactoryReactQuery<GovecAddrResponse> {}
export function useFactoryGovecAddrQuery({
  client,
  options
}: FactoryGovecAddrQuery) {
  return useQuery<GovecAddrResponse, Error, GovecAddrResponse, (string | undefined)[]>(["factoryGovecAddr", client.contractAddress], () => client.govecAddr(), options);
}
export interface FactoryFeeQuery extends FactoryReactQuery<FeeResponse> {}
export function useFactoryFeeQuery({
  client,
  options
}: FactoryFeeQuery) {
  return useQuery<FeeResponse, Error, FeeResponse, (string | undefined)[]>(["factoryFee", client.contractAddress], () => client.fee(), options);
}
export interface FactoryCodeIdQuery extends FactoryReactQuery<CodeIdResponse> {
  args: {
    ty: CodeIdType;
  };
}
export function useFactoryCodeIdQuery({
  client,
  args,
  options
}: FactoryCodeIdQuery) {
  return useQuery<CodeIdResponse, Error, CodeIdResponse, (string | undefined)[]>(["factoryCodeId", client.contractAddress, JSON.stringify(args)], () => client.codeId({
    ty: args.ty
  }), options);
}
export interface FactoryWalletsOfQuery extends FactoryReactQuery<WalletsOfResponse> {
  args: {
    limit?: number;
    startAfter?: string;
    user: string;
  };
}
export function useFactoryWalletsOfQuery({
  client,
  args,
  options
}: FactoryWalletsOfQuery) {
  return useQuery<WalletsOfResponse, Error, WalletsOfResponse, (string | undefined)[]>(["factoryWalletsOf", client.contractAddress, JSON.stringify(args)], () => client.walletsOf({
    limit: args.limit,
    startAfter: args.startAfter,
    user: args.user
  }), options);
}
export interface FactoryWalletsQuery extends FactoryReactQuery<WalletsResponse> {
  args: {
    limit?: number;
    startAfter?: WalletQueryPrefix;
  };
}
export function useFactoryWalletsQuery({
  client,
  args,
  options
}: FactoryWalletsQuery) {
  return useQuery<WalletsResponse, Error, WalletsResponse, (string | undefined)[]>(["factoryWallets", client.contractAddress, JSON.stringify(args)], () => client.wallets({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}