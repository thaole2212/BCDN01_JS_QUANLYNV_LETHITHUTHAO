function DanhSachNhanVien(){
    this.mangNV=[];
    this.themNhanVien=function(nv){
        this.mangNV.push(nv)
    }
    this.timViTri=function(ma){
        var viTri=-1;
        this.mangNV.map(function(item,index){
            if( item.taiKhoan==ma){
                viTri=index
            }
            
        })
        return viTri
    }
    this.xoaNhanVien=function(ma){
        var viTri=this.timViTri(ma);
        if(viTri>=0){
            this.mangNV.splice(viTri,1)
        }else{
            "không tìm thấy Nhân viên"
        }
    }
    this.capNhatNhanVien = function(nv) {
        var viTri = this.timViTri(nv.taiKhoan);
        if (viTri >= 0) {
            this.mangNV[viTri] = nv;
        } else {
            console.log("Không tìm được");
        }
    }
   

    
}
DanhSachNhanVien.prototype.timKiem=function(tuKhoaTK){
    var mangKQ=[];
    var lowerTK=tuKhoaTK.trim().toLowerCase();
    this.mangNV.map(function(item){
var loaiNV=item.xeploaiNV.trim().toLowerCase();
var kq=loaiNV.indexOf(lowerTK);
    if(kq>=0){
    mangKQ.push(item)
        }
    });
    return mangKQ;

}