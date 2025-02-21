document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://membership-backend.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("username", username);
        window.location.href = "dashboard.html";
    } else {
        alert(`Error: ${data.error}`);
    }
});
