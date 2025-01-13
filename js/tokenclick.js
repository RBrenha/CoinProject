document.getElementById('copy-btn').addEventListener('click', function () {
    const tokenText = document.getElementById('token-address').innerText;
    navigator.clipboard.writeText(tokenText).then(() => {
        alert('Token copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy token!');
    });
});