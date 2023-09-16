<?php
include "../../head.php";
?>
<section>
    <div class="section-header">
        <h1>Actividad</h1>
    </div>
    <link rel="stylesheet" href="css/memoria.css">
    <div class="contenedor-juego">
        <div class="container-fluid">
            <div class="row">
                <div class="col col-12 col-md-3 col-xl-3">
                    <div class="contenedorTablero">
                        <div class="tablero">
                            <div class="card" style="width: 100%; height: 10rem;">
                                <div class="container-fluid">
                                    Tiempo (HH:MM:SS): <div id="tiempo">00:00:00</div>
                                    <br>
                                    Movimientos: <div id="movimiento">0</div>
                                    <br>
                                    <button class="btn-Nuevo" onclick="juegoNuevo();">
                                        Juego nuevo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-12 col-md-9 col-xl-9">
                    <div class="card" style="width: 100%;">
                        <!-- la etiqueta tablero contiene el juego -->
                        <div id="tablero">
                            
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="js/memoria.js"></script>