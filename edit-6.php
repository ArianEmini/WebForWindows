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

$fnameN31="";
$fnameN32="";
$fnameN33="";
$fnameN34="";
$fnameN35="";
$fnameN36="";
$fnameN37="";
$fnameN38="";
$fnameN39="";
$fnameN310="";
$fnameN311="";
$fnameN312="";
$fnameN313="";
$fnameN314="";
$fnameN315="";
$fnameN316="";
$fnameN317="";
$fnameN318="";
$fnameN319="";
$fnameN320="";
$fnameN321="";
// $fnameN322="";
$fnameN323="";
// $fnameN324="";
$fnameN325="";
// $fnameN326="";
$fnameN327="";
// $fnameN328="";





$res2=mysqli_query($link,"select * from userssix where id=$id");
while($row=mysqli_fetch_array($res2))
{
    $fnameN31=$row["KV"];
    $fnameN32=$row["KH"];
    $fnameN33=$row["KAV"];
    $fnameN34=$row["KAH"];
    $fnameN35=$row["KrV"];
    $fnameN36=$row["KrH1"];
    $fnameN37=$row["KrH2"];
    $fnameN38=$row["KrH3"];
    $fnameN39=$row["KrAV"];
    $fnameN310=$row["KrAH1"];
    $fnameN311=$row["KrAH2"];
    $fnameN312=$row["KrAH3"];

    $fnameN313=$row["XhV"];
    $fnameN314=$row["XhH1"];
    $fnameN315=$row["XhH2"];
    $fnameN316=$row["XhH3"];

    $fnameN317=$row["XhVS"];
    $fnameN318=$row["XhHS1"];
    $fnameN319=$row["XhHS2"];
    $fnameN320=$row["XhHS3"];

    $fnameN321=$row["Shtylla1"];
    // $fnameN322=$row["Shtylla2"];
    $fnameN323=$row["Adapteri1"];
    // $fnameN324=$row["Adapteri2"];

    $fnameN325=$row["ShtyllaA1"];
    // $fnameN326=$row["ShtyllaA2"];

    $fnameN327=$row["AdapteriA1"];
    // $fnameN328=$row["AdapteriA2"];
}

?>





   
<div class="Dhenja-Vlerave2N" id="Dhenja-Vlerave2N">


<a href="index.php" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 3 ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fnameN31" class=" form-control "    value="<?php echo $fnameN31; ?>" >
        </div>
        <div class=" col-lg-3 col-md-6 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fnameN32" class="form-control "    value="<?php echo $fnameN33; ?>" >
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fnameN33" class="form-control"     value="<?php echo $fnameN33; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fnameN34" class="form-control"     value="<?php echo $fnameN34; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fnameN35" class="form-control"     value="<?php echo $fnameN35; ?>">
        </div>
       
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-1</strong>

            <input type="text" name="fnameN36" class="form-control"     value="<?php echo $fnameN36; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-2</strong>

            <input type="text" name="fnameN37" class="form-control"     value="<?php echo $fnameN37; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e krahut[H]-3</strong>

            <input type="text" name="fnameN38" class="form-control"     value="<?php echo $fnameN38; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fnameN39" class="form-control"     value="<?php echo $fnameN39; ?>">
        </div>
        
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-1</strong>

            <input type="text" name="fnameN310" class="form-control"     value="<?php echo $fnameN310; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-2</strong>

            <input type="text" name="fnameN311" class="form-control"     value="<?php echo $fnameN311; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera e armatures per krah[H]-3</strong>

            <input type="text" name="fnameN312" class="form-control"     value="<?php echo $fnameN312; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[V]</strong>

            <input type="text" name="fnameN313" class="form-control"     value="<?php echo $fnameN313; ?>">
        </div>
        
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-1</strong>

            <input type="text" name="fnameN314" class="form-control"     value="<?php echo $fnameN314; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-2</strong>

            <input type="text" name="fnameN315" class="form-control"     value="<?php echo $fnameN315; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama te krahut[H]-3</strong>

            <input type="text" name="fnameN316" class="form-control"     value="<?php echo $fnameN316; ?>">
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fnameN317" class="form-control"     value="<?php echo $fnameN317; ?>">
        </div>
      
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-1</strong>

            <input type="text" name="fnameN318" class="form-control"     value="<?php echo $fnameN318; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-2</strong>

            <input type="text" name="fnameN319" class="form-control"     value="<?php echo $fnameN319; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per xhama statik[H]-3</strong>

            <input type="text" name="fnameN320" class="form-control"     value="<?php echo $fnameN320; ?>">
                                
                             
        </div>
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Shtyll</strong>

            <input type="text" name="fnameN321" class="form-control"     value="<?php echo $fnameN321; ?>">
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Shtyll-2</strong>

            <input type="text" name="fnameN322" class="form-control"     value="<?php echo $fnameN322; ?>">
                                
                             
        </div> -->
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fnameN323" class="form-control"     value="<?php echo $fnameN323; ?>">
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Adapter-2</strong>

            <input type="text" name="fnameN324" class="form-control"     value="<?php echo $fnameN324; ?>">
                                
                             
        </div> -->
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Armatur Shtylla</strong>

            <input type="text" name="fnameN325" class="form-control"     value="<?php echo $fnameN325; ?>">
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Armatur Shtylla-2</strong>

            <input type="text" name="fnameN326" class="form-control"     value="<?php echo $fnameN326; ?>">
                                
                             
        </div> -->
        <div class="col-lg-3 col-md-6 col-6">
            <strong>Vlera per Armatur Adapteri </strong>

            <input type="text" name="fnameN327" class="form-control"     value="<?php echo $fnameN327; ?>">
                             
        </div>
        <!-- <div class="col-lg-3">
            <strong>Vlera per Armatur Adapteri-2 </strong>

            <input type="text" name="fnameN328" class="form-control"     value="<?php echo $fnameN328; ?>">
                             
        </div> -->
        <div class="col-lg-12 col-12">

          
            <button type="submit" name='ndrysho6'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>

</div>

</form>
      

        <?php

if(isset($_POST["ndrysho6"]))
{
    
    mysqli_query($link,"update userssix set KV='$_POST[fnameN31]',
    KH='$_POST[fnameN32]',
    KAV='$_POST[fnameN33]',
    KAH='$_POST[fnameN34]',
    KrV='$_POST[fnameN35]',
    KrH1='$_POST[fnameN36]',
    KrH2='$_POST[fnameN37]',
    KrH3='$_POST[fnameN38]',
    KrAV='$_POST[fnameN39]',
    KrAH1='$_POST[fnameN310]',
    KrAH2='$_POST[fnameN311]',
    KrAH3='$_POST[fnameN312]',
    XhV='$_POST[fnameN313]',
    XhH1='$_POST[fnameN314]',
    XhH2='$_POST[fnameN315]',
    XhH3='$_POST[fnameN316]',
    XhVS='$_POST[fnameN317]',
    XhHS1='$_POST[fnameN318]',
    XhHS2='$_POST[fnameN319]',
    XhHS3='$_POST[fnameN320]',
    Shtylla1='$_POST[fnameN321]',
  
    Adapteri1='$_POST[fnameN323]',
   
    ShtyllaA1='$_POST[fnameN325]',
    
    AdapteriA1='$_POST[fnameN327]' where id=$id");




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