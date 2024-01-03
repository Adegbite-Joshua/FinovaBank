const showToast = () => {
    const toast = document.getElementById('toast');

    toast.style.opacity = 1;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.opacity = 0;
    }, 2000);

    setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
};



const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.target?.innerText)
        .then(() => {
            showToast()
        })
        .catch((err) => {
            console.error('Unable to copy text to clipboard', err);
        });
}


