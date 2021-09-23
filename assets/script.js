$(function(){
    $("#btn1").on('click', function(){
        $('#body1').html('<h1>What are people who write computer code called</h1><button class="wrong" id="btn6">Cops</button><button class="wrong" id="btn7">Firefighter</button><button class="wrong" id="btn8">Teacher</button><button id="btn9">Programer</button></div></div>');
        $(".wrong").on('click', function() { 
            alert("You is wrong"); 
        });

        $("#btn9").on('click', function() {
            $('#body1').html('<h1>which of these is not a programming launguage</h1><button id="btn10">Cheese</button><button class="wrong" id="btn11">Python</button><button class="wrong" id="btn12">Java</button><button class="wrong" id="btn13">Jquery</button></div></div>');
            $(".wrong").on('click', function() { 
                alert("You is wrong"); 
            });

            $('#btn10').on('click', function(){
            $('#body1').html('<h1>What is computer coding</h1><button class="wrong" id="btn14">building hoouses</button><button class="wrong" id="btn15">running a mile</button><button class="wrong" id="btn16">A podcast</button><button id="btn17">Telling the computer what to do</button></div></div>');

            $(".wrong").on('click', function() { 
                alert("You is wrong"); 
            });

            $('#btn17').on('click', function() {

                $('#body1').html('<h1>Why do you want to be a devolper?</h1><button class="wrong" id="btn18">To build hoouses</button><button class="wrong" id="btn19">I want to compete in the olympics</button><button  id="btn20">Because I want to start A podcast</button><button class="wrong" id="btn44">Because I am awesome and so is coding</button></div></div>');

                $('.wrong').on('click', function() {
                    alert("you aint right")
                });

                $('#btn20').on('click', function() {
                    $('#body1').html("<h1>You Won, You Are The Greatest Ever!!!</h1>")
                });

            })

            


             

        });
        
        });
    
    });

});