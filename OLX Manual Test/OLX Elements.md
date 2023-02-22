DOCUMENTATION

DESCRIPTION:

Because I don't have access to the documentation of the site I did exploratory testing of registration flow. During exploratory testing of the Klasični profil and OLX Shop registration forms I documented the following information about input fields boundry values and behaviour of different elements from these forms so I could write test cases for boundry values and to write detailed positive and negative test cases. 

	KLASIČNI PROFIL: 

-	 „Vaša e-mail adresa“ - input field accepts standard email format
-	„Password“ - input field accepts minimum length of 4 characters
-	„Vaše OLX ime“ - input field accepts from 3 to 15 characters and accepts letters, numbers and lower dash and doesn't accept diacritic letters
-	„Spol“ -  only one option can be selected 
-	„Lokacija“ - dropdown menu has Izaberite option selected by default
-	„Mjesto“ - dropdown menu is hidden by default and visible only after selecting an option from lokacija dropdown menu and Odaberite option is selected by default. 
-	„Država“ - dropdown menu  replaces „Mjesto“ dropdown menu after „Van BiH“ option is selected from „Lokacija“ dropdown menu
-	„Slažem se sa Uslovima korištenja“ - is unchecked by default and „Uslovima korištenja“ link opens a popup window


OLX SHOP:

-	„Vaša e-mail adresa“ - input field accepts standard email format
-	„Password“ - input field accepts minimum length of 4 characters and doesn't have maximum boundry value 
-	„Ime vaše firme (vaše OLX ime)“ - input field accepts from 3 to 15 characters and accepts letters, numbers and lower dash, doesn't accept diacritic letters and doesn't accept „olx“ as a valid input value. Entered value is displayed under the input field in .olx.ba domain
-	„Paket“ - dropdown menu has value selected from previous step 
-	„Vrsta OLX shopa“ - dropdown menu has „Trgovina“ selected by default
-	„Vrsta djelatnosti“ - dropdown menu has „Nije registrovana“ selected by default
-	„Puni naziv shopa“ - accepts all characters 
-	„ID Broj (samo za pravna lica)“ - accepts all characters 
-	„Ime“ - accepts from 2 to 15 characters 
-	„Prezime“ - accepts from 2 to 30 characters 
-	„Telefon“ - accepts standard telephone number format
-	„Adresa“ - accepts letters and numbers and min value of 1 charater
-	„Lokacija“ - dropdown menu has Izaberite option selected by default
-	„Mjesto“ - dropdown menu is hidden by default and visible only after selecting valid option from lokacija dropdown menu and Odaberite option is selected by default
-	„Država“ - dropdown menu  replaces „Mjesto“ dropdown menu after „Van BiH“ option is selected from „Lokacija“ dropdown menu
-	„Slažem se sa Uslovima korištenja“ - is unchecked by default and „Uslovima korištenja“ link opens a popup window
