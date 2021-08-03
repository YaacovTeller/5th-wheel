using CarRental4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarRental4.Controllers
{

    public class UserInfoController : ApiController
    {
        [HttpPost]
        public User Login([FromBody]LoginData loginAttempt)
        {
            User attempt;
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            attempt = entities.Users.FirstOrDefault(c => c.UserName == loginAttempt.userName && c.Password == loginAttempt.password);
            if (true)
            {

            }
            else
            {

            }
            return attempt;
        }
        [Authentication]
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                return entities.Users.ToList();
            }
        }
    //    [Authentication]
        [HttpPost]
        public HttpResponseMessage PostUsers([FromBody]User val)
        {
            if (ModelState.IsValid)
                using (CarRentalDBEntities entities = new CarRentalDBEntities())
                {
                    var list = entities.Users.ToList();
                    foreach (var u in list)
                    {
                        if (val.UserName.Equals(u.UserName, StringComparison.OrdinalIgnoreCase)){
                            return Request.CreateResponse(HttpStatusCode.Conflict, "User name already exists");
                        }
                    }
                    entities.Users.Add(val);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "User no." + val.UserId + " created");
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, ""); ;
        }
        [Authentication]
        [HttpPut]
        public HttpResponseMessage PutUsers([FromBody]User val)
        {
            if (ModelState.IsValid)
                using (CarRentalDBEntities entities = new CarRentalDBEntities())
                {
                    var user = entities.Users.FirstOrDefault(r => r.UserId == val.UserId);
                    user.UserId = val.UserId;
                    user.UserName = val.UserName;
                    user.Fullname = val.Fullname;
                    user.Email = val.Email;
                    user.Gender = val.Gender;
                    user.BirthDate = val.BirthDate;
                    user.PassportNumber = val.PassportNumber;
                    user.Password = val.Password;
                    user.Permission = val.Permission;
                    user.PictureUrl = val.PictureUrl;

                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "User no." + user.UserId + " updated");
                }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
        [Authentication]
        [HttpDelete]
        public HttpResponseMessage DeleteUsers(int id)
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                var a = entities.Users.FirstOrDefault(u => u.UserId == id);
                entities.Users.Remove(a);
                try
                {
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "User no." + id + " removed");
                }
                catch
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "User has recorded rentals?");
                }
            }
        }
    }
}
