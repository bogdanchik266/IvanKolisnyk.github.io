new Vue({
  el: '#app',
  data: {
    products: [
      { id: 1, title: 'TAG 1000 (TAG 853)', short_text: 'White onion', image: 'images/whiteonion.jpg', desc: 'Full description 1' },
      { id: 2, title: 'TAG 1001 (TAG 855)', short_text: 'Bulb onion', image: 'images/bulbonion.jpg', desc: 'Full description 2' },
      { id: 3, title: 'TAG 1002 (TAG 809)', short_text: 'Shallot onion', image: 'images/shallotonion.jpg', desc: 'Full description 3' },
      { id: 4, title: 'TAG 1003 (TAG 834)', short_text: 'Leek onion', image: 'images/Leekonion.jpg', desc: 'Full description 4' },
      { id: 5, title: 'TAG 1004 (TAG 848)', short_text: 'Slime onion', image: 'images/slimeonion.jpg', desc: 'Full description 5' }
    ]
  },
  mounted:function(){
    console.log(window.localStorage.getItem('prod'));
  },
  methods:{
    addItem:function(id){
      window.localStorage.setItem('prod'.id);
    }
  }

});