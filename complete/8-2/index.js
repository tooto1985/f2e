new Vue({
    el: "#app",
    data: function() {
        return {
            classList: [],
            sortKey: "",
            sortDirection: ""
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
        sortBy: function(key) {
            if (key === this.sortKey) {
                this.sortDirection = this.sortDirection === "up" ? "down" : "up";
            } else {
                this.sortKey = key;
                this.sortDirection = "up";
            }
            this.classList.sort(function(a, b) {
                if (this.sortDirection == "up") {
                    if (a[this.sortKey] > b[this.sortKey]) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else {
                    if (a[this.sortKey] < b[this.sortKey]) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }.bind(this));
        }
    }
});