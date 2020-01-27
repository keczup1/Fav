export default {
  state: {
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
      id: 'asdfhj',
      name: 'name 1',
      published: true,
      lastmodif: '13.09.2019',
      structure: [{
        name: 'Home',
        componentList: [{
          id: 'adg',
          templateName: 'Header1',
          properties: {
            label: "Sample header",
            myclass: "text-h4 q-pa-md text-center"
            }          
          }, {
          id: 'fgh',
          templateName: 'Paragraph1',
          properties: {
            text: "Template paragraph to show you how it looks like. We are here to help you create your website. Enjoy!",
            myclass: "q-pa-md"  
            }            
          }, {
          id: 'abc',
          templateName: 'Button1',
          properties: {
            label: "Button",
            color: "primary",
            size: "md",
            myclass: "q-pa-md",
            mystyle: "display: inline-block; float: right;",
            mycompclass: "q-pa-md",
            mycompstyle: ""
            }
          }]
        }, {
        name: 'Contact',
        componentList: []
        }
      ]
    }, {
      id: 'twhfbsdif',
      name: 'name 2',
      published: false,
      lastmodif: '15.10.2019'
    }, {
      id: 'tefjhzxcnpb',
      name: 'name 3',
      published: false,
      lastmodif: '01.11.2019'
    }, {
      id: 'ewjvjxovg',
      name: 'name 4',
      published: false,
      lastmodif: '02.01.2019'
    }, {
      id: 'gdusebfvkx',
      name: 'name 5',
      published: false,
      lastmodif: '17.06.2019'
    }, {
      id: 'dfbhcvyo',
      name: 'name 6',
      published: false,
      lastmodif: '12.06.2019'
    }],
    components: [{
      src: 'statics/header1.png',
      id_comp: 'h1',
      name: 'Header 1',
      templateName: 'Header1'
    }, {
      src: 'statics/paragraph1.png',
      id_comp: 'p1',
      name: 'Pragraph 1',
      templateName: 'Paragraph1'
    }, {
      src: 'statics/button1.png',
      id_comp: 'b1',
      name: 'Button 1',
      templateName: 'Button1'
    }]
  },
  mutations: {

  },
  getters: {
    getTemplateList: state => {
      return state.templates;
    },
    getProjectList: state => {
      return state.projects;
    },
    getComponents: state => {
      return state.components;
    },
    getProjectByID: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    }
  },
  actions: {
    
  }
}
