import { gql } from 'apollo-server'

export const typeDefs = gql`
  type BrandWallet {
    id: String
    payment_methods: [PaymentMethod]
  }

  type PaymentMethod {
    id: String
    type: String
    balance_cents: String
  }

  type Restriction {
    key: String
    value: String
  }

  type Ledger {
    id: String
    wallet_id: String
    balance: String
    restrictions: [Restriction]
  }

  type Wallet {
    id: String
    brand_id: String
    business_id: String
    balance: String
    ledgers: [Ledger]
  }

  type Wallets {
    wallets: [Wallet]
  }

  type AddFundsResponse {
    deposit_id: String
    transaction_id: String
  }

  input AddFundsParams {
    brand_id: String!
    source: String!
    source_id: String!
    amount_cents: String!
  }

  type Mutation {
    addFunds(params: AddFundsParams): AddFundsResponse
  }

  input WalletsParams {
    brand_id: String
  }

  type Query {
    getWallets(params: WalletsParams): Wallets
  }
`
