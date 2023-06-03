//Contoh 1

var apps = new Vue({
   el: '#app',
   data: {

    name: 'Vue.Js'

   }
   
});




//contoh 2

var human ={
    "namehuman" : "arsyad",
    "profession" : "programmer",
    "height" : "173cm",
    "liveat" : "Djakarta",
    "genre" : "Big Boy",
    "image" :"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Borobudur_Temple.jpg/320px-Borobudur_Temple.jpg"
}



var apps2 = new Vue({
    el: '#app2',
    data : human
    
 });


 
 
 //contoh 3

 var dataProduct={
    maximum : 2000, //nilai yang jadi parameter pengkondisian v-if di index
    product:[
       
        {
        
        "image" :"https://i.postimg.cc/Y0qbSDmm/360-F-296459409-jb3y-LASZoal-AMCUs-Rq-S9a3i2sa-UId-Bp-D.jpg",
        "namaProduct" : "Pensil",
        "merek" : "Faber",
        "stok" : "999",
        "harga" : "1000"


        },
        {
        
            "image" :"https://i.postimg.cc/NjTdPnr1/pena.jpg",
            "namaProduct" : "Pena",
            "merek" : "Faber",
            "stok" : "999",
            "harga" : "2000"
    
    
        },
        
        {
        
        "image" :"https://i.postimg.cc/MHF9h2DY/buku.jpg",
        "namaProduct" : "Buku",
        "merek" : "Faber",
        "stok" : "999",
        "harga" : "5000"


        },

        {
        
            "image" :"https://i.postimg.cc/x8hP6Gfx/penggaris.jpg",
            "namaProduct" : "Penggaris",
            "merek" : "Faber",
            "stok" : "999",
            "harga" : "4000"
    
    
        },

        {
        
            "image" :"https://i.postimg.cc/jjcQpYqJ/tipex.jpg",
            "namaProduct" : "Tipe X",
            "merek" : "Faber",
            "stok" : "999",
            "harga" : "9000"
    
    
        },

        {
        
            "image" :"https://i.postimg.cc/DyNpQYyP/erz205.jpg",
            "namaProduct" : "Penghapus",
            "merek" : "Faber",
            "stok" : "999",
            "harga" : "1000"
    
    
        }

    
    ]
 }

var apps3 = new Vue({
    el:'#app3',
    data: dataProduct
})




 //contoh 4 Fetch Api



var app4 = new Vue({
    
    el: '#app4',
    data:{
        maximum:50,
       
        newProduct: null,
       
        
        cart : [],  // kosong untuk menampung nilai dari v-on:click di index
        
        style : {

            label : ['fw-bold', 'mr-2'],
            inputWidth : 60,
            sliderStatus : true


        }
        
    },

    computed:{

        sliderState : function () {
            
            // tanda tanya berguna untuk pengganti if, jika true akan menampilkan slider dengan d-flex, jika false akan bernilai d-none dan slider di hide
            return this.style.sliderStatus ? 'd-flex' : 'd-none'            

        },

        cartTotal : function () { 

            let sum = 0; //total awal cart adalah 0

            for(key in this.cart){ //perulanagan jika nilai array/key di cart

                sum = sum + (this.cart[key].produk.price * this.cart[key].qty) //total/sum = total ditambah nilai harga data array/ke di cart dikali nilai kuantitas data array di cart
            }

            return sum //kembalikam hasil perhitungan nilai sum

         },

         cartQty : function () { 

            let Qty = 0; //nilai kuantitas awal adalah 0

            for(key in this.cart){ //perulanagan jika nilai array/key di cart

                Qty = Qty + this.cart[key].qty //Qty sama dengan nilai Qty ditambah nilai kuantitas yang ada didalam cart
            }

            return Qty //kembalikan hasil Qty

          }
            
    },

    mounted: function() { //pastikan menggunakan funtion biasa, karena event this gabisa dipake kalo pake arrow function

        fetch('https://hplussport.com/api/products/order/price') //mengambil data dari API

        .then(response=>response.json()) // Merubah data menjadi json

        .then(data => { this.newProduct = data }) //memasukan data kedalam properti newProduct
    },


    methods: {

        
        addItem:function(produk) {
            
            // this.cart.push(produk) , berguna untuk push data produk ke cart
            
            //variabel untuk mengecek index produk
            var productIndex; 
            
            //function yang berguna untuk mengecek keberadaan produk
            
            var productExist = this.cart.filter(function(item,index) {

                if (item.produk.id == Number(produk.id)) { //jika item dari produk id ada dan bernilai sama dengan Number produk id
                
                productIndex = index //maka produkIndex sama dengan Index
                
                return true //kembalikan nilai true
                
               } 

               else {
                
                return false //jika produk gaada / ga sama kembalikan nilai false
               
            }

            })


            if (productExist.length) { //jika produk sudah memiliki nilai
               
                this.cart[productIndex].qty++  // maka tambah nilai produk 
          
            } else {
                this.cart.push({produk:produk , qty : 1 }) //atau tambahkan produk dan quantity suatu produk
             }
           
        },


        deleteItem : function (key) {     //key digunakan untuk mendapatkan nilai data berbentuk array
            if (this.cart[key].qty >1 ) {   //jika isi cart dengan key yang sama bernilai lebih dari 1
                this.cart[key].qty--        //maka cart harus dikurangin
            }
            else {
                this.cart.splice(key,1) //jika nilai cart sudah sama dengan 1 maka jika tombol di tekan akan di hapus dengan fungsi splice
            }
        } 

    },


    filters :{
        currencyFormat : function (value) { 
            return 'Rp. ' + Number.parseFloat(value).toFixed(2) 
    
            //nilai data yang diambil, dikembalikan dalam bentuk string RP, dijadikan desimal, dan memiliki 2 digit angka diakhir
    
        }
    }

})




