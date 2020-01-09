$(document).ready(function(){



    var numero = '';

    var data_scelta = '2018-01-01';

    var data_base =  moment(data_scelta);

    var giorni_mese =  moment(data_scelta).daysInMonth();

    var mese = data_base.get('month');
    console.log(mese);








    aggiungiGiorni(giorni_mese);

    console.log($('h1 span').text());



    console.log("GIORNI DEL MESE");
    console.log(giorni_mese);

    chiamataAjax();



        $("#right").click(function(){



            if ($('h1 span').text() != 'December') {


                data_bases = data_base.add(1,'months').format("DD MM YYYY");
                giorni_mese = data_base.daysInMonth();
                mese = data_base.get('month');
                aggiungiGiorni(giorni_mese);
                chiamataAjax();
                console.log(data_bases);

            }

        });

        $("#left").click(function(){



            if ($('h1 span').text() != 'January') {

                data_bases = data_base.subtract(1,'months').format("DD MM YYYY");
                giorni_mese = data_base.daysInMonth();
                mese = data_base.get('month');
                aggiungiGiorni(giorni_mese);
                chiamataAjax();
                console.log(data_bases);

            }

        });


        function chiamataAjax(){


        $.ajax({
            'url':"https://flynn.boolean.careers/exercises/api/holidays?",
            'data':{
                'year':2018,
                'month': mese
            },
            'methods':'get',
            'success':function(data){

                var feste = data.response;
                var data_feste = '';
                for (var i = 0; i < feste.length; i++) {

                    console.log(feste[i]);
                    data_feste = moment(feste[i].date).format('D');



                    console.log(data_feste);

                    $('li[data-mese="'+ data_feste +'"]').append(' - ' +feste[i].name);
                    $('li[data-mese="'+ data_feste +'"]').css({'color':'red'});

                }





            },
            'error':function(){
                alert('errore');
            }






        });

    };












    function aggiungiGiorni(giorniMese ){

        $('main ul').empty();
        $('h1 span').empty();

        var nome_mese = data_base.format('MMMM');

        $('h1 span').append(nome_mese);



        for (var numero = 01; numero <= giorniMese; numero++) {
            $('main ul').append('<li data-mese="'+ numero +'">' + numero + ' ' + nome_mese +'</li>' );
        }

    }






});
