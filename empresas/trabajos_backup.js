var items = new vis.DataSet([
{id: "ledesma", content: createItem("Ledesma","./img/ledesma.png",64,["https://drive.google.com/open?id=199_ink2tfQnP7mpJy3oU4IJ8JQ9xM3af"]), start: "1830-12-31"},
{id: "delfino", content: createItem("Delfino","./img/delfino.png",81,["http://drive.google.com/uc?export=view&id=1QwYdCD03b0z6x-PYtV9MVMOZBEjvV8os"]), start: "1838-04-19"},
{id: "siemens", content: createItem("Siemens","./img/siemens.png",114,["https://raw.githubusercontent.com/makobot-prod/timelines/gh-pages/img/siemens.png"]), start: "1847-10-12"},
{id: "ferrocarril_del_oeste", content: createItem("Ferrocarril del Oeste","0",0,["https://drive.google.com/open?id=0B8EJMhrdDQ3mWDRGZXlGM24ybzQ"]), start: "1857-08-27"},
{id: "ferrocarriles_argentinos", content: createItem("Ferrocarriles Argentinos","./img/ferrocarriles_argentinos.png",173,["http://drive.google.com/uc?export=view&id=11DnpXe_DKkjIequyoBtvStjXheJSQeis"]), start: "1863-01-01"},
{id: "semino", content: createItem("Semino","./img/semino.png",112,["https://drive.google.com/open?id=1gSn0ZAHKcAzaIjlT8raFHHvzPzvIAux5"]), start: "1865-07-02"},
{id: "laboratorios_casasco", content: createItem("Laboratorios Casasco","./img/laboratorios_casasco.png",225,["http://drive.google.com/uc?export=view&id=1_6y1di463U0bSCNV1IEAA9BsqDqw3rgg","https://drive.google.com/open?id=1YlLx3mKSvmpQdII7KnpZP7CnFVpJNuog"]), start: "1876-07-01"},
{id: "cgfsa", content: createItem("CGFSA","./img/cgfsa.png",128,["https://drive.google.com/open?id=1aLFuaDYv78PpA2ac3NLimQPR3W2_y8b2"]), start: "1877-04-10"},
{id: "aguila_saint", content: createItem("Aguila Saint","./img/aguila_saint.png",52,["https://drive.google.com/file/d/1Tu6WJccf0Mv2lhTLfrJL9wp_nLtFBwzI/view?usp=sharing"]), start: "1880-07-01"},
{id: "hesperdina", content: createItem("Hesperdina","./img/hesperdina.png",98,["https://drive.google.com/open?id=1BEpuZGRxC_jMZorOT844U1i_ksJ6XzqE"]), start: "1880-07-14"},
{id: "rigolleau", content: createItem("Rigolleau","./img/rigolleau.png",77,["https://drive.google.com/open?id=1TVmcBWVoxLagBQoPupx_clszfKyk12BF"]), start: "1882-03-25"},
{id: "fabrica_argentina_de_alpargatas_1", content: createItem("Fábrica Argentina de Alpargatas (1)","0",0,["https://drive.google.com/open?id=18Z6sNfTswZM45vVzMdFoQjTJyKX7pYkA"]), start: "1883-07-01"},
{id: "frigorifico_anglo", content: createItem("Frigorífico Anglo","0",0,["https://drive.google.com/open?id=1RyDin7_R-LJwk7uytRFn2v17DktwL4hl"]), start: "1883-07-01"},
{id: "bunge_y_born", content: createItem("Bunge y Born","./img/bunge_y_born.png",109,["https://drive.google.com/open?id=0B7iXzGtHLjVvUmRRWGpDbWw1dTg"]), start: "1884-07-01"},
{id: "alpargatas", content: createItem("Alpargatas","./img/alpargatas.png",106,["https://drive.google.com/open?id=1O9jsqaPcduQq4hcyB-j4U2A5_uPilS4d","https://drive.google.com/open?id=18Z6sNfTswZM45vVzMdFoQjTJyKX7pYkA","https://drive.google.com/open?id=1eAY7FMmt8iMdM3C4sSHRAx9Sq8pXkA4c","https://drive.google.com/open?id=1iV-vSbvNE8vCh3VgBXBoNs8mkNlQjAjr"]), start: "1885-07-01"},
{id: "quilmes", content: createItem("Quilmes","./img/quilmes.png",95,["https://drive.google.com/open?id=0B8EJMhrdDQ3meExBdUR1Y19PTFU"]), start: "1888-07-01"},
{id: "la_matrona", content: createItem("La Matrona","0",0,["https://drive.google.com/open?id=1a_RA3xxRO0O03EmWgwZkbzNsuSksgBms"]), start: "1889-07-01"},
{id: "grimoldi", content: createItem("Grimoldi","./img/grimoldi.png",177,["https://drive.google.com/open?id=14a28-5SlBVZp7yrTeC3ujHPy-BDPcYlL"]), start: "1895-07-01"},
{id: "cerro_negro", content: createItem("Cerro Negro","0",0,["https://drive.google.com/open?id=13F32pJ5eTuMHPWy0rjIG-LDGY7kU2cqt"]), start: "1896-05-27"},
{id: "british_american_tabacco", content: createItem("British American Tabacco","0",0,["https://drive.google.com/open?id=1scQY67zsafAaHCO3X4JLA3aP-Ke7Z0G7"]), start: "1898-07-01"},
{id: "pirelli", content: createItem("Pirelli","./img/pirelli.png",183,["https://drive.google.com/open?id=1NXNuRjTdjjGbpoasxINPkniQxp1PL3d3","https://drive.google.com/open?id=0B7iXzGtHLjVvRG1TZE9WNUZ0VDA"]), start: "1898-07-01"},
{id: "la_martona", content: createItem("La Martona","0",0,["https://drive.google.com/open?id=1iV-vSbvNE8vCh3VgBXBoNs8mkNlQjAjr"]), start: "1899-06-22"},
{id: "molinos_rio_de_la_plata_s.a.", content: createItem("Molinos Río de la Plata S.A.","0",0,["https://drive.google.com/open?id=1usBKqJM-a0v_uGlTldFssP8r5EheyX9q"]), start: "1899-07-05"},
{id: "la_cantabrica", content: createItem("La Cantábrica","0",0,["https://drive.google.com/open?id=1lYOO4AJZ_X54X6466_PIQTMxtGGQZdWp"]), start: "1902-06-17"},
{id: "molinos_rio_de_la_plata", content: createItem("Molinos Río de la Plata","0",0,["https://drive.google.com/open?id=1-E0uhnmHKkmHwEHzcuQYL7pI_jfngDop"]), start: "1902-07-01"},
{id: "banco_galicia", content: createItem("Banco Galicia","./img/banco_galicia.png",165,["https://drive.google.com/open?id=1C6a-F-g1jisZpTWH2xzbiYQ_cKszs6at"]), start: "1905-05-31"},
{id: "swift", content: createItem("Swift","./img/swift.png",116,["https://drive.google.com/open?id=1q67FLMktPqw7ObwgeEPqsSvO0_9e2ZfA"]), start: "1907-07-01"},
{id: "fravega", content: createItem("Frávega","./img/fravega.png",264,["https://drive.google.com/open?id=1tB6J7GTQBeyciw8yS1LftS7KTBxbyTBe"]), start: "1910-01-02"},
{id: "bayer_argentina_s.a.", content: createItem("Bayer Argentina S.A.","./img/bayer_argentina_s.a..png",48,["https://drive.google.com/open?id=0B8EJMhrdDQ3mUDJuSHJYR2hoTGs"]), start: "1911-01-01"},
{id: "ferrum", content: createItem("Ferrum","./img/ferrum.png",106,["https://drive.google.com/open?id=1Aj4KuSFYSr9aGXAPK4qCVUpvrJ9jaIv4","https://drive.google.com/open?id=0B8EJMhrdDQ3mczllSk93dXNYeFk"]), start: "1911-01-01"},
{id: "siam", content: createItem("SIAM","./img/siam.png",137,["https://drive.google.com/open?id=1BHE8YRbEUozThMHlAFNIEMBlkmVa9C3H","https://drive.google.com/open?id=0B8EJMhrdDQ3mVEx1VXV6NDg2a2c"]), start: "1911-07-01"},
{id: "terrabusi", content: createItem("Terrabusi","./img/terrabusi.png",124,["https://drive.google.com/open?id=1eADYZzqXvf8P68xKsyBkJFj4km_YWz9X"]), start: "1911-07-02"},
{id: "cerveza_schneider", content: createItem("Cerveza Schneider","./img/cerveza_schneider.png",77,["https://drive.google.com/open?id=1YP1IbE70a15WMmml2gZymbezJEUPfxAu"]), start: "1912-07-02"},
{id: "obras_sanitarias_de_la_nacion", content: createItem("Obras Sanitarias de la Nación","./img/obras_sanitarias_de_la_nacion.png",48,["https://drive.google.com/open?id=1GvftlyEuAHelMdXfed9dfQxnT_dDXM7a"]), start: "1912-07-18"},
{id: "bgh", content: createItem("BGH","./img/bgh.png",121,["https://drive.google.com/open?id=13MbHXXiS8puuYht099DMIvIyX5kgvAIj"]), start: "1913-01-23"},
{id: "ford", content: createItem("FORD","./img/ford.png",127,["https://drive.google.com/open?id=0B8EJMhrdDQ3mYi1ONTlIMDlGMTA"]), start: "1913-07-01"},
{id: "shell", content: createItem("Shell","./img/shell.png",48,["https://drive.google.com/open?id=1xLgrgtG6l0tKytdc9LSr1qamx77fBWuS","https://drive.google.com/file/d/1CvHmkyFtR1U6zZELLsGXFQ-WH7wQabKN/view?usp=sharing"]), start: "1914-09-01"},
{id: "firestone", content: createItem("Firestone","./img/firestone.png",192,["https://drive.google.com/open?id=1sF1gIvudNCtSpbRDy3f2HSFnt_CHpV0A"]), start: "1915-04-29"},
{id: "goodyear", content: createItem("Goodyear","./img/goodyear.png",160,["https://drive.google.com/open?id=1mOJETHG0gvzPYQ5EP-XNxEnVxM4IOgB1"]), start: "1915-07-02"},
{id: "kodak", content: createItem("Kodak","./img/kodak.png",52,["https://drive.google.com/open?id=0B8EJMhrdDQ3mdGp3ZWFaTVJSbW8"]), start: "1915-11-09"},
{id: "longvie", content: createItem("Longvie","./img/longvie.png",153,["https://drive.google.com/open?id=1-RvkWiEikIQSqM6c6lnp4nbtdofmeA8O"]), start: "1918-07-01"},
{id: "fiat", content: createItem("FIAT","./img/fiat.png",48,["https://drive.google.com/open?id=0B8EJMhrdDQ3mSzIzTlZMOVNoTVE"]), start: "1919-07-01"},
{id: "roemmers", content: createItem("Roemmers","./img/roemmers.png",74,["https://drive.google.com/open?id=1MiY1jfg4PzxLo3ScDY0Zn1Ay0CD8Es9k"]), start: "1921-01-29"},
{id: "ypf", content: createItem("YPF","./img/ypf.png",122,["https://drive.google.com/open?id=0B8EJMhrdDQ3mZ1J2Z3NuNzB4d2c","https://drive.google.com/open?id=0B8EJMhrdDQ3mdkVZLXFvdUIydFU","https://drive.google.com/open?id=1eWPOkfsSauR6RoF3ad4KUr4viEfamV0M"]), start: "1922-07-01"},
{id: "frigorifico_lisandro_de_la_torre", content: createItem("Frigorífico Lisandro de la Torre","0",0,["https://drive.google.com/open?id=0B8EJMhrdDQ3mNGNudDZrbGcwYWc","https://drive.google.com/open?id=1ovO_Pl59W3G4-fz19nmzYDEctFDV3wfx"]), start: "1923-10-06"},
{id: "taragui,_estancias_las_marias", content: createItem("Taragüi, Estancias Las Marías","./img/taragui,_estancias_las_marias.png",184,["https://drive.google.com/open?id=10frKwqpEmj_hpZpPgX5vfhOpln_ta3-f"]), start: "1924-02-08"},
{id: "general_motors", content: createItem("General Motors","./img/general_motors.png",48,["https://drive.google.com/open?id=0B8EJMhrdDQ3mVFZVbWo0Y083clE","https://drive.google.com/open?id=1bzR0hiY-FCRhtHwMcA0JL6jiy3sKvVr_"]), start: "1925-03-01"},
{id: "felfort", content: createItem("Felfort","./img/felfort.png",84,["https://drive.google.com/open?id=11DjrgLOOYFAnbPv0bsUjNFAQpBlp82c8","https://drive.google.com/open?id=1UFbhxA-cbIsXwIpsGvYvM4MxCZNmW06G"]), start: "1926-07-01"},
{id: "loma_negra", content: createItem("Loma Negra","./img/loma_negra.png",55,["https://drive.google.com/open?id=0B8EJMhrdDQ3mbGVpdnJRSVoyWFk"]), start: "1926-08-05"},
{id: "colgate_-_palmolive", content: createItem("Colgate - Palmolive","./img/colgate_-_palmolive.png",189,["https://drive.google.com/open?id=0B8EJMhrdDQ3maGh3WTZfLUM0MXc"]), start: "1927-07-01"},
{id: "rca_victor", content: createItem("RCA Victor","./img/rca_victor.png",67,["http://drive.google.com/uc?export=view&id=1EScNxiKKiPondMsqfUzBrZU61mDwCRXL"]), start: "1929-03-11"},
{id: "la_serenisima", content: createItem("La Serenísima","./img/la_serenisima.png",124,["https://drive.google.com/open?id=0B8EJMhrdDQ3mNzEyc2FtdWtfaDg"]), start: "1929-10-29"},
{id: "johnson_&amp;_johnson", content: createItem("Johnson &amp; Johnson","./img/johnson_&amp;_johnson.png",228,["https://drive.google.com/open?id=0B8EJMhrdDQ3mRVZpYmRJRnVHTkk"]), start: "1931-01-01"},
{id: "molina_canuelas", content: createItem("Molina Cañuelas","0",0,["https://drive.google.com/open?id=1THLpLwwre3eqJszQuKHCyxHKp6ZjZ-zv"]), start: "1931-07-01"},
{id: "philco", content: createItem("PHILCO","./img/philco.png",185,["https://drive.google.com/open?id=0B8EJMhrdDQ3mbjRkNlRCYVhUZ00"]), start: "1931-07-01"},
{id: "bago", content: createItem("Bagó","./img/bago.png",130,["https://drive.google.com/open?id=1l-w3giVJlfSkPvAAcpnydss9twhr79gh"]), start: "1934-03-17"},
{id: "phillips", content: createItem("Phillips","./img/phillips.png",260,["https://drive.google.com/open?id=1iPmDi9tOJMCklFA-2kyRfaINABvoe_Rw"]), start: "1935-06-19"},
{id: "milkaut", content: createItem("Milkaut","./img/milkaut.png",76,["https://drive.google.com/open?id=17ljcEOJPXKEK99rxAKftgQA6i2TuDsDP","http://drive.google.com/uc?export=view&id=1SigwBBskK15uyCd6xMB-_bLuGWkaLnkQ"]), start: "1935-10-09"},
{id: "sancor", content: createItem("SanCor","./img/sancor.png",71,["https://drive.google.com/open?id=1YweKcCLWUf85lH0J4yHrXC2PpAV68AF2"]), start: "1940-07-02"},
{id: "fernet_branca", content: createItem("Fernet Branca","./img/fernet_branca.png",37,["https://drive.google.com/open?id=1dI3VhjW63TkZTKc0Vw5oSTwJmSIs_h5V"]), start: "1941-04-15"},
{id: "direccion_general_de_fabricaciones_militares", content: createItem("Dirección General de Fabricaciones Militares","./img/direccion_general_de_fabricaciones_militares.png",48,["https://drive.google.com/open?id=0B8EJMhrdDQ3mR1Q3UE5RRXcyVkk"]), start: "1941-07-01"},
{id: "acindar", content: createItem("Acindar","./img/acindar.png",125,["https://drive.google.com/open?id=19Buev3GfguiVSgTuzwRy6ZBMHfsgCQhF"]), start: "1942-07-01"},
{id: "coca-cola", content: createItem("Coca-Cola","./img/coca-cola.png",144,["https://drive.google.com/open?id=0B8EJMhrdDQ3mcVUwcEZKOFhOakE"]), start: "1942-08-03"},
{id: "altos_hornos_zapla", content: createItem("Altos Hornos Zapla","./img/altos_hornos_zapla.png",48,["https://drive.google.com/open?id=1SXIhpEwbJjLWVBdNtiHfAB6M6Cse48D2"]), start: "1943-01-23"},
{id: "guaymallen", content: createItem("Guaymallén","./img/guaymallen.png",169,["https://drive.google.com/open?id=1AqwEYSr8ZgOfZ3XtptzJQkEo5T_opLMv"]), start: "1945-06-16"},
{id: "techint", content: createItem("Techint","./img/techint.png",36,["https://drive.google.com/open?id=1SH6LMpkDWgh5jWa_RDmvP0dvLO9nGY7c"]), start: "1945-07-02"},
{id: "gas_del_estado", content: createItem("Gas del Estado","./img/gas_del_estado.png",48,["https://drive.google.com/open?id=1w_tpMjqr1RRs4sKd4UP0z7ehgqp2o65k"]), start: "1946-07-01"},
{id: "entel", content: createItem("Entel","./img/entel.png",180,["https://drive.google.com/open?id=1wmTFKFhHsJHCTC8LG2CSkGme7if4eyvt","https://drive.google.com/open?id=0B7iXzGtHLjVvUUZOblJUTjg1M0E"]), start: "1946-07-02"},
{id: "havanna", content: createItem("Havanna","./img/havanna.png",36,["https://drive.google.com/open?id=1LEwYd_qyKJ0aGmEXjJeNWVDMAFlqZeIK","https://drive.google.com/open?id=1OdG3vmdiPnNOL_Zjo-TinXCEe01WUuMC"]), start: "1948-07-01"},
{id: "pritty", content: createItem("Pritty","./img/pritty.png",100,["http://drive.google.com/uc?export=view&id=1MoTjheihOTGUjiuF5KtF9oB3FS3Lv6pp"]), start: "1949-01-03"},
{id: "aerolineas_argentinas", content: createItem("Aerolíneas Argentinas","./img/aerolineas_argentinas.png",84,["https://drive.google.com/open?id=1kBAuj3aDWLTH0uiqIEYsxxfdta3LLcQ2","https://drive.google.com/open?id=0B8EJMhrdDQ3md0VDektWUEZTZGM"]), start: "1949-05-14"},
{id: "tenaris", content: createItem("Tenaris","./img/tenaris.png",186,["https://drive.google.com/open?id=1oJ9tGwPL1qmzJVkSe6doKexEBlTO8nvb"]), start: "1950-07-01"},
{id: "arcor", content: createItem("Arcor","./img/arcor.png",72,["https://drive.google.com/open?id=1xDdZuAehVSO_ap_SBv6IfrjMEE6wZzq5","https://drive.google.com/open?id=0B8EJMhrdDQ3mcV9xZU01RWRvS1U","https://drive.google.com/open?id=1EKUoEYoZSjKcGjl2NQXIgDdDH990r3QY","https://drive.google.com/open?id=1Acbz_DsXRClgsgIw2e9Ql8x45kuruYpA"]), start: "1951-07-05"},
{id: "television_publica", content: createItem("Televisión Pública","./img/television_publica.png",48,["https://drive.google.com/open?id=12prcL_QIAAhL7PlrljBthGO3zkzaN4Gj"]), start: "1951-10-17"},
{id: "embalse_de_rio_hondo", content: createItem("Embalse de Río Hondo","0",0,["https://drive.google.com/open?id=1CBC2RNLjpO1SmIoFR-Shf-OBcKd1SBqV"]), start: "1952-07-01"},
{id: "astillero_rio_santiago", content: createItem("Astillero Río Santiago","./img/astillero_rio_santiago.png",61,["https://drive.google.com/open?id=0B8EJMhrdDQ3mazhNQUlxaW1xZUk"]), start: "1953-06-15"},
{id: "industrias_kaiser_argentina_s.a.", content: createItem("Industrias Kaiser Argentina S.A.","./img/industrias_kaiser_argentina_s.a..png",47,["https://drive.google.com/open?id=1hcEhub1Rx06E6b4_mdHSCiFyjm5oiF34"]), start: "1954-07-01"},
{id: "dique_frontal_rio_hondo", content: createItem("Dique Frontal Río Hondo","0",0,["http://drive.google.com/uc?export=view&id=1_3NivR77ws05odgPFqyMiQu3tKC9qMQQ"]), start: "1956-01-01"},
{id: "correo_oca", content: createItem("Correo OCA","./img/correo_oca.png",119,["https://drive.google.com/open?id=11H786v-lXikjDaOsImqEgTWVP0vhHhk4"]), start: "1957-07-01"},
{id: "flecha_bus", content: createItem("Flecha Bus","./img/flecha_bus.png",92,["https://drive.google.com/open?id=1vUDNhBqYpju569KhU_IvplafBNl-ZCCy"]), start: "1959-01-01"},
{id: "carrefour", content: createItem("Carrefour","./img/carrefour.png",57,["http://drive.google.com/uc?export=view&id=1e8_KfRljs7BemIsB4CuoQAI8lSCuf_6r"]), start: "1959-07-01"},
{id: "osle", content: createItem("Oslé","./img/osle.png",59,["https://drive.google.com/open?id=1nkWdDKQPO4y7wjdluBcjBk5-sZXR1Thl"]), start: "1959-10-17"},
{id: "peugeot", content: createItem("Peugeot","./img/peugeot.png",64,["https://drive.google.com/open?id=1RqaCkY4w0kTwPjt4pWWqV5xIEnneoXGz"]), start: "1960-07-01"},
{id: "elma", content: createItem("ELMA","0",0,["https://drive.google.com/open?id=13WjYcjiIffg90rLUnvCJ7pzkjkDlos8n"]), start: "1960-09-30"},
{id: "canal_13", content: createItem("Canal 13","./img/canal_13.png",47,["https://drive.google.com/open?id=1wmuvimDy8IlIZQjRwbWrI-nQ8xe9zEOP"]), start: "1960-10-02"},
{id: "telefe", content: createItem("Telefe","./img/telefe.png",83,["https://drive.google.com/open?id=1ukC7zbLvLkNxInmLd8zGTKln2UyqTSoy"]), start: "1961-07-22"},
{id: "arcillex", content: createItem("Arcillex","./img/arcillex.png",70,["http://drive.google.com/uc?export=view&id=1Jqluudl5SMGWMYqfzPVZG8LKI10hvx94"]), start: "1962-10-01"},
{id: "loreal", content: createItem("LOréal","./img/loreal.png",122,["https://drive.google.com/open?id=1E6Pyaoc_ZEd-3O2-X-1fpDkV4O6plPcc"]), start: "1963-07-01"},
{id: "chocon-cerros_colorados", content: createItem("Chocón-Cerros colorados","0",0,["https://drive.google.com/open?id=165rDMPPxrrvzgQfRlyfvWGTmJOHz0AXE"]), start: "1967-01-01"},
{id: "central_hidroelectrica_pueblo_viejo", content: createItem("Central Hidroeléctrica Pueblo Viejo","0",0,["https://drive.google.com/open?id=1INTy8ACQlE9ffNPjKx_GZHSzuEVyZZWJ","https://drive.google.com/open?id=1SDJAeATiFZ_ZGjjT-uYweOk575wCA0Jt"]), start: "1967-07-01"},
{id: "don_satur", content: createItem("Don Satur","./img/don_satur.png",87,["https://drive.google.com/open?id=1cS0WIK9fsz-IQO690vFz-s_tLKonNSi_"]), start: "1967-07-01"},
{id: "banco_santander_rio", content: createItem("Banco Santander Río","./img/banco_santander_rio.png",229,["https://drive.google.com/open?id=12zNFh9oFt-pmxGqWEDHvIujFQbymgnfe"]), start: "1968-05-14"},
{id: "freddo", content: createItem("Freddo","./img/freddo.png",79,["https://drive.google.com/open?id=1Tx7Ko9K8Se3n1SbU6GJWmDVk_Qy_qDsC"]), start: "1969-03-01"},
{id: "corven", content: createItem("Corven","0",0,["https://drive.google.com/open?id=1JNAmFQ8ANvrw72jye_vI_2j9wKzAYlmy"]), start: "1969-07-01"},
{id: "aluar", content: createItem("ALUAR","./img/aluar.png",47,["https://drive.google.com/open?id=0B8EJMhrdDQ3mTmpMQnZJbHdHMTA"]), start: "1970-01-02"},
{id: "autopistas_de_cacciatore", content: createItem("Autopistas de Cacciatore","0",0,["http://drive.google.com/uc?export=view&id=1BFdCY8gDbFrnQ3XxsvpPcvWhovACk_jN"]), start: "1970-07-01"},
{id: "correo_argentino", content: createItem("Correo Argentino","./img/correo_argentino.png",131,["https://drive.google.com/open?id=0B8EJMhrdDQ3mZC1HNDRJS05OdVk"]), start: "1972-05-23"},
{id: "sheraton", content: createItem("Sheraton","./img/sheraton.png",57,["https://drive.google.com/open?id=1r4yPJwjbO_gn3BKoGnjcJoSSfRAw0UpS"]), start: "1972-08-25"},
{id: "represa_el_chocon", content: createItem("Represa el Chocón","0",0,["https://drive.google.com/open?id=1tHxWd3DfclAJFyEBgPQvxikg6CFgJHnH"]), start: "1973-01-01"},
{id: "karavell", content: createItem("Karavell","./img/karavell.png",136,["https://drive.google.com/open?id=1q094auaOIBYvKg8Z2kWFznYW51pqEb2u"]), start: "1973-07-02"},
{id: "represa_yacyreta", content: createItem("Represa Yacyretá","./img/represa_yacyreta.png",48,["https://drive.google.com/open?id=1-tw1--_WdgUdDKh4w1afjbc3-aZPFQs2"]), start: "1973-12-03"},
{id: "central_nuclear_atucha", content: createItem("Central Nuclear Atucha","0",0,["https://drive.google.com/open?id=1dFDRzbEeyXULmPsYYj2ofbHRUj__BeYY"]), start: "1974-05-21"},
{id: "pumper_nic", content: createItem("Pumper Nic","./img/pumper_nic.png",48,["https://drive.google.com/file/d/1D5HA1zpejQCmtokktpoLukglCZUWNg9B/view?usp=sharing"]), start: "1974-07-01"},
{id: "metac", content: createItem("Metac","./img/metac.png",48,["http://drive.google.com/uc?export=view&id=1I2ZVQpABsNu1LZdO-DhAp4resALvjjc_"]), start: "1974-07-01"},
{id: "renault_argentina", content: createItem("Renault Argentina","./img/renault_argentina.png",48,["https://drive.google.com/open?id=1ALwIuPdH5ut-ILnXHZpku-GCNzBLk9P3","https://drive.google.com/open?id=1XRJjjnRIagDAnJnAtHTV51c_pTxlBwHW"]), start: "1975-07-02"},
{id: "banco_credicoop", content: createItem("Banco Credicoop","./img/banco_credicoop.png",96,["http://drive.google.com/uc?export=view&id=1djB1zlUlT2JO3aROmiyRov7CeraiBWxs"]), start: "1977-02-14"},
{id: "banco_macro", content: createItem("Banco Macro","./img/banco_macro.png",202,["https://drive.google.com/open?id=10ZgKcvmdwAZjS-BgwvUAJ6URMg5-_2BU","https://drive.google.com/open?id=165GAiCe5jB_0dKAs7N-OcanK8SRDD1v4"]), start: "1978-09-04"},
{id: "dia", content: createItem("Día","./img/dia.png",47,["https://drive.google.com/open?id=1ZSD41KuTC5EVC35L3kw29On0-OkXT5sW"]), start: "1979-07-24"},
{id: "cablevision", content: createItem("Cablevisión","./img/cablevision.png",109,["https://drive.google.com/open?id=1Nu7VZa6xBTKQ3Yt5eTg3SolfMopFhxiY"]), start: "1981-06-24"},
{id: "banco_comafi", content: createItem("Banco Comafi","./img/banco_comafi.png",37,["https://drive.google.com/open?id=1c931UapwrSAMf2FBSqVLFwPc5h7rDaT0"]), start: "1985-07-02"},
{id: "central_hidroelectrica_rio_grande", content: createItem("Central Hidroeléctrica Río Grande","0",0,["https://drive.google.com/open?id=0B8EJMhrdDQ3mQTN6M3pRYVAta1E"]), start: "1986-02-14"},
{id: "arcos_dorados_s.a.", content: createItem("Arcos Dorados S.A.","./img/arcos_dorados_s.a..png",50,["https://drive.google.com/open?id=0B8EJMhrdDQ3mRWQ1MHlGVmFOS1E"]), start: "1986-07-01"},
{id: "coto", content: createItem("Coto","./img/coto.png",142,["https://drive.google.com/open?id=1t1LFjFRIb9-HQbzbmGYE4vAALzVb1USo"]), start: "1987-05-15"},
{id: "movicom", content: createItem("Movicom","./img/movicom.png",270,["https://drive.google.com/open?id=1YKGlmHz1mgOoSquBLcXegCfxn1V69r83"]), start: "1989-07-01"},
{id: "telefonica", content: createItem("Telefónica","./img/telefonica.png",175,["http://drive.google.com/uc?export=view&id=154V2xSaI_6wiIGGVPDqiCNaDn5uDqWKR"]), start: "1990-04-24"},
{id: "telecentro", content: createItem("Telecentro","./img/telecentro.png",48,["https://drive.google.com/open?id=1VG9R7KyIoFlPyW-mxX6gnDvxyPMpFDIs"]), start: "1990-07-01"},
{id: "edenor", content: createItem("Edenor","./img/edenor.png",161,["https://drive.google.com/open?id=1foBYymplJTh6b79IQBWHs9FMr7bNSVlE"]), start: "1992-05-15"},
{id: "unsam", content: createItem("UNSAM","./img/unsam.png",102,["https://drive.google.com/open?id=0B8EJMhrdDQ3mdUZFOEpCbTZUeVE"]), start: "1992-06-10"},
{id: "motomel", content: createItem("Motomel","./img/motomel.png",105,["https://drive.google.com/open?id=1CHM0aB9EH_XA9m0hi2jyB3ewC09e42_C"]), start: "1992-07-01"},
{id: "pepsico_argentina", content: createItem("Pepsico Argentina","./img/pepsico_argentina.png",71,["https://drive.google.com/open?id=12rfKQSHYiPtNxNZ2Rv6SynecwxiLx0Bm"]), start: "1993-07-01"},
{id: "toyota", content: createItem("Toyota","./img/toyota.png",48,["http://drive.google.com/uc?export=view&id=1F1pysA2mWyAzfboRI7eMGBW6ZCLlneyY"]), start: "1994-12-12"},
{id: "farmacity", content: createItem("FARMACITY","./img/farmacity.png",198,["https://drive.google.com/file/d/1uY8w85GNc6ycTxb_uyDXP3alWBofrhjX/view?usp=sharing"]), start: "1997-01-01"},
{id: "ampliacion_av._general_paz", content: createItem("Ampliación Av. General Paz","0",0,["https://drive.google.com/open?id=0B8EJMhrdDQ3mRHplMVJJSUpYVlk"]), start: "1997-07-01"},
{id: "despegar", content: createItem("Despegar","./img/despegar.png",187,["https://drive.google.com/open?id=1IqHMRPtku1pS3GSbNTm_JkKlBeKJVmQR"]), start: "1999-07-21"},
{id: "mercado_libre", content: createItem("Mercado Libre","./img/mercado_libre.png",67,["https://drive.google.com/open?id=1f3Lp0KRabrtoNcSskCuInGFgUJg6HKZS"]), start: "1999-08-03"},
{id: "hilton", content: createItem("Hilton","./img/hilton.png",138,["https://drive.google.com/open?id=1zgoEI_bOzsuhCwsG7DQHAeG7SjNcX01y"]), start: "2000-05-01"},
{id: "grido", content: createItem("Grido","./img/grido.png",92,["https://drive.google.com/open?id=1kezYZa3CW5Z8AlnHZKw9VyM7oW5NwCOM"]), start: "2001-07-24"},
{id: "mostaza", content: createItem("Mostaza","./img/mostaza.png",48,["http://drive.google.com/uc?export=view&id=1GBORt1Nmb0OgAaQL8aYUPHhJDf2q642p"]), start: "2001-12-13"},
{id: "crocs", content: createItem("Crocs","./img/crocs.png",48,["https://drive.google.com/open?id=1-plgzvofPrLNTWzayfSZIM_5OoUav65K"]), start: "2002-07-01"},
{id: "pampa_energia", content: createItem("Pampa energía","./img/pampa_energia.png",165,["http://drive.google.com/uc?export=view&id=1a0dDnGKUF1dS-GX_XVDqq56VXNc2pCe-"]), start: "2003-07-01"},
{id: "manaos", content: createItem("Manaos","./img/manaos.png",74,["http://drive.google.com/uc?export=view&id=1kG9RZ_pnvC3CO6XZEiqLO4om2xXZS-el"]), start: "2004-09-02"},
{id: "cti_movil_-_claro_argentina", content: createItem("CTI Móvil - Claro Argentina","./img/cti_movil_-_claro_argentina.png",63,["https://drive.google.com/open?id=1rYPMSQRHGSHSWpcwFAHfMBncKBpQA-Bh"]), start: "2008-02-12"},
{id: "paseo_bajo_nivel_de_villa_ballester", content: createItem("Paseo Bajo nivel de Villa Ballester","0",0,["https://drive.google.com/open?id=1qSE_tm-IjfR2EBam3qU2kaUapIaRyDS8"]), start: "2019-01-01"},{id: "llao_llao_hotel_&_resort_golf-spa", content: createItem("Llao Llao Hotel & Resort Golf-Spa","./img/llao_llao_hotel_&_resort_golf-spa.png",55,["https://drive.google.com/file/d/1C7i8-12lf2cG5nkK1toJ6DLoz8r_9MjS/view?usp=drivesdk"]), start: "2020-9-27"},
{id: "la_paulina", content: createItem("La Paulina ","./img/la_paulina.png",48,["https://drive.google.com/file/d/1PL5rrj5FxHQfMoMHsT00dkGnCgdAVKda/view?usp=drivesdk"]), start: "1921-6-8"},
{id: "marolio", content: createItem("Marolio ","./img/marolio.png",89,["https://drive.google.com/file/d/1PI-JZWnAGplNZPgQuZECYs2PxV3uGOxm/view?usp=drivesdk"]), start: "1950-1-1"},
{id: "cafe_tortoni", content: createItem("Cafe Tortoni","./img/cafe_tortoni.png",134,["https://drive.google.com/file/d/1GdkkGuiUMhfZrSweH8ZnibQZpCc82o5A/view?usp=drivesdk"]), start: "1858-6-1"},
{id: "pizzini", content: createItem("Pizzini","./img/pizzini.png",48,["https://drive.google.com/file/d/10zAfBOqmS4s0BoeDtpvH2u90RHUBV-XZ/view?usp=drivesdk"]), start: "1955-1-1"},
{id: "la_virginia", content: createItem("La Virginia","./img/la_virginia.png",79,["https://drive.google.com/file/d/1p96yyX2KoC-LnAplWRagG5mV1o1XKHMP/view?usp=drivesdk"]), start: "1915-11-29"},
{id: "la_cachuera", content: createItem("La Cachuera","./img/la_cachuera.png",45,["https://drive.google.com/file/d/1-wk9heUUpr3T4hOkNyabDqBASnhXYzrG/view?usp=drivesdk"]), start: "1901-6-8"},
{id: "segba_servicios_electricos_del_gran_buenos_aires", content: createItem("SEGBA (Servicios Eléctricos del Gran Buenos Aires)","./img/segba_servicios_electricos_del_gran_buenos_aires.png",76,["https://drive.google.com/file/d/19idXKDm4ZOf5QMdhoZ_h766owWTzynyW/view?usp=drivesdk"]), start: "1958-10-1"},
{id: "volkswagen", content: createItem("Volkswagen","./img/volkswagen.png",76,["https://drive.google.com/file/d/1yAGqeqnvtRvd7Zfq-HWKKGoxvqmjV7gD/view?usp=drivesdk"]), start: "1937-5-28"},
{id: "hotel_alvear_palace", content: createItem("Hotel Alvear Palace","./img/hotel_alvear_palace.png",48,["https://drive.google.com/file/d/1NHDqKt05jC-D07PAuMYOVsshKab1E8li/view?usp=drivesdk"]), start: "1932-1-1"},{id: "impa", content: createItem("IMPA","0",0,["https://drive.google.com/file/d/1NaqJXiVPlHAJy6TfntmdghZIeY8T6IFX/view?usp=drivesdk"]), start: "1941-7-1"},
{id: "burger_king", content: createItem("BURGER KING","./img/burger_king.png",70,["https://drive.google.com/file/d/1qhR9npbptOTboai8PlQsTi4RvE0rFxRB/view?usp=drivesdk"]), start: "1989-6-8"},
{id: "red_federal_de_fibra_optica_argentina", content: createItem("Red Federal de Fibra optica Argentina","0",0,["https://drive.google.com/file/d/1A2EekXqDxUTjQPmk2oZ3AYxmYhaYcxA_/view?usp=drivesdk"]), start: "2010-4-12"},
{id: "via_bariloche", content: createItem("Vía Bariloche","./img/via_bariloche.png",254,["https://drive.google.com/file/d/1dC3O9uvMoCykJmsYssRl4ricX4GBt2pC/view?usp=drivesdk"]), start: "1970-1-1"},
{id: "natura", content: createItem("Natura","./img/natura.png",57,["https://drive.google.com/file/d/1EQq803ua9UXJLAvw5Vx79_AzC3lAQ1_q/view?usp=drivesdk"]), start: "1969-8-1"},
{id: "cerveza_antares", content: createItem("Cerveza Antares","./img/cerveza_antares.png",79,["https://drive.google.com/file/d/1j61rGu0jMEk2hRmedas4YqJIFoc8GguS/view?usp=drivesdk"]), start: "1998-5-24"},
{id: "represa_salto_grande", content: createItem("Represa Salto Grande","./img/represa_salto_grande.png",146,["https://drive.google.com/file/d/13jawcAoq5n4GaOhp2z7tTZb3kX6anRlp/view?usp=drivesdk"]), start: "1983-3-27"},
{id: "complejo_hidroelectrico_nestor_kirchner_jorge_cepernic", content: createItem("Complejo Hidroelectrico Nestor Kirchner Jorge Cepernic","0",0,["https://drive.google.com/file/d/1u-rWDb6Cb6vUNK4B1zG5GvBKPOOBMeOl/view?usp=drivesdk"]), start: "2008-4-14"},
{id: "tecnopolis", content: createItem("Tecnópolis ","./img/tecnopolis.png",85,["https://drive.google.com/file/d/1_qgAseor04wWZ1qj6DZQ0wst30F1qpgT/view?usp=drivesdk"]), start: "2011-7-14"},{id: "vcc", content: createItem("VCC","./img/vcc.png",120,["https://drive.google.com/file/d/1cDgEnHOU7oacU4NAqxOhxS9y9SRfK-sz/view?usp=drivesdk"]), start: "1982-12-1"},{id: "pan_american_energy", content: createItem("Pan American Energy","./img/pan_american_energy.png",83,["https://drive.google.com/file/d/1CeRnrwAxqa7Y9VQk56EvIefkwTulNrUF/view?usp=drivesdk"]), start: "1997-11-13"}
]);