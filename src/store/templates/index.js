export default {
  state: {
    chosenTemplateIndex: null,
    templates: [{
        id: '1',
        name: 'Blank',
        img: 'https://cdn.quasar.dev/img/mountains.jpg'
    }, {
        id: '2',
        name: 'Template 1',
        img: 'https://cdn.quasar.dev/img/mountains.jpg'
    }, {
        id: '3',
        name: 'Template 2',
        img: 'https://cdn.quasar.dev/img/mountains.jpg'
    }, {
        id: '4',
        name: 'Template 3',
        img: 'https://cdn.quasar.dev/img/mountains.jpg'
    }, {
        id: '5',
        name: 'Template 4',
        img: 'https://cdn.quasar.dev/img/mountains.jpg'
    }],
  },
  mutations: {
    updateChosenTemplateIndex: (state, index) => {
      state.chosenTemplateIndex = index;
    }  
  },
  getters: {
    getChosenTemplateIndex: state => {
      return state.chosenTemplateIndex;
    },
    getTemplateList: state => {
      return state.templates;
    }
  },
  actions: {
    chooseTemplate: function(context, chosenIndex) {
      this.commit("updateChosenTemplateIndex", chosenIndex);
    }
  }
}
