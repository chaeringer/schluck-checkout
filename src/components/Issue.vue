<template>
  <div class="issue" 
    v-bind:class="{ isSelected: isSelected }" 
    v-on:click="isSelected ? remove(issue) :add(issue)"
    v-bind:style="{ color: issue.color, background: issue.background }"
    >
  <img :src="issue.cover" width="150" height="210" alt="">
    <div class="issue__name">{{ issue.name }}</div>
    <br>
    <div class="issue__price">D {{ issue.price_de }} EUR</div>
    <div class="issue__price">EU Ausland {{ issue.price_eu }} EUR</div>

    <button v-if="!isSelected">+</button>
    <button v-if="isSelected">-</button>
  </div>
</template>

<script>
export default {
  name: 'issue',
  props: ['issue', 'add', 'remove', 'selectedIssues'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    isSelected() {
      return this.selectedIssues.indexOf(this.issue.name) !== -1;
    },
  },
};
</script>


<style scoped>

.issue {
  width: 600px;
  max-width: calc(100% - 196px);
  margin: 10px;
  padding: 10px 10px 10px 160px;  
  height: 140px;
  background: #efefef;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
}

.isSelected {
  opacity: 0.6;
}

.issue__name {
  width: 50%; 
  font-weight: bold;
  font-size: 18px;
}

img {
  display: block;
  margin: 0 10px 0 0;

  position: absolute;
  left: -6px;
  top: 20px;
  box-shadow: 7px 7px 7px rgba(0,0,0,0.1);
  transform: rotate(-15deg);
}

button {
  border: none;
  background: transparent;
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  right: 20px;
  top: 40px;
  transition: all 0.2s ease-out;
  color: #fff;
}

.issue:hover button {
  font-size: 80px;
  top: 20px;
  transition: all 0.2s ease-out;
}

</style>
