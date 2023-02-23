import olx from '../../fixtures/olx.json'

class OsnovniPodatci 

{

    // LOCATORS

    cijenaNaUpit = () => cy.get('.price-btn')
    nastaviButton1 = () => cy.get('[style="width: fit-content;"]')
    godisteAuta = () => cy.get('[label="Godište*"]')
    brojVrata = () => cy.get('[id="button2/3"]')
    kilometraza = () => cy.get('[name="kilometra-a"]')
    gorivo = () => cy.get('#buttonBenzin')
    kubikazaMotora = () => cy.get('[label="Kubikaža*"]')
    kilovati = () => cy.get('[name="kilovata-kw"]')
    konjskihSnaga = () => cy.get('[name="konjskih-snaga"]')
    pogon = () => cy.get('#buttonPrednji')
    tip = () => cy.get('[label="Tip"]')
    nastaviButton2 = () => cy.get('[style="width: fit-content;"]') 
    
    // ACTIONS

    cijenaNaUpitClick() {
        this.cijenaNaUpit().click()
    }

    nastaviButton1Click() {
        this.nastaviButton1().click()
    }

    godisteAutaSelect() {
        this.godisteAuta().select('2001')
    }

    brojVrataClick() {
        this.brojVrata().click()
    }

    kilometrazaType() {
        this.kilometraza().type('213545')
    }

    gorivoClick() {
        this.gorivo().click()
    }

    kubikazaMotoraSelect() {
        this.kubikazaMotora().select('1.2')
    }

    kilovatiType() {
        this.kilovati().type('50')
    }

    konjskihSnagaType() {
        this.konjskihSnaga().type('68')
    }

    nastaviButton2Click () {
        this.nastaviButton2().click()
    }
}

const osnovniPodatci = new OsnovniPodatci()

export default osnovniPodatci