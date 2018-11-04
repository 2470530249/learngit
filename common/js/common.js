// 弹出
var openView4 = {
    open1: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "每一项都是必填项"
        });
    },
    open2: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "原始密码不正确"
        });
    },
    open3: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "输入密码不一致"
        });
    },
    open4: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "每一项都是必填项"
        });
    },
    open5: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "新密码不能和原始密码相同"
        });
    },
    open6: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "修改成功",
            yes: function () {
                layer.closeAll();
            }
        });
    },
    open7: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "修改失败"
        });
    },
    open8: function () {
        layer.open({
            type: 0,
            times: 2000,
            title: "提示",
            content: "申请成功"
        });
    },
    open9: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "申请失败"
        });
    },
    open10: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "保存成功",
            yes: function () {
                layer.closeAll();
            }
        });
    },
    open11: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "保存失败",
            yes: function () {
                layer.closeAll();
            }
        });
    },
    open12: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "学号是唯一的哦",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
    open13: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "删除失败,住宿信息冲突",
            yes: function (index) {
                layer.closeAll();
            }
        });
    },
    open14: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "删除成功",
            yes: function (index) {
                layer.closeAll();
            }
        });
    },
    open15: function () {
        layer.open({
            type: 0,
            title: "提示",
            content: "删除失败",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
};
// 弹出
var views = {
    views1: function () {
        layer.open({
            type: 0,
            content: "修改成功",
            title: "提示",
            btn: ["确定"],
            btn1: function (index) {
                layer.closeAll();
            }
        });
    },
    views10: function () {
        layer.open({
            type: 0,
            content: "学生学号不存在",
            title: "提示",
            btn: ["确定"],
            btn1: function (index) {
                layer.close(index);
            }
        });
    },
    views2: function () {
        layer.open({
            type: 0,
            content: "修改内容不能与原来相同",
            title: "提示",
            btn: ["确定"],
            btn1: function (index) {
                layer.close(index);
            }
        });
    },
    views3: function () {
        layer.open({
            type: 0,
            content: "批准成功",
            title: "提示",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
    views7: function () {
        layer.open({
            type: 0,
            content: "时间格式不正确,请稍后重试",
            title: "提示",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
    views4: function () {
        layer.open({
            type: 0,
            content: "批准失败",
            title: "提示",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
    views5: function () {
        layer.open({
            type: 0,
            content: "取消成功",
            title: "提示",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
    views6: function () {
        layer.open({
            type: 0,
            content: "取消失败",
            title: "提示",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
    views8: function () {
        layer.open({
            type: 0,
            content: "添加成功",
            title: "提示",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
    views9: function () {
        layer.open({
            type: 0,
            content: "添加失败",
            title: "提示",
            yes: function (index) {
                layer.close(index);
            }
        });
    },
}

var openView1 = {
    open: function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 0,
                title: '提示',
                icon:5,
                content: '两次输入的密码不一致,请重试'
            });
        });
    },
    open1: function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 0,
                title: '提示',
                icon:1,
                content: '注册成功,去登陆',
                yes:function(){
                    location.href="index.html";
                }
            });
        });
    }, open2: function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 0,
                title: '提示',
                icon:5,
                content: '注册失败,请重试'
            });
        });
    }, open3: function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 0,
                title: '提示',
                icon:5,
                content: '每一项都是必填项哦'
            });
        });
    },
    open4: function () {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 0,
                title: '提示',
                icon:5,
                content: '用户名已存在,换一个试试吧'
            });
        });
    }
};


// cookie方法
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

//退出登录
$("#loginout").click(function () {
    layui.use('layer', function () {
        let layer = layui.layer;
        layer.open({
            type: 0,
            title: '信息',
            content: '是否退出系统',
            btn: ['确定', '取消'],
            btn1: function () {
                cookie('stu_id', null);
                cookie('stu_name', null);
                cookie('stu_sex', null);
                cookie('admin', null);
                location.href = "../index.html";
            },
        });
    });
});