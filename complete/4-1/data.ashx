<%@ WebHandler Language="C#" Class="data" %>
using System.Data;
using System.Web;
using System.Data.OleDb;
public class data : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        System.Threading.Thread.Sleep(300);
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        context.Response.ContentType = "application/json";
        var isregister = context.Request["isregister"];
        var username = context.Request["username"];
        var isuse = true;
        var issuccess = false;
        if (!string.IsNullOrEmpty(username))
        {
            var connectionString = string.Format("Provider=Microsoft.Jet.OLEDB.4.0;Data Source={0}", context.Server.MapPath("database.mdb"));
            using (var conn = new OleDbConnection(connectionString))
            using (var comd = new OleDbCommand())
            {
                if (conn.State != ConnectionState.Open)
                {
                    conn.Open();
                }
                comd.CommandText = string.Format("select * from register where username='{0}'", context.Request["username"]);
                comd.Connection = conn;
                var cord = comd.ExecuteReader();
                isuse = false;
                while (cord.Read())
                {
                    isuse = true;
                }
                cord.Close();
                if (isregister == "true" && !isuse)
                {
                    try
                    {
                        comd.CommandText = string.Format("insert into register(username) values('{0}')", context.Request["username"]);
                        comd.ExecuteNonQuery();
                        issuccess = true;
                    }
                    catch
                    {
                        issuccess = false;
                    }
                }
                conn.Close();
            }
        }
        if (isregister == "true")
        {
            context.Response.Write(issuccess.ToString().ToLower());
        }
        else
        {
            context.Response.Write(isuse.ToString().ToLower());
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