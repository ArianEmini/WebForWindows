<?php
include "connecting.php";

$id=$_GET["id"];
mysqli_query($link,"delete from usersfour where id=$id");

?>

<script type="text/javascript">
    window.location="index.php ";

</script>
