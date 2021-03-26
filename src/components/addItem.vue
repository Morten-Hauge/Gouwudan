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
            // let itemClone = {...item};
            // this.$store.commit('addItemToList', {item, itemClone})
            // this.$store.commit('addItemToList', item)
            
            // let obj1 = {…item};

            // * On item click addItemToList is run from store.js

            this.$store.commit('addItemToList', item)
            // this.$store.commit('test')
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