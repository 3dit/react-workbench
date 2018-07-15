
//Generic List Class,
//only cares about data

class List {
  
    constructor() {
      this.index = 0;//used for sequential index which is kept sequential through item deletion
      this.uid = 0;//Unique id, can be used for React render key
      this.list = [];
    }
  
    getItems() {
      return this.list;
    }
    
    getList() {
      return this.getItems();
    }
  
    //return a function which returns our current items
    getItemsAction() {
        return () => { return this.getItems(); };
    }
  
    addItem(name) {
      this.list.push({ id:this.index++, uid:this.uid++, name: name });
    }
  
    deleteItem(targetItem) {
      this.deleteItemById(targetItem.id);
    }
  
    deleteItemById(id) {
      let newList = this.list.filter(function(item) { 
        return item.id !== id
      });
  
      this.index = 0;
      for(let i=0; i < newList.length; i++) {
        newList[i].id = this.index++;
      }
  
      this.list = newList;
    }
  
    getItemCount() {
      //return this.index
      return this.list.length;
    }
  }
  
  export default List;
  