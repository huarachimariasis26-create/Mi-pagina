<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aristogato🐈</title>
    <link rel="stylesheet" href="stilos.css">
</head>
<body>

<header>
    <img src="logo.png" alt="Logo de Aristogato" class="logo" width="100" height="100">
    <h1>Bienvenido a Aristogato🐈</h1>
    <p>Todo para consentir a tu compañero</p>
</header>

<nav>
    <a href="#inicio">Inicio</a>
    <a href="#productos">Productos</a>

    <a href="#promociones">Promociones</a>
    <a href="#servicios">Servicios</a>
    <a href="#consejos">Consejos</a>
    <a href="#contacto">Contacto</a>
</nav>

<!-- 1. SECCIÓN INICIO -->
<section id="inicio">

    <h2>Bienvenido a Aristogato 🐈</h2>

    <div class="presentacion-inicio">

        <h3>¡Todo para consentir a tu compañero!</h3>

        <p>
            Somos una tienda dedicada a ofrecer productos
            para el cuidado y bienestar de tus mascotas.
        </p>

        <p>
            En Aristogato nos apasiona brindar lo mejor
            para tu compañero felino. Aquí encontrarás
            juguetes, accesorios, alimentos y mucho más.
        </p>

    </div>

    <!-- POR QUÉ ELEGIRNOS -->
    <h2>¿Por qué elegir Aristogato?</h2>

    <div class="contenedor-inicio">

        <div class="tarjeta-inicio">
            <h3>🐾 Calidad</h3>
            <p>
                Buscamos ofrecer productos útiles y de
                calidad para el bienestar de tu gato.
            </p>
        </div>

        <div class="tarjeta-inicio">
            <h3>❤️ Cariño</h3>
            <p>
                Nos importa el cuidado y la felicidad
                de cada compañero felino.
            </p>
        </div>

        <div class="tarjeta-inicio">
            <h3>🐱 Variedad</h3>
            <p>
                Contamos con diferentes opciones de
                juguetes, accesorios y productos.
            </p>
        </div>

    </div>

    <!-- INVITACIÓN -->
    <div class="invitacion-inicio">

        <h3>¡Tu michi merece lo mejor!</h3>

        <p>
            Explora nuestro catálogo y descubre todo
            lo que tenemos preparado para tu mascota.
        </p>

        <a href="#productos" class="boton-inicio">
            Conocer productos
        </a>

    </div>

</section>

<section id="productos">
    <h2>Productos destacados</h2>
    <div class="buscador" >
      <input type="text" id="buscarProducto" placeholder="Buscar productos...">
      <button type="button"   id="btnBuscar">Buscar</button>
    </div>
      <p id="mensajeBusqueda"></p>
    <div class="productos">
        <article class="producto">
            <h3>Rascador para gatos</h3>
            <img src="rascador.png" alt="Rascador para gatos">
            <p>Ideal para que tu gato pueda jugar y cuidar sus uñas.</p>
            <p>Precio: 120 Bs</p>
        </article>

        <article class="producto">
            <h3>Casa para gatos</h3>
            <img src="casa.png" alt="Casa para gatos">
            <p>Un lugar cómodo y seguro para que tu gato descanse.</p>
            <p>Precio: 180 Bs</p>
        </article>

        <article class="producto">
            <h3>Juguetes interactivos</h3>
            <img src="juguetes.png" alt="Juguetes interactivos">
            <p>Estimula la mente y el cuerpo de tu gato.</p>
            <p>Precio: 45 Bs</p>
        </article>

    </div>
        <h2>Lista de productos</h2>

    <table border="1">
        <tr>
            <th>Producto</th>
            <th>Categoria</th>
            <th>Precio</th>
        </tr>
        <tr>
            <td>Rascador para gatos</td>
            <td>Accesorios</td>
            <td>120 Bs</td>
        </tr>
        <tr>
            <td>Casa para gatos</td>
            <td>Accesorios</td>
            <td>180 Bs</td>
        </tr>
        <tr>
            <td>Juguetes interactivos</td>
            <td>Juguetes</td>
            <td>45 Bs</td>
        </tr>
        <tr>
            <td>Arena para gatos</td>
            <td>Higiene</td>
            <td>60 Bs</td>
        </tr>
    </table>
</section>


<!-- 3. SECCIÓN PROMOCIONES -->
<section id="promociones">

    <h2>Promociones especiales</h2>

    <p>
        ¡En Aristogato tenemos sorpresas para consentir
        a tu compañero felino!
    </p>

    <!-- PROMOCIÓN DESTACADA -->
    <div class="promo-principal">

        <h3>🐾 ¡Ofertas para tu michi!</h3>

        <p>
            Descubre nuestros productos destacados y
            encuentra opciones especiales para tu mascota.
        </p>

    </div>

    <!-- TARJETAS DE PROMOCIONES -->
    <div class="contenedor-promociones">

        <div class="tarjeta-promo">

            <h3>🐱 Combo gatuno</h3>

            <p>
                Combina un rascador con juguetes para
                mantener entretenido a tu gato.
            </p>

            <span>Consulta el precio</span>

        </div>

        <div class="tarjeta-promo">

            <h3>🎾 Diversión felina</h3>

            <p>
                Descubre nuestra variedad de juguetes
                para que tu mascota se divierta.
            </p>

            <span>Productos disponibles</span>

        </div>

        <div class="tarjeta-promo">

            <h3>🏠 Hogar cómodo</h3>

            <p>
                Encuentra casas y accesorios para crear
                un espacio cómodo para tu compañero.
            </p>

            <span>Consulta disponibilidad</span>

        </div>

    </div>

    <!-- INFORMACIÓN ADICIONAL -->
    <div class="info-promociones">

        <h3>¿Cómo aprovechar nuestras promociones?</h3>

        <ol>
            <li>Explora las promociones disponibles.</li>
            <li>Elige los productos que te interesan.</li>
            <li>Contáctanos para consultar precios y disponibilidad.</li>
        </ol>


    </div>

