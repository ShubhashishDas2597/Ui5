sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatterfile"
], function (UIComponent, History, Controller, JSONModel, formatterfile) {
    "use strict";

    return Controller.extend("product.controller.View2", {
        format: formatterfile,
        onInit: function () {
            var oProdJson = new JSONModel("../model/products.json");
            this.getView().setModel(oProdJson, "Prod");
        },

        onNavBack: function () {
            const sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1", {}, true);
            }
        }
    });
});