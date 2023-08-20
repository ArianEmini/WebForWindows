<?php  
include "connecting.php";

?>


<!doctype html>
<html lang="en">



    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
            integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="stylenew.css"> -->
        <link rel="stylesheet" href="Vlera-style-edit.css">
       
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script> -->
        <!-- <link rel="stylesheet" href="glide.theme.min.css"> -->

        <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> -->

        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script> -->


        <title>WebApplication</title>
     
    </head>
   

<?php  
include "connecting.php";

$id=$_GET["id"];

$fname41="";
$fname42="";
$fname43="";
$fname44="";
$fname45="";
$fname46="";
$fname47="";
$fname48="";
$fname49="";
$fname410="";
$fname411="";
$fname412="";
$fname413="";
$fname414="";
$fname415="";
$fname416="";


$res2=mysqli_query($link,"select * from usersfour where id=$id");
while($row=mysqli_fetch_array($res2))
{
    $fname41=$row["KV4"];
    $fname42=$row["KH4"];
    $fname43=$row["KAV4"];
    $fname44=$row["KAH4"];
    $fname45=$row["KrV4"];
    $fname46=$row["KrH4"];
    $fname47=$row["KrAV4"];
    $fname48=$row["KrAH4"];
    $fname49=$row["XhV4"];
    $fname410=$row["XhH4"];
    $fname411=$row["XhVS4"];
    $fname412=$row["XhHS4"];
    $fname413=$row["Shtylla4"];
    $fname414=$row["Adapteri4"];
    $fname415=$row["ShtyllaA4"];
    $fname416=$row["AdapteriA4"];
}

?>





   
    <div class="Dhenja-Vlerave" id="Dhenja-Vlerave">



    <!-- Dritare jo ndarese -->
        <a href="index.php" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
            </button></a>
        <h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 4 jo ndarese</h2>
        <hr>
        <form action="" method='POST'>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per Kornizen[V]</strong>
                    <input type="text" name="fname41" class=" form-control " value="<?php echo $fname41; ?>" >
                </div>
                <div class=" col-lg-3 col-md-6 col-6">
                    <strong>Vlera per Kornizen[H]</strong>

                    <input type="text" name="fname42" class="form-control " value="<?php echo $fname42; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per Kornizen[V] </strong>

                    <input type="text" name="fname43" class="form-control" value="<?php echo $fname43; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per Kornizen[H]</strong>

                    <input type="text" name="fname44" class="form-control" value="<?php echo $fname44; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e krahut[V]</strong>

                    <input type="text" name="fname45" class="form-control" value="<?php echo $fname45; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e krahut[H]</strong>

                    <input type="text" name="fname46" class="form-control" value="<?php echo $fname46; ?>" >
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per krah[V]</strong>

                    <input type="text" name="fname47" class="form-control" value="<?php echo $fname47; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per krah[H]</strong>

                    <input type="text" name="fname48" class="form-control" value="<?php echo $fname48; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama te krahut[V] </strong>

                    <input type="text" name="fname49" class="form-control" value="<?php echo $fname49; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama te krahut[H]</strong>

                    <input type="text" name="fname410" class="form-control" value="<?php echo $fname410; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama statik[V]</strong>

                    <input type="text" name="fname411" class="form-control" value="<?php echo $fname411; ?>" >
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama statik[H]</strong>

                    <input type="text" name="fname412" class="form-control" value="<?php echo $fname412; ?>">
                                        
                                     
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per shtylle </strong>

                    <input type="text" name="fname413" class="form-control" value="<?php echo $fname413; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per armatur te shtylles</strong>

                    <input type="text" name="fname414" class="form-control" value="<?php echo $fname414; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per adapter</strong>

                    <input type="text" name="fname415" class="form-control" value="<?php echo $fname415; ?>" >
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per armatur te adapterit</strong>

                    <input type="text" name="fname416" class="form-control" value="<?php echo $fname416; ?>">
                                        
                                     
                </div>
             
                <div class="col-lg-12 col-12">

                  
                    <button type="submit" name='ndrysho4'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button> 

                </div>

</div>

        </form>
      

        <?php

if(isset($_POST["ndrysho4"]))
{
    mysqli_query($link,"update usersfour set KV4='$_POST[fname41]',KH4='$_POST[fname42]',KAV4='$_POST[fname43]',KAH4='$_POST[fname44]',KrV4='$_POST[fname45]',KrH4='$_POST[fname46]',KrAV4='$_POST[fname47]',KrAH4='$_POST[fname48]',XhV4='$_POST[fname49]',XhH4='$_POST[fname410]',XhVS4='$_POST[fname411]',XhHS4='$_POST[fname412]',Shtylla4='$_POST[fname413]',ShtyllaA4='$_POST[fname414]',Adapteri4='$_POST[fname415]',AdapteriA4='$_POST[fname416]' where id=$id");


?>
<script type="text/javascript">
    window.location="index.php ";

</script>


<?php

}
?>

        

</div>


































    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
    <script src="FileSaver.js"></script>




</body>

<script>
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
</script>

<!-- <script>

    function downloadtable() {

        var node = document.getElementById(' tablecontainer'); domtoimage.toPng(node) .then(function (dataUrl) { var
                        img=new Image(); img.src=dataUrl; downloadURI(dataUrl, "recordse.png" ) }) .catch(function
                        (error) { console.error('oops, something went wrong', error); }); } function downloadURI(uri,
                        name) { var link=document.createElement("a"); link.download=name; link.href=uri;
                        document.body.appendChild(link); link.click(); document.body.removeChild(link); delete link; }
                        </script> -->






<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js" integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <script src="http://cdn.jsdelivr.net/g/filesaver.js"></script>
 <script>
     $(document).ready(function(){
         $("#button").click(function(){
            domtoimage.toBlob(document.getElementById("scren1"))
            .then(function(blob){
                window.saveAs(blob,"out","output.png")
            })
         })
     })
 </script> -->

</html>