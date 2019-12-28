

drop Table Rentals, Users, Cars, CarType, Branches

drop Table Cars
drop Table Rentals
drop Table Users
drop Table CarType
drop Table Branches

delete from cars
DBCC CHECKIDENT ('cars', RESEED, 0)  
delete from Rentals
DBCC CHECKIDENT ('Rentals', RESEED, 10)  
delete from CarType
DBCC CHECKIDENT ('CarType', RESEED, 22)  
delete from Users
DBCC CHECKIDENT ('Users', RESEED, 14)  
delete from Branches
DBCC CHECKIDENT ('Branches', RESEED, 0)  