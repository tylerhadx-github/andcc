<template>
  <v-container>
    <v-row>
    <v-carousel v-model="model" cycle
      hide-delimiter-background
    show-arrows-on-hover>
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" md="6" lg="3">
      <v-card>
        <v-card-title>St. Mary's</v-card-title>
        <v-card-text>
          <div>
            Mass Times
          </div>
          <div>
            Address
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="6" lg="3">
      <v-card>
        <v-card-title>Sacred Heart</v-card-title>
        <v-card-text>
           <div>
            Mass Times
          </div>
          <div>
            Address
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="6" lg="3">
      <v-card>
        <v-card-title>St. Bonaventure's</v-card-title>
        <v-card-text>
          <div>
            Mass Times
          </div>
          <div>
            Address
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="6" lg="3">
      <v-card>
        <v-card-title>Church of St. Bernard</v-card-title>
        <v-card-text>
 <div>
            Mass Times
          </div>
          <div>
            Address
          </div>        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
