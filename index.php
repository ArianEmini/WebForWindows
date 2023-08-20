<?php  
include "connecting.php";

?>


<!doctype html>
<html lang="en">

<body class="Body">

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
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="stylenew.css">
        <link rel="stylesheet" href="Vlera-style.css">
       
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script> -->
        <!-- <link rel="stylesheet" href="glide.theme.min.css"> -->

        <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> -->

        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script> -->


        <title>WebApplication</title>
     
    </head>
    <div>

        <header>
            <div class="jumbotron J" id="Fillimi" >
                <div class="row">

                    <div class="col-lg-12 col-12 ">
                        <h3 class="jumb">WebApplication For Windows</h3>
                    </div>
                    <div class="col-lg-12 col-md-12 col-12">

                        <!-- <a href="#Dhenja-Vlerave"><button class="btn btn-dark buttoniVlera ">Dhenja e Vlerave</button></a> -->
                        <div class="dropdown">
                        <button class="btn btn-dark dropdown-toggle buttoniVlera " data-toggle="dropdown">Dhenja e Vlerave</button>

                        <div class="dropdown-menu bg-white ">
                        <a href="#Dhenja-Vlerave" class="dropdown-item text-info">Dritare-1</a>
                        <a href="#Dhenja-Vlerave2" class="dropdown-item text-info">Dritare-2</a>
                        <a href="#Dhenja-Vlerave3" class="dropdown-item text-info">Dritare-3</a>
                        <a href="#Dhenja-Vlerave4" class="dropdown-item text-info">Dritare-4</a>
                       

                        <a href="#Dhenja-Vlerave2N" class="dropdown-item text-info">Ndarese-2</a>
                        <a href="#Dhenja-Vlerave3N" class="dropdown-item text-info">Ndarese-3</a>
                        <a href="#Dhenja-Vlerave4N" class="dropdown-item text-info">Ndarese-4</a>
                          </div>
                          </div>

                        <button class="btn btn-info  buttoniLista">Lista e dritareve</button>



                    </div>
                </div>

            </div>
        </header>

        <div class="container">
            <div class="row">

                <!-- Foto Driatre-1 -->

                <div class="Dritare1-PerFoto  ">
                    <div class="row">

                        <div class="col-lg-12 ">
                            <h4 class="PerFoto1">Foto Te Dritares Njeshe</h4>
                            <i class="fa fa-times mt-2 xx1"></i>

                        </div>
                        <div class="col-lg-3 col-md-3 col-4">
                            <img src="Foto-Dritare/Foto11.jpg" alt="" class="Image-Dritare" id="Dritare-njeshe">

                        </div>
                        <div class="col-lg-3 col-md-3 col-4">
                            <img src="Foto-Dritare/Foto12.jpg" alt="" class="Image-Dritare1  pb-2" id="Dritare-njeshe1">

                        </div>
                        <div class="col-lg-3 col-md-3 col-4">
                            <img src="Foto-Dritare/Foto13.jpg" alt="" class="Image-Dritare2" id="Dritare-njeshe2">

                        </div>
                        <div class="col-lg-3 col-md-3 col-4">
                            <img src="Foto-Dritare/Foto14.jpg" alt="" class="Image-Dritare3" id="Dritare-njeshe3">

                        </div>
                        <div class="col-lg-3 col-md-3 col-4">
                            <img src="Foto-Dritare/Foto15.jpg" alt="" class="Image-Dritare4" id="Dritare-njeshe4">

                        </div>




                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                    <img src="Foto-Dritare/Foto11.jpg" alt="" class="Image-Dritare" id="Dritare-njeshe-Scroll">
                </div>





                <!-- Foto Dritare-2 -->
                <div class="Dritare2-PerFoto">
                    <div class="row">
                        <div class="col-lg-12">
                            <h4 class="PerFoto2">Foto Te Dritares Dyshese</h4>
                            <i class="fa fa-times mt-2 xx2"></i>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">

                            <img src="Foto-Dritare/Foto21.jpg" alt="" class="Image-Dritar-Dyshese2" id="Dritaredyshe1">
                            <button class="btn btn-info ButoniNdares1 ">Ndarja ne vlera</button>


                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto22.jpg" alt="" class="Image-Dritar-Dyshese21" id="Dritaredyshe2">
                            <button class="btn btn-info ButoniNdares2">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto23.jpg" alt="" class="Image-Dritar-Dyshese22 "
                                id="Dritaredyshe3">
                            <button class="btn btn-info ButoniNdares3">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto24.jpg" alt="" class="Image-Dritar-Dyshese23 "
                                id="Dritaredyshe4">
                            <button class="btn btn-info ButoniNdares4">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto25.jpg" alt="" class="Image-Dritar-Dyshese24 "
                                id="Dritaredyshe5">
                            <button class="btn btn-info ButoniNdares5">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto26.jpg" alt="" class="Image-Dritar-Dyshese25 "
                                id="Dritaredyshe6">
                            <button class="btn btn-info ButoniNdares6">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto27.jpg" alt="" class="Image-Dritar-Dyshese26" id="Dritaredyshe7">
                            <button class="btn btn-info ButoniNdares7">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto28.jpg" alt="" class="Image-Dritar-Dyshese27" id="Dritaredyshe8">
                            <button class="btn btn-info ButoniNdares8">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto29.jpg" alt="" class="Image-Dritar-Dyshese28" id="Dritaredyshe9">
                            <button class="btn btn-info ButoniNdares9">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto210.jpg" alt="" class="Image-Dritar-Dyshese29 "
                                id="Dritaredyshe10">
                            <button class="btn btn-info ButoniNdares10">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto211.jpg" alt="" class="Image-Dritar-Dyshese210 "
                                id="Dritaredyshe11">
                            <button class="btn btn-info ButoniNdares11">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto212.jpg" alt="" class="Image-Dritar-Dyshese211 "
                                id="Dritaredyshe12">
                            <button class="btn btn-info ButoniNdares12">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto213.jpg" alt="" class="Image-Dritar-Dyshese212"
                                id="Dritaredyshe13">
                            <button class="btn btn-info ButoniNdares13">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto214.jpg" alt="" class="Image-Dritar-Dyshese213 "
                                id="Dritaredyshe14">
                            <button class="btn btn-info ButoniNdares14">Ndarja ne vlera</button>
                        </div>


                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <img src="Foto-Dritare/Foto21.jpg" alt="" class="Image-Dritar-Dyshese mb-3"
                        id="Dritaredyshe2Scroll"> </li>

                </div>





                <!-- Dritare Treshe  -->
                <div class="Dritare3-PerFoto">
                    <div class="row">
                        <div class="col-lg-12">
                            <h4 class="PerFoto3">Foto Te Dritares Treshe</h4>
                            <i class="fa fa-times mt-2 xx3"></i>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">

                            <img src="Foto-Dritare/Foto31.jpg" alt="" class="Image-Dritar-Dyshese31"
                                id="Dritaredyshe31"> </li>
                            <button class="btn btn-info ButoniNdares31 ">Ndarja ne vlera</button>


                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto32.jpg" alt="" class="Image-Dritar-Dyshese32"
                                id="Dritaredyshe32"> </li>
                            <button class="btn btn-info ButoniNdares32 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto33.jpg" alt="" class="Image-Dritar-Dyshese33"
                                id="Dritaredyshe33"> </li>
                            <button class="btn btn-info ButoniNdares33 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto34.jpg" alt="" class="Image-Dritar-Dyshese34"
                                id="Dritaredyshe34"> </li>
                            <button class="btn btn-info ButoniNdares34 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto35.jpg" alt="" class="Image-Dritar-Dyshese35"
                                id="Dritaredyshe35"> </li>
                            <button class="btn btn-info ButoniNdares35 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto36.jpg" alt="" class="Image-Dritar-Dyshese36"
                                id="Dritaredyshe36"> </li>
                            <button class="btn btn-info ButoniNdares36 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto37.jpg" alt="" class="Image-Dritar-Dyshese37"
                                id="Dritaredyshe37"> </li>
                            <button class="btn btn-info ButoniNdares37 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto38.jpg" alt="" class="Image-Dritar-Dyshese38"
                                id="Dritaredyshe38">
                            <button class="btn btn-info ButoniNdares38">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto39.jpg" alt="" class="Image-Dritar-Dyshese39"
                                id="Dritaredyshe39">
                            <button class="btn btn-info ButoniNdares39">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto310.jpg" alt="" class="Image-Dritar-Dyshese310 "
                                id="Dritaredyshe310">
                            <button class="btn btn-info ButoniNdares310">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto311.jpg" alt="" class="Image-Dritar-Dyshese311 "
                                id="Dritaredyshe311">
                            <button class="btn btn-info ButoniNdares311">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto312.jpg" alt="" class="Image-Dritar-Dyshese312 "
                                id="Dritaredyshe312">
                            <button class="btn btn-info ButoniNdares312">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto313.jpg" alt="" class="Image-Dritar-Dyshese313"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdares313">Ndarja ne vlera</button>
                        </div>


                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-31.jpg" alt="" class="Image-Dritar-DysheseAA1"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA1">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-32.jpg" alt="" class="Image-Dritar-DysheseAA2"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA2">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-33.jpg" alt="" class="Image-Dritar-DysheseAA3"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA3">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-34.jpg" alt="" class="Image-Dritar-DysheseAA4"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA4">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-35.jpg" alt="" class="Image-Dritar-DysheseAA5"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA5">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-36.jpg" alt="" class="Image-Dritar-DysheseAA6"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA6">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-37.jpg" alt="" class="Image-Dritar-DysheseAA7"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA7">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-38.jpg" alt="" class="Image-Dritar-DysheseAA8"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA8">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-39.jpg" alt="" class="Image-Dritar-DysheseAA9"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA9">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-310.jpg" alt="" class="Image-Dritar-DysheseAA10"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA10">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-311.jpg" alt="" class="Image-Dritar-DysheseAA11"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA11">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Adapteri-312.jpg" alt="" class="Image-Dritar-DysheseAA12"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdaresAA12">Ndarja ne vlera</button>
                        </div>




                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto314.jpg" alt="" class="Image-Dritar-Dyshese314 "
                                id="Dritaredyshe314">
                            <button class="btn btn-info ButoniNdares314">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto315.jpg" alt="" class="Image-Dritar-Dyshese315 "
                                id="Dritaredyshe315">
                            <button class="btn btn-info ButoniNdares315">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto316.jpg" alt="" class="Image-Dritar-Dyshese316 "
                                id="Dritaredyshe316">
                            <button class="btn btn-info ButoniNdares316">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto317.jpg" alt="" class="Image-Dritar-Dyshese317 "
                                id="Dritaredyshe317">
                            <button class="btn btn-info ButoniNdares317">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto318.jpg" alt="" class="Image-Dritar-Dyshese318 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdares318">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto319.jpg" alt="" class="Image-Dritar-Dyshese319 "
                                id="Dritaredyshe319">
                            <button class="btn btn-info ButoniNdares319">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto320.jpg" alt="" class="Image-Dritar-Dyshese320 "
                                id="Dritaredyshe320">
                            <button class="btn btn-info ButoniNdares320">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto321.jpg" alt="" class="Image-Dritar-Dyshese321 "
                                id="Dritaredyshe321">
                            <button class="btn btn-info ButoniNdares321">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto322.jpg" alt="" class="Image-Dritar-Dyshese322"
                                id="Dritaredyshe322">
                            <button class="btn btn-info ButoniNdares322">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto323.jpg" alt="" class="Image-Dritar-Dyshese323 "
                                id="Dritaredyshe323">
                            <button class="btn btn-info ButoniNdares323">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto324.jpg" alt="" class="Image-Dritar-Dyshese324 "
                                id="Dritaredyshe324">
                            <button class="btn btn-info ButoniNdares324">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto325.jpg" alt="" class="Image-Dritar-Dyshese325"
                                id="Dritaredyshe325">
                            <button class="btn btn-info ButoniNdares325">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto326.jpg" alt="" class="Image-Dritar-Dyshese326 "
                                id="Dritaredyshe326">
                            <button class="btn btn-info ButoniNdares326">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto327.jpg" alt="" class="Image-Dritar-Dyshese327 "
                                id="Dritaredyshe327">
                            <button class="btn btn-info ButoniNdares327">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto328.jpg" alt="" class="Image-Dritar-Dyshese328 "
                                id="Dritaredyshe328">
                            <button class="btn btn-info ButoniNdares328">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto329.jpg" alt="" class="Image-Dritar-Dyshese329"
                                id="Dritaredyshe329">
                            <button class="btn btn-info ButoniNdares329">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto330.jpg" alt="" class="Image-Dritar-Dyshese330"
                                id="Dritaredyshe330">
                            <button class="btn btn-info ButoniNdares330">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto331.jpg" alt="" class="Image-Dritar-Dyshese331"
                                id="Dritaredyshe331">
                            <button class="btn btn-info ButoniNdares331">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto332.jpg" alt="" class="Image-Dritar-Dyshese332"
                                id="Dritaredyshe332">
                            <button class="btn btn-info ButoniNdares332">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto333.jpg" alt="" class="Image-Dritar-Dyshese333"
                                id="Dritaredyshe333">
                            <button class="btn btn-info ButoniNdares333">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto334.jpg" alt="" class="Image-Dritar-Dyshese334"
                                id="Dritaredyshe334">
                            <button class="btn btn-info ButoniNdares334">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto335.jpg" alt="" class="Image-Dritar-Dyshese335"
                                id="Dritaredyshe335">
                            <button class="btn btn-info ButoniNdares335">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto336.jpg" alt="" class="Image-Dritar-Dyshese336"
                                id="Dritaredyshe336">
                            <button class="btn btn-info ButoniNdares336">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto337.jpg" alt="" class="Image-Dritar-Dyshese337"
                                id="Dritaredyshe337">
                            <button class="btn btn-info ButoniNdares337">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto338.jpg" alt="" class="Image-Dritar-Dyshese338"
                                id="Dritaredyshe338">
                            <button class="btn btn-info ButoniNdares338">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto339.jpg" alt="" class="Image-Dritar-Dyshese339"
                                id="Dritaredyshe339">
                            <button class="btn btn-info ButoniNdares339">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto340.jpg" alt="" class="Image-Dritar-Dyshese340"
                                id="Dritaredyshe340">
                            <button class="btn btn-info ButoniNdares340">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto341.jpg" alt="" class="Image-Dritar-Dyshese341"
                                id="Dritaredyshe341">
                            <button class="btn btn-info ButoniNdares341">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto342.jpg" alt="" class="Image-Dritar-Dyshese342"
                                id="Dritaredyshe342">
                            <button class="btn btn-info ButoniNdares342">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto343.jpg" alt="" class="Image-Dritar-Dyshese343"
                                id="Dritaredyshe343">
                            <button class="btn btn-info ButoniNdares343">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto344.jpg" alt="" class="Image-Dritar-Dyshese344"
                                id="Dritaredyshe344">
                            <button class="btn btn-info ButoniNdares344">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto345.jpg" alt="" class="Image-Dritar-Dyshese345"
                                id="Dritaredyshe345">
                            <button class="btn btn-info ButoniNdares345">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto346.jpg" alt="" class="Image-Dritar-Dyshese346"
                                id="Dritaredyshe346">
                            <button class="btn btn-info ButoniNdares346">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto347.jpg" alt="" class="Image-Dritar-Dyshese347"
                                id="Dritaredyshe347">
                            <button class="btn btn-info ButoniNdares347">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto348.jpg" alt="" class="Image-Dritar-Dyshese348"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares348">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto349.jpg" alt="" class="Image-Dritar-Dyshese349"
                                id="Dritaredyshe349">
                            <button class="btn btn-info ButoniNdares349">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 ">
                            <img src="Foto-Dritare/Foto350.jpg" alt="" class="Image-Dritar-Dyshese350"
                                id="Dritaredyshe350">
                            <button class="btn btn-info ButoniNdares350">Ndarja ne vlera</button>
                        </div>
                        <!-- <div class="col-lg-3 col-6 mt-4">
            <img  src="Foto-Dritare/Foto347.jpg" alt=""  class="Image-Dritar-Dyshese347" id="Dritaredyshe347">
            <button class="btn btn-info ButoniNdares347">Ndarja ne vlera</button> 
        </div>
        <div class="col-lg-3 col-6 mt-4">
            <img  src="Foto-Dritare/Foto348.jpg" alt=""  class="Image-Dritar-Dyshese348" id="Dritaredyshe348">
            <button class="btn btn-info ButoniNdares348">Ndarja ne vlera</button> 
        </div>
        <div class="col-lg-3 col-6 mt-4">
            <img  src="Foto-Dritare/Foto349.jpg" alt=""  class="Image-Dritar-Dyshese349" id="Dritaredyshe349">
            <button class="btn btn-info ButoniNdares349">Ndarja ne vlera</button> 
        </div>
        <div class="col-lg-3 col-6 mt-4">
            <img  src="Foto-Dritare/Foto350.jpg" alt=""  class="Image-Dritar-Dyshese350" id="Dritaredyshe350">
            <button class="btn btn-info ButoniNdares350">Ndarja ne vlera</button> 
        </div> -->






                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-6">
                    <img src="Foto-Dritare/Foto31.jpg" alt="" class="DritareTreshe-3" id="DritareTresheScroll">
                </div>







                <!-- Dritare Katershe -->

                <div class="Dritare4-PerFoto">
                    <div class="row">
                        <div class="col-lg-12">
                            <h4 class="PerFoto3">Foto Te Dritares Katershe</h4>
                            <i class="fa fa-times mt-2 xx4"></i>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">

                            <img src="Foto-Dritare/Foto41.jpg" alt="" class="Image-Dritar-Dyshese41"
                                id="Dritaredyshe31">
                            <button class="btn btn-info ButoniNdares41 ">Ndarja ne vlera</button>


                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto42.jpg" alt="" class="Image-Dritar-Dyshese42"
                                id="Dritaredyshe32">
                            <button class="btn btn-info ButoniNdares42 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto43.jpg" alt="" class="Image-Dritar-Dyshese43"
                                id="Dritaredyshe33">
                            <button class="btn btn-info ButoniNdares43 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto44.jpg" alt="" class="Image-Dritar-Dyshese44"
                                id="Dritaredyshe34">
                            <button class="btn btn-info ButoniNdares44 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto45.jpg" alt="" class="Image-Dritar-Dyshese45"
                                id="Dritaredyshe35">
                            <button class="btn btn-info ButoniNdares45 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto46.jpg" alt="" class="Image-Dritar-Dyshese46"
                                id="Dritaredyshe36">
                            <button class="btn btn-info ButoniNdares46 ">Ndarja ne vlera</button>

                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto47.jpg" alt="" class="Image-Dritar-Dyshese47"
                                id="Dritaredyshe37">
                            <button class="btn btn-info ButoniNdares47 ">Ndarja ne vlera</button>

                        </div>

                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto49.jpg" alt="" class="Image-Dritar-Dyshese49"
                                id="Dritaredyshe39">
                            <button class="btn btn-info ButoniNdares49">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto410.jpg" alt="" class="Image-Dritar-Dyshese410 "
                                id="Dritaredyshe310">
                            <button class="btn btn-info ButoniNdares410">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto411.jpg" alt="" class="Image-Dritar-Dyshese411 "
                                id="Dritaredyshe311">
                            <button class="btn btn-info ButoniNdares411">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto412.jpg" alt="" class="Image-Dritar-Dyshese412 "
                                id="Dritaredyshe312">
                            <button class="btn btn-info ButoniNdares412">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto413.jpg" alt="" class="Image-Dritar-Dyshese413"
                                id="Dritaredyshe313">
                            <button class="btn btn-info ButoniNdares413">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto414.jpg" alt="" class="Image-Dritar-Dyshese414 "
                                id="Dritaredyshe314">
                            <button class="btn btn-info ButoniNdares414">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto415.jpg" alt="" class="Image-Dritar-Dyshese415 "
                                id="Dritaredyshe315">
                            <button class="btn btn-info ButoniNdares415">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto416.jpg" alt="" class="Image-Dritar-Dyshese416 "
                                id="Dritaredyshe316">
                            <button class="btn btn-info ButoniNdares416">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto417.jpg" alt="" class="Image-Dritar-Dyshese417 "
                                id="Dritaredyshe317">
                            <button class="btn btn-info ButoniNdares417">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto418.jpg" alt="" class="Image-Dritar-Dyshese418 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdares418">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-41.jpg" alt="" class="Image-Dritar-DysheseA1 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA1">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-42.jpg" alt="" class="Image-Dritar-DysheseA2 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA2">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-43.jpg" alt="" class="Image-Dritar-DysheseA3 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA3">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-44.jpg" alt="" class="Image-Dritar-DysheseA4 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA4">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-45.jpg" alt="" class="Image-Dritar-DysheseA5 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA5">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-46.jpg" alt="" class="Image-Dritar-DysheseA6 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA6">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-47.jpg" alt="" class="Image-Dritar-DysheseA7 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA7">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-48.jpg" alt="" class="Image-Dritar-DysheseA8 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA8">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-49.jpg" alt="" class="Image-Dritar-DysheseA9 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA9">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-410.jpg" alt="" class="Image-Dritar-DysheseA10 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA10">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-411.jpg" alt="" class="Image-Dritar-DysheseA11 "
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA11">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-412.jpg" alt="" class="Image-Dritar-DysheseA12"
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA12">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-413.jpg" alt="" class="Image-Dritar-DysheseA13"
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA13">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-414.jpg" alt="" class="Image-Dritar-DysheseA14"
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA14">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Adapteri-415.jpg" alt="" class="Image-Dritar-DysheseA15"
                                id="Dritaredyshe318">
                            <button class="btn btn-info ButoniNdaresA15">Ndarja ne vlera</button>
                        </div>




                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto419.jpg" alt="" class="Image-Dritar-Dyshese419 "
                                id="Dritaredyshe319">
                            <button class="btn btn-info ButoniNdares419">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto420.jpg" alt="" class="Image-Dritar-Dyshese420 "
                                id="Dritaredyshe320">
                            <button class="btn btn-info ButoniNdares420">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto421.jpg" alt="" class="Image-Dritar-Dyshese421 "
                                id="Dritaredyshe321">
                            <button class="btn btn-info ButoniNdares421">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto422.jpg" alt="" class="Image-Dritar-Dyshese422"
                                id="Dritaredyshe322">
                            <button class="btn btn-info ButoniNdares422">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto423.jpg" alt="" class="Image-Dritar-Dyshese423 "
                                id="Dritaredyshe323">
                            <button class="btn btn-info ButoniNdares423">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto424.jpg" alt="" class="Image-Dritar-Dyshese424 "
                                id="Dritaredyshe324">
                            <button class="btn btn-info ButoniNdares424">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto425.jpg" alt="" class="Image-Dritar-Dyshese425"
                                id="Dritaredyshe325">
                            <button class="btn btn-info ButoniNdares425">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto426.jpg" alt="" class="Image-Dritar-Dyshese426 "
                                id="Dritaredyshe326">
                            <button class="btn btn-info ButoniNdares426">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto427.jpg" alt="" class="Image-Dritar-Dyshese427 "
                                id="Dritaredyshe327">
                            <button class="btn btn-info ButoniNdares427">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto428.jpg" alt="" class="Image-Dritar-Dyshese428 "
                                id="Dritaredyshe328">
                            <button class="btn btn-info ButoniNdares428">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto429.jpg" alt="" class="Image-Dritar-Dyshese429"
                                id="Dritaredyshe329">
                            <button class="btn btn-info ButoniNdares429">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto430.jpg" alt="" class="Image-Dritar-Dyshese430"
                                id="Dritaredyshe330">
                            <button class="btn btn-info ButoniNdares430">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto431.jpg" alt="" class="Image-Dritar-Dyshese431"
                                id="Dritaredyshe331">
                            <button class="btn btn-info ButoniNdares431">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto432.jpg" alt="" class="Image-Dritar-Dyshese432"
                                id="Dritaredyshe332">
                            <button class="btn btn-info ButoniNdares432">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto433.jpg" alt="" class="Image-Dritar-Dyshese433"
                                id="Dritaredyshe333">
                            <button class="btn btn-info ButoniNdares433">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto434.jpg" alt="" class="Image-Dritar-Dyshese434"
                                id="Dritaredyshe334">
                            <button class="btn btn-info ButoniNdares434">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto435.jpg" alt="" class="Image-Dritar-Dyshese435"
                                id="Dritaredyshe335">
                            <button class="btn btn-info ButoniNdares435">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto436.jpg" alt="" class="Image-Dritar-Dyshese436"
                                id="Dritaredyshe336">
                            <button class="btn btn-info ButoniNdares436">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto437.jpg" alt="" class="Image-Dritar-Dyshese437"
                                id="Dritaredyshe337">
                            <button class="btn btn-info ButoniNdares437">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto438.jpg" alt="" class="Image-Dritar-Dyshese438"
                                id="Dritaredyshe338">
                            <button class="btn btn-info ButoniNdares438">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto439.jpg" alt="" class="Image-Dritar-Dyshese439"
                                id="Dritaredyshe339">
                            <button class="btn btn-info ButoniNdares439">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto440.jpg" alt="" class="Image-Dritar-Dyshese440"
                                id="Dritaredyshe340">
                            <button class="btn btn-info ButoniNdares440">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto441.jpg" alt="" class="Image-Dritar-Dyshese441"
                                id="Dritaredyshe341">
                            <button class="btn btn-info ButoniNdares441">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto442.jpg" alt="" class="Image-Dritar-Dyshese442"
                                id="Dritaredyshe342">
                            <button class="btn btn-info ButoniNdares442">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto443.jpg" alt="" class="Image-Dritar-Dyshese443"
                                id="Dritaredyshe343">
                            <button class="btn btn-info ButoniNdares443">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto444.jpg" alt="" class="Image-Dritar-Dyshese444"
                                id="Dritaredyshe344">
                            <button class="btn btn-info ButoniNdares444">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto445.jpg" alt="" class="Image-Dritar-Dyshese445"
                                id="Dritaredyshe345">
                            <button class="btn btn-info ButoniNdares445">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto446.jpg" alt="" class="Image-Dritar-Dyshese446"
                                id="Dritaredyshe346">
                            <button class="btn btn-info ButoniNdares446">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto447.jpg" alt="" class="Image-Dritar-Dyshese447"
                                id="Dritaredyshe347">
                            <button class="btn btn-info ButoniNdares447">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto448.jpg" alt="" class="Image-Dritar-Dyshese448"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares448">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto449.jpg" alt="" class="Image-Dritar-Dyshese449"
                                id="Dritaredyshe349">
                            <button class="btn btn-info ButoniNdares449">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto450.jpg" alt="" class="Image-Dritar-Dyshese450"
                                id="Dritaredyshe350">
                            <button class="btn btn-info ButoniNdares450">Ndarja ne vlera</button>
                        </div>

                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto451.jpg" alt="" class="Image-Dritar-Dyshese451"
                                id="Dritaredyshe341">
                            <button class="btn btn-info ButoniNdares451">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto452.jpg" alt="" class="Image-Dritar-Dyshese452"
                                id="Dritaredyshe342">
                            <button class="btn btn-info ButoniNdares452">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto453.jpg" alt="" class="Image-Dritar-Dyshese453"
                                id="Dritaredyshe343">
                            <button class="btn btn-info ButoniNdares453">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto454.jpg" alt="" class="Image-Dritar-Dyshese454"
                                id="Dritaredyshe344">
                            <button class="btn btn-info ButoniNdares454">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto455.jpg" alt="" class="Image-Dritar-Dyshese455"
                                id="Dritaredyshe345">
                            <button class="btn btn-info ButoniNdares455">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto456.jpg" alt="" class="Image-Dritar-Dyshese456"
                                id="Dritaredyshe346">
                            <button class="btn btn-info ButoniNdares456">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto457.jpg" alt="" class="Image-Dritar-Dyshese457"
                                id="Dritaredyshe347">
                            <button class="btn btn-info ButoniNdares457">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto458.jpg" alt="" class="Image-Dritar-Dyshese458"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares458">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto459.jpg" alt="" class="Image-Dritar-Dyshese459"
                                id="Dritaredyshe349">
                            <button class="btn btn-info ButoniNdares459">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto460.jpg" alt="" class="Image-Dritar-Dyshese460"
                                id="Dritaredyshe350">
                            <button class="btn btn-info ButoniNdares460">Ndarja ne vlera</button>
                        </div>

                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto461.jpg" alt="" class="Image-Dritar-Dyshese461"
                                id="Dritaredyshe341">
                            <button class="btn btn-info ButoniNdares461">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto462.jpg" alt="" class="Image-Dritar-Dyshese462"
                                id="Dritaredyshe342">
                            <button class="btn btn-info ButoniNdares462">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto463.jpg" alt="" class="Image-Dritar-Dyshese463"
                                id="Dritaredyshe343">
                            <button class="btn btn-info ButoniNdares463">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto464.jpg" alt="" class="Image-Dritar-Dyshese464"
                                id="Dritaredyshe344">
                            <button class="btn btn-info ButoniNdares464">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto465.jpg" alt="" class="Image-Dritar-Dyshese465"
                                id="Dritaredyshe345">
                            <button class="btn btn-info ButoniNdares465">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto466.jpg" alt="" class="Image-Dritar-Dyshese466"
                                id="Dritaredyshe346">
                            <button class="btn btn-info ButoniNdares466">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto467.jpg" alt="" class="Image-Dritar-Dyshese467"
                                id="Dritaredyshe347">
                            <button class="btn btn-info ButoniNdares467">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto468.jpg" alt="" class="Image-Dritar-Dyshese468"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares468">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto469.jpg" alt="" class="Image-Dritar-Dyshese469"
                                id="Dritaredyshe349">
                            <button class="btn btn-info ButoniNdares469">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto470.jpg" alt="" class="Image-Dritar-Dyshese470"
                                id="Dritaredyshe350">
                            <button class="btn btn-info ButoniNdares470">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto471.jpg" alt="" class="Image-Dritar-Dyshese471"
                                id="Dritaredyshe341">
                            <button class="btn btn-info ButoniNdares471">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto472.jpg" alt="" class="Image-Dritar-Dyshese472"
                                id="Dritaredyshe342">
                            <button class="btn btn-info ButoniNdares472">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto473.jpg" alt="" class="Image-Dritar-Dyshese473"
                                id="Dritaredyshe343">
                            <button class="btn btn-info ButoniNdares473">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto474.jpg" alt="" class="Image-Dritar-Dyshese474"
                                id="Dritaredyshe344">
                            <button class="btn btn-info ButoniNdares474">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto475.jpg" alt="" class="Image-Dritar-Dyshese475"
                                id="Dritaredyshe345">
                            <button class="btn btn-info ButoniNdares475">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto476.jpg" alt="" class="Image-Dritar-Dyshese476"
                                id="Dritaredyshe346">
                            <button class="btn btn-info ButoniNdares476">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto477.jpg" alt="" class="Image-Dritar-Dyshese477"
                                id="Dritaredyshe347">
                            <button class="btn btn-info ButoniNdares477">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto478.jpg" alt="" class="Image-Dritar-Dyshese478"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares478">Ndarja ne vlera</button>
                        </div>

                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto479.jpg" alt="" class="Image-Dritar-Dyshese479"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares479">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto480.jpg" alt="" class="Image-Dritar-Dyshese480"
                                id="Dritaredyshe350">
                            <button class="btn btn-info ButoniNdares480">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto481.jpg" alt="" class="Image-Dritar-Dyshese481"
                                id="Dritaredyshe341">
                            <button class="btn btn-info ButoniNdares481">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto482.jpg" alt="" class="Image-Dritar-Dyshese482"
                                id="Dritaredyshe342">
                            <button class="btn btn-info ButoniNdares482">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto483.jpg" alt="" class="Image-Dritar-Dyshese483"
                                id="Dritaredyshe343">
                            <button class="btn btn-info ButoniNdares483">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto484.jpg" alt="" class="Image-Dritar-Dyshese484"
                                id="Dritaredyshe344">
                            <button class="btn btn-info ButoniNdares484">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto485.jpg" alt="" class="Image-Dritar-Dyshese485"
                                id="Dritaredyshe345">
                            <button class="btn btn-info ButoniNdares485">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto486.jpg" alt="" class="Image-Dritar-Dyshese486"
                                id="Dritaredyshe346">
                            <button class="btn btn-info ButoniNdares486">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto487.jpg" alt="" class="Image-Dritar-Dyshese487"
                                id="Dritaredyshe347">
                            <button class="btn btn-info ButoniNdares487">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto488.jpg" alt="" class="Image-Dritar-Dyshese488"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares488">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto489.jpg" alt="" class="Image-Dritar-Dyshese489"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares489">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto490.jpg" alt="" class="Image-Dritar-Dyshese490"
                                id="Dritaredyshe348">
                            <button class="btn btn-info ButoniNdares490">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto491.jpg" alt="" class="Image-Dritar-Dyshese491"
                                id="Dritaredyshe341">
                            <button class="btn btn-info ButoniNdares491">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto492.jpg" alt="" class="Image-Dritar-Dyshese492"
                                id="Dritaredyshe342">
                            <button class="btn btn-info ButoniNdares492">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto493.jpg" alt="" class="Image-Dritar-Dyshese493"
                                id="Dritaredyshe343">
                            <button class="btn btn-info ButoniNdares493">Ndarja ne vlera</button>
                        </div>
                        <div class="col-lg-3 col-md-4 col-6 mt-4">
                            <img src="Foto-Dritare/Foto494.jpg" alt="" class="Image-Dritar-Dyshese494"
                                id="Dritaredyshe344">
                            <button class="btn btn-info ButoniNdares494">Ndarja ne vlera</button>
                        </div>







                    </div>
                </div>





















                <div class="col-lg-3 col-md-6 col-6">
                    <img src="Foto-Dritare/Foto41.jpg" alt="Gabim ne shfaqje" class="DritareKatershe-4"
                        id="DritareKatersheScroll">
                </div>

            </div>





            <!-- DRITARE 1 -->
            <div class="my-modal Dritare-1 mt-5">
                <di class="modal-content">
                    <div class="modal-header ">
                        <div class="row w-100">
                            <div class="col-lg-6 col-6">
                                <strong class="Texti">Dritare Njeshe</strong>
                            </div>
                            <div class="col-lg-6   col-6 ">
                                <i class="fa fa-times mt-2 x1 "></i>
                            </div>
                            <br><br>
                            <div class="col-lg-4 ">
                                <img src="" alt="" name="Foto" class="Foto col-lg-12 col-md-4 h-100">
                            </div>

                        </div>
                    </div>
                    <div class="modal-body">
                        <form action="group">
                            <input type="number" name="" id="" class="form-control Gjeresia1" placeholder="Gjeresia">
                            <input type="number" name="" id="" class="form-control Gjatesia1" placeholder="Gjatesia">
                        </form>

                        <!-- <button class="btn btn-primary ButoniShtylla1 col-lg-2  col-3 col-md-2">Shtylla</button>
            <button class="btn btn-primary  ButoniAdapter1 col-lg-2  col-3 col-md-2">Adapteri</button> -->
                        <!-- <button class="btn btn-primary butoni">Gjera Shtes</button>
            <button class="btn btn-primary butoni">Gjera Shtes</button> -->
                    </div>

                    <div class="modal-footer">
                        <a href="#Rezultatet1"><button class="btn btn-danger Mbledhja1">Mbledhi keto te dhena
                            </button></a>
                    </div>
            </div>
        </div>
    </div>






    <!-- DRITARE 2 -->

    <div class="my-modal Dritare-2 mt-5">
        <div class="modal-content">
            <div class="modal-header ">
                <div class="row w-100 ">
                    <div class="col-lg-6 col-6 mb-3 text2  ">
                        <strong class=" Texti2">Dritare Dyshese</strong>
                    </div>
                    <div class="col-lg-6  col-6 ">
                        <i class="fa fa-times mt-2 x2 pl-2 "></i>
                    </div>
                    <div class="col-lg-4 ">
                        <img src="" alt="" name="Foto2" class="Foto2 col-lg-12 col-md-4 h-100">
                    </div>


                </div>
            </div>
            <div class="modal-body">
                <form action="group">
                    <input type="number" name="" id="" class="form-control Gjatesia" placeholder="Gjatesia">
                    <input type="number" name="" id="" class="form-control Gjeresia" placeholder="Gjeresia">

                </form>

                <button class="btn btn-primary ButoniShtylla ">Shtylla</button>
                <button class="btn btn-primary ButoniAdapter  ">Adapteri</button>
            </div>
            <div class="modal-footer Mbledhjadyshe">
                <a href="#Rezultatet"><button class="btn btn-danger Mbledhja ">Mbledhi keto te dhena </button></a>
            </div>
        </div>
    </div>


    <!-- Dritare Dyshese Me pjese ndarse te gjeresis Me i dhan te dhenat-->
    <div class="my-modal DritareNdarse-2 ">
        <div class="modal-content">
            <div class="modal-header ">
                <div class="row w-100">
                    <div class="col-lg-6 col-6 mb-3">
                        <strong class=" TextiNdares-2">Dritare Dyshese</strong>
                    </div>
                    <div class="col-lg-6 col-6 mb-3">
                        <i class="fa fa-times mt-2 xNdares-2"></i>
                    </div>
                    <div class="col-lg-4 ">
                        <img src="" alt="" name="FotoNdarese2" class="FotoNdarese-2 col-lg-12 col-md-4 h-100">
                    </div>


                </div>
            </div>
            <div class="modal-body">
                <form action="group">
                    <div class="row">
                        <div class="col-lg-6 col-6">
                            <input type="number" name="" id="" class="form-control GjeresiaH-1" placeholder="Gjeresi-1">

                        </div>
                        <div class="col-lg-6  col-6">
                            <input type="number" name="" id="" class="form-control GjeresiaH-2"
                                placeholder="Gjeresia-2">

                        </div>
                        <div class="col-lg-5 col-md-5 col-6">
                            <input type="number" name="" id="" class="form-control GjatesiaNdarese"
                                placeholder="Gjatesia E Dritares ">

                        </div>

                    </div>
                </form>

                <button class="btn btn-primary ButoniShtyllaPerNdarse">Shtylla</button>
                <button class="btn btn-primary ButoniAdapterPerNdarse">Adapteri</button>
            </div>
            <div class="modal-footer">
                <a href="#RezultatetGjatNdarjes"><button class="btn btn-danger MbledhjaPerNdarse">Mbledhi keto te dhena
                    </button></a>
            </div>
        </div>
    </div>


    <!-- Dritare Treshe -->
    <div class="my-modal Dritare-3 mt-5">
        <div class="modal-content">
            <div class="modal-header ">
                <div class="row w-100">
                    <div class="col-lg-6 col-6 mb-3">
                        <strong class=" TextiP3">Dritare Treshe</strong>
                    </div>
                    <div class="col-lg-6 col-6 mb-3">
                        <i class="fa fa-times mt-2 xP3"></i>
                    </div>
                    <div class="col-lg-4 ">
                        <img src="" alt="" name="Foto3" class="Foto3 col-lg-12 col-md-3 h-100 ">
                    </div>


                </div>
            </div>
            <div class="modal-body">
                <form action="group">

                    <div class="row">


                        <div class="col-lg-5 col-5">
                            <input type="number" name="" class="form-control GjeresiaP-3" placeholder="Gjeresia">

                        </div>
                        <div class="col-lg-5 col-5">
                            <input type="number" name="" class="form-control GjatesiaP-3" placeholder="Gjatesia">

                        </div>
                    </div>

                </form>
                <div class="row">
                    <div class="col-lg-2 col-md-3 col-5 TreshiMarginButon">
                        <button class="btn btn-primary ButoniShtyllaP-1 ">Shtylla-1</button>

                    </div>
                    <div class="col-lg-2 col-md-3 col-5">
                        <button class="btn btn-primary ButoniShtyllaP-2">Shtylla-2</button>


                    </div>
                    <div class="col-lg-2 col-md-3 col-5 ">
                        <button class="btn btn-primary ButoniAdapterP-1">Adapteri-1</button>


                    </div>
                    <div class="col-lg-2 col-md-3 col-5 ">
                        <button class="btn btn-primary ButoniAdapterP-2">Adapteri-2</button>


                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <a href="#Rezultatet3"><button class="btn btn-danger Mbledhja3">Mbledhi keto te dhena </button></a>
            </div>
        </div>
    </div>





    <!-- Dritare Treshe Ndarese -->
    <div class="my-modal DritareNdarse-3 TreshjaN">
        <div class="modal-content">
            <div class="modal-header ">
                <div class="row w-100">
                    <div class="col-lg-6 col-7 mb-3">
                        <strong class=" Texti3">Dritare Treshe</strong>
                    </div>
                    <div class="col-lg-6 col-5 mb-3">
                        <i class="fa fa-times mt-2 x3"></i>
                    </div>
                    <div class="col-lg-4 ">
                        <img src="" alt="" name="FotoNdarese3" class="FotoN3 col-lg-12 col-md-3 h-100">
                    </div>


                </div>
            </div>

            <div class="modal-body">
                <form action="group">

                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-4">
                            <input type="number" name="" class="form-control GjeresiaTreshe-1" placeholder="Gjeresi-1">

                        </div>
                        <div class="col-lg-4 col-md-4 col-4">
                            <input type="number" name="" class="form-control GjeresiaTreshe-2" placeholder="Gjeresi-2">

                        </div>
                        <div class="col-lg-4 col-md-4 col-4">
                            <input type="number" name="" class="form-control GjeresiaTreshe-3" placeholder="Gjeresi-3">

                        </div>
                        <div class="col-lg-5 col-md-5 col-6">
                            <input type="number" name="" class="form-control GjatesiaTreshe-3" placeholder="Gjatesia">

                        </div>
                    </div>

                </form>

                <div class="row ">
                    <div class="col-lg-2 col-md-3 col-5 GjatesiaTresheNdarse ">
                        <button class="btn btn-primary ButoniShtyllaN-1">Shtylla-1</button>
                    </div>
                    <div class="col-lg-2 col-md-3 col-5">
                        <button class="btn btn-primary ButoniShtyllaN-2">Shtylla-2</button>
                    </div>
                    <div class="col-lg-2 col-md-3  col-5">
                        <button class="btn btn-primary ButoniAdapterN-1">Adapteri-1</button>
                    </div>
                    <div class="col-lg-2 col-md-3 col-5">
                        <button class="btn btn-primary ButoniAdapterN-2">Adapteri-2</button>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <a href="#RezultatetNdarse3"><button class="btn btn-danger MbledhjaN3">Mbledhi keto te dhena
                    </button></a>
            </div>
        </div>
    </div>


    <!-- Dritare Katershe  -->
    <div class="my-modal Dritare-4 ">
        <div class="modal-content">
            <div class="modal-header ">
                <div class="row w-100">
                    <div class="col-lg-6 col-7 mb-3">
                        <strong class=" TextiP3">Dritare Katershe</strong>
                    </div>
                    <div class="col-lg-6 col-5 mb-3">
                        <i class="fa fa-times mt-2 xP4"></i>
                    </div>
                    <div class="col-lg-4 ">
                        <img src="" alt="" name="Foto4" class="Foto4 col-lg-12 col-md-3 h-100 ">
                    </div>


                </div>
            </div>
            <div class="modal-body">
                <form action="group">

                    <div class="row">


                        <div class="col-lg-5 col-5">
                            <input type="number" name="" class="form-control Gjeresia-4" placeholder="Gjeresia">

                        </div>
                        <div class="col-lg-5 col-5">
                            <input type="number" name="" class="form-control Gjatesia-4 " placeholder="Gjatesia">

                        </div>
                    </div>

                </form>
                <div class="row w-100">
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniShtylla-41  mt-2">Shtylla-1</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniShtylla-42 mt-2">Shtylla-2</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniShtylla-43 mt-2">Shtylla-3</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniAdapter-41  mt-2">Adapter-1</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniAdapter-42 mt-2">Adapter-2</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4 ">
                        <button class="btn btn-primary ButoniAdapter-43  mt-2">Adapter-3</button>

                    </div>
                </div>



            </div>
            <div class="modal-footer">
                <a href="#Rezultatet4"><button class="btn btn-danger Mbledhja4">Mbledhi keto te dhena </button></a>
            </div>
        </div>
    </div>



    <!-- Dritare Katershe Ndarse  -->

    <div class="my-modal DritareNdarse-4 ">
        <div class="modal-content">
            <div class="modal-header ">
                <div class="row w-100">
                    <div class="col-lg-6 col-7 mb-3">
                        <strong class=" Texti3">Dritare Treshe</strong>
                    </div>
                    <div class="col-lg-6 col-5 mb-3">
                        <i class="fa fa-times mt-2 close4"></i>
                    </div>
                    <div class="col-lg-4 ">
                        <img src="" alt="" name="FotoNdarese4" class="Foto4 col-lg-12 col-md-3 h-100 ">
                    </div>


                </div>
            </div>
            <div class="modal-body">
                <form action="group">

                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-4">
                            <input type="number" name="" class="form-control GjeresiaKatersheNdarse-1"
                                placeholder="Gjeresi-1">

                        </div>
                        <div class="col-lg-3 col-md-3 col-4">
                            <input type="number" name="" class="form-control GjeresiaKatersheNdarse-2"
                                placeholder="Gjeresi-2">

                        </div>
                        <div class="col-lg-3 col-md-3 col-4">
                            <input type="number" name="" class="form-control GjeresiaKatersheNdarse-3"
                                placeholder="Gjeresi-3">

                        </div>
                        <div class="col-lg-3 col-md-3 col-4 Gjatesia4 ">
                            <input type="number" name="" class="form-control GjeresiaKatersheNdarse-4 "
                                placeholder="Gjeresi-4">

                        </div>
                        <div class="col-lg-5 col-md-5 col-8 GjeresiaN4">
                            <input type="number" name="" class="form-control GjatesiaKatersheNdarse"
                                placeholder="Gjatesia">

                        </div>
                    </div>

                </form>

                <div class="row w-100">
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniShtyllaNN-41">Shtylla-1</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniShtyllaNN-42">Shtylla-2</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniShtyllaNN-43">Shtylla-3</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniAdapterNN-41 ">Adapteri-1</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniAdapterNN-42 ">Adapteri-2</button>

                    </div>
                    <div class="col-lg-2 col-md-2 col-4">
                        <button class="btn btn-primary ButoniAdapterNN-43 ">Adapteri-3</button>

                    </div>
                </div>




            </div>
            <div class="modal-footer">
                <a href="#RezultatetN4"><button class="btn btn-danger MbledhjaNN4">Mbledhi keto te dhena </button></a>
            </div>
        </div>
    </div>





    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>



    <!-- Driare-1 -->

    <div class="container" id="DeletedClass-1">

        <div class="col-lg-12 Rezultatet1 ">

            <h4 id="Rezultatet1">REZULTATET GJAT MBLEDHJES -1</h4>

            <a href="#Fillimi"><button class="btn btn-danger Fillimi1">Kthehu ne Fillim</button></a>

            <div id="scren1">

                <div class="row ">


                    <div class="col-lg-3 col-md-3 col-4 Image MarginPhoto">
                        <div class="vertikaleKrahu"></div>
                        <strong class="RezultatetVertikaleKrahu"></strong>
                        <div class="vertikaleKorniza"></div>
                        <strong class="RezultatetVertikaleKorniza"></strong>


                        <img src="" alt="Nuk esht shfaqur foto provo persesi" name='slider' class="h-100  ">

                    </div>

                </div>

                <div class="row">
                    <div class="col-lg-12 col-12 Marginhr">
                        <hr class="hr1-1">
                        <strong class="RezultatetKrahut"></strong>
                        <hr class="hr1-2">
                        <strong class="RezultateKornizes"></strong>
                    </div>

                </div>
                <hr>
                <div class="row">
                    <div class="col-lg-5 col-5">
                        <strong>Gjatesia[KORNIZES][V] : <strong class="GjatesiaKornizesV1"></strong></strong><br>
                        <strong>Gjatesia[KORNIZES][H] : <strong class="GjatesiaKornizesH1"></strong></strong>
                        <!-- <hr>
                        <strong class="Shtylla1">E PROFILI[T-SHTYLLA] : <strong class="T-shtylla1"></strong></strong><br>
                        <strong class="Adapterii1">E PROFILI[ADAPTER] : <strong class="Adapter1"></strong></strong> -->

                        <hr>
                        <strong>E PROFILI KATROR[KRAH][V] : <strong class="Krahu-V1"></strong></strong><br>
                        <strong>E PROFILI KATROR[KRAH][H] : <strong class="Krahu-H1"></strong></strong>
                        <hr>
                        <strong id="XhamiKrah">XHAMA : <strong class="XhamiH11"></strong>(H) X <strong
                                class="XhamiV11"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrah">XHAMA : <strong class="XhamiPaH11"></strong>(H) X <strong
                                class="XhamiPaV11"></strong>(V)</strong><br>



                    </div>
                    <div class="col-lg-2 col-2">
                        <strong class="copaKV">copa-2</strong><br>
                        <strong class="copaKH">copa-2</strong>
                        <!-- <hr>
                        <strong class="copSH1">copa-1</strong><br>
                        <strong class="copA1">copa-1</strong>
                         -->
                        <hr>
                        <strong class="copaPV">copa-<strong class="copaPv"></strong></strong><br>
                        <strong class="copaPH">copa-<strong class="copaPh"></strong></strong></strong><br>
                        <hr>
                        <strong class="copaXh">copa-1</strong><br>
                        <strong class="copaXhK">copa-1</strong>

                        <hr>
                    </div>
                    <div class="col-lg-5 col-5">
                        <strong>ARMATURA[V] : <strong class="ArmaturaKornizesV1"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKornizesH1"></strong></strong>
                        <!-- <hr>
                    <strong class="ShtyllaArmatura1">ARMATURA[SH][V] : <strong class="Armatura-Shtylla1"></strong></strong><br>
                    <strong class="AdapterArmatur1">ARMATURA[A][V] : <strong class="Armatura-Adapteri1"></strong></strong> -->

                        <hr>
                        <strong>ARMATURA[V] : <strong class="ArmaturaKrahuV1"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKrahuH1"></strong></strong>

                    </div>
                </div>
                <button id="button" class="btn btn-light"><i class="fas fa-print"></i></button>

            </div>

        </div>

    </div>


    <br>









    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>





    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"
        integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="http://cdn.jsdelivr.net/g/filesaver.js"></script>

    <script>
    $(document).ready(function() {
        $("#button").click(function() {

            domtoimage.toBlob(document.getElementById('scren1')).then(function(blob) {
                window.saveAs(blob, "FotografiTeDritares-Njeshe")


            })
        })
    })
    </script>







    <!-- Dritare-2 -->
    <div class="container" id="DeletedClass-2">
        <div class="col-lg-12 Rezultatet">

            <h4 id="Rezultatet">REZULTATET GJAT MBLEDHJES -2</h4>
            <a href="#Fillimi"><button class="btn btn-danger Fillimi">Kthehu ne Fillim</button></a>
            <div id="scren2">
                <div class="row ">

                    <div class="col-lg-3 col-md-3 col-4 Image2 Image">
                        <div class="vertikaleKrahu2"></div>
                        <strong class="RezultatetVertikaleKrahu2"></strong>
                        <div class="vertikaleKorniza2"></div>
                        <strong class="RezultatetVertikaleKorniza2"></strong>
                        <img src="" alt="Nuk esht shfaqur foto provo persesi" name='slider2'>
                    </div>

                </div>
                <div class="row">

                    <div class="col-lg-6 col-6">
                        <hr class="hr21-1">
                        <strong class="RezultatetKrahut1"></strong>
                    </div>
                    <div class="col-lg-6 col-6">
                        <hr class="hr22-1">
                        <strong class="RezultatetKrahut2"></strong>
                    </div>
                    <div class="col-lg-12 col-12">
                        <hr class="hr21-2">
                        <strong class="RezultatetKornizes2"></strong>
                    </div>

                </div>
                <hr>
                <div class="row ">
                    <div class="col-lg-5 col-5">
                        <strong>Gjatesia[KORNIZES][V] : <strong class="GjatesiaKornizesV"></strong></strong><br>
                        <strong>Gjatesia[KORNIZES][H] : <strong class="GjatesiaKornizesH"></strong></strong>
                        <hr>
                        <strong class="Shtylla">E PROFILI[T-SHTYLLA] : <strong class="T-shtylla"></strong></strong><br>
                        <strong class="Adapterii">E PROFILI[ADAPTER] : <strong class="Adapter"></strong></strong>

                        <hr>
                        <strong>E PROFILI KATROR[KRAH][V] : <strong class="Krahu-V"></strong></strong><br>
                        <strong>E PROFILI KATROR[KRAH][H] : <strong class="Krahu-H"></strong></strong>
                        <hr>
                        <strong id="XhamiKrah1">XHAMA-<strong class="XhK1"></strong> : <strong
                                class="XhamiH1"></strong>(H) X <strong class="XhamiV1"></strong>(V)</strong><br>
                        <strong id="XhamiKrah2">XHAMA-<strong class="XhK2"></strong> : <strong
                                class="XhamiH2"></strong>(H) X <strong class="XhamiV2"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrah11">XHAMA-<strong class="XhPK1"></strong> : <strong
                                class="XhamiH111"></strong>(H) X <strong class="XhamiV111"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrah22">XHAMA-<strong class="XhPK2"></strong> : <strong
                                class="XhamiH22"></strong>(H) X <strong class="XhamiV22"></strong>(V)</strong>



                    </div>
                    <div class="col-lg-2 col-2">
                        <strong>copa-2</strong><br>
                        <strong>copa-2</strong>
                        <hr>
                        <strong class="copSH">copa-1</strong><br>
                        <strong class="copA">copa-1</strong>

                        <hr>
                        <strong>copa-<strong class="copaKV-2"></strong></strong><br>
                        <strong>copa-<strong class="copaKH-2"></strong></strong></strong>
                        <hr>
                        <strong class="copaXhK1-2">copa-1</strong><br>
                        <strong class="copaXhK2-2">copa-1</strong><br>
                        <strong class="copaXhPaK1-2">copa-1</strong><br>
                        <strong class="copaXhPaK2-2">copa-1</strong><br>


                        <hr>
                    </div>
                    <div class="col-lg-5 col-5">
                        <strong>ARMATURA[V] : <strong class="ArmaturaKornizesV"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKornizesH"></strong></strong>
                        <hr>
                        <strong class="ShtyllaArmatura">ARMATURA[SH][V] : <strong
                                class="Armatura-Shtylla"></strong></strong><br>
                        <strong class="AdapterArmatur">ARMATURA[A][V] : <strong
                                class="Armatura-Adapteri"></strong></strong>

                        <hr>
                        <strong>ARMATURA[V] : <strong class="ArmaturaKrahuV"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKrahuH"></strong></strong>

                    </div>
                </div>
            </div>

            <button id="button2" class="btn btn-light"><i class="fas fa-print"></i></button>


        </div>

    </div>


    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>


    <!-- Dritare-2 e ndame ne dhenjen e gjeresis -->
    <div class="container" id="DeletedClass-2N">
        <div class="col-lg-12 RezultatetL">

            <h4 id="RezultatetGjatNdarjes">REZULTATET GJAT MBLEDHJES SE NDARJES SE GJERESIVE -2</h4>
            <a href="#Fillimi"><button class="btn btn-danger FillimiL">Kthehu ne Fillim</button></a>
            <div id="scren22">
                <div class="row ">

                    <div class="col-lg-3 col-md-3 col-4 Image2N Image">
                        <div class="vertikaleKrahuN2"></div>
                        <strong class="RezultatetVertikaleKrahuN2"></strong>
                        <div class="vertikaleKornizaN2"></div>
                        <strong class="RezultatetVertikaleKornizaN2"></strong>
                        <img src="" alt="Nuk esht shfaqur foto provo persesi" name='sliderNdares' class=" ">
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-6 col-6">
                        <hr class="hrN21-1">
                        <strong class="RezultatetKrahutA1"></strong>
                    </div>
                    <div class="col-lg-6 col-6">
                        <hr class="hrN22-1">
                        <strong class="RezultatetKrahutA2"></strong>
                    </div>
                    <div class="col-lg-12 col-12">
                        <hr class="hrN21-2">
                        <strong class="RezultatetKornizesA2"></strong>
                    </div>

                </div>




                <hr>
                <div class="row ">
                    <div class="col-lg-5 col-5">
                        <strong>Gjatesia[KORNIZES][V] : <strong class="GjatesiaKornizesLevizeseV"></strong></strong><br>
                        <strong>Gjatesia[KORNIZES][H] : <strong class="GjatesiaKornizesLevizeseH"></strong></strong>
                        <hr>
                        <strong class="ShtyllaLevizese">E PROFILI[T-SHTYLLA] : <strong
                                class="T-shtyllaLevizese"></strong></strong><br>
                        <strong class="AdapteriLevizes">E PROFILI[ADAPTER] : <strong
                                class="AdapterLevizese"></strong></strong>

                        <hr>
                        <strong>E PROFILI KATROR[KRAH][V] : <strong class="KrahuLevizese-V"></strong></strong><br>
                        <strong>E PROFILI KATROR[KRAH][H]-1 : <strong class="KrahuLevizese-H-1"></strong></strong><br>
                        <strong>E PROFILI KATROR[KRAH][H]-2 : <strong class="KrahuLevizese-H-2"></strong></strong>

                        <hr>

                        <strong id="XhamiKrahL1">XHAMA- <strong class="XhK11"></strong> : <strong
                                class="XhamiLevizeseH1"></strong>(H) X <strong
                                class="XhamiLevizeseV1"></strong>(V)</strong><br>
                        <strong id="XhamiKrahL2">XHAMA- <strong class="XhK22"></strong> : <strong
                                class="XhamiLevizeseH2"></strong>(H) X <strong
                                class="XhamiLevizeseV2"></strong>(V)</strong><br>

                        <strong id="XhamiPaKrahL11">XHAMA- <strong class="XhPK11"></strong> : <strong
                                class="XhamiLevizeseH111"></strong>(H) X <strong
                                class="XhamiLevizeseV111"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrahL22">XHAMA- <strong class="XhPK22"></strong> : <strong
                                class="XhamiLevizeseH22"></strong>(H) X <strong
                                class="XhamiLevizeseV22"></strong>(V)</strong>



                    </div>
                    <div class="col-lg-2 col-2">
                        <strong>copa-2</strong><br>
                        <strong>copa-2</strong>
                        <hr>
                        <strong class="copLSH">copa-1</strong><br>
                        <strong class="copLA">copa-1</strong>

                        <hr>
                        <strong>copa-<strong class="copaLKV-2"></strong></strong><br>
                        <strong>copa-<strong class="copaLK1H-2"></strong></strong></strong><br>
                        <strong>copa-<strong class="copaLK2H-2"></strong></strong></strong>

                        <hr>
                        <strong class="copaLXhK1-2">copa-1</strong><br>
                        <strong class="copaLXhK2-2">copa-1</strong><br>
                        <strong class="copaLXhPaK1-2">copa-1</strong><br>
                        <strong class="copaLXhPaK2-2">copa-1</strong><br>


                        <hr>
                    </div>
                    <div class="col-lg-5 col-5">
                        <strong>ARMATURA[V] : <strong class="ArmaturaKornizesLV"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKornizesLH"></strong></strong>
                        <hr>
                        <strong class="ShtyllaArmaturaL">ARMATURA[SH][V] : <strong
                                class="Armatura-ShtyllaL"></strong></strong><br>
                        <strong class="AdapterArmaturL">ARMATURA[A][V] : <strong
                                class="Armatura-AdapteriL"></strong></strong>

                        <hr>
                        <strong>ARMATURA[V] : <strong class="ArmaturaKrahuLV"></strong></strong><br>
                        <strong>ARMATURA[H]-1 : <strong class="ArmaturaKrahuLH1"></strong></strong><br>
                        <strong>ARMATURA[H]-2 : <strong class="ArmaturaKrahuLH2"></strong></strong>

                    </div>
                </div>
            </div>

            <button id="button22" class="btn btn-light"><i class="fas fa-print"></i></button>


        </div>

    </div>








    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"
        integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="http://cdn.jsdelivr.net/g/filesaver.js"></script>

    <!-- Driatre Ndarse -->
    <script>
    $(document).ready(function() {
        $("#button22").click(function() {

            domtoimage.toBlob(document.getElementById('scren22')).then(function(blob) {
                window.saveAs(blob, "FotoTeDritaresNdarese-Dyshese")
            })
        })
    })
    </script>
    <!-- Dritare -->
    <script>
    $(document).ready(function() {
        $("#button2").click(function() {

            domtoimage.toBlob(document.getElementById('scren2')).then(function(blob) {
                window.saveAs(blob, "FotoTeDritares-DysheseNdarse")
            })
        })
    })
    </script>







    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>


















    <!-- Dritare-3 -->
    <div class="container" id="DeletedClass-3">
        <div class="col-lg-12 Rezultatet-3">

            <h4 id="Rezultatet3">REZULTATET GJAT MBLEDHJES -3</h4>
            <a href="#Fillimi"><button class="btn btn-danger Fillimi3">Kthehu ne Fillim</button></a>
            <div id="scren3">

                <div class="row ">

                    <div class="col-lg-3 col-md-3 col-4 Image3  Image">
                        <div class="vertikaleKrahu3"></div>
                        <strong class="RezultatetVertikaleKrahu3"></strong>
                        <div class="vertikaleKorniza3"></div>
                        <strong class="RezultatetVertikaleKorniza3"></strong>
                        <img src="" alt="Nuk esht shfaqur foto provo persesi" name='slider3' class="fotoTreshe ">



                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-2 TreguesiVlerave3">
                        <hr class="hr21-3">
                        <strong class="RezultatetKrahut31"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-2">
                        <hr class="hr22-3">
                        <strong class="RezultatetKrahut32"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-2">
                        <hr class="hr23-3">
                        <strong class="RezultatetKrahut33"></strong>
                    </div>

                    <div class="col-lg-12 col-md-12 col-12">

                        <hr class="hr3">
                        <strong class="RezultatetKornizes3"></strong>
                    </div>


                </div>
                <hr>
                <div class="row ">
                    <div class="col-lg-5 col-5">
                        <strong>Gjatesia[KORNIZES][V] : <strong class="GjatesiaKornizesV-3"></strong></strong><br>
                        <strong>Gjatesia[KORNIZES][H] : <strong class="GjatesiaKornizesH-3"></strong></strong>
                        <hr>
                        <strong class="ShtyllaTreshe-1">E PROFILI[T-SHTYLLA]-1 : <strong
                                class="T-shtyllaTreshe-1"></strong></strong><br>
                        <strong class="ShtyllaTreshe-2">E PROFILI[T-SHTYLLA]-2 : <strong
                                class="T-shtyllaTreshe-2"></strong></strong><br>
                        <strong class="AdapteriTreshe-1">E PROFILI[ADAPTER]-1 : <strong
                                class="AdapterTreshe-1"></strong></strong><br>
                        <strong class="AdapteriTreshe-2">E PROFILI[ADAPTER]-2 : <strong
                                class="AdapterTreshe-2"></strong></strong>

                        <hr>
                        <strong class="KrahuTresheV-1">E PROFILI KATROR[KRAH][V] : <strong
                                class="Krahu3-V"></strong></strong><br>
                        <strong class="KrahuTresheH-1">E PROFILI KATROR[KRAH][H] : <strong
                                class="Krahu3-H"></strong></strong><br>
                        <strong class="KrahuTresheHAr-1">E PROFILI KATROR[KRAH][H] : <strong
                                class="Krahu3Ar-H"></strong></strong><br>
                        <strong class="KrahuTresheHA-1">E PROFILI KATROR[KRAH][H][A] : <strong
                                class="Krahu3A-H"></strong></strong><br>

                        <!-- <strong class="KrahuTresheH-2">E PROFILI KATROR[KRAH][H]-2 : <strong class="Krahu3-H2"></strong></strong><br>
            <strong class="KrahuTresheH-3">E PROFILI KATROR[KRAH][H]-3 : <strong class="Krahu3-H"></strong></strong> -->
                        <hr>
                        <strong id="XhamiKrah3-1">XHAMA- <strong class="XhK3-11"></strong> : <strong
                                class="XhamiK3-H1"></strong>(H) X <strong class="XhamiK3-V1"></strong>(V)</strong><br>
                        <strong id="XhamiKrah3-2">XHAMA- <strong class="XhK3-22"></strong> : <strong
                                class="XhamiK3-H2"></strong>(H) X <strong class="XhamiK3-V2"></strong>(V)</strong><br>
                        <strong id="XhamiKrah3-3">XHAMA- <strong class="XhK3-33"></strong> : <strong
                                class="XhamiK3-H3"></strong>(H) X <strong class="XhamiK3-V3"></strong>(V)</strong><br>

                        <strong id="XhamiPaKrah3-11">XHAMA- <strong class="XhPK3-11"></strong> : <strong
                                class="XhamiK3-H111"></strong>(H) X <strong
                                class="XhamiK3-V111"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrah3-22">XHAMA- <strong class="XhPK3-22"></strong> : <strong
                                class="XhamiK3-H222"></strong>(H) X <strong
                                class="XhamiK3-V222"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrah3-33">XHAMA- <strong class="XhPK3-33"></strong> : <strong
                                class="XhamiK3-H333"></strong>(H) X <strong class="XhamiK3-V333"></strong>(V)</strong>



                    </div>
                    <div class="col-lg-2 col-2">
                        <strong>copa-2</strong><br>
                        <strong>copa-2</strong>
                        <hr>
                        <strong class="copSH-1">copa-1</strong><br>
                        <strong class="copSH-2">copa-1</strong><br>
                        <strong class="copA-1">copa-1</strong><br>
                        <strong class="copA-2">copa-1</strong>


                        <hr>
                        <strong>copa-<strong class="copaKV-3"></strong></strong><br>
                        <strong class="copaKh">copa-<strong class="copaKH-3"></strong></strong><br>
                        <strong class="KcopaAr-3">copa-<strong class="copaKHAr-3"></strong></strong><br>
                        <strong class="KcopaA-3">copa-<strong class="copaKHA-3"></strong></strong><br>




                        <hr>
                        <strong class="copaXhK1-3">copa-1</strong><br>
                        <strong class="copaXhK2-3">copa-1</strong><br>
                        <strong class="copaXhK3-3">copa-1</strong><br>
                        <strong class="copaXhPaK1-3">copa-1</strong><br>
                        <strong class="copaXhPaK2-3">copa-1</strong><br>
                        <strong class="copaXhPaK3-3">copa-1</strong>


                        <hr>
                    </div>
                    <div class="col-lg-5 col-5">

                        <strong>ARMATURA[V] : <strong class="ArmaturaKornizesV-3"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKornizesH-3"></strong></strong>

                        <hr>
                        <strong class="ShtyllaArmatura-1">ARMATURA[SH][V]-1 : <strong
                                class="Armatura-Shtylla-1"></strong></strong><br>
                        <strong class="ShtyllaArmatura-2">ARMATURA[SH][V]-2 : <strong
                                class="Armatura-Shtylla-2"></strong></strong><br>
                        <strong class="AdapterArmatur-1">ARMATURA[A][V]-1 : <strong
                                class="Armatura-Adapteri-1"></strong></strong><br>
                        <strong class="AdapterArmatur-2">ARMATURA[A][V]-2 : <strong
                                class="Armatura-Adapteri-2"></strong></strong>

                        <hr>
                        <strong>ARMATURA[V] : <strong class="ArmaturaKrahuV-3"></strong></strong><br>
                        <strong class="Armatura">ARMATURA[H] : <strong class="ArmaturaKrahuH-3"></strong></strong><br>
                        <strong class="ArmaturaR">ARMATURA[H] : <strong
                                class="ArmaturaKrahuHAR-3"></strong></strong><br>
                        <strong class="ArmaturaH">ARMATURA[H][A] : <strong
                                class="ArmaturaKrahuHA-3"></strong></strong><br>


                    </div>
                </div>

            </div>
            <button id="buttonTreshe" class="btn btn-light"><i class="fas fa-print"></i></button>

        </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"
        integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="http://cdn.jsdelivr.net/g/filesaver.js"></script>

    <script>
    $(document).ready(function() {
        $("#buttonTreshe").click(function() {

            domtoimage.toBlob(document.getElementById('scren3')).then(function(blob) {
                window.saveAs(blob, "FotografiTeDritares-Treshe")
            })
        })
    })
    </script>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>




    <!-- Dritare Treshe Ndarse -->


    <div class="container" id="DeletedClass-3N">
        <div class="col-lg-12 RezultatetN-3">

            <h4 id="RezultatetNdarse3">REZULTATET GJAT MBLEDHJES SE NDARJES SE GJERESIVE -3</h4>
            <a href="#Fillimi"><button class="btn btn-danger FillimiN3">Kthehu ne Fillim</button></a>
            <div id="screnN3">
                <div class="row ">

                    <div class="col-lg-3 col-md-3 col-4 Image3N  Image ">
                        <div class="vertikaleKrahuN3"></div>
                        <strong class="RezultatetVertikaleKrahuN3"></strong>
                        <div class="vertikaleKornizaN3"></div>
                        <strong class="RezultatetVertikaleKornizaN3"></strong>
                        <img src="" alt="Nuk esht shfaqur foto provo persesi" name='sliderN3' class="">
                    </div>
                </div>


                <div class="row">

                    <div class="col-lg-1 col-md-1 col-2 TreguesiVleraveN3">
                        <hr class="hrN21-3">
                        <strong class="RezultatetKrahutN31"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-2">
                        <hr class="hrN22-3">
                        <strong class="RezultatetKrahutN32"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-2">
                        <hr class="hrN23-3">
                        <strong class="RezultatetKrahutN33"></strong>
                    </div>


                    <div class="col-lg-12 col-12">
                        <hr class="hrN3">
                        <strong class="RezultatetKornizesN3"></strong>
                    </div>

                </div>



                <hr>
                <div class="row ">
                    <div class="col-lg-5 col-5">
                        <strong>Gjatesia[KORNIZES][V] : <strong class="GjatesiaKornizesNV-3"></strong></strong><br>
                        <strong>Gjatesia[KORNIZES][H] : <strong class="GjatesiaKornizesNH-3"></strong></strong>
                        <hr>
                        <strong class="ShtyllaTresheN-1">E PROFILI[T-SHTYLLA]-1 : <strong
                                class="T-shtyllaTresheN-1"></strong></strong><br>
                        <strong class="ShtyllaTresheN-2">E PROFILI[T-SHTYLLA]-2 : <strong
                                class="T-shtyllaTresheN-2"></strong></strong><br>
                        <strong class="AdapteriTresheN-1">E PROFILI[ADAPTER]-1 : <strong
                                class="AdapterTresheN-1"></strong></strong><br>
                        <strong class="AdapteriTresheN-2">E PROFILI[ADAPTER]-2 : <strong
                                class="AdapterTresheN-2"></strong></strong>

                        <hr>
                        <strong class="KrahuTresheNV-1">E PROFILI KATROR[KRAH][V] : <strong
                                class="KrahuN3-V"></strong></strong><br>
                        <strong class="KrahuTresheNH-1">E PROFILI KATROR[KRAH][H]-1 : <strong
                                class="KrahuN1-H"></strong></strong><br>
                        <strong class="KrahuTresheNH-2">E PROFILI KATROR[KRAH][H]-2 : <strong
                                class="KrahuN2-H"></strong></strong><br>
                        <strong class="KrahuTresheNH-3">E PROFILI KATROR[KRAH][H]-3 : <strong
                                class="KrahuN3-H"></strong></strong><br>

                        <!-- <strong class="KrahuTresheH-2">E PROFILI KATROR[KRAH][H]-2 : <strong class="Krahu3-H2"></strong></strong><br>
                <strong class="KrahuTresheH-3">E PROFILI KATROR[KRAH][H]-3 : <strong class="Krahu3-H"></strong></strong> -->
                        <hr>
                        <strong id="XhamiKrahN3-1">XHAMA- <strong class="XhKN3-11"></strong> : <strong
                                class="XhamiKN3-H1"></strong>(H) X <strong class="XhamiKN3-V1"></strong>(V)</strong><br>
                        <strong id="XhamiKrahN3-2">XHAMA- <strong class="XhKN3-22"></strong> : <strong
                                class="XhamiKN3-H2"></strong>(H) X <strong class="XhamiKN3-V2"></strong>(V)</strong><br>
                        <strong id="XhamiKrahN3-3">XHAMA- <strong class="XhKN3-33"></strong> : <strong
                                class="XhamiKN3-H3"></strong>(H) X <strong class="XhamiKN3-V3"></strong>(V)</strong><br>

                        <strong id="XhamiPaKrahN3-11">XHAMA- <strong class="XhPKN3-11"></strong> : <strong
                                class="XhamiKN3-H111"></strong>(H) X <strong
                                class="XhamiKN3-V111"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrahN3-22">XHAMA- <strong class="XhPKN3-22"></strong> : <strong
                                class="XhamiKN3-H222"></strong>(H) X <strong
                                class="XhamiKN3-V222"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrahN3-33">XHAMA- <strong class="XhPKN3-33"></strong> : <strong
                                class="XhamiKN3-H333"></strong>(H) X <strong class="XhamiKN3-V333"></strong>(V)</strong>



                    </div>
                    <div class="col-lg-2 col-2">
                        <strong>copa-2</strong><br>
                        <strong>copa-2</strong>
                        <hr>
                        <strong class="copNSH-1">copa-1</strong><br>
                        <strong class="copNSH-2">copa-1</strong><br>
                        <strong class="copNA-1">copa-1</strong><br>
                        <strong class="copNA-2">copa-1</strong>


                        <hr>
                        <strong>copa-<strong class="copaNKV-3"></strong></strong><br>
                        <strong>copa-<strong class="copaNKH1-3"></strong></strong></strong><br>
                        <strong>copa-<strong class="copaNKH2-3"></strong></strong><br>
                        <strong>copa-<strong class="copaNKH3-3"></strong></strong></strong><br>



                        <hr>
                        <strong class="copaXhKN1-3">copa-1</strong><br>
                        <strong class="copaXhKN2-3">copa-1</strong><br>
                        <strong class="copaXhKN3-3">copa-1</strong><br>
                        <strong class="copaXhPaKN1-3">copa-1</strong><br>
                        <strong class="copaXhPaKN2-3">copa-1</strong><br>
                        <strong class="copaXhPaKN3-3">copa-1</strong>


                        <hr>
                    </div>
                    <div class="col-lg-5 col-5">

                        <strong>ARMATURA[V] : <strong class="ArmaturaKornizesNV-3"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKornizesNH-3"></strong></strong>
                        <hr>
                        <strong class="ShtyllaArmaturaN-1">ARMATURA[SH][V]-1 : <strong
                                class="Armatura-ShtyllaN-1"></strong></strong><br>
                        <strong class="ShtyllaArmaturaN-2">ARMATURA[SH][V]-2 : <strong
                                class="Armatura-ShtyllaN-2"></strong></strong><br>
                        <strong class="AdapterArmaturN-1">ARMATURA[A][V]-1 : <strong
                                class="Armatura-AdapteriN-1"></strong></strong><br>
                        <strong class="AdapterArmaturN-2">ARMATURA[A][V]-2 : <strong
                                class="Armatura-AdapteriN-2"></strong></strong>

                        <hr>
                        <strong>ARMATURA[V] : <strong class="ArmaturaKrahuNV-3"></strong></strong><br>
                        <strong>ARMATURA[H]-1 : <strong class="ArmaturaKrahuNH1-3"></strong></strong><br>
                        <strong>ARMATURA[H]-2 : <strong class="ArmaturaKrahuNH2-3"></strong></strong><br>
                        <strong>ARMATURA[H]-3 : <strong class="ArmaturaKrahuNH3-3"></strong></strong><br>
                    </div>
                </div>

            </div>
            <button id="buttonTresheN" class="btn btn-light"><i class="fas fa-print"></i></button>

        </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"
        integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="http://cdn.jsdelivr.net/g/filesaver.js"></script>

    <script>
    $(document).ready(function() {
        $("#buttonTresheN").click(function() {

            domtoimage.toBlob(document.getElementById('screnN3')).then(function(blob) {
                window.saveAs(blob, "FotografiTeDritares-TresheNdarse")
            })
        })
    })
    </script>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>






    <!-- Dritare Katershe -->
    <div class="container" id="DeletedClass-4">
        <div class="col-lg-12 Rezultatet-4">

            <h4 id="Rezultatet4">REZULTATET GJAT MBLEDHJES -4</h4>
            <a href="#Fillimi"><button class="btn btn-danger Fillimi4">Kthehu ne Fillim</button></a>
            <div id="scren4">
                <div class="row ">




                    <div class="col-lg-3 col-md-3 col-4 Image4 Image ">
                        <div class="vertikaleKrahu4"></div>
                        <strong class="RezultatetVertikaleKrahu4"></strong>
                        <div class="vertikaleKorniza4"></div>
                        <strong class="RezultatetVertikaleKorniza4"></strong>
                        <img src="" alt="Nuk esht shfaqur foto provo persesi" name='slider4' class="">
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-1 col-md-1 col-sm-2 col-2 TreguesiVlerave4">
                        <hr class="hr11-4">
                        <strong class="RezultatetKrahut41"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-2 col-2">
                        <hr class="hr12-4">
                        <strong class="RezultatetKrahut42"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm-2 col-2">
                        <hr class="hr13-4">
                        <strong class="RezultatetKrahut43"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-sm col-2">
                        <hr class="hr14-4">
                        <strong class="RezultatetKrahut44"></strong>
                    </div>

                    <div class="col-lg-12 col-12">
                        <hr class="hr4">
                        <strong class="RezultatetKornizes4"></strong>
                    </div>

                </div>



                <hr>
                <div class="row ">
                    <div class="col-lg-5 col-5">
                        <strong>Gjatesia[KORNIZES][V] : <strong class="GjatesiaKornizesNV-4"></strong></strong><br>
                        <strong>Gjatesia[KORNIZES][H] : <strong class="GjatesiaKornizesNH-4"></strong></strong>
                        <hr>
                        <strong class="ShtyllaKatershe-1">E PROFILI[T-SHTYLLA]-1 : <strong
                                class="T-shtyllaKatershe-1"></strong></strong><br>
                        <strong class="ShtyllaKatershe-2">E PROFILI[T-SHTYLLA]-2 : <strong
                                class="T-shtyllaKatershe-2"></strong></strong><br>
                        <strong class="ShtyllaKatershe-3">E PROFILI[T-SHTYLLA]-3 : <strong
                                class="T-shtyllaKatershe-3"></strong></strong><br>

                        <strong class="AdapteriKatershe-1">E PROFILI[ADAPTER]-1 : <strong
                                class="AdapterKatershe-1"></strong></strong><br>
                        <strong class="AdapteriKatershe-2">E PROFILI[ADAPTER]-2 : <strong
                                class="AdapterKatershe-2"></strong></strong><br>
                        <strong class="AdapteriKatershe-3">E PROFILI[ADAPTER]-3 : <strong
                                class="AdapterKatershe-3"></strong></strong>


                        <hr>
                        <strong class="KrahuKatershV-1">E PROFILI KATROR[KRAH][V] : <strong
                                class="Krahu4-V"></strong></strong><br>
                        <strong class="KrahuKatershH-1">E PROFILI KATROR[KRAH][H] : <strong class="Krahu4-H"></strong>
                            <!-- <strong class="KornizaH">(+10)</strong> -->
                        </strong><br>
                        <strong class="KrahuKatershHAR-1">E PROFILI KATROR[KRAH][H] : <strong
                                class="Krahu4AR-H"></strong></strong><br>
                        <strong class="KrahuKatershHA-1">E PROFILI KATROR[KRAH][H][A] : <strong
                                class="Krahu4A-H"></strong></strong><br>






                        <!-- <strong class="KrahuKatershH-2">E PROFILI KATROR[KRAH][H]-2 : <strong class="Krahu42-H"></strong></strong><br>
                <strong class="KrahuKatershH-3">E PROFILI KATROR[KRAH][H]-3 : <strong class="Krahu43-H"></strong></strong><br>
                <strong class="KrahuKatershH-4">E PROFILI KATROR[KRAH][H]-4 : <strong class="Krahu44-H"></strong></strong><br> -->


                        <!-- <strong class="KrahuTresheH-2">E PROFILI KATROR[KRAH][H]-2 : <strong class="Krahu3-H2"></strong></strong><br>
                <strong class="KrahuTresheH-3">E PROFILI KATROR[KRAH][H]-3 : <strong class="Krahu3-H"></strong></strong> -->
                        <hr>
                        <strong id="XhamiKrah4-1">XHAMA- <strong class="XhK4-11"></strong> : <strong
                                class="XhamiK4-H1"></strong>(H) X <strong class="XhamiK4-V1"></strong>(V)</strong><br>
                        <strong id="XhamiKrah4-2">XHAMA- <strong class="XhK4-22"></strong> : <strong
                                class="XhamiK4-H2"></strong>(H) X <strong class="XhamiK4-V2"></strong>(V)</strong><br>
                        <strong id="XhamiKrah4-3">XHAMA- <strong class="XhK4-33"></strong> : <strong
                                class="XhamiK4-H3"></strong>(H) X <strong class="XhamiK4-V3"></strong>(V)</strong><br>
                        <strong id="XhamiKrah4-4">XHAMA- <strong class="XhK4-44"></strong> : <strong
                                class="XhamiK4-H4"></strong>(H) X <strong class="XhamiK4-V4"></strong>(V)</strong><br>


                        <strong id="XhamiPaKrah4-11">XHAMA- <strong class="XhPK4-11"></strong> : <strong
                                class="XhamiK4-H11"></strong>(H) X <strong class="XhamiK4-V11"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrah4-22">XHAMA- <strong class="XhPK4-22"></strong> : <strong
                                class="XhamiK4-H22"></strong>(H) X <strong class="XhamiK4-V22"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrah4-33">XHAMA- <strong class="XhPK4-33"></strong> : <strong
                                class="XhamiK4-H33"></strong>(H) X <strong class="XhamiK4-V33"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrah4-44">XHAMA- <strong class="XhPK4-44"></strong> : <strong
                                class="XhamiK4-H44"></strong>(H) X <strong class="XhamiK4-V44"></strong>(V)</strong>



                    </div>
                    <div class="col-lg-2 col-2">
                        <strong>copa-2</strong><br>
                        <strong>copa-2</strong>
                        <hr>
                        <strong class="copNSH-41">copa-1</strong><br>
                        <strong class="copNSH-42">copa-1</strong><br>
                        <strong class="copNSH-43">copa-1</strong><br>

                        <strong class="copNA-41">copa-1</strong><br>
                        <strong class="copNA-42">copa-1</strong><br>
                        <strong class="copNA-43">copa-1</strong>



                        <hr>
                        <strong>copa-<strong class="copaKV-4"></strong></strong><br>

                        <strong class="copa4">copa-<strong class="copaKH-4"></strong></strong><br>
                        <strong class="copa4-1">copa-<strong class="copaKHAR-4"></strong></strong><br>
                        <strong class="copa4-2">copa-<strong class="copaKHA-4"></strong></strong><br>


                        <!-- <strong>copa-<strong class="copaKH2-4"></strong></strong><br>
                <strong>copa-<strong class="copaKH3-4"></strong></strong></strong><br>
                <strong>copa-<strong class="copaKH4-4"></strong></strong></strong> -->




                        <hr>
                        <strong class="copaXhKN1-4">copa-1</strong><br>
                        <strong class="copaXhKN2-4">copa-1</strong><br>
                        <strong class="copaXhKN3-4">copa-1</strong><br>
                        <strong class="copaXhKN4-4">copa-1</strong><br>

                        <strong class="copaXhPaKN1-4">copa-1</strong><br>
                        <strong class="copaXhPaKN2-4">copa-1</strong><br>
                        <strong class="copaXhPaKN3-4">copa-1</strong><br>
                        <strong class="copaXhPaKN4-4">copa-1</strong>



                        <hr>
                    </div>
                    <div class="col-lg-5 col-5">

                        <strong>ARMATURA[V] : <strong class="ArmaturaKornizesNV-4"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKornizesNH-4"></strong></strong>
                        <hr>
                        <strong class="ShtyllaArmaturaN-41">ARMATURA[SH][V]-1 : <strong
                                class="Armatura-ShtyllaN-41"></strong></strong><br>
                        <strong class="ShtyllaArmaturaN-42">ARMATURA[SH][V]-2 : <strong
                                class="Armatura-ShtyllaN-42"></strong></strong><br>
                        <strong class="ShtyllaArmaturaN-43">ARMATURA[SH][V]-3 : <strong
                                class="Armatura-ShtyllaN-43"></strong></strong><br>

                        <strong class="AdapterArmaturN-41">ARMATURA[A][V]-1 : <strong
                                class="Armatura-AdapteriN-41"></strong></strong><br>
                        <strong class="AdapterArmaturN-42">ARMATURA[A][V]-2 : <strong
                                class="Armatura-AdapteriN-42"></strong></strong><br>
                        <strong class="AdapterArmaturN-43">ARMATURA[A][V]-3 : <strong
                                class="Armatura-AdapteriN-43"></strong></strong>


                        <hr>
                        <strong>ARMATURA[V] : <strong class="ArmaturaKrahuNV-4"></strong></strong><br>
                        <strong class="Armatura4">ARMATURA[H] : <strong class="ArmaturaKrahuNH-4"></strong></strong><br>
                        <strong class="Armatura4Ar">ARMATURA[H] : <strong
                                class="ArmaturaKrahuNHAR-4"></strong></strong><br>
                        <strong class="Armatura4A">ARMATURA[H][A] : <strong
                                class="ArmaturaKrahuNHA-4"></strong></strong><br>

                        <!-- <strong>ARMATURA[H]-2 : <strong class="ArmaturaKrahuNH2-4"></strong></strong><br>
            <strong>ARMATURA[H]-3 : <strong class="ArmaturaKrahuNH3-4"></strong></strong><br>
            <strong>ARMATURA[H]-4 : <strong class="ArmaturaKrahuNH4-4"></strong></strong><br> -->

                    </div>
                </div>

            </div>
            <button id="buttonKatershe" class="btn btn-light"><i class="fas fa-print"></i></button>

        </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"
        integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="http://cdn.jsdelivr.net/g/filesaver.js"></script>

    <script>
    $(document).ready(function() {
        $("#buttonKatershe").click(function() {

            domtoimage.toBlob(document.getElementById('scren4')).then(function(blob) {
                window.saveAs(blob, "FotografiTeDritares-Katershe")
            })
        })
    })
    </script>

    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br>





    <!-- Dritare Katershe Ndarese -->
    <div class="container" id="DeletedClass-4N">
        <div class="col-lg-12 RezultatetN-4">

            <h4 id="RezultatetN4">REZULTATET GJAT MBLEDHJES SE NDARJES SE GJERESIVE -4</h4>
            <a href="#Fillimi"><button class="btn btn-danger FillimiN4">Kthehu ne Fillim</button></a>
            <div id="screnN4">
                <div class="row ">


                    <div class="col-lg-3 col-md-3 col-4 Image4N Image ">
                        <div class="vertikaleKrahu4N"></div>
                        <strong class="RezultatetVertikaleKrahu4N"></strong>
                        <div class="vertikaleKorniza4N"></div>
                        <strong class="RezultatetVertikaleKorniza4N"></strong>
                        <img src="" alt="Nuk esht shfaqur foto provo persesi" name='sliderNN4' class="">
                    </div>
                </div>

                <div class="row">

                    <div class="col-lg-1 col-md-1 col-2 TreguesiVleraveN4">
                        <hr class="hrN11-4">
                        <strong class="RezultatetKrahutN41"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-2">
                        <hr class="hrN12-4">
                        <strong class="RezultatetKrahutN42"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-2">
                        <hr class="hrN13-4">
                        <strong class="RezultatetKrahutN43"></strong>
                    </div>
                    <div class="col-lg-1 col-md-1 col-2">
                        <hr class="hrN14-4">
                        <strong class="RezultatetKrahutN44"></strong>
                    </div>


                    <div class="col-lg-12 col-12">
                        <hr class="hrN4">
                        <strong class="RezultatetKornizesN4"></strong>
                    </div>

                </div>


                <hr>
                <div class="row ">
                    <div class="col-lg-5 col-5">
                        <strong>Gjatesia[KORNIZES][V] : <strong class="GjatesiaKornizesNNV-4"></strong></strong><br>
                        <strong>Gjatesia[KORNIZES][H] : <strong class="GjatesiaKornizesNNH-4"></strong></strong><br>

                        <hr>
                        <strong class="ShtyllaKatersheN-1">E PROFILI[T-SHTYLLA]-1 : <strong
                                class="T-shtyllaKatersheNN-1"></strong></strong><br>
                        <strong class="ShtyllaKatersheN-2">E PROFILI[T-SHTYLLA]-2 : <strong
                                class="T-shtyllaKatersheNN-2"></strong></strong><br>
                        <strong class="ShtyllaKatersheN-3">E PROFILI[T-SHTYLLA]-3 : <strong
                                class="T-shtyllaKatersheNN-3"></strong></strong><br>

                        <strong class="AdapteriKatersheN-1">E PROFILI[ADAPTER]-1 : <strong
                                class="AdapterKatersheNN-1"></strong></strong><br>
                        <strong class="AdapteriKatersheN-2">E PROFILI[ADAPTER]-2 : <strong
                                class="AdapterKatersheNN-2"></strong></strong><br>
                        <strong class="AdapteriKatersheN-3">E PROFILI[ADAPTER]-3 : <strong
                                class="AdapterKatersheNN-3"></strong></strong><br>


                        <hr>
                        <strong class="KrahuKatershV-1">E PROFILI KATROR[KRAH][V] : <strong
                                class="KrahuN4-V"></strong></strong><br>
                        <strong class="KrahuKatershH-1">E PROFILI KATROR[KRAH][H]-1 : <strong
                                class="KrahuN41-H"></strong></strong><br>
                        <strong class="KrahuKatershH-2">E PROFILI KATROR[KRAH][H]-2 : <strong
                                class="KrahuN42-H"></strong></strong><br>
                        <strong class="KrahuKatershH-3">E PROFILI KATROR[KRAH][H]-3 : <strong
                                class="KrahuN43-H"></strong></strong><br>
                        <strong class="KrahuKatershH-4">E PROFILI KATROR[KRAH][H]-4 : <strong
                                class="KrahuN44-H"></strong></strong><br>


                        <!-- <strong class="KrahuTresheH-2">E PROFILI KATROR[KRAH][H]-2 : <strong class="Krahu3-H2"></strong></strong><br>
                <strong class="KrahuTresheH-3">E PROFILI KATROR[KRAH][H]-3 : <strong class="Krahu3-H"></strong></strong> -->
                        <hr>
                        <strong id="XhamiKrahN4-1">XHAMA- <strong class="XhKNN4-11"></strong> : <strong
                                class="XhamiNNK4-H1"></strong>(H) X <strong
                                class="XhamiNNK4-V1"></strong>(V)</strong><br>
                        <strong id="XhamiKrahN4-2">XHAMA- <strong class="XhKNN4-22"></strong> : <strong
                                class="XhamiNNK4-H2"></strong>(H) X <strong
                                class="XhamiNNK4-V2"></strong>(V)</strong><br>
                        <strong id="XhamiKrahN4-3">XHAMA- <strong class="XhKNN4-33"></strong> : <strong
                                class="XhamiNNK4-H3"></strong>(H) X <strong
                                class="XhamiNNK4-V3"></strong>(V)</strong><br>
                        <strong id="XhamiKrahN4-4">XHAMA- <strong class="XhKNN4-44"></strong> : <strong
                                class="XhamiNNK4-H4"></strong>(H) X <strong
                                class="XhamiNNK4-V4"></strong>(V)</strong><br>


                        <strong id="XhamiPaKrahN4-11">XHAMA- <strong class="XhPKNN4-11"></strong> : <strong
                                class="XhamiNNK4-H11"></strong>(H) X <strong
                                class="XhamiNNK4-V11"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrahN4-22">XHAMA- <strong class="XhPKNN4-22"></strong> : <strong
                                class="XhamiNNK4-H22"></strong>(H) X <strong
                                class="XhamiNNK4-V22"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrahN4-33">XHAMA- <strong class="XhPKNN4-33"></strong> : <strong
                                class="XhamiNNK4-H33"></strong>(H) X <strong
                                class="XhamiNNK4-V33"></strong>(V)</strong><br>
                        <strong id="XhamiPaKrahN4-44">XHAMA- <strong class="XhPKNN4-44"></strong> : <strong
                                class="XhamiNNK4-H44"></strong>(H) X <strong class="XhamiNNK4-V44"></strong>(V)</strong>



                    </div>
                    <div class="col-lg-2 col-2">
                        <strong>copa-2</strong><br>
                        <strong>copa-2</strong>
                        <hr>
                        <strong class="copNNSH-41">copa-1</strong><br>
                        <strong class="copNNSH-42">copa-1</strong><br>
                        <strong class="copNNSH-43">copa-1</strong><br>


                        <strong class="copNNA-41">copa-1</strong><br>
                        <strong class="copNNA-42">copa-1</strong><br>
                        <strong class="copNNA-43">copa-1</strong><br>




                        <hr>
                        <strong>copa-<strong class="copaNKV-4"></strong></strong><br>
                        <strong>copa-<strong class="copaNKH1-4"></strong></strong></strong><br>
                        <strong>copa-<strong class="copaNKH2-4"></strong></strong></strong><br>
                        <strong>copa-<strong class="copaNKH3-4"></strong></strong></strong><br>
                        <strong>copa-<strong class="copaNKH4-4"></strong></strong></strong><br>


                        <!-- <strong>copa-<strong class="copaKH2-4"></strong></strong><br>
                <strong>copa-<strong class="copaKH3-4"></strong></strong></strong><br>
                <strong>copa-<strong class="copaKH4-4"></strong></strong></strong> -->




                        <hr>
                        <strong class="copaXhKNN1-4">copa-1</strong><br>
                        <strong class="copaXhKNN2-4">copa-1</strong><br>
                        <strong class="copaXhKNN3-4">copa-1</strong><br>
                        <strong class="copaXhKNN4-4">copa-1</strong><br>

                        <strong class="copaXhPaKNN1-4">copa-1</strong><br>
                        <strong class="copaXhPaKNN2-4">copa-1</strong><br>
                        <strong class="copaXhPaKNN3-4">copa-1</strong><br>
                        <strong class="copaXhPaKNN4-4">copa-1</strong>



                        <hr>
                    </div>
                    <div class="col-lg-5 col-5">

                        <strong>ARMATURA[V] : <strong class="ArmaturaKornizesNNV-4"></strong></strong><br>
                        <strong>ARMATURA[H] : <strong class="ArmaturaKornizesNNH-4"></strong></strong>
                        <hr>
                        <strong class="ShtyllaArmaturaNN-41">ARMATURA[SH][V]-1 : <strong
                                class="Armatura-ShtyllaNN-41"></strong></strong><br>
                        <strong class="ShtyllaArmaturaNN-42">ARMATURA[SH][V]-2 : <strong
                                class="Armatura-ShtyllaNN-42"></strong></strong><br>
                        <strong class="ShtyllaArmaturaNN-43">ARMATURA[SH][V]-3 : <strong
                                class="Armatura-ShtyllaNN-43"></strong></strong><br>

                        <strong class="AdapterArmaturNN-41">ARMATURA[A][V]-1 : <strong
                                class="Armatura-AdapteriNN-41"></strong></strong><br>
                        <strong class="AdapterArmaturNN-42">ARMATURA[A][V]-2 : <strong
                                class="Armatura-AdapteriNN-42"></strong></strong><br>
                        <strong class="AdapterArmaturNN-43">ARMATURA[A][V]-3 : <strong
                                class="Armatura-AdapteriNN-43"></strong></strong><br>


                        <hr>
                        <strong>ARMATURA[V] : <strong class="ArmaturaKrahuNNV-4"></strong></strong><br>
                        <strong>ARMATURA[H]-1 : <strong class="ArmaturaKrahuNNH-1"></strong></strong><br>
                        <strong>ARMATURA[H]-2 : <strong class="ArmaturaKrahuNNH-2"></strong></strong><br>
                        <strong>ARMATURA[H]-3 : <strong class="ArmaturaKrahuNNH-3"></strong></strong><br>
                        <strong>ARMATURA[H]-4 : <strong class="ArmaturaKrahuNNH-4"></strong></strong><br>

                        <!-- <strong>ARMATURA[H]-2 : <strong class="ArmaturaKrahuNH2-4"></strong></strong><br>
            <strong>ARMATURA[H]-3 : <strong class="ArmaturaKrahuNH3-4"></strong></strong><br>
            <strong>ARMATURA[H]-4 : <strong class="ArmaturaKrahuNH4-4"></strong></strong><br> -->

                    </div>
                </div>

            </div>
            <button id="buttonKatersheNdarse" class="btn btn-light"><i class="fas fa-print"></i></button>

        </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"
        integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="http://cdn.jsdelivr.net/g/filesaver.js"></script>

    <script>
    $(document).ready(function() {
        $("#buttonKatersheNdarse").click(function() {

            domtoimage.toBlob(document.getElementById('screnN4')).then(function(blob) {
                window.saveAs(blob, "FotografiTeDritares-KatersheNdarse")
            })
        })
    })
    </script>



   
    <div class="Dhenja-Vlerave" id="Dhenja-Vlerave">



    <!-- Dritare 1 jo ndarese-->
        <a href="#Fillimi" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
            </button></a>
        <h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 1 jo ndarese</h2>
        <hr>
        <form action="" method='POST'>
            <div class="row">
                <div class="col-lg-3 col-6">
                    <strong>Vlera per Kornizen[V]</strong>
                    <input type="text" name="fname1" class=" form-control  " >
                </div>
                <div class=" col-lg-3 col-6">
                    <strong>Vlera per Kornizen[H]</strong>

                    <input type="text" name="fname2" class="form-control " >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera e armatures per Kornizen[V] </strong>

                    <input type="text" name="fname3" class="form-control" >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera e armatures per Kornizen[H]</strong>

                    <input type="text" name="fname4" class="form-control" >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera e krahut[V]</strong>

                    <input type="text" name="fname5" class="form-control" >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera e krahut[H]</strong>

                    <input type="text" name="fname6" class="form-control" >
                </div>

                <div class="col-lg-3 col-6">
                    <strong>Vlera e armatures per krah[V]</strong>

                    <input type="text" name="fname7" class="form-control" >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera e armatures per krah[H]</strong>

                    <input type="text" name="fname8" class="form-control" >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera per xhama te krahut[V] </strong>

                    <input type="text" name="fname9" class="form-control" >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera per xhama te krahut[H]</strong>

                    <input type="text" name="fname10" class="form-control" >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera per xhama statik[V]</strong>

                    <input type="text" name="fname11" class="form-control" >
                </div>
                <div class="col-lg-3 col-6">
                    <strong>Vlera per xhama statik[H]</strong>

                    <input type="text" name="fname12" class="form-control" >
                                        
                                     
                </div>
                <!-- <div class="col-lg-3">
                    <strong>Vlera per Shtyll</strong>

                    <input type="text" name="fname13" class="form-control" >
                                        
                                     
                </div>
                <div class="col-lg-3">
                    <strong>Vlera per Adapter</strong>

                    <input type="text" name="fname14" class="form-control" >
                                        
                                     
                </div>
                <div class="col-lg-3">
                    <strong>Vlera per Armatur Shtylla</strong>

                    <input type="text" name="fname15" class="form-control" >
                                        
                                     
                </div>
                <div class="col-lg-3">
                    <strong>Vlera per Armatur Adapteri </strong>

                    <input type="text" name="fname16" class="form-control" >
                                        
                                     
                </div> -->
                <div class="col-lg-12  col-12">

                  
                   <a href="#Dhenja-Vlerave"><button type="submit" name='Dergo'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button></a>
                    <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
                    <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

                </div>



        </form>
      

        <div class="col-lg-4 divi-tabel col-md-12 col-12 ">
     <table class="table table-bordered">
     <thead>
  
      
    
      <!-- <th>Shtylla</th>
      <th>Adapteri</th>
      <th>Shtylla[A]</th>
      <th>Adapteri[A]</th> -->


    </tr>
 


 
