

exports.AboutPage = class AboutPage {
    constructor(page){
        this.page = page;
        this.tryItButton = page.getByRole('button', { name: 'Try it free' }).first();
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
    }
}