using CarRental4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Results;

namespace CarRental4.Controllers
{
    
    public class CarInfoController : ApiController
    {
        [Authentication]
        [HttpDelete]
        public HttpResponseMessage DeleteCars(int id)
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                var a = entities.Cars.FirstOrDefault(c => c.CarId == id);
                entities.Cars.Remove(a);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "Car no." + id + " removed");
            }
        }
        [Authentication]
        [HttpDelete]
        public HttpResponseMessage DeleteCarTypes(int id)
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                var a = entities.CarTypes.FirstOrDefault(c => c.CarTypeId == id);
                entities.CarTypes.Remove(a);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "CarType no." + id + " removed");
            }
        }

        [HttpGet]
        public IEnumerable<CarType> GetCarTypes()
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                return entities.CarTypes.ToList();
            }
        }
        [HttpGet]
        public JsonResult<CarType> FindCarTypes(int id)
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                var a = entities.CarTypes.FirstOrDefault(c => c.CarTypeId == id);
                return Json(a);
            }
        }
        [HttpGet]
        public IEnumerable<Car> GetCars()
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                //     entities.Configuration.LazyLoadingEnabled = false;
                return entities.Cars.Include(c => c.Branch).Include(c => c.CarType).ToList();
            }
        }

        [HttpGet]
        public IEnumerable<Branch> GetBranches()
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                return entities.Branches.ToList();
            }
        }
        [Authentication]
        [HttpGet]
        public IEnumerable<Rental> GetRentals()
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                return entities.Rentals.ToList();
            }
        }

        [Authentication]
        [HttpPost]
        public void Post([FromBody]User value)
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                User user = new User
                {
                    Fullname = value.Fullname,
                    PassportNumber = value.PassportNumber,
                    BirthDate = value.BirthDate,
                    Gender = value.Gender,
                    Email = value.Email,
                    Password = value.Password,
                    PictureUrl = value.PictureUrl,
                    Permission = 0
                };
                entities.Users.Add(user);
                entities.SaveChanges();
            }
        }

        [Authentication]
        [HttpPut]
        public HttpResponseMessage PutCars([FromBody]Car val)
        {
            if (ModelState.IsValid)
                using (CarRentalDBEntities entities = new CarRentalDBEntities())
                {
                    var car = entities.Cars.Include(t=> t.CarType)
                        .Include(b=>b.Branch)
                        .FirstOrDefault(r => r.CarId == val.CarId);

                    entities.Entry(car).CurrentValues.SetValues(val);

                    car.CarType = entities.CarTypes.FirstOrDefault(c=> c.CarTypeId == val.CarType.CarTypeId);
                    car.Branch = entities.Branches.FirstOrDefault(b => b.BranchId == val.Branch.BranchId);

                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Car no." + car.CarId + " updated");
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
        [Authentication]
        [HttpPut]
        public HttpResponseMessage PutCarTypes([FromBody]CarType val)
        {
            if (ModelState.IsValid)
                using (CarRentalDBEntities entities = new CarRentalDBEntities())
                {
                    var carType = entities.CarTypes.FirstOrDefault(r => r.CarTypeId == val.CarTypeId);
                    carType.CarTypeId = val.CarTypeId;
                    carType.Manufacturer = val.Manufacturer;
                    carType.Model = val.Model;
                    carType.PricePerDay = val.PricePerDay;
                    carType.PricePerDayOver = val.PricePerDayOver;
                    carType.Transmission = val.Transmission;
                    carType.YearOfManufacture = val.YearOfManufacture;
                    carType.PictureUrl = val.PictureUrl;

                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "CarType no." + carType.CarTypeId + " updated");
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
        [Authentication]
        [HttpPost]
        public HttpResponseMessage PostCarTypes([FromBody]CarType val)
        {
            if (ModelState.IsValid)
                using (CarRentalDBEntities entities = new CarRentalDBEntities())
                {
                    entities.CarTypes.Add(val);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "New car type created");
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
        [Authentication]
        [HttpPost]
        public HttpResponseMessage PostCars([FromBody]Car val)
        {
            if (ModelState.IsValid)
                using (CarRentalDBEntities entities = new CarRentalDBEntities())
                {
                    entities.Cars.Add(val);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "New car created");
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
    }
}