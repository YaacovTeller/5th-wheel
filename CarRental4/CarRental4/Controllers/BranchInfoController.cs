using CarRental4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CarRental4.Controllers
{
    [Authentication]
    public class BranchInfoController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpGet]
        public IEnumerable<Branch> GetBranches()
        {
            using (CarRentalDBEntities entities = new CarRentalDBEntities())
            {
                entities.Configuration.LazyLoadingEnabled = false;
                return entities.Branches.ToList();
            }
        }
    }
}

