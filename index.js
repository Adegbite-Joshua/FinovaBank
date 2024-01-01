const set_nav_bar = () => {
    document.getElementById('nav_bar').innerHTML = `<div class="d-flex p-2 justify-content-between position-sticky top-0"
                                                    style="height: 100px; z-index: 999999; background: gray;">
                                                    <div class="d-flex flex-sm-col justify-content-center align-items-center gap-3" style="height: 60px;">
                                                        <img class="h-100" src="assets/icon.png" alt="Finova Bank Logo">
                                                        <p>Finova Bank</p>
                                                    </div>
                                                    <div class="d-flex flex-sm-col justify-content-center align-items-center gap-3">
                                                        <a href="bankSignUpPage.html" class="text-decoration-none">Create Account</a>
                                                        <a href="bankSignInPage.html" class="text-decoration-none">Log In</a>
                                                        <a href="aboutUs.html" class="text-decoration-none">About Us</a>
                                                    </div>
                                                </div>`
}

window.onload = set_nav_bar()