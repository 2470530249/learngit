<?php
header("content-type:text/html;charset=utf-8");
function registerApproval(){
    include("conn.php");
    $sql = "select * from resign";
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
registerApproval();
?>