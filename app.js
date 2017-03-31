(function () {
  'use strict'

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyController = this;

    buyController.toBuyList = ShoppingListCheckOffService.getToBuyList();

    buyController.bought = function (index) {
      ShoppingListCheckOffService.bought(index);
    };

    }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtController = this;

  boughtController.buyList = ShoppingListCheckOffService.getBuyList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      {
        name: "Cookies",
        quantity: "10"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Nesquick",
        quantity: "3"
      },
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Juice",
        quantity: "1"
      }
    ];

    var buyList = [];

    service.bought = function (index) {
      buyList.push(toBuyList[index]);
      var removedItem = toBuyList.splice(index, 1);
    };

    service.getToBuyList = function () {
      return toBuyList;
    };

    service.getBuyList = function () {
      return buyList;
    };
  }

})();
