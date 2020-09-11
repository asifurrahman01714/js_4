var num=parseInt(prompt("enter the number: ") ) ;
 if(num > 100 || num < 0)
 document.write("Invalid Marks");
 
 else if(num >= 80 && num <=100)
 document.write("The Grade is A+");
 else if(num>=70 && num<80)
 document.write("the grade is A");
 else if(num>=60 && num<70)
 document.write("the grade is A-");
 else if(num>=50 && num<60)
 document.write("the grade is B");
 else if(num>=40 && num<50)
 document.write("the grade is C");
 else if(num>=33 && num<40)
 document.write("the grade is D");
 else
 document.write("Fail");
