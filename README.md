# 🕊️ Guardianes del Territorio

**Guardianes del Territorio** es una plataforma educativa e interactiva que honra la memoria de activistas, líderes indígenas, periodistas y defensores ambientales asesinados o desaparecidos en México por proteger el territorio, el medio ambiente y los derechos de sus comunidades.

🌐 **Sitio web en línea:**  
👉 [https://front-line-defenders.vercel.app/](https://front-line-defenders.vercel.app/)

---

## 🎯 Propósito

El proyecto busca **visibilizar y preservar la memoria** de las personas defensoras del territorio y la naturaleza en México.  
A través de datos abiertos y fuentes verificadas, promueve la **educación ambiental**, la **defensa de los derechos humanos** y la **justicia social**.

**Objetivos principales:**
- Documentar casos verificados de agresiones y asesinatos contra personas defensoras.
- Facilitar el acceso a información contextual y educativa.
- Fomentar la empatía, la reflexión crítica y la conciencia ambiental en la sociedad.

---

## 🧭 Estructura del Proyecto

El sitio está desarrollado con **React + Vite**, y utiliza un diseño **minimalista, accesible y respetuoso**, priorizando los datos y la memoria sobre elementos visuales distractores.

```
src/
├── api/
│   ├── config.js
│   └── guardiansApi.js
├── components/
│   ├── GuardianCard.jsx
│   └── Modal.jsx
├── data/
│   └── sampleData.js
├── main.jsx
└── style.css
```

### Componentes principales

- **GuardianCard:** muestra una tarjeta con nombre, año, territorio y fotografía del defensor o defensora.  
- **Modal:** despliega información ampliada y enlaces a las fuentes originales.  
- **guardiansApi.js:** gestiona el consumo de datos desde una API (MockAPI.io o JSON local).

---

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [Vercel](https://vercel.com/) para despliegue y hosting
- [MockAPI](https://mockapi.io/) para la generación de JSON y hosting de API


---

## 🚀 Cómo ejecutar el proyecto localmente

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/guardianes-del-territorio.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el entorno de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre el navegador en:

   ```
   http://localhost:5173/
   ```

---

## 📊 Datos y Fuentes

Cada registro proviene de fuentes **verificadas y públicas**, incluyendo:
- [Mongabay](https://es.mongabay.com)
- [La Jornada](https://www.jornada.com.mx)
- [El País](https://elpais.com)
- [HRD Memorial](https://hrdmemorial.org)
- [Wikipedia](https://es.wikipedia.org)
- Fuente de inspiración: 
   - [Front Line Defenders](https://www.frontlinedefenders.org/)

Los datos se almacenan en formato JSON, con estructura:
```json
{
  "id": "1",
  "name": "Homero Gómez González",
  "territory": "El Rosario, Michoacán, México",
  "role": "Defensor ambiental / encargado del Santuario de la Mariposa Monarca",
  "murder_year": 2020,
  "bio": "Agrónomo y líder comunitario que protegía el santuario y luchaba contra la tala ilegal.",
  "imageUrl": "https://...",
  "source": ["https://..."],
  "status": "asesinado"
}
```

---

## 💚 Principios éticos y de diseño

- **Respeto y dignidad:** las personas son presentadas con sensibilidad y veracidad.  
- **Accesibilidad:** lenguaje claro, interfaz legible y navegación sencilla.  
- **Memoria y educación:** el proyecto busca inspirar conciencia, no morbo.  
- **Código abierto:** cualquier persona puede reutilizar o contribuir al proyecto para fortalecer la memoria colectiva.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas.  
Puedes proponer mejoras en el código, accesibilidad o nuevas fuentes de datos verificadas.  

1. Haz un fork del repositorio.  
2. Crea una rama con tu mejora:  
   ```bash
   git checkout -b mejora/nombre
   ```
3. Envía un pull request con una descripción clara.
