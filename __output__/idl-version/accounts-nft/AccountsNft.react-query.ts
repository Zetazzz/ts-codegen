/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { InstantiateMsg, ExecuteMsg, Binary, Expiration, Timestamp, Uint64, QueryMsg, VaultBaseForString, Uint128, ArrayOfSharesResponseItem, SharesResponseItem, AllNftInfoResponseForEmpty, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, OperatorsResponse, String, TokensResponse, ArrayOfVaultBaseForString, ApprovalResponse, ApprovalsResponse, ContractInfoResponse, MinterResponse, NumTokensResponse } from "./AccountsNft.types";
import { AccountsNftQueryClient } from "./AccountsNft.client";
export interface AccountsNftReactQuery<TResponse, TData = TResponse> {
  client: AccountsNftQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface AccountsNftMinterQuery<TData> extends AccountsNftReactQuery<MinterResponse, TData> {}
export function useAccountsNftMinterQuery<TData = MinterResponse>({
  client,
  options
}: AccountsNftMinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(["accountsNftMinter", client.contractAddress], () => client.minter(), options);
}
export interface AccountsNftAllTokensQuery<TData> extends AccountsNftReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useAccountsNftAllTokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: AccountsNftAllTokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>(["accountsNftAllTokens", client.contractAddress, JSON.stringify(args)], () => client.allTokens({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface AccountsNftTokensQuery<TData> extends AccountsNftReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useAccountsNftTokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: AccountsNftTokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>(["accountsNftTokens", client.contractAddress, JSON.stringify(args)], () => client.tokens({
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface AccountsNftAllNftInfoQuery<TData> extends AccountsNftReactQuery<AllNftInfoResponseForEmpty, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useAccountsNftAllNftInfoQuery<TData = AllNftInfoResponseForEmpty>({
  client,
  args,
  options
}: AccountsNftAllNftInfoQuery<TData>) {
  return useQuery<AllNftInfoResponseForEmpty, Error, TData>(["accountsNftAllNftInfo", client.contractAddress, JSON.stringify(args)], () => client.allNftInfo({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface AccountsNftNftInfoQuery<TData> extends AccountsNftReactQuery<NftInfoResponseForEmpty, TData> {
  args: {
    tokenId: string;
  };
}
export function useAccountsNftNftInfoQuery<TData = NftInfoResponseForEmpty>({
  client,
  args,
  options
}: AccountsNftNftInfoQuery<TData>) {
  return useQuery<NftInfoResponseForEmpty, Error, TData>(["accountsNftNftInfo", client.contractAddress, JSON.stringify(args)], () => client.nftInfo({
    tokenId: args.tokenId
  }), options);
}
export interface AccountsNftContractInfoQuery<TData> extends AccountsNftReactQuery<ContractInfoResponse, TData> {}
export function useAccountsNftContractInfoQuery<TData = ContractInfoResponse>({
  client,
  options
}: AccountsNftContractInfoQuery<TData>) {
  return useQuery<ContractInfoResponse, Error, TData>(["accountsNftContractInfo", client.contractAddress], () => client.contractInfo(), options);
}
export interface AccountsNftNumTokensQuery<TData> extends AccountsNftReactQuery<NumTokensResponse, TData> {}
export function useAccountsNftNumTokensQuery<TData = NumTokensResponse>({
  client,
  options
}: AccountsNftNumTokensQuery<TData>) {
  return useQuery<NumTokensResponse, Error, TData>(["accountsNftNumTokens", client.contractAddress], () => client.numTokens(), options);
}
export interface AccountsNftAllOperatorsQuery<TData> extends AccountsNftReactQuery<OperatorsResponse, TData> {
  args: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useAccountsNftAllOperatorsQuery<TData = OperatorsResponse>({
  client,
  args,
  options
}: AccountsNftAllOperatorsQuery<TData>) {
  return useQuery<OperatorsResponse, Error, TData>(["accountsNftAllOperators", client.contractAddress, JSON.stringify(args)], () => client.allOperators({
    includeExpired: args.includeExpired,
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }), options);
}
export interface AccountsNftApprovalsQuery<TData> extends AccountsNftReactQuery<ApprovalsResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useAccountsNftApprovalsQuery<TData = ApprovalsResponse>({
  client,
  args,
  options
}: AccountsNftApprovalsQuery<TData>) {
  return useQuery<ApprovalsResponse, Error, TData>(["accountsNftApprovals", client.contractAddress, JSON.stringify(args)], () => client.approvals({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface AccountsNftApprovalQuery<TData> extends AccountsNftReactQuery<ApprovalResponse, TData> {
  args: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  };
}
export function useAccountsNftApprovalQuery<TData = ApprovalResponse>({
  client,
  args,
  options
}: AccountsNftApprovalQuery<TData>) {
  return useQuery<ApprovalResponse, Error, TData>(["accountsNftApproval", client.contractAddress, JSON.stringify(args)], () => client.approval({
    includeExpired: args.includeExpired,
    spender: args.spender,
    tokenId: args.tokenId
  }), options);
}
export interface AccountsNftOwnerOfQuery<TData> extends AccountsNftReactQuery<OwnerOfResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useAccountsNftOwnerOfQuery<TData = OwnerOfResponse>({
  client,
  args,
  options
}: AccountsNftOwnerOfQuery<TData>) {
  return useQuery<OwnerOfResponse, Error, TData>(["accountsNftOwnerOf", client.contractAddress, JSON.stringify(args)], () => client.ownerOf({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }), options);
}
export interface AccountsNftAllPreviousOwnersQuery<TData> extends AccountsNftReactQuery<String, TData> {}
export function useAccountsNftAllPreviousOwnersQuery<TData = String>({
  client,
  options
}: AccountsNftAllPreviousOwnersQuery<TData>) {
  return useQuery<String, Error, TData>(["accountsNftAllPreviousOwners", client.contractAddress], () => client.allPreviousOwners(), options);
}
export interface AccountsNftAllDebtSharesQuery<TData> extends AccountsNftReactQuery<ArrayOfSharesResponseItem, TData> {
  args: {
    limit?: number;
    startAfter?: string[][];
  };
}
export function useAccountsNftAllDebtSharesQuery<TData = ArrayOfSharesResponseItem>({
  client,
  args,
  options
}: AccountsNftAllDebtSharesQuery<TData>) {
  return useQuery<ArrayOfSharesResponseItem, Error, TData>(["accountsNftAllDebtShares", client.contractAddress, JSON.stringify(args)], () => client.allDebtShares({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface AccountsNftAllowedVaultsQuery<TData> extends AccountsNftReactQuery<ArrayOfVaultBaseForString, TData> {
  args: {
    limit?: number;
    startAfter?: VaultBaseForString;
  };
}
export function useAccountsNftAllowedVaultsQuery<TData = ArrayOfVaultBaseForString>({
  client,
  args,
  options
}: AccountsNftAllowedVaultsQuery<TData>) {
  return useQuery<ArrayOfVaultBaseForString, Error, TData>(["accountsNftAllowedVaults", client.contractAddress, JSON.stringify(args)], () => client.allowedVaults({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface AccountsNftProposedNewOwnerQuery<TData> extends AccountsNftReactQuery<String, TData> {}
export function useAccountsNftProposedNewOwnerQuery<TData = String>({
  client,
  options
}: AccountsNftProposedNewOwnerQuery<TData>) {
  return useQuery<String, Error, TData>(["accountsNftProposedNewOwner", client.contractAddress], () => client.proposedNewOwner(), options);
}