import Item from './item.js'

class OnlyFresh extends Item {
    constructor(name, sellIn, quality){
      super(name, sellIn, quality)
    }
  
    updateQuality(){
      this.sellIn--;
  
      if (this.sellIn < 0) {
        this.quality = 0
        return
      }
  
      this.quality++;
      
      if (this.sellIn <= 10) {
        this.quality++;
      }
      
      if (this.sellIn <= 5) {
        this.quality++;
      }

      if (this.quality > 50) {
        this.quality = 50
      }
    }
  }

  export default OnlyFresh