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
    
    product:[
       
        {
        
        "image" :"https://i.postimg.cc/Y0qbSDmm/360-F-296459409-jb3y-LASZoal-AMCUs-Rq-S9a3i2sa-UId-Bp-D.jpg",
        "namaProduct" : "Pensil",
        "merek" : "Faber",
        "stok" : "999",
        "harga" : "1000"


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
