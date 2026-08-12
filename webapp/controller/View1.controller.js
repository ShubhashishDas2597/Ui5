sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("product.controller.View1", {
        onInit() {
           // this.getView().byId('idButton').setEnabled(false);

            var oViewModel = new JSONModel({
                inputValue: ""
            });
            this.getView().setModel(oViewModel, "view");
        },
        onpress() {
            var name = this.getView().byId('idName').getValue();
            if (name != undefined) {
                this.getView().byId('idHead').setText(`Hello ${name}`);
                this.getView().byId('idButton').setIcon('sap-icon://arrow-left');
            }

        }
    });
});