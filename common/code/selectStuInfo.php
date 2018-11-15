
<?php
header("content-type:text/html;charset=utf-8");
function studentInfo(){
    include("conn.php");
    $id = $_POST['id'];
     $sql3 = "SELECT stu_age,stu_hobby,Political_face,Native_place,professional FROM stu_info where stu_id='$id'";
    $result2 = mysqli_query($conn,$sql3);
        $rows = mysqli_fetch_assoc($result2);
        if (!$result2) {
          printf("Error: %s\n", mysqli_error($conn));
          exit();
         }
        $res = json_encode($rows);
        echo $res;  
}
studentInfo();
?>