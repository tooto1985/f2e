<%@ WebHandler Language="C#" Class="data" %>
using System.Collections.Generic;
using System.Threading;
using System.Web;
using System.Web.Script.Serialization;

public class data : IHttpHandler
{
    private int Max = 20;
    public int Keep = 60000;
    public int Step = 200;
    private List<string> List = new List<string>();
    public void ProcessRequest(HttpContext context)
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
        var userpos = 0;
        if (context.Request.Cookies["pos"] == null)
        {
            userpos = (int)context.Application["pos"];
        }
        else
        {
            userpos = int.Parse(context.Request.Cookies["pos"].Value);
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
        else
        {
            var currentTimer = 0;
            while (currentTimer < Keep)
            {
                if ((int)context.Application["pos"] != userpos)
                {
                    break;
                }
                currentTimer += Step;
                Thread.Sleep(Step);
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
            context.Response.Cookies["pos"].Value = context.Application["pos"].ToString();
            context.Response.Write(new JavaScriptSerializer().Serialize(List));
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
    private void ShowMessage(int pos)
    {
        List.Add(HttpContext.Current.Application["message" + pos].ToString());
    }
}