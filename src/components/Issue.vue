<template>
  <div class="issue"
    v-bind:class="{ isSelected: isSelected }"
    v-on:click="isSelected ? remove(issue) :add(issue)"
    v-bind:style="{ color: issue.color, background: issue.background }"
    >
  <img :src="issue.cover" width="150" height="210" alt="">
    <div class="issue__name">{{ issue.name }}</div>
    <br>
    <div class="issue__price">
      DE {{ issue.price_de }} €
      <span v-if="issue.shipping_de===0">
        (Versand <strong>gratis</strong>)
      </span>
      <span v-else>
        (+ Versand {{ issue.shipping_de }} €)
      </span>
    </div>
    <div class="issue__price">
      EU Ausland {{ issue.price_eu }} €
      <span v-if="issue.shipping_de===0">
        (Versand <strong>gratis</strong>)
      </span>
      <span v-else>
        (+ Versand {{ issue.shipping_eu }} €)
      </span>

    </div>

    <div class="b" v-if="!isSelected">+</div>
    <div class="b" v-if="isSelected">-</div>
  </div>
</template>

<script>
export default {
  name: 'issue',
  props: ['issue', 'add', 'remove', 'selectedIssues'],
  data() {
    return {
      msg: '',
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
  margin: 10px 0;
  padding: 10px 10px 10px 180px;
  min-height: 140px;
  background: #efefef;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  opacity: 0.9;
}

.isSelected {
  opacity: 0.5;
}

.issue__name {
  width: 80%;
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

.b {
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

.issue:hover {
  opacity: 1;
}

.issue.isSelected:hover {
  opacity: 0.6;
}

.issue:hover .b {
  font-size: 80px;
  top: 20px;
  transition: all 0.2s ease-out;
}

</style>
