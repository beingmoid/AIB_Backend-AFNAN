using AIB.Common;
using AIB.Services.Core.Utility;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using static AIB.Common.Constants;

namespace AIB.Api
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                OtherConstants.Clear();
                await _next(httpContext);
            }
            catch (ServiceException sx)
            {
                await HandleExceptionAsync(httpContext, sx);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex);
            }
        }
        private Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            string messages = "";
            var serviceException = exception as ServiceException;
            if (serviceException != null)
            {
                foreach (var item in serviceException.Errros)
                {
                    messages += item;
                 
                }
                return context.Response.WriteAsync(JsonConvert.SerializeObject(new BaseResponse()
                {
                    errorMessage = messages,
                    errorStackTrace = exception.StackTrace,
                    dynamicResult = null,
                    isSuccessfull = false,
                    messageType = "Failed",
                    statusCode = 500,
                    message = "Something went wrong. Kindly contact system administration!",
                }));
            }
            else
            {
                return context.Response.WriteAsync(JsonConvert.SerializeObject(new BaseResponse()
                {
                    errorMessage = exception.Message,
                    errorStackTrace = exception.StackTrace,
                    dynamicResult = null,
                    isSuccessfull = false,
                    messageType = "Failed",
                    statusCode = 500,
                    message = "Something went wrong. Kindly contact system administration!",
                }));
            }
         
         
        }
     
    }
}
