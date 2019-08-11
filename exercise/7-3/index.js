new Vue({
    el: "#app",
    data: function() {
        return {
            newsList: []
        };
    },
    created: function() {
        fetch("data.json").then(function(response) {
            return response.json();
        }).then(function(data) {
            this.newsList = data;
        }.bind(this));
    }
});