<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { validateCharacterRelation } from '../../utils/validators'
import { IonItem, IonList, IonInput, IonTextarea, IonButton, IonNote } from '@ionic/vue'
import type { CharacterRelation } from '../../types'

const { relation, mode } = defineProps<{
	relation?: CharacterRelation
	mode?: 'edit' | 'create'
}>()

const emit = defineEmits<{
	remove: []
	save: [relation: CharacterRelation]
}>()

const { t } = useI18n()

// Not structuredClone(relation): it's a reactive Vue proxy when editing (relation
// comes straight off the character), and structuredClone throws DataCloneError on
// those. A plain object literal sidesteps that - CharacterRelation is flat anyway.
const newRelation = ref<CharacterRelation>(
	relation ? { id: relation.id, name: relation.name, what: relation.what } : { id: crypto.randomUUID(), name: '', what: '' }
)

const validationError = computed<string | undefined>(() => validateCharacterRelation(newRelation.value))

function save() {
	emit('save', newRelation.value)
}

function remove() {
	if (window.confirm(t('sonder@relationships.confirmRemove', { value: relation?.name ?? '' }))) {
		emit('remove')
	}
}
</script>

<template>
	<div class="form">
		<div>
			<ion-list inset>
				<ion-item>
					<ion-input
						v-model="newRelation.name"
						data-testid="relation-name-input"
						inputmode="text"
						:placeholder="$t('sonder@relationships.form.name.placeholder')"
						label-placement="fixed"
						enterkeyhint="next"
						:label="$t('sonder@relationships.form.name.label')"
						required
					/>
				</ion-item>
				<ion-item>
					<ion-textarea
						v-model="newRelation.what"
						data-testid="relation-what-input"
						:placeholder="$t('sonder@relationships.form.what.placeholder')"
						inputmode="text"
						auto-grow
						label-placement="fixed"
						:label="$t('sonder@relationships.form.what.label')"
						:rows="3"
					/>
				</ion-item>
			</ion-list>
			<ion-note
				v-if="validationError"
				data-testid="relation-validation-error"
				class="error"
				color="danger"
			>
				{{ $t(validationError) }}
			</ion-note>
		</div>
		<div class="actions">
			<ion-button
				v-if="mode === 'edit'"
				data-testid="remove-relation-button"
				color="danger"
				expand="full"
				fill="clear"
				@click="remove"
			>
				{{ $t('sonder@relationships.actions.remove') }}
			</ion-button>
			<ion-button
				data-testid="save-relation-button"
				expand="block"
				:disabled="!!validationError"
				@click="save"
			>
				{{ $t(mode === 'edit' ? 'sonder@relationships.actions.save' : 'sonder@relationships.actions.add') }}
			</ion-button>
		</div>
	</div>
</template>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}
.error {
	display: block;
	text-align: center;
	padding: 0 1rem;
	min-height: 1.25rem;
}
.actions {
	width: 100%;
	padding: 1rem;
}
</style>
