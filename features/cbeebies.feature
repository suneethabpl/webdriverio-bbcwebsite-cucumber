Feature: Performing on bitesize Page

Background:
Given go to CBeebiesPage

Scenario: test on bitewsize page

When fetch text of all the anchor tags with async and sync actions
Then check css properties