const set_nav_bar = () => {
    const navBarElement = document.getElementById('nav_bar');
    
    if (!navBarElement) {
        return;
    }

    navBarElement.innerHTML = `<div class="d-flex p-2 justify-content-between position-sticky top-0"
                                style="height: 100px; z-index: 999999; background: gray;">
                                <div class="d-flex flex-sm-col justify-content-center align-items-center gap-3" style="height: 60px;">
                                    <img class="h-100" src="assets/icon.png" alt="Finova Bank Logo">
                                    <p>Finova Bank</p>
                                </div>
                                <div class='justify-content-center align-items-center h-full position-relative'>
                                    <div class="responsive hidden d-sm-flex flex-sm-col my-auto justify-content-center align-items-center gap-3">
                                        <a href="bankSignUpPage.html" class="text-decoration-none">Create Account</a>
                                        <a href="bankSignInPage.html" class="text-decoration-none">Log In</a>
                                        <a href="aboutUs.html" class="text-decoration-none">About Us</a>
                                    </div>
                                </div>
                            </div>`;
}

window.onload = set_nav_bar;


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

if (document.getElementById('showToast')?.addEventListener) {
    document.getElementById('showToast')?.addEventListener('click', showToast);
}
