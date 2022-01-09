<template>
    
    <div id="PickedItemComp">
        
        <div class="picked-item-container" :class="{ pickedItemDone: pickedItem.picked, opacityZero: !pickedItem.added }">

            <div class="picked-item"  @click="toggleDone(pickedItem)"> {{pickedItem.name}} </div>
        
            <div class="delete-item" @click="deleteItem(pickedItem)"></div>

        </div>

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

        // * On item click addedToBasket is run from store.js

        toggleDone: function (pickedItem) {
            this.$store.commit('addedToBasket',pickedItem)
        },

        // * On delete item click removeItemFromList is run from store.js

        deleteItem: function (pickedItem) {
            //pickedItem.classList.add('opacityZero');
            this.$store.commit('removeItemFromList',pickedItem);
        }
    }
}
</script>

<style scoped>

.picked-item-container{
    background: var(--text-color);
    color: var(--bg-color);
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.8rem 0;
    border-radius: .3rem;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    background-image: linear-gradient(to left, transparent, transparent 50%, var(--green-color) 50%, var(--green-color));
	background-position: 100% 0;
	background-size: 200% 100%;
	transition: all .2s ease-in;

    /* box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ; */
}

.picked-item{
    padding: 0.8rem;
}

.pickedItemDone{
    background-position: 0 0;
}

.delete-item{
    width: 3.5rem;
    height: 100%;
    background: var(--bg-x-color);
    display: inline-block;
    border-radius: 0 .3rem .3rem 0;
    background-image: url('../assets/x.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 40%;
}

.opacityZero{
    opacity: 0;
}
</style>