const soapReolver = {
    Query: {
        allPuntajes: function (_, __, {dataSources}) {
            //permisos administrador
            return dataSources.SoapAPI.getPuntage();
        },
    }
};

module.exports = soapReolver;