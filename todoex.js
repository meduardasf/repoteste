var todos = ["list"];
window.setTimeout(function() {
   var input = prompt("What would you like to include?");
   
   while(input !== "quit"){
      if(input === "list") {
         console.log(todos);
        }  else if (input === "new") {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        }
    input
   }
console.log("you quit the app");
}, 500);