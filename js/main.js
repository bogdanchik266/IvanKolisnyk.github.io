var app = new Vue({
    el:".items, .item, .contactUs",
    data: {
        products:[
            {id:1, title:"TAG 1000 (TAG 853)", short_text:"White onion", image:"1.jpg"},
            {id:2, title:"TAG 1001 (TAG 855)", short_text:"Bulb onion", image:"2.jpg"},
            {id:3, title:"TAG 1002 (TAG 809)", short_text:"Shallot onion", image:"3.jpg"},
            {id:4, title:"TAG 1003 (TAG 834)", short_text:"Leek onion", image:"4.jpg"},
            {id:5, title:"TAG 1004 (TAG 854)", short_text:"Slime onion", image:"5.jpg"}
        ],
        product:[],
        cart:[],
        cartIds:[],
        contactFields:[],
        btnVisible: 0,
        orderVisible: 0
    },
    mounted:function() {
        console.log(window.localStorage.getItem('prod'));
        this.getProducts();
        this.checkInCart();
        console.log(this.cartIds);
        console.log(this.contactFields);

        this.getCart();
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },

        getProducts:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length > 0) {
                for(i in this.products) {
                    if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                } 
                }
            }
        },

        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) !=-1 ) this.btnVisible=1;
        },






        getCart:function() {
            for(i in localStorage.getItem('cart')) {
                for(p in this.products) {
                    if(this.products[p].id == localStorage.getItem('cart').split(',')[i]) {
                       this.cart.push(this.products[p]);
                       this.cartIds.push(this.products[p].id);
                    }
                }
            }
        },
        removeFromCart:function(id) {
            for(i in this.cart) {
                if(this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                    this.cartIds.splice(i, 1);
                    window.localStorage.setItem('cart', this.cartIds.join());
                }
            }
        },
        makeOrder:function() {
            this.orderVisible = 1;
            this.cart = [];
            this.cartIds = [];
            window.localStorage.removeItem('cart');
        }
    }   
});