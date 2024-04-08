
class SimpleMembership {
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }
}
class StandardMembership {
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }
}
class PremiumMembership {
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }
}
class MemberFactory {
    static list = {
        simple: new SimpleMembership(800, 6, 'simple'),
        standard: new StandardMembership(2000, 8, 'standard'),
        premium: new PremiumMembership(6000, 5, 'premium')
    }
    create(firstName, type) {
        const membership = MemberFactory.list[type];
        if (membership) {
            return { firstName, ...membership };
        } else {
            throw new Error('Oooooops ');
        }
    }
}
const factory = new MemberFactory();
const users = [];

document.getElementById('btn').addEventListener("click", function () {
    const username = document.getElementById("name").value;
    const membershipType = document.getElementById("membershipType").value;
    const user = factory.create(username, membershipType);
    document.getElementById('usersList').style.transform = 'translate(800px,60px)'
    console.log(user);
    try {
        const newUser = factory.create(username, membershipType);
        users.push(newUser);
        displayUsers(users);
    } catch (error) {
        alert(error.message);
    }
});

function displayUsers(usersToDisplay) {
    const usersList = document.getElementById('info');

    usersToDisplay.forEach(user => {
        usersList.innerHTML = `<p>${user.firstName} - ${user.type} Membership ( ${user.cost}:$, Duration: ${user.month} months)</p>`;
    });

}

displayUsers(users);




