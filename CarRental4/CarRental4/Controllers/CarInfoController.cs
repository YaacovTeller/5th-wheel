﻿using CarRental4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Results;
using Newtonsoft.Json;
using System.IO;
using System.Data.Entity.Validation;

namespace CarRental4.Controllers
{
    
    public class CarInfoController : ApiController
    {
        [AllowAnonymous]
        [HttpGet]
        public string Getstr()
        {
            return "HelloWorld";
        }
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
        [Route("api/CarInfo/FindCar/{id}")]
        public JsonResult<Car> FindCar(int id)
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                var a = entities.Cars.Include(c => c.Branch).Include(c => c.CarType).FirstOrDefault(c => c.CarId == id);
                return Json(a as Car);
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
        public IEnumerable<Car_Branch_Type> GetFullCars()
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                var query = from car in entities.Cars
                            join carType in entities.CarTypes on car.CarTypeId equals carType.CarTypeId
                            join branch in entities.Branches on car.BranchId equals branch.BranchId
                            select new
                            {
                                car.CarId,
                                car.Available,
                                car.CarNumber,
                                car.FitForRental,
                                car.Mileage,
                                car.PictureUrl,
                                branch.BranchId,
                                branch.Address,
                                branch.Name,
                                carType.CarTypeId,
                                carType.Manufacturer,
                                carType.Model,
                                carType.PricePerDay,
                                carType.PricePerDayOver,
                                carTypePicture = carType.PictureUrl,
                                carType.Transmission,
                                carType.YearOfManufacture
                            };
                //     entities.Configuration.LazyLoadingEnabled = false;
                return (IEnumerable<Car_Branch_Type>)query;//.Include(c => c.Branch).Include(c => c.CarType)
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
                    Permission = value.Permission
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
                    val.PictureUrl = val.PictureUrl.Length > 0 ? val.PictureUrl : "";
                    entities.Cars.Add(val);
                    try
                    {
                        entities.SaveChanges();
                    }
                    catch (DbEntityValidationException e)
                    {
                        validationMessages(e);
                    }

                    return Request.CreateResponse(HttpStatusCode.OK, "New car created");
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
        public void validationMessages(DbEntityValidationException e)
        {
            var errorMessages = e.EntityValidationErrors
            .SelectMany(x => x.ValidationErrors)
            .Select(x => x.ErrorMessage);
            var fullErrorMessage = string.Join("; ", errorMessages);
            var exceptionMessage = string.Concat(e.Message, " The validation errors are: ", fullErrorMessage);
            throw new DbEntityValidationException(exceptionMessage, e.EntityValidationErrors);
        }
    }
}