layui.use(['element', 'table', 'form'], function () {
    var element = layui.element,
        table = layui.table,
        form = layui.form;

    //住宿管理表格加载
    table.render({
        id: 'idTests',
        elem: '#zhusu',
        height: 312,
        url: '../code/hotelAddress.php',
        page: true,
        cols: [[
            { field: 'piz', title: '序号', type: 'numbers', fixed: 'left' },
            { field: 'stu_id', title: '学号', width: 100, },
            { field: 'stu_name', title: '姓名', width: 100, },
            { field: 'stu_sex', title: '性别', width: 100, },
            { field: 'address', title: '住宿地址', width: 100, },
        ]],
    });
    //晚归管理表格加载
    table.render({
        id: 'schoolBack',
        elem: '#school_back',
        height: 312,
        url: '../code/schoolBack.php',
        page: true,
        cols: [[
            { field: 'piz', title: '序号', type: 'numbers', fixed: 'left' },
            { field: 'stu_id', title: '学号', width: 100, },
            { field: 'stu_name', title: '姓名', width: 100, },
            { field: 'stu_sex', title: '性别', width: 100, },
            { field: 'back', title: '晚归', width: 100, },
            { field: 'back_time', title: '时间', width: 170, },
        ]],
    });
    //学生信息表格加载
    table.render({
        id: 'idTest',
        elem: '#stu_info',
        height: 312,
        url: '../code/adminStuInfo.php',
        page: true,
        cols: [[
            { field: 'piz', title: '序号', type: 'numbers', fixed: 'left' },
            { field: 'stu_id', title: '学号', width: 100, },
            { field: 'stu_name', title: '姓名', width: 100 },
            { field: 'stu_sex', title: '性别', width: 100 },
            { field: 'stu_age', title: '年龄', width: 100 },
            { field: 'Political_face', title: '政治面貌', width: 100 },
            { field: 'professional', title: '专业', width: 100 },

        ]],

    });
    //请假审批表格加载
    table.render({
        id: 'resign',
        elem: '#resign',
        height: 312,
        url: '../code/adminRegisterapproval.php',
        page: true,
        cols: [[
            { field: 'resign_id', width: 60, title: '序号', fixed: 'left' },
            { field: 'stu_id', title: '学号', width: 100, },
            { field: 'stu_name', title: '姓名', width: 100, },
            { field: 'stu_sex', title: '性别', width: 100, },
            { field: 'times', title: '请假时间', width: 100, },
            { field: 'text', title: '请假原因', width: 100, },
            // { field: 'a', title: '状态', width: 100 },
            , { field: 'code', title: '状态', width: 93, templet: '#check' }

        ]],
    });
    //请假审批事务处理
    table.on('rowDouble(resign)', function (obj) {
        var data = obj.data;
        // console.log(data);
        layer.open({
            type: 1,
            offset: ['150px', '40%'],
            btn: ["删除"],
            btnAlign: "c",
            btn1: function () {
                layer.confirm('真的删除么', function (index) {
                    $.ajax({
                        type: 'post',
                        url: '../code/adminDeleteResign.php',
                        data: {
                            "id": data['resign_id'],
                        },
                        dataType: 'json',
                        success: function (data) {
                            switch (data.code) {
                                case 1:
                                    openView4.open13();
                                    table.reload('resign');
                                    break;
                                case 0:
                                    openView4.open14();
                                    obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                                    table.reload('resign');
                                    break;
                            };
                        },
                    });
                    layer.close(index);
                });
            }
        });
    });
    form.on('switch(reg)', function (obj) {
        var id = this.value;
        switch (obj.elem.checked) {
            case true:
                layer.open({
                    type: 0,
                    content: "确定批准请假?",
                    btn: ["批准", "取消"],
                    btn1: function () {
                        $.ajax({
                            type: "post",
                            url: "../code/adminUpdateState.php",
                            data: {
                                "state": 1,
                                "id": id
                            },
                            dataType: "json",
                            success: function (data) {
                                switch (data.code) {
                                    case 0:
                                        views.views3();
                                        table.reload('resign');
                                        break;
                                    case 1:
                                        views.views4();
                                        table.reload('resign');
                                        break;
                                }
                            }
                        });
                    },
                    btn2: function () {
                        table.reload('resign');
                    }
                });
                break;
            case false:
                layer.open({
                    type: 0,
                    content: "确定取消批准?",
                    btn: ["确定", "取消"],
                    btn1: function () {
                        $.ajax({
                            type: "post",
                            url: "../code/adminUpdateState.php",
                            data: {
                                "state": 0,
                                "id": id
                            },
                            dataType: "json",
                            success: function (data) {
                                switch (data.code) {
                                    case 0:
                                        views.views5();
                                        table.reload('resign');
                                        break;
                                    case 1:
                                        views.views6();
                                        table.reload('resign');
                                        break;
                                }
                            }
                        });
                    },
                    btn2: function () {
                        table.reload('resign');
                    }
                });
                break;
        }

    });
    //双击表格行进行学生信息添加修改删除事务
    table.on('rowDouble(stu_info)', function (obj) {
        var data = obj.data;
        layer.open({
            type: 1,
            offset: ['150px', '40%'],
            btn: ["修改", "添加", "删除"],
            btn1: function (index) {
                layer.close(index);
                layer.open({
                    type: 1,
                    title: "学生信息",
                    offset: ['200px', '40%'],
                    area: ["400px", "460px"],
                    content: '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">学号</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" readonly value="' + data['stu_id'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">姓名</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" value="' + data['stu_name'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">性别</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" value="' + data['stu_sex'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">年龄</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" value="' + data['stu_age'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">政治面貌</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" value="' + data['Political_face'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">专业</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" value="' + data['professional'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>',
                    btn: ["修改", "取消"],
                    btnAlign: 'c',
                    btn1: function () {
                        var input = $(".layui-input");
                        str = [];
                        for (var i = 0; i < input.length; i++) {
                            str.push(input[i].value);

                        }

                        $.ajax({
                            type: 'post',
                            url: '../code/adminUpdateInfo.php',
                            data: {
                                "arr": str
                            },
                            dataType: 'json',
                            success: function (data) {
                                switch (data.code) {
                                    case 0:
                                        views.views1();
                                        table.reload('idTest');
                                        break;
                                    case 1:
                                        views.views2();
                                        break;
                                    case -1:
                                        views.views2();
                                        break;
                                }
                            }
                        });
                    }
                });
            },
            btn2: function (index) {
                layer.close(index);
                layer.open({
                    type: 1,
                    offset: ['200px', '40%'],
                    title: "学生信息",
                    area: ["430px", "550px"],
                    content: '<div class="layui-form-item">'
                        + '<label class="layui-form-label">学号</label>'
                        + '       <div class="layui-input-block">'
                        + '           <input type="text" name="title" lay-verify="required" autocomplete="off" class="layui-input"'
                        + '                id="x_xuehao">'
                        + '   </div>'
                        + '       </div>'
                        + '       <div class="layui-form-item">'
                        + '           <label class="layui-form-label">姓名</label>'
                        + '        <div class="layui-input-block">'
                        + '         <input type="text" name="title" lay-verify="required" autocomplete="off" class="layui-input"'
                        + '      id="x_xm">'
                        + '   </div>'
                        + '  </div>'
                        + '  <div class="layui-form-item">'
                        + '      <label class="layui-form-label">性别</label>'
                        + '      <div class="layui-input-block">'
                        + '          <input type="text" name="title" lay-verify="required" autocomplete="off" class="layui-input"'
                        + '                 id="x_xb">'
                        + '   </div>'
                        + '     </div>'
                        + '     <div class="layui-form-item">'
                        + '         <label class="layui-form-label">年龄</label>'
                        + '         <div class="layui-input-block">'
                        + '                       <input type="text" name="title" id="age" lay-verify="required" autocomplete="off" class="layui-input">'
                        + '   </div>'
                        + '      </div>'
                        + '      <div class="layui-form-item">'
                        + '          <label class="layui-form-label">爱好</label>'
                        + '          <div class="layui-input-block">'
                        + '              <input type="text" name="title" id="hobby" lay-verify="required" autocomplete="off"'
                        + '                  class="layui-input">'
                        + '   </div>'
                        + '      </div>'
                        + '      <div class="layui-form-item">'
                        + '          <label class="layui-form-label">政治面貌</label>'
                        + '          <div class="layui-input-block">'
                        + '              <input type="text" name="title" id="face" lay-verify="required" autocomplete="off"'
                        + '                  class="layui-input">'
                        + '   </div>'
                        + '                           </div>'
                        + '       <div class="layui-form-item">'
                        + '           <label class="layui-form-label">籍贯</label>'
                        + '           <div class="layui-input-block">'
                        + '               <input type="text" name="title" id="place" lay-verify="required" autocomplete="off"'
                        + '                   class="layui-input">'
                        + '   </div>'
                        + '       </div>'
                        + '       <div class="layui-form-item">'
                        + '           <label class="layui-form-label">专业</label>'
                        + '         <div class="layui-input-block">'
                        + '             <input type="text" name="title" id="pres" lay-verify="required" autocomplete="off"'
                        + '    class="layui-input">'
                        + '   </div>'
                        + '    </div>',
                    btn: ["添加", "取消"],
                    btnAlign: 'c',
                    btn1: function () {
                        var id = $("#x_xuehao").val(),
                            name = $("#x_xm").val(),
                            sex = $("#x_xb").val(),
                            age = $("#age").val(),
                            hobby = $("#hobby").val(),
                            face = $("#face").val(),
                            place = $("#place").val(),
                            pres = $("#pres").val();

                        $.ajax({
                            type: 'post',
                            url: '../code/adminInsertInfo.php',
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
                            dataType: 'json',
                            success: function (data) {
                                switch (data.code) {
                                    case 2:
                                        openView4.open1();
                                        break;
                                    case -1:
                                        openView4.open11();
                                        break;
                                    case 0:
                                        openView4.open10();
                                        table.reload('idTest');
                                        table.reload('idTests');
                                        break;
                                    case 1:
                                        openView4.open12();
                                        break;
                                }
                            },
                        });
                    }
                });
            },
            btn3: function (index) {
                layer.confirm('真的删除行么', function (index) {
                    $.ajax({
                        type: 'post',
                        url: '../code/adminDeleteInfo.php',
                        data: {
                            "id": data['stu_id'],
                        },
                        dataType: 'json',
                        success: function (data) {
                            switch (data.code) {
                                case 1:
                                    openView4.open13();
                                    break;
                                case 0:
                                    openView4.open14();
                                    obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                                    break;
                            };
                        },
                    });
                    layer.close(index);
                });
            }
        });
    });
    //双击表格行进行住宿修改删除事务
    table.on('rowDouble(zhusu)', function (obj) {
        var data = obj.data;
        layer.open({
            type: 1,
            offset: ['150px', '40%'],
            btn: ["修改", "添加","删除"],
            btn1: function (index) {
                layer.close(index);
                layer.open({
                    type: 1,
                    title: "学生信息",
                    offset: ['200px', '40%'],
                    area: ["400px", "460px"],
                    content: '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">学号</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" readonly value="' + data['stu_id'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">姓名</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" readonly value="' + data['stu_name'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">性别</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" readonly value="' + data['stu_sex'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">住宿地址</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input" value="' + data['address'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                    ,
                    btn: ["修改", "取消"],
                    btnAlign: 'c',
                    btn1: function () {
                        var input = $(".layui-input");
                        str = [];
                        for (var i = 0; i < input.length; i++) {
                            str.push(input[i].value);
                        }
                        $.ajax({
                            type: 'post',
                            url: '../code/adminHotelUpdate.php',
                            data: {
                                "arr": str
                            },
                            dataType: 'json',
                            success: function (data) {
                                switch (data.code) {
                                    case 0:
                                        views.views1();
                                        table.reload('idTests');
                                        break;
                                    case 1:
                                        views.views2();
                                        break;
                                    case -1:
                                        views.views2();
                                        break;
                                }
                            }
                        });
                    }
                });
            },
            btn2:function(index){
                layer.open({
                    type: 1,
                    title: "学生信息",
                    offset: ['200px', '40%'],
                    area: ["400px", "200px"],
                    content: '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">学号</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input b"  value="" '
                        + '>'
                        + '</div>'
                        + '</div>'
                    ,
                    btn: ["添加", "取消"],
                    btnAlign: 'c',
                    btn1: function () {
                        let id = $(".b").val();
                        $.ajax({
                            type: 'get',
                            url: '../code/adminAddress_id.php',
                            data: {
                                "id": id
                            },
                            dataType: 'json',
                            success: function (data) {
                                switch (data.code) {
                                    case 0:
                                        views.views8();
                                        table.reload('idTests');
                                        break;
                                    case 1:
                                        views.views9();
                                        table.reload('idTests');
                                        break;
                                    case -1:
                                        views.views10();
                                        break;
                                }

                            }
                        });
                    }
                });
            },
            btn3: function (index) {
                layer.confirm('真的删除么', function (index) {
                    $.ajax({
                        type: 'post',
                        url: '../code/adminDeleteAddress.php',
                        data: {
                            "id": data['stu_id'],
                        },
                        dataType: 'json',
                        success: function (data) {
                            switch (data.code) {
                                case 1:
                                    openView4.open15();
                                    break;
                                case 0:
                                    openView4.open14();
                                    obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                                    break;
                            };
                        },
                    });
                    layer.close(index);
                });
            },
        });
    });
    //双击表格行进行晚归修改删除事务
    table.on('rowDouble(school_back)', function (obj) {
        var data = obj.data;
        layer.open({
            type: 1,
            offset: ['150px', '40%'],
            btn: ["修改", "添加", "删除"],
            btn1: function (index) {
                layer.close(index);
                layer.open({
                    type: 1,
                    title: "学生信息",
                    offset: ['200px', '40%'],
                    area: ["400px", "460px"],
                    content: '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">学号</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input s" readonly value="' + data['stu_id'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">姓名</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input s" readonly value="' + data['stu_name'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">性别</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input s" readonly value="' + data['stu_sex'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">晚归</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input s" value="' + data['back'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                        + '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">时间</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input s"  value="' + data['back_time'] + '"'
                        + '>'
                        + '</div>'
                        + '</div>'
                    ,
                    btn: ["修改", "取消"],
                    btnAlign: 'c',
                    btn1: function () {
                        let data = [];
                        let len = $(".s").length;
                        for (let i = 0; i < len; i++) {
                            data.push($(".s:eq(" + i + ")").val());
                        }

                        $.ajax({
                            type: 'post',
                            url: '../code/adminUpdateBack.php',
                            data: {
                                "data": data
                            },
                            dataType: 'json',
                            success: function (data) {
                                switch (data.code) {
                                    case 0:
                                        views.views1();
                                        table.reload('schoolBack');
                                        break;
                                    case 1:
                                        views.views7();
                                        break;
                                }

                            }
                        });
                    }
                });
            },
            btn2: function () {
                layer.open({
                    type: 1,
                    title: "学生信息",
                    offset: ['200px', '40%'],
                    area: ["400px", "200px"],
                    content: '<div class="layui-form-item">'
                        + ' <label class="layui-form-label">学号</label>'
                        + '  <div class="layui-input-block">'
                        + ' <input type="text" name="title" lay-verify="required"'
                        + ' autocomplete="off" class="layui-input a"  value="" '
                        + '>'
                        + '</div>'
                        + '</div>'
                    ,
                    btn: ["添加", "取消"],
                    btnAlign: 'c',
                    btn1: function () {
                        let id = $(".a").val();
                        $.ajax({
                            type: 'get',
                            url: '../code/adminInsertBack.php',
                            data: {
                                "id": id
                            },
                            dataType: 'json',
                            success: function (data) {
                                switch (data.code) {
                                    case 0:
                                        views.views8();
                                        table.reload('schoolBack');
                                        break;
                                    case 1:
                                        views.views9();
                                        table.reload('schoolBack');                                        
                                        break;
                                    case -1:
                                        views.views10();
                                        break;
                                }

                            }
                        });
                    }
                });
            },
            btn3: function (index) {
                layer.confirm('真的删除么', function (index) {
                    $.ajax({
                        type: 'post',
                        url: '../code/adminDeleteBack.php',
                        data: {
                            "id": data['stu_id'],
                        },
                        dataType: 'json',
                        success: function (data) {
                            switch (data.code) {
                                case 1:
                                    openView4.open15();
                                    break;
                                case 0:
                                    openView4.open14();
                                    obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                                    break;
                            };
                        },
                    });
                    layer.close(index);
                });
            },
        });
    });


});


$("#adminlogin").text(cookie("admin"));

if (sessionStorage.getItem('login_success_in') !== 'successLoginInUser') {
    location.href = '../index.html';
}