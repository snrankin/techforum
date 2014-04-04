<%@ Page Title="Past Sessions" Language="VB" MasterPageFile="~/Site.master" Debug="true" %>
<%@ Import Namespace="System.Data" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Main" Runat="Server">
	<h1>Past Tech Forum Sessions</h1>
	<p>Haven't been to our Tech Forum before? Missed last session? No problem! Check out our video playlist below or see past speakers</p>
	<h2 class="noprint">Watch Past Sessions</h2>
	<div class="video-container noprint">
         <iframe src="http://www.youtube.com/embed/videoseries?list=PL615E2186E5AF979C" frameborder="0" width="100%" ></iframe>
	</div>
	<h2>Past Speakers</h2>
    <asp:Repeater ID="Speakers" runat="server" DataSourceID="PastSpeakers">
        <ItemTemplate>
            <div class="Accordion">
                <div class="AccordionPanel">
                    <div class="AccordionPanelTab">
                        <strong><%# XPath("@name") %><br /></strong>
                        <span class="subtitle"> <%#XPath("title")%></span>
                    </div>
                    <div class="AccordionPanelContent">
                        <div class="AccordionContent">
                            <%#XPath("bio")%>
                        </div>
                    </div>
                </div>
            </div>
        </ItemTemplate>
    </asp:Repeater>
    <asp:XmlDataSource ID="PastSpeakers" runat="server" DataFile="App_Data/speakers.xml" XPath="pastspeakers/speaker">
    </asp:XmlDataSource>
</asp:Content>
