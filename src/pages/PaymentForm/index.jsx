const PaymentForm = () => {
  return (
    <main className="custom-container mt-[100px]">
      <h1 className="text-center mb-10">
       Diligencia el siguiente formulario para continuar con el pago
      </h1>
      <form noValidate className="grid gap-8">
        <div className="input-container">
          <label htmlFor="dni">Cédula</label>
          <input placeholder="Número de cedula" type="text" name="dni" id="dni" />
        </div>
        <div className="input-container">
          <label htmlFor="name">Nombre</label>
          <input placeholder="Tu nombre" type="text" name="name" id="name" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Correo</label>
          <input placeholder="Tu correo personal" type="email" name="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Teléfono</label>
          <input placeholder="Tu teléfono" type="tel" name="phone" id="phone" />
        </div>
        <button className="w-full uppercase font-extrabold text-[#EED202]">
          Continuar con el pago
        </button>
      </form>
    </main>
  )
}

export default PaymentForm
