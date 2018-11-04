<?php
header("content-type:text/html;charset=utf-8");
function schoolbackTableData(){
    include("conn.php");
    $sql = "select stu_id,stu_name,sex from users where stu_id='".$_COOKIE['stu_id']."'";
    $sql1 = "select back from school_back where stu_id ='".$_COOKIE['stu_id']."'";
    $result=mysqli_query($conn,$sql);
    $result2=mysqli_query($conn,$sql1);
        if (!$result) {
          printf("Error: %s\n", mysqli_error($conn));
          exit();
         }
        $rows1=mysqli_fetch_assoc($result2);
        $rows=mysqli_fetch_assoc($result);
    $result1= array(
        "code"=>0,
        'message'=>"",
        'count'=>1,
        "data"=>array(
            array(
                "id"=>$rows['stu_id'],
                "username"=>$rows['stu_name'],
                "sex"=>$rows['sex'],
                "back"=>$rows1['back']
            )
        )
    );
    $res = json_encode($result1);
    echo $res;
}
schoolbackTableData();
?>