<?php
$res=mysqli_query($link,"select * from users");
while($row=mysqli_fetch_array($res))


   

{
    echo "<tr>";
    ?> <th style="background-color:white">#</th> <?php
    echo "<td >";echo $row["id"]; echo"</td>";
    ?>
    <?php

    echo "</tr>";
    
    echo "<tr>";
    ?>  <th >Korniza[V]</th> <?php
    echo "<td>";?><p class="InputoKornizesV-1"><?php echo $row["KV"];?>mm</p><?php echo"</td>";
    ?><?php
    echo "</tr>";
    
    echo "<tr>";
    ?><th>Korniza[H]</th><?php
    echo "<td>";?><p class="InputoKornizesH-1"><?php echo $row["KH"];?>mm</p><?php echo"</td>";  
   ?><?php 
   echo "</tr>";

    echo "<tr>";
    ?> <th>Korniza[A][V]</th><?php
    echo "<td>";?><p class="InputiKornizaAV-1"><?php echo $row["KAV"];?>mm</p><?php echo"</td>";
    ?><?php  
    echo "</tr>";
    echo "<tr>";
    ?><th>Korniza[A][H]</th><?php
    echo "<td>";?><p class="InputiKornizaAH-1"><?php echo $row["KAH"];?>mm</p><?php echo"</td>";  
    ?><?php
    echo "</tr>";
    echo "<tr>";
    ?><th>Krahu[V]</th><?php
    echo "<td>";?><p class="InputiKrahuV-1"><?php echo $row["KrV"];?>mm</p><?php echo"</td>";  
    ?><?php
    echo "</tr>";
    
    echo "<tr>";
    ?><th>Krahu[H]</th><?php
    echo "<td>";?><p class="InputiKrahuH-1"><?php echo $row["KrH"];?>mm</p><?php echo"</td>";  
    ?><?php
    echo "</tr>";

    echo "<tr>";
    ?><th>Krahu[A][V]</th><?php
    echo "<td>";?><p class="InputiKrahuAV-1"><?php echo $row["KrAV"];?>mm</p><?php echo"</td>";
    ?><?php  
    echo "</tr>";
    echo "<tr>";
    ?><th>Krahu[A][H]</th><?php
    echo "<td>";?><p class="InputiKrahuAH-1"><?php echo $row["KrAH"];?>mm</p><?php echo"</td>";  
    ?><?php
    echo "</tr>";
    echo "<tr>";
    ?><th>Xhami[V]</th><?php
    echo "<td>";?><p class="XhamiV"><?php echo $row["XhV"];?>mm</p><?php echo"</td>";  
    ?><?php
    echo "</tr>";
    echo "<tr>";
    
    ?><th>Xhami[H]</th><?php
    echo "<td>";?><p class="XhamiH"><?php echo $row["XhH"];?>mm</p><?php echo"</td>";  
    echo "</tr>";
    ?><?php
    echo "<tr>";
    ?><th>Xhami[S][V]</th><?php
    echo "<td>";?><p class="XhamiStatikV"><?php echo $row["XhVS"];?>mm</p><?php echo"</td>";  
    echo "</tr>";
    ?><?php
    echo "<tr>";
    ?><th>Xhami[S][H]</th><?php
    echo "<td>";?><p class="XhamiStatikH"><?php echo $row["XhHS"];?>mm</p><?php echo"</td>";
    echo "</tr>";
    ?><?php
    echo "<tr>";
    echo "<td>";?><a  href="edit.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-success">Ndrysho tabelen</button></a>  <?php echo"</td>";
    echo "<td>";?><a  href="delete.php?id=<?php echo $row["id"]; ?>"><button  type="button" class="btn btn-danger hrefdelete">Fshije</button></a>  <?php echo"</td>";
  
    echo "</tr>";
}


