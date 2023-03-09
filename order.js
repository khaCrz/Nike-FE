let form = document.getElementById("form_infor_delive");
let infor = document.getElementById("infor_delive_show");

let firstname = document.getElementById("first_name")
let lastname = document.getElementById("last_name")
let address = document.getElementById("address")
let email = document.getElementById("email")
let phone_number = document.getElementById("phone_number")

let name_span = document.getElementById("name_span")
let address_span = document.getElementById("address_span")
let email_span = document.getElementById("email_span")
let phone_number_span = document.getElementById("phone_number_span")


all_obj = [firstname, lastname, address, email, phone_number]



editInforClick = function(){
    namearr = name_span.innerText.split(" ")
    let firname = "";
    for(i = 0; i< namearr.length-1; i++){
        firname += namearr[i] + " ";
    }
    firstname.value = firname;
    lastname.value = namearr[namearr.length-1];
    address.value = address_span.innerText;
    email.value = email_span.innerText;
    phone_number.value = phone_number_span.innerText;


    infor.style.display = "none";
    form.style.display = "block";
}

saveFormClick = function(){
    let checksave = true;

    for(i = 0 ; i < all_obj.length ; i++){
        if(all_obj[i].value == ""){
            checksave = false;
            all_obj[i].classList.add("no-input");
        }
    }
    if(checksave){
        name_span.innerText = firstname.value + lastname.value
        address_span.innerText = address.value
        email_span.innerText = email.value
        phone_number_span.innerText = phone_number.value

        infor.style.display = "block";
        form.style.display = "none";
    }
}

onChangeE = function(id){
    document.getElementById(id).classList.remove("no-input");
}





