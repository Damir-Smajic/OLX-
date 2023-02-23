class Kategorija 
{

    // LOCATORS

    odaberiKat = () => cy.get('.item-Automobil')  
    proizvodjac = () => cy.get('[class="relative flex"] > [label="Proizvođač"]') 
    model = () => cy.get('[class="relative flex"] > [label="Model"]')  
    nastavi = () => cy.get('[style="width: fit-content;"]')
    
    // ACTIONS

    odaberiKatClick() {
        this.odaberiKat().click()
    }

    proizvodjacSelect() {
        this.proizvodjac().select('Renault')
    }

    modelSelect() {
        this.model().select('Clio')
    }

    nastaviClick() {
        this.nastavi().click()
    }
}

const kategorija = new Kategorija()


export default kategorija