?>

</thead>
</table>
</div>
        


<?php
if(isset($_POST['Dergo']))
{   
    mysqli_query($link,"insert into users values(NULL,'$_POST[fname1]','$_POST[fname2]','$_POST[fname3]','$_POST[fname4]','$_POST[fname5]','$_POST[fname6]','$_POST[fname7]','$_POST[fname8]','$_POST[fname9]','$_POST[fname10]','$_POST[fname11]','$_POST[fname12]')");
}

?>

<script type="text/javascript">
    windows.location.href=windoww.location.href;
</script>


    </div>

</div>
</div>














<!-- Dhenja e vlerave per dritare 2 jondarese -->




<div class="Dhenja-Vlerave2 " id="Dhenja-Vlerave2">


<a href="#Fillimi" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 2 jo ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fname21" class=" form-control  " >
        </div>
        <div class=" col-lg-3 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fname22" class="form-control " >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fname23" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fname24" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fname25" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]</strong>

            <input type="text" name="fname26" class="form-control" >
        </div>

        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fname27" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]</strong>

            <input type="text" name="fname28" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[V] </strong>

            <input type="text" name="fname29" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]</strong>

            <input type="text" name="fname210" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fname211" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]</strong>

            <input type="text" name="fname212" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll</strong>

            <input type="text" name="fname213" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fname214" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla</strong>

            <input type="text" name="fname215" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri </strong>

            <input type="text" name="fname216" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-12 col-12">

          
            <button type="submit" name='Dergo2'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>

