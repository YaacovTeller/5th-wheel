using CarRental4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarRental4
{
    public class UserSecurity
    {
        public static bool CheckLogin(string username, string password)
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                return entities.Users.Any(user => user.UserName.Equals(username, StringComparison.OrdinalIgnoreCase) && user.Password == password);
            }
        }
    }
}