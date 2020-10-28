$(document).ready(function() {

    // intercetto il click sull'icona "next"
    $('.next i').click(function() {
        // recupero l'immagine corrente
        var img_corrente = $('img.active');
        var span_corrente = $('span.active');
        console.log(span_corrente);

        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');
        span_corrente.removeClass('active');

        // verifico se esiste un'immagine successiva
        if(img_corrente.next('img').length) {
            // c'è un elemento successivo
            // assegno la classe active all'immagine successiva
            img_corrente.next('img').addClass('active');
            span_corrente.next('span').addClass('active');
        } else {
            // non c'è un elemento successivo
            // assegno la classe active alla prima immagine
            $('.slides :first-child').addClass('active');
            $('.bullets :first-child').addClass('active');
        }
    });

    // intercetto il click sull'icona "prev"
    $('.prev i').click(function() {
        // recupero l'immagine corrente
        var img_corrente = $('img.active');
        var span_corrente = $('span.active');

        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');
        span_corrente.removeClass('active');

        // verifico se esiste un'immagine precedente
        if(img_corrente.prev('img').length) {
            // c'è un elemento precedente
            // assegno la classe active all'immagine precedente
            img_corrente.prev('img').addClass('active');
            span_corrente.prev('span').addClass('active');
        } else {
            // non c'è un elemento precedente
            // assegno la classe active all'ultima immagine
            $('.slides img:last-of-type').addClass('active');
            $('.bullets span:last-of-type').addClass('active');
        }
    });


    //BONUS

    $('.bullets span').click(function() {

        var img_corrente = $('img.active');
        var span_corrente = $('span.active');
        img_corrente.removeClass('active');
        span_corrente.removeClass('active');
        $(this).addClass('active');
        var span_active = $(this).index()+1; //).index() mi permette di ottenere la posizione dell'elemento "array" all'interno del mio HTML
        console.log('span attivo '+ span_active);
        img_corrente=$('img:nth-child(' + span_active + ')');
        img_corrente.addClass('active');
    });

});
