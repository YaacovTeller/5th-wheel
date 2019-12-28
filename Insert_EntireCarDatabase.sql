USE [CarRentalDB]
GO
/****** Object:  Table [dbo].[Branches]    Script Date: 07/07/2019 23:04:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Branches](
	[BranchId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Address] [nvarchar](100) NOT NULL,
	[LocationX] [int] NOT NULL,
	[LocationY] [int] NOT NULL,
 CONSTRAINT [PK__Branches__A1682FC54525C6BE] PRIMARY KEY CLUSTERED 
(
	[BranchId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cars]    Script Date: 07/07/2019 23:04:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cars](
	[CarId] [int] IDENTITY(1,1) NOT NULL,
	[CarTypeId] [int] NOT NULL,
	[Mileage] [int] NOT NULL,
	[PictureUrl] [nvarchar](max) NULL,
	[FitForRental] [bit] NOT NULL,
	[Available] [bit] NOT NULL,
	[CarNumber] [nchar](7) NOT NULL,
	[BranchId] [int] NOT NULL,
 CONSTRAINT [PK__Cars__68A0342EB8B822D0] PRIMARY KEY CLUSTERED 
(
	[CarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CarType]    Script Date: 07/07/2019 23:04:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarType](
	[CarTypeId] [int] IDENTITY(1,1) NOT NULL,
	[Manufacturer] [nvarchar](100) NOT NULL,
	[Model] [nvarchar](100) NOT NULL,
	[PricePerDay] [int] NOT NULL,
	[PricePerDayOver] [int] NOT NULL,
	[YearOfManufacture] [int] NOT NULL,
	[Transmission] [nvarchar](100) NOT NULL,
	[PictureUrl] [varchar](max) NULL,
 CONSTRAINT [PK__CarType__516F03B5A27187BC] PRIMARY KEY CLUSTERED 
(
	[CarTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rentals]    Script Date: 07/07/2019 23:04:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rentals](
	[RentalsId] [int] IDENTITY(1,1) NOT NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NOT NULL,
	[Returned] [date] NULL,
	[UserId] [int] NOT NULL,
	[CarId] [int] NOT NULL,
 CONSTRAINT [PK__Rentals__903B5154A9D82BC5] PRIMARY KEY CLUSTERED 
(
	[RentalsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 07/07/2019 23:04:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Fullname] [nvarchar](100) NOT NULL,
	[PassportNumber] [nchar](9) NOT NULL,
	[UserName] [nvarchar](100) NOT NULL,
	[BirthDate] [date] NULL,
	[Gender] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](100) NOT NULL,
	[PictureUrl] [nvarchar](100) NULL,
	[Permission] [tinyint] NOT NULL,
 CONSTRAINT [PK__Users__1788CC4C8E8AB29D] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Cars]  WITH CHECK ADD  CONSTRAINT [FK__Cars__BranchId__4BAC3F29] FOREIGN KEY([BranchId])
REFERENCES [dbo].[Branches] ([BranchId])
GO
ALTER TABLE [dbo].[Cars] CHECK CONSTRAINT [FK__Cars__BranchId__4BAC3F29]
GO
ALTER TABLE [dbo].[Cars]  WITH CHECK ADD  CONSTRAINT [FK__Cars__TypeId__403A8C7D] FOREIGN KEY([CarTypeId])
REFERENCES [dbo].[CarType] ([CarTypeId])
GO
ALTER TABLE [dbo].[Cars] CHECK CONSTRAINT [FK__Cars__TypeId__403A8C7D]
GO
ALTER TABLE [dbo].[Rentals]  WITH CHECK ADD  CONSTRAINT [FK__Rentals__CarId__412EB0B6] FOREIGN KEY([CarId])
REFERENCES [dbo].[Cars] ([CarId])
GO
ALTER TABLE [dbo].[Rentals] CHECK CONSTRAINT [FK__Rentals__CarId__412EB0B6]
GO
ALTER TABLE [dbo].[Rentals]  WITH CHECK ADD  CONSTRAINT [FK__Rentals__UserId__4E88ABD4] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Rentals] CHECK CONSTRAINT [FK__Rentals__UserId__4E88ABD4]
GO
