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
/*6*/
select IdJugador, concat(nombreJugador, ap1Jug) as "Nombre y Apellido", fechaN,
case 
when Date_Format(current_date(),'%j') >= Date_Format(fechaN,'%j') then year(current_date()) - year(fechaN)
else year(current_date()) - year(fechaN) -1
end as "Edad"
from jugadores;
/*7*/
create view EdadesJugadores as select IdJugador, concat(nombreJugador, ap1Jug) as "Nombre y Apellido", fechaN,
case 
when Date_Format(current_date(),'%j') >= Date_Format(fechaN,'%j') then year(current_date()) - year(fechaN)
else year(current_date()) - year(fechaN) -1
end as "Edad"
from jugadores;
/*8*/
select jugadores.nombreJugador, jugadores.ap1Jug, jugadores.telfJug, EdadesJugadores.Edad
from jugadores
inner join EdadesJugadores on jugadores.IdJugador = EdadesJugadores.IdJugador
where edad Between 23 AND 30;
/*9*/
update juegos
set  nombreJuego = replace(nombreJuego, 'Poker', 'Póquer');