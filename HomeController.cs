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
        // public ActionResult StudentsAcc2()
        //{
        //    var data = new List<object>();

        //    // Retrieve data from request parameters
        //    var IDnum = Request["IDnum"];
        //    var LastName = Request["LastName"];
        //    var FrstName = Request["FrstName"];
        //    var Gnder = Request["Gnder"];
        //    var CodeCourse = Request["CodeCourse"];
        //    var Years = Request["Years"];
        //    var Subjects = Request["Subjects"];
        //    var TotalUnits = Request["TotalUnits"];
        //    var TuitionPerUnit = Request["TuitionPerUnit"];
        //    var TotalTuition = Request["TotalTuition"];
        //    var Registration = Request["Registration"];
        //    var Miscellaneous = Request["Miscellaneous"];
        //    var LabFees = Request["LabFees"];
        //    var TotalFeesCourse = Request["TotalFeesCourse"];
        //    var Assessment = Request["Assessment"];
        //    var TotalFee = Request["TotalFee"];
        //    var Balance = Request["Balance"];
        //    var Pesos = Request["Pesos"];
        //    var Centavos = Request["Centavos"];
        //    var Results = Request["Results"];
        //    var AmountPayS = Request["AmountPay"];
        //    data.Add(new

        //    {
        //        mess = 1
        //        //IDnum = IDnum,
        //        //LastName = LastName,
        //        //FrstName = FrstName,
        //        //Gnder = Gnder,
        //        //CodeCourse = CodeCourse,
        //        //Years = Years,
        //        //Subjects = Subjects,
        //        //TotalUnits = TotalUnits,
        //        //TuitionPerUnit = TuitionPerUnit,
        //        //TotalTuition = TotalTuition,
        //        //Registration = Registration,
        //        //Miscellaneous = Miscellaneous,
        //        //LabFees = LabFees,
        //        //TotalFeesCourse = TotalFeesCourse,
        //        //Assessment = Assessment,
        //        //TotalFee = TotalFee,
        //        //Balance = Balance,
        //        //Pesos = Pesos,
        //        //Centavos = Centavos,
        //        //Results = Results,
        //        //AmountPayS = AmountPayS
        //    });
        //    return Json(data, JsonRequestBehavior.AllowGet);


        //}
        public ActionResult SystemController()
        {
            var data = new List<object>();

            // Retrieve data from request parameters
            var IDnum = Request["IDnum"];
            var LastName = Request["LastName"];
            var FrstName = Request["FrstName"];
            var Gnder = Request["Gnder"];
            var CodeCourse = Request["CodeCourse"];
            var Years = Request["Years"];
            var Subjects = Request["Subjects"];
            var TotalUnits = Request["TotalUnits"];
            var TuitionPerUnit = Request["TuitionPerUnit"];
            var TotalTuition = Request["TotalTuition"];
            var Registration = Request["Registration"];
            var Miscellaneous = Request["Miscellaneous"];
            var LabFees = Request["LabFees"];
            var TotalFeesCourse = Request["TotalFeesCourse"];
            var Assessment = Request["Assessment"];
            var TotalFee = Request["TotalFee"];
            var Balance = Request["Balance"];
            var Pesos = Request["Pesos"];
            var Centavos = Request["Centavos"];
            var Results = Request["Results"];
            var AmountPays = Request["AmountPay"];
            data.Add(new
            {
                mess = 1,
               // mess1 = FrstName + " your change is "+ Results +"Thank you for Paying",
                IDnum = IDnum,
                LastName = LastName,
                FrstName = FrstName,
                Gnder = Gnder,
                CodeCourse = CodeCourse,
                Years = Years,
                Subjects = Subjects,
                TotalUnits = TotalUnits,
                TuitionPerUnit = TuitionPerUnit,
                TotalTuition = TotalTuition,
                Registration = Registration,
                Miscellaneous = Miscellaneous,
                LabFees = LabFees,
                TotalFeesCourse = TotalFeesCourse,
                Assessment = Assessment,
                TotalFee = TotalFee,
                Balance = Balance,
                Pesos = Pesos,
                Centavos = Centavos,
                Results = Results,
                AmountPays = AmountPays
            });
                return Json(data, JsonRequestBehavior.AllowGet);
          }
        public ActionResult Gibo()
        {
            return View();
        }
        public ActionResult StudControl()
        {
            var data = new List<object>();

            var id = Request["id"];
            var lname = Request["lname"];
            var fname = Request["fname"];
            var gender = Request["gender"];
            var course = Request["course"];
            var coursename = Request["coursename"];
            var yrlvl = Request["yrlvl"];
            var subject = Request["subject"];
            var totalunits = Request["totalunits"];
            var tuition = Request["tuition"];
            var totaltuition = Request["totaltuition"];
            var reg = Request["reg"];
            var misc = Request["misc"];
            var lab = Request["lab"];
            var totalcost = Request["totalcost"];
            var prelim = Request["prelim"];
            var midterm = Request["midterm"];
            var semis = Request["semis"];
            var finals = Request["finals"];

            var studData = new
            {
                id = id,
                lname = lname,
                fname = fname,
                gender = gender,
                course = course,
                coursename = coursename,
                yrlvl = yrlvl,
                subject = subject,
                totalunits = totalunits,
                tuition = tuition,
                totaltuition = totaltuition,
                reg = reg,
                misc = misc,
                lab = lab,
                totalcost = totalcost,
                prelim = prelim,
                midterm = midterm,
                semis = semis,
                finals = finals
            };

            data.Add(studData);
            return Json(data, JsonRequestBehavior.AllowGet);
        }



    }
}