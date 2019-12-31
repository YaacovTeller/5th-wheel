using CarRental4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;

using System.Web.Http;
using System.Web.Http.Cors;
using System.Net.Http;
using System.Net;

namespace CarRental4.Controllers
{
    [Authentication]
    public class RentalInfoController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpGet]
        public IEnumerable<Rental> GetRentals()
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                entities.Configuration.LazyLoadingEnabled = false;
                return entities.Rentals.Include(c => c.Car.CarType).Include(c => c.User).ToList();
            }
        }
        [HttpPost]
        public HttpResponseMessage PostRentals([FromBody]Rental val)
        {
            if (ModelState.IsValid)
                using (CarRentalDBEntities entities = new CarRentalDBEntities())
                {
                  //  entities.Rentals.Include(a => a.Car.CarType).Include(a => a.User);
                    entities.Rentals.Add(val);
                    entities.ChangeTracker.Entries<User>().ToList().ForEach(p => p.State = EntityState.Unchanged);
                    entities.ChangeTracker.Entries<Car>().ToList().ForEach(p => p.State = EntityState.Unchanged);
                    entities.ChangeTracker.Entries<CarType>().ToList().ForEach(p => p.State = EntityState.Unchanged);
                    entities.ChangeTracker.Entries<Branch>().ToList().ForEach(p => p.State = EntityState.Unchanged);

                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Rental no." + val.RentalsId + ". User"+val.UserId);
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
        [HttpPut]
        public HttpResponseMessage PutRentals( [FromBody]Rental val)
        {
            if (ModelState.IsValid)
                using (CarRentalDBEntities entities = new CarRentalDBEntities())
                {
                    var rental = entities.Rentals.FirstOrDefault(r => r.RentalsId == val.RentalsId);
                    rental.Returned = val.Returned;
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Rental no." + rental.RentalsId + " returned");
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
        // DELETE api/<controller>/5
 //       [Route("api/RentalInfo/DeleteRentals/{id}")]
        [HttpDelete]
        public HttpResponseMessage DeleteRentals(int id)
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                var rental = entities.Rentals.FirstOrDefault(c => c.RentalsId == id);
                entities.Rentals.Remove(rental);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "Rental no." + id + " removed");
            }
        }
    }
}
