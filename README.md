![Discord](https://img.shields.io/discord/1118896540640100352?style=for-the-badge&label=%E2%AD%90%20ZBC's%20Finest%20%E2%AD%90&color=FFA500&link=https%3A%2F%2Fdiscord.gg%2FBJ9Swh7HrG)  
  🤝 [Join us](https://discord.gg/BJ9Swh7HrG)


# Instant Messaging App

Created as a part of Unit-Testing excersises in class.

## Team Members
* Drag-NDrop
* MachineMenace
* GoosLife
* Reapz
* Daniel
* Elexthito
* Simon
* PandaOnCaffeine
* Daniel
* Quan


# The plan
The multi-step plan is as follows:
| Step | Server                                   | Client          |  Main changes                                                                                |  Progress    | 
|------|------------------------------------------|-----------------|----------------------------------------------------------------------------------------------|--------------|
| 0.5  | Minimal Viable Product in MVC + SignalR  | cshtml View     | Demonstrate a working example of the SignalR protocol in chat-context                        |     ✅      |
| 1    | ASP.Net Core MVC                         | Angular         | Get a MVP up and running for group discussion and decision making                            |     🔵      |
| 2    | Entity Framework, T-SQL                  | Angular         | Enable database support, to save messages, etc. And see if we can make multiple chat rooms   |     🔵      |
| 3    | Direct Message                           | Angular         | Enable 1-1 confidential chats. Ensure nothing is logged or output to server console          |     🔵      |

## Approach

Our main focus is Test-driven Development. And this project is mainly being written, in order to practise that.

### Principles
We strive to maintain a set of principles... which we've yet to decide upon 🤔
It could be:
* SOLID
* Parts of SOLID like
  * Single Responsibility  - Pretty relevant in order to do proper unit testing
  * Open/Close
  * Liskov Substitution
  * Interface Segregation
  * Dependency Inversion

## Architecture

Intended to be a simple client/server architecture, with minimal fuzz.
We mainly use SignalR and HTTP connections.

# Step 1

We implement the chat UI functionality in Angular

## Step 1 - Technology Stack

* ASP.NET Core MVC
* SignalR
* Angular(MS)

## Step 1 - Topology

```mermaid
graph TD
    client1(Client 1) -.-> server[Server]
    server -.-> client1
    client1 --> server
    server --> client1

    client2(Client 2) -.-> server
    server -.-> client2
    client2 --> server
    server --> client2

    client3(Client 3) -.-> server
    server -.-> client3
    client3 --> server
    server --> client3

    client4(Client 4) -.-> server
    server -.-> client4
    client4 --> server
    server --> client4

    %% Legend

    L2[ ] -. "SignalR" .-> L3[ ]
    L4[ ] -->|"HTTP"| L5[ ]

    %% Styling
    classDef legendStyle fill:#f9f9f9,stroke:#333,stroke-width:0px,color:black;
    classDef client fill:#FFA500,stroke:#000000,stroke-width:2px,color:#FFFFFF;
    classDef server fill:#000000,stroke:#1E90FF,stroke-width:4px,color:#FFFFFF;

    class L1,L2,L3,L4,L5 legendStyle;
    class client1,client2,client3,client4 client;
    class server server;


```

# Plan for testing 

## Backend: MVC Unit tests

| Test Function         | Description                                                                              | 
|-----------------------|------------------------------------------------------------------------------------------|
| `SendMessages(str)`   | Tests the sending of messages function. From the server to the clients, via. SignalR     | 
| `CheckProfanity(str)` | Tests for profanity filtering. Before the server relays messages to the clients          | 
| `CheckSecurity(str)`  | Tests the security measures. Before the server relays messages to the clients            | 
| `LogMessage(str)`     | Tests message logging. Before the server relays messages to the clients                  | 


### Suggested..
* Test at en SignalR Hub kan oprettes korrekt
  * Opret SignalR Hub
* Test at en gruppe af hubs kan oprettes korrekt(f.eks. chatrooms)
  * Opret en gruppe af hubs
* Test at en hub kan tage imod beskeder
  * Send beskeder til en hub
* Test at beskeder bliver logget
  * Log beskeder
* Test en besked for profanity
  * Implementer profanity filter før serveren relayer beskeder
| 
| `HighlightOwnNameMsgs`| @-mention's support. Highlights messages containing the users own name |



## Frontend: Angular/JS Unit tests

| Test Function         | Description                                                            | 
|-----------------------|------------------------------------------------------------------------|
| `SendMessages(str)`   | Tests the sending of messages function.                                | 

## Integration Tests


## Usability Tests




# Inspiration
https://www.codeproject.com/Articles/5162436/Simple-SignalR-Server-and-Client-Applications-Demo


# Suggestions for next steps:

[Link to Step 2](Step2.md)  
[Link to Step 3](Step3.md)
