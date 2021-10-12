import type { EthereumTransaction } from "@rarible/ethereum-provider"
import type { Blockchain } from "@rarible/api-client"

interface Transaction<T extends Blockchain> {
	blockchain: T
	hash: string
}

export interface TransactionIndexer extends Record<Blockchain, any> {
	"ETHEREUM": EthereumTransaction
	"FLOW": any // @todo add typings from flow-sdk
}

export interface IBlockchainTransaction<T extends Blockchain = Blockchain> {
	blockchain: T
	transaction: TransactionIndexer[T]

	wait(): Promise<Transaction<T>>
}
