// wwwroot/js/chat.js
$(function () {
    var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
    $("#sendButton").disabled = true;

    // Create a div when a message is received through the hub
    connection.on("ReceiveMessage", function (user, message) {
        var msg = document.createElement("div");
        msg.textContent = `${user}: ${message}`;
        document.getElementById("messagesList").appendChild(msg);
    });

    // Start the connection and enable the send button
    connection.start().then(function () {
        document.getElementById("sendButton").disabled = false;
    }).catch(function (err) {
        return console.error(err.toString());
    });

    // Send a message when the send button is clicked, with the user and message from the input fields
    document.getElementById("sendButton").addEventListener("click", function (event) {
        var user = document.getElementById("userInput").value;
        var message = document.getElementById("messageInput").value;
        connection.invoke("SendMessage", user, message).catch(function (err) {
            return console.error(err.toString());
        });
        event.preventDefault();
    });
});
