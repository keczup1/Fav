export default {
    state: {
      chosenTemplateIndex: '0',
      currentProject: {},
      chosenComponentID: ''
    },
    mutations: {
      updateChosenIndex: (state, index) => {
        state.chosenTemplateIndex = index;
      },
      updateCurrentProject: (state, project) => {
        state.currentProject = project;
      },
      updateChosenComponentID: (state, id) => {
        state.chosenComponentID = id;
      }
    },
    getters: {
      getChosenIndex: state => {
        return state.chosenTemplateIndex;
      },
      getCurrentProject: state => {
        return state.currentProject;
      },
      getChosenComponentID: state => {
        return state.chosenComponentID;
      }
    },
    actions: {
      chooseProject: function(context, chosenIndex) {
        this.commit("updateChosenIndex", chosenIndex);
      },
      currentProjectUpdate: function(context, chosenProject) {
        this.commit("updateCurrentProject", chosenProject);
      },
      chooseComponentID: function(context, chosenCompID) {
        this.commit("updateChosenComponentID", chosenCompID);
      }
    }
  }
  