(function() {
  var app = angular.module('store', [])
  var gems = [
    {
      name: 'Gem1',
      price: 12.50,
      description: 'Gem1 description',
      specs: 'Spec Gem1',
      reviews: [
        {
          stars: 2,
          body: 'That gem is awesome',
          author: 'mauricio.coder@outlook.com'
        },
        {
          stars: 4,
          body: 'That gem rocks!!!!',
          author: 'bonetti.mauricio@outlook.com'
        }
      ],
      canSell: true,
      images: ['http://pre05.deviantart.net/e7cc/th/pre/f/2012/199/0/8/gem_png_by_doloresdevelde-d57oyqr.png',
      'https://www.ajsgem.com/sites/default/files/pink-sapphire-gem-madagascar-1.25cts.jpg']
    },
    {
      name: 'Gem2',
      price: 120.50,
      description: 'Gem2 description',
      specs: 'Spec Gem2',
      reviews: [],
      canSell: true,
      images: ['http://www.roadtripsavings.com/images/blue-gem.jpg',
      'http://planbee.biz/wp-content/uploads/2012/07/Blue-Diamond.png']
    },
  ]
  app.controller('StoreController', function() {
    this.products = gems
  })
  app.controller('TabController', function() {
    this.content = 0
    this.setContent = function(c) {
      this.content = c
    }
    this.isContent = function(c) {
      return this.content === c
    }
  })
  app.controller('ReviewController', function() {
    this.review = {}
    this.addReview = function(product) {
      product.reviews.push(this.review)
      this.review = {}
    }
  })

})()
