const messages = [
  "I was thinking about Valentine’s Day… 💌",
  "And about how lucky I am to have YOU 🥺💗",
  "You make my days brighter 🌸",
  "My heart calmer 💓",
  "And my smile bigger every time 😚",
  "So I wanted to ask you something special… 💖",
  "Will you be my Valentine, my pookieee? 💘🥹"
];

let index = 0;

function nextMessage() {
  const title = document.getElementById("title");
  const message = document.getElementById("message");

  if (index < messages.length) {
    message.textContent = messages[index];
    index++;
  } else {
    document.body.innerHTML = `
      <div style="text-align:center;">
        <h1 style="color:#ff4d88;">Now U are my Valentine I'm soo Happy yeyeyeye 💝</h1>
        <p>
          You are my favorite person,<br>
          today and always 🧸💞
        </p>
        <footer style="margin-top:20px;color:#ff4d88;">
          Made with endless love for my pookieee 💕
        </footer>
      </div>
    `;
  }
}
