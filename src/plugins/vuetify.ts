// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// Components
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  // https://next.vuetifyjs.com/features/global-configuration/
  // defaults: {
  //   global: {
  //     rounded: 'sm',
  //   },
  //   VAppBar: {
  //     flat: true,
  //   },
  //   VBtn: {
  //     color: 'primary',
  //     height: 44,
  //   },
  //   VBtnAlt: {
  //     color: 'primary',
  //     height: 48,
  //     variant: 'text',
  //   },
  //   VSheet: {
  //     color: '#212121',
  //   },
  // },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#1697f6',
        }
      }
    }
  },
})
