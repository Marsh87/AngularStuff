﻿using System.Web.Mvc;

namespace CRUD_AngularJS_ASPNET_MVC_MAHESH.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
