new Vue({
    el: "#app",
    data: function() {
        return {
            newsList: [],
            pagerCount: 5,
            currentIndex: 1
        };
    },
    created: function() {
        fetch("data.json").then(function(response) {
            return response.json();
        }).then(function(data) {
            this.newsList = data;
        }.bind(this));
    },
    computed: {
        pager: function() {
            return this.newsList.filter(function(a) {
                var i = this.newsList.indexOf(a);
                return i >= this.pagerCount * (this.currentIndex - 1) && i < this.pagerCount * this.currentIndex;
            }.bind(this));
        },
        maxPagerIndex: function() {
            return Math.ceil(this.newsList.length / this.pagerCount);
        }
    },
    methods: {
        moveTo: function(value) {
            if (value === "first") {
                this.currentIndex = 1;
            } else if (value === "prev") {
                this.currentIndex--;
                if (this.currentIndex < 1) {
                    this.currentIndex = 1;
                    alert("沒有上一頁了");
                }
            } else if (value === "next") {
                this.currentIndex++;
                if (this.currentIndex > this.maxPagerIndex) {
                    this.currentIndex = this.maxPagerIndex;
                    alert("沒有下一頁了");
                }
            } else if (value === "last") {
                this.currentIndex = this.maxPagerIndex;
            }
        }
    }
});