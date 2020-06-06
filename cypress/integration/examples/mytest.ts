//@ts-check

describe('My first cypress test', () => {

    it('Navigate to our friend', () => {
        //let myString: unknown = "https://www.marktplaats.nl";
        //cy.visit(myString);
        //cy.get('#gdpr-consent-accept-button').click();
        //cy.get('#email').type("motersen@hotmail.com");
        //cy.get('#password').type("Ladidie01!");
        //cy.get('.submit').click();
        //cy.xpath('//span[@class="close mp-svg-close"]').click();
        //cy.get('#google-signin-button').click();
        
        myString = "https://www.facebook.com";
        cy.visit({url: myString, failOnStatusCode: false});
        cy.get('[data-testid=royal_email]').type("motersen@hotmail.com");
        cy.get('[data-testid=royal_pass]').type("Lamathaak01!");
        cy.get('[data-testid=royal_login_button]').click(); 
        
        cy.get('[data-testid=left_nav_section_Verkennen_seemore]',{timeout:20000}).click();
        cy.get('[data-testid=left_nav_item_Vriendenlijsten] > .linkWrap', {timeout:30000}).click();
        cy.xpath('//span[text()="Beste vrienden"]', {timeout:20000}).click();
    
        ///cy.get('a[href*="friendlist"]').contains('Beste vrienden toevoegen').click();
        ///cy.xpath('//div[@class="_4-ek fsxl"]/following-sibling::a[1]', {timeout:20000}).click{};
        cy.get('._4un6 > ._42ft').click();
        cy.xpath('//input[contains(@class,"inputtext autofocus")]').type("Marian Batist");
        cy.xpath('//img[@class="img squarePhoto"]').click();
        //cy.xpath('//a[contains(@class,"_42ft _42fu")])[2]').click();
        //cy.get('a[href*="Voltooien"]').click();
        cy.xpath('//table[contains(@class,"uiGrid _51mz")]/following::table/tbody[1]/tr[1]/td[2]/a[1]').click();
        //cy.xpath(, {timeout:20000}).click(); //should('have.text',"Alex Wulms");
        //cy.xpath('//a[@data-tooltip-content="Pepijn Kramer"]', {timeout:20000}).then(div => {//should('have.text', "");
        //    debugger;
        //    expect(div).has.lenght('5');
        //})

        //cy.xpath('//a[@data-tooltip-content="Pepijn Kramer"]', {timeout:20000}).should('text', '')
        cy.xpath('//a[@data-tooltip-content="Pepijn Kramer"]', {timeout:20000}).then(link() => {
            debugger
            expect(link).has.text('');
        })
        cy.xpath('//a[@data-tooltip-content="Pepijn Kramer"]', {timeout:20000}).click();
        
    })
    
})