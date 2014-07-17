//    clubman.js 1.0
(function(){
    var global = this
        ,o_ = global._  
        ,Doc = global.document
        ,IE9 = Doc.dispatchEvent
        ,ap = Array.prototype
        ,op = Object.prototype
        ,slice = ap.slice
        ,hasOwn = op.hasOwnProperty
        ,class2type = {
          '[object Boolean]': 'boolean'
          ,'[object Number]': 'number'
          ,'[object String]': 'string'
          ,'[object Function]': 'function'
          ,'[object Array]': 'array'
          ,'[object Date]': 'date'
          ,'[object RegExp]': 'regexp'
          ,'[object Object]': 'object'
          ,'[object Error]': 'error'
        }
        ,oToString = class2type.toString
        ;

    /**
     * 主构造函数
     */		       
    var _ = function(){
       return new _();     
    };
    /**
      * 判断对象是否拥有某属性
      * @param {Object} obj
      * @param {propertyName} proto
      * @return {boolean} 
      */    
    _.hasOwn = function(obj,proto){
       return hasOwn.call(obj,proto);
    }
    /**
     * 耦合对象
     * @param {Object} target 目标
     * @param {Object} source 源
     * @return {Object} target  				
     */		   
    _.mixIn = function(target,source){
      var argu = [].slice.call(arguments)
          ,i=1 //跳过target
          ,key //相同key 不覆盖
          ,cover = typeof argu[argu.length - 1] === 'boolean' ? argu.pop() : true;//是否为布尔值,是则反悔,不是则为默认
          while ((source = argu[i++])){
            for (key in source){ 
                if (_.hasOwn(source, key) && (cover || !(key in target))) {
                    target[key] = source[key];
                }
             }
          }
        return target;                                
    }	 
    /**
     * 核心模块添加
     */   
     _.mixIn(_,{
        //当前版本号    
        version : '1.0'
        //是否为NaN类型
        ,isNaN : function(value){
           return value !== value;
        }
        /**
         * 数组化
         * @param {ArrayLike} iterable 要处理的类数组对象
         * @param {Number} start 可选。根据type 处理起始位置
         * @param {Number} end  可选。根据type 处理结束位置
         * @param {String} type 可选 默认slice ,另外可以使用substring方法
         * @return {Array}
         * miss.js 
         */
        ,makeArray : function(iterable,start,end){
            var arguType = arguments[arguments.length-1];
            if(arguType === 'substring'){
              if(iterable.item){
                   var ret = []
                    ,len = iterable.length
                    ,i,s;
                    start = parseInt(start,10) || 0;
                    end = end == null || this.isNaN( parseInt(end) ) ? len : parseInt(end,10);
                    if(start<0){
                       start = 0;     
                    }
                    if(end>len){
                       end = len;
                    }
                    if(end<0){
                       end = 0;
                    }
                    start > end ? s = end : s = start;
                    for(i = s; i < end; i++){
                      ret[i-s] = iterable[i];
                    }
                  return ret;
              }
            }else{
            if(IE9){
                 return slice.call(iterable,start,end);
              }else{
                 if(iterable.item){
                     var ret = []
                      ,len = iterable.length
                      ,i,s;
                      start = parseInt(start,10) || 0;
                      end = end == null? len : parseInt(end,10);
                      if(start<0){
                         start += len;     
                      }
                      if(end>len){
                         end = len;
                      }
                      if(end<0){
                         end += len;
                      }
                      start > end ? s = end : s = start;
                      for(i = s; i < end; i++){
                        ret[i-s] = iterable[i];
                      }
                    return ret;
                }
             }
          }
        }
      //类型检测jQuery 
      ,type : function(obj){
            if(obj == null){
              return obj + "";
            } 
            return typeof obj === 'object' || obj === 'function' ?
               class2type[ oToString.call(obj) ] || 'object' :
               typeof obj;    
      }
      //冲突处理
      ,noConflict : function(){
         global._ = o_;
         return this; 
      }

   }) 
 





     

 
   
      
  
      /**
       * 添加到公共对象
       */
 
      global._ = global.club = _;						

}).apply(this)
