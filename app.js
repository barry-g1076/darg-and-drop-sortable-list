const sortableList = document.querySelectorAll(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("dragstart", () => {
    //Adding dragging class to item after a delay
    setTimeout(() =>item.classList.add("dragging"),0);
  });
    //Removing dragging class from item on dragend event
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortable = (e) => { 
    //Getting all items except currently dragging and making array of them
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
    
    //Finding the sibling after which the dragging item should be place
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
     console.log(nextSibling);
}

sortableList.addEventListener("dragover", initSortable);