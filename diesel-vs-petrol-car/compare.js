// http://rmathew.com/2006/calculating-emis.html

function disp(inp){
    return isNaN(inp) ? "" : inp;
}

function compare(){
    var opts = {
        petrol_car_base_price: parseFloat($("#petrol-onroad-price").val()),
        diesel_car_base_price: parseFloat($("#diesel-onroad-price").val()),
        petrol_price_per_ltr: parseFloat($("#petrol-price").val()),
        diesel_price_per_ltr: parseFloat($("#diesel-price").val()),
        loan_amount: parseFloat($("#loan-amount").val()),
        loan_interest: parseFloat($("#loan-interest").val()),
        loan_term: parseFloat($("#loan-duration").val())*12,
        petrol_car_mileage: parseFloat($("#petrol-fuel-efficiency").val()),
        diesel_car_mileage: parseFloat($("#diesel-fuel-efficiency").val()),
        monthly_average: parseFloat($("#usage").val())
    };
    
    var total_fuel_price_petrol = 0;
    var total_fuel_price_diesel = 0;
    var petrol_car_total = 0;
    var diesel_car_total = 0;
    var loan_amount_petrol = opts.loan_amount - (opts.diesel_car_base_price - opts.petrol_car_base_price);
    loan_amount_petrol = loan_amount_petrol > 0 ? loan_amount_petrol : 0;

    var r = opts.loan_interest/12/100;
    var loan_emi_diesel = opts.loan_amount * r * Math.pow((1+r), opts.loan_term)/(Math.pow((1+r), opts.loan_term) - 1);
    var loan_emi_petrol = loan_amount_petrol * r * Math.pow((1+r), opts.loan_term)/(Math.pow((1+r), opts.loan_term) - 1);
    $("#emi").html("<strong>EMI Diesel car: </strong><br/>Rs" + disp(parseInt(loan_emi_diesel, 10)) + 
                   ' for loan amount Rs' + opts.loan_amount +
                  "<br/><br/>" + "<strong>EMI Petrol car: </strong><br/>Rs" + 
                   disp(parseInt(loan_emi_petrol, 10)) + 
                   ' for loan amount Rs' + loan_amount_petrol);

    var loan_interest_paid_diesel = loan_emi_diesel*opts.loan_term - opts.loan_amount;
    var loan_interest_paid_petrol = loan_emi_petrol*opts.loan_term - loan_amount_petrol;
    var class_name = "economical";
    $("#petrol-blocks, #diesel-blocks, #year-blocks").html('');
    

    $("<div/>")
        .addClass("block-caption")
        .text("year")
        .appendTo("#year-blocks");

    $("<div/>")
        .addClass("block-caption")
        .text("petrol car")
        .appendTo("#petrol-blocks");

    $("<div/>")
        .addClass("block-caption")
        .text("diesel car")
        .appendTo("#diesel-blocks");    

    $("#details tbody").html('');

    // 15 years
    for (var i=1; i<=15; i++) {
        total_fuel_price_petrol = (i * 12 * opts.monthly_average * opts.petrol_price_per_ltr)/opts.petrol_car_mileage; 
        total_fuel_price_diesel = (i * 12 * opts.monthly_average * opts.diesel_price_per_ltr)/opts.diesel_car_mileage; 
        petrol_car_total = opts.petrol_car_base_price + total_fuel_price_petrol + loan_interest_paid_petrol;
        diesel_car_total = opts.diesel_car_base_price + total_fuel_price_diesel + loan_interest_paid_diesel;
        
        var petrol_price_color = petrol_car_total > diesel_car_total ? "red" : "green";
        var diesel_price_color = diesel_car_total > petrol_car_total ? "red" : "green";

        var row = "<tr><td>" + i + "</td><td class='amount' style='color:" + petrol_price_color + "'>" + 
            disp(parseInt(petrol_car_total,10)) + "</td><td class='amount' style='color:" + diesel_price_color + "'>" + 
            disp(parseInt(diesel_car_total,10)) + "</td></tr>";

        $(row).appendTo("#details tbody");

        class_name = "economical";
        if (petrol_car_total > diesel_car_total){
            class_name = "non-economical";
        }


        $("<div/>")
            .addClass("block-petrol")
            .addClass(class_name)
            .attr("title", "Rs. " + disp(parseInt(petrol_car_total, 10)) + "/-")
            .appendTo("#petrol-blocks");

        $("<div/>")
            .addClass("block-year")
            .attr("title", "Year " + i)
            .text(i)
            .appendTo("#year-blocks");

        $("<div/>")
            .addClass("block-diesel")
            .attr("title", "Rs. " + disp(parseInt(diesel_car_total, 10)) + "/-")
            .appendTo("#diesel-blocks");
    }
}


function bind_events(){
    var elements = ["#loan-amount",
                    "#loan-interest",
                    "#loan-duration", 
                    "#petrol-onroad-price",
                    "#petrol-fuel-efficiency",
                    "#petrol-price",
                    "#diesel-onroad-price",
                    "#diesel-fuel-efficiency",
                    "#diesel-price",
                    "#usage"];
    $(elements.join(",")).keyup(function(){
        compare();
    });

}

