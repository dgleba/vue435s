onAddListItem: function() {
    if (!this.newItemTitle) return;
    var obj = JSON.parse(JSON.stringify(sampleListItem));
    obj._id = 'item:' + cuid();
    obj.title = this.newItemTitle;
    obj.list = this.currentListId;
    obj.createdAt = new Date().toISOString();
    obj.updatedAt = new Date().toISOString();
    db.put(obj).then( (data) => {
      obj._rev = data.rev;
      this.shoppingListItems.unshift(obj);
      this.newItemTitle = '';
    });
  },
  // when an shopping list item is checked, we just need
  // to keep the database in step
  onCheckListItem: function(id) {
    this.findUpdateDoc(this.shoppingListItems, id);
  }
}
});