 import img1 from "../../public/img/optimizada.png"
 import img2 from "../../public/img/optimizada2.png"
 
 const datosDelBlog = {
    es: {
      entradasBlog: [
        { 
          id: 1,
          titulo: "NeuroLink: La Interfaz Cerebro-Máquina del Futuro",
          contenido: "TechnoFuturo ha anunciado un avance revolucionario en interfaces cerebro-máquina. Este nuevo dispositivo, llamado NeuroLink, promete cambiar radicalmente la forma en que interactuamos con la tecnología. Utilizando nanotecnología avanzada, NeuroLink se implanta directamente en el cerebro, permitiendo una comunicación bidireccional sin precedentes entre el cerebro humano y los dispositivos digitales. Los primeros ensayos clínicos han mostrado resultados prometedores, con pacientes capaces de controlar dispositivos electrónicos con solo pensar en ello. Además, NeuroLink ha demostrado potencial para ayudar a personas con discapacidades neurológicas, ofreciendo nuevas posibilidades para la recuperación de funciones motoras y cognitivas. Sin embargo, este avance también plantea importantes cuestiones éticas y de privacidad que deberán ser abordadas cuidadosamente a medida que la tecnología se desarrolla.", 
          extracto: "Descubre cómo NeuroLink está cambiando la forma en que interactuamos con la tecnología...",
          categoria: "Neurotecnología",
          fecha: "2023-06-15",
         
        },
        { 
          id: 2, 
          titulo: "RoboChef: El Asistente de Cocina Inteligente", 
          contenido: "Nuestro último robot de cocina, RoboChef, utiliza IA avanzada para crear platos gourmet. Equipado con sensores de última generación y algoritmos de aprendizaje profundo, RoboChef puede analizar ingredientes, texturas y sabores con una precisión sorprendente. Este asistente culinario no solo puede seguir recetas con exactitud, sino que también puede improvisar y crear nuevas combinaciones de sabores basadas en su vasta base de datos gastronómica. RoboChef viene con una pantalla táctil intuitiva que permite a los usuarios seleccionar recetas, personalizar platos según preferencias dietéticas y alergias, e incluso recibir sugerencias basadas en los ingredientes disponibles en la cocina. Además, RoboChef se conecta a una comunidad en línea donde los usuarios pueden compartir recetas y experiencias, creando un ecosistema culinario en constante evolución.", 
          extracto: "Explora cómo RoboChef está revolucionando la industria culinaria...", 
          categoria: "Robótica", 
          fecha: "2024-06-20", 
          img: "",
         
        },
        { 
          id: 3, 
          titulo: "EcoAI: Inteligencia Artificial para un Futuro Sostenible", 
          contenido: "TechnoFuturo presenta EcoAI, un sistema de IA diseñado para optimizar el uso de recursos y combatir el cambio climático. EcoAI utiliza una red de sensores IoT y satélites para recopilar datos en tiempo real sobre patrones climáticos, uso de energía, y niveles de contaminación. Con estos datos, EcoAI puede predecir y mitigar los impactos ambientales, optimizar la distribución de recursos, y proponer soluciones personalizadas para comunidades y empresas. Por ejemplo, EcoAI ha ayudado a ciudades a reducir su consumo de energía en hasta un 30% mediante la optimización de redes eléctricas y sistemas de transporte. También ha revolucionado la agricultura sostenible, permitiendo a los agricultores maximizar sus cosechas mientras minimizan el uso de agua y pesticidas. A medida que EcoAI continúa aprendiendo y evolucionando, su potencial para crear un futuro más verde y sostenible es verdaderamente emocionante.", 
          extracto: "Descubre cómo EcoAI está ayudando a combatir el cambio climático...", 
          categoria: "IA y Sostenibilidad", 
          fecha: "2023-06-25" ,
          img: "",
         
          
        },
        { 
          id: 4, 
          titulo: "CyberGuard: Seguridad Avanzada con IA", 
          contenido: "Nuestro nuevo sistema de seguridad, CyberGuard, utiliza algoritmos de IA para detectar y neutralizar amenazas cibernéticas en tiempo real. A diferencia de los sistemas de seguridad tradicionales que dependen de firmas de malware conocidas, CyberGuard utiliza aprendizaje profundo para identificar patrones de comportamiento sospechosos, permitiéndole detectar incluso amenazas nunca antes vistas. CyberGuard no solo protege contra ataques externos, sino que también monitorea el comportamiento interno para detectar amenazas desde dentro de la organización. El sistema puede adaptarse rápidamente a nuevos tipos de ataques, actualizando constantemente sus modelos de detección. Además, CyberGuard incluye un módulo de respuesta automatizada que puede aislar sistemas comprometidos, parchear vulnerabilidades y restaurar datos, todo sin intervención humana. Con la creciente sofisticación de los ciberataques, CyberGuard representa un salto significativo en nuestra capacidad para proteger infraestructuras críticas y datos sensibles.", 
          extracto: "Aprende cómo CyberGuard está protegiendo empresas y hogares...", 
          categoria: "Ciberseguridad", 
          fecha: "2023-06-30",
          img:img2
        },
        { 
          id: 5, 
          titulo: "MediBot: Asistencia Médica Robótica", 
          contenido: "MediBot, nuestro último robot médico, está transformando la atención sanitaria. Equipado con sensores avanzados y algoritmos de IA, MediBot puede realizar diagnósticos preliminares, asistir en cirugías complejas y proporcionar cuidados postoperatorios. Sus 'manos' robóticas de alta precisión pueden realizar procedimientos con una exactitud que supera la capacidad humana, reduciendo el riesgo de errores médicos. MediBot también está programado con una extensa base de datos médica, permitiéndole ofrecer segundas opiniones instantáneas y sugerir tratamientos basados en los últimos avances médicos. En situaciones de emergencia, MediBot puede estabilizar a los pacientes y realizar procedimientos de salvamento mientras espera la llegada de personal médico humano. Además, MediBot está diseñado para interactuar con los pacientes de manera empática, utilizando procesamiento de lenguaje natural para comunicarse en múltiples idiomas y adaptar su comportamiento según las necesidades emocionales del paciente. Con MediBot, estamos un paso más cerca de proporcionar atención médica de alta calidad las 24 horas del día, los 7 días de la semana, incluso en áreas remotas o con recursos limitados.", 
          extracto: "Explora cómo MediBot está mejorando la precisión en cirugías y diagnósticos...", 
          categoria: "Robótica Médica", 
          fecha: "2023-07-05" ,
          
        },
      ],
      categorias: ["Neurotecnología", "Robótica", "IA y Sostenibilidad", "Ciberseguridad", "Robótica Médica"]
    },
    en: {
      entradasBlog: [
        { 
          id: 1, 
          titulo: "NeuroLink: The Brain-Machine Interface of the Future", 
          contenido: "TechnoFuturo has announced a revolutionary advancement in brain-machine interfaces. This new device, called NeuroLink, promises to radically change the way we interact with technology. Using advanced nanotechnology, NeuroLink is implanted directly into the brain, allowing unprecedented two-way communication between the human brain and digital devices. Early clinical trials have shown promising results, with patients able to control electronic devices by thought alone. Additionally, NeuroLink has shown potential to help people with neurological disabilities, offering new possibilities for recovering motor and cognitive functions. However, this advancement also raises important ethical and privacy issues that will need to be carefully addressed as the technology develops.", 
          extracto: "Discover how NeuroLink is changing the way we interact with technology...", 
          categoria: "Neurotechnology", 
          fecha: "2023-06-15", 
          img: "/placeholder.svg?height=400&width=600" ,
         
          
        },
        { 
          id: 2, 
          titulo: "RoboChef: The Intelligent Kitchen Assistant", 
          contenido: "Our latest kitchen robot, RoboChef, uses advanced AI to create gourmet dishes. Equipped with state-of-the-art sensors and deep learning algorithms, RoboChef can analyze ingredients, textures, and flavors with surprising accuracy. This culinary assistant can not only follow recipes with precision but also improvise and create new flavor combinations based on its vast gastronomic database. RoboChef comes with an intuitive touch screen that allows users to select recipes, customize dishes according to dietary preferences and allergies, and even receive suggestions based on available ingredients in the kitchen. Additionally, RoboChef connects to an online community where users can share recipes and experiences, creating a constantly evolving culinary ecosystem.", 
          extracto: "Explore how RoboChef is revolutionizing the culinary industry...", 
          categoria: "Robotics", 
          fecha: "2023-06-20", 
          img: "/placeholder.svg?height=400&width=600" ,
          
        },
        { 
          id: 3, 
          titulo: "EcoAI: Artificial Intelligence for a Sustainable Future", 
          contenido: "TechnoFuturo presents EcoAI, an AI system designed to optimize resource use and combat climate change. EcoAI uses a network of IoT sensors and satellites to collect real-time data on weather patterns, energy use, and pollution levels. With this data, EcoAI can predict and mitigate environmental impacts, optimize resource distribution, and propose customized solutions for communities and businesses. For example, EcoAI has helped cities reduce their energy consumption by up to 30% by optimizing power grids and transportation systems. It has also revolutionized sustainable agriculture, allowing farmers to maximize their crops while minimizing water and pesticide use. As EcoAI continues to learn and evolve, its potential to create a greener, more sustainable future is truly exciting.", 
          extracto: "Discover how EcoAI is helping to combat climate change...", 
          categoria: "AI and Sustainability", 
          fecha: "2023-06-25" ,
          
        },
        { 
          id: 4, 
          titulo: "CyberGuard: Advanced Security with AI", 
          contenido: "Our new security system, CyberGuard, uses AI algorithms to detect and neutralize cyber threats in real-time. Unlike traditional security systems that rely on known malware signatures, CyberGuard uses deep learning to identify suspicious behavior patterns, allowing it to detect even never-before-seen threats. CyberGuard not only protects against external attacks but also monitors internal behavior to detect threats from within the organization. The system can quickly adapt to new types of attacks, constantly updating its detection models. Additionally, CyberGuard includes an automated response module that can isolate compromised systems, patch vulnerabilities, and restore data, all without human intervention. With the growing sophistication of cyberattacks, CyberGuard represents a significant leap in our ability to protect critical infrastructure and sensitive data.", 
          extracto: "Learn how CyberGuard is protecting businesses and homes...", 
          categoria: "Cybersecurity", 
          fecha: "2023-06-30", 
          img: "/placeholder.svg?height=400&width=600" 
        },
        { 
          id: 5, 
          titulo: "MediBot: Robotic Medical Assistance", 
          contenido: "MediBot, our latest medical robot, is transforming healthcare. Equipped with advanced sensors and AI algorithms, MediBot can perform preliminary diagnoses, assist in complex surgeries, and provide post-operative care. Its high-precision robotic 'hands' can perform procedures with accuracy that surpasses human capability, reducing the risk of medical errors. MediBot is also programmed with an extensive medical database, allowing it to offer instant second opinions and suggest treatments based on the latest medical advances. In emergency situations, MediBot can stabilize patients and perform life-saving procedures while waiting for human medical personnel to arrive. Additionally, MediBot is designed to interact with patients empathetically, using natural language processing to communicate in multiple languages and adapt its behavior according to the patient's emotional needs. With MediBot, we are one step closer to providing high-quality medical care 24/7, even in remote areas or those with limited resources.", 
          extracto: "Explore how MediBot is improving precision in surgeries and diagnostics...", 
          categoria: "Medical Robotics", 
          fecha: "2023-07-05" 
        },
      ],
      categorias: ["Neurotechnology", "Robotics", "AI and Sustainability", "Cybersecurity", "Medical Robotics"]
    }
  }

  export default  datosDelBlog