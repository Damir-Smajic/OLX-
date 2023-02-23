/// <reference types="cypress" />

import loginPage from '../pageObjectsOLX/LoginPage.cy.js'
import kategorija from '../pageObjectsOLX/KategorijaPage.cy.js'
import osnovniPodatci from '../pageObjectsOLX/OsnovniPodatci.cy.js'
import fotografije from '../pageObjectsOLX/Fotografije.cy.js'

context('OLX', () => {

   before('objava artikla', () => {
        
        cy.visit('https://www.olx.ba/') 
        }) 

    it('objavite artikal', () => {

         loginPage.loginButtonClick()
         loginPage.usernameType()
         loginPage.passwordType()
         loginPage.loginButton2Click()
         loginPage.objaviteNavBarButtonClick()
         
         // 1. KATEGORIJA  
        
         kategorija.odaberiKatClick()  
         kategorija.proizvodjacSelect()
         kategorija.modelSelect()
         kategorija.nastaviClick()
         
         // 2. OSNOVNI PODATCI 

         osnovniPodatci.cijenaNaUpitClick()
         osnovniPodatci.nastaviButton1Click()
         osnovniPodatci.godisteAutaSelect()
         osnovniPodatci.brojVrataClick()
         osnovniPodatci.kilometrazaType()
         osnovniPodatci.gorivoClick()
         osnovniPodatci.kubikazaMotoraSelect()
         osnovniPodatci.kilovatiType()
         osnovniPodatci.konjskihSnagaType()
         osnovniPodatci.transmisijaClick()
         osnovniPodatci.nastaviButton2Click()
         
         // 3. CIJENA SLIKE I OPIS 

         fotografije.wait()  
         fotografije.zavrsiObjavuButtonClick()

     }) 

})     



         

    
