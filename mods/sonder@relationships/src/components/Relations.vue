<script setup lang="ts">
import type { Character } from '@fate-app/mod-types'
import { getModData, setModData, SheetSection } from '@fate-app/mod-types'
import { IonList, IonIcon } from '@ionic/vue'
import { add } from 'ionicons/icons'
import { computed, ref } from 'vue'
import Relation from './parts/Relation.vue'
import RelationForm from './parts/RelationForm.vue'
import Modal from './parts/Modal.vue'
import { RELATIONS_KEY } from '../actions'
import type { CharacterRelation } from '../types'

const character = defineModel<Character>({ required: true })

const relations = computed<CharacterRelation[]>(() => getModData<CharacterRelation[]>(character.value, RELATIONS_KEY) ?? [])

const isAddModalOpen = ref<boolean>(false)

function addRelation(relation: CharacterRelation) {
	setModData(character.value, RELATIONS_KEY, [...relations.value, relation])
	isAddModalOpen.value = false
}

function updateRelation(index: number, relation: CharacterRelation) {
	const next = [...relations.value]
	next.splice(index, 1, relation)
	setModData(character.value, RELATIONS_KEY, next)
}

function removeRelation(index: number) {
	const next = [...relations.value]
	next.splice(index, 1)
	setModData(character.value, RELATIONS_KEY, next)
}
</script>

<template>
	<SheetSection :title="$t('sonder@relationships.label')">
		<template #header>
			<button
				type="button"
				class="add-button"
				data-testid="add-relation-button"
				:aria-label="$t('sonder@relationships.add')"
				@click="isAddModalOpen = true"
			>
				<ion-icon :icon="add" />
			</button>
		</template>
		<ion-list
			v-if="relations.length"
			data-testid="relations-list"
			class="list"
		>
			<Relation
				v-for="(relation, index) in relations"
				:key="relation.id"
				:relation="relation"
				:is-last="index === relations.length - 1"
				@update="newRelation => updateRelation(index, newRelation)"
				@remove="removeRelation(index)"
			/>
		</ion-list>
		<p
			v-else
			class="empty"
		>
			{{ $t('sonder@relationships.empty') }}
		</p>
	</SheetSection>

	<Modal
		v-model="isAddModalOpen"
		:title="$t('sonder@relationships.add')"
		sheet
	>
		<RelationForm @save="addRelation" />
	</Modal>
</template>

<style scoped>
.add-button {
	display: flex;
	align-items: center;
	color: inherit;
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
}
.add-button ion-icon {
	font-size: 1.5rem;
}
.list {
	border-radius: 8px;
	overflow: hidden;
}
.empty {
	min-height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.25rem;
	margin: 0;
	opacity: 0.7;
}
</style>
