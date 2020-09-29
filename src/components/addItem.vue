<template>
    
    <div id="addItem">
        
    <div class="addBtn" :data-name="item.name" :data-zone="item.zone" :data-index="item.name + 1" @click="added">
    <!-- <div class="addBtn" :data-name="item.name" :data-zone="item.zone" :data-index="item.name + 1" @click="added(item)">     -->
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
            event.target.classList.toggle('added-item');
            
            //var name = item.name;
            //var zone = item.zone;
            //var index = item.index;

            //this.$store.commit('addItemToList', {name: name, zone: zone, index: index, done: false})
        }
    }
}
</script>

<style scoped>

    .picked-item{

    }

    .added-item{
        color: green;
    }

</style>