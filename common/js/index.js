
//注册
$("#register").click(function () {
    var user = $("#user").val();
    var pwd = $("#pwd").val();
    var pwd1 = $("#pwd1").val();
    var stu_id = $("#stu_id").val();
    var sex = $("input:radio:checked").val();
    $.ajax({
        type: "post",
        url: "code/register.php",
        data: {
            "username": user,
            "stu_id": stu_id,
            "password": pwd,
            "password1": pwd1,
            "sex": sex
        },
        dataType: "json",
        success: function (data) {
            switch (data.code) {
                case 1:
                    openView1.open();
                    break;
                case 0:
                    openView1.open1();
                    break;
                case 2:
                    openView1.open3();
                    break;
                case -1:
                    openView1.open2();
                    break;
                case 3:
                    openView1.open4();
            }
        },
    });
});

//layer弹出层
layui.use(['form', 'element', 'table', 'layer'], function () {
    var form = layui.form;
    var element = layui.element;
    var layer = layui.layer;
    var table = layui.table;
    form.on('submit(formDemo)', function (data) {
        $.ajax({
            type: "post",
            url: '../code/data2.php',
            data: {
                "json": data.field
            },

            dataType: 'json',
            success: function (data) {
                switch (data.code) {
                    case 0:
                        openView4.open8();

                        table.reload('resignTest');
                        break;
                    case 1:
                        openView4.open9();
                        break;
                }
            },
            error: function (res) {
                console.log(res);
            }
        });
        return false;
    });
    $("#update_pwd").on('click', function () {
        layer.open({
            type: 1,
            title: '修改密码',
            anim: 2,
            content: '<div class="layui-form-item" style="margin-right:40px">'
                + '<label class="layui-form-label">原始密码</label>'
                + ' <div class="layui-input-block">'
                + '<input type="text" name="title" lay-verify="required" id="pwd" lay-verify="required" autocomplete="off" class="layui-input"'
                + '>'
                + '</div>'
                + '</div>'
                + '<div class="layui-form-item" style="margin-right:40px">'
                + '<label class="layui-form-label">新密码</label>'
                + ' <div class="layui-input-block">'
                + '<input type="text" name="title" lay-verify="required" id="repwd" lay-verify="required" autocomplete="off" class="layui-input"'
                + '>'
                + '</div>'
                + '</div>'
                + '<div class="layui-form-item" style="margin-right:40px">'
                + '<label class="layui-form-label">确认密码</label>'
                + ' <div class="layui-input-block">'
                + '<input type="text" name="title" lay-verify="required" id="repwd1" lay-verify="required" autocomplete="off" class="layui-input"'
                + '>'
                + '</div>'
                + '</div>',
            area: ["370px", "280px"],
            btnAlign: 'c',
            btn: ["保存", "取消"],
            btn1: function (index, layero) {
                var pwd = $("#pwd").val(),
                    repwd = $("#repwd").val(),
                    repwd1 = $("#repwd1").val();
                $.ajax({
                    type: "post",
                    url: "../code/ChangePwd.php",
                    data: {
                        "pwd": pwd,
                        "repwd": repwd,
                        "repwd1": repwd1
                    },
                    dataType: "json",
                    success: function (data) {
                        switch (data.code) {
                            case 2:
                                openView4.open1();
                                break;
                            case 1:
                                openView4.open3();
                                break;
                            case 3:
                                openView4.open2();
                                break;
                            case -1:
                                openView4.open7();
                                break;
                            case 0:
                                openView4.open6();
                                layer.close(1);
                                break;
                            case 4:
                                openView4.open5();
                                break;
                        }
                    },
                });
            },
            btn2: function () {
                layer.close(1);
            }
        });
    });
    $("#save").on('click', function () {
        layer.open({
            type: 1,
            title: "提示",
            content: "<center><h2 style='margin-top:30px'>是否保存?</h2></center>",
            area: ["300px", "200px"],
            btn: ["保存", "取消"],
            anim: 2,
            btnAlign: 'c',
            btn1: function (index) {
                var id = cookie("stu_id"),
                    name = cookie("stu_name"),
                    sex = cookie("stu_sex"),
                    age = $("#age").val(),
                    hobby = $("#hobby").val(),
                    face = $("#face").val(),
                    place = $("#place").val(),
                    pres = $("#pres").val();
                $.ajax({
                    type: "post",
                    url: "../code/updateStuInfo.php",
                    data: {
                        "id": id,
                        "name": name,
                        "sex": sex,
                        "age": age,
                        "hobby": hobby,
                        "face": face,
                        "place": place,
                        "pres": pres
                    },
                    dataType: "json",
                    success: function (data) {
                       
                        switch (data.code) {
                            case 2:
                                openView4.open1();
                                break;
                            case -1:
                                openView4.open11();
                                break;
                            case 0:
                                age = "";
                                hobby = "";
                                face ="";
                                place = "";
                                pres = "";
                                openView4.open10();
                                form.render(null,'test1');
                                break;
                        }
                    }
                });
            }
        });
        return false;
    });

});
//cookie
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
};
//个人信息获取
(function () {
    $.ajax({
        type: "post",
        dataType: "json",
        data: {
            "id": cookie("stu_id")
        },
        url: "../code/selectStuInfo.php",
        success: function (data) {
            layui.use('form', function () {
                var form = layui.form;
                form.val('test1', {
                    "f-age": data.stu_age,
                    "f-hobby": data.stu_hobby,
                    "f-face": data.Political_face,
                    "f-place": data.Native_place,
                    "f-pres": data.professional
                });
            })

        }
    });

}());

$("#stu_id").html(cookie('stu_id'));
$("#stu_name").html(cookie('stu_name'));
$("#stu_sex").html(cookie('stu_sex'));
$("#q_xuehao").val(cookie('stu_id'));
$("#q_xm").val(cookie('stu_name'));
$("#x_xuehao").val(cookie('stu_id'));
$("#x_xm").val(cookie('stu_name'));
$("#x_xb").val(cookie('stu_sex'));
$("#logininfo").text(cookie('stu_id'));
$("#logininfo1").text(cookie('stu_name'));

