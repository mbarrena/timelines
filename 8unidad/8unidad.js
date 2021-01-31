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
{id: "1976_16_set_la_noche_de_los_lapices", content: "1976 16 set La noche de los lápices", image:"../img/informacion.svg", link:"http://drive.google.com/uc?export=view&id=1g5Riimc1SUb-mCjGENeB3QwlowE4lq3_", start: new Date(1976,9,16)}
]);