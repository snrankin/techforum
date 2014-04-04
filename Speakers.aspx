<%@ Page Title="Speakers" Language="VB" CodeFile="~/Speakers.aspx.vb" Inherits="Speakers" MasterPageFile="~/Site.master" Debug="true" %>
<%--<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Xml" %>--%>
<%--<script runat="server">
    XmlDocument doc = new XmlDocument();
    doc.Load(Server.MapPath("App_Data/test.xml"));
    XmlNodeList nodes =
       doc.SelectNodes("CategoryList/Category/MainCategory");
    rpMyRepeater.DataSource = nodes;
    rpMyRepeater.DataBind();
</script>
--%>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Main" Runat="Server">
	<h1>About the Speakers</h1>
	<p>This year's guest speakers come from a wide variety of backgrounds that explore pathways as varied as working at an indecent game studio to working at Blizzard. From user experience design in music to how design itself can change our world. And from practical technology in current day Hollywood, to techniques for an Indie-Sci Fi film. Our presenters bring a diverse amount of experience and knowledge to Tech Forum and we can't wait to hear from them.</p>
	<asp:repeater id="presentationsRepeater" runat="server">
		<ItemTemplate>
			<div class="presentation clearfix">
				<div class="presentationtitle">
					<h3><%# XPath("presentationtitle") %></h3>
				</div>
				<asp:repeater id="presenterRepeater" runat="server" DataSource='<%# Container.DataItem %>'>
					<ItemTemplate>
						<div class="presenter">
							<div class="presname">
								<%# XPath("presentername") %>
							</div>
							<div class="prestitle">
								<%# XPath("title") %>
							</div>
							<div class="presimage">
								<%# XPath("image") %>
							</div>
							<div class="presbio">
								<%# XPath("bio") %>
							</div>
						</div>
					</ItemTemplate>
				</asp:repeater>
			</div>
		</ItemTemplate>
	</asp:Repeater>
</asp:Content>

