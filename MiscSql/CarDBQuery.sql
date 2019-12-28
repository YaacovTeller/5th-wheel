Create Table Users
(
	UserId int identity primary key,
	Fullname nvarchar(100),
	PassportNumber int,
	BirthDate date,
	Gender nvarchar(100),
	Email nvarchar(100),
	Password nvarchar(100),
	PictureUrl nvarchar(100),
)

Insert into Users values (
'John Smith','32756382','1997-10-23','male','test@gmail.com','password',''
)
Insert into Users values (
'Joe Bloggs','42786382','1988-01-01','male','test2@gmail.com','password2',''
)

Create Table CarType
(
	TypeId int identity primary key,
	Manufacturer nvarchar(100),
	Model nvarchar(100),
	PricePerDay int,
	PricePerDayOver int,
	YearOfManufacture int,
	Transmission nvarchar(100)
)

Insert into CarType values ('Hyundai','Accent','100','200','09','automatic')
Insert into CarType values ('Fiat','Tipo','120','230','08','automatic')

Create Table Branches
(
	BranchId int identity primary key,
	Name nvarchar(100),
	Address nvarchar(100),
	Location int,
)

Create Table Cars
(
	CarId int identity primary key,
	TypeId int FOREIGN KEY REFERENCES CarType(TypeId),
	Mileage int,
	PictureUrl nvarchar(100),
	FitForRental bit,
	Available bit,
	CarNumber int, 
	BranchId int FOREIGN KEY REFERENCES Branches(BranchId),
)

Create Table Rentals
(
	RentalsId int identity primary key,
	StartDate date,
	EndDate date,
	Returned date,
	UserId int FOREIGN KEY REFERENCES Users(UserId),
	CarId int FOREIGN KEY REFERENCES Cars(CarId),
)