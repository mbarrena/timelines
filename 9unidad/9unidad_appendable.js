var items = new vis.DataSet([
{id: "1985_julio_alfonsin_declara_econom", content: "1985 julio Alfonsín declara 'economía de guerra'", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1J8ou-bru6DaPX97gDmca49miOBaTpXCT","http://drive.google.com/uc?export=view&id=1J8ou-bru6DaPX97gDmca49miOBaTpXCT"], start: new Date(1985,7,0)},
{id: "1985_5_agosto_y_1987_24_abril_se_re", content: "1985 5 agosto y 1987 24 abril se reglamenta la Ley de Hidrocarburos (1967)", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1trlpSt8U7UeKXMbC0-8HLuo2YCy1vtXK","http://drive.google.com/uc?export=view&id=1trlpSt8U7UeKXMbC0-8HLuo2YCy1vtXK"], start: new Date(1985,4,5)},
{id: "1984_31_de_octubre_asesinato_de_ind", content: "1984 31 de octubre Asesinato de Indira Gandhi", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1hvjBMoq2KDPdaPZhUqdZhTSgvFDoCLao","http://drive.google.com/uc?export=view&id=1hvjBMoq2KDPdaPZhUqdZhTSgvFDoCLao"], start: new Date(1984,10,31)},
{id: "1985_fin_de_la_guerra_fria.pdf", content: "1985 Fin de la guerra fría", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1LkaSr2Ud7ghuuFxXdkusS1waJT3ebtPh","http://drive.google.com/uc?export=view&id=1LkaSr2Ud7ghuuFxXdkusS1waJT3ebtPh"], start: new Date(1985,0,0)},
{id: "1989_marzo_anuncio_del_plan_brady.p", content: "1989 marzo Anuncio del Plan Brady", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1L7FBI6F0T8CcJRP_EyPy_thAbeBm2Qww", start: new Date(1989,3,0)},
{id: "1985_14_jun_plan_austral.pdf", content: "1985 14 jun Plan Austral", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1IKJ6Le3DSnLpAlz0cJNrU5MhOJE2hm8b", start: new Date(1985,6,14)},
{id: "1984_20_set_entrega_del_informa_de_", content: "1984 20 set Entrega del informa de la CONADEP", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1xl2HLX0vKoFptzgqpZmo6HDrEHt0pMG_", start: new Date(1984,9,20)},
{id: "1983_22_sept_ley_de_amnistia_n_22.9", content: "1983 22 sept Ley de Amnistía Nº 22.924", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1QDvepnL1MAWqXRBBAp2zTBUoJ5Su4see", start: new Date(1983,22,22)},
{id: "1984_29_noviembre_la_guerra_que_no_", content: "1984 29 noviembre La guerra que no fue", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1rBx4VxZyDLBdokgm8ym43ne5pz6PLcUe", start: new Date(1984,11,29)},
{id: "1986_26_abr_accidente_de_chernovyl.", content: "1986 26 abr Accidente de Chernovyl", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=14jEJUCvV0LAvyfpeyrPcCCipRzJ_vg6Q", start: new Date(1986,4,26)},
{id: "1986_26_abr_chernobyl.pdf", content: "1986 26 abr Chernobyl", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1c1-SMdxMDqTenqVc1YiIxg3kdW7LX4cC", start: new Date(1986,4,26)},
{id: "agosto_1982:_mexico_anuncia_default", content: "Agosto 1982: México anuncia default-programa de \"salvataje\"", start: "1982-01-01"},
{id: "1983:_plan_alimentario_nacional", content: "1983: Plan Alimentario Nacional", start: "1983-01-01"},
{id: "10-12-83_presidencia_ricardo_raul_a", content: "10-12-83 Presidencia Ricardo Raul Alfonsín", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1O4kcpUJ3oBnQhKv1O3YhSqZjnkDaiuR4", start: "1983-12-10"},
{id: "10-12-83_ministro_de_economia_berna", content: "10-12-83 Ministro de Economía Bernardo Grínspun (hasta 18-02-85)", start: "1983-12-10"},
{id: "1984:_aumento_del_costo_de_vida", content: "1984: Aumento del costo de vida", start: "1984-01-01"},
{id: "23-01-84_fmi_cancela_el_acuerdo_de_", content: "23-01-84 FMI cancela el acuerdo de stand by", start: "1984-01-23"},
{id: "30-03-84_prebisch_y_de_laroisiere_f", content: "30-03-84 Prebisch y De Laroisière (FMI) firman un memorándum para presentar a los acreedores", start: "1984-03-30"},
{id: "20-09-1984:_entrega_del_informe_de_", content: "20-09-1984: entrega del Informe de la CONADEP", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1fwOkJDVBq8cP_C08YgLORJIYMnWIyTYW/view?usp=sharing", start: "1984-09-20"},
{id: "oct_1984:_sancion_ley_23.101", content: "Oct 1984: Sanción Ley 23.101", start: "1984-10-01"},
{id: "oct_1984:_programa_para_el_crecimie", content: "Oct 1984: \"Programa para el Crecimiento Sostenido\" de Baker", start: "1984-10-02"},
{id: "31-10-1984:_asesinato_de_indira_gan", content: "31-10-1984: asesinato de Indira Gandhi", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1Vd8XgmMQaM_v8N5c1BgRw2PiDdrrMlXH", start: "1984-11-01"},
{id: "29-11-1984:_la_guerra_que_no_fue...", content: "29-11-1984: la guerra que no fue...", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1v9etSFHMo0x4RFQLMmJyQ4eYj4mbYZpL/view?usp=sharing", start: "1984-11-29"},
{id: "28-12-1984_acuerdo_con_el_fmi_que_f", content: "28-12-1984 Acuerdo con el FMI que financia 91% de las necesidades de Argentina", start: "1984-12-28"},
{id: "enero_1985:_documento_de_sourrouill", content: "Enero 1985: Documento de Sourrouille", start: "1985-01-01"},
{id: "1985_a_1989:_lineamientos_de_una_es", content: "1985 a 1989: \"Lineamientos de una estrategia de crecimiento económico\" de Sourrouille", start: "1985-01-01"},
{id: "recesion_de_1985", content: "Recesión de 1985", start: "1985-01-01"},
{id: "1985:_r._reagan_presidente_ee.uu.;_", content: "1985: R. Reagan presidente EE.UU.; Secretario de Estado: James Baker", start: "1985-01-01"},
{id: "19-02-85_ministro_de_economia_juan_", content: "19-02-85 Ministro de Economía Juan Vitale Sourrouille (hasta 30-03-89)", start: "1985-02-19"},
{id: "mar_1985:_plan_houston", content: "Mar 1985: Plan Houston", start: "1985-03-01"},
{id: "abr_1985:_implementacion_perestroik", content: "Abr 1985: Implementación Perestroika y Glasnot (duran hasta 1991)", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1SY__raUoyzmue31dJ-VmsPspHK4rAJ4Z", start: "1985-04-02"},
{id: "1985:_interrupcion_en_expansion_de_", content: "1985: Interrupción en expansión de agricultura pamepana. Repunta en 1988", start: "1985-05-01"},
{id: "12-06-1985:_congelamiento_de_precio", content: "12-06-1985: Congelamiento de precios (medida del Plan Austral)", start: "1985-06-12"},
{id: "14_jun_1985_-_implementacion_plan_a", content: "14 Jun 1985 - Implementación Plan Austral (hasta 1988)", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1GTPc-7whMVZQwZWRgiZy4crJc7FnA6jH/view?usp=sharing", start: "1985-06-15"},
{id: "jul_1985:_alfonsin_declara_economia", content: "Jul 1985: Alfonsín declara \"economía de guerra\"", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=13ZjWfQzba6bxwPZpvfHk1Dn-mSiTFHWI", start: "1985-07-01"},
{id: "5-08-1985_y_24-04-1987:_2_decretos_", content: "5-08-1985 y 24-04-1987: 2 decretos para reglamentar la Ley de Hidrocarburos (de 1967) e implementar Plan Houston", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1Ubq9lVc65dd1vuOb20CDHfSa-3EJFF9U", start: "1985-08-06"},
{id: "oct_1985:_triunfo_electoral_ucr", content: "Oct 1985: Triunfo electoral UCR", start: "1985-10-01"},
{id: "04-04-1986:_anuncio_correcciones_al", content: "04-04-1986: Anuncio correcciones al programa de ajuste", start: "1986-04-04"},
{id: "4_abril_86:_correciones_al_programa", content: "4 Abril 86: Correciones al programa del Plan Austral", start: "1986-04-05"},
{id: "26-04-1986:_chernobyl", content: "26-04-1986: Chernobyl", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1v9etSFHMo0x4RFQLMmJyQ4eYj4mbYZpL/view?usp=sharing", start: "1986-04-26"},
{id: "26-04-1986:_accidente_de_chernobyl_", content: "26-04-1986: accidente de Chernobyl BIS", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1e75dfWaHfCGYKNyTnodsNehKRmvr1VGL/view?usp=sharing", start: "1986-04-26"},
{id: "julio_1986:_programa_de_integracion", content: "Julio 1986: Programa de Integración y Cooperación Económica con el Brasil", start: "1986-07-01"},
{id: "nov_1986:_creacion_del_directorio_d", content: "Nov 1986: Creación del \"Directorio de Empresas Públicas\"", start: "1986-11-02"},
{id: "1987:_reestablecimiento_negociacion", content: "1987: Reestablecimiento negociaciones paritarias libres", start: "1987-01-01"},
{id: "comienzos_1987:_salto_hacia_arriba_", content: "Comienzos 1987: Salto hacia arriba en el déficit fiscal", start: "1987-01-01"},
{id: "1987:_reestructuracion_de_la_deuda_", content: "1987: Reestructuración de la Deuda Externa", start: "1987-01-01"},
{id: "feb_1987:_congelamiento_de_precios_", content: "Feb 1987: Congelamiento de precios y salarios", start: "1987-02-01"},
{id: "feb_1987:_brazil_rechaza_lo_pedido_", content: "Feb 1987: Brazil rechaza lo pedido por el FMI en el Plan Baker y declara una virtual moratoria", start: "1987-02-02"},
{id: "fines_1987:_ley_de_negociaciones_pa", content: "fines 1987: Ley de negociaciones paritarias libres", start: "1987-10-02"},
{id: "19-10-1987:_crisis_bursatil_wall_st", content: "19-10-1987: Crisis Bursátil Wall Street", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1GRelqSy7pgGbwC1cGnMmuukhm2yeKcht", start: "1987-10-19"},
{id: "21_oct_1987:_crisis_bursatil_en_wal", content: "21 oct 1987: Crísis Bursátil en Wall Street", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1O-QzdSPjAxDpjlqJtt5EmJjWN0IJw8e4", start: "1987-10-21"},
{id: "comienzos_1988:_aprobacion_de_paque", content: "Comienzos 1988: Aprobación de Paquete de Leyes Laborales y convocatoria para Convenciones Colectivas de Trabajo", start: "1988-01-01"},
{id: "comienzos_1988:_agotamiento_de_las_", content: "Comienzos 1988: Agotamiento de las reservas de divisas del Banco Central", start: "1988-01-01"},
{id: "1988:_rebrote_inflacionario_-_agost", content: "1988: Rebrote inflacionario - (agosto) Plan Primavera", start: "1988-01-01"},
{id: "agosto_1988:_acuerdo_antiinflaciona", content: "Agosto 1988: Acuerdo antiinflacionario (hasta febrero 1989)", start: "1988-08-02"},
{id: "enero_1989:_inicio_de_saqueos", content: "Enero 1989: Inicio de saqueos", start: "1989-01-01"},
{id: "enero_1989:_corrida_especulativa_co", content: "Enero 1989: Corrida Especulativa contra el Austral", start: "1989-01-01"},
{id: "acuerdos_con_el_fmi_en_1989._1991,_", content: "Acuerdos con el FMI en 1989. 1991, 92, 96, 98, 200 y 2001", start: "1989-01-01"},
{id: "1989-1990:virtual_quiebra_del_estad", content: "1989-1990:virtual quiebra del Estado", start: "1989-01-02"},
{id: "enero_1989:_corrida_contra_el_austr", content: "Enero 1989: Corrida contra el Austral, venta de RI para frenarla", start: "1989-01-02"},
{id: "comienzos_1989:_banco_mundial_suspe", content: "Comienzos 1989: Banco Mundial suspende los desembolsos prometidos", start: "1989-02-01"},
{id: "febrero_1989_golpe_de_mercado_contr", content: "Febrero 1989 \"Golpe de mercado\" contra el gobierno - tipo de cambio nominal se multiplicó por 8 (Hasta Mayo)", start: "1989-02-02"},
{id: "06-02-1989:_reorganizacion_del_merc", content: "06-02-1989: Reorganizacíón del Mercado Cambiario", start: "1989-02-06"},
{id: "revoluciones_de_1989", content: "Revoluciones de 1989", start: "1989-02-06"},
{id: "marzo_1989:_pres._ee.uu._g._bush;_s", content: "Marzo 1989: Pres. EE.UU. G. Bush; Secretario del Tesoro: Nicholas Brady", start: "1989-03-02"},
{id: "marzo_1989:_plan_brady_para_america", content: "Marzo 1989: Plan Brady para América Latina", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1Tr17tsxAEPxhRzrAf_JWWjvJtX-gSFy4/view?usp=sharing", start: "1989-03-02"},
{id: "abril_1989:_hiperinflacion-enero_19", content: "Abril 1989: Hiperinflación-enero 1990: Plan Bonex", start: "1989-04-01"},
{id: "04-04-89_ministro_de_economia_juan_", content: "04-04-89 Ministro de Economía Juan Carlos Pugliese (hasta 26-05-89)", start: "1989-04-05"},
{id: "27-05-89_ministro_de_economia_jesus", content: "27-05-89 Ministro de Economía Jesús Rodríguez (hasta 08-07-1989)", start: "1989-05-27"},
{id: "30-05-1989:_plan_bunge_y_born_plan_", content: "30-05-1989: Plan Bunge y Born (Plan BB)", start: "1989-05-31"},
{id: "1989:_indulto_a_militares_compromet", content: "1989: Indulto a militares comprometidos en violación de derechos humanos", start: "1989-07-01"},
{id: "08-07-89_primera_presidencia_carlos", content: "08-07-89 Primera presidencia Carlos Saúl Menem", start: "1989-07-08"},
{id: "08-07-89_ministro_de_economia_migue", content: "08-07-89 Ministro de Economía Miguel Roig (hasta 15-07-89)", start: "1989-07-08"},
{id: "steve_jobs_presenta_su_macintosh", content: "Steve Jobs presenta su Macintosh", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=6faWFLjUJRg", start: "1984-1-24"},
{id: "acuerdo_con_el_fmi_de_1984", content: "Acuerdo con el FMI de 1984", image:"../img/informacion.svg", links:['"https://elpais.com/diario/1984/06/10/economia/455666406_850215.html"', '"https://elpais.com/diario/1984/09/19/economia/464392810_850215.html"'], start: "1984-9-18"},
{id: "discurso_del_presidente_alfonsin_en", content: "Discurso del Presidente Alfonsín en la ONU", image:"../img/informacion.svg", links:['"https://www.youtube.com/watch?v=pjAe1Ud14mg"', '"https://www.tiempoar.com.ar/nota/raul-alfonsin-1984-un-mundo-injusto-es-inestable-e-inseguro"'], start: "1984-9-24"},
{id: "juicio_a_la_junta_militar_22-4-1985", content: "Juicio a la Junta Militar (22-4-1985 al 9-12-1985)", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=GI3Q6zxV5II", start: "1985-4-22"},
{id: "proyecto_para_trasladar_la_capital_", content: "Proyecto para trasladar la Capital Federal a Viedma-Río Negro", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=N5v8GKZRkoE", start: "1986-4-16"},
{id: "plan_primavera", content: "Plan Primavera", image:"../img/informacion.svg", links:['"https://www.youtube.com/watch?v=NLiqhyRmeDk"', '"https://www.airedesantafe.com.ar/economia/a-30-anos-del-plan-primavera-alfonsin-n76126"'], start: "1988-8-3"},
{id: "reconocimiento_internacional_de_pal", content: "Reconocimiento internacional de Palestina", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=WFNW3glwkj4", start: "1988-11-15"},
{id: "el_consenso_de_washington", content: "El Consenso de Washington", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=VTrqqqMQgC4", start: "1989-1-1"},
{id: "discurso_del_ministro_de_economia_j", content: "Discurso del Ministro de Economía Jesús Rodríguez (Cadena Nacional)", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=Jq2e3Qd2iMQ", start: "1989-5-27"},
{id: "macri_inaugura_el_metro_bus_en_ex-r", content: "Macri inaugura el \"metro bus\" en \"Ex-Ruta 8\"", image:"../img/informacion.svg", links:['"https://youtu.be/wlzoVKiLynU"', '"https://www.google.com/amp/s/www.cronista.com/amp/economiapolitica/Macri-inauguro-otro-tramo-de-la-ruta-8-obra-clave-para-su-alianza-con-el-campo-20190423-0009.html"'], start: "2019-7-16"},