export default {
    state: {
      chosenTemplateIndex: '0',
      currentComponentdrop: '',
      currentProject: {}
    },
    mutations: {
      updateChosenIndex: (state, index) => {
        state.chosenTemplateIndex = index;
      },
      updateCurrentProject: (state, project) => {
        state.currentProject = project;
      }
    },
    getters: {
      getChosenIndex: state => {
        return state.chosenTemplateIndex;
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
      currentProjectUpdate: function(context, chosenProject) {
        this.commit("updateCurrentProject", chosenProject);
      }
    }
  }
  