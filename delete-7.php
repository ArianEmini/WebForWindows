<?php
include "connecting.php";

$id=$_GET["id"];
mysqli_query($link,"delete from usersseven where id=$id");

?>

<script type="text/javascript">
    window.location="index.php ";

</script>
