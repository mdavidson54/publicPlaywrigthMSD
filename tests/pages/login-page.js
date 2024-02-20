
exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;
        this.userNameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async login(user, pass){
        await this.userNameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

}