<template>
  <div id="app">

    <div class="count" v-if="count">
      {{ count }}
    </div>

    <div class="prices" v-if="price_de">
      {{ price_de }} EUR (Preis EU Ausland {{ price_eu }} EUR)
    </div>

    <div v-for="issue in issues">
      <issue :issue="issue" :add="add" :remove="remove" :selectedIssues="selectedIssues"></issue>
    </div>

    <div>
      {{ selectedIssues}}
    </div>
  </div>
</template>
<script>

import issue from './components/Issue';

export default {
  name: 'app',
  components: {
    issue,
  },
  data() {
    return {
      issues: window.issues,
      selectedIssues: [],
      price_de: 0,
      price_eu: 0,
    };
  },
  methods: {
    add(i) {
      this.selectedIssues.push(i.name);
      this.price_de += i.price_de;
      this.price_eu += i.price_eu;
    },
    remove(i) {
      this.selectedIssues = this.selectedIssues.filter(element => element !== i.name);
      this.price_de -= i.price_de;
      this.price_eu -= i.price_eu;
    },
  },
  computed: {
    count() {
      return this.selectedIssues.length;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 80px 0 0 0; 
}

.count {
  background: #000;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.prices {
  position: fixed;
  top: 28px;
  left: 80px;
  background: #fff;
  z-index: 10;
}
</style>
