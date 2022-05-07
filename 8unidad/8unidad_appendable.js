var items = new vis.DataSet([
{id: "1983_10_diciembre_presidencia_dr._a", content: "1983 10 diciembre Presidencia Dr. Alfonsín", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1iJrYQKTb453WkDrSP8q-4rSYRETeB6o8","http://drive.google.com/uc?export=view&id=1iJrYQKTb453WkDrSP8q-4rSYRETeB6o8"], start: new Date(1983,12,10)},
{id: "1980_10_julio_discurso_martinez_de_", content: "1980 10 julio Discurso Martínez de Hoz sobre la segunda parte del Plan Económico", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1dm-04Boa-Zr9D9GTsvB_C5jA7jsYyhFM","http://drive.google.com/uc?export=view&id=1dm-04Boa-Zr9D9GTsvB_C5jA7jsYyhFM"], start: new Date(1980,7,10)},
{id: "2_de_abril_de_1976_plan_economico_d", content: "2 de abril de 1976 Plan Económico de Martínez de Hoz", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1xvvLHrsjh-V4m1MqcrRnKsbxiYdNarPZ","http://drive.google.com/uc?export=view&id=1xvvLHrsjh-V4m1MqcrRnKsbxiYdNarPZ"], start: new Date(1976,4,2)},
{id: "1982_2_mayo_hundimiento_crucero_gen", content: "1982 2 mayo Hundimiento Crucero General Belgrano", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1wLAUp6Sm5-Eq2vdYM3vx1awi4ozALxm2","http://drive.google.com/uc?export=view&id=1wLAUp6Sm5-Eq2vdYM3vx1awi4ozALxm2"], start: new Date(1982,5,2)},
{id: "1976_24_marzo_golpe_de_estado_y_dic", content: "1976 24 marzo Golpe de Estado y Dictadura cívico-militar", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1Ocxp-dBYQBH67ZsI_f3NIYMgGc6JRc85","http://drive.google.com/uc?export=view&id=1Ocxp-dBYQBH67ZsI_f3NIYMgGc6JRc85"], start: new Date(1976,3,24)},
{id: "1980_13_octubre_adolfo_perez_esquiv", content: "1980 13 octubre Adolfo Pérez Esquivel recibe Premio Nobel", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1aijH6DlgCFKU0d-9lizxKKK7j4s2ea1Q","http://drive.google.com/uc?export=view&id=1aijH6DlgCFKU0d-9lizxKKK7j4s2ea1Q"], start: new Date(1980,10,13)},
{id: "1982_02_04_malvinas.pdf", content: "1982 02 04 Malvinas", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1t3dfXu7sQt3jvIaoOx0VF09tzOnqYYL0","http://drive.google.com/uc?export=view&id=1t3dfXu7sQt3jvIaoOx0VF09tzOnqYYL0"], start: new Date(1982,4,2)},
{id: "1977_30_abril_las_madres_de_plaza_d", content: "1977 30 abril Las Madres de Plaza de Mayo", image:"../img/informacion.svg", links:["http://drive.google.com/uc?export=view&id=1adIACA9OxctFmydfdDCypd9cESKV3gca","http://drive.google.com/uc?export=view&id=1adIACA9OxctFmydfdDCypd9cESKV3gca"], start: new Date(1977,4,30)},
{id: "1976_24_marzo_hecho_turistico_promo", content: "1976 24 marzo HECHO TURÍSTICO Promoción de Turismo Receptivo", image:"../img/turismo.svg", links:["http://drive.google.com/uc?export=view&id=1xmsBr5pr3-oD-GiU_8ERLoaETwmuN9Cu","http://drive.google.com/uc?export=view&id=1xmsBr5pr3-oD-GiU_8ERLoaETwmuN9Cu"], start: new Date(1976,3,24)},
{id: "1983_25_oct_invasion_a_granada.pdf", content: "1983 25 oct Invasión a Granada", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1UyfxHzskKP4M-NHdO3818Kl2BtGAeAOF", start: new Date(1983,10,25)},
{id: "1982_02_04_consecuencias_economicas", content: "1982 02 04 Consecuencias económicas de la Guerra de Malvinas", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=164U_eD76-W3g8IyFoogFLcBdz5FTSO25", start: new Date(1982,4,2)},
{id: "1978_26_enero_argentina_declaro_nul", content: "1978 26 enero Argentina declaró nulo el fallo británico sobre el Beagle", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1iEdNqhJGRIDUF_Xj42Yz8TUQdZPf0_X_", start: new Date(1978,1,26)},
{id: "1976_24_marzo_golpe_de_estado_en_ar", content: "1976 24 marzo Golpe de Estado en Argentina de 1976", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1r6TKKHmbHbm1le5TEdNXbIRYnx20zeGB", start: new Date(1976,3,24)},
{id: "1978_1_jun_mundial_de_futbol.pdf", content: "1978 1 jun Mundial de Fútbol", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1TMf_nzx2SBE1dAToHMaTkCA6aM_dXgUH", start: new Date(1978,6,1)},
{id: "1976_02_abr_plan_de_martinez_de_hoz", content: "1976 02 abr Plan de Martínez de Hoz (1ª etapa)", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1-MEBf40-gpHlOpe2I7b10pKzs8aCar8e", start: new Date(1976,4,2)},
{id: "1930_-_6_set_golpe_militar_de_uribu", content: "1930 - 6 set Golpe militar de Uriburu", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1CGAZkNgDilpdEqC6rZ_kj15hTkPG2-kb", start: new Date(1930,9,6)},
{id: "decada_1970:_euforia_especulativa", content: "Década 1970: euforia especulativa", start: "1976-01-01"},
{id: "24-03-1976:_golpe_de_estado_y_dicta", content: "24-03-1976: Golpe de Estado y Dictadura Cívico-Militar (cont.)", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1OauLRxef_R4dv1cRkmIFXDCCout-1khN", start: "1976-03-24"},
{id: "24-03-1976:_primera_junta_militar_d", content: "24-03-1976: Primera Junta Militar de Gobierno (Teniente General Jorge Videla) (hasta 29-03-1981). Ministro de economía: Joaquín de las Heras (hasta 29-03-76)", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1WiI6MTXvspv51VzDQV5qyteRXvVKWzUe/view?usp=sharing", start: "1976-03-24"},
{id: "a_partir_de_1976:_turismo_receptivo", content: "A partir de 1976: turismo receptivo", image:"../img/turismo.svg", link:"https://drive.google.com/file/d/1mc8x9XyFOtNKPmHEfcUMZ1fYEUD-CHE2/view?usp=sharing", start: "1976-03-25"},
{id: "29-03-1976:_ministro_de_economia_jo", content: "29-03-1976: Ministro de Economía José Alfredo Martínez de Hoz (hasta 29-03-1981)", start: "1976-03-29"},
{id: "1976-1979:_1_etapa_del_endeudamient", content: "1976-1979: 1º etapa del endeudamiento argentino (Ferrer), con préstamos para formación de RI y estabilizar precios con E fijo", start: "1976-04-01"},
{id: "02-04-1976:_plan_economico_martinez", content: "02-04-1976: Plan Económico Martínez de Hoz (cont.)", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=17GzkvlUT_soipGZg8ZpAsyXzQneI-34_", start: "1976-04-02"},
{id: "02-04-1976:_plan_de_martinez_de_hoz", content: "02-04-1976: Plan de Martínez de Hoz. 1º etapa: 1976-1978", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1Y1CAWNV4dVsfxBjbJ6YDp9TQx9s3L6T3/view?usp=sharing", start: "1976-04-02"},
{id: "2_mitad_de_la_decada_de_1970:_etapa", content: "2º mitad de la década de 1970: etapa de alta liquidez internacional", start: "1976-05-01"},
{id: "ago-1976:_desregulacion_de_la_inver", content: "Ago-1976: desregulación de la inversión extranjera", start: "1976-08-02"},
{id: "16-09-1976:_la_noche_de_los_lapices", content: "16-09-1976: la \"noche de los lápices\"", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1ZS6ouqwuzv6IjKxaqhwwWubIyzuO5JV1/view?usp=sharing", start: "1976-09-16"},
{id: "fines_1976:_reformas_del_sector_ext", content: "Fines 1976: reformas del sector externo (unificación del mercado de divisas)", start: "1976-12-02"},
{id: "30-04-1977:_1_manifestacion_de_las_", content: "30-04-1977: 1º manifestación de las \"Madres de Plaza de Mayo\" en reclamo por los desaparecidos", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1X1jSU2UdaWm4cUgiDam1ZvnSeAiZ-HFC/view?usp=sharing", start: "1977-04-30"},
{id: "may-1977:_se_conocio_el_laudo_arbit", content: "May-1977: se conoció el Laudo Arbitral sobre el diferendo del Beagle", start: "1977-05-01"},
{id: "jul-1977:_reforma_del_sistema_monet", content: "Jul-1977: reforma del sistema monetario y bancario (favorable a sector financiero). Creación de la Cuenta de Regulación Monetaria", start: "1977-07-01"},
{id: "26-01-1978:_argentina_declaro_la_nu", content: "26-01-1978: Argentina declaró la nulidad del Laudo Arbitral del Beagle", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1WiI6MTXvspv51VzDQV5qyteRXvVKWzUe/view?usp=sharing", start: "1978-01-26"},
{id: "20-02-1978:_videla_y_pinochet_se_re", content: "20-02-1978: Videla y Pinochet se reunieron en Puerto Montt y firmaron un Acta comprometiéndose a mantener la paz", start: "1978-02-20"},
{id: "jun-1978:_proceso_de_privatizacion_", content: "Jun-1978: proceso de \"privatización periférica\" (30 empresas: Siam, Winco, Carboclor, etc.)", start: "1978-06-01"},
{id: "1-6-1978:_mundial_de_futbol_en_arge", content: "1-6-1978: Mundial de Fútbol en Argentina", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1WiI6MTXvspv51VzDQV5qyteRXvVKWzUe/view?usp=sharing", start: "1978-06-01"},
{id: "dic-1978:_politica_cambiaria:_la_ta", content: "Dic-1978: política cambiaria: \"la tablita\" (hasta principios de 1981). 1º devaluación: del 5,23%", start: "1978-12-01"},
{id: "1978-1981:_2_etapa_del_plan_de_mart", content: "1978-1981: 2º etapa del Plan de Martínez de Hoz. Enfoque Monetario de BP", start: "1978-12-01"},
{id: "dic-1978:_el_conflicto_militar_entr", content: "Dic-1978: el conflicto militar entre Argentina y Chile parecía inminente", start: "1978-12-01"},
{id: "23-12-1978:_el_papa_juan_pablo_ii_d", content: "23-12-1978: el Papa Juan Pablo II designó al Cardenal Samoré para encauzar las negociaciones entre Argentina y Chile", start: "1978-12-23"},
{id: "08-01-1979:_argentina_y_chile_firma", content: "08-01-1979: Argentina y Chile firmaron las Actas de Montevideo: aceptaron someter el litigio a la autoridad del Papa y no hacer uso de la fuerza", start: "1979-01-08"},
{id: "25-01-1979:_el_papa_juan_pablo_ii_a", content: "25-01-1979: el Papa Juan Pablo II aceptó la mediación del conflicto entre Argentina y Chile, para la totalidad de la zona austral", start: "1979-01-25"},
{id: "06_al_20-09-1979:_visita_de_la_comi", content: "06 al 20-09-1979: visita de la Comisión Interamericana de Derechos Humanos de la OEA. Recibió denuncias de familiares", start: "1979-09-06"},
{id: "1980-1981:_2_etapa_del_endeudamient", content: "1980-1981: 2º etapa del endeudamiento argentino (Ferrer): fuerte endeudamiento del sector público por desequilibrios BP", start: "1980-01-01"},
{id: "entre_1980_y_1982:_fuga_de_capitale", content: "Entre 1980 y 1982: fuga de capitales osciló entre U$D 16MM y 22MM", start: "1980-01-01"},
{id: "1980-1982:_variacion_de_deuda_exter", content: "1980-1982: variación de deuda externa fue de U$D 16.481MM", start: "1980-01-01"},
{id: "mar-1980:_cerro_el_banco_de_interca", content: "Mar-1980: cerró el Banco de Intercambio Regional (BIR). Luego cerraron otros 3 grandes bancos y varios pequeños", start: "1980-03-01"},
{id: "abr-1980:_la_comision_interamerican", content: "Abr-1980: la Comisión Interamericana de DDHH presentó y aprobó Informe. La dictadura prohibió la circulación del Informe", start: "1980-04-01"},
{id: "jun-1980:_reduccion_de_aranceles_ad", content: "Jun-1980: reducción de aranceles aduaneros, para favorecer importaciones y combatir la inflación", start: "1980-06-01"},
{id: "10-07-1980:_discurso_de_martinez_de", content: "10-07-1980: discurso de Martínez de Hoz por 2ª parte del Plan Económico", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=102XmIB0wpGrKHbUDVPDkBIvjgfxGrYne", start: "1980-07-10"},
{id: "13-10-1980:_el_arquitecto_argentino", content: "13-10-1980: el arquitecto argentino Adolfo Pérez Esquivel recibió el Premio Nobel de la Paz", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1Ar_p48g0GoJckGY6yWRX5eAqvc3QKmOp", start: "1980-10-13"},
{id: "12-12-1980:_el_papa_juan_pablo_ii_e", content: "12-12-1980: el Papa Juan Pablo II entregó su propuesta de mediación a Argentina y Chile (convalidaba el Laudo Arbitral). Fue rechazada por Argentina y el conflicto quedó en suspenso hasta el gobierno de Alfonsín", start: "1980-12-12"},
{id: "29-03-1981:_segunda_junta_militar_d", content: "29-03-1981: Segunda Junta Militar de Gobierno (Teniente General Roberto Viola) (hasta 11-12-81). Ministro de Economía Lorenzo J Sigaut (hasta 21-12-81) ", start: "1981-03-29"},
{id: "22-12-1981:_tercera_junta_militar_d", content: "22-12-1981: Tercera Junta Militar de Gobierno (Teniente General Leopoldo Galtieri) (hasta 18-06-1982). Ministro de economía: Roberto T Alemann (hasta 02-07-1982)", start: "1981-12-22"},
{id: "30-03-1982:_cgt_ubaldini_convoco_a_", content: "30-03-1982: CGT (Ubaldini) convocó a los trabajadores a movilización y concentración en Plaza de Mayo", start: "1982-03-30"},
{id: "02-04-1982:_tropas_argentinas_ocupa", content: "02-04-1982: tropas argentinas ocuparon las Islas Malvinas", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1YjU-vbgDAMcgdyKeffQa9ICQ2ynLO14M/view?usp=sharing", start: "1982-04-02"},
{id: "02-04-1982:_consecuencias_economica", content: "02-04-1982: consecuencias económicas de la Guerra de Malvinas", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/17mdpJpZ_4jmGLUIaWE_NMFBZa4mewZSb/view?usp=sharing", start: "1982-04-02"},
{id: "04-04-1982:_alejandro_olmos_denunci", content: "04-04-1982: Alejandro Olmos denunció por ilegítima gran parte de la deuda externa contraída por el gobierno militar (el 13-07-2000 el juez J. Ballesteros dictó sentencia ratificando la denuncia)", start: "1982-04-04"},
{id: "25-04-1982:_primer_encuentro_de_tro", content: "25-04-1982: primer encuentro de tropas argentinas y británicas en las Islas Georgias (Astiz se rindió sin combatir)", start: "1982-04-25"},
{id: "02-05-1982:_hundimiento_crucero_gra", content: "02-05-1982: hundimiento Crucero Gral. Belgrano", image:"../img/informacion.svg", link:"https://drive.google.com/open?id=1ukLaQ64dWtLDZELdON8ETPqUuy7K359g", start: "1982-05-02"},
{id: "20_al_21-05-1982:_desembarco_britan", content: "20 al 21-05-1982: desembarco británico en las Islas Malvinas", start: "1982-05-20"},
{id: "11_y_12-06-1982:_el_papa_juan_pablo", content: "11 y 12-06-1982: el Papa Juan Pablo II visitó Buenos Aires (después de visitar Gran Bretaña) ", start: "1982-06-11"},
{id: "14-06-1982:_el_gral._mario_b._menen", content: "14-06-1982: el Gral. Mario B. Menéndez firmó la capitulación de Argentina en Islas Malvinas (murieron 730 soldados argentinos)", start: "1982-06-14"},
{id: "01-07-1982:_cuarta_junta_militar_de", content: "01-07-1982: Cuarta Junta Militar de Gobierno (Teniente General Cristino Nicolaides) (hasta 10-12-1983). Ministro de Economía José María Dagnino Pastore (hasta 24-08-1982)", start: "1982-07-01"},
{id: "ago-1982:_estallo_la_crisis_de_la_d", content: "Ago-1982: estalló la \"crisis de la deuda\": México declaró la moratoria unilateral del pago de la deuda pública externa", start: "1982-08-02"},
{id: "25-08-1982:_ministro_de_economia_jo", content: "25-08-1982: Ministro de economía Jorge Wehbe (hasta 09-12-1983)", start: "1982-08-25"},
{id: "set-1982:_la_junta_militar_asume_pa", content: "Set-1982: la Junta Militar asume parcialmente responsabilidad en las violaciones a los DDHH, mediante documento", start: "1982-09-01"},
{id: "05-10-1982:_se_realizo_por_primera_", content: "05-10-1982: se realizó por primera vez un acto masivo por los DDHH (actividad prohibida) llamada \"Marcha por la Vida\"", start: "1982-10-05"},
{id: "16-12-1982:_la_multipartidaria_conv", content: "16-12-1982: la Multipartidaria convocó a la Marcha de la Civilidad (se pedían elecciones en 07-1983)", start: "1982-12-16"},
{id: "22-09-1983:_ley_de_amnistia_n_22.92", content: "22-09-1983: Ley de Amnistía (Nº 22.924)", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/17XKf1SpY-zkeUb4jtA_sO0qZgG3m1WIp/view?usp=sharing", start: "1983-09-23"},
{id: "25-10-1983:_invasion_a_granada", content: "25-10-1983: invasión a Granada", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1icM8c7M3IS6Fhgim6BaEwy2jL583P2dO/view?usp=sharing", start: "1983-10-25"},
{id: "30-10-1983:_elecciones_presidencial", content: "30-10-1983: elecciones presidenciales; fórmula vencedora la de la UCR: Alfonsín-Martínez", start: "1983-10-30"},
{id: "20-09-1984:_entrega_del_informe_de_", content: "20-09-1984: entrega del Informe de la CONADEP", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1fwOkJDVBq8cP_C08YgLORJIYMnWIyTYW/view?usp=sharing", start: "1984-09-20"},
{id: "29-11-1984:_la_guerra_que_no_fue...", content: "29-11-1984: la guerra que no fue...", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1v9etSFHMo0x4RFQLMmJyQ4eYj4mbYZpL/view?usp=sharing", start: "1984-11-29"},
{id: "26-04-1986:_accidente_de_chernobyl_", content: "26-04-1986: accidente de Chernobyl BIS", image:"../img/informacion.svg", link:"https://drive.google.com/file/d/1e75dfWaHfCGYKNyTnodsNehKRmvr1VGL/view?usp=sharing", start: "1986-04-26"},
{id: "fin_de_la_pariedad_oro-dolar", content: "1971-8: Fin de la pariedad oro-dolar", image:"../img/informacion.svg", link:"https://youtu.be/8-hHyPp-tuA", start: "1971-8"},
{id: "la_transicion_espanola_del_franquis", content: "1975-11-20: \"La transición española\" del Franquismo a la República", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=rCMsI9wi3yc", start: "1975-11-20"},
{id: "laudo_arbitral_sobre_el_diferendo_d", content: "1977-5: Laudo Arbitral sobre el diferendo del Beagle", image:"../img/informacion.svg", links:["https://youtu.be/uSBuQdBSjTw", "https://youtu.be/z8MOR9CzpAw"], start: "1977-5"},
{id: "visita_de_la_cidh_a_la_argentina", content: "1979-10: Visita de la CIDH a la Argentina ", image:"../img/informacion.svg", link:"https://youtu.be/gEVAfKqWv34", start: "1979-10"},
{id: "ley_22.278_-_regimen_penal_juvenil", content: "1980: Ley 22.278 - Régimen Penal Juvenil", image:"../img/informacion.svg", link:"https://www.lasleyesdeladictadura.com.ar/index.php?a=ReadArticle&article_id=1", start: "1980"},
{id: "muerte_del_expresidente_hector_camp", content: "1980-12-19: Muerte del Expresidente Héctor Cámpora ", image:"../img/informacion.svg", link:"https://elpais.com/diario/1980/12/20/internacional/346114814_850215.html", start: "1980-12-19"},
{id: "guerra_de_malvinas", content: "1982-4-2: Guerra de Malvinas", image:"../img/informacion.svg", link:"https://es.wikipedia.org/wiki/Guerra_de_las_Malvinas", start: "1982-4-2", end: "1982-6-14"},
{id: "desembarco_de_tropas_inglesas_en_ma", content: "1982-5-21: Desembarco de tropas inglesas en Malvinas", image:"../img/informacion.svg", link:"https://www.youtube.com/watch?v=A1fKHWwtF3Q", start: "1982-5-21"},
{id: "el_papa_juan_pablo_ii_visita_buenos", content: "1982-6-11: El Papa Juan Pablo II visita Buenos Aires ", image:"../img/informacion.svg", links:["https://youtu.be/4KJLedAvdOs", "https://viapais.com.ar/documentos-malvinas/1080608-el-primer-viaje-de-juan-pablo-ii-a-la-argentina-por-la-guerra-de-malvinas/"], start: "1982-6-11"},