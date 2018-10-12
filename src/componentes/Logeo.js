import React ,{Component} from 'react';

class Logeo extends Component{
render(){
    return(
        <section className="login-block">
         <div className="container">
        <div className="row">
         <div className="col-md-4 login-sec">
             <h2 className="text-center">Logueate Ahora</h2>
          <form className="login-form">
          <div className="form-group">
          <label className="text-uppercase">Usuario :</label>
          <input type="text" className="form-control" placeholder="Ingrese su usuario"/>
          </div>
          <div className="form-group">
          <label className="text-uppercase">Contraseña :</label>
          <input type="password" className="form-control" placeholder="Ingrese su contraseña"/>
          </div>
              <button type="submit" className="btn btn-login float-right">Ingresar</button>
          </form>
         </div>
          <div className="col-md-8 banner-sec">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                          <img className="d-block img-fluid"
                               src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide"/>
                          <div className="carousel-caption d-none d-md-block">
                              <div className="banner-text">
                                  <h2>Reserva De Citas Médicas</h2>
                                  <p>Reserva tu cita ahora mismo, desde la comodidad de tu casa , con unos simples pasos ,
                                    olvidate de las colas , de tanto esperar , reserva tu cita web o via movil ... !
                                  </p>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
         </div>
        </section>
    );
}
}
export default Logeo;