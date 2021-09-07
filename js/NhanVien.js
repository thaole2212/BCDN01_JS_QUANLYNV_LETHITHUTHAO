function NhanVien(tk,ten,email,mk,ngay,luongCB,chucvu,gio){
    this.taiKhoan=tk;
    this.hoTen=ten;
    this.email=email;
    this.matKhau=mk;
    this.ngayLam=ngay;
    this.luongCB=luongCB;
    this.chucVu=chucvu;
    this.gioLam=gio;
    this.tongluong=0;
    this.xeploaiNV=0;
    this.tongLuong=function(){
        if(this.chucVu=="Sếp"){
            return this.luongCB*3
        }else if(this.chucVu=="Trưởng phòng"){
            return this.luongCB*2
        }else if(this.chucVu=="Nhân viên"){
            return this.luongCB
        }else{
            "hãy chọn chức vụ"
        }
    }
    this.loaiNV=function(){
        if( this.gioLam>=0 &&this.gioLam<160){
            return "NV trung bình"
        }else if(this.gioLam>=160 && this.gioLam<176){
            return "NV khá"
        }else if(this.gioLam>=176 && this.gioLam<192){
            return "NV giỏi"
        }else{
            return "NV xuât sắc"
        }
    }
    
}