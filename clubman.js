void function(global,Doc){
    var o_ = global._
        ,oClub = global.club
        ,op = Object.prototype
        ,hasOwn = op.hasOwnProperty;
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
      ,


   }) 
 





     

 
   
      
  
      /**
       * 添加到公共对象
       */
 
      global._ = global.club = _;						
	
	
	



}(self,self.document)