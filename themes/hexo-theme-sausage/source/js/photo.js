
var photos={
            page: 1,
            offset: 100,
            init: function () {
                var that = this;
                $.getJSON("/photos/data.json", function (data) {
                    that.render(data);

                    that.scroll(data);
                });
            },

            render: function (data) {
                var begin = (this.page - 1) * this.offset;
                var end = this.page * this.offset;
                if (begin >= data.length) return;
                var html, li = "";
                //var imgAdr="https://github.com/jasmine-na/jasmine-na/blob/master/photos/";
                var imgAdr="http://ofrnf8g02.bkt.clouddn.com/";
                for (var i = begin; i < end && i < data.length; i++) {
                    li += '<li><div class="img-box">' +
                        '<a class="img-bg" rel="example_group" href="'+imgAdr+ data[i] + '?raw=true"></a>' +
                        '<img lazy-src="'+imgAdr + data[i] + '?raw=true" src="'+imgAdr + data[i] + '?raw=true" />' +
                        '</li>';
                }

                $(".img-box-ul").append(li);
                $(".img-box-ul").lazyload();
                $("a[rel=example_group]").fancybox();
            },

            scroll: function (data) {
                var that = this;
                $(window).scroll(function() {
                    var windowPageYOffset = window.pageYOffset;
                    var windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight;
                    var sensitivity = 0;

                    var offsetTop = $(".instagram").offset().top + $(".instagram").height();

                    if (offsetTop >= windowPageYOffset && offsetTop < windowPageYOffsetAddHeight + sensitivity) {
                        that.render(++that.page, data);
                    }
                })
            }
    }