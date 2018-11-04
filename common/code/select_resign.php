<?php
header("content-type:text/html;charset=utf-8");
function selectResign(){
    include("conn.php");
    $sql = "select stu_id,stu_name,stu_sex,times,text,code from resign where stu_id='".$_COOKIE['stu_id']."'";
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
            if($rows["code"]==1){
                $rows["code"]="批准";
            }else {
                $rows["code"]="未批准";
            }
            array_push($result1['data'],$rows);
            
        }
        $res = json_encode($result1);
        echo $res;  
}
selectResign();
?>