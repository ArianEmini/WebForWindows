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

$fname1="";
$fname2="";
$fname3="";
$fname4="";
$fname5="";
$fname6="";
$fname7="";
$fname8="";
$fname9="";
$fname10="";
$fname11="";
// $fname12="";
// $fname13="";
// $fname14="";
// $fname15="";
// $fname16="";


$res=mysqli_query($link,"select * from users where id=$id");
while($row=mysqli_fetch_array($res))
{
    $fname1=$row["KV"];
    $fname2=$row["KH"];
    $fname3=$row["KAV"];
    $fname4=$row["KAH"];
    $fname5=$row["KrV"];
    $fname6=$row["KrH"];
    $fname7=$row["KrAV"];
    $fname8=$row["KrAH"];
    $fname9=$row["XhV"];
    $fname10=$row["XhH"];
    $fname11=$row["XhVS"];
    $fname12=$row["XhHS"];
    // $fname13=$row["Shtylla"];
    // $fname14=$row["Adapteri"];
    // $fname15=$row["ShtyllaA"];
    // $fname16=$row["AdapteriA"];
}



?>





   
    <div class="Dhenja-Vlerave" id="Dhenja-Vlerave">



    <!-- Dritare jo ndarese -->
        <a href="index.php" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
            </button></a>
        <h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 1 jo ndarese</h2>
        <hr>
        <form action="" method='POST'>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-6 ">
                    <strong>Vlera per Kornizen[V]</strong>
                    <input type="text" name="fname1" class=" form-control " value="<?php echo $fname1; ?>" >
                </div>
                <div class=" col-lg-3 col-md-6 col-6">
                    <strong>Vlera per Kornizen[H]</strong>
                    <input type="text" name="fname2" class="form-control " value="<?php echo $fname2; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per Kornizen[V] </strong>
                    <input type="text" name="fname3" class="form-control" value="<?php echo $fname3; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per Kornizen[H]</strong>

                    <input type="text" name="fname4" class="form-control" value="<?php echo $fname4; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e krahut[V]</strong>

                    <input type="text" name="fname5" class="form-control" value="<?php echo $fname5; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e krahut[H]</strong>

                    <input type="text" name="fname6" class="form-control" value="<?php echo $fname6; ?>" >
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per krah[V]</strong>

                    <input type="text" name="fname7" class="form-control" value="<?php echo $fname7; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera e armatures per krah[H]</strong>

                    <input type="text" name="fname8" class="form-control" value="<?php echo $fname8; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama te krahut[V] </strong>

                    <input type="text" name="fname9" class="form-control" value="<?php echo $fname9; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama te krahut[H]</strong>

                    <input type="text" name="fname10" class="form-control" value="<?php echo $fname10; ?>">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama statik[V]</strong>

                    <input type="text" name="fname11" class="form-control" value="<?php echo $fname11; ?>" >
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <strong>Vlera per xhama statik[H]</strong>

                    <input type="text" name="fname12" class="form-control" value="<?php echo $fname12; ?>">
                                        
                                     
                </div>
               
                <div class="col-lg-12 col-12">

                  
                   <a href="#Dhenja-Vlerave"> <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button> </a>

                </div>

</div>

        </form>
      

        <?php

if(isset($_POST["ndrysho"]))
{
    mysqli_query($link,"update users set KV='$_POST[fname1]',KH='$_POST[fname2]',KAV='$_POST[fname3]',KAH='$_POST[fname4]',KrV='$_POST[fname5]',KrH='$_POST[fname6]',KrAV='$_POST[fname7]',KrAH='$_POST[fname8]',XhV='$_POST[fname9]',XhH='$_POST[fname10]',XhVS='$_POST[fname11]',XhHS='$_POST[fname12]' where id=$id");


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