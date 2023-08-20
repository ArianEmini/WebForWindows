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

$fname31="";
$fname32="";
$fname33="";
$fname34="";
$fname35="";
$fname36="";
$fname37="";
$fname38="";
$fname39="";
$fname310="";
$fname311="";
$fname312="";
$fname313="";
$fname314="";
$fname315="";
$fname316="";


$res2=mysqli_query($link,"select * from usersthree where id=$id");
while($row=mysqli_fetch_array($res2))
{
    $fname31=$row["KV3"];
    $fname32=$row["KH3"];
    $fname33=$row["KAV3"];
    $fname34=$row["KAH3"];
    $fname35=$row["KrV3"];
    $fname36=$row["KrH3"];
    $fname37=$row["KrAV3"];
    $fname38=$row["KrAH3"];
    $fname39=$row["XhV3"];
    $fname310=$row["XhH3"];
    $fname311=$row["XhVS3"];
    $fname312=$row["XhHS3"];
    $fname313=$row["Shtylla3"];
    $fname314=$row["Adapteri3"];
    $fname315=$row["ShtyllaA3"];
    $fname316=$row["AdapteriA3"];
}

?>





   
    <div class="Dhenja-Vlerave" id="Dhenja-Vlerave">



    <!-- Dritare jo ndarese -->
        <a href="index.php" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
            </button></a>
        <h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 3 jo ndarese</h2>
        <hr>
        <form action="" method='POST'>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per Kornizen[V]</strong>
                    <input type="text" name="fname31" class=" form-control " value="<?php echo $fname31; ?>" >
                </div>
                <div class=" col-lg-3 col-md-6 col-6">
                    <strong>Vlera per Kornizen[H]</strong>

                    <input type="text" name="fname32" class="form-control " value="<?php echo $fname32; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per Kornizen[V] </strong>

                    <input type="text" name="fname33" class="form-control" value="<?php echo $fname33; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per Kornizen[H]</strong>

                    <input type="text" name="fname34" class="form-control" value="<?php echo $fname34; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e krahut[V]</strong>

                    <input type="text" name="fname35" class="form-control" value="<?php echo $fname35; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e krahut[H]</strong>

                    <input type="text" name="fname36" class="form-control" value="<?php echo $fname36; ?>" >
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per krah[V]</strong>

                    <input type="text" name="fname37" class="form-control" value="<?php echo $fname37; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per krah[H]</strong>

                    <input type="text" name="fname38" class="form-control" value="<?php echo $fname38; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama te krahut[V] </strong>

                    <input type="text" name="fname39" class="form-control" value="<?php echo $fname39; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama te krahut[H]</strong>

                    <input type="text" name="fname310" class="form-control" value="<?php echo $fname310; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama statik[V]</strong>

                    <input type="text" name="fname311" class="form-control" value="<?php echo $fname311; ?>" >
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama statik[H]</strong>

                    <input type="text" name="fname312" class="form-control" value="<?php echo $fname312; ?>">
                                        
                                     
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per shtylla </strong>

                    <input type="text" name="fname313" class="form-control" value="<?php echo $fname313; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per armatur te shtylles</strong>

                    <input type="text" name="fname314" class="form-control" value="<?php echo $fname314; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per adapter</strong>

                    <input type="text" name="fname315" class="form-control" value="<?php echo $fname315; ?>" >
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per aramtur te adapterit</strong>

                    <input type="text" name="fname316" class="form-control" value="<?php echo $fname316; ?>">
                                        
                                     
                </div>
             
                <div class="col-lg-12 col-12">

                  
                    <button type="submit" name='ndrysho3'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button> 

                </div>

</div>

        </form>
      

        <?php

if(isset($_POST["ndrysho3"]))
{
    mysqli_query($link,"update usersthree set KV3='$_POST[fname31]',KH3='$_POST[fname32]',KAV3='$_POST[fname33]',KAH3='$_POST[fname34]',KrV3='$_POST[fname35]',KrH3='$_POST[fname36]',KrAV3='$_POST[fname37]',KrAH3='$_POST[fname38]',XhV3='$_POST[fname39]',XhH3='$_POST[fname310]',XhVS3='$_POST[fname311]',XhHS3='$_POST[fname312]',Shtylla3='$_POST[fname313]',ShtyllaA3='$_POST[fname314]',Adapteri3='$_POST[fname315]',AdapteriA3='$_POST[fname316]' where id=$id");


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