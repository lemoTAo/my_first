轮播图动态资源获取，容易与Swiper出bug（使用swiper页面必须要有完整的dom结构,如：在资源获取是还没有来的及执行资源返回，执行到new Swiper  ）
1.swiper  引入依赖包（5版本之后的css引入不一样）
2.页面必须要有dom 结构
3.new swiper 
处理bug,目前最完美的解决方法是watch+$nextTick：想监听数据变化，后，循环结束,执行回调，修改数据后，立即 使用这个方法，更新dom 




floor

