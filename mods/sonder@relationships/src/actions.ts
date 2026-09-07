import { getModData, setModData } from '@fate-app/mod-types'
import type { Character, FateContext } from '@fate-app/mod-types'
import type { CharacterRelation } from './types'

export const RELATIONS_KEY = 'sonder@relationships.relations'

export function onInstall(_context: FateContext, character: Character): void {
	setModData<CharacterRelation[]>(character, RELATIONS_KEY, getModData<CharacterRelation[]>(character, RELATIONS_KEY) ?? [])
}

export function onUninstall(_context: FateContext, character: Character): void {
	delete character[RELATIONS_KEY]
}

export function onReconfigure(_context: FateContext, _character: Character): void {}
