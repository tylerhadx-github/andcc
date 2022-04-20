<template>
  <v-container>
   Blog
   <v-card v-for="i in items" :key="i" class="pt-2 mt-2" >
      <v-card-title>{{i.title}}</v-card-title>
      <v-card-text >
        <div v-html="i.content"></div>
      </v-card-text>

   </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Blog',

    data: () => ({
     items:[],
    }),
    mounted() {
      this.LoadData();
    },
    methods: {
      LoadData() {
        fetch('https://www.googleapis.com/blogger/v3/blogs/4963342882655020639/posts?key=AIzaSyCFULZoH1jEX2ij-MK_2_1t7l3Ed-1GEmE', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(json => {
            this.items = json.items;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>
