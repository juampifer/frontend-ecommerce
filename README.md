## Descripción

Es un carrito de compras básico hecho en NextJS 15, donde se utilizó React con tailwind para la UI, Javascript como lenguaje de programación, el patrón redux(usando RTK) para el manejo del estado global, además para mejorar la experiencia de usuario se utilizó SweetAlert2. Para funcionar necesita del backend https://github.com/juampifer/backend-ecommerce

## Guía de inicio

Una vez clonado el repositorio, se deben seguir los siguientes pasos para ejecutar el server:

1.  Instalar todas las dependencias del proyecto.
    ```bash
    npm install
    ```
2.	Configura las variables de entorno:
    Renombra el archivo .env.local.example a .env.local en la raíz del proyecto y configura las variables según tu entorno:
    ```env
    # .env.local
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```
3.  Ejecuta la aplicación hecha en nextjs:
    ```bash
    npm run dev
    ```
4. Abre el navegador en la siguiente dirección:
[http://localhost:3000](http://localhost:3000)
