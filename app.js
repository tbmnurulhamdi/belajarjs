// var &  let
    // hoisting
        // sebelum dideklarasikan seharusnya menjadi error

        // console.log(name);
        // let name = "saya";
        // var foo = "kamu";

        //perbedaan let dan var saat kita tidak bisa lagi memanggil sebuah variable yang belum diinisialisasi
        // dapat menghindari bug yg dapat membuat pusing dikemudian hari

    // scope

        // for (var i = 0; i < 3; i++) {
        //     console.log("hello")
            
        // } console.log(i);

        // pada saat kita consolog i akan direturn dn hasilnya 3 karna i ada 3 yang seharusnya i tidak boleh d return diluar for

        // for (let i = 0; i < 3; i++) {
        //     console.log("hello")
            
        // } console.log(i);

        // hasilnya looping akan dijalankan, namun consolog i akan direturn(error) karena let adalah blockscope (hanya terjadi didalam looping maka i tidak akan bisa diakses diluar loop)

// const variable
    //  hoisting

        // console.log(bar);
        // let name = "saya";

        // var foo = "kamu";

        // const bar = 'dia'; 

        // akan menghasilkan error. maka dalam hoisting let dan const memiliki kesamaan
    
    // scope

        // for (const i = 0; i < 3; i++) {
        //     console.log("hello")
            
        // } console.log(i);

        // terjadi sebuah hal yang lebih error lagi karena looping mentok di angka 0 dan terjadi error
        // dalam scope, const tidak bisa digunakan karena const adalah hal yg constan. value i tidak bisa diubah jika pake const

// perbedaan let dan const
    // let  awal = "budi";

    // awal = "udin";

    // console.log(awal)

    // maka hasilnya adalah udin karena value awal diubah dai budi menjadi udin

    // const  awal = "budi";

    // awal = "udin";

    // console.log(awal)

    // let  nilai= 0;

    // nilai++;

    // console.log(awal)

    // akan muncul error ketika kita deklarasikan value dengan const, kita tidak dapat mengubah value nya

// jadi antara let var dan const yg praktis di modern js kita dianjurkan utk menggunakan const karena kita ingin memberikan penegasan value tsb tidak diubah. sedangkan jika kita butuh value yang berubah2 kita gunakan let. var sebaiknya dihindari.

// aritmatice operator

    // let tambah = 100 + 500;

    // let kurang = 500 - 100;

    // let kali = 100 * 500;

    // let bagi = 500 / 100;

    // console.log(bagi)

// order of aritmatice

    // let order = 1000 + (4 * 4);

    // console.log(order)

// modulus / rimainder

    // let modulus = 320 % 100;

    // console.log(modulus)

    // modulus biasanya digunakan untuk cek apakah angka itu ganjil/ genap. jika hasil 0 maka genap tapi jika 1 maka ganjil

    // let genap = 200 % 2 === 0;

    // console.log(genap)

// spesial number

    // let spesial1 = Infinity;

    // let spesial2 = -Infinity;

    // let spesialcase = infinity - 1;
    // jangan pikirkan soal value ini yg penting tau bahwa ni ada, dn pd case trtentu akn dibutuhkan. jngan trlalu percaya krna ini tidak akan membuat pengukuran detail

    // let spesial3 = NaN;
    // adalah  not number scara value dia adalah number, namun dia adalah angka yang tidak valid

    // let spesialcase2 = 0 / 0

    // let spesialcase3 = Infinity - Infinity;

    // let spesialcase4 = "lima" - 2;

    // NaN digunakan ketika kita ingin mengetes suatu data yg datang dari sebuah database/ipbackend kita ingin memastikan bahwa number tsb kita konversikan menjadi sebuah number dia tidak mengembalikan NaN


// string

    // let string1 = "ini string 1";
    // let string2 = 'ini string 2';
    // let string3 = `ini string 3`;

    // let multistring = "ini baris 1 \nini baris 2";
    // console.log(multistring)
    // \n berfungsi membuat line baru. maka kita mendapat 2 line

    // let multistring2 = `
    // ini baris 1 dengan bactik
    // ini baris 2`;

    // console.log(multistring2)
    // dalam backtik dapat membuat line baru tanpa \n. enter dan spasi pun terbaca

    // penggabungan 2 string. angka juga bisa dimasukan kedalam ini
    // let satustring = "janda";
    // let duastring = "muda";

    // let countstring1 = satustring + duastring;
    // // console.log(countstring1)

    // let countstring2 = `${satustring} ${duastring}`
    // console.log(countstring2)
    // jika pake backtik bisa langsung diproses oleh javascript



// Type Coercion
    // js adalah bahasa program yg dinamis, kita tidal perlu deklarasikan valuenya karena dia akan tau jenis valuenya

    // console.log("100" - 50)
    // hasilnya 50. jika pengurangan akan menjadi vaalue number. ini disebut coertion 

    // console.log("100" + 50)
    // hasilnya 10050. jika ini menganggap sebagai string yg digabungkan menajdi satu

    // console.log(8 * null)
    // hasilnya akan jadi 0. js mengubah null menjadi 0. tapi null dan 0 itu berbeda

    // console.log("five" * 4)
    // hasilnya NaN, js kehabisan ide. 4 adalah angka yg valid sedangkan yg satu lagi bukan angka yg valid. angka yg valid  dikali dengan angka yg tidak valid makan akan tidak valid


// boolean values (true atau false)

    // let yes = true;
    // let no = false

    // comparition

    // console.log(5 > 2)
    // console.log(5 < 2)
    // console.log(5 >= 5)
    // console.log("apel" == "jeruk")

// logical operator dan advance comparison

    // let fname = "nurul";

    // console.log(fname == "nurul")
    
    // let fname = "Nurul";

    // console.log(fname == "nurul") // hasil false karena besar kecil huruf akan di compair 

    // let snum = 8;

    // console.log(snum == "8") // hasilnya true, jika hanya == maka termasuk loose comaperison


    // let snum = 8;

    // console.log(snum === "8") // hasilnya false, jika === disebut strike comperison, amaka akan di comper sampai type data nya

    // console.log(NaN == NaN) // hasilnya false, karena NaN itu angka yg tidsak falied makan NaN tidak sama denagn NaN


    // let fname = "nurul";

    // let snum = 8;

    // console.log(fname == "nurul"  && snum == "8") // ketika benar dan benar makan hasilnya true. jika beda akan false

    // let fname = "nurul";

    // let snum = 8;

    // console.log(fname == "nurul" || snum == "7") //  jika salah satu benar maka akan true

    // let tahun = 2021;

    // console.log(tahun !== 2021) // hasilnya false karena tanda seru itu menyatakan tidak

// object and array values

    // array menggunakan kurung siku [] untuk pendeklarasiannya
    // let namaarray = ["sayur", "daging", "keduanya"]

    // // object menggunakan kurung kurawal {} untuk pendeklarasiannya
    // let namaobject {
    //     jabatan = "letnan",
    //     nama = "judi",
    //     favorit {
    //         sayuran = ["brokoli", "wortel"]
    //     }
    // }











