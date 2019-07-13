new Vue({
    el: "#app",
    data: function() {
        return {
        };
    },
    created: function() {
        fetch("data.json").then(function(response) {
            return response.json();
        }).then(function(data) {
            this.classList = data;
        }.bind(this));
    },
    methods: {
        
    }
});