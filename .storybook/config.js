import { configure, addParameters } from '@storybook/vue'
import Vue from 'vue'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

addParameters({
  options: {
    hierarchyRootSeparator: / - /
  }
})

// Require all the .stories.js files from all components
const req = require.context('../src/components', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach((filePath) => {
    const componentName = filePath.replace(/^.+\/([^/]+)\/*.stories.js/, '$1')
    const component = req(filePath)
    Vue.component(`lg-aa-${componentName.toLocaleLowerCase()}`, component)
    return component
  })
}

configure(loadStories, module)