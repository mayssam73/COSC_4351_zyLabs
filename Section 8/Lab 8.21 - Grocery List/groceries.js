let groceryList = [];

window.addEventListener("DOMContentLoaded", function() {
   document.querySelector("#addBtn").addEventListener("click", addBtnClick);
   document.querySelector("#clearBtn").addEventListener("click", clearBtnClick);

   groceryList = loadList();
  
   if (groceryList.length > 0) {
      for (let item of groceryList) {
         showItem(item);
      } 
   }
   else {
      enableClearButton(false);
   }     
});

function enableClearButton(enabled) {
   document.querySelector("#clearBtn").disabled = !enabled;
}

function showItem(item) {
   let list = document.querySelector("ol");
   list.innerHTML += `<li>${item}</li>`;     
}

function addBtnClick() {
   let itemTextInput = document.querySelector("#item");
   let item = itemTextInput.value.trim();
   if (item.length > 0) {
      enableClearButton(true);
      showItem(item);
      groceryList.push(item);

      saveList(groceryList);
   }

   itemTextInput.value = '';
}

function clearBtnClick() {
   enableClearButton(false);
   groceryList = [];
   let list = document.querySelector("ol");
   list.innerHTML = "";

   clearList();
}

function loadList() {
   if(localStorage.getItem("list") == null) {
      return [];
   }
   let list = localStorage.getItem("list").split(",");
   return list;
   
}

function saveList(groceryList) {
   let list = groceryList.join(",");
   localStorage.setItem("list", list);
  
}

function clearList() {
   localStorage.removeItem("list");
   
}