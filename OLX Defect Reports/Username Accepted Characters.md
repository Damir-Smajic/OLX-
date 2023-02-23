DESCRIPTION: 

  Username input field doesn't accept inputs displayed as valid in error message and different valid inputs are displayed 
  
STEPS TO REPRODUCE: 

  1. Navigate to olx.ba
  2. 2.	Click on „REGISTRACIJA“ button in NavBar
  3. 3.	Click on „REGISTRUJ PROFIL“ button
  4. In "Vase OLX ime" field enter "qa-testing"
  5. Click on "ZAVRSI REGISTRACIJU" button
  (Error message for allowed characters is displayed next to the input field)
  6. In "Vase OLX ime" field change input to "qa_testing"
  7. Click on "ZAVRSI REGISTRACIJU" button
  
  EXPECTED RESULT: 
  
    User profile is created
    
  ACTUAL RESULT: 
  
    Error message is displayed with different allowed characters
  
  ![OLX ime 1](https://user-images.githubusercontent.com/121490682/220824607-8e52d4f2-b5ce-463c-ba60-bd7d3ea3c4b7.png)

![OLX ime](https://user-images.githubusercontent.com/121490682/220824619-d6e11c76-e433-442b-88f4-419292a9fff8.png)
