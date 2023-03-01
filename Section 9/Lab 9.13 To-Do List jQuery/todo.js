const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function() {
   $("#addBtn").click(addBtnClick);

   $("#newItemText").keypress(function(event) {
      if (event.which === 13) {
         addBtnClick();
      }
   });

});

function addBtnClick() {
   let itemText = $("#newItemText").val().trim();

   if (itemText.length !== 0) {
      addItem(itemText);

      $("#newItemText").val("").focus();
   } 
}

function addItem(item) {      
   let $newItem = $(`<li><span>${item}</span></li>`);
   
   let $upButton = $(upButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      moveItem(index, index - 1); 
   });
   
   let $downButton = $(downButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      moveItem(index, index + 1); 
   });
      
   $doneButton = $(doneButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      removeItem(index);
   });

   $newItem.append($upButton, $downButton, $doneButton);
   $("ol").append($newItem);   
}

function moveItem(fromIndex, toIndex) {
   const curr = $("ol li").eq(fromIndex);
   
   if(fromIndex > toIndex)
   {
       if(toIndex !== -1)
       {
           $(curr).insertBefore($("ol li").eq(toIndex));
       }
   }
   else
   {
       if(fromIndex !== $("ol li").length - 1)
       {
           $(curr).insertAfter($("ol li").eq(toIndex));
       }
   }
}

function removeItem(index) {
   $("ol").children().eq(index).remove();
   
}