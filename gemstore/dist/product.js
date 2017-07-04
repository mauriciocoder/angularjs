(function() {
  var app = angular.module('product', [])
  app.directive('gsProductDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'gs-product-description.html'
    }
  })
  app.directive('gsProductSpecs', function() {
    return {
      restricts: 'A',
      templateUrl: 'gs-product-specs.html'
    }
  })
  app.directive('gsGallery', function() {
    return {
      restricts: 'E',
      templateUrl: 'gs-gallery.html'
    }
  })
})()
