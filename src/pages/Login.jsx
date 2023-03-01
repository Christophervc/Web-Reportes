import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Login() {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const postUser = async (data) => {
    try {
      let response = await fetch('https://localhost:7170/api/users/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      let json = await response.json();
      console.log(json);
      if (!response.ok) {
        throw { status: response.status, statusText: response.statusText }
      }
      setIsAuth(true);
    } catch (err) {
      let message = err.statusText || 'Usuario y contraseña incorrecta';
      toast.error('Usuario y contraseña incorrectas');
      //alert(message);
      console.log(message);
    }
  }



  if (isAuth) {
    navigate("/reportList");
  }


  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">

              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
                <span className="h1 fw-bold mb-0">World Wide Importers</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                <form style={{ width: "23rem" }}>

                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Log in</h3>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">Usuario</label>
                    <input type="email" id="form2Example18" className="form-control form-control-lg"
                      onChange={(e) => setUser(e.target.value)}
                    />

                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example28">Contraseña</label>
                    <input type="password" id="form2Example28" className="form-control form-control-lg"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                  </div>

                  <div className="pt-1 mb-4 d-grid">
                    <button className="btn btn-primary btn-lg" type="button" onClick={() => postUser({
                      user: user,
                      password: password
                    })}>Login</button>
                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Olvidaste tu contraseña?</a></p>
                  <p>¿No tienes una cuenta? <a href="/register" className="link-info">Regístrate aquí</a></p>

                </form>

              </div>

            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }} />
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

export default Login