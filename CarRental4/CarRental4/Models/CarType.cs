//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CarRental4.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CarType
    {
        public int CarTypeId { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public int PricePerDay { get; set; }
        public int PricePerDayOver { get; set; }
        public int YearOfManufacture { get; set; }
        public string Transmission { get; set; }
        public string PictureUrl { get; set; }
    }
}
