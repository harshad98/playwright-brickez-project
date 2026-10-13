import { Locator, Page } from "@playwright/test";


export class AddLoanPage {
    readonly page: Page;
    readonly loansLink: Locator
    readonly addLoanButton: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly mobileInput: Locator
    readonly loanTypeSelect: Locator
    readonly branchSelect: Locator
    readonly loanNumberInput: Locator
    readonly sanctionedAmountInput: Locator
    readonly sanctionedDateSelect: Locator
    readonly ltvInput: Locator
    readonly structureTypeSelect: Locator
    readonly noOfFloorsSelect: Locator
    readonly builtUpAreaInput: Locator
    readonly reviewButton: Locator
    readonly confirmAndAddLoanButton: Locator



    constructor(page: Page) {
        this.page = page;
        this.loansLink = page.locator('a[href="/customers-accounts"]');
        this.addLoanButton = page.getByRole('button', { name: 'Add Loan' });
        this.firstNameInput = page.locator('#custFirstName');
        this.lastNameInput = page.locator('#custLastName');
        this.mobileInput = page.locator('#custMobile');
        this.loanTypeSelect = page.locator('#loanTypeId');
        this.branchSelect = page.locator('#branchIFSC');
        this.loanNumberInput = page.locator('#loanNumber');
        this.sanctionedAmountInput = page.locator('#sanctionedAmount');
        this.sanctionedDateSelect = page.locator('#sanctionedDate');
        this.ltvInput = page.locator('#ltv');
        this.structureTypeSelect = page.locator('#structureType');
        this.noOfFloorsSelect = page.locator('#noOfFloors');
        this.builtUpAreaInput = page.locator('#builtUpArea');
        this.reviewButton = page.getByRole('button', { name: 'Review' });
        this.confirmAndAddLoanButton = page.getByRole('button', {
            name: 'Confirm & add loan',
            exact: true
        });
    }

    //action
    //navigate to loans link
    async NavigateToLoans(): Promise<void> {
        await this.loansLink.click();
    }

    //click on add loan button
    async clickAddLoan(): Promise<void> {
        await this.addLoanButton.click();
    }

    //enter firstname
    async enterFirstName(firstName: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
    }
    //enter lastname
    async enterLastName(lastName: string): Promise<void> {
        await this.lastNameInput.fill(lastName);
    }

    //enter mobile
    async enterMobile(mobile: string): Promise<void> {
        await this.mobileInput.fill(mobile);
    }

    //select loan type
    async selectLoanType(loanType: string): Promise<void> {
        await this.loanTypeSelect.selectOption({ label: loanType });
    }

    //select branch
    async selectBranch(branch: string): Promise<void> {
        await this.branchSelect.fill(branch);
        await this.page.getByRole('option', { name: branch, exact: true }).click();
    }

    //enter loan number
    async enterLoanNumber(loanNumber: string): Promise<void> {
        await this.loanNumberInput.fill(loanNumber);
    }

    //enter sanctioned amount
    async enterSanctionedAmount(sanctionedAmount: string): Promise<void> {
        await this.sanctionedAmountInput.fill(sanctionedAmount);
    }

    //enter sanctioned date
    async enterSanctionedDate(sanctionedDate: string): Promise<void> {
        await this.sanctionedDateSelect.fill(sanctionedDate);
    }

    //enter ltv
    async enterltv(ltv: string): Promise<void> {
        await this.ltvInput.fill(ltv);
    }


    //select structure type
    async selectStructureType(structureType: string): Promise<void> {
        await this.structureTypeSelect.selectOption({ label: structureType });
    }

    //select no of floors
    async selectNoOfFloors(noOfFloors: string): Promise<void> {
        await this.noOfFloorsSelect.selectOption({ label: noOfFloors });
    }

    //enter built up area
    async enterBuiltUpArea(builtUpArea: string): Promise<void> {
        await this.builtUpAreaInput.fill(builtUpArea);
    }

    async clickOnReview(): Promise<void> {
        await this.reviewButton.click();

        await this.page.getByRole('button', {
            name: 'Confirm & add loan',
            exact: true
        }).waitFor({ state: 'visible' });
    }

    async clickConfirmAndAddLoanButton(): Promise<void> {
        await this.confirmAndAddLoanButton.click();
    }

    //create a loan
    async addLoan(firstName: string,
        lastName: string,
        mobile: string,
        loanType: string,
        branch: string,
        loanNumber: string,
        sanctionedAmount: string,
        sanctionedDate: string,
        ltv: string,
        structureType: string,
        noOfFloors: string,
        builtUpArea: string

    ): Promise<void> {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterMobile(mobile);
        await this.selectLoanType(loanType);
        await this.selectBranch(branch);
        await this.enterLoanNumber(loanNumber);
        await this.enterSanctionedAmount(sanctionedAmount);
        await this.enterSanctionedDate(sanctionedDate);
        await this.enterltv(ltv);
        await this.selectStructureType(structureType);
        await this.selectNoOfFloors(noOfFloors);
        await this.enterBuiltUpArea(builtUpArea);
        await this.clickOnReview();
        await this.clickConfirmAndAddLoanButton();
    }


}