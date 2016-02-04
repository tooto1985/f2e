<%@ WebHandler Language="C#" Class="Data" %>
using System.Collections.Generic;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.SessionState;
public class Data : IHttpHandler,IRequiresSessionState
{
    public int Max = 20;
    public List<string> List = new List<string>();
    public void ProcessRequest (HttpContext context)
    {
        context.Response.AddHeader("Access-Control-Allow-Origin", context.Request.Headers["Origin"] ?? "*");
        context.Response.AddHeader("Access-Control-Allow-Credentials", "true");
        context.Response.ContentType = "application/json";
        var name = context.Request["name"] ?? "";
        var message = context.Request["message"] ?? "";
        if (context.Application["pos"] == null)
        {
            context.Application["pos"] = 0;
        }
        int userpos;
        if (context.Session["pos"] == null)
        {
            userpos = (int)context.Application["pos"];
        }
        else
        {
            userpos = (int) context.Session["pos"];
        }
        if (!string.IsNullOrEmpty(name) && !string.IsNullOrEmpty(message))
        {
            context.Application.Lock();
            int pos = int.Parse(context.Application["pos"].ToString());
            context.Application["message" + pos] = name + "說：" + message;
            if (pos >= Max)
            {
                pos = -1;
            }
            pos++;
            context.Application["pos"] = pos;
            context.Application.UnLock();
        }
        if ((int)context.Application["pos"] > userpos)
        {
            for (var i = userpos; i < (int)context.Application["pos"]; i++)
            {
                ShowMessage(i);
            }
        }
        else if ((int)context.Application["pos"] < userpos)
        {
            for (var i = userpos; i < Max + 1; i++)
            {
                ShowMessage(i);
            }
            for (var i = 0; i < (int)context.Application["pos"]; i++)
            {
                ShowMessage(i);
            }
        }
        context.Session["pos"] = (int) context.Application["pos"];
        
        context.Response.Write(new JavaScriptSerializer().Serialize(List));
    }

    private void ShowMessage(int pos)
    {
        List.Add(HttpContext.Current.Application["message" + pos].ToString());
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}