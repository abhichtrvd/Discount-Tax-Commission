jQuery.extend(jQuery.expr[':'], {
    focusable: function (el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

$(document).on('keypress', 'input,select', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(document.activeElement) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});


document.getElementById("submitCalc").addEventListener("click", function onclick(event) {
  var mrp=0,q=0,total=0,nd=0,sd=0,tax=0,d_value=0,after_nrml_discount=0;
  var sch_dis_value=0,after_sch_discount=0,tax_value=0,net_cost=0,unit_cost=0;
  var pc=0,comm=0,cd=0,cocd=0;
  var tc=0,tc_value=0;
  var pr=0,sp=0;

  	mrp= document.discountCalculator.mrp.value;
    q= document.discountCalculator.q.value;
    total=mrp*q;
    nd= document.discountCalculator.nd.value;
    d_value= (total*nd)/100
    after_nrml_discount =total-d_value
    sd= document.discountCalculator.sd.value;
    sch_dis_value=(sd*after_nrml_discount)/100
    after_sch_discount =after_nrml_discount-sch_dis_value
    tax=document.discountCalculator.tax.value;
    tax_value=(tax*after_sch_discount)/100
    net_cost=after_sch_discount+tax_value
    unit_cost=net_cost/q;
    document.getElementById("cd").defaultValue = cd;
    cd=document.discountCalculator.cd.value;
    cocd=unit_cost - (unit_cost*cd)/100;
    tc=document.discountCalculator.tc.value;
    tc_value=cocd - (cocd*tc)/100;
    pc=(unit_cost/mrp)*100;
    comm=(100-pc);
    pr=document.discountCalculator.pr.value;
    sp=tc_value + (tc_value * pr)/100;

    document.discountCalculator.uc.value=unit_cost.toFixed(2);
    document.discountCalculator.pc.value=pc.toFixed(2);
    document.discountCalculator.comm.value=comm.toFixed(2);
    document.discountCalculator.cocd.value=cocd.toFixed(2);
    document.discountCalculator.dtc.value=tc_value.toFixed(2);
    document.discountCalculator.sp.value=sp.toFixed(2);
  // event.preventDefault();
});