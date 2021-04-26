import Vue from 'vue'

Vue.filter('titleize', val => _.startCase(val))
