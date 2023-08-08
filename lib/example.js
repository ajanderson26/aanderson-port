map.addControl(new customLayerControl({}, {'Custom Layer':customLayer},{}));

var customLayerControl = L.Control.Layer.extend({
    _onInputClick: function(Layer, name){ 
        // This is just like calling super() if this confuses you!
        L.Control.Layers.prototype._onInputClick.call(this,Layer,name);
        // Do stuff
      }
  });