<!-- </div> -->

</form>


<div class="col-lg-4 divi-tabel col-12">
<table class="table table-bordered">




<?php
$res2=mysqli_query($link,"select * from userstwo");
while($row=mysqli_fetch_array($res2))


{
echo "<tr>";
?><th style="background-color:white">#</th><?php
echo "<td>";echo $row["id"]; echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[V]</th><?php
echo "<td>";?><p class="InputoKornizesV-2"><?php echo $row["KV2"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[H]</th><?php
echo "<td>";?><p class="InputoKornizesH-2"><?php echo $row["KH2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Korniza[A][V]</th><?php
echo "<td>";?><p class="InputiKornizaAV-2"><?php echo $row["KAV2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Korniza[A][H]</th><?php
echo "<td>";?><p class="InputiKornizaAH-2"><?php echo $row["KAH2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Krahu[V]</th><?php
echo "<td>";?><p class="InputiKrahuV-2"><?php echo $row["KrV2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?> <th>Krahu[H]</th><?php
echo "<td>";?><p class="InputiKrahuH-2"><?php echo $row["KrH2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?> <th>Krahu[A][V]</th><?php
echo "<td>";?><p class="InputiKrahuAV-2"><?php echo $row["KrAV2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";

?><th>Krahu[A][H]</th><?php
echo "<td>";?><p class="InputiKrahuAH-2"><?php echo $row["KrAH2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?> <th>Xhami[V]</th><?php
echo "<td>";?><p class="XhamiV-2"><?php echo $row["XhV2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?> <th>Xhami[H]</th><?php
echo "<td>";?><p class="XhamiH-2"><?php echo $row["XhH2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Xhami[S][V]</th><?php
echo "<td>";?><p class="XhamiStatikV-2"><?php echo $row["XhVS2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Xhami[S][H]</th><?php
echo "<td>";?><p class="XhamiStatikH-2"><?php echo $row["XhHS2"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Shtylla</th><?php
echo "<td>";?><p class="Shtyll-2"><?php echo $row["Shtylla2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Adapteri</th><?php
echo "<td>";?><p class="Adapteri-2"><?php echo $row["Adapteri2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Shtylla[A]</th><?php
echo "<td>";?><p class="ShtyllA-2"><?php echo $row["ShtyllaA2"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Adapteri[A]</th><?php
echo "<td>";?><p class="AdapteriA-2"><?php echo $row["AdapteriA2"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
echo "<td>";?><a href="edit-2.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-success">Ndrysho tabelen</button></a>  <?php echo"</td>";
echo "<td>";?><a href="delete-2.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-danger">Fshije</button></a>  <?php echo"</td>";

echo "</tr>";
}


?>


</table>
</div>
</div>

<?php
if(isset($_POST['Dergo2']))
{   
mysqli_query($link,"insert into userstwo values(NULL,'$_POST[fname21]','$_POST[fname22]','$_POST[fname23]','$_POST[fname24]','$_POST[fname25]','$_POST[fname26]','$_POST[fname27]','$_POST[fname28]','$_POST[fname29]','$_POST[fname210]','$_POST[fname211]','$_POST[fname212]','$_POST[fname213]','$_POST[fname214]','$_POST[fname215]','$_POST[fname216]')");
}

?>

<script type="text/javascript">
windows.location.href=windoww.location.href;
</script>



</div>
</div>



















<!-- Dhenja e vlerave te 3 jo ndarese-->


<div class="Dhenja-Vlerave3 " id="Dhenja-Vlerave3">


<a href="#Fillimi" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 3 jo ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fname31" class=" form-control  " >
        </div>
        <div class=" col-lg-3 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fname32" class="form-control " >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fname33" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fname34" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fname35" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]</strong>

            <input type="text" name="fname36" class="form-control" >
        </div>

        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fname37" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]</strong>

            <input type="text" name="fname38" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[V] </strong>

            <input type="text" name="fname39" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]</strong>

            <input type="text" name="fname310" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fname311" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]</strong>

            <input type="text" name="fname312" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll</strong>

            <input type="text" name="fname313" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fname314" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla</strong>

            <input type="text" name="fname315" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri </strong>

            <input type="text" name="fname316" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-12 col-12">

          
            <button type="submit" name='Dergo3'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>

<!-- </div> -->

</form>


<div class="col-lg-4 divi-tabel col-12">
<table class="table table-bordered">




<?php
$res2=mysqli_query($link,"select * from usersthree");
while($row=mysqli_fetch_array($res2))


{
echo "<tr>";
?><th style="background-color:white">#</th><?php
echo "<td>";echo $row["id"]; echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[V]</th><?php
echo "<td>";?><p class="InputoKornizesV-3"><?php echo $row["KV3"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[H]</th><?php
echo "<td>";?><p class="InputoKornizesH-3"><?php echo $row["KH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Korniza[A][V]</th><?php
echo "<td>";?><p class="InputiKornizaAV-3"><?php echo $row["KAV3"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Korniza[A][V]</th><?php
echo "<td>";?><p class="InputiKornizaAH-3"><?php echo $row["KAH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[V]</th><?php
echo "<td>";?><p class="InputiKrahuV-3"><?php echo $row["KrV3"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[H]</th><?php
echo "<td>";?><p class="InputiKrahuH-3"><?php echo $row["KrH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][V]</th><?php
echo "<td>";?><p class="InputiKrahuAV-3"><?php echo $row["KrAV3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][H]</th><?php
echo "<td>";?><p class="InputiKrahuAH-3"><?php echo $row["KrAH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Xhami[V]</th><?php
echo "<td>";?><p class="XhamiV-3"><?php echo $row["XhV3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Xhami[H]</th><?php
echo "<td>";?><p class="XhamiH-3"><?php echo $row["XhH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Xhami[A][V]</th><?php
echo "<td>";?><p class="XhamiStatikV-3"><?php echo $row["XhVS3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";

?><th>Xhami[A][H]</th><?php
echo "<td>";?><p class="XhamiStatikH-3"><?php echo $row["XhHS3"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Shtylla</th><?php
echo "<td>";?><p class="Shtyll-3"><?php echo $row["Shtylla3"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Adapteri</th><?php
echo "<td>";?><p class="Adapteri-3"><?php echo $row["Adapteri3"];?>mm</p><?php echo"</td>";   
echo "</tr>";
echo "<tr>";
?><th>Shtylla[A]</th><?php
echo "<td>";?><p class="ShtyllA-3"><?php echo $row["ShtyllaA3"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Adapteri[A]</th><?php
echo "<td>";?><p class="AdapteriA-3"><?php echo $row["AdapteriA3"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
echo "<td>";?><a href="edit-3.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-success">Ndrysho tabelen</button></a>  <?php echo"</td>";
echo "<td>";?><a href="delete-3.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-danger">Fshije</button></a>  <?php echo"</td>";

echo "</tr>";
}


?>


</table>
</div>
</div>

<?php
if(isset($_POST['Dergo3']))
{   
mysqli_query($link,"insert into usersthree values(NULL,'$_POST[fname31]','$_POST[fname32]','$_POST[fname33]','$_POST[fname34]','$_POST[fname35]','$_POST[fname36]','$_POST[fname37]','$_POST[fname38]','$_POST[fname39]','$_POST[fname310]','$_POST[fname311]','$_POST[fname312]','$_POST[fname313]','$_POST[fname314]','$_POST[fname315]','$_POST[fname316]')");
}

?>

<script type="text/javascript">
windows.location.href=windoww.location.href;
</script>



</div>
</div>






<!-- Dhenja e vlerave te 4 jo ndarese-->


<div class="Dhenja-Vlerave4 " id="Dhenja-Vlerave4">


<a href="#Fillimi" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 4 jo ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fname41" class=" form-control  " >
        </div>
        <div class=" col-lg-3 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fname42" class="form-control " >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fname43" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fname44" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fname45" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]</strong>

            <input type="text" name="fname46" class="form-control" >
        </div>

        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fname47" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]</strong>

            <input type="text" name="fname48" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[V] </strong>

            <input type="text" name="fname49" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]</strong>

            <input type="text" name="fname410" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fname411" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]</strong>

            <input type="text" name="fname412" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll</strong>

            <input type="text" name="fname413" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fname414" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla</strong>

            <input type="text" name="fname415" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri </strong>

            <input type="text" name="fname416" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-12 col-12">

          
            <button type="submit" name='Dergo4'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>

<!-- </div> -->

</form>


<div class="col-lg-4 divi-tabel col-12">
<table class="table table-bordered">
<thead>
<tr>


</tr>
</thead>



<?php
$res2=mysqli_query($link,"select * from usersfour");
while($row=mysqli_fetch_array($res2))


{
echo "<tr>";
?><th style="background-color:white">#</th><?php
echo "<td>";echo $row["id"]; echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[V]</th><?php
echo "<td>";?><p class="InputoKornizesV-4"><?php echo $row["KV4"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[H]</th><?php
echo "<td>";?><p class="InputoKornizesH-4"><?php echo $row["KH4"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Korniza[A][V]</th><?php
echo "<td>";?><p class="InputiKornizaAV-4"><?php echo $row["KAV4"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Korniza[A][H]</th><?php
echo "<td>";?><p class="InputiKornizaAH-4"><?php echo $row["KAH4"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[V]</th><?php
echo "<td>";?><p class="InputiKrahuV-4"><?php echo $row["KrV4"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[H]</th><?php
echo "<td>";?><p class="InputiKrahuH-4"><?php echo $row["KrH4"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][V]</th><?php
echo "<td>";?><p class="InputiKrahuAV-4"><?php echo $row["KrAV4"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";

?><th>Krahu[A][H]</th><?php
echo "<td>";?><p class="InputiKrahuAH-4"><?php echo $row["KrAH4"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Xhami[V]</th><?php
echo "<td>";?><p class="XhamiV-4"><?php echo $row["XhV4"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Xhami[H]</th><?php
echo "<td>";?><p class="XhamiH-4"><?php echo $row["XhH4"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Xhami[A][V]</th><?php
echo "<td>";?><p class="XhamiStatikV-4"><?php echo $row["XhVS4"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[A][H]</th><?php
echo "<td>";?><p class="XhamiStatikH-4"><?php echo $row["XhHS4"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Shtylla</th><?php
echo "<td>";?><p class="Shtyll-4"><?php echo $row["Shtylla4"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Adapteri</th><?php
echo "<td>";?><p class="Adapteri-4"><?php echo $row["Adapteri4"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Shtylla[A]</th><?php
echo "<td>";?><p class="ShtyllA-4"><?php echo $row["ShtyllaA4"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Adapteri[A]</th><?php
echo "<td>";?><p class="AdapteriA-4"><?php echo $row["AdapteriA4"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
echo "<td>";?><a href="edit-4.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-success mr-4">Ndrysho tabelen</button></a>  <?php echo"</td>";
echo "<td>";?><a href="delete-4.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-danger">Fshije</button></a>  <?php echo"</td>";

echo "</tr>";
}


?>


</table>
</div>
</div>

<?php
if(isset($_POST['Dergo4']))
{   
mysqli_query($link,"insert into usersfour values(NULL,'$_POST[fname41]','$_POST[fname42]','$_POST[fname43]','$_POST[fname44]','$_POST[fname45]','$_POST[fname46]','$_POST[fname47]','$_POST[fname48]','$_POST[fname49]','$_POST[fname410]','$_POST[fname411]','$_POST[fname412]','$_POST[fname413]','$_POST[fname414]','$_POST[fname415]','$_POST[fname416]')");
}

?>

<script type="text/javascript">
windows.location.href=windoww.location.href;
</script>



</div>
</div>




















<!-- Dhenja e vlerave te 2  ndarese-->


<div class="Dhenja-Vlerave2N" id="Dhenja-Vlerave2N">


<a href="#Fillimi" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 2 ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fnameN21" class=" form-control  " >
        </div>
        <div class=" col-lg-3 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fnameN22" class="form-control " >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fnameN23" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fnameN24" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fnameN25" class="form-control" >
        </div>
       
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-1</strong>

            <input type="text" name="fnameN26" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-2</strong>

            <input type="text" name="fnameN27" class="form-control" >
        </div>

        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fnameN28" class="form-control" >
        </div>
        
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-1</strong>

            <input type="text" name="fnameN29" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-2</strong>

            <input type="text" name="fnameN210" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[V]</strong>

            <input type="text" name="fnameN211" class="form-control" >
        </div>
        
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-1</strong>

            <input type="text" name="fnameN212" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-2</strong>

            <input type="text" name="fnameN213" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fnameN214" class="form-control" >
        </div>
      
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-1</strong>

            <input type="text" name="fnameN215" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-2</strong>

            <input type="text" name="fnameN216" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll</strong>

            <input type="text" name="fnameN217" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fnameN218" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla</strong>

            <input type="text" name="fnameN219" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri </strong>

            <input type="text" name="fnameN220" class="form-control" >
                             
        </div>
        <div class="col-lg-12 col-12">

          
            <button type="submit" name='Dergo5'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>



</form>


<div class="col-lg-4 divi-tabel col-12">
<table class="table table-bordered">
<thead>
<tr>


</tr>
</thead>



<?php
$res2=mysqli_query($link,"select * from usersfive");
while($row=mysqli_fetch_array($res2))


{
echo "<tr>";
?><th style="background-color:white">#</th><?php
echo "<td>";echo $row["id"]; echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[V]</th><?php
echo "<td>";?><p class="InputoKornizesVN-2"><?php echo $row["KV"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[H]</th><?php
echo "<td>";?><p class="InputoKornizesHN-2"><?php echo $row["KH"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Korniza[A][V]</th><?php
echo "<td>";?><p class="InputiKornizaAVN-2"><?php echo $row["KAV"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Korniza[A][H]</th><?php
echo "<td>";?><p class="InputiKornizaAHN-2"><?php echo $row["KAH"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
?><th>Krahu[V]</th><?php
echo "<td>";?><p class="InputiKrahuVN-2"><?php echo $row["KrV"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Krahu[H]-1</th><?php
echo "<td>";?><p class="InputiKrahuHN1-2"><?php echo $row["KrH1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
?><th>Krahu[H]-2</th><?php
echo "<td>";?><p class="InputiKrahuHN2-2"><?php echo $row["KrH2"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Krahu[A][V]</th><?php
echo "<td>";?><p class="InputiKrahuAVN-2"><?php echo $row["KrAV"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
?><th>Krahu[A][H]-1</th><?php
echo "<td>";?><p class="InputiKrahuAHN1-2"><?php echo $row["KrAH1"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Krahu[A][H]-2</th><?php
echo "<td>";?><p class="InputiKrahuAHN2-2"><?php echo $row["KrAH2"];?>mm</p><?php echo"</td>" ; 
echo "</tr>";

echo "<tr>";
?><th>Xhami[V]</th><?php
echo "<td>";?><p class="XhamiVN-2"><?php echo $row["XhV"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";

?><th>Xhami[H]-1</th><?php
echo "<td>";?><p class="XhamiHN1-2"><?php echo $row["XhH1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
?><th>Xhami[H]-2</th><?php
echo "<td>";?><p class="XhamiHN2-2"><?php echo $row["XhH2"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
?><th>Xhami[S][V]</th><?php

echo "<td>";?><p class="XhamiStatikVN"><?php echo $row["XhVS"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Xhami[S][H]-1</th><?php
echo "<td>";?><p class="XhamiStatikHN1-2"><?php echo $row["XhHS1"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Xhami[S][H]-2</th><?php
echo "<td>";?><p class="XhamiStatikHN2-2"><?php echo $row["XhHS2"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Shtylla</th><?php
echo "<td>";?><p class="ShtyllN-2"><?php echo $row["Shtylla"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Adapteri</th><?php

echo "<td>";?><p class="AdapteriN-2"><?php echo $row["Adapteri"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Shtylla[A]</th><?php

echo "<td>";?><p class="ShtyllAN-2"><?php echo $row["ShtyllaA"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
?><th>Adapteri[A]</th><?php
echo "<td>";?><p class="AdapteriAN-2"><?php echo $row["AdapteriA"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";

echo "<td>";?><a href="edit-5.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-success">Ndrysho tabelen</button></a>  <?php echo"</td>";
echo "<td>";?><a href="delete-5.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-danger">Fshije</button></a>  <?php echo"</td>";

echo "</tr>";
}


?>


</table>
</div>
</div>

<?php
if(isset($_POST['Dergo5']))
{   
mysqli_query($link,"insert into usersfive values(NULL,'$_POST[fnameN21]','$_POST[fnameN22]','$_POST[fnameN23]','$_POST[fnameN24]','$_POST[fnameN25]','$_POST[fnameN26]','$_POST[fnameN27]','$_POST[fnameN28]','$_POST[fnameN29]','$_POST[fnameN210]','$_POST[fnameN211]','$_POST[fnameN212]','$_POST[fnameN213]','$_POST[fnameN214]','$_POST[fnameN215]','$_POST[fnameN216]','$_POST[fnameN217]','$_POST[fnameN218]','$_POST[fnameN219]','$_POST[fnameN220]')");
}

?>

<script type="text/javascript">
windows.location.href=windoww.location.href;
</script>



</div>
</div>




    


















<!-- Dhenja e vlerave te 3  ndarese-->


<div class="Dhenja-Vlerave3N" id="Dhenja-Vlerave3N">


<a href="#Fillimi" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 3 ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fnameN31" class=" form-control  " >
        </div>
        <div class=" col-lg-3 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fnameN32" class="form-control " >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fnameN33" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fnameN34" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fnameN35" class="form-control" >
        </div>
       
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-1</strong>

            <input type="text" name="fnameN36" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-2</strong>

            <input type="text" name="fnameN37" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-3</strong>

            <input type="text" name="fnameN38" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fnameN39" class="form-control" >
        </div>
        
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-1</strong>

            <input type="text" name="fnameN310" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-2</strong>

            <input type="text" name="fnameN311" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-3</strong>

            <input type="text" name="fnameN312" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[V]</strong>

            <input type="text" name="fnameN313" class="form-control" >
        </div>
        
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-1</strong>

            <input type="text" name="fnameN314" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-2</strong>

            <input type="text" name="fnameN315" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-3</strong>

            <input type="text" name="fnameN316" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fnameN317" class="form-control" >
        </div>
      
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-1</strong>

            <input type="text" name="fnameN318" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-2</strong>

            <input type="text" name="fnameN319" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-3</strong>

            <input type="text" name="fnameN320" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll</strong>

            <input type="text" name="fnameN321" class="form-control" >
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll-2</strong>

            <input type="text" name="fnameN322" class="form-control" >
                                
                             
        </div> -->
        <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fnameN323" class="form-control" >
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter-2</strong>

            <input type="text" name="fnameN324" class="form-control" >
                                
                             
        </div> -->
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla</strong>

            <input type="text" name="fnameN325" class="form-control" >
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla-2</strong>

            <input type="text" name="fnameN326" class="form-control" >
                                
                             
        </div> -->
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri </strong>

            <input type="text" name="fnameN327" class="form-control" >
                             
        </div>
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri-2 </strong>

            <input type="text" name="fnameN328" class="form-control" >
                             
        </div> -->
        <div class="col-lg-12 col-12">

          
            <button type="submit" name='Dergo6'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>



</form>


<div class="col-lg-4 divi-tabel col-12">
<table class="table table-bordered">
<thead>
<tr>











</tr>
</thead>



<?php
$res2=mysqli_query($link,"select * from userssix");
while($row=mysqli_fetch_array($res2))


{
echo "<tr>";
?><th style="background-color:white">#</th><?php
echo "<td>";echo $row["id"]; echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[V]</th><?php
echo "<td>";?><p class="InputoKornizesVN-3"><?php echo $row["KV"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[H]</th><?php
echo "<td>";?><p class="InputoKornizesHN-3"><?php echo $row["KH"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[A][V]</th><?php
echo "<td>";?><p class="InputiKornizaAVN-3"><?php echo $row["KAV"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Korniza[A][H]</th><?php
echo "<td>";?><p class="InputiKornizaAHN-3"><?php echo $row["KAH"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
?><th>Krahu[V]</th><?php
echo "<td>";?><p class="InputiKrahuVN-3"><?php echo $row["KrV"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Krahu[H]-1</th><?php
echo "<td>";?><p class="InputiKrahuHN1-3"><?php echo $row["KrH1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[H]-2</th><?php
echo "<td>";?><p class="InputiKrahuHN2-3"><?php echo $row["KrH2"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Krahu[H]-3</th><?php
echo "<td>";?><p class="InputiKrahuHN3-3"><?php echo $row["KrH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][V]</th><?php
echo "<td>";?><p class="InputiKrahuAVN-3"><?php echo $row["KrAV"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][H]-1</th><?php
echo "<td>";?><p class="InputiKrahuAHN1-3"><?php echo $row["KrAH1"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][H]-2</th><?php
echo "<td>";?><p class="InputiKrahuAHN2-3"><?php echo $row["KrAH2"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][H]-3</th><?php
echo "<td>";?><p class="InputiKrahuAHN3-3"><?php echo $row["KrAH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Xhami[V]</th><?php
echo "<td>";?><p class="XhamiVN-3"><?php echo $row["XhV"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Xhami[H]-1</th><?php
echo "<td>";?><p class="XhamiHN1-3"><?php echo $row["XhH1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Xhami[H]-2</th><?php
echo "<td>";?><p class="XhamiHN2-3"><?php echo $row["XhH2"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[H]-3</th><?php
echo "<td>";?><p class="XhamiHN3-3"><?php echo $row["XhH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";


echo "<tr>";
?><th>Xhami[S][V]</th><?php
echo "<td>";?><p class="XhamiStatikVN-3"><?php echo $row["XhVS"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Xhami[S][H]-1</th><?php
echo "<td>";?><p class="XhamiStatikHN1-3"><?php echo $row["XhHS1"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[S][H]-2</th><?php
echo "<td>";?><p class="XhamiStatikHN2-3"><?php echo $row["XhHS2"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[S][H]-3</th><?php
echo "<td>";?><p class="XhamiStatikHN3-3"><?php echo $row["XhHS3"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Shtylla</th><?php
echo "<td>";?><p class="ShtyllN1-3"><?php echo $row["Shtylla1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";


echo "<tr>";
?><th>Adapteri</th><?php
echo "<td>";?><p class="AdapteriN1-3"><?php echo $row["Adapteri1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";


echo "<tr>";
?><th>Shtylla[A]</th><?php
echo "<td>";?><p class="ShtyllAN1-3"><?php echo $row["ShtyllaA1"];?>mm</p><?php echo"</td>";
echo "</tr>";


echo "<tr>";
?><th>Adapteri[A]</th><?php
echo "<td>";?><p class="AdapteriAN1-3"><?php echo $row["AdapteriA1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";


echo "<tr>";
echo "<td>";?><a href="edit-6.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-success">Ndrysho tabelen</button></a>  <?php echo"</td>";
echo "<td>";?><a href="delete-6.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-danger">Fshije</button></a>  <?php echo"</td>";

echo "</tr>";
}


?>


</table>
</div>
</div>

<?php
if(isset($_POST['Dergo6']))
{   
mysqli_query($link,"insert into userssix values(NULL,'$_POST[fnameN31]','$_POST[fnameN32]','$_POST[fnameN33]','$_POST[fnameN34]','$_POST[fnameN35]','$_POST[fnameN36]','$_POST[fnameN37]','$_POST[fnameN38]','$_POST[fnameN39]','$_POST[fnameN310]','$_POST[fnameN311]','$_POST[fnameN312]','$_POST[fnameN313]','$_POST[fnameN314]','$_POST[fnameN315]','$_POST[fnameN316]','$_POST[fnameN317]','$_POST[fnameN318]','$_POST[fnameN319]','$_POST[fnameN320]','$_POST[fnameN321]','$_POST[fnameN323]','$_POST[fnameN325]','$_POST[fnameN327]')");

}

?>

<script type="text/javascript">
windows.location.href=windoww.location.href;
</script>



</div>

</div>

































<!-- Dhenja e vlerave te 4  ndarese-->


<div class="Dhenja-Vlerave4N" id="Dhenja-Vlerave4N">


<a href="#Fillimi" class="FillimiV"> <button class="FillimiVlerave btn btn-danger">Kethehu ne fillim
    </button></a>
<h2 class="Titulli-Vlerave1"> Dhenja e vlerave per dritare 4 ndarese</h2>
<hr>
<form action="" method='POST'>
    <div class="row">
        <div class="col-lg-3 col-6">
            <strong>Vlera per Kornizen[V]</strong>
            <input type="text" name="fnameN41" class=" form-control  " >
        </div>
        <div class=" col-lg-3 col-6">
            <strong>Vlera per Kornizen[H]</strong>

            <input type="text" name="fnameN42" class="form-control " >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[V] </strong>

            <input type="text" name="fnameN43" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per Kornizen[H]</strong>

            <input type="text" name="fnameN44" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[V]</strong>

            <input type="text" name="fnameN45" class="form-control" >
        </div>
       
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-1</strong>

            <input type="text" name="fnameN46" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-2</strong>

            <input type="text" name="fnameN47" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-3</strong>

            <input type="text" name="fnameN48" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e krahut[H]-4</strong>

            <input type="text" name="fnameN49" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[V]</strong>

            <input type="text" name="fnameN410" class="form-control" >
        </div>
        
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-1</strong>

            <input type="text" name="fnameN411" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-2</strong>

            <input type="text" name="fnameN412" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-3</strong>

            <input type="text" name="fnameN413" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera e armatures per krah[H]-4</strong>

            <input type="text" name="fnameN414" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[V]</strong>

            <input type="text" name="fnameN415" class="form-control" >
        </div>
        
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-1</strong>

            <input type="text" name="fnameN416" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-2</strong>

            <input type="text" name="fnameN417" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-3</strong>

            <input type="text" name="fnameN418" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama te krahut[H]-4</strong>

            <input type="text" name="fnameN419" class="form-control" >
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[V]</strong>

            <input type="text" name="fnameN420" class="form-control" >
        </div>
      
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-1</strong>

            <input type="text" name="fnameN421" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-2</strong>

            <input type="text" name="fnameN422" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-3</strong>

            <input type="text" name="fnameN423" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per xhama statik[H]-4</strong>

            <input type="text" name="fnameN424" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll-</strong>

            <input type="text" name="fnameN425" class="form-control" >
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll-2</strong>

            <input type="text" name="fnameN426" class="form-control" >
                                
                             
        </div> -->
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Shtyll-3</strong>

            <input type="text" name="fnameN427" class="form-control" >
                                
                             
        </div> -->
        <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter</strong>

            <input type="text" name="fnameN428" class="form-control" >
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter-2</strong>

            <input type="text" name="fnameN429" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Adapter-3</strong>

            <input type="text" name="fnameN430" class="form-control" >
                                
                             
        </div> -->
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla</strong>

            <input type="text" name="fnameN431" class="form-control" >
                                
                             
        </div>
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla-2</strong>

            <input type="text" name="fnameN432" class="form-control" >
                                
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Shtylla-3</strong>

            <input type="text" name="fnameN433" class="form-control" >
                                
                             
        </div> -->
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri </strong>

            <input type="text" name="fnameN434" class="form-control" >
                             
        </div>
        <!-- <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri-2 </strong>

            <input type="text" name="fnameN435" class="form-control" >
                             
        </div>
        <div class="col-lg-3 col-6">
            <strong>Vlera per Armatur Adapteri-3 </strong>

            <input type="text" name="fnameN436" class="form-control" >
                             
        </div> -->
        <div class="col-lg-12 col-12">

          
            <button type="submit" name='Dergo7'  class="form-control SaveVlera w-25  btn-danger">Ruaj Vlerat</button>
            <!-- <button type="submit" name='fshije'  class="form-control SaveVlera w-25  btn-danger">Fshij vlerat</button> 
            <button type="submit" name='ndrysho'  class="form-control SaveVlera w-25  btn-danger">Ndrysho vlerat</button>  -->

        </div>



</form>


<div class="col-lg-4 divi-tabel col-12">
<table class="table table-bordered">
<thead>
<tr>



















</tr>
</thead>



<?php
$res2=mysqli_query($link,"select * from usersseven");
while($row=mysqli_fetch_array($res2))


{
echo "<tr>";
?><th style="background-color:white">#</th><?php
echo "<td>";echo $row["id"]; echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[V]</th><?php
echo "<td>";?><p class="InputoKornizesVN-4"><?php echo $row["KV"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Korniza[H]</th><?php
echo "<td>";?><p class="InputoKornizesHN-4"><?php echo $row["KH"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";

?><th>Korniza[A][V]</th><?php
echo "<td>";?><p class="InputiKornizaAVN-4"><?php echo $row["KAV"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Korniza[A][H]</th><?php
echo "<td>";?><p class="InputiKornizaAHN-4"><?php echo $row["KAH"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Krahu[V]</th><?php
echo "<td>";?><p class="InputiKrahuVN-4"><?php echo $row["KrV"];?>mm</p><?php echo"</td>";
echo "</tr>";

echo "<tr>";
?><th>Krahu[H]-1</th><?php
echo "<td>";?><p class="InputiKrahuHN1-4"><?php echo $row["KrH1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[H]-2</th><?php
echo "<td>";?><p class="InputiKrahuHN2-4"><?php echo $row["KrH2"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Krahu[H]-3</th><?php
echo "<td>";?><p class="InputiKrahuHN3-4"><?php echo $row["KrH3"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[H]-4</th><?php
echo "<td>";?><p class="InputiKrahuHN4-4"><?php echo $row["KrH4"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][V]</th><?php
echo "<td>";?><p class="InputiKrahuAVN-4"><?php echo $row["KrAV"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][H]-1</th><?php
echo "<td>";?><p class="InputiKrahuAHN1-4"><?php echo $row["KrAH1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][H]-2</th><?php
echo "<td>";?><p class="InputiKrahuAHN2-4"><?php echo $row["KrAH2"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][H]-3</th><?php
echo "<td>";?><p class="InputiKrahuAHN3-4"><?php echo $row["KrAH3"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Krahu[A][H]-4</th><?php
echo "<td>";?><p class="InputiKrahuAHN4-4"><?php echo $row["KrAH4"];?>mm</p><?php echo"</td>";  
echo "</tr>";


echo "<tr>";
?><th>Xhami[V]</th><?php
echo "<td>";?><p class="XhamiVN-4"><?php echo $row["XhV"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Xhami[H]-1</th><?php
echo "<td>";?><p class="XhamiHN1-4"><?php echo $row["XhH1"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[H]-2</th><?php
echo "<td>";?><p class="XhamiHN2-4"><?php echo $row["XhH2"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[H]-3</th><?php
echo "<td>";?><p class="XhamiHN3-4"><?php echo $row["XhH3"];?>mm</p><?php echo"</td>";  
echo "</tr>";
echo "<tr>";
?><th>Xhami[H]-4</th><?php
echo "<td>";?><p class="XhamiHN4-4"><?php echo $row["XhH4"];?>mm</p><?php echo"</td>";  
echo "</tr>";


echo "<tr>";
?><th>Xhami[S][V]</th><?php
echo "<td>";?><p class="XhamiStatikVN-4"><?php echo $row["XhVS"];?>mm</p><?php echo"</td>";  
echo "</tr>";

echo "<tr>";
?><th>Xhami[S][H]-1</th><?php
echo "<td>";?><p class="XhamiStatikHN1-4"><?php echo $row["XhHS1"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[S][H]-2</th><?php
echo "<td>";?><p class="XhamiStatikHN2-4"><?php echo $row["XhHS2"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[S][H]-3</th><?php
echo "<td>";?><p class="XhamiStatikHN3-4"><?php echo $row["XhHS3"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";
?><th>Xhami[S][H]-4</th><?php
echo "<td>";?><p class="XhamiStatikHN4-4"><?php echo $row["XhHS4"];?>mm</p><?php echo"</td>";
echo "</tr>";
echo "<tr>";

?><th>Shtylla</th><?php
echo "<td>";?><p class="ShtyllN-4"><?php echo $row["Shtylla1"];?>mm</p><?php echo"</td>";  
echo "</tr>";



echo "<tr>";
?><th>Adapteri</th><?php
echo "<td>";?><p class="AdapteriN-4"><?php echo $row["Adapteri1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";


echo "<tr>";
?><th>Shtylla[A]</th><?php

echo "<td>";?><p class="ShtyllAN-4"><?php echo $row["ShtyllaA1"];?>mm</p><?php echo"</td>";
echo "</tr>";


echo "<tr>";
?><th>Adapteri[A]</th><?php
echo "<td>";?><p class="AdapteriAN-4"><?php echo $row["AdapteriA1"];?>mm</p><?php echo"</td>"; 
echo "</tr>";

echo "<tr>";
echo "<td>";?><a href="edit-7.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-success">Ndrysho tabelen</button></a>  <?php echo"</td>";
echo "<td>";?><a href="delete-7.php?id=<?php echo $row["id"]; ?>"><button type="button" class="btn btn-danger">Fshije</button></a>  <?php echo"</td>";

echo "</tr>";
}


?>


</table>
</div>
</div>

<?php
if(isset($_POST['Dergo7']))
{   
mysqli_query($link,"insert into usersseven values(NULL,'$_POST[fnameN41]','$_POST[fnameN42]','$_POST[fnameN43]','$_POST[fnameN44]','$_POST[fnameN45]','$_POST[fnameN46]','$_POST[fnameN47]','$_POST[fnameN48]','$_POST[fnameN49]','$_POST[fnameN410]','$_POST[fnameN411]','$_POST[fnameN412]','$_POST[fnameN413]','$_POST[fnameN414]','$_POST[fnameN415]','$_POST[fnameN416]','$_POST[fnameN417]','$_POST[fnameN418]','$_POST[fnameN419]','$_POST[fnameN420]','$_POST[fnameN421]','$_POST[fnameN422]','$_POST[fnameN423]','$_POST[fnameN424]','$_POST[fnameN425]','$_POST[fnameN428]','$_POST[fnameN431]','$_POST[fnameN434]')");

}

?>

<script type="text/javascript">
windows.location.href=windoww.location.href;
</script>



</div>


</div>







    <script src="script.js"></script>
    <script src="scripti-2.js"></script>
    <script src="Script-3.js"></script>
    <script src="Script-4.js"></script>
    <script src="js.js"></script>
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