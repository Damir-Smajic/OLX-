class Fotografije
{

    // LOCATORS

    zavrsiObjavuButton = () => cy.get('[style="width: fit-content;"]')
    
    // ACTIONS
    
    wait = () => cy.wait(1000)
    
    zavrsiObjavuButtonClick() {
        this.zavrsiObjavuButton().click()
    }
}

const fotografije = new Fotografije() 

export default fotografije



