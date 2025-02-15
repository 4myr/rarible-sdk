import type { IRaribleSdk } from "@rarible/sdk/src/domain"
import type { Collection } from "@rarible/api-client/build/models"
import { retry } from "@rarible/sdk/src/common/retry"
import type {
	Blockchain,
	GetAllCollectionsResponse,
	GetCollectionByIdResponse,
	GetCollectionsByOwnerResponse,
} from "@rarible/api-client"
import type { Collections } from "@rarible/api-client/build/models"

/**
 * Get Collection by id
 */
export async function getCollectionById(sdk: IRaribleSdk, collectionId: string): Promise<Collection> {
	const collection = await retry(15, 3000, async () => {
		return await sdk.apis.collection.getCollectionById({
			collection: collectionId,
		})
	})
	expect(collection).not.toBe(null)
	return collection
}

export async function getCollectionByIdRaw(sdk: IRaribleSdk, collectionId: string): Promise<GetCollectionByIdResponse> {
	const collection = await retry(15, 3000, async () => {
		return await sdk.apis.collection.getCollectionByIdRaw({
			collection: collectionId,
		})
	})
	expect(collection).not.toBe(null)
	return collection
}

export async function getAllCollections(sdk: IRaribleSdk, blockchain: Blockchain, size: number): Promise<Collections> {
	const collections = await retry(15, 3000, async () => {
		return await sdk.apis.collection.getAllCollections({
			blockchains: [blockchain],
			size: size,
		})
	})
	expect(collections).not.toBe(null)
	return collections
}

export async function getAllCollectionsRaw(sdk: IRaribleSdk, blockchain:
Blockchain, size: number): Promise<GetAllCollectionsResponse> {
	const collections = await retry(15, 3000, async () => {
		return await sdk.apis.collection.getAllCollectionsRaw({
			blockchains: [blockchain],
			size: size,
		})
	})
	expect(collections).not.toBe(null)
	return collections
}


export async function getCollectionsByOwner(sdk: IRaribleSdk, owner: string, size: number): Promise<Collections> {
	const collections = await retry(15, 3000, async () => {
		return await sdk.apis.collection.getCollectionsByOwner({
			owner: owner,
			size: size,
		})
	})
	expect(collections).not.toBe(null)
	return collections
}


export async function getCollectionsByOwnerRaw(sdk: IRaribleSdk, owner: string,
																							 size: number): Promise<GetCollectionsByOwnerResponse> {
	const collections = await retry(15, 3000, async () => {
		return await sdk.apis.collection.getCollectionsByOwnerRaw({
			owner: owner,
			size: size,
		})
	})
	expect(collections).not.toBe(null)
	return collections
}
