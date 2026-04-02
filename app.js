function bookService(service) {
  const phone = "91XXXXXXXXXX"; // 👉 replace with your number

  const message = `Hello, I found GodavariHomeFix. I need ${service} service in Rajahmundry/Kakinada`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
