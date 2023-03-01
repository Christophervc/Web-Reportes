import React from 'react'
function Footer() {
  return (

    <footer class="text-center text-lg-start bg-light text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Interactúa con nosotros mediante nuestras redes sociales:</span>
        </div>
        <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">

          <div class="row mt-3">

            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>World Wide Importers
              </h6>
              <p className='text-center'>
                Empresa importadora y distribuidora mayorista ubicada en la bahía de San Francisco.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 class="text-uppercase fw-bold mb-4">
                Productos
              </h6>
              <p>
                <a href="#!" class="text-reset">Cintas</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Muebles</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Electrónicos</a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 class="text-uppercase fw-bold mb-4">
                Enlaces
              </h6>
              <p>
                <a href="#!" class="text-reset">Reportes</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Acerca de</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Ayuda</a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
              <p><i class="fas fa-home me-3"></i> San Francisco, NY 10012, US</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                cristopher@wwi.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>

          </div>

        </div>
      </section>

      <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        <span className='pe-2'>© 2023 Copyright:</span>
        <a class="text-reset fw-bold" href="#">World Wide Importers</a>
      </div>

    </footer>

  )
}

export default Footer