<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { IonItem, IonInput, IonNote } from '@ionic/vue'
import { getModData, setModData, SheetSection, type Character, type FateContext } from '@fate-app/mod-types'

const NOTE_KEY = 'sonder@example.note'
const CONSTANT_KEY = 'sonder@example.maxNoteLength'

const character = defineModel<Character>({ required: true })
const context = inject<Ref<FateContext>>('context')!

function updateNote(event: CustomEvent) {
	const value = String((event.target as HTMLIonInputElement).value ?? '')
	const maxLength = Number(context.value.constants[CONSTANT_KEY] ?? 200)
	setModData(character.value, NOTE_KEY, value.slice(0, maxLength))
}
</script>

<template>
	<SheetSection :title="$t('sonder@example.title')">
		<ion-item>
			<ion-input
				:label="$t('sonder@example.noteLabel')"
				label-placement="stacked"
				:model-value="getModData<string>(character, NOTE_KEY) ?? ''"
				@ion-input="updateNote"
			/>
		</ion-item>
		<ion-note>{{ $t('sonder@example.maxLengthNote', { value: context.constants[CONSTANT_KEY] ?? 200 }) }}</ion-note>
	</SheetSection>
</template>
