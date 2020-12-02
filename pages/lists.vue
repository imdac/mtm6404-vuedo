<template>
	<b-container>
		<b-row align-h="between" align-v="center">
			<b-col>
				<h1 class="display-4 my-3">Lists</h1>
			</b-col>
			<b-col class="d-flex justify-content-end">
				<b-button v-b-modal.add-list-form variant="secondary">+</b-button>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-list-group>
					<b-list-group-item
						class="d-flex justify-content-between" 
						v-for="(list, index) in $attrs.lists"
						:key="index"
						:variant="list.color"
						:to="{ name: 'List', params: { id: index } }">
						{{ list.title }}
						<b-badge variant="secondary" class="d-flex p-2 align-items-center text-monospace"> 
							{{ list.items.length }}
						</b-badge>
					</b-list-group-item>
				</b-list-group>
			</b-col>
		</b-row>
		<b-modal id="add-list-form" title="Add List" hide-footer>
			<b-form @submit.prevent="addList" class="mt-3">
				<b-input-group class="mb-2">
				  <b-input-group-prepend is-text>
					<b-icon icon="plus-square-fill"></b-icon>
				  </b-input-group-prepend>
				  <b-form-input 
					  type="text"
					  placeholder="List title"
					  v-model="newList"></b-form-input>	
				</b-input-group>
				<b-input-group class="mb-2">
					<b-form-select v-model="color" :options="colors"></b-form-select>
				</b-input-group>
				<b-input-group class="mb-2">
					<b-button type="submit" variant="primary">Add List</b-button>
				</b-input-group>	
			</b-form>	
		</b-modal>
	</b-container>
</template>

<script>
	module.exports = {
		data: function () {
			return {
				newList: '',
				color: '',
				colors: [
					{ text: 'Select a color', value: '' },
					{ text: 'Blue', value: 'primary' },
					{ text: 'Gray', value: 'secondary' },
					{ text: 'Green', value: 'success' },
					{ text: 'Red', value: 'danger' },
					{ text: 'Orange', value: 'warning' },
					{ text: 'Teal', value: 'info' }	
				]
			}
		},
		methods: {
			addList: function () {
				this.$emit('add-list', { title: this.newList, color: this.color })
				this.newList = ''
				this.color = ''
				this.$bvModal.hide('add-list-form')
			}
		}
	}
</script>