// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.2.110/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var Musterkoffer_klein_HMI;
        (function (Musterkoffer_klein_HMI) {
            function ResolutionChange() {

                // Definieren Sie die maximale Breite und Höhe für ein Smartphone
                const maxSmartphoneWidth = 600; // z.B. 600px als Grenze
                const maxSmartphoneHeight = 900; // z.B. 900px als Grenze

                // Überprüfen Sie die aktuelle Bildschirmbreite und -höhe
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;
                const pixelDensity = window.devicePixelRatio;

                // Geben Sie TRUE zurück, wenn die Bildschirmauflösung innerhalb der Grenzen liegt
                if (screenWidth/pixelDensity <= maxSmartphoneWidth && screenHeight/pixelDensity <= maxSmartphoneHeight) {
                    return true;
                }

            }
            Musterkoffer_klein_HMI.ResolutionChange = ResolutionChange;
        })(Musterkoffer_klein_HMI = Functions.Musterkoffer_klein_HMI || (Functions.Musterkoffer_klein_HMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ResolutionChange', 'TcHmi.Functions.Musterkoffer_klein_HMI', TcHmi.Functions.Musterkoffer_klein_HMI.ResolutionChange);
