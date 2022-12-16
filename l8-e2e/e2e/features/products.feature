@product-service
Feature:Product management system
  In order manage products
  As a developer
  I want to make sure CRUD operations through REST API works fine

  Scenario Outline: Login
    Given A user of the system
    When I enter <username> and <password>
    And I send POST request to /users/login 
    Then I get response code 201 

    Examples:
      |username  |password |                                                                                            
      |Donia     |1234     | 
      |Ali       |123      | 

  Scenario Outline: get product by Id
    Given A ProductID <id> exist 
    When I send GET request to /users/products to get a specific product
    Then I receive in the get <response>

    Examples:
      | id | response                     |
      | 1  | { "id": 1, "name": "coca cola can", "price": 5}   |
      | 2  | { "id": 2, "name": "sprite can","price": 6}      |
      | 3  | { "id": 3, "name": "chipsy","price": 5 }          |
      | 4  | { "id": 4, "name": "molto", "price": 5 }         |

  Scenario Outline: delete a product by Id
  Given A ProductID <id> exist 
  When I send Delete request to /users/products
  Then I receive <response> in the delete

    Examples:
    | id | response    |
    | 1 | { "message": "deleted success"}    |
       
  


    Scenario Outline: get all products
    Given That all products exist
    When I send GET request to /users/products to get all products
    Then I receive <response> in get all

    Examples:
     | response                     |
     |  "view success" |
     


    Scenario Outline: update product by Id
    Given A ProductID <id> exist
    When I update the price of the product to <price>
    And send UPDATE request to /users/products
    Then I get response code in the update 200 
    And I receive response in the update <response>

    Examples:
    | id | price | response    |
    | 1 |  10|{ "id": 1, "name": "coca cola can", "price": 10}  |
    | 2 |  30 | { "id": 2, "name": "sprite can","price": 30}    |
    | 3 |  20 | { "id": 3, "name": "chipsy","price": 20}    |
    | 4 |  40 | { "id": 4, "name": "molto","price": 40}    |

                                                                                                                                      