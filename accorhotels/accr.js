function username()
{
	var user=document.getElementById("email").value
	 var userlen=user.length
		if(userlen>=5)
	{
		document.getElementById("number").setAttribute("class","fa fa-check-circle")
		document.getElementById("number").style.color="green"
		//document.getElementById("labelid1").style.color="green"
		document.getElementById("email").style.borderColor="green"
		var err=""
		document.getElementById("str").innerHTML=err
			//document.getElementById("pwd").focus()
	}
		else
	{
		document.getElementById("number").setAttribute("class","fa fa-exclamation-circle")
		//document.getElementById("labelid1").style.color="red"
		//document.getElementById("labelid2").style.color="red"
		document.getElementById("number").style.color="red"
		document.getElementById("email").style.borderColor="red"
		var err="enter valid email.."
		document.getElementById("str").innerHTML=err
			//document.getElementById("email").focus()
	}
	
	
} 
function password()
{
	var user=document.getElementById("pwd").value
	 var userlen=user.length

		if(userlen>=5)
	{
		document.getElementById("number1").setAttribute("class","fa fa-check-circle")
		document.getElementById("number1").style.color="green"
		document.getElementById("pwd").style.borderColor="green"
		//document.getElementById("labelid3").style.color="green"
		var err1=""
		document.getElementById("str1").innerHTML=err1
	    document.getElementById("eye").setAttribute("class","fa fa-eye-slash")
	    document.getElementById("eye").style.color="black"
			//document.getElementById("email").focus()
	}
	
	else
	{
		document.getElementById("number1").setAttribute("class","fa fa-exclamation-circle")
		document.getElementById("str1").style.color="red"
		document.getElementById("pwd").style.borderColor="red"
		//document.getElementById("pwd").style.color="red"
		//document.getElementById("labelid3").style.color="red"
		document.getElementById("number1").style.color="red"
		var err1="enter valid password"
		document.getElementById("str1").innerHTML=err1
			//document.getElementById("pwd").focus()
	}
	
}






	

