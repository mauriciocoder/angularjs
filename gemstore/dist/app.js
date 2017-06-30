(function() {
  var app = angular.module('store', [])
  app.controller('StoreController', function() {
    this.product = {name: 'Product 1', price: 13.50}
  })
})()
