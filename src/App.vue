<template>
  <div id="app">



    <div class="prices">
      <div class="count">
        {{ count }}
      </div>
      DE {{ price_de }} € <small>(+ Versand {{ shipping_de }} €)</small><br>
      EU {{ price_eu }} € <small>(+ Versand {{ shipping_eu }} €)</small>
    </div>

    <div v-for="issue in issues">
      <issue :issue="issue" :add="add" :remove="remove" :selectedIssues="selectedIssues"></issue>
    </div>

    <input type="hidden" name="subscription_type" :value="selectedIssues" required>

    <div v-if="count===0" style="color:red">
      Kein Heft ausgewählt.
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
      shipping_de: 0,
      shipping_eu: 0,
    };
  },
  methods: {
    add(i) {
      this.selectedIssues.push(i.name);
      this.price_de = (parseFloat(this.price_de) + parseFloat(i.price_de)).toFixed(2);
      this.price_eu = (parseFloat(this.price_eu) + parseFloat(i.price_eu)).toFixed(2);
      this.shipping_de = (parseFloat(this.shipping_de) + parseFloat(i.shipping_de)).toFixed(2);
      this.shipping_eu = (parseFloat(this.shipping_eu) + parseFloat(i.shipping_eu)).toFixed(2);
    },
    remove(i) {
      this.selectedIssues = this.selectedIssues.filter(element => element !== i.name);
      this.price_de = (parseFloat(this.price_de) - parseFloat(i.price_de)).toFixed(2);
      this.price_eu = (parseFloat(this.price_eu) - parseFloat(i.price_eu)).toFixed(2);
      this.shipping_de = (parseFloat(this.shipping_de) - parseFloat(i.shipping_de)).toFixed(2);
      this.shipping_eu = (parseFloat(this.shipping_eu) - parseFloat(i.shipping_eu)).toFixed(2);
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
  font-size: 14px;
}

.count {
  background: #000;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  float: left;
  margin: 0 10px 0 0;
}

.prices {
  position: fixed;
  top: 66px;
  right: 5px;
  background: #fff;
  z-index: 2000;
  padding: 4px;
  width: 240px;
  text-align: right;
}
</style>
