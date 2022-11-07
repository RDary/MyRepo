Complete exercise

NORMAL level

#### Task 1

SELECT * FROM character WHERE level > 45 AND race = 'dwarf'

#### Task 2

1. SELECT * FROM [Customers] WHERE City = 'London'
2. SELECT CustomerName, ContactName FROM [Customers] WHERE Address LIKE '23%'
3. SELECT DISTINCT City FROM [Customers]
4. SELECT * FROM [Customers] WHERE PostalCode LIKE '0%'
5. SELECT * FROM [Customers] WHERE Country NOT LIKE 'USA'
6. SELECT * FROM [Customers] WHERE Country = 'France' ORDER BY ContactName DESC
7. SELECT * FROM [Customers] WHERE Country = 'Germany' OR Country = 'USA' LIMIT 10

#### Task 3

1. SELECT ProductName FROM [Products] WHERE ProductName LIKE 'M%';
2. SELECT Unit FROM [Products] WHERE ProductName = 'Steeleye Stout'
3. SELECT ProductName FROM [Products] WHERE Price > 22
4. SELECT ProductName FROM [Products] WHERE Unit LIKE '%500 g' OR '%250 g'
5. SELECT * FROM [Products] WHERE Unit LIKE '%bottles%'
6. SELECT * FROM [Products] WHERE SupplierID = 7 ORDER BY Price DESC

#### Task 4

1. SELECT FirstName, LastName, Notes FROM [Employees] WHERE LastName = 'Leverling'
2. SELECT * FROM [Employees] WHERE BirthDate >= '1961-01-01'
3. SELECT BirthDate FROM [Employees] WHERE FirstName LIKE 'A%'
4. SELECT FirstName, LastName, BirthDate FROM [Employees] ORDER BY BirthDate