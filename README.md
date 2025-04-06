# prueba-tecnica-qa-izertis

Este repositorio contiene la documentación de la prueba técnica para el rol de QA en Izertis.

## Cómo ejecutar el proyecto

**Requisitos**
Tener instalado Node.js previamente 
Tener npm disponible

**Instrucciones rápidas**
- git clone https://github.com/VanessaJS2/prueba-tecnica-qa-izertis.git
- cd prueba-tecnica-qa-izertis
- npm i
- npx cypress open     ,Para ejecutar desde la interfaz
- npx cypress run     ,Para ejecutar por consola y generar videos

## ✅ Punto 1: Reporte de Bug en el sitio de la Universidad de Antioquia

🔍 **Descripción**:  
Análisis de un bug visual donde el texto “ENLACES DE INTERÉS” aparece truncado al minimizar la ventana del navegador en la página principal de la Universidad de Antioquia.


**Entrega**:  
El reporte completo del bug se encuentra en el archivo:  
- [Bug visual en banner “ENLACES DE INTERÉS” – Universidad de Antioquia](./reporte-bug-banner-udea.pdf)

**Incluye**:
- Descripción del problema
- Pasos para reproducir
- Resultado esperado vs. actual
- Clasificación del bug
- Evidencia visual (capturas de pantalla)

## ✅ Punto 2: Automatización Web - Wikipedia

🔍 **Objetivo**:  
Automatizar la búsqueda de la palabra **automatización** en Google, acceder al link de Wikipedia, identificar el año del primer proceso automático y capturar evidencia.

**Herramienta usada**: Cypress

**Prueba automatizada**:[`wikipedia_automatizacion.cy.js`](cypress/e2e/wikipedia_automatizacion.cy.js)

**Nota técnica**:
Automatizar búsquedas directamente en Google presenta limitaciones, ya que Google implementa mecanismos anti-bots como reCAPTCHA y análisis de comportamiento automatizado, lo cual puede impedir que las pruebas se ejecuten correctamente; en esta prueba, se optó por navegar directamente al enlace de Wikipedia para evitar estas restricciones y mantener la estabilidad de la prueba.


## ✅ Punto 3: Automatización de API - Petstore

**Objetivo**:
- Crear un usuario (`POST /user`)
- Consultarlo (`GET /user/{username}`)
- Obtener mascotas vendidas (`GET /pet/findByStatus`)
- Extraer `{id, name}`
- Contar cuántas mascotas tienen el mismo nombre

**Tecnología**: Cypress + lógica personalizada en JavaScript

**Archivos clave**:
- [`pet-store.cy.js`](cypress/e2e/pet-store.cy.js): prueba automatizada
- [`nameCounter.js`](cypress/utils/nameCounter.js): clase que procesa los datos
- [`petList.js`](cypress/utils/petList.js): funcion que lista las mascotas

**Resultado esperado (ejemplo)**:
{
  "doggie": 6,
  "Bella": 2,
  "Max": 1
}

