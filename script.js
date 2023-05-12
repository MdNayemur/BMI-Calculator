        function calc(){
            var wei=document.getElementById("weight").value; 
            var ft=document.getElementById("foot").value; 
            var inc=document.getElementById("inch").value;


            if(wei !="" && ft !="" && inc !="" ){

                var wei=parseFloat(document.getElementById("weight").value); 
                var ft=parseFloat(document.getElementById("foot").value); 
                var inc=parseFloat( document.getElementById("inch").value);

                var meter=(((ft*12)+inc)*.0254);
                meter=Math.pow(meter,2);
                var bmi=wei/meter;
                var bmi = bmi.toFixed(2);
    
               document.getElementById("op").innerHTML="Your BMI Index is"+"&nbsp;"+bmi;
    
               if(bmi>=0 && bmi<18 ){
                   document.getElementById("para").innerHTML="Warning! You are UNDERWEIGHT";
    
               }
                else if(bmi>=18 && bmi<25){
                document.getElementById("para1").innerHTML="Congratulations! Your weight is NORMAL"
                }
                else if(bmi>=25 && bmi<30){
                    document.getElementById("para").innerHTML="Warning! You are OVERWEIGHT";
    
                }
                else if(bmi>30){
                    document.getElementById("para").innerHTML="Warning! You are OBESE";
                }
                else{
                    document.getElementById("para").innerHTML="Warning! Incorrect input";

                }

            }
            else{
                alert('Insert Your Data Properly');
            }




        }