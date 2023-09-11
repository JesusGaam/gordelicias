import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/organisms/footer/Footer";
import "./AvisoPrivacidad.scss";

const AvisoPrivacidad = () => {
  return (
    <>
      <Navbar />
      <section className="container aviso-privacidad">
        <div>
          <div className="title">Aviso de privacidad integral</div>
          <p>
          <span className="gordelicias-font">Gordelicias</span>, con domicilio en Blvd. Gral. Marcelino García Barragán,
            1910, Atlas, Guadalajara, Jalisco, México. y portal de internet{" "}
            <a href="https://gordelicias.com.mx">https://gordelicias.com.mx</a>,
            es el responsable del uso y protección de sus datos personales, y al
            respecto le informamos lo siguiente:
          </p>
          <p className="subtitle">
            ¿Para qué fines utilizaremos sus datos personales?
          </p>
          <p>
            Los datos personales que recabamos de usted, los utilizaremos para
            las siguientes finalidades que son necesarias para el servicio que
            solicita:
          </p>
          <p>
            Respuesta a mensajes del formulario de contacto, Prestación de
            cualquier servicio solicitado
          </p>

          <p className="subtitle">
            ¿Qué datos personales utilizaremos para estos fines?
          </p>
          <p>
            Para llevar a cabo las finalidades descritas en el presente aviso de
            privacidad, utilizaremos los siguientes datos personales:
          </p>
          <p>
            Datos de identificación y contacto, Datos laborales, Datos
            académicos
          </p>

          <p className="subtitle">
            ¿Cómo puede acceder, rectificar o cancelar sus datos personales, u
            oponerse a su uso o ejercer la revocación de consentimiento?
          </p>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted,
            para qué los utilizamos y las condiciones del uso que les damos
            (Acceso). Asimismo, es su derecho solicitar la corrección de su
            información personal en caso de que esté desactualizada, sea
            inexacta o incompleta (Rectificación); que la eliminemos de nuestros
            registros o bases de datos cuando considere que la misma no está
            siendo utilizada adecuadamente (Cancelación); así como oponerse al
            uso de sus datos personales para fines específicos (Oposición).
            Estos derechos se conocen como derechos ARCO.
          </p>
          <p>
            Para el ejercicio de cualquiera de los derechos ARCO, debe enviar
            una petición vía correo electrónico a{" "}
            <a href="mailto:contacto@gordelicias.com.mx">
              contacto@gordelicias.com.mx
            </a>{" "}
            y deberá contener:
          </p>
          <p>Nombre completo del titular.</p>
          <p>Domicilio.</p>
          <p>Teléfono.</p>
          <p>Correo electrónico usado en este sitio web.</p>
          <p>Copia de una identificación oficial adjunta.</p>
          <p>Asunto «Derechos ARCO»</p>
          <p>
            Descripción el objeto del escrito, los cuales pueden ser de manera
            enunciativa más no limitativa los siguientes: Revocación del
            consentimiento para tratar sus datos personales; y/o Notificación
            del uso indebido del tratamiento de sus datos personales; y/o
            Ejercitar sus Derechos ARCO, con una descripción clara y precisa de
            los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso
            de Rectificación de datos personales, deberá indicar la modificación
            exacta y anexar la documentación soporte; es importante en caso de
            revocación del consentimiento, que tenga en cuenta que no en todos
            los casos podremos atender su solicitud o concluir el uso de forma
            inmediata, ya que es posible que por alguna obligación legal
            requiramos seguir tratando sus datos personales. Asimismo, usted
            deberá considerar que para ciertos fines, la revocación de su
            consentimiento implicará que no le podamos seguir prestando el
            servicio que nos solicitó, o la conclusión de su relación con
            nosotros.
          </p>

          <p className="subtitle">
            ¿En cuántos días le daremos respuesta a su solicitud?
          </p>
          <p>10 días</p>

          <p className="subtitle">
            d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?
          </p>
          <p>
            <a href="mailto:contacto@gordelicias.com.mx">
              contacto@gordelicias.com.mx
            </a>
          </p>

          <p className="subtitle">
            El uso de tecnologías de rastreo en nuestro portal de internet
          </p>
          <p>
            Le informamos que en nuestra página de internet utilizamos cookies,
            web beacons u otras tecnologías, a través de las cuales es posible
            monitorear su comportamiento como usuario de internet, así como
            brindarle un mejor servicio y experiencia al navegar en nuestra
            página. Los datos personales que obtenemos de estas tecnologías de
            rastreo son los siguientes:
          </p>
          <ul className="bullet">
            <li>
              Identificadores, nombre de usuario y contraseñas de sesión, Región
              en la que se encuentra el usuario, Páginas web visitadas por un
              usuario, Búsquedas realizadas por un usuario, Publicidad revisada
              por un usuario, Listas y hábitos de consumo en páginas de compras
            </li>
            <li>
              Estas cookies, web beacons y otras tecnologías pueden ser
              deshabilitadas. Para conocer cómo hacerlo, consulte el menú de
              ayuda de su navegador. Tenga en cuenta que, en caso de desactivar
              las cookies, es posible que no pueda acceder a ciertas funciones
              personalizadas en nuestros sitio web.
            </li>
          </ul>


          <p className="subtitle">
            ¿Cómo puede conocer los cambios en este aviso de privacidad?
          </p>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones, cambios
            o actualizaciones derivadas de nuevos requerimientos legales; de
            nuestras propias necesidades por los productos o servicios que
            ofrecemos; de nuestras prácticas de privacidad; de cambios en
            nuestro modelo de negocio, o por otras causas. Nos comprometemos a
            mantener actualizado este aviso de privacidad sobre los cambios que
            pueda sufrir y siempre podrá consultar las actualizaciones que
            existan en el sitio web{" "}
            <a href="https://gordelicias.com.mx">https://gordelicias.com.mx</a>.
          </p>
          <p>Última actualización de este aviso de privacidad: 04/10/2022</p>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default AvisoPrivacidad;