//contoh 5 mengenal berbagai event v

var app5 = new Vue({
    el:'#app5',
    data:{

        name:"Its your skies" 

    } 
})



//contoh 6 mencoba binding data

var dataProducts={
    maximums : 2000, //nilai yang jadi parameter pengkondisian v-if di index
    products:[
       
        {
        
        "image" :"https://i.postimg.cc/Y0qbSDmm/360-F-296459409-jb3y-LASZoal-AMCUs-Rq-S9a3i2sa-UId-Bp-D.jpg",
        "namaProduct" : "Pensil",
        "merek" : "Faber",
        "stok" : "999",
        "harga" : "1000"


        }

    
    ]
 }

var apps6 = new Vue({
    el:'#app6',
    data: dataProducts
})



//contoh 7 properti computed untuk menampung fungsi

var apps7 = new Vue({
    el: '#app7',
    data :{
        slugText : "P # L n Q T z L" 
    },

    computed:{
        

    //Cara banyak Memasukan fungsi ke computed

        // now : function () {
        
        //     var date = new Date();
    
        //     return(
        //         String(date.getHours())+
        //         String(date.getMinutes())+
        //         String(date.getSeconds())
        //     )
    
        //   },


        slugTize : function () {
            return this.slugText
            .toLowerCase()
            .replace(/[^\w ]+/g,"")
            .replace(/ +/g,'-') + this.now(); 
        }
    },

    //cara 1 membuat fungsi di method, lalau dipanggil di tempat yang diperlukan

    methods: {
      now : function () {
        
        var date = new Date();

        return(
            String(date.getHours())+
            String(date.getMinutes())+
            String(date.getSeconds())
        )

      }  
    }

})



//membuat component sederhana, component price 

Vue.component('price',{    //price adalah nama componen

data:function () { 


    return{

        mataUang : "Rp", //komponen pertama
        nilai : 34.50, //kompunen kedua
        desimal : 2 //komponen ke tiga
    }


 },


 template : '<h4>{{this.mataUang +" "+ Number.parseFloat(this.nilai).toFixed(desimal)}}</h4>' //memanggil komponen kedalam file html


})



//membuat component sederhana dengan props, component price 

Vue.component('priceprops',{    //price adalah nama componen WAJIB HURUF KECIL

    data:function () { 

        return{}
    
     },
    
     props: ['matauang2','value','desimal'], //komponen dengan props, untuk memanggil nilai dari API 

     //props tidak bisa mirip, karena bakal eror
    
     template : '<h4>{{this.matauang2+" "+ Number.parseFloat(this.value).toFixed(desimal)}}</h4>' //memanggil komponen kedalam file html
    
    
    })


//membuat component sederhana dengan props dan nilai default, component price 

    
Vue.component('propsdefault',{    //price adalah nama componen WAJIB HURUF KECIL

    data:function () { 

        return{}
    
     },
    
     props:{    //rubah props menjadi bentuk object

        matauang3 :{ 
        type : String,
        default : 'RP. '
        
        },

        value : Number,

        desimal : {
           type : Number,
           default : 2
        }


     }, 

     //props tidak bisa mirip, karena bakal eror
    
     template : '<h4>{{this.matauang3+" "+ Number.parseFloat(this.value).toFixed(desimal)}}</h4>' //memanggil komponen kedalam file html
    
    
    });




//membuat componen list produk 

Vue.component('produklist',{ 

        
        props : ['produk','maximum'],

        template: 
    
    `
          
    <transition-group class="row" name="custom" tag="div" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__slideOutRight">

        <div class="col mt-4"  v-for="item in newProduct" :key="item.id" v-if="item.price <= Number(maximum)">

            <div class="card" style="width: 18rem; height: 40rem;">

                <img :src="item.image" class="card-img-top" alt="...">
                
                    <div class="card-body">
                    
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.description}}</p>
                    
                    </div>

                        <ul class="list-group list-group-flush">

                                <propsdefault

                                :value="Number(item.price)"

                                ></propsdefault>


                            <li class="list-group-item"><a class="btn btn-primary">BUY NOW</a> || <a class="btn btn-primary" v-on:click="addItem(item)">Add to Chart</a></li>   

                
                        </ul>
                    
            </div>
                        
        </div>

    </transition-group>  
            `
})