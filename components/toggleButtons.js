const ToggleButtons = ( 'toggle-buttons', {
  props: [ '__buttons' ],
  data: function () {
      return {
        store: this.$root.$store,
        route: this.$root.$route,
        val: undefined
      }
  },
  watch: {
    val: function () {
        //var __name = this.val === 0 ? 'about' : 'details'
        //this.$root.$router.push ( { name: __name } )
    },
    routeName: function ( newVal, oldVal ) {
      console.info ( oldVal + " -> " + newVal )
    }
  },
  computed: {
    routeName: function () { console.log ( this.$route.name ); return this.$root.$route.name },
    toggleButtonsVisibility: function () {
      return this.$root.$store.getters.sectionIsReady
    },
    toggle_exclusive: function () {
      console.info ( this.route.name )
      return this.routeName === 'about' ? 0 :
                  ( this.routeName === 'details' || this.routeName === 'section' ? 1 : null )
    }
  },
  template: `
        <v-btn-toggle dark v-if = "toggleButtonsVisibility"
                      v-model = "val"
                      class="py-2">
              <v-btn  outline  replace = true
                      @click = "router.push ( { name: 'about' } )">
                  <v-icon>description</v-icon>
              </v-btn>
              <v-btn  outline  replace = true
                      @click = "router.push ( { name: 'details' } )">
                  <v-icon>dashboard</v-icon>
              </v-btn>
        </v-btn-toggle>
  `,
  mounted: function () {
      this.val = this.toggle_exclusive
  },
  methods: {

  }
})
