import{isParameterTypeInvalid}from"../System/SystemFunctions.js";import{viewManager}from"../System/ViewManager.js";
/**
 * Loads a view partial into the dom.
 * @param url URL of the view file to load
 * @param callback Callback will be called on success or failure
 * @preserve (Part of the public API)
 */export function load(url,callback=null){if(TCHMI_DESIGNER)TcHmi.Log.warn("[Source=Framework, Module=TcHmi.View] Loading an additional view level element in designer context is not allowed and therefore blocked."),TcHmi.Callback.callSafe(callback,null,{error:TcHmi.Errors.E_NOT_ALLOWED});else{if(isParameterTypeInvalid(url,"url",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.View",callback))return;viewManager.loadView(url,callback)}}
/**
 * Returns the current view object.
 * @preserve (Part of the public API)
 */export function get(){return TCHMI_DESIGNER?(TcHmi.Log.warn("[Source=Framework, Module=TcHmi.View] Accessing a view level element is not allowed in designer context and therefore blocked."),null):viewManager.getView()}
/**
 * Sets the view scale mode.
 * @param scaleMode new value
 * @preserve (Part of the public API)
 */export function setScaleMode(scaleMode){TCHMI_DESIGNER?TcHmi.Log.warn("[Source=Framework, Module=TcHmi.View] Accessing a view level element is not allowed in designer context and therefore blocked."):viewManager.setScaleMode(scaleMode)}export function addViewportElement(element,options){let paramInvalid=isParameterTypeInvalid(element,"element",{type:"object",required:"valueNeeded"});return paramInvalid||(paramInvalid=isParameterTypeInvalid(options.name,"options.name",{type:"string",required:"undefinedOk",minStringLength:1}),paramInvalid||("header"!==options.area&&"main"!==options.area&&"footer"!==options.area?{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Invalid parameter for options.area"}:viewManager.addViewportElement(element,options)))}export function removeViewportElement(element){return viewManager.removeViewportElement(element)}export function getViewportElementDimension(area="main"){return"main"!==area&&"footer"!==area&&"header"!==area?(TcHmi.Log.error("[Source=Framework, Module=TcHmi.View] Fetching dimension failed. Support for other areas not implemented."),null):viewManager.getViewportElementDimension(area)}TcHmi.View={load,get,setScaleMode,addViewportElement,removeViewportElement,getViewportElementDimension};