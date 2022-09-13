/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { Duration, Threshold, Decimal, InstantiateMsg, Voter, ExecuteMsg, Expiration, Timestamp, Uint64, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Vote, Coin, Empty, QueryMsg, Status, ThresholdResponse, ProposalListResponse, ProposalResponseForEmpty, VoterListResponse, VoterDetail, VoteListResponse, VoteInfo, VoteResponse, VoterResponse } from "./Cw3FixedMultiSig.types";
import { Cw3FixedMultiSigQueryClient } from "./Cw3FixedMultiSig.client";
export interface Cw3FixedMultiSigReactQuery<TResponse, TData = TResponse> {
  client: Cw3FixedMultiSigQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface Cw3FixedMultiSigListVotersQuery<TData> extends Cw3FixedMultiSigReactQuery<VoterListResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useCw3FixedMultiSigListVotersQuery<TData = VoterListResponse>({
  client,
  args,
  options
}: Cw3FixedMultiSigListVotersQuery<TData>) {
  return useQuery<VoterListResponse, Error, TData>(["cw3FixedMultiSigListVoters", client.contractAddress, JSON.stringify(args)], () => client.listVoters({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface Cw3FixedMultiSigVoterQuery<TData> extends Cw3FixedMultiSigReactQuery<VoterResponse, TData> {
  args: {
    address: string;
  };
}
export function useCw3FixedMultiSigVoterQuery<TData = VoterResponse>({
  client,
  args,
  options
}: Cw3FixedMultiSigVoterQuery<TData>) {
  return useQuery<VoterResponse, Error, TData>(["cw3FixedMultiSigVoter", client.contractAddress, JSON.stringify(args)], () => client.voter({
    address: args.address
  }), options);
}
export interface Cw3FixedMultiSigListVotesQuery<TData> extends Cw3FixedMultiSigReactQuery<VoteListResponse, TData> {
  args: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  };
}
export function useCw3FixedMultiSigListVotesQuery<TData = VoteListResponse>({
  client,
  args,
  options
}: Cw3FixedMultiSigListVotesQuery<TData>) {
  return useQuery<VoteListResponse, Error, TData>(["cw3FixedMultiSigListVotes", client.contractAddress, JSON.stringify(args)], () => client.listVotes({
    limit: args.limit,
    proposalId: args.proposalId,
    startAfter: args.startAfter
  }), options);
}
export interface Cw3FixedMultiSigVoteQuery<TData> extends Cw3FixedMultiSigReactQuery<VoteResponse, TData> {
  args: {
    proposalId: number;
    voter: string;
  };
}
export function useCw3FixedMultiSigVoteQuery<TData = VoteResponse>({
  client,
  args,
  options
}: Cw3FixedMultiSigVoteQuery<TData>) {
  return useQuery<VoteResponse, Error, TData>(["cw3FixedMultiSigVote", client.contractAddress, JSON.stringify(args)], () => client.vote({
    proposalId: args.proposalId,
    voter: args.voter
  }), options);
}
export interface Cw3FixedMultiSigReverseProposalsQuery<TData> extends Cw3FixedMultiSigReactQuery<ProposalListResponse, TData> {
  args: {
    limit?: number;
    startBefore?: number;
  };
}
export function useCw3FixedMultiSigReverseProposalsQuery<TData = ProposalListResponse>({
  client,
  args,
  options
}: Cw3FixedMultiSigReverseProposalsQuery<TData>) {
  return useQuery<ProposalListResponse, Error, TData>(["cw3FixedMultiSigReverseProposals", client.contractAddress, JSON.stringify(args)], () => client.reverseProposals({
    limit: args.limit,
    startBefore: args.startBefore
  }), options);
}
export interface Cw3FixedMultiSigListProposalsQuery<TData> extends Cw3FixedMultiSigReactQuery<ProposalListResponse, TData> {
  args: {
    limit?: number;
    startAfter?: number;
  };
}
export function useCw3FixedMultiSigListProposalsQuery<TData = ProposalListResponse>({
  client,
  args,
  options
}: Cw3FixedMultiSigListProposalsQuery<TData>) {
  return useQuery<ProposalListResponse, Error, TData>(["cw3FixedMultiSigListProposals", client.contractAddress, JSON.stringify(args)], () => client.listProposals({
    limit: args.limit,
    startAfter: args.startAfter
  }), options);
}
export interface Cw3FixedMultiSigProposalQuery<TData> extends Cw3FixedMultiSigReactQuery<ProposalResponseForEmpty, TData> {
  args: {
    proposalId: number;
  };
}
export function useCw3FixedMultiSigProposalQuery<TData = ProposalResponseForEmpty>({
  client,
  args,
  options
}: Cw3FixedMultiSigProposalQuery<TData>) {
  return useQuery<ProposalResponseForEmpty, Error, TData>(["cw3FixedMultiSigProposal", client.contractAddress, JSON.stringify(args)], () => client.proposal({
    proposalId: args.proposalId
  }), options);
}
export interface Cw3FixedMultiSigThresholdQuery<TData> extends Cw3FixedMultiSigReactQuery<ThresholdResponse, TData> {}
export function useCw3FixedMultiSigThresholdQuery<TData = ThresholdResponse>({
  client,
  options
}: Cw3FixedMultiSigThresholdQuery<TData>) {
  return useQuery<ThresholdResponse, Error, TData>(["cw3FixedMultiSigThreshold", client.contractAddress], () => client.threshold(), options);
}