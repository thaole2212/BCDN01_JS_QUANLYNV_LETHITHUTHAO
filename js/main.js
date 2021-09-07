var dsnv=new DanhSachNhanVien();
var validation= new Validation();


// thêm NV
function getELE(id){
    return document.getElementById(id);
    };
function setLocalStorage(){
    localStorage.setItem('DSNV',JSON.stringify(dsnv.mangNV))
}
function hienthiTable(mang){
    content="";
    mang.map(function(item){
    content+=`<tr>
    <td>${item.taiKhoan}</td>
    <td>${item.hoTen}</td>
    <td>${item.email}</td>
    <td>${item.ngayLam}</td>
    <td>${item.chucVu}</td>
    <td>${item.tongluong}</td>
    <td>${item.xeploaiNV}</td>
    <td>
    <button class="btn-danger" onclick="xoaNV('${item.taiKhoan}')">Xóa Nhân Viên</button>
    </td>
    </tr>
    `
    })
    getELE("tableDanhSach").innerHTML=content;
};
function getLocalStorage(){
    if(localStorage.getItem('DSNV') != null) {
    dsnv.mangNV=JSON.parse(localStorage.getItem('DSNV'));
        hienthiTable(dsnv.mangNV)
    }
};
getLocalStorage();

function themNV(){
    var tk=getELE("tknv").value;
    var ten=getELE("name").value;
    var email=getELE("email").value;
    var matKhau=getELE("password").value;
    var ngay=getELE("datepicker").value;
    var luongCB=getELE("luongCB").value;
    var chucVu=getELE("chucvu").value;
    var gio=getELE("gioLam").value;
    
var isValid=true;
isValid &=validation.checkEmpty(tk,"tbTKNV","Tai khoản không được để trống")&&validation.checkID(tk,"tbTKNV","Tai khoản không được trùng");
isValid &=validation.checkName(hoTen,"tbTen","Tên không đúng định dạng chữ")&&validation.checkEmpty(hoTen,"tbTen","Tên không được để trống");
isValid &=validation.checkEmail(email,"tbEmail","Email không đúng định dạng")&&validation.checkEmpty(email,"tbEmail","Email không được để trống");
isValid &=validation.checkPass(matKhau,"tbMatKhau", "mật khẩu không đúng định dạng")&&(matKhau,"tbMatKhau", "mật khẩu không được để trống");
isValid &= validation.checkDropdown("chucvu", "tbChucVu", "Bạn chưa chọn chức vụ");
isValid &=validation.checkNumber(luongCB,"tbLuongCB","Lương không đúng định dạng")&&validation.checkLuong(luongCB,"tbLuongCB","Lương cơ bản phải từ 1000000-20000000")&&validation.checkEmpty(luongCB,"tbLuongCB","Lương không được để trống");
isValid &=validation.checkNumber(gioLam,"tbGiolam","Giờ làm phải đúng định dạng số")&&validation.checkGio(gioLam,"tbGiolam","Giờ làm phải từ 80-200 giờ")&&validation.checkEmpty(gioLam,"tbGiolam","Giờ làm không được để trống");


if (isValid) {
    var nhanvien=new NhanVien(tk,ten,email,matKhau,ngay,luongCB,chucVu,gio);
    nhanvien.tongluong=nhanvien.tongLuong();
    nhanvien.xeploaiNV=nhanvien.loaiNV();
    dsnv.themNhanVien(nhanvien);
    setLocalStorage();
    hienthiTable(dsnv.mangNV)
}
    
};

function xoaNV(ma){
    dsnv.xoaNhanVien(ma);
    hienthiTable(dsnv.mangNV);
    setLocalStorage();
}
function capNhatNV(){
    var tk=getELE("tknv").value;
    var ten=getELE("name").value;
    var email=getELE("email").value;
    var matKhau=getELE("password").value;
    var ngay=getELE("datepicker").value;
    var luongCB=getELE("luongCB").value;
    var chucVu=getELE("chucvu").value;
    var gio=getELE("gioLam").value;
    
var isValid=true;
isValid &=validation.checkEmpty(tk,"tbTKNV","Tai khoản không được để trống")&&validation.checkID(tk,"tbTKNV","Tai khoản không được trùng");
isValid &=validation.checkName(hoTen,"tbTen","Tên không đúng định dạng chữ")&&validation.checkEmpty(hoTen,"tbTen","Tên không được để trống");
isValid &=validation.checkEmail(email,"tbEmail","Email không đúng định dạng")&&validation.checkEmpty(email,"tbEmail","Email không được để trống");
isValid &=validation.checkPass(matKhau,"tbMatKhau", "mật khẩu không đúng định dạng")&&(matKhau,"tbMatKhau", "mật khẩu không được để trống");
isValid &= validation.checkDropdown("chucvu", "tbChucVu", "Bạn chưa chọn chức vụ");
isValid &=validation.checkNumber(luongCB,"tbLuongCB","Lương không đúng định dạng")&&validation.checkLuong(luongCB,"tbLuongCB","Lương cơ bản phải từ 1000000-20000000")&&validation.checkEmpty(luongCB,"tbLuongCB","Lương không được để trống");
isValid &=validation.checkNumber(gioLam,"tbGiolam","Giờ làm phải đúng định dạng số")&&validation.checkGio(gioLam,"tbGiolam","Giờ làm phải từ 80-200 giờ")&&validation.checkEmpty(gioLam,"tbGiolam","Giờ làm không được để trống");


if (isValid) {
    var nhanvien=new NhanVien(tk,ten,email,matKhau,ngay,luongCB,chucVu,gio);
    nhanvien.tongluong=nhanvien.tongLuong();
    nhanvien.xeploaiNV=nhanvien.loaiNV();
    dsnv.capNhatNhanVien(nhanvien);
    setLocalStorage();
    hienthiTable(dsnv.mangNV)
}
    
};
function timKiemTheoTen(){
    var tuKhoaTK=getELE("searchName").value;
    var mangKQ=dsnv.timKiem(tuKhoaTK);
    hienthiTable(mangKQ);
}
getELE("btnTimNV").addEventListener("click",timKiemTheoTen);

    