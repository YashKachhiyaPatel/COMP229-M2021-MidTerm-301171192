//IIFE -- Immediately Invoked Function Expression
"use strict";

// Yash Kachhiyapatel (301171192) - 18-June-2021 -MidTerm Exam 

(function(){

    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/books';
        }       
      });
    }

    function Start():void
    {
        console.log("App Started");
        
        confirmDelete();  
    }

    window.addEventListener("load", Start);

})();

