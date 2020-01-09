$(document).ready(function(){



    var data_scelta = '2018-1-1';

    var data_base =  moment(data_scelta);

    var giorni_mese =  moment(data_scelta).daysInMonth();


    aggiungiGiorni(giorni_mese);





    console.log("GIORNI DEL MESE");
    console.log(giorni_mese);

    $("#right").click(function(){

        data_bases = data_base.add(1,'months').format("DD MM YYYY");
        giorni_mese = data_base.daysInMonth();
        aggiungiGiorni(giorni_mese);
        console.log(data_bases);

    });


    function aggiungiGiorni(giorniMese){

        $('main ul').empty();

        var nome_mese = data_base.format('MMMM');

        for (var i = 1; i <= giorniMese; i++) {
            $('main ul').append('<li>' + i + ' ' + nome_mese +'</li>' );
        }

    }






});
