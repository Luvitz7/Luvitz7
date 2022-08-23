<?php
    // $arreglo = [
    //     'color' => 'verde',
    //     'lugar' => 'playa',
    //     'año' => 2021
    // ];
    
    // $arreglo['color'] = 'rojo';

    // foreach($arreglo as $valor ){
    //     echo $valor . ", ";
    // }
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    echo "Nombre: " . $name . "<br>";

    print_r($_REQUEST);
?>