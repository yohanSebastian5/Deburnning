export default function PageLogin() {
  return (
    <section className="principal_container">
        <article className="secundary_container modifierOne mod">
            <h1>Deburnning</h1>
            <img src="" alt="logo de la aplicacion" />
        </article>

        <article className="secundary_container modifierTwo mod">
            <h3>Iniciar sesion</h3>
            <form action="" className="form-content">
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="Ingresar" id="submit" />
            </form>
        </article>

    </section>
  )
}
