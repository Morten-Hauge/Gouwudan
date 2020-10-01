<template>
    
    <div id="addItem">
        
    <div class="addBtn" :class="{ addedItemDone: item.added }" @click="added(item)">
        {{item.name}}
    </div>
    
    </div>

</template>

<script>
export default {
    name: 'addItem',
    props: {
	     item:{
		     type: Object
         }
    },
    methods: {
        added: function (item) {
            this.$store.commit('addItemToList', item)
        }
    }
}
</script>

<style scoped>

    .picked-item{

    }

    .addedItemDone{
        color: green;
    }

</style>