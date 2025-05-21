// Datos de platos peruanos
const platosPeruanos = [
  {
    id: 1,
    nombre: "Ceviche",
    categoria: "entrada",
    descripcion: "El plato bandera del Perú, preparado con pescado fresco marinado en limón.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498928/ceviche_klf6yy.jpg",
    ingredientes: [
      "500g de pescado blanco fresco (corvina, lenguado o mero)",
      "1 cebolla roja cortada en juliana",
      "2 ajíes limo picados",
      "1 ají amarillo picado",
      "10-12 limones (para el jugo)",
      "1 rama de cilantro picado",
      "1 diente de ajo molido",
      "Sal y pimienta al gusto",
      "Camote cocido",
      "Choclo cocido",
      "Lechuga",
    ],
    preparacion: [
      "Cortar el pescado en cubos de 2 cm aproximadamente.",
      "En un bowl, mezclar el pescado con el ajo molido, sal y pimienta.",
      "Exprimir los limones y agregar el jugo al pescado.",
      "Añadir la cebolla, el ají limo y el ají amarillo.",
      "Mezclar bien y dejar reposar por 3-5 minutos.",
      "Agregar el cilantro picado y mezclar nuevamente.",
      "Servir inmediatamente acompañado de camote, choclo y lechuga.",
    ],
  },
  {
    id: 2,
    nombre: "Lomo Saltado",
    categoria: "principal",
    descripcion: "Deliciosa fusión de la cocina peruana y china, con carne de res salteada con verduras.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499014/lomo_bllwve.jpg",
    ingredientes: [
      "500g de lomo de res cortado en tiras",
      "2 cebollas rojas cortadas en gajos",
      "2 tomates cortados en gajos",
      "2 ajíes amarillos cortados en tiras",
      "3 dientes de ajo picados",
      "1/4 taza de sillao (salsa de soya)",
      "2 cucharadas de vinagre tinto",
      "1/2 taza de cilantro picado",
      "Aceite vegetal",
      "Sal y pimienta al gusto",
      "500g de papas amarillas",
      "2 tazas de arroz cocido",
    ],
    preparacion: [
      "Freír las papas cortadas en bastones y reservar.",
      "En un wok o sartén grande, calentar aceite a fuego alto.",
      "Saltear el ajo y el ají amarillo por unos segundos.",
      "Agregar la carne y saltear hasta que esté dorada.",
      "Añadir la cebolla y saltear por 1 minuto más.",
      "Incorporar el tomate y saltear brevemente.",
      "Agregar el sillao y el vinagre, mezclar bien.",
      "Sazonar con sal y pimienta al gusto.",
      "Añadir el cilantro picado y mezclar.",
      "Servir inmediatamente con arroz blanco y las papas fritas.",
    ],
  },
  {
    id: 3,
    nombre: "Ají de Gallina",
    categoria: "principal",
    descripcion: "Cremoso guiso de pollo deshilachado en una salsa de ají amarillo y nueces.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499019/aji-gallina_cwonlh.jpg",
    ingredientes: [
      "1 gallina o pollo entero",
      "4 ajíes amarillos sin venas ni semillas",
      "2 cebollas picadas",
      "3 dientes de ajo",
      "100g de nueces o pecanas",
      "100g de queso parmesano rallado",
      "4 rebanadas de pan de molde remojado en leche",
      "1 taza de leche evaporada",
      "Aceite vegetal",
      "Sal y pimienta al gusto",
      "4 papas amarillas cocidas",
      "3 huevos duros",
      "Aceitunas negras",
      "Arroz blanco cocido",
    ],
    preparacion: [
      "Cocer la gallina o pollo en agua con sal, cebolla y apio. Reservar el caldo.",
      "Desmenuzar la carne y reservar.",
      "En una sartén, sofreír la cebolla y el ajo en aceite hasta que estén transparentes.",
      "Licuar los ajíes amarillos con un poco de caldo de pollo.",
      "Añadir los ajíes licuados a la sartén y cocinar por 5 minutos.",
      "Licuar las nueces, el pan remojado en leche y el queso parmesano con un poco de caldo.",
      "Agregar esta mezcla a la sartén y cocinar por 10 minutos más.",
      "Incorporar la carne desmenuzada y la leche evaporada.",
      "Cocinar a fuego lento por 15 minutos, revolviendo ocasionalmente.",
      "Servir sobre papas amarillas cocidas, decorar con huevo duro en rodajas y aceitunas negras.",
      "Acompañar con arroz blanco.",
    ],
  },
  {
    id: 4,
    nombre: "Causa Limeña",
    categoria: "entrada",
    descripcion: "Terrina fría de papa amarilla rellena de pollo, atún o mariscos.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498922/causa_wglvzc.jpg",
    ingredientes: [
      "1kg de papas amarillas",
      "3 limones (jugo)",
      "3 ajíes amarillos licuados",
      "3 cucharadas de aceite vegetal",
      "Sal y pimienta al gusto",
      "300g de pollo cocido y deshilachado",
      "1/2 taza de mayonesa",
      "1 cebolla roja picada finamente",
      "1 palta (aguacate)",
      "2 huevos duros",
      "Aceitunas negras",
      "Hojas de lechuga",
    ],
    preparacion: [
      "Cocer las papas con cáscara, pelarlas y pasarlas por un prensapapas.",
      "Mezclar la papa con el jugo de limón, el ají amarillo licuado, aceite, sal y pimienta hasta formar una masa homogénea.",
      "Mezclar el pollo deshilachado con mayonesa, cebolla picada, sal y pimienta.",
      "En un molde rectangular, colocar una capa de la masa de papa.",
      "Añadir el relleno de pollo y cubrir con otra capa de papa.",
      "Refrigerar por al menos 1 hora.",
      "Desmoldar y decorar con rodajas de huevo duro, palta, aceitunas y hojas de lechuga.",
    ],
  },
  {
    id: 5,
    nombre: "Anticuchos",
    categoria: "entrada",
    descripcion: "Brochetas de corazón de res marinadas en una salsa de ají panca y especias.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498923/anticuchos_k84g0l.jpg",
    ingredientes: [
      "1kg de corazón de res",
      "4 cucharadas de pasta de ají panca",
      "3 dientes de ajo molidos",
      "1/4 taza de vinagre tinto",
      "1 cucharadita de comino",
      "1 cucharadita de orégano",
      "Sal y pimienta al gusto",
      "Palitos de brocheta remojados en agua",
      "Papas cocidas",
      "Choclo cocido",
      "Salsa criolla (cebolla, limón, cilantro)",
    ],
    preparacion: [
      "Limpiar el corazón de res y cortarlo en cubos de 3 cm aproximadamente.",
      "Preparar la marinada mezclando el ají panca, ajo, vinagre, comino, orégano, sal y pimienta.",
      "Marinar los trozos de corazón por al menos 4 horas, idealmente toda la noche.",
      "Ensartar los trozos de corazón en los palitos de brocheta.",
      "Cocinar en una parrilla caliente, volteando y pintando con la marinada.",
      "Servir caliente acompañado de papas, choclo y salsa criolla.",
    ],
  },
  {
    id: 6,
    nombre: "Rocoto Relleno",
    categoria: "principal",
    descripcion: "Plato típico de Arequipa, consiste en rocotos rellenos de carne y gratinados con queso.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499019/rocoto_bfse96.jpg",
    ingredientes: [
      "6 rocotos grandes",
      "500g de carne molida de res",
      "200g de carne molida de cerdo",
      "2 cebollas picadas",
      "3 dientes de ajo picados",
      "1/2 taza de pasas",
      "1/2 taza de aceitunas negras picadas",
      "1/4 taza de maní tostado y molido",
      "2 huevos duros picados",
      "1 cucharadita de comino",
      "1 cucharadita de orégano",
      "200g de queso parmesano rallado",
      "Sal y pimienta al gusto",
      "Papas para el pastel de papas",
    ],
    preparacion: [
      "Cortar la parte superior de los rocotos y retirar las semillas y venas. Reservar las tapas.",
      "Hervir los rocotos en agua con sal y azúcar, cambiando el agua 3 veces para reducir el picante.",
      "En una sartén, sofreír la cebolla y el ajo hasta que estén transparentes.",
      "Añadir las carnes molidas y cocinar hasta que estén doradas.",
      "Agregar las pasas, aceitunas, maní, huevos duros, comino y orégano.",
      "Sazonar con sal y pimienta al gusto.",
      "Rellenar los rocotos con esta mezcla y cubrir con queso parmesano.",
      "Colocar las tapas de los rocotos.",
      "Hornear a 180°C por 20 minutos o hasta que el queso esté dorado.",
      "Servir con pastel de papas.",
    ],
  },
  {
    id: 7,
    nombre: "Arroz con Pato",
    categoria: "principal",
    descripcion: "Plato típico del norte del Perú, con pato cocido en cerveza negra y servido con arroz verde.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498997/arroz-pato_psvwy9.jpg",
    ingredientes: [
      "1 pato entero cortado en presas",
      "3 tazas de arroz",
      "1 manojo grande de culantro (cilantro)",
      "2 ajíes amarillos picados",
      "1 cerveza negra",
      "1 taza de chicha de jora",
      "1 cebolla roja picada",
      "4 dientes de ajo picados",
      "1 pimiento rojo picado",
      "1 zanahoria picada",
      "1 taza de arvejas frescas",
      "Sal y pimienta al gusto",
      "Aceite vegetal",
    ],
    preparacion: [
      "Licuar el culantro con un poco de agua para obtener el jugo verde.",
      "Sazonar el pato con sal y pimienta y dorarlo en una olla grande con aceite caliente.",
      "Retirar el pato y en la misma olla, sofreír la cebolla, ajo, ají amarillo y pimiento.",
      "Regresar el pato a la olla y añadir la cerveza negra y la chicha de jora.",
      "Cocinar a fuego medio por 30 minutos o hasta que el pato esté tierno.",
      "Retirar el pato y reservar el caldo.",
      "En otra olla, sofreír el arroz con un poco de aceite.",
      "Añadir el caldo reservado y el jugo de culantro.",
      "Agregar la zanahoria y las arvejas.",
      "Cocinar el arroz hasta que esté listo.",
      "Servir el arroz con las presas de pato encima.",
    ],
  },
  {
    id: 8,
    nombre: "Suspiro a la Limeña",
    categoria: "postre",
    descripcion: "Dulce tradicional limeño a base de manjar blanco y merengue.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498974/suspiro_kxvadr.jpg",
    ingredientes: [
      "1 lata de leche evaporada",
      "1 lata de leche condensada",
      "5 yemas de huevo",
      "1 cucharadita de vainilla",
      "1/4 taza de oporto o pisco (opcional)",
      "3 claras de huevo",
      "1/2 taza de azúcar",
      "Canela en polvo para decorar",
    ],
    preparacion: [
      "En una olla, mezclar la leche evaporada y la leche condensada.",
      "Cocinar a fuego medio, revolviendo constantemente hasta que espese (aproximadamente 45 minutos).",
      "Retirar del fuego y dejar enfriar un poco.",
      "Añadir las yemas de huevo batidas, la vainilla y el licor. Mezclar bien.",
      "Regresar al fuego bajo y cocinar por 5 minutos más, sin dejar de revolver.",
      "Verter la mezcla en copas individuales y dejar enfriar.",
      "Para el merengue, batir las claras a punto de nieve y agregar el azúcar gradualmente.",
      "Decorar las copas con el merengue y espolvorear canela en polvo.",
      "Refrigerar por al menos 2 horas antes de servir.",
    ],
  },
  {
    id: 9,
    nombre: "Mazamorra Morada",
    categoria: "postre",
    descripcion: "Postre tradicional peruano elaborado con maíz morado y frutas.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498974/morada_rweqsg.jpg",
    ingredientes: [
      "500g de maíz morado",
      "2 manzanas peladas y picadas",
      "2 membrillos pelados y picados",
      "100g de guindones (ciruelas secas)",
      "100g de orejones (duraznos secos)",
      "1 piña picada en cubos",
      "Cáscara de 1 naranja",
      "3 ramas de canela",
      "5 clavos de olor",
      "200g de azúcar",
      "150g de fécula de papa o maizena",
      "Jugo de 1 limón",
    ],
    preparacion: [
      "Lavar bien el maíz morado y colocarlo en una olla grande con 3 litros de agua.",
      "Añadir la canela, clavos de olor y cáscara de naranja.",
      "Hervir por 45 minutos, colar y reservar el líquido.",
      "En el líquido, cocinar las frutas picadas por 15 minutos.",
      "Disolver la fécula en 1/2 taza de agua fría.",
      "Añadir el azúcar al líquido y luego la fécula disuelta, revolviendo constantemente.",
      "Cocinar por 5 minutos más hasta que espese.",
      "Agregar el jugo de limón y mezclar.",
      "Servir frío o caliente, según preferencia.",
    ],
  },
  {
    id: 10,
    nombre: "Tacu Tacu",
    categoria: "principal",
    descripcion: "Plato tradicional peruano hecho con arroz y frijoles refritos, formando una tortilla.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499020/tacu-tacu_nzfmwa.jpg",
    ingredientes: [
      "2 tazas de frijoles canarios cocidos",
      "2 tazas de arroz cocido",
      "1 cebolla roja picada",
      "2 dientes de ajo picados",
      "1 ají amarillo picado",
      "1 cucharadita de orégano",
      "Aceite vegetal",
      "Sal y pimienta al gusto",
      "2 huevos fritos (opcional)",
      "2 filetes de bistec (opcional)",
      "Plátano frito (opcional)",
      "Salsa criolla (opcional)",
    ],
    preparacion: [
      "En una sartén, sofreír la cebolla, ajo y ají amarillo hasta que estén transparentes.",
      "Añadir los frijoles cocidos y aplastarlos ligeramente con una cuchara.",
      "Incorporar el arroz cocido y el orégano. Mezclar bien.",
      "Sazonar con sal y pimienta al gusto.",
      "Formar una tortilla con la mezcla y dorarla por ambos lados en aceite caliente.",
      "Servir con huevo frito, bistec, plátano frito y salsa criolla, si se desea.",
    ],
  },
  {
    id: 11,
    nombre: "Picarones",
    categoria: "postre",
    descripcion: "Dulce tradicional peruano similar a las donas, hecho con calabaza y camote.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498958/picarones_jlwyhg.jpg",
    ingredientes: [
      "500g de calabaza",
      "300g de camote naranja",
      "500g de harina de trigo",
      "25g de levadura fresca",
      "1 cucharadita de anís",
      "1 cucharadita de canela molida",
      "1/4 taza de azúcar",
      "Aceite para freír",
      "Para la miel:",
      "500g de chancaca (panela)",
      "2 tazas de agua",
      "2 ramas de canela",
      "3 clavos de olor",
      "Cáscara de 1 naranja",
      "1 cucharadita de anís",
    ],
    preparacion: [
      "Cocer la calabaza y el camote hasta que estén tiernos. Pelar y hacer un puré.",
      "Disolver la levadura en 1/2 taza de agua tibia con una cucharada de azúcar.",
      "Mezclar el puré con la levadura disuelta, anís, canela y el resto del azúcar.",
      "Añadir la harina poco a poco hasta formar una masa suave y elástica.",
      "Dejar reposar la masa por 1 hora o hasta que duplique su volumen.",
      "Para la miel, hervir la chancaca con agua, canela, clavos, cáscara de naranja y anís hasta que espese.",
      "Calentar abundante aceite en una olla.",
      "Con las manos mojadas, tomar porciones de masa y formar aros, dejándolos caer directamente en el aceite caliente.",
      "Freír hasta que estén dorados por ambos lados.",
      "Escurrir sobre papel absorbente y bañar con la miel caliente antes de servir.",
    ],
  },
  {
    id: 12,
    nombre: "Ocopa Arequipeña",
    categoria: "entrada",
    descripcion:
      "Plato típico de Arequipa que consiste en papas sancochadas bañadas en una cremosa salsa de ají amarillo, huacatay, maní y queso, decorada con huevo duro y aceitunas.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498924/ocopa_nqjve5.jpg",
    ingredientes: [
      "4 ajíes mirasol secos",
      "2 ajíes amarillos frescos sin venas ni semillas",
      "1 cebolla roja mediana",
      "2 dientes de ajo",
      "200 gramos de queso paria o queso fresco serrano",
      "1 cucharada colmada de maní tostado",
      "50 gramos de galletas de vainilla o galletas de soda",
      "½ taza de leche evaporada",
      "Aceite vegetal",
      "Sal al gusto",
      "Hojas de lechuga",
      "2 huevos duros",
      "Aceitunas negras para decorar",
    ],
    preparacion: [
      "Remojar los ajíes mirasol en agua caliente para suavizarlos y retirar las semillas y venas de los ajíes amarillos.",
      "En una sartén con aceite, dorar la cebolla picada, los ajos, los ajíes amarillos y mirasol, el maní, las galletas y el queso, moviendo constantemente durante 5 minutos. Añadir un chorrito de agua si es necesario.",
      "Retirar del fuego y dejar enfriar un poco.",
      "Licuar la mezcla con la leche evaporada poco a poco hasta obtener una salsa cremosa y homogénea. Sazonar con sal al gusto.",
      "Cocer las papas con cáscara, pelarlas y cortarlas en rodajas gruesas.",
      "Colocar hojas de lechuga en un plato, disponer las rodajas de papa encima y bañar con la salsa de ocopa.",
      "Decorar con rodajas de huevo duro y aceitunas negras.",
    ]
  },
  {
    id: 13,
    nombre: "Sopa Criolla",
    categoria: "caldo",
    descripcion: "Deliciosa sopa peruana con fideos, carne y un toque de leche.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499040/sopa-criolla_t8onza.jpg",
    ingredientes: [
      "250g de carne de res cortada en tiras finas",
      "200g de fideos cabello de ángel",
      "2 cebollas rojas picadas",
      "2 tomates pelados y picados",
      "2 ajíes amarillos picados",
      "3 dientes de ajo molidos",
      "1 cucharada de pasta de ají panca",
      "1/2 taza de leche evaporada",
      "4 huevos",
      "1 cucharada de orégano seco",
      "2 litros de caldo de carne",
      "Aceite vegetal",
      "Sal y pimienta al gusto",
      "Perejil picado para decorar",
    ],
    preparacion: [
      "En una olla grande, calentar aceite y sofreír la cebolla, ajo y ají amarillo hasta que estén transparentes.",
      "Añadir el tomate y la pasta de ají panca, cocinar por 3 minutos más.",
      "Agregar la carne y cocinar hasta que cambie de color.",
      "Incorporar el caldo de carne y llevar a ebullición.",
      "Añadir los fideos y cocinar según las instrucciones del paquete.",
      "Agregar la leche evaporada y el orégano.",
      "Romper los huevos directamente en la sopa, uno por uno, y dejar que se cocinen.",
      "Sazonar con sal y pimienta al gusto.",
      "Servir caliente, decorado con perejil picado.",
    ],
  },
  {
    id: 14,
    nombre: "Aguadito de Pollo",
    categoria: "caldo",
    descripcion: "Reconfortante sopa verde de pollo con arroz y verduras.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499039/aguadito_wqpcoa.jpg",
    ingredientes: [
      "1 pollo entero cortado en presas",
      "1 taza de arroz",
      "1 manojo grande de culantro (cilantro)",
      "1 cebolla roja picada",
      "3 dientes de ajo picados",
      "2 ajíes amarillos picados",
      "1 pimiento rojo picado",
      "1 zanahoria picada en cubos",
      "1 taza de arvejas frescas",
      "2 papas amarillas cortadas en cubos",
      "1 choclo cortado en rodajas",
      "2 litros de agua",
      "Aceite vegetal",
      "Sal y pimienta al gusto",
    ],
    preparacion: [
      "Licuar el culantro con un poco de agua para obtener un jugo verde intenso.",
      "En una olla grande, calentar aceite y sofreír la cebolla, ajo y ají amarillo.",
      "Añadir el pollo y dorar ligeramente por todos lados.",
      "Agregar el agua y llevar a ebullición. Cocinar el pollo por 20 minutos.",
      "Incorporar el arroz, la zanahoria, el pimiento y las papas.",
      "Cuando el arroz esté casi cocido, añadir las arvejas y el choclo.",
      "Agregar el jugo de culantro y cocinar por 5 minutos más.",
      "Sazonar con sal y pimienta al gusto.",
      "Servir caliente con una rodaja de choclo en cada plato.",
    ],
  },
  {
    id: 15,
    nombre: "Chicha Morada",
    categoria: "bebida",
    descripcion: "Refrescante bebida peruana hecha a base de maíz morado.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499057/chicha-morada_rigvhh.jpg",
    ingredientes: [
      "1kg de maíz morado",
      "2 manzanas cortadas en trozos",
      "1 piña cortada en trozos",
      "2 ramas de canela",
      "4 clavos de olor",
      "Cáscara de 1 limón",
      "3 litros de agua",
      "Jugo de 3 limones",
      "1 taza de azúcar",
      "Hielo al gusto",
    ],
    preparacion: [
      "Lavar bien el maíz morado y colocarlo en una olla grande con el agua.",
      "Añadir la canela, clavos de olor, cáscara de limón, manzanas y piña.",
      "Hervir por 45 minutos a fuego medio.",
      "Colar y dejar enfriar.",
      "Agregar el azúcar y el jugo de limón. Mezclar bien.",
      "Refrigerar por al menos 2 horas.",
      "Servir con hielo y trozos de fruta si se desea.",
    ],
  },
  {
    id: 16,
    nombre: "Pisco Sour",
    categoria: "bebida",
    descripcion: "Cóctel emblemático del Perú a base de pisco, limón y clara de huevo.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499071/pisco-sour_itsku4.jpg",
    ingredientes: [
      "3 onzas de pisco",
      "1 onza de jarabe de goma o almíbar",
      "1 onza de jugo de limón recién exprimido",
      "1 clara de huevo",
      "Hielo",
      "Amargo de Angostura",
      "Canela en polvo para decorar",
    ],
    preparacion: [
      "En una coctelera, añadir el pisco, jarabe de goma, jugo de limón y clara de huevo.",
      "Agitar vigorosamente sin hielo por 15 segundos (dry shake).",
      "Añadir hielo y agitar nuevamente por 15 segundos más.",
      "Colar en una copa fría.",
      "Añadir unas gotas de Amargo de Angostura sobre la espuma.",
      "Espolvorear canela en polvo y servir inmediatamente.",
    ],
  },
  {
    id: 17,
    nombre: "Chicha de Jora",
    categoria: "bebida",
    descripcion: "Bebida ancestral andina fermentada a base de maíz jora, tradicional en la sierra peruana.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499064/chicha-jora_h4p8ka.jpg",
    ingredientes: [
      "500 g de maíz jora",
      "3 litros de agua",
      "100 g de azúcar (opcional)",
      "Corteza de piña (opcional)",
      "Clavos de olor y canela (opcional)"
    ],
    preparacion: [
      "Lavar el maíz jora y hervirlo en una olla grande con el agua durante 2 a 3 horas.",
      "Agregar la corteza de piña, clavos de olor y canela si se desea aromatizar.",
      "Dejar enfriar y colar el líquido.",
      "Verter el líquido en un recipiente de barro o vidrio y dejar fermentar de 2 a 4 días.",
      "Agregar azúcar al gusto si se prefiere más dulce.",
      "Servir fría o a temperatura ambiente."
    ]
  },
  {
    id: 18,
    nombre: "Limonada",
    categoria: "bebida",
    descripcion: "Refrescante bebida a base de jugo de limón, agua y azúcar, ideal para combatir el calor.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499059/limonada_yzu18m.jpg",
    ingredientes: [
      "1 taza de jugo de limón fresco",
      "1 litro de agua fría",
      "1/2 taza de azúcar (ajustar al gusto)",
      "Cubos de hielo",
      "Rodajas de limón para decorar"
    ],
    preparacion: [
      "Exprimir los limones hasta obtener 1 taza de jugo.",
      "En una jarra grande, mezclar el jugo de limón con el azúcar hasta disolver.",
      "Agregar el agua fría y mezclar bien.",
      "Añadir cubos de hielo y decorar con rodajas de limón.",
      "Servir bien fría."
    ]
  },
  {
    id: 19,
    nombre: "Emoliente",
    categoria: "bebida",
    descripcion: "Bebida tradicional peruana a base de hierbas, cebada y linaza, consumida caliente y conocida por sus propiedades medicinales.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499065/emoliente_ozklr3.jpg",
    ingredientes: [
      "2 litros de agua",
      "1/4 taza de cebada perlada",
      "2 cucharadas de linaza",
      "1 rama de cola de caballo",
      "1 rama de hierba luisa",
      "1 rama de boldo",
      "1 rama de alfalfa",
      "Jugo de limón al gusto",
      "Miel o azúcar al gusto"
    ],
    preparacion: [
      "En una olla grande, hervir el agua con la cebada y la linaza durante 30 minutos.",
      "Agregar las hierbas (cola de caballo, hierba luisa, boldo y alfalfa) y hervir por 10 minutos más.",
      "Colar la bebida y dejar entibiar.",
      "Endulzar con miel o azúcar y añadir jugo de limón al gusto.",
      "Servir caliente."
    ]
  },
  {
    id: 20,
    nombre: "Masato",
    categoria: "bebida",
    descripcion: "Bebida amazónica fermentada a base de yuca, tradicional en la selva peruana.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499070/masato_pmiuzs.jpg",
    ingredientes: [
      "1 kg de yuca",
      "2 litros de agua",
      "Azúcar al gusto"
    ],
    preparacion: [
      "Pelar y cortar la yuca en trozos.",
      "Hervir la yuca en agua hasta que esté bien cocida y suave.",
      "Escurrir y triturar la yuca hasta obtener una masa homogénea.",
      "Agregar agua poco a poco hasta lograr una bebida espesa.",
      "Añadir azúcar al gusto y mezclar bien.",
      "Dejar fermentar la mezcla a temperatura ambiente durante 1 a 3 días según la intensidad deseada.",
      "Servir fría."
    ]
  },
  {
    id: 21,
    nombre: "Arroz Zambito",
    categoria: "postre",
    descripcion: "Postre peruano similar al arroz con leche, con chancaca, pasas, coco rallado y especias que le dan un color y sabor característico.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498969/arroz-sambito_cwsrum.jpg",
    ingredientes: [
      "1 taza de arroz de grano largo",
      "4 tazas de agua",
      "1 bastón de canela",
      "2 clavos de olor",
      "1 taza de chancaca (panela) rallada",
      "200 ml de leche evaporada",
      "150 ml de leche condensada",
      "1/4 taza de pasas",
      "1/4 taza de coco rallado",
      "Canela en polvo para espolvorear"
    ],
    preparacion: [
      "En una olla, hervir el agua con la canela y los clavos de olor.",
      "Agregar el arroz y cocinar a fuego medio hasta que esté blando y el agua casi se evapore.",
      "En otra olla, disolver la chancaca en un poco de agua y cocinar hasta obtener una miel espesa.",
      "Incorporar la miel de chancaca al arroz cocido, mezclar suavemente para no romper los granos.",
      "Agregar la leche evaporada, leche condensada, pasas y coco rallado, mezclar y cocinar a fuego bajo por unos minutos.",
      "Servir en porciones y espolvorear canela en polvo al gusto."
    ]
  },
  {
    id: 22,
    nombre: "Arroz con Leche",
    categoria: "postre",
    descripcion: "Clásico postre cremoso hecho con arroz, leche, azúcar y canela, muy popular en Perú y Latinoamérica.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498972/arroz-leche_pibtgz.jpg",
    ingredientes: [
      "1 taza de arroz",
      "4 tazas de leche",
      "1 taza de azúcar",
      "1 bastón de canela",
      "Cáscara de limón",
      "Canela en polvo para decorar"
    ],
    preparacion: [
      "Lavar el arroz y cocinarlo en agua hasta que esté casi tierno.",
      "Agregar la leche, la canela y la cáscara de limón, cocinar a fuego bajo removiendo constantemente.",
      "Incorporar el azúcar y seguir cocinando hasta que la mezcla espese y el arroz esté completamente cocido.",
      "Retirar la canela y la cáscara de limón.",
      "Servir frío o tibio, espolvoreando canela en polvo."
    ]
  },
  {
    id: 23,
    nombre: "Crema Volteada",
    categoria: "postre",
    descripcion: "Versión peruana del flan, dulce y suave a base de huevos, leche y azúcar caramelizada.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498960/crema-volteada_bcvzpo.jpg",
    ingredientes: [
      "6 huevos",
      "1 lata de leche evaporada",
      "1 lata de leche condensada",
      "1 taza de azúcar",
      "1 cucharadita de esencia de vainilla"
    ],
    preparacion: [
      "Preparar un caramelo con el azúcar en una olla hasta que tome color dorado y verterlo en un molde para flan.",
      "En un bol, batir los huevos con la leche evaporada, leche condensada y vainilla hasta integrar.",
      "Verter la mezcla en el molde con el caramelo.",
      "Cocinar a baño María en horno precalentado a 180°C por aproximadamente 50 minutos o hasta que cuaje.",
      "Dejar enfriar, desmoldar y servir."
    ]
  },
  {
    id: 24,
    nombre: "Queso Helado",
    categoria: "postre",
    descripcion: "Postre frío típico de la región norte del Perú, hecho con leche, canela, clavo y coco rallado, con textura cremosa y granulada.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498963/queso-helado_pl7er5.jpg",
    ingredientes: [
      "1 litro de leche",
      "300 g de azúcar",
      "1 bastón de canela",
      "3 clavos de olor",
      "1 taza de coco rallado",
      "1 cucharadita de esencia de vainilla"
    ],
    preparacion: [
      "Hervir la leche con la canela y los clavos de olor para aromatizar.",
      "Agregar el azúcar y el coco rallado, cocinar a fuego bajo hasta que la mezcla espese ligeramente.",
      "Retirar las especias y añadir la vainilla.",
      "Dejar enfriar y llevar al congelador, removiendo cada cierto tiempo para evitar cristales de hielo y obtener textura cremosa.",
      "Servir frío."
    ]
  },
  {
    id: 25,
    nombre: "Flan",
    categoria: "postre",
    descripcion: "Postre clásico de huevo y leche con caramelo, suave y dulce, muy popular en la gastronomía peruana.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498965/flan_ua1sfp.jpg",
    ingredientes: [
      "4 huevos",
      "1 taza de leche",
      "1 taza de azúcar",
      "1 cucharadita de esencia de vainilla"
    ],
    preparacion: [
      "Preparar un caramelo con el azúcar y verterlo en un molde para flan.",
      "Batir los huevos con la leche y la esencia de vainilla.",
      "Verter la mezcla en el molde con el caramelo.",
      "Cocinar a baño María en horno precalentado a 180°C durante 40-45 minutos o hasta que cuaje.",
      "Dejar enfriar, desmoldar y servir."
    ]
  },
  {
    id: 26,
    nombre: "Papa a la Huancaína",
    categoria: "entrada",
    descripcion: "Clásica entrada peruana de papas sancochadas cubiertas con una cremosa salsa a base de ají amarillo, queso fresco y galletas de soda.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498924/huanca%C3%ADna_zmqpeb.jpg",
    ingredientes: [
      "4 papas amarillas medianas",
      "3 ajíes amarillos sin venas ni pepas",
      "1/2 cebolla roja",
      "200 g de queso fresco",
      "6 galletas de soda",
      "3/4 taza de leche evaporada",
      "1/4 taza de aceite vegetal",
      "Sal y pimienta al gusto",
      "Hojas de lechuga",
      "Huevos duros para decorar",
      "Aceitunas negras para decorar"
    ],
    preparacion: [
      "Hervir las papas hasta que estén tiernas, pelar y cortar en rodajas.",
      "Saltear la cebolla, ají amarillo y ajo en un poco de aceite hasta dorar.",
      "Licuar la mezcla con el queso fresco, galletas de soda, leche evaporada y aceite hasta obtener una salsa cremosa.",
      "Sazonar con sal y pimienta.",
      "Servir las papas sobre hojas de lechuga, cubrir con la salsa y decorar con huevo duro y aceitunas."
    ]
  },
  {
    id: 27,
    nombre: "Tamales Peruanos",
    categoria: "entrada",
    descripcion: "Delicioso tamal peruano hecho con masa de maíz, relleno de carne, aceitunas y especias, envuelto en hojas de plátano y cocido al vapor.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498927/tamal_lsm4lb.jpg",
    ingredientes: [
      "500 g de harina de maíz amarillo",
      "250 g de manteca de cerdo",
      "1 taza de caldo de pollo",
      "500 g de carne de cerdo o pollo cocida y deshilachada",
      "2 cebollas picadas",
      "2 dientes de ajo picados",
      "Aceitunas negras",
      "Huevos cocidos",
      "Ají amarillo molido",
      "Sal y pimienta al gusto",
      "Hojas de plátano para envolver"
    ],
    preparacion: [
      "Preparar la masa mezclando la harina de maíz con la manteca y el caldo hasta obtener una masa suave.",
      "Sofreír la cebolla, ajo y ají amarillo, agregar la carne deshilachada, salpimentar y cocinar unos minutos.",
      "En las hojas de plátano, colocar una porción de masa, agregar el relleno, aceitunas y huevo cocido.",
      "Cerrar y amarrar los tamales con tiras de hoja de plátano.",
      "Cocinar al vapor por aproximadamente 1 hora.",
      "Dejar enfriar un poco antes de servir."
    ]
  },
  {
    id: 28,
    nombre: "Choclo con Queso",
    categoria: "entrada",
    descripcion: "Sencilla y tradicional entrada peruana que combina choclo cocido con queso fresco, ideal para acompañar cualquier comida.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498926/choclo_vmi1ui.jpg",
    ingredientes: [
      "2 choclos grandes",
      "200 g de queso fresco",
      "Sal al gusto"
    ],
    preparacion: [
      "Cocer los choclos enteros en agua con sal hasta que estén tiernos.",
      "Pelarlos y cortar en trozos o servir enteros.",
      "Acompañar con trozos de queso fresco.",
      "Servir frío o a temperatura ambiente."
    ]
  },
  {
    id: 29,
    nombre: "Wantanes Fritos",
    categoria: "entrada",
    descripcion: "Crujientes bocados fritos rellenos de carne, pollo o verduras, muy populares como entrada o aperitivo en la gastronomía peruana.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498929/wantan_hl6rlt.jpg",
    ingredientes: [
      "20 hojas de wantán",
      "200 g de carne molida o pollo deshilachado",
      "1 cebolla pequeña picada",
      "2 dientes de ajo picados",
      "1 cucharada de salsa de soja",
      "Sal y pimienta al gusto",
      "Aceite para freír"
    ],
    preparacion: [
      "Saltear la carne con cebolla, ajo, salsa de soja, sal y pimienta hasta cocinar completamente.",
      "Dejar enfriar el relleno.",
      "Colocar una cucharadita de relleno en cada hoja de wantán y doblar formando triángulos o paquetitos.",
      "Freír en abundante aceite caliente hasta que estén dorados y crujientes.",
      "Escurrir sobre papel absorbente y servir con salsa de ají o salsa tártara."
    ]
  },
  {
    id: 30,
    nombre: "Chilcano de Pescado",
    categoria: "entrada",
    descripcion: "Caldo ligero y sabroso hecho con pescado fresco, aromatizado con hierbas y especias, ideal como entrada en la costa peruana.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498929/chilcano_hytsdd.jpg",
    ingredientes: [
      "500 g de pescado fresco (merluza, corvina o similar)",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "1 tomate picado",
      "1 ají amarillo sin venas ni pepas",
      "1 rama de perejil",
      "1 rama de cilantro",
      "Sal y pimienta al gusto",
      "1 litro de agua",
      "Jugo de limón al gusto"
    ],
    preparacion: [
      "En una olla, sofreír la cebolla, ajo, tomate y ají amarillo hasta que estén tiernos.",
      "Agregar el agua y llevar a ebullición.",
      "Incorporar el pescado cortado en trozos y cocinar a fuego medio hasta que esté cocido.",
      "Añadir perejil, cilantro, sal y pimienta.",
      "Retirar del fuego y agregar jugo de limón al gusto.",
      "Servir caliente."
    ]
  },
  {
    id: 31,
    nombre: "Caldo de Gallina",
    categoria: "caldo",
    descripcion: "Sopa tradicional peruana hecha con gallina criolla, verduras y fideos, muy reconfortante y nutritiva.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499039/caldo-gallina_yeqtrz.jpg",
    ingredientes: [
      "1 gallina criolla cortada en presas",
      "2 litros de agua",
      "1 taza de fideos cabello de ángel",
      "2 papas amarillas peladas y cortadas en trozos",
      "1 cebolla picada",
      "3 dientes de ajo picados",
      "1 zanahoria picada",
      "1 rama de apio",
      "1 manojo de perejil",
      "Sal y pimienta al gusto",
      "1 huevo duro para decorar",
      "Culantro para decorar"
    ],
    preparacion: [
      "En una olla grande, colocar la gallina con el agua y llevar a ebullición.",
      "Agregar la cebolla, ajo, zanahoria, apio, sal y pimienta.",
      "Cocinar a fuego medio hasta que la gallina esté tierna.",
      "Añadir las papas y los fideos, cocinar hasta que estén suaves.",
      "Rectificar la sazón y retirar el apio.",
      "Servir caliente, decorando con huevo duro picado y culantro."
    ]
  },
  {
    id: 32,
    nombre: "Menestrón",
    categoria: "caldo",
    descripcion: "Sopa de origen italiano muy popular en Perú, con verduras, legumbres, fideos y carne, nutritiva y reconfortante.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499040/menestron_vqegst.jpg",
    ingredientes: [
      "200 g de carne de res en trozos",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "2 papas cortadas en cubos",
      "1 zanahoria picada",
      "1 taza de frejoles cocidos",
      "1 taza de garbanzos cocidos",
      "1 taza de arvejas",
      "1 taza de fideos",
      "1 rama de apio",
      "1 tomate picado",
      "1 litro de caldo de carne",
      "Sal, pimienta y orégano al gusto",
      "Queso parmesano rallado para servir"
    ],
    preparacion: [
      "En una olla, sofreír la cebolla y ajo hasta dorar.",
      "Agregar la carne y sellar por todos lados.",
      "Añadir el tomate, apio, papas, zanahoria y caldo de carne.",
      "Cocinar hasta que la carne y verduras estén tiernas.",
      "Incorporar los frejoles, garbanzos, arvejas y fideos.",
      "Cocinar hasta que los fideos estén al dente.",
      "Sazonar con sal, pimienta y orégano.",
      "Servir caliente con queso parmesano rallado."
    ]
  },
  {
    id: 33,
    nombre: "Parihuela",
    categoria: "caldo",
    descripcion: "Caldo concentrado de mariscos variados, típico de la costa peruana, muy sabroso y picante.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499040/parihuela_wyqgz9.jpg",
    ingredientes: [
      "300 g de pescado fresco",
      "200 g de camarones",
      "150 g de calamares",
      "150 g de mejillones",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "1 tomate picado",
      "1 ají amarillo picado",
      "1 litro de caldo de pescado",
      "1 rama de perejil",
      "Sal, pimienta y comino al gusto",
      "Jugo de limón al gusto"
    ],
    preparacion: [
      "En una olla, sofreír la cebolla, ajo, ají amarillo y tomate.",
      "Agregar el caldo de pescado y llevar a ebullición.",
      "Incorporar los mariscos y cocinar hasta que estén tiernos.",
      "Sazonar con sal, pimienta, comino y jugo de limón.",
      "Añadir perejil picado antes de servir.",
      "Servir caliente."
    ]
  },
  {
    id: 34,
    nombre: "Patasca",
    categoria: "caldo",
    descripcion: "Sopa andina tradicional hecha con maíz mote, carne de res y mondongo, ideal para el frío de la sierra.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499040/patasca_yvdo1z.jpg",
    ingredientes: [
      "500 g de carne de res (falda o costilla)",
      "300 g de mondongo limpio y cortado",
      "2 tazas de maíz mote cocido",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "1 ají amarillo picado",
      "1 rama de hierba buena o hierba luisa",
      "Sal y pimienta al gusto",
      "1 litro de agua"
    ],
    preparacion: [
      "En una olla grande, cocinar la carne y el mondongo en agua hasta que estén tiernos.",
      "Agregar la cebolla, ajo y ají amarillo, cocinar unos minutos más.",
      "Incorporar el maíz mote y la hierba buena.",
      "Sazonar con sal y pimienta.",
      "Cocinar a fuego lento hasta que la sopa espese ligeramente.",
      "Servir caliente."
    ]
  },
  {
    id: 35,
    nombre: "Sancochado",
    categoria: "caldo",
    descripcion: "Plato contundente y nutritivo de la costa peruana, con caldo de res y variedad de verduras cocidas.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499040/sancochado_ifxkcj.jpg",
    ingredientes: [
      "500 g de carne de res con hueso",
      "2 litros de agua",
      "2 papas grandes",
      "1 camote grande",
      "1 choclo cortado en rodajas",
      "1 zanahoria grande",
      "1 rama de repollo",
      "1 plátano verde",
      "Sal y pimienta al gusto",
      "Culantro para decorar"
    ],
    preparacion: [
      "En una olla grande, colocar la carne con el agua y llevar a ebullición.",
      "Cocinar a fuego medio hasta que la carne esté tierna.",
      "Agregar las papas, camote, choclo, zanahoria, repollo y plátano cortados.",
      "Cocinar hasta que las verduras estén suaves.",
      "Sazonar con sal y pimienta.",
      "Servir caliente decorado con culantro."
    ]
  },
  {
    id: 36,
    nombre: "Arroz con Pollo",
    categoria: "principal",
    descripcion: "Clásico plato peruano de arroz verde al cilantro cocinado con presas de pollo y verduras, acompañado de salsa criolla.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499021/arroz-pollo_h3yrkp.jpg",
    ingredientes: [
      "5 presas de pollo",
      "3 tazas de arroz lavado",
      "1 cebolla picada en cuadritos",
      "1/2 pimiento picado en cuadritos o tiras",
      "1 zanahoria picada en cuadritos",
      "1 taza de arvejas",
      "1 taza de choclo desgranado",
      "1 manojo de cilantro",
      "2 dientes de ajo",
      "1/4 taza de aceite vegetal",
      "Sal y pimienta al gusto",
      "Salsa criolla para acompañar"
    ],
    preparacion: [
      "Licuar el cilantro con los dientes de ajo y un poco de agua para obtener una pasta verde.",
      "Sazonar el pollo con sal y pimienta y dorar en aceite caliente.",
      "Sofreír la cebolla, pimiento y zanahoria en la misma olla.",
      "Agregar la pasta de cilantro y cocinar hasta que el aceite se separe.",
      "Incorporar el arroz, arvejas y choclo, mezclar bien.",
      "Agregar el pollo y suficiente agua para cocinar el arroz.",
      "Cocinar a fuego medio-bajo hasta que el arroz esté tierno y el líquido se absorba.",
      "Servir acompañado de salsa criolla."
    ]
  },
  {
    id: 37,
    nombre: "Carapulcra Limeña",
    categoria: "principal",
    descripcion: "Guiso tradicional peruano hecho con papa seca, carne de cerdo, ajíes y especias, típico de Lima.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499000/carapulcra_w9gsrp.jpg",
    ingredientes: [
      "300 g de papa seca remojada",
      "500 g de carne de cerdo cortada en trozos",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "2 cucharadas de ají panca molido",
      "1 cucharada de ají amarillo molido",
      "1/4 taza de aceite vegetal",
      "1 taza de caldo de carne",
      "Sal, pimienta y comino al gusto",
      "Maní tostado molido (opcional)"
    ],
    preparacion: [
      "Remojar la papa seca en agua hasta que se ablande y escurrir.",
      "En una olla, sofreír la cebolla y ajo en aceite hasta dorar.",
      "Agregar los ajíes molidos y cocinar unos minutos.",
      "Incorporar la carne de cerdo y sellar.",
      "Añadir la papa seca y el caldo, sazonar con sal, pimienta y comino.",
      "Cocinar a fuego lento hasta que la papa esté tierna y la salsa espese.",
      "Agregar maní molido si se desea y mezclar bien.",
      "Servir caliente acompañado con arroz blanco."
    ]
  },
  {
    id: 38,
    nombre: "Cuy Chactado",
    categoria: "principal",
    descripcion: "Plato tradicional andino que consiste en cuy frito crocante, sazonado con especias y servido con papas y salsa.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499021/cuy-chactado_xeva7v.jpg",
    ingredientes: [
      "1 cuy limpio y abierto",
      "Sal y pimienta al gusto",
      "Ajo molido",
      "Comino",
      "Aceite para freír",
      "Papas sancochadas para acompañar",
      "Salsa de ají para acompañar"
    ],
    preparacion: [
      "Sazonar el cuy con sal, pimienta, ajo y comino.",
      "Calentar abundante aceite en una sartén profunda.",
      "Freír el cuy hasta que esté dorado y crocante por ambos lados.",
      "Escurrir sobre papel absorbente.",
      "Servir acompañado de papas sancochadas y salsa de ají."
    ]
  },
  {
    id: 39,
    nombre: "Adobo Arequipeño",
    categoria: "principal",
    descripcion: "Guiso tradicional de cerdo marinado en chicha de jora y especias, típico de la región de Arequipa.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498996/adobo-arequipe%C3%B1o_tc5xxc.jpg",
    ingredientes: [
      "1 kg de carne de cerdo en trozos",
      "1 taza de chicha de jora",
      "4 dientes de ajo molidos",
      "1 cebolla picada",
      "2 cucharadas de ají panca molido",
      "1 cucharadita de comino",
      "1 cucharadita de orégano",
      "Sal y pimienta al gusto",
      "Aceite vegetal"
    ],
    preparacion: [
      "Marinar la carne con ajo, ají panca, comino, orégano, sal, pimienta y chicha de jora por al menos 4 horas.",
      "En una olla, sofreír la cebolla en aceite hasta dorar.",
      "Agregar la carne con la marinada y cocinar a fuego medio hasta que esté tierna y la salsa espese.",
      "Servir caliente acompañado de arroz o pan."
    ]
  },
  {
    id: 40,
    nombre: "Olluquito con Carne",
    categoria: "principal",
    descripcion: "Guiso tradicional andino hecho con olluco, carne de res y especias, acompañado con arroz o papas.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499012/olluquito-carne_ituwaw.jpg",
    ingredientes: [
      "500 g de olluco pelado y cortado en tiras",
      "300 g de carne de res cortada en trozos",
      "1 cebolla picada",
      "2 dientes de ajo picados",
      "1 ají amarillo molido",
      "1/4 taza de aceite vegetal",
      "1 taza de caldo de carne",
      "Sal y pimienta al gusto",
      "Perejil picado para decorar"
    ],
    preparacion: [
      "Sofreír la cebolla y ajo en aceite hasta dorar.",
      "Agregar la carne y sellar por todos lados.",
      "Incorporar el ají amarillo y cocinar unos minutos.",
      "Añadir el olluco y el caldo, sazonar con sal y pimienta.",
      "Cocinar a fuego lento hasta que la carne y el olluco estén tiernos.",
      "Decorar con perejil picado y servir."
    ]
  },
  {
    id: 41,
    nombre: "Arroz Chaufa",
    categoria: "principal",
    descripcion: "Plato fusión chino-peruana hecho con arroz salteado, verduras, huevo y carne o pollo.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747498997/arroz-chaufa_ebutaf.jpg",
    ingredientes: [
      "3 tazas de arroz cocido",
      "2 huevos batidos",
      "1 taza de pollo o carne picada",
      "1/2 taza de cebolla china picada",
      "1/2 taza de pimiento rojo picado",
      "2 dientes de ajo picados",
      "2 cucharadas de salsa de soja",
      "Aceite vegetal",
      "Sal y pimienta al gusto"
    ],
    preparacion: [
      "En una sartén grande, calentar aceite y hacer un omelette con los huevos batidos, reservar.",
      "Saltear el ajo, cebolla china y pimiento hasta que estén tiernos.",
      "Agregar la carne o pollo y cocinar hasta que esté listo.",
      "Incorporar el arroz cocido y mezclar bien.",
      "Agregar la salsa de soja, sal y pimienta.",
      "Agregar el omelette cortado en tiras y mezclar.",
      "Cocinar unos minutos más y servir caliente."
    ]
  },
  {
    id: 42,
    nombre: "Tacacho con Cecina",
    categoria: "principal",
    descripcion: "Plato típico de la selva peruana que combina puré de plátano verde con cecina ahumada y frita.",
    imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747499016/tacacho-cecina_lwxayx.jpg",
    ingredientes: [
      "4 plátanos verdes",
      "200 g de cecina ahumada",
      "Aceite para freír",
      "Sal al gusto"
    ],
    preparacion: [
      "Hervir los plátanos verdes hasta que estén blandos.",
      "Pelar y machacar los plátanos hasta formar un puré.",
      "Formar bolas con el puré y reservar.",
      "Freír la cecina en aceite hasta que esté crujiente.",
      "Freír las bolas de tacacho en aceite hasta dorar.",
      "Servir el tacacho acompañado de la cecina."
    ]
  },
{
  id: 43,
  nombre: "Agua de Muña",
  categoria: "bebida",
  descripcion: "Infusión andina refrescante hecha con hojas de muña, ideal para aliviar malestares digestivos y disfrutar de un sabor herbal único.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869169/mu%C3%B1a_dakl64.jpg",
  ingredientes: [
    "1 litro de agua",
    "1 rama grande de muña fresca o 2 cucharadas de hojas secas",
    "Miel o azúcar al gusto",
    "Rodajas de limón (opcional)"
  ],
  preparacion: [
    "Hervir el agua en una olla.",
    "Agregar las hojas de muña y dejar hervir por 5 minutos.",
    "Retirar del fuego y dejar reposar 5 minutos más.",
    "Colar la infusión y endulzar al gusto.",
    "Servir caliente o fría, decorando con rodajas de limón si se desea."
  ]
},
{
  id: 44,
  nombre: "Jugo de Maracuyá",
  categoria: "bebida",
  descripcion: "Bebida tropical refrescante y ligeramente ácida, preparada con pulpa de maracuyá fresca.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869163/maracuya_gxsvgz.jpg",
  ingredientes: [
    "1 taza de pulpa de maracuyá",
    "1 litro de agua fría",
    "1/2 taza de azúcar (ajustar al gusto)",
    "Cubos de hielo"
  ],
  preparacion: [
    "Licuar la pulpa de maracuyá con el agua y el azúcar.",
    "Colar la mezcla para eliminar las semillas.",
    "Servir en vasos con hielo."
  ]
},
{
  id: 45,
  nombre: "Jugo de Lúcuma",
  categoria: "bebida",
  descripcion: "Delicioso jugo cremoso elaborado con lúcuma, una fruta peruana de sabor dulce y suave.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869166/lucuma_tuony4.jpg",
  ingredientes: [
    "2 lúcumas maduras",
    "1 litro de leche fría",
    "1/3 taza de azúcar (ajustar al gusto)",
    "Cubos de hielo"
  ],
  preparacion: [
    "Pelar y despepitar las lúcumas.",
    "Licuar la pulpa con la leche y el azúcar.",
    "Servir bien frío con hielo."
  ]
},
{
  id: 46,
  nombre: "Agua de Cebada",
  categoria: "bebida",
  descripcion: "Bebida tradicional peruana a base de cebada tostada, refrescante y nutritiva.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869171/cebada_i23fcz.jpg",
  ingredientes: [
    "1 taza de cebada perlada",
    "2 litros de agua",
    "1 rama de canela",
    "1/2 taza de azúcar",
    "Jugo de 1 limón"
  ],
  preparacion: [
    "Lavar la cebada y hervirla con el agua y la canela durante 45 minutos.",
    "Colar y agregar el azúcar y el jugo de limón.",
    "Enfriar y servir."
  ]
},
{
  id: 47,
  nombre: "Coctel Machu Picchu",
  categoria: "bebida",
  descripcion: "Colorido cóctel peruano con capas de granadina, jugo de naranja, licor de menta y pisco.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869163/machu-picchu_e3ho3j.jpg",
  ingredientes: [
    "1 oz de granadina",
    "2 oz de jugo de naranja",
    "1 oz de pisco",
    "1 oz de licor de menta",
    "Cubos de hielo"
  ],
  preparacion: [
    "En un vaso largo, colocar la granadina.",
    "Agregar hielo y verter el jugo de naranja lentamente.",
    "Añadir el pisco y, por último, el licor de menta para crear capas de colores.",
    "Servir sin mezclar para apreciar los colores."
  ]
},
{
  id: 48,
  nombre: "Pisco Tonic",
  categoria: "bebida",
  descripcion: "Refrescante cóctel peruano que combina pisco con agua tónica y un toque de limón.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869167/Pisco-Tonic_ab349y.jpg",
  ingredientes: [
    "2 oz de pisco",
    "Agua tónica al gusto",
    "Rodajas de limón",
    "Cubos de hielo"
  ],
  preparacion: [
    "Llenar un vaso con hielo.",
    "Agregar el pisco y completar con agua tónica.",
    "Decorar con rodajas de limón y servir."
  ]
},
{
  id: 49,
  nombre: "Aguajina",
  categoria: "bebida",
  descripcion: "Bebida amazónica dulce y nutritiva preparada con pulpa de aguaje, agua y azúcar.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869164/aguajina_fuhkrn.jpg",
  ingredientes: [
    "1 taza de pulpa de aguaje",
    "1 litro de agua fría",
    "1/2 taza de azúcar (ajustar al gusto)",
    "Cubos de hielo"
  ],
  preparacion: [
    "Disolver la pulpa de aguaje en el agua.",
    "Agregar el azúcar y mezclar bien.",
    "Servir fría con hielo."
  ]
},
{
  id: 50,
  nombre: "Refresco de Algarrobina",
  categoria: "bebida",
  descripcion: "Bebida típica del norte peruano, hecha con algarrobina, leche y canela, de sabor dulce y energético.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869169/algarroba_fdzvc6.jpg",
  ingredientes: [
    "1/4 taza de algarrobina",
    "1 litro de leche",
    "1/2 taza de azúcar",
    "1 cucharadita de canela en polvo",
    "Cubos de hielo"
  ],
  preparacion: [
    "Mezclar la algarrobina, la leche, el azúcar y la canela en una jarra.",
    "Batir bien hasta que todo esté integrado.",
    "Servir con hielo."
  ]
},
{
  id: 51,
  nombre: "Chupe de Camarones",
  categoria: "caldo",
  descripcion: "Sopa emblemática del sur peruano, cremosa y sustanciosa, preparada con camarones, papas, leche y queso.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869574/chupe-camarones_r0pyzk.jpg",
  ingredientes: [
    "500 g de camarones limpios",
    "8 rebanadas de pan blanco sin orillas",
    "240 ml de leche",
    "120 ml de crema",
    "1 cebolla",
    "1 pimentón rojo",
    "1 pimentón verde",
    "2 papas",
    "1 choclo",
    "1 huevo",
    "Aceite, sal y pimienta al gusto"
  ],
  preparacion: [
    "Remojar el pan en leche y reservar.",
    "Sofreír cebolla y pimientos picados.",
    "Agregar papas, choclo y los camarones.",
    "Incorporar el pan remojado, crema y cocinar hasta espesar.",
    "Añadir huevo y servir con queso fresco."
  ]
},
{
  id: 52,
  nombre: "Sopa de Sémola",
  categoria: "caldo",
  descripcion: "Sopa ligera y nutritiva de sémola y verduras, ideal para una comida reconfortante.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869575/sopa-semola_qu5aym.jpg",
  ingredientes: [
    "1 pechuga de pollo",
    "1 litro de agua",
    "Zapallo, apio, zanahoria, poro, choclo, papa blanca",
    "1/2 taza de sémola",
    "Kion (jengibre)",
    "Sal al gusto"
  ],
  preparacion: [
    "Hervir el pollo y retirar impurezas.",
    "Agregar las verduras y sazonar.",
    "Cocinar 20 minutos y añadir kion.",
    "Incorporar la sémola en forma de lluvia, moviendo constantemente.",
    "Cocinar 5 minutos y servir caliente."
  ]
},
{
  id: 53,
  nombre: "Caldo de Pata",
  categoria: "caldo",
  descripcion: "Caldo tradicional andino preparado con patas de res, garbanzos, mote y vegetales.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869573/caldo-pata_crnjxw.jpg",
  ingredientes: [
    "2 patas de res",
    "3 ramas de cebolla blanca",
    "1 pimiento verde",
    "5 dientes de ajo",
    "1 libra de mote",
    "1 libra de garbanzo",
    "Sal y pimienta",
    "Cilantro"
  ],
  preparacion: [
    "Cocinar las patas con cebolla, pimiento y ajo por 2 horas.",
    "Retirar huesos, cortar la carne y colar el caldo.",
    "Agregar garbanzos y mote, hervir 30 minutos.",
    "Sazonar y servir con cilantro picado."
  ]
},
{
  id: 54,
  nombre: "Sopa de Morón",
  categoria: "caldo",
  descripcion: "Sopa nutritiva de la sierra peruana, elaborada con trigo morón, carne, papas y verduras.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869577/sopa-moron_ii1exo.jpg",
  ingredientes: [
    "250 g de trigo morón",
    "2-3 papas blancas",
    "1 papa amarilla",
    "Zanahoria, zapallo, apio, poro",
    "1 rama de hierbabuena",
    "2 litros de agua",
    "1/2 kg de pecho de res",
    "Sal y pimienta"
  ],
  preparacion: [
    "Hervir la carne con hierbabuena 40 minutos.",
    "Agregar el morón y cocinar 30 minutos.",
    "Añadir papas y verduras, cocinar hasta que estén suaves.",
    "Sazonar y servir decorado con cebolla china y culantro."
  ]
},
{
  id: 55,
  nombre: "Patachi",
  categoria: "caldo",
  descripcion: "Sopa andina espesa con trigo, menestras, tubérculos y carnes, típica de Ayacucho y Huancavelica.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869571/patachi_rpqfyu.jpg",
  ingredientes: [
    "1 kg de carne con hueso",
    "Trozo de pellejo o cerdo",
    "6 pimientas negras",
    "5 dientes de ajo",
    "200 g de trigo",
    "Alverjas secas partidas",
    "Chuño",
    "Apio, zanahoria, papas",
    "Sal y orégano"
  ],
  preparacion: [
    "Remojar trigo y alverjas desde la noche anterior.",
    "Cocinar carne y cerdo con pimienta y ajo.",
    "Agregar trigo, habas y chuño, cocinar 1 hora.",
    "Añadir verduras y papas, cocinar 15 minutos.",
    "Sazonar y servir con orégano y perejil."
  ]
},
{
  id: 56,
  nombre: "Inchicapi",
  categoria: "caldo",
  descripcion: "Sopa amazónica de gallina, maní y yuca, espesa y aromática, tradicional de la selva peruana.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869574/inchicapi_hatpy0.jpg",
  ingredientes: [
    "4 presas de gallina",
    "1.5 litros de agua",
    "200 g de maní tostado",
    "1 cucharada de ajo",
    "1 cebolla",
    "2 ajíes dulces",
    "100 g de harina de maíz",
    "12 hojas de sacha culantro",
    "Palillo",
    "Sal"
  ],
  preparacion: [
    "Hervir la gallina en agua con sal por 1 hora.",
    "Licuara palillo, sacha culantro, ajo, ajíes, cebolla y maní.",
    "Agregar harina de maíz disuelta y la mezcla licuada al caldo.",
    "Cocinar 10 minutos, sazonar y servir."
  ]
},
{
  id: 57,
  nombre: "Sopa de Cangrejo",
  categoria: "caldo",
  descripcion: "Sopa marina con cangrejos, vegetales y especias, muy popular en la costa.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869574/sopa-cangrejo_vkxefu.jpg",
  ingredientes: [
    "10 cangrejos",
    "2 cucharadas de aceite de achiote",
    "1 cebolla morada",
    "2 ramas de cebolla larga",
    "2 dientes de ajo",
    "1 pimiento verde",
    "Sal y pimienta"
  ],
  preparacion: [
    "Sofreír cebollas, ajo y pimiento en aceite de achiote.",
    "Agregar cangrejos limpios y cubrir con agua.",
    "Cocinar hasta que los cangrejos estén listos.",
    "Rectificar sazón y servir."
  ]
},
{
  id: 58,
  nombre: "Caldo de Cabeza",
  categoria: "caldo",
  descripcion: "Caldo tradicional preparado con cabeza de cordero, papas y hierbas, típico de la sierra.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869569/caldo-cabeza_nil8ox.jpg",
  ingredientes: [
    "1 cabeza de cordero",
    "4 papas",
    "3 cebollas",
    "1 limón",
    "2 ajíes",
    "Hierbabuena",
    "Sal"
  ],
  preparacion: [
    "Limpiar y cortar la cabeza en presas.",
    "Hervir en agua 10 minutos.",
    "Agregar papas, ajíes y sal, cocinar 5 minutos.",
    "Añadir cebollas y limón, cocinar 5 minutos más.",
    "Servir con hierbabuena picada."
  ]
},
{
  id: 59,
  nombre: "Chupe de Habas",
  categoria: "caldo",
  descripcion: "Sopa cremosa y espesa de habas, papas, huevo y queso, tradicional de los Andes.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869574/chupe-habas_nxkku4.jpg",
  ingredientes: [
    "3 papas blancas en cubos",
    "2 huevos",
    "1/2 taza de queso fresco",
    "3/4 taza de leche evaporada",
    "1 cucharada de ajo",
    "1 taza de habas peladas",
    "Sal y pimienta"
  ],
  preparacion: [
    "Sofreír ajo, agregar papas y habas.",
    "Cubrir con agua y cocinar hasta que las papas estén suaves.",
    "Añadir leche, queso y huevos batidos.",
    "Cocinar hasta espesar y servir."
  ]
},
{
  id: 60,
  nombre: "Sopa Wantán",
  categoria: "caldo",
  descripcion: "Sopa china-peruana con wantanes rellenos, pollo, verduras y fideos.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869576/sopa-wantan_h21ua0.jpg",
  ingredientes: [
    "12 wantanes rellenos",
    "1 pechuga de pollo",
    "1 litro de caldo de pollo",
    "Fideos chinos",
    "Zanahoria y nabo en tiras",
    "Cebolla china",
    "Sal y sillao"
  ],
  preparacion: [
    "Hervir el caldo con pollo y verduras.",
    "Agregar fideos y wantanes, cocinar hasta que suban.",
    "Sazonar con sillao y servir con cebolla china."
  ]
},
{
  id: 61,
  nombre: "Sopa Seca",
  categoria: "caldo",
  descripcion: "Plato criollo de la costa, mezcla de fideos guisados con carne y salsa de culantro.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869575/sopa-seca_du1dhl.jpg",
  ingredientes: [
    "400 g de fideos",
    "500 g de carne de res o pollo",
    "1 cebolla",
    "2 dientes de ajo",
    "1 taza de culantro licuado",
    "Ají panca",
    "1 taza de caldo",
    "Sal y pimienta"
  ],
  preparacion: [
    "Sofreír ajo, cebolla y ají panca.",
    "Agregar carne y dorar.",
    "Incorporar culantro y caldo.",
    "Añadir fideos y cocinar hasta que absorban el líquido.",
    "Servir con salsa criolla."
  ]
},
{
  id: 62,
  nombre: "Sopa de Choros",
  categoria: "caldo",
  descripcion: "Sopa marina con choros (mejillones), papas, arroz y verduras, típica de la costa.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869575/sopa-de-choros_trm5tb.jpg",
  ingredientes: [
    "1 kg de choros limpios",
    "2 papas",
    "1/2 taza de arroz",
    "1 cebolla",
    "1 tomate",
    "Ajo, sal y pimienta",
    "Perejil"
  ],
  preparacion: [
    "Sofreír ajo, cebolla y tomate.",
    "Agregar choros, papas y arroz.",
    "Cubrir con agua y cocinar hasta que todo esté suave.",
    "Sazonar y servir con perejil."
  ]
},
{
  id: 63,
  nombre: "Chairo",
  categoria: "caldo",
  descripcion: "Sopa altiplánica con carne, chuño, verduras y hierbas, tradicional del sur andino.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869569/chairo_htagyc.jpg",
  ingredientes: [
    "250 g de carne de res",
    "100 g de chuño",
    "Papas, zanahoria, apio",
    "1/2 taza de habas",
    "1/2 taza de trigo",
    "Hierba buena, orégano",
    "Sal y pimienta"
  ],
  preparacion: [
    "Cocinar la carne con trigo y verduras.",
    "Agregar chuño y habas, cocinar hasta que todo esté suave.",
    "Sazonar y servir con hierbas."
  ]
},
{
  id: 64,
  nombre: "Sopa a Minuta",
  categoria: "caldo",
  descripcion: "Sopa rápida peruana con carne molida, fideos, leche y huevo.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869580/sopa_a_la_minuta_svufa5.jpg",
  ingredientes: [
    "200 g de carne molida",
    "1 cebolla",
    "2 dientes de ajo",
    "1 tomate",
    "100 g de fideos",
    "1 huevo",
    "1 taza de leche evaporada",
    "Sal y pimienta"
  ],
  preparacion: [
    "Sofreír ajo, cebolla y tomate.",
    "Agregar carne y dorar.",
    "Añadir agua y fideos, cocinar hasta que estén listos.",
    "Incorporar leche y huevo batido.",
    "Sazonar y servir."
  ]
},
{
  id: 65,
  nombre: "Puchero",
  categoria: "caldo",
  descripcion: "Caldo abundante con carnes, verduras y tubérculos, típico de fiestas en la sierra.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747869572/puchero_zdlncj.jpg",
  ingredientes: [
    "500 g de carne de res",
    "500 g de cerdo",
    "1 pollo",
    "Papas, camote, yuca",
    "Col, zanahoria, choclo",
    "Garbanzos",
    "Sal y hierbas"
  ],
  preparacion: [
    "Cocinar las carnes en agua.",
    "Agregar tubérculos y verduras.",
    "Incorporar garbanzos y cocinar hasta que todo esté suave.",
    "Sazonar y servir caliente."
  ]
},
{
  id: 66,
  nombre: "Leche Asada",
  categoria: "postre",
  descripcion: "Postre clásico peruano con textura cremosa y costra dorada, hecho con leche, huevos, azúcar y esencia de vainilla, horneado a baño María.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870263/leche-asada_kcvpag.jpg",
  ingredientes: [
    "1 litro de leche fresca",
    "6 huevos",
    "300 g de azúcar",
    "1 cucharadita de esencia de vainilla"
  ],
  preparacion: [
    "Precalentar el horno a 180 °C.",
    "Batir los huevos ligeramente.",
    "Agregar la leche caliente, el azúcar y la esencia de vainilla, mezclar bien.",
    "Verter la mezcla en moldes individuales o uno grande acaramelado.",
    "Hornear a baño María durante 45 a 60 minutos hasta que cuaje y se forme una costra dorada.",
    "Dejar enfriar y servir."
  ]
},
{
  id: 67,
  nombre: "Pastel de Choclo",
  categoria: "postre",
  descripcion: "Postre tradicional hecho con choclo molido, azúcar y canela, horneado hasta dorar, con sabor dulce y textura suave.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870276/pastel-choclo_smhfa7.jpg",
  ingredientes: [
    "6 choclos desgranados",
    "1 taza de azúcar",
    "1 cucharadita de canela en polvo",
    "1 cucharada de mantequilla"
  ],
  preparacion: [
    "Licuar el choclo con un poco de agua hasta obtener una mezcla homogénea.",
    "Agregar el azúcar y la canela, mezclar bien.",
    "Verter en un molde engrasado con mantequilla.",
    "Hornear a 180 °C por 40 minutos hasta que esté dorado.",
    "Dejar enfriar y servir."
  ]
},
{
  id: 68,
  nombre: "Dulce de Quinua",
  categoria: "postre",
  descripcion: "Postre nutritivo a base de quinua cocida en leche con azúcar, canela y clavo, con textura cremosa y sabor dulce.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870286/dulce-quinua_cwpzi1.jpg",
  ingredientes: [
    "1 taza de quinua",
    "1 litro de leche",
    "200 g de azúcar",
    "1 rama de canela",
    "2 clavos de olor"
  ],
  preparacion: [
    "Lavar la quinua y cocinar en agua hasta que esté suave.",
    "Agregar la leche, azúcar, canela y clavos.",
    "Cocinar a fuego medio removiendo hasta espesar.",
    "Retirar la canela y clavos, dejar enfriar y servir."
  ]
},
{
  id: 69,
  nombre: "Mazamorra de Calabaza",
  categoria: "postre",
  descripcion: "Postre tradicional hecho con puré de calabaza, azúcar, canela y clavo, con textura suave y dulce.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870266/mazamorra-calabaza_pmbsjk.jpg",
  ingredientes: [
    "500 g de calabaza pelada y picada",
    "1 litro de agua",
    "300 g de azúcar",
    "1 rama de canela",
    "2 clavos de olor"
  ],
  preparacion: [
    "Hervir la calabaza en agua hasta que esté blanda.",
    "Licuar o hacer puré la calabaza.",
    "Volver a cocinar con azúcar, canela y clavos hasta espesar.",
    "Retirar especias y servir frío o tibio."
  ]
},
{
  id: 70,
  nombre: "Mazamorra de Durazno",
  categoria: "postre",
  descripcion: "Postre dulce y suave elaborado con duraznos frescos, azúcar y especias, ideal para disfrutar frío.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870265/mazamorra-de-durazno_itfdzx.jpg",
  ingredientes: [
    "500 g de duraznos pelados y picados",
    "1 litro de agua",
    "300 g de azúcar",
    "1 rama de canela",
    "2 clavos de olor"
  ],
  preparacion: [
    "Hervir los duraznos en agua hasta que estén suaves.",
    "Agregar azúcar, canela y clavos, cocinar hasta espesar.",
    "Retirar especias y dejar enfriar.",
    "Servir frío."
  ]
},
{
  id: 71,
  nombre: "Mazamorra de Quinua",
  categoria: "postre",
  descripcion: "Postre andino cremoso hecho con quinua, leche, azúcar y especias, con sabor dulce y textura suave.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870281/mazamorra-de-quinua_oaqmyt.jpg",
  ingredientes: [
    "1 taza de quinua",
    "1 litro de leche",
    "300 g de azúcar",
    "1 rama de canela",
    "2 clavos de olor"
  ],
  preparacion: [
    "Lavar y cocinar la quinua hasta que esté suave.",
    "Agregar leche, azúcar, canela y clavos.",
    "Cocinar a fuego medio hasta espesar.",
    "Retirar especias y servir frío o tibio."
  ]
},
{
  id: 72,
  nombre: "Natilla Piurana",
  categoria: "postre",
  descripcion: "Postre tradicional de Piura hecho con leche, azúcar y canela, con textura cremosa y sabor dulce.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870273/natilla-piurana_ipfxku.jpg",
  ingredientes: [
    "1 litro de leche",
    "250 g de azúcar",
    "1 rama de canela",
    "1 cucharadita de esencia de vainilla"
  ],
  preparacion: [
    "Hervir la leche con la canela.",
    "Agregar azúcar y cocinar hasta que espese ligeramente.",
    "Retirar la canela y añadir la vainilla.",
    "Dejar enfriar y servir."
  ]
},
{
  id: 73,
  nombre: "Chocotejas",
  categoria: "postre",
  descripcion: "Dulce tradicional peruano de masa rellena de manjar blanco y cubierto con chocolate o azúcar glas.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870276/chocotejas_anzczw.jpg",
  ingredientes: [
    "200 g de manjar blanco",
    "100 g de chocolate para cobertura",
    "200 g de harina",
    "100 g de mantequilla",
    "Azúcar glas para decorar"
  ],
  preparacion: [
    "Preparar una masa con harina y mantequilla.",
    "Formar discos y rellenar con manjar blanco.",
    "Cerrar y sellar los dulces.",
    "Cubrir con chocolate derretido o espolvorear azúcar glas.",
    "Dejar secar y servir."
  ]
},
{
  id: 74,
  nombre: "Mazamorra de Tocosh",
  categoria: "postre",
  descripcion: "Postre tradicional hecho con tocosh (papa fermentada), azúcar y especias, con sabor característico y textura espesa.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870268/mazamorra-de-tocosh_zmglvd.jpg",
  ingredientes: [
    "1 taza de tocosh",
    "1 litro de agua",
    "300 g de azúcar",
    "1 rama de canela",
    "2 clavos de olor"
  ],
  preparacion: [
    "Lavar y cocinar los tocosh en agua hasta que estén suaves.",
    "Agregar azúcar, canela y clavos.",
    "Cocinar hasta espesar.",
    "Retirar especias y servir."
  ]
},
{
  id: 75,
  nombre: "Turrones",
  categoria: "postre",
  descripcion: "Dulce tradicional peruano hecho con maní, azúcar y miel, con textura crocante y sabor dulce.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870281/turron_exj7pv.jpg",
  ingredientes: [
    "500 g de maní tostado y pelado",
    "300 g de azúcar",
    "100 g de miel",
    "1 cucharadita de esencia de vainilla"
  ],
  preparacion: [
    "Calentar azúcar y miel hasta formar un almíbar.",
    "Agregar el maní y la vainilla, mezclar bien.",
    "Verter sobre una superficie engrasada y dejar enfriar.",
    "Cortar en cuadros y servir."
  ]
},
{
  id: 76,
  nombre: "Mazamorra de Piña",
  categoria: "postre",
  descripcion: "Postre dulce y refrescante hecho con piña, azúcar y especias, con textura suave y sabor tropical.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870268/mazamorra-de-pi%C3%B1a_ry1umy.jpg",
  ingredientes: [
    "500 g de piña picada",
    "1 litro de agua",
    "300 g de azúcar",
    "1 rama de canela",
    "2 clavos de olor"
  ],
  preparacion: [
    "Hervir la piña en agua hasta que esté blanda.",
    "Agregar azúcar, canela y clavos, cocinar hasta espesar.",
    "Retirar especias y dejar enfriar.",
    "Servir frío."
  ]
},
{
  id: 77,
  nombre: "Mazamorra de Zapallo",
  categoria: "postre",
  descripcion: "Postre tradicional hecho con zapallo, azúcar y especias, con textura cremosa y sabor dulce.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870269/mazamorra-de-zapallo_sniswt.jpg",
  ingredientes: [
    "500 g de zapallo pelado y picado",
    "1 litro de agua",
    "300 g de azúcar",
    "1 rama de canela",
    "2 clavos de olor"
  ],
  preparacion: [
    "Hervir el zapallo en agua hasta que esté blando.",
    "Licuar o hacer puré el zapallo.",
    "Cocinar con azúcar, canela y clavos hasta espesar.",
    "Retirar especias y servir frío o tibio."
  ]
},
{
  id: 78,
  nombre: "Champús",
  categoria: "postre",
  descripcion: "Postre tradicional de frutas, maíz morado y especias, muy popular en la costa y sierra peruana.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870265/champu_dvdevj.jpg",
  ingredientes: [
    "1 taza de maíz morado",
    "1 litro de agua",
    "1 taza de piña picada",
    "1 taza de membrillo picado",
    "1 taza de guayaba picada",
    "Azúcar al gusto",
    "Canela y clavos"
  ],
  preparacion: [
    "Hervir el maíz morado con canela y clavos para hacer la base.",
    "Agregar las frutas picadas y azúcar.",
    "Cocinar a fuego medio hasta que las frutas estén suaves.",
    "Dejar enfriar y servir frío."
  ]
},
{
  id: 79,
  nombre: "Papa Rellena",
  categoria: "entrada",
  descripcion: "Clásico plato peruano que consiste en una masa de papa rellena con carne sazonada, huevo duro, pasas y aceitunas, frita hasta dorar, servido con salsa criolla.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870959/papa-rellena_zfhzi6.jpg",
  ingredientes: [
    "1 kg de papas (blancas y amarillas)",
    "500 g de carne molida",
    "1 cebolla picada",
    "3 dientes de ajo picados",
    "1 cucharada de pasta de ají panca",
    "1 cucharada de pasta de tomate",
    "Sal, pimienta, comino y orégano al gusto",
    "2 huevos duros picados",
    "½ taza de pasas",
    "½ taza de aceitunas negras picadas",
    "1 huevo crudo para la masa",
    "Harina para rebozar",
    "Aceite para freír",
    "Salsa criolla para acompañar"
  ],
  preparacion: [
    "Cocer las papas con piel hasta que estén tiernas, pelarlas y prensarlas aún calientes.",
    "Dejar enfriar y agregar el huevo crudo, salpimentar y amasar hasta obtener una masa homogénea.",
    "En una sartén con aceite, sofreír cebolla, ajo, pasta de ají panca y pasta de tomate.",
    "Agregar la carne molida, sazonar con sal, pimienta, comino y orégano, cocinar hasta dorar.",
    "Incorporar huevo duro, pasas y aceitunas, mezclar y retirar del fuego.",
    "Formar bolas con la masa de papa, hacer un hueco en el centro y rellenar con la mezcla de carne.",
    "Cerrar y dar forma ovalada, pasar por harina y luego por huevo batido.",
    "Freír en aceite caliente hasta dorar por todos lados.",
    "Escurrir en papel absorbente y servir con salsa criolla."
  ]
},
{
  id: 80,
  nombre: "Salchipollo",
  categoria: "entrada",
  descripcion: "Plato popular peruano que combina salchichas fritas con trozos de pollo, acompañado de papas fritas y salsa criolla.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870958/salchipollo_cpoepv.jpg",
  ingredientes: [
    "300 g de pollo en trozos",
    "300 g de salchichas cortadas en rodajas",
    "Papas fritas",
    "Aceite para freír",
    "Sal y pimienta",
    "Salsa criolla para acompañar"
  ],
  preparacion: [
    "Sazonar el pollo con sal y pimienta y freír hasta dorar.",
    "Freír las salchichas en rodajas hasta que estén doradas.",
    "Freír papas a la francesa.",
    "Mezclar pollo, salchichas y papas, servir acompañado de salsa criolla."
  ]
},
{
  id: 81,
  nombre: "Triple Arequipeño",
  categoria: "entrada",
  descripcion: "Delicioso plato de Arequipa que combina tres tipos de carnes sazonadas y fritas, acompañado de papas y salsa criolla.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870958/triple-arequipe%C3%B1o_midlkd.jpg",
  ingredientes: [
    "200 g de carne de res",
    "200 g de carne de cerdo",
    "200 g de pollo",
    "Papas fritas",
    "Sal, pimienta y ajo",
    "Salsa criolla"
  ],
  preparacion: [
    "Sazonar las carnes con sal, pimienta y ajo.",
    "Freír cada carne por separado hasta dorar.",
    "Servir las carnes juntas con papas fritas y salsa criolla."
  ]
},
{
  id: 82,
  nombre: "Huevos a la Rusa",
  categoria: "entrada",
  descripcion: "Huevos rellenos con una mezcla de atún, mayonesa y vegetales, decorados y servidos fríos como entrada.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870881/huevo-rusa_tia2zl.jpg",
  ingredientes: [
    "6 huevos cocidos",
    "1 lata de atún",
    "Mayonesa",
    "Cebolla picada",
    "Pimiento picado",
    "Sal y pimienta",
    "Aceitunas para decorar"
  ],
  preparacion: [
    "Pelar y cortar los huevos cocidos por la mitad, retirar las yemas.",
    "Mezclar las yemas con atún, mayonesa, cebolla, pimiento, sal y pimienta.",
    "Rellenar las claras con la mezcla.",
    "Decorar con aceitunas y servir frío."
  ]
},
{
  id: 83,
  nombre: "Canchita Serrana",
  categoria: "entrada",
  descripcion: "Maíz chulpe tostado típico de la sierra peruana, crujiente y salado, ideal para acompañar platos o como snack.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870881/canchita_ughefz.jpg",
  ingredientes: [
    "1 taza de maíz chulpe",
    "Aceite",
    "Sal al gusto"
  ],
  preparacion: [
    "Calentar aceite en sartén.",
    "Agregar el maíz y tostar hasta que revienten y estén dorados.",
    "Escurrir y salar al gusto.",
    "Servir como acompañante o snack."
  ]
},
{
  id: 84,
  nombre: "Pan con Chicharrón",
  categoria: "entrada",
  descripcion: "Sándwich peruano tradicional con chicharrón de cerdo crocante, servido en pan francés con camote frito y salsa criolla.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870881/pan-con-chicharron_sfh6gd.jpg",
  ingredientes: [
    "500 g de panceta de cerdo",
    "Pan francés",
    "Camote frito",
    "Cebolla roja",
    "Jugo de limón",
    "Sal y pimienta",
    "Aceite para freír"
  ],
  preparacion: [
    "Sazonar la panceta y freír hasta que esté crocante.",
    "Preparar salsa criolla con cebolla, limón, sal y pimienta.",
    "Armar el sándwich con pan, chicharrón, camote frito y salsa criolla.",
    "Servir inmediatamente."
  ]
},
{
  id: 85,
  nombre: "Papa a la Diabla",
  categoria: "entrada",
  descripcion: "Plato picante de papas sancochadas bañadas en una salsa roja picante hecha con ajíes y especias.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870916/papa-diabla_nusgmg.jpg",
  ingredientes: [
    "4 papas sancochadas",
    "2 ajíes amarillos",
    "1 diente de ajo",
    "1 cebolla pequeña",
    "1 tomate",
    "Aceite",
    "Sal y pimienta"
  ],
  preparacion: [
    "Licuar ajíes, ajo, cebolla y tomate.",
    "Sofreír la mezcla en aceite, sazonar con sal y pimienta.",
    "Bañar las papas sancochadas con la salsa y servir."
  ]
},
{
  id: 86,
  nombre: "Papita con Huevo",
  categoria: "entrada",
  descripcion: "Plato sencillo y nutritivo que combina papas sancochadas con huevo sancochado, servido con salsa criolla o ají.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870957/papita-con-huevo_k3fvwz.jpg",
  ingredientes: [
    "4 papas sancochadas",
    "4 huevos sancochados",
    "Salsa criolla o ají al gusto"
  ],
  preparacion: [
    "Servir papas sancochadas con huevos sancochados pelados.",
    "Acompañar con salsa criolla o ají.",
    "Servir inmediatamente."
  ]
},
{
  id: 87,
  nombre: "Ceviche de Tarwi",
  categoria: "entrada",
  descripcion: "Ceviche andino hecho con tarwi (lupino), cebolla, ají y jugo de limón, servido frío como entrada refrescante.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870881/ceviche-tarwi_smyek0.jpg",
  ingredientes: [
    "1 taza de tarwi cocido",
    "1 cebolla roja en juliana",
    "2 limones (jugo)",
    "Ají amarillo picado",
    "Sal y pimienta",
    "Cilantro picado"
  ],
  preparacion: [
    "Mezclar el tarwi con cebolla, ají y cilantro.",
    "Agregar jugo de limón, sal y pimienta al gusto.",
    "Dejar reposar 10 minutos y servir frío."
  ]
},
{
  id: 88,
  nombre: "Yuyo Frito",
  categoria: "entrada",
  descripcion: "Plato costeño que consiste en yuyo (alga marina) frito hasta quedar crujiente, servido como snack o acompañamiento.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870959/yuyo-frito_ghtfsk.jpg",
  ingredientes: [
    "200 g de yuyo fresco",
    "Aceite para freír",
    "Sal al gusto"
  ],
  preparacion: [
    "Lavar y escurrir el yuyo.",
    "Freír en aceite caliente hasta que esté crujiente.",
    "Escurrir y salar al gusto.",
    "Servir como snack o acompañante."
  ]
},
{
  id: 89,
  nombre: "Picante de Yuyo",
  categoria: "entrada",
  descripcion: "Plato tradicional con yuyo marino cocido en salsa picante de ajíes, cebolla y especias.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870958/picante-yuyo_mbh14s.jpg",
  ingredientes: [
    "300 g de yuyo fresco",
    "1 cebolla picada",
    "2 ajíes amarillos",
    "2 dientes de ajo",
    "Aceite",
    "Sal y pimienta"
  ],
  preparacion: [
    "Sofreír cebolla, ajo y ají amarillo en aceite.",
    "Agregar el yuyo y cocinar hasta que esté tierno.",
    "Sazonar con sal y pimienta y servir caliente."
  ]
},
{
  id: 90,
  nombre: "Brochetas de Pollo",
  categoria: "entrada",
  descripcion: "Brochetas de trozos de pollo marinados y asados, servidas con salsa y acompañamientos.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870878/brochetas-pollo_gywsoy.jpg",
  ingredientes: [
    "500 g de pollo en cubos",
    "2 cucharadas de salsa de soja",
    "1 cucharada de ajo picado",
    "Jugo de 1 limón",
    "Sal y pimienta",
    "Palitos para brochetas"
  ],
  preparacion: [
    "Marinar el pollo con salsa de soja, ajo, limón, sal y pimienta por 30 minutos.",
    "Ensartar los cubos de pollo en los palitos.",
    "Asar en parrilla o sartén hasta que estén cocidos y dorados.",
    "Servir con salsa al gusto."
  ]
},
{
  id: 91,
  nombre: "Caigua Rellena",
  categoria: "entrada",
  descripcion: "Plato típico andino que consiste en caigua (pepino andino) rellena con carne sazonada, gratinada con queso.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870884/caigua-rellena_qb8pua.jpg",
  ingredientes: [
    "6 caiguas",
    "300 g de carne molida",
    "1 cebolla picada",
    "2 dientes de ajo",
    "1 tomate picado",
    "Queso rallado",
    "Sal, pimienta y comino",
    "Aceite"
  ],
  preparacion: [
    "Cocer las caiguas y cortar por la mitad, retirar semillas.",
    "Sofreír cebolla, ajo, tomate y carne molida, sazonar.",
    "Rellenar las caiguas con la mezcla de carne.",
    "Espolvorear queso rallado y gratinar en horno hasta dorar.",
    "Servir caliente."
  ]
},
{
  id: 92,
  nombre: "Rachi",
  categoria: "entrada",
  descripcion: "Plato tradicional andino a base de carne de res o cerdo cocida con especias y servido con papas o mote.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747870959/rachi_tc6eim.jpg",
  ingredientes: [
    "500 g de carne de res o cerdo",
    "1 cebolla",
    "2 dientes de ajo",
    "Comino, orégano, sal y pimienta",
    "Papas sancochadas o mote para acompañar"
  ],
  preparacion: [
    "Cocer la carne con cebolla, ajo y especias hasta que esté tierna.",
    "Cortar en trozos y servir con papas sancochadas o mote.",
    "Acompañar con salsa criolla si se desea."
  ]
},
{
  id: 93,
  nombre: "Pollo a la Brasa",
  categoria: "principal",
  descripcion: "Plato emblemático peruano de pollo marinado con especias y cerveza negra, asado lentamente para obtener una piel crocante y carne jugosa.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871363/pollo-brasa_nee5gz.jpg",
  ingredientes: [
    "1 pollo entero (aprox. 3 kg)",
    "4 cucharadas de sal",
    "1 cucharada de romero picado",
    "1 cucharada de pimienta negra molida",
    "1 cucharadita de comino",
    "1 cucharada de orégano",
    "2 cucharadas de ajo molido",
    "1 cucharada de ají panca",
    "1 vaso de cerveza negra",
    "2 cucharadas de sillao (salsa de soja)",
    "Mantequilla para pincelar"
  ],
  preparacion: [
    "Sumergir el pollo en salmuera (agua con sal) y refrigerar por 8 horas.",
    "Mezclar romero, pimienta, comino, orégano, ajo, ají panca, cerveza negra y sillao para preparar la marinada.",
    "Escurrir el pollo, cubrirlo con la marinada, introduciendo la mezcla entre la piel y la carne.",
    "Dejar reposar en refrigeración al menos 8 horas más, volteando ocasionalmente.",
    "Colocar el pollo en una bandeja para horno, pincelar con mantequilla.",
    "Hornear a 270 ºC durante 90 minutos, bañando con jugos y girando la bandeja cada 15-20 minutos.",
    "Pincelar nuevamente con mantequilla 20 minutos antes de terminar para dorar la piel.",
    "Retirar cuando la piel esté dorada y jugosa, servir acompañado de papas fritas y salsa de ají."
  ]
},
{
  id: 94,
  nombre: "Pachamanca",
  categoria: "principal",
  descripcion: "Plato tradicional andino cocido en horno de tierra con piedras calientes, que incluye carnes, papas, habas y hierbas aromáticas.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871373/pachamanca_vxdtgh.jpg",
  ingredientes: [
    "Carne de res, cerdo, pollo y cordero",
    "Papas, camote, habas, choclo",
    "Hierbas aromáticas (huacatay, chincho)",
    "Sal y ají",
    "Piedras calientes"
  ],
  preparacion: [
    "Marinar las carnes con sal, ají y hierbas.",
    "Calentar piedras hasta que estén muy calientes.",
    "En un hoyo en la tierra, colocar piedras calientes, luego las carnes y verduras.",
    "Cubrir con hojas y tierra para cocinar al vapor durante varias horas.",
    "Desenterrar y servir caliente."
  ]
},
{
  id: 95,
  nombre: "Seco de Carne",
  categoria: "principal",
  descripcion: "Guiso tradicional peruano de carne de res cocida en salsa de cilantro, cerveza y ají amarillo, acompañado de arroz y frejoles.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871381/seco-carne_ydtaes.jpg",
  ingredientes: [
    "1 kg de carne de res en trozos",
    "1 cebolla picada",
    "2 tomates picados",
    "1 taza de cilantro licuado",
    "1 taza de cerveza negra",
    "2 ajíes amarillos",
    "2 dientes de ajo",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Sofreír cebolla, ajo y ají amarillo.",
    "Agregar la carne y dorar.",
    "Incorporar tomate, cilantro licuado y cerveza.",
    "Cocinar a fuego lento hasta que la carne esté tierna y la salsa espese.",
    "Servir con arroz blanco y frejoles."
  ]
},
{
  id: 96,
  nombre: "Arroz con Camarones",
  categoria: "principal",
  descripcion: "Plato costeño que combina arroz sazonado con camarones, ají amarillo y especias, con un sabor intenso y textura cremosa.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871361/arroz-camarones_z4f2dn.jpg",
  ingredientes: [
    "500 g de camarones limpios",
    "2 tazas de arroz",
    "1 cebolla picada",
    "2 dientes de ajo",
    "1 ají amarillo",
    "1 tomate picado",
    "1 taza de caldo de pescado",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Sofreír cebolla, ajo y ají amarillo.",
    "Agregar camarones y cocinar brevemente.",
    "Incorporar tomate y arroz, mezclar bien.",
    "Agregar caldo y cocinar hasta que el arroz esté listo y cremoso.",
    "Sazonar y servir caliente."
  ]
},
{
  id: 97,
  nombre: "Jalea Marina",
  categoria: "principal",
  descripcion: "Plato típico costeño que consiste en mariscos fritos crujientes acompañados de salsa criolla y yuca frita.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871363/jalea_efzi6p.jpg",
  ingredientes: [
    "500 g de mariscos surtidos (calamares, pescado, camarones)",
    "Harina para rebozar",
    "Aceite para freír",
    "Cebolla, tomate, ají, limón para salsa criolla",
    "Yuca frita"
  ],
  preparacion: [
    "Limpiar y cortar los mariscos.",
    "Rebozar con harina y freír en aceite caliente hasta dorar.",
    "Preparar salsa criolla con cebolla, tomate, ají y limón.",
    "Servir los mariscos fritos con salsa criolla y yuca frita."
  ]
},
{
  id: 98,
  nombre: "Cau Cau",
  categoria: "principal",
  descripcion: "Guiso peruano de mondongo (callos) cortado en cubos, cocido con papas, ají amarillo y hierbas aromáticas.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871360/cau-cau_lfqoxn.jpg",
  ingredientes: [
    "500 g de mondongo limpio",
    "2 papas cortadas en cubos",
    "1 cebolla picada",
    "2 dientes de ajo",
    "1 ají amarillo",
    "1 taza de caldo",
    "Hierbas aromáticas (hierba buena, perejil)",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Cocer el mondongo hasta que esté tierno.",
    "Sofreír cebolla, ajo y ají amarillo.",
    "Agregar mondongo, papas y caldo.",
    "Cocinar hasta que las papas estén suaves.",
    "Añadir hierbas, sazonar y servir."
  ]
},
{
  id: 99,
  nombre: "Juanes",
  categoria: "principal",
  descripcion: "Plato amazónico que consiste en arroz sazonado con especias, envuelto en hojas de bijao y cocido al vapor, generalmente con pollo o pescado.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871361/juanes_wkjo5y.jpg",
  ingredientes: [
    "2 tazas de arroz",
    "1 pechuga de pollo cocida y desmenuzada",
    "1 cebolla picada",
    "2 dientes de ajo",
    "1 ají amarillo",
    "Hojas de bijao",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Sofreír cebolla, ajo y ají amarillo.",
    "Agregar arroz y pollo, mezclar y sazonar.",
    "Colocar la mezcla en hojas de bijao y envolver.",
    "Cocer al vapor por 45 minutos.",
    "Servir caliente."
  ]
},
{
  id: 100,
  nombre: "Bistec a lo Pobre",
  categoria: "principal",
  descripcion: "Plato popular que combina bistec de res con arroz, papas fritas y huevos fritos, acompañado de plátanos maduros fritos.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871359/bistec-pobre_ud0v7b.jpg",
  ingredientes: [
    "2 bistecs de res",
    "4 papas para freír",
    "2 huevos",
    "2 plátanos maduros",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Sazonar y freír los bistecs.",
    "Freír las papas y plátanos maduros.",
    "Freír los huevos.",
    "Servir todo junto en un plato."
  ]
},
{
  id: 101,
  nombre: "Escabeche de Pollo",
  categoria: "principal",
  descripcion: "Plato frío de pollo marinado en vinagre, ajíes y especias, acompañado de cebolla encurtida.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871382/escabeche-pollo_vliz1o.jpg",
  ingredientes: [
    "1 pollo entero cortado en presas",
    "1 taza de vinagre",
    "2 cebollas en juliana",
    "2 ajíes amarillos",
    "2 dientes de ajo",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Freír el pollo hasta dorar.",
    "Preparar una mezcla con vinagre, ajíes, ajo y cebolla.",
    "Marinar el pollo en esta mezcla y dejar reposar.",
    "Servir frío con cebolla encurtida."
  ]
},
{
  id: 102,
  nombre: "Seco de Cabrito",
  categoria: "principal",
  descripcion: "Guiso tradicional del norte peruano hecho con cabrito cocido en salsa de cilantro, cerveza y especias.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871364/seco-cabrito_fufjwc.jpg",
  ingredientes: [
    "1 kg de cabrito en trozos",
    "1 cebolla picada",
    "2 tomates picados",
    "1 taza de cilantro licuado",
    "1 taza de cerveza negra",
    "2 dientes de ajo",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Sofreír cebolla y ajo.",
    "Agregar cabrito y dorar.",
    "Incorporar tomate, cilantro y cerveza.",
    "Cocinar a fuego lento hasta que la carne esté tierna.",
    "Servir con arroz o yuca."
  ]
},
{
  id: 103,
  nombre: "Frito Trujillano",
  categoria: "principal",
  descripcion: "Plato típico de Trujillo que combina arroz, carne frita y salsa criolla, acompañado de plátanos fritos.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871361/frito-trujillano_wtxeva.jpg",
  ingredientes: [
    "1 taza de arroz cocido",
    "300 g de carne de res frita",
    "1 cebolla picada",
    "2 tomates picados",
    "Plátanos maduros fritos",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Freír cebolla y tomate para salsa criolla.",
    "Mezclar arroz con salsa y carne frita.",
    "Servir acompañado de plátanos fritos."
  ]
},
{
  id: 104,
  nombre: "Locro de Zapallo",
  categoria: "principal",
  descripcion: "Sopa espesa y cremosa de zapallo, con queso fresco y hierbas, típica de la sierra peruana.",
  imagen: "https://res.cloudinary.com/dlk4jsoqp/image/upload/v1747871362/locro-zapallo_nvoy1g.jpg",
  ingredientes: [
    "1 kg de zapallo pelado y picado",
    "1 cebolla picada",
    "2 dientes de ajo",
    "200 g de queso fresco",
    "1 taza de leche",
    "Hierbas (perejil, huacatay)",
    "Aceite, sal y pimienta"
  ],
  preparacion: [
    "Sofreír cebolla y ajo.",
    "Agregar zapallo y cocinar hasta ablandar.",
    "Licuar la mezcla y volver a cocinar con leche y queso.",
    "Sazonar y servir caliente."
  ]
}
];

// Si no hay datos en localStorage, guardar los datos iniciales
if (!localStorage.getItem("platosPeruanos")) {
  localStorage.setItem("platosPeruanos", JSON.stringify(platosPeruanos));
}