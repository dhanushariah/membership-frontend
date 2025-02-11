const API_URL = "https://membership-backend.vercel.app"; // Change this to your backend URL

async function signup() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, name, age }),
    });

    const data = await response.json();
    if (response.ok) {
        alert("Signup successful! Your Member ID: " + data.memberID);
        showDashboard(name, age, data.memberID);
    } else {
        alert(data.error);
    }
}

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert("Login successful!");
        showDashboard(data.user.name, data.user.age, data.user.memberID);
    } else {
        alert(data.error);
    }
}

function showDashboard(name, age, memberID) {
    document.getElementById("form").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("memberName").innerText = name;
    document.getElementById("memberAge").innerText = age;
    document.getElementById("memberID").innerText = memberID;
}

function logout() {
    document.getElementById("form").classList.remove("hidden");
    document.getElementById("dashboard").classList.add("hidden");
}

function contactAdmin() {
    alert("Contact Admin: admin@example.com");
}
