document.addEventListener("DOMContentLoaded", async function () {
    const username = localStorage.getItem("username");
    if (!username) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    const response = await fetch(`https://membership-backend.vercel.app/dashboard/${username}`);
    const data = await response.json();

    if (response.ok) {
        document.getElementById("memberName").textContent = `Name: ${data.name}`;
        document.getElementById("memberAge").textContent = `Age: ${data.age}`;
        document.getElementById("memberID").textContent = `Member ID: ${data.memberID}`;
    } else {
        alert(`Error: ${data.error}`);
        window.location.href = "login.html";
    }
});
