
    var openView = {
        tips: function () {
            layui.use('layer', function () {
                layer.msg("账号或密码不能为空");
            });
        },
        tips1: function () {
            layui.use('layer', function () {
                layer.msg("账号不存在,请重试");
            });
        },
        tips2: function () {
            layui.use('layer', function () {
                layer.msg("密码错误了哦");
            });
        },
        tips3: function () {
            layui.use('layer', function () {
                layer.msg("登陆成功");
            });
        },

    };
    //cookie操作
    function cookie(name, value, opts) {
        if (typeof value !== 'undefined') {
            var expires = '';
            opts = opts || {};
            if (value === null) {
                value = '';
                opts.expires = -1;
            }
            if (opts.expires) {
                var date = new Date();
                date.setTime(date.getTime() + (opts.expires * 60 * 60 * 1000));
                expires = '; expires=' + date.toGMTString();
            }
            var path = opts.path ? '; path=' + opts.path : '';
            var domain = opts.domain ? '; domain=' + opts.domain : '';
            var secure = opts.secure ? '; secure' : '';
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        } else {
            var cookies;
            if (document.cookie && document.cookie !== '') {
                cookies = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
                if (cookies) {
                    return decodeURIComponent(cookies[2]);
                } else {
                    return null;
                }
            }
        }
    }
    //登陆
    $("#login_btn").click(function () {
        if ($("#reader").prop("checked")) {
            var user = $("#user").val();
            var pwd = $("#pwd").val();
            var reader = $("#reader").val();
            $.ajax({
                type: "post",
                url: "code/login.php",
                data: {
                    "username": user,
                    "password": pwd,
                    "reader": reader
                },
                dataType: "json",
                success: function (data) {
                    switch (data.code) {
                        case 3:
                            openView.tips();
                            break;
                        case 1:
                            openView.tips1();
                            break;
                        case 2:
                            openView.tips2();
                            break;
                        case 0:
                            cookie('stu_id', null);
                            cookie('stu_name', null);
                            cookie('stu_sex', null);
                            cookie('stu_id', "" + data.stu_id + "");
                            cookie('stu_name', "" + data.stu_name + "");
                            cookie('stu_sex', "" + data.sex + "");
                            location.href = "content/user.html";
                            break;
                    }

                },
            });
        };
        if ($("#admin").prop("checked")) {
            var user = $("#user").val();
            var pwd = $("#pwd").val();
            $.ajax({
                type: "post",
                url: "code/admin.php",
                data: {
                    "username": user,
                    "password": pwd,
                    "reader": reader
                },
                dataType: "json",
                success: function (data) {
                    switch (data.code) {
                        case 3:
                            openView.tips();
                            break;
                        case 1:
                            openView.tips1();
                            break;
                        case 2:
                            openView.tips2();
                            break;
                        case 0:
                            cookie('admin', ""+data.user+"");
                            location.href = "admin/admin.html";
                            break;
                    }
                },
            });
        };
    });



