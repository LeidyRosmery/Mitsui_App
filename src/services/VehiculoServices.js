import util from '../util/util'
import utilHttp from '../util/utilHTTP'
import cte from '../support/constant'
import {
  URL_VEHICULO, URL_KILOMETRAJE
} from '../support/parameter'

export default {
  vehiculos: function (cliente,numIdentificacion,sMarca,callback) {
    var request = {
      "oResults": {
        "iIdCliente": cliente,
        "sNumIdentificacion": numIdentificacion,
        "sMarca": sMarca
      }
    };

    // var request ={
    //   "oResults":{
    //     "iIdCliente":1200002702,
    //     "sNumIdentificacion":"20100079501",
    //     "sMarca":"Z01"}
    // }

    utilHttp.requestHttp(URL_VEHICULO, 'post', request, callback);
  },
  kilometraje: function (placa,callback) {
    var request = {
      "oResults": {
        "sPlaca": placa
      }
    };
    utilHttp.requestHttp(URL_KILOMETRAJE, 'post', request, callback);
  }
}
