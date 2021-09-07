function Validation(){
    this.checkEmpty=function(inputVal,ID,message){
        if(inputVal.trim()==""){
            document.getElementById(ID).innerHTML=message;
            return false
        }else{
            document.getElementById(ID).innerHTML="";
            return true
        }
    }
    this.checkID=function(inputVal,ID,message){
    var isExist=true;
    isExist=mangNV.some(function(item){
        return inputVal.trim()==item.taiKhoan
    })
    if(isExist){
        document.getElementById(ID).innerHTML=message;
            return false
    }else{
        document.getElementById(ID).innerHTML="";
            return true
    }
    }
    this.checkName=function(inputval, spanID, message){
        // RegExp: đối tượng giúp chuyển đổi từ string sang kiêu Regular expressions
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
        if(pattern.test(inputval)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }

    }
    this.checkEmail=function(inputVal,ID,message){
        var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if( inputVal.match(pattern)){
            document.getElementById(ID).innerHTML="";
            return true
    }else{
        document.getElementById(ID).innerHTML=message;
            return false
    }
        
    }
    this.checkDropdown = function(selID,spanID, message){
        var optIndex = document.getElementById(selID).selectedIndex;
        // console.log(optIndex);
        if(optIndex != 0){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    } 
    this.checkPass = function(inputval, spanID, message){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
        if(inputval.match(pattern)){
             //hợp lệ
             document.getElementById(spanID).innerHTML = "";
             return true;
        }else{
             // không hợp lệ
             document.getElementById(spanID).innerHTML = message;
             return false;
        }
    }
    this.checkNumber = function(inputval, spanID, message){
        var pattern =  /^(\d{1,2}(\.\d{1,2})?)$/;
        if(inputval.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
       }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
       }
    }
    this.checkLuong=function(inputval, spanID, message){
        if(inputval>=1000000 && inputval<=20000000){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
       }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
       }
    }
    this.checkGio=function(inputval, spanID, message){
        if(inputval>=80 && inputval<=200){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
       }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            return false;
       }
    }

}
