import React from "react";

const ContactoPage = (props) => {
    return(
        <main className="holder contacto">
            <div>
                <h2>Contanto Rapido</h2>
                <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type="submit" value="Enviar" />
                </p>
                </form>
            </div>
            <p>
                        
                        Otros medios de conctactos
                    </p>
                    <p>
                        Telefono cede Buenos Aires: 011-5524168
                    </p>
                    <p>
                        Telefono Cede Neuquen: 299-5758449
                    </p>
                    <p>
                        Email de consultas: Criptoword@gmail.com
                    </p>
                    <p>
                        Email de ventas: Criptowordventas@gmail.com
                    </p>

        </main>
    );
}
export default ContactoPage;