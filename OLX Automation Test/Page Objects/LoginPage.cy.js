import olx from '../../fixtures/olx.json'

class LoginPage 
{

    // LOCATORS

    loginButton = () => cy.get('[class="font-semibold mr-md pr-md border-gray-300 border-r"]')
    username = () => cy.get('[name="username"]')
    password =() => cy.get('[name="password"]') 
    loginButton2 = () => cy.get('.my-lg') 
    objaviteNavBarButton = () => cy.get('[style="background: rgb(0, 47, 52); color: rgb(255, 255, 255); border: none; width: 200px; height: 52px;"]')
    
    // ACTIONS

    loginButtonClick() {
        this.loginButton().click()
    }

    usernameType() {
        this.username().type(olx.email)
    }

    passwordType() {
        this.password().type(olx.password)
    }

    loginButton2Click() {
        this.loginButton2().click()
    }

    objaviteNavBarButtonClick() {
        this.objaviteNavBarButton().click()
    }
}

const loginPage = new LoginPage()

export default loginPage