</section>
<section id="servicios">
    <h2>Servicios</h2>

    <article>
        <h3>Entrega a domicilio</h3>
        <p>Ofrecemos entrega a domicilio para que recibas tus productos de manera cómoda y segura.</p>
    </article>

    <article>
        <h3>Pedidos personalizados</h3>
        <p>Podemos preparar un kit de acuerdo a sus gustos.</p>
    </article>

    <article>
        <h3>Asesoramiento en cuidado felino</h3>
        <p>Nuestro equipo está disponible para brindarte asesoramiento sobre el cuidado y bienestar de tu gato.</p>
    </article>
</section>
<!-- 5. SECCIÓN CONSEJOS -->
<section id="consejos">

    <h2>Consejos para cuidar a tu gato 🐾</h2>

    <p>
        Los gatos necesitan cuidados, atención y un
        ambiente seguro. Aquí te compartimos algunas
        recomendaciones para su bienestar.
    </p>

    <div class="contenedor-consejos">

        <!-- ALIMENTACIÓN -->
        <article class="tarjeta-consejo">

            <h3>🥣 Alimentación</h3>

            <p>
                Una alimentación adecuada ayuda a mantener
                a tu gato saludable.
            </p>

            <ul>
                <li>Ofrece alimento apropiado para su edad.</li>
                <li>Mantén agua fresca y limpia.</li>
                <li>Evita darle alimentos tóxicos para gatos.</li>
                <li>Respeta sus horarios de alimentación.</li>
            </ul>

        </article>

        <!-- HIGIENE -->
        <article class="tarjeta-consejo">

            <h3>🧼 Higiene</h3>

            <p>
                Mantener limpio su entorno es importante
                para su comodidad.
            </p>

            <ul>
                <li>Limpia su arenero regularmente.</li>
                <li>Lava sus recipientes de comida y agua.</li>
                <li>Cepilla su pelaje según sus necesidades.</li>
                <li>Mantén limpio su espacio de descanso.</li>
            </ul>

        </article>

        <!-- SALUD -->
        <article class="tarjeta-consejo">

            <h3>🏥 Salud</h3>

            <p>
                La prevención y los controles veterinarios
                ayudan a cuidar su salud.
            </p>

            <ul>
                <li>Realiza controles veterinarios.</li>
                <li>Mantén al día sus vacunas.</li>
                <li>Consulta sobre la desparasitación.</li>
                <li>Acude al veterinario si notas cambios
                    en su comportamiento o salud.</li>
            </ul>

        </article>

        <!-- ENTRETENIMIENTO -->
        <article class="tarjeta-consejo">

            <h3>🎾 Entretenimiento</h3>

            <p>
                El juego permite que tu gato se mantenga
                activo y estimulado.
            </p>

            <ul>
                <li>Utiliza juguetes apropiados.</li>
                <li>Dedica tiempo para jugar con él.</li>
                <li>Proporciona rascadores.</li>
                <li>Ofrece espacios para explorar.</li>
            </ul>

        </article>

        <!-- DESCANSO -->
        <article class="tarjeta-consejo">

            <h3>🛏️ Descanso</h3>

            <p>
                Los gatos necesitan lugares tranquilos
                para descansar.
            </p>

            <ul>
                <li>Prepara una cama cómoda.</li>
                <li>Busca un lugar tranquilo.</li>
                <li>Evita interrumpir sus horas de sueño.</li>
                <li>Mantén su espacio limpio.</li>
            </ul>

        </article>

     

    </div>

    <!-- CONSEJO FINAL -->
    <div class="consejo-final">

        <h3>Un pequeño recordatorio ❤️</h3>

        <p>
            Cada gato tiene necesidades diferentes.
            Bríndale paciencia, cariño y atención.
            Ante cualquier duda sobre su salud, consulta
            con un profesional veterinario.
        </p>

    </div>

</section>
<!-- CONTACTO Y FORMULARIO -->
<section id="contacto">

    <h2>Contáctanos</h2>



    <div class="informacion-contacto">

        <h3>Información de contacto</h3>

        <p>📱 WhatsApp: 7000000000</p>

        <p>📷 Instagram: @aristogatos</p>

    </div>

    <div class="contenedor-formulario">

        <h3>Envíanos un mensaje</h3>

        <form id="formulario">

            <label for="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                placeholder="Escribe tu nombre"
                required
            >

            <label for="correo">Correo electrónico:</label>
            <input
                type="email"
                id="correo"
                placeholder="Escribe tu correo"
                required
            >

            <label for="asunto">Asunto:</label>

            <select id="asunto" required>
                <option value="">Selecciona un asunto</option>
                <option value="Productos">Productos</option>
                <option value="Pedidos">Pedidos</option>
                <option value="Promociones">Promociones</option>
                <option value="Otros">Otros</option>
            </select>

            <label for="mensaje">Mensaje:</label>

            <textarea
                id="mensaje"
                placeholder="Escribe tu mensaje"
                required
            ></textarea>

            <button type="submit">Enviar mensaje</button>

        </form>

        <p id="mensajeEstado"></p>

        <h3>Mensajes registrados</h3>

        <ul id="listaUsuarios"></ul>

    </div>

</section>

<footer>
    <p>&copy; 2026 Aristogato🐈. Todos los derechos reservados.</p>
</footer>

<script src="java.js"></script>

</body>
</html>
