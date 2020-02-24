<template>
    <div id="published">
        <span slot="right" class="float-right q-pa-md">
            <router-link to="/home"><q-btn round color="primary " icon="home" @click="newproject = true"/></router-link>
        </span>
    </div>
</template>

<script>
import addComponent from '../scripts/addComponent'
import Vue from 'vue'
import DComponent from '../components/elements/DComponent.vue'
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.renderProject();
    },
    computed: {
        tempProject() {
            return this.$store.getters.getProjectByID(this.$route.params.id)
        } 
    },
    methods: {
        renderProject() {
            var html = '<div>try</div>';
            var componentArray = this.tempProject.componentList;
            //alert (JSON.stringify(componentArray));
            for (var i = 0; i < componentArray.length; i++) {        
                //this.addDroptarget();
                //var droptargetID = this.newDDID;
                //alert(JSON.stringify(componentArray[i]));
                var id=componentArray[i].id;
                var name=componentArray[i].templateName;
                //var props=componentArray[i].properties;
                addComponent('published', 'div', id, html);
                //this.createElement({'id':id, 'name':name, 'props':props});
                this.createElement({'id':id, 'name':name});
            }
        },
        createElement(data) {
            while((document.getElementById(data.id)==null) || data.id==null){
                return;
            }
            var id=data.id;
            var compName=data.name;
            //var properties = data.props;
            //alert("my properties "+JSON.stringify(properties));
            var ComponentCtor = Vue.extend(DComponent);
            var componentInstance = new ComponentCtor({
            //propsData: {properties: properties, path: '', id: id},
            propsData: {path: '', id: id},
            /*computed: {
                properties: function() {
                    return properties;
                }
            } */
            });
            componentInstance.path=this.resolvePath(compName);
            componentInstance.$mount('#'+id);

        },
        resolvePath(compname){
            compname += '.vue';
            var path=compname;
            return path; 
        },
    },
    
}
</script>