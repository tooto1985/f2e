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
        var search = context.Request["search"];
        if (!string.IsNullOrEmpty(search))
        {
            var connectionString = string.Format("Provider=Microsoft.Jet.OLEDB.4.0;Data Source={0}", context.Server.MapPath("database.mdb"));
            using (var conn = new OleDbConnection(connectionString))
            using (var comd = new OleDbCommand())
            {
                if (conn.State != ConnectionState.Open)
                {
                    conn.Open();
                }
                comd.CommandText = string.Format("select username from register where (username like '{0}%')", search);
                comd.Connection = conn;
                var cord = comd.ExecuteReader();
                var list = new List<string>();
                while (cord.Read())
                {
                    list.Add(cord["username"].ToString());
                }
                context.Response.Write(new JavaScriptSerializer().Serialize(list));
            }
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