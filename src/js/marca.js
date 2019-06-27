import marcaModel from "../models/footer/citas/marcaModel";
import loginModel from "../models/loginModel";
export default {
  data() {
    return {
      marcas: null,
      opened_welcome: true,
      visible_marcas: false
    }
  },
  methods:
  {
    marca: function (val) {
      this.$router.push({
        name: 'taller', params: { codSap: val }
      });
    },
    hola: function () {
      console.log("HOLA");
    }
  },
  mounted() {
    console.log(window.usuario);
    var self = this;
    marcaModel.listarMarcas(this);
    navigator.splashscreen.hide();


    FCMPlugin.getToken(function (token) {
      //console.log("Token", token);
      if (token) {
        loginModel.setTokenFirebase(token);
      }
    });

//GNM--------

      // cordova.plugins.notification.local.hasPermission(function(granted){
      //   if(granted == true)
      //   {
      //     alert("YA TIENES PERMISO DE NOTIFICAICON PAGE")
      //   }
      //   else
      //   {
      //     cordova.plugins.notification.local.registerPermission(function(granted) {
      //         if(granted == true)
      //         {
      //           alert("REGISTRASTE EL PERMISO DE NOTIFICACION")
      //         }
      //         else
      //         {
      //           alert("QUITASTE EL PERMISO")
      //         }
      //     });
      //   }
      // });

//GNM--------


//
//  FCMPlugin.subscribeToTopic('mitsui');
//
 FCMPlugin.subscribeToTopic('mitsuiDev');

    FCMPlugin.onNotification(function (data) {

       
      if(data.wasTapped){

        //GNM++++++++

        // cordova.plugins.notification.badge.configure({ autoClear: true });
        // cordova.plugins.notification.badge.set(0);
        // if (data.modulo.toUpperCase() === 'GEN') { // GENERICA
         
        //   self.$router.push({ name: 'marca' });
        //   self.titulo_menu = "Citas";
        //   console.log("soy marcas");
        //   self.icon_toolbar = "../statics/images/medidor.svg";
        //   self.icon_selector = "time";
        //   self.$refs.button3.$el.classList.add("marca-activado");
        
        // }else{
          self.$root.$emit('toHomeNotificacion',data);
        // }
        
        //GNM++++++++
      }else{  
          // cordova.plugins.notification.badge.set(2);
          cordova.plugins.notification.badge.configure({ autoClear: true });
        cordova.plugins.notification.badge.set(0);
        if (data.modulo.toUpperCase() === 'GEN') { // GENERICA
          self.$q.dialog({
            preventClose: true,
            title: 'Mitsui',
            message: data.titulo,
            ok: 'Ir',
            cancel: 'Ver más tarde'
          }).then(() => {
            

            
             //self.$root.$emit('toHomeNotificacion',data);
            //footer
            

          }).catch(() => {
  
          });
        }
        
  
        if (data.modulo.toUpperCase() === 'NI') { // NOTICIA INTERNA
          self.$q.dialog({
            preventClose: false,
            title: 'Noticia Mitsui',
            message: data.titulo,
            ok: 'Ir',
            cancel: 'Cancelar'
          }).then(() => {
            self.$root.$emit('toHomeNotificacion',data);
          }).catch(() => {
  
          });
        }
  
        if (data.modulo.toUpperCase() === 'NE') { // NOTICIA EXTERNA
          self.$q.dialog({
            preventClose: true,
            title: 'Noticia Externa',
            message: data.titulo,
            ok: 'Ir',
            cancel: 'Cancelar'
          }).then(() => {
            self.$root.$emit('toHomeNotificacion',data);
          }).catch(() => {
  
          });
        }
  
        if (data.modulo.toUpperCase() === 'EVT') { // EVENTO
  
          self.$q.dialog({
            preventClose: true,
            title: 'Eventos',
            message: data.titulo,
            ok: 'Ir',
            cancel: 'Cancelar'
          }).then(() => {
            self.$root.$emit('toHomeNotificacion',data);
          }).catch(() => {
  
          });
        }
  
        if (data.modulo.toUpperCase() === 'CM') { // CLUB MITSUI
          self.$q.dialog({
            preventClose: true,
            title: 'Club Mitsui',
            message: data.titulo,
            ok: 'Ir',
            cancel: 'Cancelar'
          }).then(() => {
            self.$root.$emit('toHomeNotificacion',data);
            //homeModel.noticia_interna_id(self,data.moduloDetalle);
          }).catch(() => {
  
          });
        }
  
        if (data.modulo.toUpperCase() === 'BEN') { // BENEFICIOS
          self.$q.dialog({
            preventClose: true,
            title: 'Beneficios',
            message: data.titulo,
            ok: 'Ir',
            cancel: 'Cancelar'
          }).then(() => {
            self.$root.$emit('toHomeNotificacion',data);
            //homeModel.noticia_interna_id(self,data.moduloDetalle);
          }).catch(() => {
  
          });
        }
      }  
    });



  }
}
