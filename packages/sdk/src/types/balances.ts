import type { UnionAddress } from "@rarible/types"
import type { Blockchain } from "@rarible/api-client"
import type { BigNumberValue } from "@rarible/utils"
import type { IBlockchainTransaction } from "@rarible/sdk-transaction/src"
import type { RequestCurrency } from "../common/domain"

export type IGetBalance = (address: UnionAddress, currency: RequestCurrency) => Promise<BigNumberValue>

/**
 * Convert funds to wrapped token or unwrap existed tokens (ex. ETH->wETH, wETH->ETH)
 * @param blockchain Blockchain where performs operation
 * @param isWrap Is wrap or unwrap operation
 * @param value amount of funds to convert
 */
export type IConvert = (request: ConvertRequest) => Promise<IBlockchainTransaction>

export type ConvertRequest = {
	blockchain: Blockchain
	isWrap: boolean
	value: BigNumberValue
}
