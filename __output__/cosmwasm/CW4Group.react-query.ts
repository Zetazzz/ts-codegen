/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { InstantiateMsg, Member, ExecuteMsg, QueryMsg, QueryResponse, AdminResponse, TotalWeightResponse, MemberListResponse, MemberResponse, HooksResponse } from "./CW4Group.types";
import { CW4GroupQueryClient } from "./CW4Group.client";
export interface CW4GroupReactQuery<TResponse> {
  client: CW4GroupQueryClient;
  options?: UseQueryOptions<TResponse, Error, TResponse, (string | undefined)[]>;
}
export interface CW4GroupHooksQuery extends CW4GroupReactQuery<HooksResponse> {}
export function useCW4GroupHooksQuery({
  client,
  options
}: CW4GroupHooksQuery) {
  return useQuery<HooksResponse, Error, HooksResponse, (string | undefined)[]>(["cW4GroupHooks", client.contractAddress], () => client.hooks(), options);
}
export interface CW4GroupMemberQuery extends CW4GroupReactQuery<MemberResponse> {
  args: {
    addr: string;
    atHeight?: number;
  };
}
export function useCW4GroupMemberQuery({
  client,
  args,
  options
}: CW4GroupMemberQuery) {
  return useQuery<MemberResponse, Error, MemberResponse, (string | undefined)[]>(["cW4GroupMember", client.contractAddress, JSON.stringify(args)], () => client.member({
    addr: args.addr,
    atHeight: args.atHeight
  }), options);
}
export interface CW4GroupListMembersQuery extends CW4GroupReactQuery<ListMembersResponse> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useCW4GroupListMembersQuery({
  client,
  args,
  options
}: CW4GroupListMembersQuery) {
  return useQuery<ListMembersResponse, Error, ListMembersResponse, (string | undefined)[]>(["cW4GroupListMembers", client.contractAddress, JSON.stringify(args)], () => client.listMembers({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface CW4GroupTotalWeightQuery extends CW4GroupReactQuery<TotalWeightResponse> {}
export function useCW4GroupTotalWeightQuery({
  client,
  options
}: CW4GroupTotalWeightQuery) {
  return useQuery<TotalWeightResponse, Error, TotalWeightResponse, (string | undefined)[]>(["cW4GroupTotalWeight", client.contractAddress], () => client.totalWeight(), options);
}
export interface CW4GroupAdminQuery extends CW4GroupReactQuery<AdminResponse> {}
export function useCW4GroupAdminQuery({
  client,
  options
}: CW4GroupAdminQuery) {
  return useQuery<AdminResponse, Error, AdminResponse, (string | undefined)[]>(["cW4GroupAdmin", client.contractAddress], () => client.admin(), options);
}