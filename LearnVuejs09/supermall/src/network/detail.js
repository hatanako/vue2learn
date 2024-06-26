import { request } from "./request";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
      url: '/recommend',
    })
  }

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.realPrice = itemInfo.lowNowPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.score = shopInfo.score
        this.sells = shopInfo.cSells
        this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam {
    constructor(info, rule) {
      // images可能没有值（某些商品有值，某些没有值）
      this.image = info.images ? info.images[0] : ''
      this.infos = info.set
      this.sizes = rule.tables
    }
  }
