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
       
        cart : [], //sengaja kosong untuk menampung nilai dari v-on:click di index
        
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
            

        }

    },

    mounted: function() { //pastikan menggunakan funtion biasa, karena event this gabisa dipake kalo pake arrow function

        fetch('https://hplussport.com/api/products/order/price') //mengambil data dari API

        .then(response=>response.json()) // Merubah data menjadi json

        .then(data => { this.newProduct = data }) //memasukan data kedalam properti newProduct
    },


    methods: {
        
        addItem:function(produk) {
            
            this.cart.push(produk)
        }
    },

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