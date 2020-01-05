export default {
  state: {
    chosenTemplateIndex: '0',
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
    projects: [{
      name: 'name 1',
      published: true,
      lastmodif: '13.09.2019'
    }, {
      name: 'name 2',
      published: false,
      lastmodif: '15.10.2019'
    }, {
      name: 'name 3',
      published: false,
      lastmodif: '01.11.2019'
    }, {
      name: 'name 4',
      published: false,
      lastmodif: '02.01.2019'
    }, {
      name: 'name 5',
      published: false,
      lastmodif: '17.06.2019'
    }, {
      name: 'name 6',
      published: false,
      lastmodif: '12.06.2019'
    }],
  },
  mutations: {
    updateChosenIndex: (state, index) => {
      state.chosenTemplateIndex = index;
    }  
  },
  getters: {
    getChosenIndex: state => {
      return state.chosenTemplateIndex;
    },
    getTemplateList: state => {
      return state.templates;
    },
    getProjectList: state => {
      return state.projects;
    }
  },
  actions: {
    chooseProject: function(context, chosenIndex) {
      this.commit("updateChosenIndex", chosenIndex);
    }
  }
}
