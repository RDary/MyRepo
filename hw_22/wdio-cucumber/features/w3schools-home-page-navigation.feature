@navigation
Feature: Get w3schools tests

   @visit
   Scenario: The user visit the Home page
   Given the User opens web page https://www.w3schools.com
   Then the user sees that the title of the Home page is correct

  @textVerify
   Scenario Outline: The button <Index> contains <Text> in the Main Menu
   Then the User sees that the button <Index> contains <Text>

   Examples:
       | Text       | Index | 
       | Tutorials  | 1     |
       | References | 2     |
       | Exercises  | 3     |
   
   @clicks
   Scenario: The Main Menu
   When the User clicks on the Tutorials button
   Then the user sees the text 'Tutorials'

   Scenario: The Tutorials tab
   When the User clicks the link 'Learn JavaScript'
   Then the User sees that the page is displayed with the title 'JavaScript Tutorial'

   Scenario: The Logo test
   When the User clicks on the logo 
   Then the User sees that the Home page is displayed

   @search
   Scenario: The Google search button
   When the User clicks the Google search button 
   Then the User sees that input field is open

   

