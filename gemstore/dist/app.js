(function() {
  var app = angular.module('store', [])
  var gems = [
    {
      name: 'Gem1',
      price: 12.50,
      description: 'Gem1 description',
      canSell: true
    },
    {
      name: 'Gem2',
      price: 120.50,
      description: 'Gem2 description',
      canSell: false
    },
  ]
  app.controller('StoreController', function() {
    this.products = gems
  })
})()
