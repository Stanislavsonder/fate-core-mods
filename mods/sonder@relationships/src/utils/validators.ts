import type { CharacterRelation } from '../types'

/** Returns an i18n key (not translated text) - the caller resolves it with $t. */
export function validateCharacterRelation(relation: CharacterRelation): string | undefined {
	if (!relation.name) {
		return 'sonder@relationships.errors.nameRequired'
	}

	if (!relation.what) {
		return 'sonder@relationships.errors.whatRequired'
	}
}
