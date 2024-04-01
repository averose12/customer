using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNETact.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Practice()
        {
            return View();
        }
        public ActionResult Practice1()
        {
            return View();
        }
        public ActionResult CustomerBill()
        {
            return View();
        }
        public ActionResult Sample()
        {
            return View();
        }

        public ActionResult Nice()
        {
            return View();
        }
        public ActionResult CustomerBills()
        {
            return View();
        }
        public ActionResult Triangle()
        {
            return View();
        }
        public ActionResult Grde()
        {
            return View();
        }
        public  ActionResult Speed()
        {
            return View();
        }
        public ActionResult Xample()
        {
            return View();
        }
        public ActionResult Sample2()
        {
            return View();
        }
        
        public ActionResult Sample3()
        {
            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Sirsample1()
        {

            return View();
        }
        public ActionResult Sirsample2()
        {
            var data = new List<object>();
            var lastname = Request["lname"];
            var firstname = Request["fname"];

            data.Add(new
            {
                mess = 0
            
            });
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        public ActionResult SirEx()
        {

            return View();
        }
        public ActionResult SirEx1()
        {
            var data = new List<object>();
            var firstname = Request["fname"];
            var lastname = Request["lname"];
            var genders = Request["Gendr"];
            var provinces = Request["province"];
            data.Add(new
            {
                mess = 1
            });
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        public ActionResult StudentsAcc()
        {
            return View();
        }
       
        public ActionResult StudAcc()
        {
            return View();
        }
         public ActionResult StudentsAcc1()
        {
            var data = new List<object>();
            var idNumber = Request["IDnum"];
            var LstName = Request["LastName"];
            var FirstName = Request["FrstName"];
            var Genderss = Request["Gnder"];
            var Code = Request["CodeCourse"];
            var Yrs = Request["Years"];
            var Sub = Request["Subjects"];
            var TUnits = Request["TotalUnits"];
            var TuitionUnit = Request["TuitionPerUnit"];
            var Overalltuition = Request["TotalTuition"];
            var regfees = Request["Registration"];
            var miscfees = Request["Miscellaneous"];
            var Labfees = Request["LabFees"];
            var TFeesCourse = Request["TotalFeesCourse"];
            var Assess = Request["Assessment"];
            var OverallTotal = Request["TotalFee"];
            var bal = Request["Balance"];
            var dollar = Request["wordsDollar"];
            var cents = Request["wordsCents"];
            var results = Request["Results"];
            var AmountPayS = Request["AmountPay"];
            data.Add(new
            {
                mess = 1
            });
            return Json(data, JsonRequestBehavior.AllowGet);







        }



    }
}