//Storage Controller

//Item Controller
const ItemCtrl = (function() {
  //Item Contrstur

  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const data = {
    items: [
      {
        id: 0,
        name: "steak Dinner",
        calories: 1200
      },
      {
        id: 1,
        name: "Food two",
        calories: 700
      },
      {
        id: 2,
        name: "more food",
        calories: 400
      }
    ],
    currentItem: null,
    totalCalories: 0
  };

  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  };
})();

//UI Controller

const UICtrl = (function() {
  return {
    populateItemList: function(items) {
      let html = "";
      items.forEach(item => {
        html += `<li id-"item-${item.id} class="collection-item">
       <strong>${item.name}</strong><em>${item.calories} Calories</em>
       <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"> </a>
       </li>`;
      });
      console.log(html);
      document.querySelector("#item-list").innerHTML = html;
    }
  };
})();

//App Controller

const App = (function(itemCtrl, UICtrl) {
  return {
    init: function() {
      const items = ItemCtrl.getItems();
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

App.init();
