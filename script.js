const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
];

// Get current date and use it to select a quote
function displayDailyQuote() {
    const date = new Date();
    const dayOfYear = date.getDate(); // Gets the day of the month (1-31)
    
    // Pick a quote based on the day of the year (modulo to ensure it loops)
    const quote = quotes[dayOfYear % quotes.length];
    
    // Display the selected quote in the #daily-quote element
    document.querySelector("#daily-quote").textContent = quote;
}

// Call the function to display the quote when the page loads
displayDailyQuote();

document.querySelector("#push").onclick=function(){
    if(document.querySelector("#newtask input").value.length==0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector("#tasks").innerHTML
        +=`
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#newtask input").value}

            </span>
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            
            </button>
        </div>
        `;
        var current_tasks=document.querySelectorAll(".delete");
        for(var i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove()

            }


        }
        var tasks=document.querySelectorAll(".task")
        for(var i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.classList.toggle("completed")
            }

        }


    }
    


}