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

$fname21="";
$fname22="";
$fname23="";
$fname24="";
$fname25="";
$fname26="";
$fname27="";
$fname28="";
$fname29="";
$fname210="";
$fname211="";
$fname212="";
$fname213="";
$fname214="";
$fname215="";
$fname216="";


$res2=mysqli_query($link,"select * from userstwo where id=$id");
while($row=mysqli_fetch_array($res2))
{
    $fname21=$row["KV2"];
    $fname22=$row["KH2"];
    $fname23=$row["KAV2"];
    $fname24=$row["KAH2"];
    $fname25=$row["KrV2"];
    $fname26=$row["KrH2"];
    $fname27=$row["KrAV2"];
    $fname28=$row["KrAH2"];
    $fname29=$row["XhV2"];
    $fname210=$row["XhH2"];
    $fname211=$row["XhVS2"];
    $fname212=$row["XhHS2"];
    $fname213=$row["Shtylla2"];
    $fname214=$row["Adapteri2"];
    $fname215=$row["ShtyllaA2"];
    $fname216=$row["AdapteriA2"];
}



?>





   
    <div class="Dhenja-Vlerave" id="Dhenja-Vlerave">



    <!-- Dritare jo ndarese -->
        <a href="index.php" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
            </button></a>
        <h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 2 jo ndarese</h2>
        <hr>
        <form action="" method='POST'>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per Kornizen[V]</strong>
                    <input type="text" name="fname21" class=" form-control " value="<?php echo $fname21; ?>" >
                </div>
                <div class=" col-lg-3 col-md-6 col-6">
                    <strong>Vlera per Kornizen[H]</strong>

                    <input type="text" name="fname22" class="form-control " value="<?php echo $fname22; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per Kornizen[V] </strong>

                    <input type="text" name="fname23" class="form-control" value="<?php echo $fname23; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per Kornizen[H]</strong>

                    <input type="text" name="fname24" class="form-control" value="<?php echo $fname24; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e krahut[V]</strong>

                    <input type="text" name="fname25" class="form-control" value="<?php echo $fname25; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e krahut[H]</strong>

                    <input type="text" name="fname26" class="form-control" value="<?php echo $fname26; ?>" >
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per krah[V]</strong>

                    <input type="text" name="fname27" class="form-control" value="<?php echo $fname27; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per krah[H]</strong>

                    <input type="text" name="fname28" class="form-control" value="<?php echo $fname28; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama te krahut[V] </strong>

                    <input type="text" name="fname29" class="form-control" value="<?php echo $fname29; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama te krahut[H]</strong>

                    <input type="text" name="fname210" class="form-control" value="<?php echo $fname210; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama statik[V]</strong>

                    <input type="text" name="fname211" class="form-control" value="<?php echo $fname211; ?>" >
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama statik[H]</strong>

                    <input type="text" name="fname212" class="form-control" value="<?php echo $fname212; ?>">
                                        
                                     
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per shtylla</strong>

                    <input type="text" name="fname213" class="form-control" value="<?php echo $fname213; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per armatur te shtylles</strong>

                    <input type="text" name="fname214" class="form-control" value="<?php echo $fname214; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per adapteri</strong>

                    <input type="text" name="fname215" class="form-control" value="<?php echo $fname215; ?>" >
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per armatura te adapterit</strong>

                    <input type="text" name="fname216" class="form-control" value="<?php echo $fname216; ?>">
                                        
                                     
                </div>
             
                <div class="col-lg-12 col-12">

                  
                    <button type="submit" name='ndrysho2'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button> 

                </div>

</div>

        </form>
      

        <?php

if(isset($_POST["ndrysho2"]))
{
    mysqli_query($link,"update userstwo set KV2='$_POST[fname21]',KH2='$_POST[fname22]',KAV2='$_POST[fname23]',KAH2='$_POST[fname24]',KrV2='$_POST[fname25]',KrH2='$_POST[fname26]',KrAV2='$_POST[fname27]',KrAH2='$_POST[fname28]',XhV2='$_POST[fname29]',XhH2='$_POST[fname210]',XhVS2='$_POST[fname211]',XhHS2='$_POST[fname212]',Shtylla2='$_POST[fname213]',ShtyllaA2='$_POST[fname214]',Adapteri2='$_POST[fname215]',AdapteriA2='$_POST[fname216]' where id=$id");


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