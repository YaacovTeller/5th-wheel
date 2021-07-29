using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarRental4.Models
{
    public class Car_Branch_Type
    {
        public int CarId { get; set; }
        public int Mileage { get; set; }
        public string PictureUrl { get; set; }
        public bool FitForRental { get; set; }
        public bool Available { get; set; }
        public string CarNumber { get; set; }
        public int BranchId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int CarTypeId { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public int PricePerDay { get; set; }
        public int PricePerDayOver { get; set; }
        public int YearOfManufacture { get; set; }
        public string Transmission { get; set; }
        public string carTypePicture { get; set; }
    }
}