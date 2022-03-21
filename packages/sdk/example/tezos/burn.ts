import { TezosWallet } from "@rarible/sdk-wallet"
// eslint-disable-next-line camelcase
import { in_memory_provider } from "@rarible/tezos-sdk/dist/providers/in_memory/in_memory_provider"
import { createRaribleSdk } from "@rarible/sdk"
import {  toItemId } from "@rarible/types"
import { updateNodeGlobalVars } from "../../src/common/update-node-global-vars"

updateNodeGlobalVars()

async function burn() {
	const wallet = new TezosWallet(
		in_memory_provider(
			"edskRqrEPcFetuV7xDMMFXHLMPbsTawXZjH9yrEz4RBqH1" +
      "D6H8CeZTTtjGA3ynjTqD8Sgmksi7p5g3u5KUEVqX2EWrRnq5Bymj",
			"https://tezos-hangzhou-node.rarible.org/"
		)
	)
	const sdk = createRaribleSdk(wallet, "dev")
	const burnAction = await sdk.nft.burn({
		itemId: toItemId("TEZOS:KT1ETCFvgpkWxFFNof2MXCEGnQKigw925hyw:3"),
	})
	const tx = await burnAction.submit({ amount: 1 })
	if (tx) {
	  await tx.wait()
	}
}
burn()
