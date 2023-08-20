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

$fnameN21="";
$fnameN22="";
$fnameN23="";
$fnameN24="";
$fnameN25="";
$fnameN26="";
$fnameN27="";
$fnameN28="";
$fnameN29="";
$fnameN210="";
$fnameN211="";
$fnameN212="";
$fnameN213="";
$fnameN214="";
$fnameN215="";
$fnameN216="";
$fnameN217="";
$fnameN218="";
$fnameN219="";
$fnameN220="";



$res2=mysqli_query($link,"select * from usersfive where id=$id");
while($row=mysqli_fetch_array($res2))
{
    $fnameN21=$row["KV"];
    $fnameN22=$row["KH"];
    $fnameN23=$row["KAV"];
    $fnameN24=$row["KAH"];
    $fnameN25=$row["KrV"];
    $fnameN26=$row["KrH1"];
    $fnameN27=$row["KrH2"];
    $fnameN28=$row["KrAV"];
    $fnameN29=$row["KrAH1"];
    $fnameN210=$row["KrAH2"];
    $fnameN211=$row["XhV"];
    $fnameN212=$row["XhH1"];
    $fnameN213=$row["XhH2"];
    $fnameN214=$row["XhVS"];
    $fnameN215=$row["XhHS1"];
    $fnameN216=$row["XhHS2"];
    $fnameN217=$row["Shtylla"];
    $fnameN218=$row["Adapteri"];
    $fnameN219=$row["ShtyllaA"];
    $fnameN220=$row["AdapteriA"];
}

?>





   
<div class="Dhenja-Vlerave2N" id="Dhenja-Vlerave2N">


<a href="index.php" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 4 jo ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fnameN21" class=" form-control"   value="<?php echo $fnameN21; ?>">
        </div>
        <div class=" col-lg-3 col-md-6 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fnameN22" class="form-control "  value="<?php echo $fnameN22; ?>" >
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fnameN23" class="form-control"   value="<?php echo $fnameN23; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fnameN24" class="form-control"   value="<?php echo $fnameN24; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fnameN25" class="form-control"   value="<?php echo $fnameN25; ?>">
        </div>
       
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-1</strong>

            <input type="text" name="fnameN26" class="form-control"   value="<?php echo $fnameN26; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-2</strong>

            <input type="text" name="fnameN27" class="form-control"   value="<?php echo $fnameN27; ?>">
        </div>

        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fnameN28" class="form-control"   value="<?php echo $fnameN28; ?>">
        </div>
        
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-1</strong>

            <input type="text" name="fnameN29" class="form-control"   value="<?php echo $fnameN29; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-2</strong>

            <input type="text" name="fnameN210" class="form-control"   value="<?php echo $fnameN210; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[V]</strong>

            <input type="text" name="fnameN211" class="form-control"   value="<?php echo $fnameN211; ?>">
        </div>
        
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-1</strong>

            <input type="text" name="fnameN212" class="form-control"   value="<?php echo $fnameN212; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-2</strong>

            <input type="text" name="fnameN213" class="form-control"   value="<?php echo $fnameN213; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fnameN214" class="form-control"   value="<?php echo $fnameN214; ?>">
        </div>
      
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-1</strong>

            <input type="text" name="fnameN215" class="form-control"   value="<?php echo $fnameN215; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-2</strong>

            <input type="text" name="fnameN216" class="form-control"   value="<?php echo $fnameN216; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Shtyll</strong>

            <input type="text" name="fnameN217" class="form-control"   value="<?php echo $fnameN217; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fnameN218" class="form-control"   value="<?php echo $fnameN218; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Armatur Shtylla</strong>

            <input type="text" name="fnameN219" class="form-control"   value="<?php echo $fnameN219; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Armatur Adapteri </strong>

            <input type="text" name="fnameN220" class="form-control"   value="<?php echo $fnameN220; ?>">
                             
        </div>
        <div class="col-lg-12 col-12">

          
            <button type="submit" name='ndrysho5'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>

</div>

</form>
      

        <?php

if(isset($_POST["ndrysho5"]))
{
    mysqli_query($link,"update usersfive set KV='$_POST[fnameN21]',KH='$_POST[fnameN22]',KAV='$_POST[fnameN23]',KAH='$_POST[fnameN24]',KrV='$_POST[fnameN25]',KrH1='$_POST[fnameN26]',KrH2='$_POST[fnameN27]',KrAV='$_POST[fnameN28]',KrAH1='$_POST[fnameN29]',KrAH2='$_POST[fnameN210]',XhV='$_POST[fnameN211]',XhH1='$_POST[fnameN212]',XhH2='$_POST[fnameN213]',XhVS='$_POST[fnameN214]',XhHS1='$_POST[fnameN215]',XhHS2='$_POST[fnameN216]',Shtylla='$_POST[fnameN217]',Adapteri='$_POST[fnameN218]',ShtyllaA='$_POST[fnameN219]',AdapteriA='$_POST[fnameN220]' where id=$id");


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