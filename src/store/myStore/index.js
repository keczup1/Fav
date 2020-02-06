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
      componentList: [{
        id: 'adg',
        templateName: 'Header1',
        name: 'My header 1',
        properties: {
          text: "My first web page!",
          //myclass: "text-h4 q-pa-md text-center"
          }          
        }, {
        id: 'fgh',
        templateName: 'Paragraph1',
        name: 'My first paragraph',
        properties: {
          text: "Marvelous example of created page.",
          //myclass: "q-pa-md"  
          }            
        }, {
        id: 'abc',
        templateName: 'Button1',
        name: 'Some button',
        properties: {
          text: "Click!",
          color: "primary",
          size: "md",
          //myclass: "q-pa-md",
          //mystyle: "display: inline-block; float: right;",
          //mycompclass: "q-pa-md",
          //mycompstyle: ""
          }
        }]
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
    }],
    propertiesResolve: [{
      color: 'enum',
      enumList: ['primary', 'secondary', 'red',
        'pink', 'purple', 'deep-purple', 'indigo',
        'blue', 'cyan', 'teal', 'green', 'light-green',
        'lime', 'yellow', 'amber', 'orange', 'deep-orange',
        'brown', 'grey', 'blue-grey']
    }, {
      text_style: 'enum',
      enumList: ['text-h2', 'text-h3', 'text-h4', 'text-h5', 
        'text-h6', 'text-subtitle1', 'text-subtitle2', 
        'text-body1', 'text-body2', 'text-caption', 'text-overline'] 
    }, {
      text: 'string'
    }, {
      padding: 'enum',
      enumList: ['q-pa-sm', 'q-pa-md', 'p-pa-lg', 'q-px-sm', 'q-px-md',
        'q-px-lg', 'q-py-sm', 'q-py-md', 'q-py-lg']
    }, {
      size: 'enum',
      enumList: ['xs', 'sm', 'md', 'lg', 'xl']
    }, {
      text_align: 'enum',
      enumList: ['text-right', 'text-left', 'text-center']
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
    },
    getPropertiesTypes: state => {
      return state.propertiesResolve;
    }
  },
  actions: {
    
  }
}
