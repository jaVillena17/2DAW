/*1*/
select dniJugador, nombreJugador, fechaN
from jugadores 
where Month(fechaN) = 7;
/*2*/
select year(fechaN) as "Año de Nacimiento", count(IdJugador) as "Nº de jugadores"
from jugadores
group by year(fechaN)
order by year(fechaN) DESC;
/*3*/
select IdTorneo, inscripcion, 
case
when inscripcion < 4.5 then "Buen Precio"
when inscripcion <= 6.5 then "Precio Normal"
else "Precio Elevado"
end as "Precio"
from torneos;
/*4*/
select juegos.delegado, juegos.nombreJuego
from juegos
where nombreJuego like "Billar%";
/*5*/
select IdJugador, concat(nombreJugador, ap1Jug) as "Nombre y Apellido", telfJug, year(current_date()) - year(fechaN) as "Edad"
from jugadores;