<template>
    <div class="q-pa-md">
        <div class="text-h6">Properties</div>
        <div v-if="chosenID==''">
            <div>No properties to show</div>
        </div>
        <div v-else>
            <div>{{chosenID}}</div>
            <PropComponent/>
        </div>
    </div>
</template>
<script>
import { bus } from '../bus'
import PropComponent from '../components/PropComponent.vue'
export default {
    components: {
        PropComponent
    },
    data () {
    return {
      chosenID: '',
        propsTypes: this.$store.getters.getPropertiesTypes
    }
  },
    mounted() {
        //this.$root.$emit('ChosenCompID', this.createID); 
        //this.$root.$on('ChosenCompID', this.updateCompID);
        bus.$on('ChosenCompID', this.updateCompID);
        this.propsTypes=this.$store.getters.getPropertiesTypes;
    },
    computed: {
       /* getchosenComponentID() {
            this.$root.$on('ChosenCompID', this.updateCompID);
            //alert("ojaa "+ this.$store.getters.getChosenComponentID);
            //return this.$store.getters.getChosenComponentID;
            return 1;
        }*/
    },
    methods: {
        updateCompID(IDdata) {
            var id = IDdata.id;
            alert("x ");
            alert("ojejku " + id);
            this.chosenID=id;
        },
        showProperties() {
            alert("abc");
        }
    }
}
</script>