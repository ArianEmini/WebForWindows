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

$fnameN41="";
$fnameN42="";
$fnameN43="";
$fnameN44="";
$fnameN45="";
$fnameN46="";
$fnameN47="";
$fnameN48="";
$fnameN49="";
$fnameN410="";
$fnameN411="";
$fnameN412="";
$fnameN413="";
$fnameN414="";
$fnameN415="";
$fnameN416="";
$fnameN417="";
$fnameN418="";
$fnameN419="";
$fnameN420="";
$fnameN421="";
$fnameN422="";
$fnameN423="";
$fnameN424="";
$fnameN425="";
// $fnameN426="";
// $fnameN427="";
$fnameN428="";
// $fnameN429="";
// $fnameN430="";
$fnameN431="";
// $fnameN432="";
// $fnameN433="";
$fnameN434="";
// $fnameN435="";
// $fnameN436="";




$res2=mysqli_query($link,"select * from usersseven where id=$id");
while($row=mysqli_fetch_array($res2))
{
    $fnameN41=$row["KV"];
    $fnameN42=$row["KH"];
    $fnameN43=$row["KAV"];
    $fnameN44=$row["KAH"];

    $fnameN45=$row["KrV"];
    $fnameN46=$row["KrH1"];
    $fnameN47=$row["KrH2"];
    $fnameN48=$row["KrH3"];
    $fnameN49=$row["KrH4"];


    $fnameN410=$row["KrAV"];
    $fnameN411=$row["KrAH1"];
    $fnameN412=$row["KrAH2"];
    $fnameN413=$row["KrAH3"];
    $fnameN414=$row["KrAH4"];



    $fnameN415=$row["XhV"];
    $fnameN416=$row["XhH1"];
    $fnameN417=$row["XhH2"];
    $fnameN418=$row["XhH3"];
    $fnameN419=$row["XhH4"];


    $fnameN420=$row["XhVS"];
    $fnameN421=$row["XhHS1"];
    $fnameN422=$row["XhHS2"];
    $fnameN423=$row["XhHS3"];
    $fnameN424=$row["XhHS4"];


    $fnameN425=$row["Shtylla1"];
    // $fnameN426=$row["Shtylla2"];
    // $fnameN427=$row["Shtylla3"];


    $fnameN428=$row["Adapteri1"];
    // $fnameN429=$row["Adapteri2"];
    // $fnameN430=$row["Adapteri3"];


    $fnameN431=$row["ShtyllaA1"];
    // $fnameN432=$row["ShtyllaA2"];
    // $fnameN433=$row["ShtyllaA3"];


    $fnameN434=$row["AdapteriA1"];
    // $fnameN435=$row["AdapteriA2"];
    // $fnameN436=$row["AdapteriA3"];

}

?>





   
<div class="Dhenja-Vlerave4N" id="Dhenja-Vlerave4N">


