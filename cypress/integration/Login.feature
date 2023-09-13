Feature: Login

        Scenario outline: Login to orange CRM website

        Given User is at the login page
        When User enters usernames as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the Website
