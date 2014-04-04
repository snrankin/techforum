Option Explicit On
Option Strict On

Imports System.Data.SqlClient
Imports System.Data
Imports System.Xml
Partial Public Class Speakers
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim doc As New XmlDocument()
        doc.load(MapPath("App_Data\Presenters.xml"))
        Dim nodes As XmlNodeList = doc.SelectNodes("presenters/presentations")
        presentationsRepeater.DataSource = nodes
        presentationsRepeater.DataBind()    
    End Sub

End Class