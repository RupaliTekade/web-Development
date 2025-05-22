
function validater(){
    let isvalid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const dob = document.getElementById("dob").value.trim();

    document.querySelectorAll(".error").forEach((element)=>{element.innerText=""});

    if( !/^[A-Za-z ]+$/.test(name) || name.length<3){
        document.getElementById("nameError").innerText
        ="name must be atleast 3 chracter and contains only alphabhat"  ;
        isvalid=false;
      }

    if(!/^[A-Za-z.\d]+@(gmail|yahoo).com$/.test(email) || email.length<10){
          document.getElementById("emailError").innerText
        ="plz enter valid email"  ;
        isvalid=false;

    }
    if(!/^[6-9]\d{9}$/.test(phone) || phone.length<10){
          document.getElementById("phoneError").innerText
        ="plz enter valid phone number"  ;
        isvalid=false;
    }
    return isvalid;

}
function Submit(){
    const validity = validater();

    if(validity){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const dob = document.getElementById("dob").value.trim();


    console.log(name,email,phone,password,dob);
    }
}