<a href="index.php" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 4 ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fnameN41" class=" form-control "    value="<?php echo $fnameN41; ?>" >
        </div>
        <div class=" col-lg-3 col-md-6 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fnameN42" class="form-control "    value="<?php echo $fnameN42; ?>" >
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fnameN43" class="form-control"     value="<?php echo $fnameN43; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fnameN44" class="form-control"     value="<?php echo $fnameN44; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fnameN45" class="form-control"     value="<?php echo $fnameN45; ?>">
        </div>
       
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-1</strong>

            <input type="text" name="fnameN46" class="form-control"     value="<?php echo $fnameN46; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-2</strong>

            <input type="text" name="fnameN47" class="form-control"     value="<?php echo $fnameN47; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-3</strong>

            <input type="text" name="fnameN48" class="form-control"     value="<?php echo $fnameN48; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-4</strong>

            <input type="text" name="fnameN49" class="form-control"     value="<?php echo $fnameN49; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fnameN410" class="form-control"     value="<?php echo $fnameN410; ?>">
        </div>
        
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-1</strong>

            <input type="text" name="fnameN411" class="form-control"     value="<?php echo $fnameN411; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-2</strong>

            <input type="text" name="fnameN412" class="form-control"     value="<?php echo $fnameN412; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-3</strong>

            <input type="text" name="fnameN413" class="form-control"     value="<?php echo $fnameN413; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-4</strong>

            <input type="text" name="fnameN414" class="form-control"     value="<?php echo $fnameN414; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[V]</strong>

            <input type="text" name="fnameN415" class="form-control"     value="<?php echo $fnameN415; ?>">
        </div>
        
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-1</strong>

            <input type="text" name="fnameN416" class="form-control"     value="<?php echo $fnameN416; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-2</strong>

            <input type="text" name="fnameN417" class="form-control"     value="<?php echo $fnameN417; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-3</strong>

            <input type="text" name="fnameN418" class="form-control"     value="<?php echo $fnameN418; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-4</strong>

            <input type="text" name="fnameN419" class="form-control"     value="<?php echo $fnameN419; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fnameN420" class="form-control"     value="<?php echo $fnameN420; ?>">
        </div>
      
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-1</strong>

            <input type="text" name="fnameN421" class="form-control"     value="<?php echo $fnameN421; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-2</strong>

            <input type="text" name="fnameN422" class="form-control"     value="<?php echo $fnameN422; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-3</strong>

            <input type="text" name="fnameN423" class="form-control"     value="<?php echo $fnameN423; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-4</strong>

            <input type="text" name="fnameN424" class="form-control"     value="<?php echo $fnameN424; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Shtylla</strong>

            <input type="text" name="fnameN425" class="form-control"     value="<?php echo $fnameN425; ?>">
                                
                             
        </div>
        <!-- <div class="col-lg-3">
            <strong>Vlera per Shtyll-2</strong>

            <input type="text" name="fnameN426" class="form-control"     >
                                
                             
        </div>
        <div class="col-lg-3">
            <strong>Vlera per Shtyll-3</strong>

            <input type="text" name="fnameN427" class="form-control"     >
                                
                             
        </div> -->
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fnameN428" class="form-control"     value="<?php echo $fnameN428; ?>">
                                
                             
        </div>
        <!-- <div class="col-lg-3">
            <strong>Vlera per Adapter-2</strong>

            <input type="text" name="fnameN429" class="form-control"     ">
                                
                             
        </div>
        <div class="col-lg-3">
            <strong>Vlera per Adapter-3</strong>

            <input type="text" name="fnameN430" class="form-control"     ">
                                
                             
        </div> -->
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Armatur te Shtylls</strong>

            <input type="text" name="fnameN431" class="form-control"     value="<?php echo $fnameN431; ?>">
                                
                             
        </div>
        <!-- <div class="col-lg-3">
            <strong>Vlera per Armatur Shtylla-2</strong>

            <input type="text" name="fnameN432" class="form-control"     ">
                                
                             
        </div>
        <div class="col-lg-3">
            <strong>Vlera per Armatur Shtylla-3</strong>

            <input type="text" name="fnameN433" class="form-control"    >
                                
                             
        </div> -->
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Armatur te Adapterit </strong>

            <input type="text" name="fnameN434" class="form-control"     value="<?php echo $fnameN434; ?>">
                             
        </div>
        <!-- <div class="col-lg-3">
            <strong>Vlera per Armatur Adapteri-2 </strong>

            <input type="text" name="fnameN435" class="form-control"     >
                             
        </div>
        <div class="col-lg-3">
            <strong>Vlera per Armatur Adapteri-3 </strong>

            <input type="text" name="fnameN436" class="form-control"    >
                             
        </div> -->
        <div class="col-lg-12 col-md-12 col-12">

          
            <button type="submit" name='ndrysho7'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>

</div>

</form>
      

        <?php

if(isset($_POST["ndrysho7"]))
{
    
    mysqli_query($link,"update usersseven set KV='$_POST[fnameN41]',
    KH='$_POST[fnameN42]',
    KAV='$_POST[fnameN43]',
    KAH='$_POST[fnameN44]',

    KrV='$_POST[fnameN45]',
    KrH1='$_POST[fnameN46]',
    KrH2='$_POST[fnameN47]',
    KrH3='$_POST[fnameN48]',
    KrH4='$_POST[fnameN49]',

    KrAV='$_POST[fnameN410]',
    KrAH1='$_POST[fnameN411]',
    KrAH2='$_POST[fnameN412]',
    KrAH3='$_POST[fnameN413]',
    KrAH4='$_POST[fnameN414]',

    XhV='$_POST[fnameN415]',
    XhH1='$_POST[fnameN416]',
    XhH2='$_POST[fnameN417]',
    XhH3='$_POST[fnameN418]',
    XhH4='$_POST[fnameN419]',

    XhVS='$_POST[fnameN420]',
    XhHS1='$_POST[fnameN421]',
    XhHS2='$_POST[fnameN422]',
    XhHS3='$_POST[fnameN423]',
    XhHS4='$_POST[fnameN424]',

    Shtylla1='$_POST[fnameN425]',
    Adapteri1='$_POST[fnameN428]',
    ShtyllaA1='$_POST[fnameN431]',
    AdapteriA1='$_POST[fnameN434]' where id=$id");




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