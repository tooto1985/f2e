new Vue({
    el: "#app",
    data: function() {
        return {
            searchText: '',
            userList: []
        }
    },
    computed: {
        userListInSearch: function() {
            var regexp = new RegExp(this.searchText,"i");
            return this.userList.filter(function(a) {
                return regexp.test(a.name);
            }.bind(this));
        }
    },
    created: function() {
        fetch("data.json").then(function(response) {
            return response.json();
        }).then(function(data) {
            this.userList = data;
        }.bind(this));
    }
});