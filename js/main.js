const shortenButton = document.getElementById("shorten-button");
const longLinkInput = document.getElementById("long-link");
const shortLinkOutput = document.getElementById("short-link");

shortenButton.addEventListener("click", function() {
  const longLink = longLinkInput.value;
  const shortLink = `https://short.ly/${Math.random().toString(36).substring(7)}`;

  shortLinkOutput.innerHTML = shortLink;
});
