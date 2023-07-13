// once you press MArk as read,  if New messages ==true , remove toggle function and change color to white


// messages with id new should have a red dot wheere the text is

// Notification should increase according to the id of numbers with NEwmessages

//when you click on message it takes you to your profilr

let count = 0;

// 
// 
// 
const markAll = document.getElementById("mark-allmessages");
 const White= "hsl(0, 0%, 100%)";

const AlRead =document.getElementById("already-read");
const list =document.querySelectorAll("li");

const NotificationNum = document.getElementById("notifications-num")

const newMsg = document.querySelectorAll(".new")



   function clearCount(){
if(newMsg){
    NotificationNum.textContent= count
}
   }
count= newMsg.length


console.log( "Count:",count)





markAll.addEventListener("click", function (){
  list.forEach((e)=>{
    e.style.backgroundColor=White
  });
  count=0;
  clearCount()
})