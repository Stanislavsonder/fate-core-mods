<script setup lang="ts">
import { IonItem } from '@ionic/vue'
import type { CharacterRelation } from '../../types'
import { nextTick, ref } from 'vue'
import Modal from './Modal.vue'
import RelationForm from './RelationForm.vue'

const { relation, isLast } = defineProps<{
	relation: CharacterRelation
	isLast: boolean
}>()

const emit = defineEmits<{
	update: [newRelation: CharacterRelation]
	remove: []
}>()

const isModalOpen = ref<boolean>(false)

function save(newRelation: CharacterRelation) {
	isModalOpen.value = false
	nextTick(() => {
		emit('update', newRelation)
	})
}

function remove() {
	isModalOpen.value = false
	nextTick(() => {
		emit('remove')
	})
}
</script>

<template>
	<ion-item
		button
		:detail="true"
		:lines="isLast ? 'none' : 'full'"
		class="row"
		data-testid="edit-relation-button"
		:aria-label="`${relation.name} ${$t('sonder@relationships.relation')}`"
		@click="isModalOpen = true"
	>
		<div class="columns">
			<span class="name">{{ relation.name }}</span>
			<span class="what">{{ relation.what }}</span>
		</div>
	</ion-item>
	<Modal
		v-model="isModalOpen"
		:title="$t('sonder@relationships.edit')"
		sheet
	>
		<RelationForm
			:relation="relation"
			mode="edit"
			@save="save"
			@remove="remove"
		/>
	</Modal>
</template>

<style scoped>
.row {
	--background: var(--color-background-2, var(--ion-background-color));
}
.columns {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.75rem;
	align-items: center;
	width: 100%;
	padding: 0.25rem 0;
}
.name {
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: 600;
}
.what {
	min-width: 0;
	opacity: 0.7;
	text-align: start;
	white-space: normal;
	overflow-wrap: break-word;
	/* Cap it rather than let one long entry take over the whole list - still
	   shows far more than the old single-line truncation did. */
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	overflow: hidden;
}
</style>
