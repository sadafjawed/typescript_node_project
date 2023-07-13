//Make a list of five or more usernames called current_users.
//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ['ali', 'sadaf', 'mustafa', 'maryiam', 'arsalan'];
var new_user = ['ali', 'sahar', 'yumna', 'maryiam', 'raza'];
for (var i = 0; new_user.length > i; i++) {
    for (var j = 0; current_users.length > j; j++) {
        if (new_user[i].toLowerCase() == current_users[j].toLowerCase()) {
            console.log("the person will need to enter a new username.");
            break;
        }
        else if (new_user[i].toLowerCase() != current_users[j].toLowerCase()) {
            console.log(" the username is available.");
            break;
        }
    }
}
