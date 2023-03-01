import React, { useState } from 'react'
import '../css_modules/Register.css';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function Register() {

  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");


  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      let response = await fetch('https://localhost:7170/api/users/register', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      let json = await response.json();
      console.log(json);
      if (!response.ok) {
        throw { status: response.status, statusText: response.statusText }
      }
      setIsRegister(true);
    } catch (err) {
      let message = err.statusText || 'Usuario y contraseña incorrecta';
      toast.error('Sucedió un error, inténtelo denuevo');
      //alert(message);
      console.log(message);
    }
  }



  if (isRegister) {
    toast.success('Registro realizado correctamente');
    navigate("/");
  }

  return (

    <>
      <section className="h-100 bg-primary bgImage">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="border rounded-3 col-8 bg-light text-black d-flex flex-column justify-content-center align-items-center m-4">

              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
                <span className="h1 fw-bold mb-0">World Wide Importers</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">

                <form style={{ width: "23rem" }}>

                  <h3 className="fw-normal mb-3 pb-3 text-center" style={{ letterSpacing: "1px" }}>Regístrate</h3>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">Nombre</label>
                    <input type="text" id="form2Example18" className="form-control form-control-lg"
                      onChange={(e) => setName(e.target.value)}
                    />

                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">Apellidos</label>
                    <input type="text" id="form2Example18" className="form-control form-control-lg"
                      onChange={(e) => setSurname(e.target.value)}
                    />

                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">Usuario</label>
                    <input type="text" id="form2Example18" className="form-control form-control-lg"
                      onChange={(e) => setUser(e.target.value)}
                    />

                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example28">Contraseña</label>
                    <input type="password" id="form2Example28" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />

                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">Email</label>
                    <input type="email" id="form2Example18" className="form-control form-control-lg"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                  </div>

                  <div className="pt-1 mb-4 d-grid">
                    <button className="btn btn-primary btn-lg" type="button" onClick={() => registerUser({
                      name: name,
                      surname: surname,
                      user: user,
                      password: password,
                      email: email
                    })}>Regístrate</button>
                  </div>

                  <p className='text-center'>¿Ya tienes una cuenta? <a href="/" className="link-info">Iniciar Sesión</a></p>

                </form>

              </div>

            </div>
          </div>
        </div>
      </section >
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default Register