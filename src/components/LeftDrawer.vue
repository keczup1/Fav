<template>
    <div class="q-pa-md">
        <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="left" narrow-indicator>
            <q-tab name="tree" label="Tree" />
            <q-tab name="components" label="Components" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="tree">
            <div class="text-h6">Tree</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
          </q-tab-panel>
          <q-tab-panel name="components">
            <div class="text-h6">Components</div>
            <div id="v-model1" draggable="true">przeciunk mnie</div>


          </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>

/*            <div v-if="elements.list.eltype!=null">
              <div v-for="el in elements" v-bind:key="el.eltype">
              {{el.eltype}}
                <div v-for="el2 in el" v-bind:key="el2.eltype">
                  {{el2.eltype}}
                  <div v-for="el3 in el2" v-bind:key="el3.name">
                  {{el3.name}}
                  </div>
                </div>                
              </div>
            </div>
            <div v-else v-for="el4 in elements" v-bind:key="el4.eltype">
              {{el4.eltype}}
              <div v-for="el5 in elements.list" v-bind:key="el5.name">
                {{el5.name}}
              </div>
            </div>*/
export default {
  data () {
    return {
      tab: 'tree',
      /*elements: [
        {
          eltype: "titles",
          list: [{
              name: "Title 1"
            }, {
              name: "Title 2"
            }, {
              name: "Title 3"
            }
          ],
          eltype: "buttons",
          list: [{
            eltype: "basic buttons",
            list: [{
              name: "Button 1"
            }, {
              name: "Button 2"
            }, {
              name: "Button 3"
            }],
            eltype: "button dropdowns",
            list: [{
              name: "Button dropdown 1"
            }, {
              name: "Button dropdown 2"
            }
          ]
          }],
          eltype: "paragraphs",
          list: [{
            name: "Paragraph 1"
          }, {
            name: "Paragraph 2"
          }, {
            name: "Paragraph 3"
          }]
        }
      ]*/
    }
  }
}
</script>