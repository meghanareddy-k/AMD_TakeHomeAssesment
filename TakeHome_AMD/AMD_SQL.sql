------ DDL Script------
CREATE TABLE Product_price	(
Brand varchar(10),
[Name] varchar(10),
Price int
)

INSERT INTO Product_price VALUES('AMD','Procduct1',10)
INSERT INTO Product_price VALUES('AMD','Procduct2',30)
INSERT INTO Product_price VALUES('AMD','Procduct3',60)
INSERT INTO Product_price VALUES('AMD','Procduct5',40)
INSERT INTO Product_price VALUES('ACME','Procduct1',44)
INSERT INTO Product_price VALUES('ACME','Procduct2',1)
INSERT INTO Product_price VALUES('ACME','Procduct4',90)


----- Question 1 -----

SELECT Brand, Name, Price, RANK()OVER(Partition by Brand ORDER BY Price DESC) AS [Rank] FROM Product_price
GROUP BY Brand, [Name], Price
ORDER BY Brand DESC, [Name] ASC


------- Question 2 -------

with Temp as(

SELECT Brand, Name, Price, RANK()OVER(Partition by Brand ORDER BY Price DESC) AS [Rank] FROM Product_price
GROUP BY Brand, [Name], Price

)

SELECT * FROM Temp where Rank = 2 ORDER BY Brand DESC