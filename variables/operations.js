function radiobutton()
		{
			var number1=document.getElementById("n1").value
		 	var number2=document.getElementById("n2").value
		    var cal1=document.getElementById("add").checked
			var cal2=document.getElementById("sub").checked
			var cal3=document.getElementById("mul").checked
			var cal4=document.getElementById("div").checked
			if(cal1== false && cal2== false && cal3== false && cal4==false)
			{

				var msg="please select any one operation"
				document.getElementById("err").innerHTML=msg
			}
			else if(cal1==true)
			{
				var sum=parseInt(number1)+parseInt(number2)
				document.getElementById("tie").innerHTML=sum
			}
			else if(cal2==true)
			{
				var sub=number1-number2
				document.getElementById("tie").innerHTML=sub
			}
			else if(cal3==true)
			{
				var mul=number1*number2
				document.getElementById("tie").innerHTML=mul
			}
			else if(cal4==true)
			{
				var div=number1/number2
				document.getElementById("tie").innerHTML=div
			}
			
		}
		function phonenumber()
		{
			var phone=document.getElementById("pnum").value
				var phonelen=phone.length
				if(phonelen==10)
			{
				document.getElementById("pnum").style.boxShadow="0px 0px 10px green"
				document.getElementById("pnum").style.border="0px"
				document.getElementById("lb").style.color="black"
		    }
			else 
				document.getElementById("pnum").style.boxShadow="0px 0px 10px red"
				document.getElementById("pnum").style.border="0px"
				document.getElementById("lb").style.color="red"


		}