<?php
include "connecting.php";

$id=$_GET["id"];
mysqli_query($link,"delete from userstwo where id=$id");

?>

<script type="text/javascript">
    window.location="index.php ";

</script>
