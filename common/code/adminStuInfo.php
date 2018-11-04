<?php
header("content-type:text/html;charset=utf-8");
function stuInfo(){
    include("conn.php");
    // $pages =  $_GET["page"];
    // $pagesize = $_GET["limit"];
    $sql = "select stu_id,stu_name,stu_sex,stu_age,Political_face,professional from stu_info ";
    $data = [];
    $result=mysqli_query($conn,$sql);

        if (!$result) {
          printf("Error: %s\n", mysqli_error($conn));
          exit();
         }
         $num =  mysqli_num_rows($result);//获取数据条数
         $result1= array(
            "code"=>0,
            'message'=>"",
            'count'=>$num,
            'data'=>array()
        );
        while($rows=mysqli_fetch_assoc($result)){
            array_push($result1['data'],$rows);
        }
        $res = json_encode($result1);
        echo $res;  
}
stuInfo();
?>