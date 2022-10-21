const Notes = document.getElementById('Notes')
const Paint = document.getElementById('Paint')
const Submit = document.getElementById('Submit')
const UsernameInput = document.getElementById('Username')
const Username = document.getElementById('myUsername')
const Num = document.getElementById('Number')
let username;
let GuestUsername;
let changed = 0

Num.innerHTML = Math.round(Math.random() * 1000) + 1

Notes.onclick = function() {
    alert("Opening Notes..");
}
Paint.onclick = function() {
    alert("Opening Paint..");
}
Submit.onclick = function() {
    username = UsernameInput.value;
    Username.innerHTML = username;
    console.log("Username: " + username)
}