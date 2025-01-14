function copyTokenAddress() {
    const tokenInput = document.querySelector('.token-box input');
    tokenInput.select();
    document.execCommand('copy');
    alert('Token address copied to clipboard!');
}
