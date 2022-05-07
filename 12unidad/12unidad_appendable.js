var items = new vis.DataSet([
{id: "10-12-2015:_inicio_presidencia_de_i", content: "10-12-2015: inicio presidencia de Ing. Macri por \"Cambiemos\"", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=13Lqod_2iZiCmJyUpgKuBGOSAunSujf1Z", start: "2015-12-10"},
{id: "16-12-2015:_fin_cepo_cambiario", content: "16-12-2015: fin \"Cepo\" Cambiario", image:"../img/informacion.svg", links:["https://drive.google.com/open?id=17RAvZ67SN19SXJvboT-F-Tfc71nMgEGj","http://drive.google.com/uc?export=view&id=1cixnYNAACZSefc8jtnHQStcIQ_ZARFbf","https://www.casarosada.gob.ar/informacion/que-estamos-diciendo/35735-fin-del-cepo-cambiario"], start: "2015-12-16"},

{id: "25-11-2016:_fallecimiento_fidel_cas", content: "25-11-2016: fallecimiento Fidel Castro", image:"../img/informacion.svg", links:["https://drive.google.com/open?id=1VhPZ4QEoGM9KZZAHnZHGiV2nEqoOCzFd","https://www.youtube.com/watch?v=BE5TFcdVKfQ", "https://www.pagina12.com.ar/5387-murio-fidel-castro"], start: "2016-11-25"},

{id: "15-11-2017:_desaparicion_submarino_", content: "15-11-2017: desaparición Submarino Ara San Juan ", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1bdcrHJzutg4lulyaS0XU9OtTcjCgh-7P/view?usp=sharing", start: "2017-11-15"},
{id: "28-11-2018_al_02-12-2018:_cumbre_de", content: "28-11-2018 al 02-12-2018: Cumbre del G20 en CABA", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1cz4jTbwgYRHn2_2unJTzqaQDmKDr5Q6i", start: "2018-11-28"},
{id: "28-11-2018_al_02-12-2018:_cumbre_g2", content: "28-11-2018 al 02-12-2018: Cumbre G20 en CABA (cont.)", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1C6_KAUIJw7hF5fbRX2z-89VZjM2UV_lb", start: "2018-11-28"},
{id: "oms_declara_emergencia_sanitaria_in", content: "2016-2-1: OMS declara emergencia sanitaria internacional por a propagación del virus del Zika", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=pb33Y2qHBkk", start: "2016-2-1"},
{id: "conflito_en_cresta_roja_y_veto_a_la", content: "2016-5-20: Conflito en Cresta Roja y veto a la Ley Antidespidos", image:"../img/informacion.svg", links:["https://www.clarin.com/politica/destacadas-discurso-macri-cresta-roja_0_NyT9XWOzW.html", "https://www.lanacion.com.ar/politica/mauricio-macri-firmo-el-veto-a-la-ley-antidespidos-nid1900920/"], start: "2016-5-20"},
{id: "plan_nacional_integral_contra_la_vi", content: "2016-7-26: Plan Nacional Integral contra la Violencia de Género", image:"../img/informacion.svg", link:"https://www.lanacion.com.ar/seguridad/lanzaron-un-nuevo-plan-integral-contra-la-violencia-de-genero-nid1922107/", start: "2016-7-26"},
{id: "desaparicion_del_ara_san_juan", content: "2017-11-15: Desaparición del Ara San Juan", image:"../img/informacion.svg", links:["https://www.youtube.com/watch?v=PilWU42XG7g&vl=es-419", "https://m.youtube.com/watch?v=s_CwyNEIE_Q", "https://www.minutouno.com/politica/ara-san-juan/el-fiscal-marijuan-pidio-mas-pruebas-causa-la-que-esta-involucrado-macri-n5197614"], start: "2017-11-15"},
{id: "anuncio_del_plan_de_ajuste_del_esta", content: "2018-1-29: Anuncio del Plan de ajuste del Estado de Macri", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=sHnhKVrDMoY&ab_channel=Televisi%C3%B3nP%C3%BAblicaNoticias", start: "2018-1-29"},
{id: "acercamiento_de_macri_al_fmi", content: "2018-3-17: Acercamiento de Macri al FMI", image:"../img/informacion.svg", link:"https://www.lavoz.com.ar/politica/macri-y-el-fmi-acercamiento-con-la-mira-en-nuevos-creditos", start: "2018-3-17"},
{id: "cumbre_g20_e_argentina_30-11-2018_a", content: "2018-11-30: Cumbre G20 e Argentina (30-11-2018 al 01-12-2018)", image:"../img/informacion.svg", link:"https://www.google.com/imgres?imgurl=https://cdn.cienradios.com/wp-content/uploads/sites/22/2019/11/g20-400x215.jpg&imgrefurl=https://marcelobonelli.cienradios.com/hace-un-ano-se-realizo-en-la-argentina-la-cumbre-del-g20/&tbnid=P3pK9zJrSW4PiM&vet=1&docid=xOnQ5PfSC7DpbM&w=400&h=215&source=sh/x/im", start: "2018-11-30"},
{id: "macri_inaugura_el_metro_bus_en_ex-r", content: "2019-7-16: Macri inaugura el \"metro bus\" en \"Ex-Ruta 8\"", image:"../img/informacion.svg", links:["https://youtu.be/wlzoVKiLynU", "https://www.google.com/amp/s/www.cronista.com/amp/economiapolitica/Macri-inauguro-otro-tramo-de-la-ruta-8-obra-clave-para-su-alianza-con-el-campo-20190423-0009.html"], start: "2019-7-16"},
{id: "modificacion_de_la_ley_de_medios", content: "2016-1: Modificación de la Ley de Medios", image:"../img/informacion.svg", links:["https://www.lanacion.com.ar/politica/el-gobierno-publico-el-dnu-que-modifica-la-ley-de-medios-\r\ny-elimina-la-afsca-nid1859236/\r", "https://www.boletinoficial.gob.ar/detalleAviso/primera/139399/20160104"], start: "2016-1"},
{id: "acuerdo_con_los_holdouts", content: "2016-2-29: Acuerdo con los Holdouts ", image:"../img/informacion.svg", links:["https://www.youtube.com/watch?v=7zAtUpeQvWI&t=25s", "https://www.casarosada.gob.ar/informacion/que-estamos-diciendo/35750-acuerdo-con-los-holdouts\r\n29/02/2016\r"], start: "2016-2-29"},
{id: "asuncion_de_donald_trump", content: "2017-1-20: Asunción de Donald Trump", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=zKabQu3lyHE", start: "2017-1-20"},
{id: "debate_por_la_legalizacion_del_abor", content: "2018: Debate por la legalización del aborto", image:"../img/informacion.svg", link:" https://youtu.be/HKOeaPnlrzk", start: "2018"},
{id: "cumbre_g20_en_argentina", content: "2018-11-30: Cumbre G20 en Argentina ", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=TTlXk97G5Ck&t=28s", start: "2018-11-30"},
{id: "prorrogacion_de_la_ley_de_emergenci", content: "2019: Prorrogación de la Ley de emergencia alimentaria ", image:"../img/informacion.svg", link:"https://youtu.be/SYnVY4FvNPA", start: "2019"},