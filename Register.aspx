<%@ Page Title="" Language="VB" MasterPageFile="~/Site.master" Debug="true" %>
<%@Import Namespace="System.IO" %>

<script runat="server">
	
</script>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Main" Runat="Server">
	<h1>Register for TechForum</h1>
<form id="RSVP" name="RSVP" method="post" action="" target="frmSubmit" onsubmit="return uploadForm();" enctype="multipart/form-data">

	<input type="hidden" name="formid" value="71" />
	<input type="hidden" name="user_render" value="table" />
	<input type="hidden" name="render_order" value="First_Name,Last_Name,User_Email,Phone,Am_I_A_UAT_Student,Selected_Interests,Days_Attending,Names_Of_Friends_Coming_With_Me,Send_More_Info_About_UAT,Comments_And_Suggestions" />
	<input type="hidden" name="no_receive_all" value="a1,a2,a3,a4,a5,a6,a7,a8,a9,b1,b2,b3" />
	<input type="hidden" name="validation" value="First_Name,alphanumeric,2%Last_Name,alphanumeric,2" />

	<div class="formsection">
		<h3>Personal and Guest Information</h3>
		<div class="secondary">
			<label>First Name*</label>
			<input onKeyUp="frmFilter(1,'|-|.|,|~|`','alpha',this,event);"  type="text" id="First_Name" name="First_Name" maxlength="40" class="input50" required/>
			<label>Last Name*</label>
			<input onKeyUp="frmFilter(1,'|-|.|,|~|`','alpha',this,event);"  type="text" id="Last_Name" name="Last_Name" maxlength="40" class="input50" required />
			<label>Email*</label>
			<input onKeyUp="frmFilter(1,'|@|.|-|_','both',this,event);"  type="email" id="User_Email" name="User_Email" maxlength="40" class="input50" required />
			<label>Phone</label>
			<input onKeyUp="frmFilter(1,'','numeric',this,event);"  type="tel" id="Phone" name="phone" maxlength="10" /> 
		</div>
		<div class="secondary">
			<label>Are You a UAT Student?</label>
			<input type="radio" name="Am_I_A_UAT_Student" value="Yes" />Yes<br/>
			<input type="radio" name="Am_I_A_UAT_Student" value="No" />No<br/>
		</div>
		<div class="secondary">
			<label>Select your interests:</label>
			<input type="checkbox" name="a1" onmousedown="target_changer('Selected_Interests', 'Art/Animation');"  />Art/Animation<br />
			<input type="checkbox" name="a2" onmousedown="target_changer('Selected_Interests', 'Character animation and visual effects');" />Character Animation and Visual Effects<br/>
			<input type="checkbox" name="a3" onmousedown="target_changer('Selected_Interests', 'Digital Video Production');" />Digital Video Production<br/>
			<input type="checkbox" name="a4" onmousedown="target_changer('Selected_Interests', 'Gaming');" />Gaming<br/>
			<input type="checkbox" name="a5" onmousedown="target_changer('Selected_Interests', 'Game Design');"  />Game Design<br/>
			<input type="checkbox" name="a6" onmousedown="target_changer('Selected_Interests', 'Game Programming');" />Game Programming<br/>
			<input type="checkbox" name="a7" onmousedown="target_changer('Selected_Interests', 'Network Security');" />Network Security<br/>
			<input type="checkbox" name="a8" onmousedown="target_changer('Selected_Interests', 'Web development');" />Web Development<br/>
			<input type="checkbox" name="a9" onmousedown="target_changer('Selected_Interests', 'Web management');" />Web Management<br/>
			<input type="hidden" id="Selected_Interests" name="Selected_Interests" value="" />
		</div>
		<div class="secondary">
			<label>Select Day Attending:</label>
			<input type="checkbox" name="b1" onmousedown="target_changer('Days_Attending', 'Wednesday');" />Wednesday<br/>
			<input type="checkbox" name="b2" onmousedown="target_changer('Days_Attending', 'Thursday');" />Thursday<br/>
			<input type="checkbox" name="b3" onmousedown="target_changer('Days_Attending', 'Friday');"/>Friday<br/>
			<input type="hidden" id="Days_Attending" name="Days_Attending" value="" />
		</div>
		<label>If you are bringing a friend, please let us know who they are.</label>
		<input name="Names_Of_Friends_Coming_With_Me" type="text" id="Names_Of_Friends_Coming_With_Me" class="input50" />
	</div>
	<div class="formsection">
	<h3>Additional Information:</h3>
	<div class="secondary">
		<input type="checkbox" name="Send_More_Info_About_UAT" id="Send_More_Info_About_UAT" value="I would like additional information mailed to me about UAT" /> I’d like additional information mailed to me about UAT
	</div>
	<div class="secondary">
		<label>Comments/Suggestions</label>
		<textarea name="Comments_And_Suggestions" rows="5" id="Comments_And_Suggestions" class="input100" ></textarea>
	</div>
	<div class="secondary">
		<label>How would you like to receive your email receipt of this form?</label>
		<select name="User_Preference" id="User_Preference" class="dropbox">
			<option value="html">HTML</option>
			<option value="text">Plain Text</option>	
		</select>
	</div>
	<p>Be sure that you have filled out <u>ALL</u> of the information that applies to you before submitting the form.</p>
	</div>
	<input type="submit" value="Submit" name="Submit" id="Submit" class="buttons" />
	<input type="reset" onclick="reset()" style="cursor:hand" name="Reset" id="Img1" onmousedown="document.getElementById('Submit').disabled=false;" />
</form>
<iframe id="frmSubmit" name="frmSubmit" height="1" width="1" style="visibility:hidden;" src="/frmSubmit/iframe_msg_passifier.html">
</iframe>
</asp:Content>

