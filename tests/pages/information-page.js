
exports.InfoPage = class InfoPage {
    constructor(page){
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.zipCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
    }

    async fillInInfo(fname, lname, zip){
        await this.firstNameInput.fill(fname);
        await this.lastNameInput.fill(lname);
        await this.zipCodeInput.fill(zip);
        await this.continueButton.click();
    }
    
    getfirstNameInput(){
        return this.firstNameInput;
    }
}