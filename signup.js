document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const response = await fetch("https://membership-backend.vercel.app/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, name, age })
    });

    const data = await response.json();

    if (response.ok) {
        alert(`Signup successful! Your Member ID: ${data.memberID}`);
        window.location.href = "login.html";
    } else {
        alert(`Error: ${data.error}`);
    }
});
