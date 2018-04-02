var vm1 = new Vue({
    el: '#app',
    data:{
        event:{
            monthAndDate: 'March 14th - 16th',
            guestTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
            exclusiveOffers: 'Add your name to the guest list for exclusive offers:'
        },
        newNameText: '',
        guestNameList: [],
        eventCapacity: 25,
        eventCapacityPercentage: 0,
        textColorChange: "",
        inlineLevel: 'inline'
    },
    methods:{
        formSubmitted: function(){
            console.log("Method Work");
            if(this.newNameText.length > 0 && this.guestNameList.length <= 24 ){    
            this.guestNameList.push(this.newNameText);
            this.newNameText = '';
            this.eventCapacityPercentage = this.guestNameList.length / (this.eventCapacity / 100);
            }
        },
        keySpace: function(){
            alert("You Press Space bar");
        },
        keyEsc: function(){
            alert("You Press ESC button");
        },
        colorChange: function(){
            this.textColorChange = "textColor";
        }
    },
    computed:{
        sortNames: function(){
            console.log("Computed Work");
            return this.guestNameList.sort();
            }
    },
    watch:{
        guestNameList: function(data){
            console.log("watch object works");
        }
    },
    filters:{
        formatName: function(value){
            console.log(value);
            return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase();
        }
    }
})

var vm2 = new Vue({
    el: '#navigation',
    data: {
        webHeading: 'Guest List',
        navLinks:[{name: "Home", id:1, url: "https://www.example.com/"}, {name: "About", id:2, url: "https://www.example.com/"}, {name: "Contact", id:3, url: "https://www.example.com/"}]
    },
    methods: {
        
    }
})