<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estilo by Nerea | Inicio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
<meta http-equiv="refresh" content="0; url=https://anamorenaherrera06-blip.github.io/ByNerea/">

</head>
<body>

  <header class="hero">
    <div class="overlay">
      
      <nav class="navbar navbar-expand-md w-100 p-4"> 
        <div class="container-fluid">
          
          <h1 class="logo navbar-brand m-0">Estilo by Nerea</h1>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="mainMenu">
            <ul class="navbar-nav menu">
              <li class="nav-item"><a href="inicio.html" class="nav-link text-white active">Inicio</a></li>
              <li class="nav-item"><a href="galeria.html" class="nav-link text-white">Galería</a></li>
              <li class="nav-item"><a href="tienda.html" class="nav-link text-white">Shop</a></li>
              <li class="nav-item"><a href="sobre-mi.html" class="nav-link text-white">Sobre Nosotros</a></li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div class="hero-text text-center mt-5">
        <h2>Explorá Nuestra Última Colección</h2>
        <button type="button" class="btn btn-rosa mt-3" data-bs-toggle="modal" data-bs-target="#modalOferta">
            ¡Quiero mi descuento ahora!
        </button>
      </div>
    </div>
  </header>

  <main class="container my-5">
    <section class="row text-center">
        <div class="col-12">
            <h3 class="display-6 mb-4 logo">La Moda Eres Tú</h3>
            <p class="lead">Descubre piezas atemporales y las últimas tendencias seleccionadas por Nerea.</p>
        </div>
    </section>

    <section class="row mt-5">
        <div class="col-md-4 mb-4">
            <div class="card product-card">
                <img src="sale.jpeg" class="card-img-top" alt="Look Elegante">
                <div class="card-body">
                    <h5 class="card-title">Estilo Elegante</h5>
                    <p class="card-text">Clásicos modernos para toda ocasión.</p>
                    <a href="galeria.html" class="btn btn-rosa btn-sm">Ver Galería</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-4">
            <div class="card product-card">
                <img src="ropacasual.jpeg" class="card-img-top" alt="Look Casual">
                <div class="card-body">
                    <h5 class="card-title">Casual y Cómodo</h5>
                    <p class="card-text">Prendas versátiles para tu día a día.</p>
                    <a href="tienda.html" class="btn btn-rosa btn-sm">Ir a Comprar</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-4">
            <div class="card product-card">
                <img src="bonito.jpeg" class="card-img-top" alt="Tendencias">
                <div class="card-body">
                    <h5 class="card-title">Nuevas Tendencias</h5>
                    <p class="card-text">Lo último de la moda directo a tu armario.</p>
                    <button type="button" class="btn btn-rosa btn-sm" data-bs-toggle="modal" data-bs-target="#modalOferta">¡Oferta!</button>
                </div>
            </div>
        </div>
    </section>
  </main>

  <div class="modal fade" id="modalOferta" tabindex="-1" aria-labelledby="modalOfertaLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="modalOfertaLabel">¡20% de Descuento Exclusivo!</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <p>Regístrate y obtén un código de descuento para tu primera compra.</p>
                  <form>
                      <input type="email" class="form-control" placeholder="Ingresa tu email">
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <a href="tienda.html" class="btn btn-rosa">Ir a la Tienda</a>
              </div>
          </div>
      </div>
  </div>


  <footer class="footer mt-5">
    <p>© 2025 Estilo by Nerea — Todos los derechos reservados</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
