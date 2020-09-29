<template>
    
    <div id="PickedItemComp">
        
       <div class="picked-item" :class="{ pickedItemDone: pickedItem.done }" @click="toggleDone(pickedItem)"> {{pickedItem.name}} </div> {{pickedItem.done}}
        <br>
        <div class="delete-item" @click="deleteItem(pickedItem)"></div>
        <!-- <div class="delete-item" @click="$store.commit('removeItemFromList',pickedItem)"></div> -->
    </div>

</template>

<script>
export default {
    name: 'PickedItemComp',
    props: {
	    pickedItem:{
		    type: Object
        }
    },
    methods: {
        toggleDone: function (pickedItem) {
            this.$store.commit('addedToBasket',pickedItem)
        },
        deleteItem: function (pickedItem) {
            this.$store.commit('removeItemFromList',pickedItem)
        }
    }
}
</script>

<style scoped>

    .picked-item{

    }

    .pickedItemDone{
        color: green;
        font-weight: bold;
    }

    .delete-item{
        width: 20px;
        height: 20px;
        background: red;
        display: inline-block;
    }

</style>