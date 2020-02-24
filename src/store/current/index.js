export default {
    state: {
      chosenTemplateIndex: '0',
      currentProject: {},
      chosenComponentID: '',
      divDroptargetID: ''
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
      },
      updateDivDroptargetID: (state, id) => {
        state.divDroptargetID = id;
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
      },
      getCurrentDivDroptargetID: state => {
        return state.divDroptargetID;
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
      },
      updateDroptargetID: function(context, DivDropID) {
        this.commit("updateDivDroptargetID", DivDropID);
      }
    }
  }
  