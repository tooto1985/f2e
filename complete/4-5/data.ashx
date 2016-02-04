<%@ WebHandler Language="C#" Class="data" %>
using System.Data;
using System.Web;
using System.Data.OleDb;
using System.Web.Script.Serialization;
using System.Collections.Generic;
public class data : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        context.Response.ContentType = "application/json";
        int fetch;
        int.TryParse(context.Request["fetch"], out fetch);
        int num;
        int.TryParse(context.Request["num"], out num);
        var connectionString = string.Format("Provider=Microsoft.Jet.OLEDB.4.0;Data Source={0}", context.Server.MapPath("database.mdb"));
        using (var conn = new OleDbConnection(connectionString))
        using (var comd = new OleDbCommand())
        {
            if (conn.State != ConnectionState.Open)
            {
                conn.Open();
            }
            comd.CommandText = string.Format("select{0} * from article where num >{1}", fetch != 0 ? " top " + fetch : "", num);
            comd.Connection = conn;
            var cord = comd.ExecuteReader();
            var list = new List<Dictionary<string, object>>();
            while (cord.Read())
            {
                var dc = new Dictionary<string, object>();
                for (var i = 0; i < cord.FieldCount; i++)
                {
                    dc.Add(cord.GetName(i), cord[cord.GetName(i)]);
                }
                list.Add(dc);
            }
            context.Response.Write(new JavaScriptSerializer().Serialize(list));
        }

    }
    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}