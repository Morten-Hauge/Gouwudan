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
            
            // * On item click addItemToList is run from store.js
            this.$store.commit('addItemToList', item)
        }
    }
}
</script>

<style scoped>

.addBtn{
    background: var(--text-color);
    color: var(--bg-color);
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    padding: 0.8rem;
    border-radius: .3rem;

    background-image: linear-gradient(to left, transparent, transparent 50%, var(--yellow-color) 50%, var(--yellow-color));
	background-position: 100% 0;
	background-size: 200% 100%;
	transition: all .2s ease-in;

    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
}

    .picked-item{

    }

    .addedItemDone{
        background-position: 0 0;
    }

</style>