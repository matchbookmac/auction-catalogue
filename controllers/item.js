Auction.ItemController = Ember.ObjectController.extend({
  needs: ["lot"],
  clicked: false,
  foo: "foo",
  actions: {
    itemClicked: function () {
      // this.setEach('clicked', false);
      var lot = this.get('controllers.lot.model');
      // lot.get('model').get('items').forEach(function(item) {
      //   item.set('clicked', false);
      // });
      // this.set('clicked', true);
      // lot.set('image', this.get('image'));
      // debugger;
      if (this.clicked) {
        this.set('clicked', false);
        lot.set("image", "")
        // lot.set("lastItem", this.id)
      } else {
        this.set('clicked', true);
        lot.set("image", this.get("image"))
        // lot.set("currentItem", this.id)
      }
    }
  },
});
