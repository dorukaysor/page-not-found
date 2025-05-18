// Parallax Code
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

// Decode 'q' parameter from URL
function getDecodedURL() {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("re");
  if (!encoded) return null;
  try {
    return atob(encoded);
  } catch (e) {
    console.error("Invalid Base64", e);
    return null;
  }
}

document.getElementById("i-dare-btn").addEventListener("click", () => {
  window.history.back();
});
