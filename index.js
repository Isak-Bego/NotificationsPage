const markAsReadButton = document.getElementsByClassName("notification__markAsRead"); 
let notifications = document.getElementsByClassName("notification__container"); 
let notification__number = document.getElementsByClassName("notification__number"); 
markAsReadButton[0].addEventListener("click", markAsReadAll); 


function markAsReadAll(){
    for(let i = 0; i < notifications.length; i++){
        notifications[i].classList.remove("unread"); 
    }
    notification__number[0].innerHTML = 0; 
}

function markAsRead(notification){
    notification.classList.remove("unread"); 
    notification__number[0].innerHTML--; 
}
