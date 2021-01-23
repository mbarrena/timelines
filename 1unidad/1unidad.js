var items = new vis.DataSet([
{id: "9000_ac_revolucion_neolitica", content: "9000 aC Revolución Neolítica", image:"../img/informacion.svg", link:"http://www.cooperacion2005.es/wp-content/uploads/2015/09/11949858491812712425information_sign_mo_01.svg_.hi_.png", start: new Date(-9000,01,01)},
{id: "9000_ac:_revolucion_neolitica_gordo", content: "9000 aC: Revolución Neolítica (Gordon Childe)", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1RnP1ORXvdTbsCBDmryAYdafjXOFPgi1y/view?usp=sharing", start: new Date(-9000,01,01)},
{id: "3001_ac_fines_iv_milenio_ac_aparici", content: "3001 aC (fines IV milenio aC) Aparición de la escritura", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1FP18u5keXoVEEEhkTR1yDnMpLbjw54Gu/view?usp=sharing", start: new Date(-3001,12,31)},
{id: "-3001_ac_fines_iv_milenio_ac:_apari", content: "-3001 aC (fines IV milenio aC): Aparición de la Escritura (cont.)", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1hErBxmWE-l_KN0_zU1x5q4cR0DE39_j0/view?usp=sharing", start: new Date(-3001,12,31)},
{id: "2340_ac:_mesopotamia", content: "2340 aC: Mesopotamia", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1hJ6lRO1KeLylrao2zEP6lOUo5ht-mV7j/view?usp=sharing", start: new Date(-2340,06,01)},
{id: "509_ac:_roma_se_convirtio_en_republ", content: "509 aC: Roma se convirtió en República ", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1XKCzCzR8mL2Hq53vGndhWYgUmM0pcI98/view?usp=sharing", start: new Date(-509,07,02)},
{id: "476_fin_imperio_romano_y_edad_antig", content: "476 Fin Imperio Romano y Edad Antigua", image:"../img/informacion.svg", links:["http://www.cooperacion2005.es/wp-content/uploads/2015/09/11949858491812712425information_sign_mo_01.svg_.hi_.png","https://drive.google.com/file/d/1_4N2ZEyzv52eXxaX410R3hBV_-4tC-_7/view?usp=sharing","http://www.cooperacion2005.es/wp-content/uploads/2015/09/11949858491812712425information_sign_mo_01.svg_.hi_.png","https://drive.google.com/file/d/1J6m3AwRKL6ZhOOKhc097eUq4cfcYGRCM/view?usp=sharing","https://drive.google.com/file/d/1pmEvpoVFieXq6LI5fo3aIA3_S6JA35qv/view?usp=sharing"], start: "476-01-01"},
{id: "siglos_xi,_xii_y_xiii:_feudalismo", content: "Siglos XI, XII y XIII: Feudalismo", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1xACO_EKKyg4wFIMV0qqTBvgqZoMU_HQD/view?usp=sharing", start: "1250-06-01"},
{id: "12-10-1492:_descubrimiento_de_ameri", content: "12-10-1492: Descubrimiento de América (cont.)", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1qt2i4LhWofTbzXIrau14fUu7Kod_SJWY/view?usp=sharing", start: "1492-10-12"},
{id: "12_de_octubre_de_1492_-_descubrimie", content: "12 de octubre de 1492 - Descubrimiento de América", image:"../img/informacion.svg", link:"http://www.cooperacion2005.es/wp-content/uploads/2015/09/11949858491812712425information_sign_mo_01.svg_.hi_.png", start: "1492-10-12"},
{id: "1-11-1700:_reformas_borbonicas_en_l", content: "1-11-1700: Reformas borbónicas en la Nueva España (fecha: muerte Carlos II)", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1NV_UuQ8H0SwSrBMK5nnPOGEt_n49UEdE/view?usp=sharing", start: "1700-11-01"},
{id: "1750_1_revolucion_industrial", content: "1750 1ª Revolución Industrial", image:"../img/informacion.svg", link:"http://www.cooperacion2005.es/wp-content/uploads/2015/09/11949858491812712425information_sign_mo_01.svg_.hi_.png", start: "1750-01-01"},
{id: "1776:_fundacion_virreinato_rio_de_l", content: "1776: fundación Virreinato Río de la Plata", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/19krFJVnwbOumLyev8l5ssNx-EtMlTW5W/view?usp=sharing", start: "1776-08-01"},
{id: "1780_a_1840:_revolucion_industrial", content: "1780 a 1840: Revolución Industrial", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1pQFDoTH5IjpgI61zjSFY_dvefD35N8jI/view?usp=sharing", start: "1780-06-01"},
{id: "05-05-1789:_revolucion_francesa", content: "05-05-1789: Revolución Francesa", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1VvgX8EZmstCelafJqLPFLoE3iZLiJktN/view?usp=sharing", start: "1789-05-05"},
{id: "5-5-1789:_revolucion_francesa_cont.", content: "5-5-1789: Revolución Francesa (cont.)", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1pIO9m0jnGgOO9upQBSXOld4XGnpx1pV9/view?usp=sharing", start: "1789-05-05"},
{id: "fines_sxviii_a_mediados_sxix:_roman", content: "Fines SXVIII a mediados SXIX: Romanticismo", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1lrfBs4IxPLEflcCE50LqkAiuRVGrsBim/view?usp=sharing", start: "1790-06-01"},
{id: "1800:_segunda_revolucion_industrial", content: "1800: Segunda Revolución Industrial", start: "1800-07-01"},
{id: "476_fin_del_imperio_romano_de_occid", content: "476 Fin del Imperio Romano de Occidente y de la Edad Antigua", image:"../img/informacion.svg", link:"http://www.cooperacion2005.es/wp-content/uploads/2015/09/11949858491812712425information_sign_mo_01.svg_.hi_.png", start: "476-01-02", end: "4760-01-02"}
]);