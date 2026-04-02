function bookService(service) {
  document.getElementById("service").value = service;
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

async function submitForm(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    location: document.getElementById("location").value,
    service: document.getElementById("service").value
  };

  // Save to backend (local)
  await fetch("http://localhost:5000/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  // WhatsApp
  const msg = `New Booking:%0A${data.name}%0A${data.phone}%0A${data.service}`;
  window.open(`https://wa.me/917780178447?text=${msg}`);

  alert("Booking submitted!");
}
