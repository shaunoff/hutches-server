import { UserAPI } from "../providers";
import { MutationResolvers } from "@models";
export const Mutation: MutationResolvers = {
  signup: (root, { data = {} }, { injector }) => {
    return injector.get(UserAPI).signup(data);
  },

  signin: (root, { data }, { createToken, injector }) => {
    return injector.get(UserAPI).signin(data, createToken);
  }
};
