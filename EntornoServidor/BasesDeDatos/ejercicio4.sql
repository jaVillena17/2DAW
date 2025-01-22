/*1*/
select provincia, format(avg(NumHab),1) as "Media Habitantes"
from ciudades
group by provincia
order by avg(NumHab) DESC;
/*2*/
select juegos.nombreJuego, torneos.inscripcion, torneos.año
from juegos
inner join torneos on juegos.IdJuego = torneos.IdJuego
where torneos.inscripcion >= 10
order by torneos.año DESC;
/*3*/
select torneos.IdTorneo, torneos.año, ciudades.NombreCiudad, juegos.nombreJuego, juegos.delegado
from torneos
inner join juegos on juegos.IdJuego = torneos.IdJuego 
inner join ciudades on ciudades.IdCiudad = torneos.IdCiudad
where juegos.delegado = "Carmen Pastor";
/*4*/
select juegos.nombreJuego, juegos.delegado, ciudades.NombreCiudad, torneos.año, ciudades.provincia
from juegos
inner join torneos on juegos.IdJuego = torneos.IdJuego
inner join ciudades on ciudades.IdCiudad = torneos.IdCiudad
where torneos.año < 2015 and ciudades.provincia = "Alicante";
/*5*/
select jugadores.nombreJugador, jugadores.ap1Jug, torneos.año, juegos.nombreJuego
from jugadores
left join torneos_jugad on jugadores.IdJugador = torneos_jugad.IdJugador
inner join torneos on torneos_jugad.IdTorneo = torneos.IdTorneo
inner join juegos on juegos.IdJuego = torneos.IdJuego;
/*6*/
select jugadores.*,juegos.nombreJuego,torneos.año 
from jugadores
inner join torneos_jugad on jugadores.IdJugador = torneos_jugad.IdJugador
inner join torneos on torneos_jugad.IdTorneo = torneos.IdTorneo
inner join juegos on juegos.IdJuego = torneos.IdJuego
where juegos.nombreJuego = "Rubik OH" and torneos.año = "2017";
/*7*/
select juegos.IdJuego, juegos.nombreJuego, format(avg(torneos.numdias),2) as "Días de Media"
from juegos
inner join torneos on juegos.IdJuego = torneos.IdJuego
group by juegos.nombreJuego;
/*8*/
select count(jugadores.IdJugador) as "nº Participantes",torneos.IdTorneo, ciudades.NombreCiudad
from torneos
left join torneos_jugad on torneos.IdTorneo = torneos_jugad.IdTorneo
left join jugadores on torneos_jugad.IdJugador = jugadores.IdJugador
inner join ciudades on torneos.IdCiudad = ciudades.IdCiudad
group by IdTorneo;
/*9*/
select jugadores.dniJugador, jugadores.IdJugador, concat(jugadores.nombreJugador, jugadores.ap1Jug),jugadores.telfJug, count(torneos_jugad.IdTorneo)
from jugadores 
left join torneos_jugad on jugadores.IdJugador = torneos_jugad.IdJugador
group by jugadores.dniJugador
having count(torneos_jugad.IdTorneo) = 0;
/*10*/
select NombreCiudad, provincia, count(IdTorneo)
from ciudades
left join torneos on ciudades.IdCiudad = torneos.IdCiudad
group by NombreCiudad
having count(IdTorneo) = 0;