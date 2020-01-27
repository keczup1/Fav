//import DivDroptarget from 'C:/Users/Ja/fav/src/components/elements/DivDroptarget.vue'

export default {
    state: {
      chosenTemplateIndex: '0',
      children: [
        
      ],
      currentComponentdrop: '',
      currentProject: {}
    },
    mutations: {
      updateChosenIndex: (state, index) => {
        state.chosenTemplateIndex = index;
      },
      updateComponent: (state, component) => {
        state.children = component;
      },
      updateCurrentProject: (state, project) => {
        state.currentProject = project;
      }
    },
    getters: {
      getChosenIndex: state => {
        return state.chosenTemplateIndex;
      },
      getComponent: state => {
        return state.children;
      },
      getCurrentCompDrop: state => {
        return state.currentComponentdrop;
      },
      getCurrentProject: state => {
        return state.currentProject;
      }
    },
    actions: {
      chooseProject: function(context, chosenIndex) {
        this.commit("updateChosenIndex", chosenIndex);
      },
      chooseComponent: function(context, chosenComponent) {
        this.commit("updateComponent", chosenComponent);
      },
      currentProjectUpdate: function(context, chosenProject) {
        this.commit("updateCurrentProject", chosenProject);
      }
    }
  }
  