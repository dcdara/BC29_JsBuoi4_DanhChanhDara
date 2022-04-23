


//Xuất 3 số theo thứ tự tăng dần

function soSanh(a,b){
        
    if (a >= b) {
        return b + "<" + a ;
    
    }else{
        return a + "<" + b ;
    }
}

document.getElementById("btnKetQua").onclick = function () {

    var soThu1 = document.getElementById("txtSoThu_1").value * 1;
    var soThu2 = document.getElementById("txtSoThu_2").value * 1;
    var soThu3 = document.getElementById("txtSoThu_3").value * 1;
    var ketQua = "";
    
    var max = soThu1;
    
    if (soThu2 > max){

        max = soThu2;

    }
    if (soThu3 > max){

        max = soThu3;
    }

    if (max === soThu1){

        ketQua = soSanh(soThu2, soThu3) + "<" + soThu1 ;


    }
    else if (max === soThu2){

        ketQua = soSanh(soThu1, soThu3) + "<" + soThu2 ;


    }
    else{

        ketQua = soSanh(soThu1, soThu2) + "<" + soThu3 ;


    }
    document.getElementById("txtKetQua_show").innerHTML = ketQua;
}


  /* if (soThu1 > soThu2) {
        
        if (soThu2 > soThu3) {

            ketQua = soThu3 + "<" + soThu2 + "<" + soThu1;
        }

        if (soThu1 > soThu3) {

            ketQua = soThu2 + "<" + soThu3 + "<" + soThu1;
        } 
        
        else {
            ketQua = soThu2 + "<" + soThu1 + "<" + soThu3;

        }

    if (soThu2 > soThu3) {

            if (soThu1 > soThu3) {


                ketQua = soThu3 + "<" + soThu1 + "<" + soThu2;

            }
            else {

                ketQua = soThu1 + "<" + soThu3 + "<" + soThu2;

            }
        }

    }
    else {

        ketQua = soThu1 + "<" + soThu2 + "<" + soThu3;

    }

    document.getElementById("txtKetQua_show").innerHTML = ketQua;
    }*/



   /*if (soThu1 > soThu2 && soThu1 > soThu3){
        
        ketQua = soThu3 +"<" + soThu2 +"<" + soThu1;
       
    } 
    else if(soThu1 > soThu2 && soThu3 > soThu2){

        ketQua = soThu2 +"<" + soThu3 +"<" + soThu1;

    }       
    else if(soThu1 > soThu2 && soThu3 > soThu1){

        ketQua = soThu2 +"<" + soThu1 +"<" + soThu3;
 
    }
    else if(soThu2 > soThu1 && soThu2> soThu3){

        ketQua = soThu3 +"<" + soThu1 +"<" + soThu2;
 
    }
    else if(soThu2 > soThu3 && soThu3 > soThu1){

        ketQua = soThu1 +"<" + soThu3 +"<" + soThu2;

    }
    else{

        ketQua = soThu1 +"<" + soThu2 +"<" + soThu3;

    }
    
        document.getElementById("txtKetQua_show").innerHTML = ketQua;

    
 */


//Chương trình "Chào hỏi"

document.getElementById("btnChaoHoi").onclick = function () {
    var thanhVien = document.getElementById("chaoHoi").value;
    var ketQuaChao = "";
    switch (thanhVien) {

        case "Bo":

            ketQuaChao = "Xin chào Bố !";

            break;

        case "Me":

            ketQuaChao = "Xin chào Mẹ !";

            break;

        case "anhTrai":

            ketQuaChao = "Xin chào Anh trai !";

            break;

        case "emGai":

            ketQuaChao = "Xin chào Em gái !";

            break;

        default:
            alert("Vui lòng chọn thành viên");
    }

    document.getElementById("chaoHoi_show").innerHTML = ketQuaChao;
}



// Đếm số chẳn lẻ


document.getElementById("btnChanLe").onclick = function () {

    var so_1 = document.getElementById("txtSo_1").value * 1;
    var so_2 = document.getElementById("txtSo_2").value * 1;
    var so_3 = document.getElementById("txtSo_3").value * 1;
    var demChan = 0 ;
    var demLe = 0;

    so_1 % 2 === 0 && demChan++;
    so_2 % 2 === 0 && demChan++;
    so_3 % 2 === 0 && demChan++;

    demLe = 3- demChan;

    var result_ChanLe = "Có " + demChan + " số chẳn, " + demLe + " số lẻ";
    
    document.getElementById("chanLe_show").innerHTML = result_ChanLe;



}

//Đoán hình tam giác


document.getElementById("btnHinh").onclick = function () {
    var canh_1 = document.getElementById("txtCanh_1").value * 1;
    var canh_2 = document.getElementById("txtCanh_2").value * 1;
    var canh_3 = document.getElementById("txtCanh_3").value * 1;
    var result_Hinh = "";

    if (canh_1 === canh_2 && canh_2 === canh_3) {

        result_Hinh = "Hình tam giác đều"

    } else if (canh_1 === canh_2 || canh_2 === canh_3 || canh_1 === canh_3) {

        result_Hinh = "Hình tam giác cân"

    }
    else {

        result_Hinh = "Hình tam giác vuông"
    }

    document.getElementById("hinhTamGiac_show").innerHTML = result_Hinh;
}