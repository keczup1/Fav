import DivDroptarget from 'C:/Users/Ja/fav/src/components/elements/DivDroptarget.vue'

export default {
    state: {
      chosenTemplateIndex: '0',
      children: [
        DivDroptarget
      ]     
    },
    mutations: {
      updateChosenIndex: (state, index) => {
        state.chosenTemplateIndex = index;
      },
      updateComponent: (state, component) => {
        state.children = component;
      }
    },
    getters: {
      getChosenIndex: state => {
        return state.chosenTemplateIndex;
      },
      getComponent: state => {
        return state.children;
      },
    },
    actions: {
      chooseProject: function(context, chosenIndex) {
        this.commit("updateChosenIndex", chosenIndex);
      },
      chooseComponent: function(context, chosenComponent) {
        this.commit("updateComponent", chosenComponent);
      }
    }
  }
  