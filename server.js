function register(){
    
    var namefromHtml=document.getElementById("name");
    if(namefromHtml){
        var name=namefromHtml.value;
        console.log(name);
    }
    var emailfromHtml=document.getElementById("Email")
    if(emailfromHtml){
        var email=emailfromHtml.value;
        console.log(email);
    }
    var passwordfromHtml=document.getElementById("password");
    if(passwordfromHtml){
        var password=passwordfromHtml.value;
        console.log(password);
    }
    if(name && email && password){
        localStorage.setItem("userdata",JSON.stringify({name:name,email:email,password:password}))
        localStorage.setItem("isUserLoggedIn","true");
        alert("register done");
        window.location.href="./login.html";
    }else{
        alert("Error:-write all field..")
    }
}

function login(){
    
    var emailFromHtml=document.getElementById("email");
    if(emailFromHtml){
        var emialFromLogin=emailFromHtml.value;
        console.log(emialFromLogin)
    }
    var passwordFromHtml=document.getElementById("password");
    if(passwordFromHtml){
        var passwordFromLogin=passwordFromHtml.value;
        console.log( passwordFromLogin)
    }
    if(emialFromLogin && passwordFromLogin){
        var dataFromLocal=localStorage.getItem("userdata");
            //   console.log(dataFromLocal);
        var parsedData=JSON.parse(dataFromLocal);
        console.log(parsedData,"parsedData.emailofUser");
        if(emialFromLogin == parsedData.email && passwordFromLogin == parsedData.password){
            localStorage.setItem("isUserLoggedIn","true");
            alert("Login succefull");
            window.location.href = "./home.html";
        }else{
            alert("wrong cread")
        }
    }else{
        alert("Error:-write all cread")
    }
}


function addTocard(proId){
    alert("adding to cart");
    console.log(proId);
    var existingProduct = JSON.parse(localStorage.getItem("allproducts"));
    console.log(existingProduct)
    if(existingProduct==null){existingProduct=[]}

    console.log( existingProduct," existingProduct 1")
    var proPs=proId.querySelectorAll("p");
    var proName=proPs[0].innerText;
   // console.log(proName,"proName")
   var proImg=proId.querySelector("img").src;
    var proPrice=proPs[2].innerText;
    //console.log(proPrice)
    var proObj={pN:proName,pP:proPrice,pI:proImg}
    console.log(proObj)
    existingProduct.push(proObj)
   // console.log( existingProduct," existingProduct 2")
    localStorage.setItem("allproducts",JSON.stringify(existingProduct ));
    alert("product")

    
    
}