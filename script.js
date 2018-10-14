    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $(function () {
        for (i = 1; i <= 31; i++) {
            $('#input-date').append('<option>' + i + '</option>');
        }
        for (i = 0; i < 12; i++) {
            $('#input-month').append('<option>' + month[i] + '</option>');
        }
        for (i = 0; i <= 99; i++) {
            var year = i + 1970;
            $('#input-year').append('<option>' + year + '</option>')
        }
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });
    var image_index = 3;
    for(i=2;i<6;i++){
        $(".contents-1").append(
            '<div class="col-12 col-sm-6 col-md-4 col-lg-3 content">'+
            '<div id="carousel-'+ i +'-control" class="carousel slide" data-ride="carousel">'+
                '<ol class="carousel-indicators">'+
                    '<li data-target="#carousel-'+ i +'-control" data-slide-to="0" class="active"></li>'+
                    '<li data-target="#carousel-'+ i +'-control" data-slide-to="1"></li>'+
                    '<li data-target="#carousel-'+ i +'-control" data-slide-to="2"></li>'+
                '</ol>' +
                '<div class="carousel-inner">\
                    <div class="carousel-item active">\
                        <img class="d-block img-fluid" src="images/HCM'+ image_index++ +'.jpg" alt="First slide">\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block img-fluid" src="images/HCM'+ image_index++ +'.jpg" alt="Second slide">\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block img-fluid" src="images/HCM'+ image_index++ +'.jpg" alt="Third slide">\
                    </div>\
                </div>'+
                '<a class="carousel-control-prev" href="#carousel'+ i +'control" role="button" data-slide="prev">\
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
                    <span class="sr-only">Previous</span>\
                </a>'+
                '<a class="carousel-control-next" href="#carousel-'+ i +'-control" role="button" data-slide="next">\
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>\
                    <span class="sr-only">Next</span>\
                </a>\
            </div>\
            <div class="d-flex flex-column place-container">\
                <div class="place-name"> Private room - London </div>\
                <div class="place-description"> Stylish house close to river</div>\
                <div class="place-price"> From 100d per night / Free cancellation</div>\
            </div>\
        </div>'
        )
    }
