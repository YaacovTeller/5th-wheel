using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Drawing;
using System.Web.Hosting;
using Microsoft.AspNetCore.Http;

namespace CarRental4.Controllers
{

    public class ImageController : ApiController
    {
        string current = Environment.CurrentDirectory;
        const string InitialDirectory = @"C:\Users\rytel\Desktop\CarRental\CarRental4\AngularApp\src\assets";
        const string SaveDirectory = InitialDirectory;// + @"\Saved_Imgs\";
        //[Authentication]
        [HttpPost]
        public HttpResponseMessage UploadImage(IFormFile file)//[FromBody] formData
        {
          //  if (image.Width>0)
            {
                var filePath = SaveDirectory;
                using (var stream = File.Create(filePath))
                {
                    string path = HostingEnvironment.ApplicationVirtualPath;
                    Console.WriteLine();
                    //Request.Files
                    // Request.Form["Key"]
                    // Bitmap img = (Bitmap)Image.FromFile(filename, true);
                    //          image.Save(filePath);
                }
                return Request.CreateResponse(HttpStatusCode.OK, "Image Uploaded");
            }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "");
        }
    }
}
