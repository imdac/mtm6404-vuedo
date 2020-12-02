<template>
	<b-container>
		<b-row>
			<b-col>
				<b-link to="/" class="d-flex my-3">&lt; Lists</b-link> 
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<h1 class="display-4 mb-3" :class="'text-' + list.color">{{ list.title }}</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-list-group>
					<b-list-group-item
						class="d-flex justify-content-between" 
						v-for="(item, index) in list.items"
						:key="index">
						{{ item.title }}
					</b-list-group-item>
				</b-list-group>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-form @submit.prevent="addItem" class="mt-3">
					<b-input-group class="mb-2">
					  <b-input-group-prepend is-text>
						<b-icon icon="plus-square-fill"></b-icon>
					  </b-input-group-prepend>
					  <b-form-input 
					  	type="text"
					  	placeholder="Add item"
					  	v-model="newItem"></b-form-input>	
					</b-input-group>
								
				</b-form>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	module.exports = {
		props: ['id'],
		data: function () {
			return {
				newItem: ''
			}	
		},
		computed: {
			list: function () {
				return this.$attrs.lists[this.id]
			}
		},
		methods: {
			addItem: function () {
				this.$emit('add-item', { list: this.id , title: this.newItem })
				this.newItem = ''
			}
		}
	}
</script>