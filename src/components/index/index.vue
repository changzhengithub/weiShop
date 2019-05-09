<template>
  <!-- s  首页-->
  <section class="index" ref="index">
    <div class="index-banner">
      <swiper class="banner-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in bannerList" :key="index"><img :src="item.ReduceFile"></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="index-summary">
      <div class="summary-badge"><span>活动促销</span></div>
      <p class="summary-title"><span>{{commodityDetail.GoodsTitle}}</span></p>
      <div class="summary-price">
        <span>￥{{commodityDetail.SalePrice}}</span>
        <!-- <span>已售3581</span> -->
      </div>
    </div>
    <div class="index-service">
      <div class="service-list">
        <div class="list-item">
          <div class="item-icon"><img src="../../assets/image/service.png"></div>
          <span>全国包邮</span>
        </div>
        <div class="list-item">
          <div class="item-icon"><img src="../../assets/image/service.png"></div>
          <span>假一赔三</span>
        </div>
        <div class="list-item">
          <div class="item-icon"><img src="../../assets/image/service.png"></div>
          <span>7天退换货 </span>
        </div>
        <div class="list-item">
          <div class="item-icon"><img src="../../assets/image/service.png"></div>
          <span>货到付款 </span>
        </div>
      </div>
      <div class="service-text"><span>全国包邮·下单不用先掏钱·货到满意后再付款</span></div>
    </div>
    <div class="index-detail">
      <div class="detail-title">
        <div class="title-text"><span>商品详情</span></div>
      </div>
      <ul class="detail-photos">
        <li class="photos-item" v-for="(item, index) in commodityDetail.imgs" :key="index">
          <img :src="item.ReduceFile">
        </li>
      </ul>
      <div class="detail-tip" v-html="commodityDetail.GoodsDesc">
        <!-- <div class="tip-title">
          <span>抢购描述-电话订购请告知客服产品款号</span>
        </div>
        <p class="tip-describe">1.新款色号不做特价活动</p>
        <p class="tip-describe">2.全国包邮，货到付款,7天无理由退换货！</p>
        <p class="tip-describe">3.发现非正品，商家承担来回运费，真正放心购物！</p>
        <p class="tip-describe"><span>电话订购：</span><span>请拨打在线客服座机0551-5565668或18905585656即可订购。</span></p> -->
      </div>
    </div>
    <div class="index-order" ref="order">
      <div class="order-title"><span>订单信息</span></div>
      <div class="order-info">
        <div class="info-img"><img :src="commodityDetail.imgSrc" alt="商品"></div>
        <div class="info-detail">
          <p class="detail-name"><span>【限时活动】</span><span>{{commodityDetail.GoodsTitle}}</span></p>
          <p class="detail-price">￥{{selectPrice ? selectPrice : commodityDetail.SalePrice}}</p>
        </div>
      </div>
      <div class="order-params">
        <div class="params-title"><span>参数</span></div>
        <div class="params-list">
          <div class="list-item" :class="{active: paramsIndex == index}" v-for="(item, index) in shopParams" :key="index" @click="selectParam(index)"><span>{{item}}</span></div>
        </div>
      </div>
      <div class="order-params">
        <div class="params-title"><span>规格</span></div>
        <div class="params-list">
          <div class="list-item" :class="{active: sizeIndex == index}" v-for="(item, index) in specificationList" :key="index" @click="selectSize(index)"><span>{{item}}</span></div>
        </div>
      </div>
      <div class="order-num">
        <div class="num-title"><span>购买数量</span></div>
        <div class="num-switch">
          <div class="switch-cut" @click="cutBuyNum"><span>-</span></div>
          <div class="switch-text"><span>{{buyNum}}</span></div>
          <div class="switch-add" @click="addBuyNum"><span>+</span></div>
        </div>
      </div>
    </div>
    <div class="index-receive">
      <div class="receive-title"><span>收货信息</span></div>
      <div class="receive-list">
        <div class="list-item">
          <div class="item-title"><span>收货人</span></div>
          <div class="item-detail">
            <input type="text" v-model="receiveName" placeholder="请填写姓名">
          </div>
        </div>
        <div class="list-item">
          <div class="item-title"><span>联系方式</span></div>
          <div class="item-detail">
            <input type="number" v-model="receivePhone" placeholder="请填写手机号码">
          </div>
        </div>
        <div class="list-item">
          <div class="item-title"><span>地区</span></div>
          <div class="item-detail">
            <div class="detial-address"  @click="openProvince">
              <div class="address-title" :class="{active: province != '省份'}">{{province}}</div>
            </div>
            <div class="detial-address" @click="openCity">
              <div class="address-title" :class="{active: city != '城市'}">{{city}}</div>
            </div>
            <div class="detial-address" @click="openArea">
              <div class="address-title" :class="{active: area != '区域'}">{{area}}</div>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="item-title"><span>详细地址</span></div>
          <div class="item-detail">
            <input type="text" v-model="receiveAddress" placeholder="请填写详细地址">
          </div>
        </div>
        <div class="list-item">
          <div class="item-title"><span>买家留言</span></div>
          <div class="item-detail">
            <input type="text" v-model="leaveMessage" placeholder="(选填)备注您的要求">
          </div>
        </div>
      </div>
      <div class="receive-empower">
        <div class="empower-select">
          <img src="../../assets/image/select.png">
        </div>
        <div class="empower-text"><span>授权该商家发送与此订单相关的短信通知</span></div>
      </div>
    </div>
    <div class="index-tel">
      <div class="tel-detail">
        <p class="detail-title">合肥市某某有限公司</p>
        <p class="detail-text">电话订购：0551-5565668</p>
      </div>
      <div class="tel-btn">
        <a :href="'tel:' + '0551-5565668'"><img src="../../assets/image/tel.png" alt="tel"></a>
      </div>
    </div>
    <div class="index-buy">
      <div class="but-info" v-if="totalNumShow"><span>货到付款：</span><span>￥{{orderNum}}</span></div>
      <div class="but-right" :class="{active: totalNumShow}" >
        <button :disabled="disabledShow" @click="gotoPage">立即购买</button>
      </div>
    </div>
    <section class="index-modal" v-if="provinceShow || cityShow || areaShow" @click="closeModal">
      <div class="modal-select">
        <ul class="select-list">
          <li class="list-item" v-for="(item, index) in itemList" :key="index" @touchstart="touchStart(index)" @touchmove="touchMove" @touchend="touchEnd" @click="selectItem(item, index)">
            <div class="item-select" :class="{active: selectIndex == index, active2: touchIndex == index}">
              <div class="select"></div>
            </div>
            <div class="select-area"><span>{{item}}</span></div>
          </li>
        </ul>
      </div>
    </section>
  </section>
  <!-- e  首页-->
</template>

<script>
import Toast from '../common/toast/toast.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { provinces as provinceList, cities } from '../../class/address.class.js'
import Http from '../../class/Http.class.js'
import Storage from '../../class/Storage.class.js'
import Check from '../../class/Check.class.js'
export default {
  name: 'IndexComponent',
  data () {
    return {
      swiperOption: {
        loop:true,
        autoplayDisableOnInteraction: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplay : {
          delay:3000
        },
        observer:true,
        speed:300,
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'index-pagination-bullet',
          bulletActiveClass: 'index-pagination-bullet-active'
        }
      },
      userAddress: '',
      receiveName: '',
      receivePhone: '',
      receiveAddress: '',
      leaveMessage: '',
      province: '省份',
      city: '城市',
      area: '区域',
      provinceShow: false,
      cityShow: false,
      areaShow: false,
      addressList: cities,
      provinceList: provinceList,
      cityList: ['城市'],
      areaList: ['区域'],
      paramsIndex: null,
      sizeIndex: null,
      sizeParam: '',
      buyNum: 1,
      orderNum: '',
      telToastShow: false,
      currentTop: 0,
      totalNumShow: false,
      bannerList: [],
      commodityDetail: {},
      commodityModel: [],
      shopParams: [],
      specificationList: [],
      // goodsId: '3228F8B0-1B0C-475D-A6DD-D3C62A570BBB',
      goodsId: '',
      goodsColor: '',
      goodsModel: '',
      shopPrice: '',
      selectPrice: '',
      disabledShow: false,
      itemList: [],
      modalShow: false,
      selectIndex: 0,
      touchIndex: null,
      provinceIndex: null,
      cityIndex: null,
      areaIndex: null,
      scrollH: 0
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    this.init()
  },
  mounted () {
  },
  methods: {
    init () {
      Storage.clear()
      if (window.commodityId) this.goodsId = window.commodityId
      this.getData()
    },
    getData () {
      Http.send({
        url: 'ShopDetail',
        data: {
          goodsId: this.goodsId
        }
      }).success(data => {
        this.disposeData(data)
      }).fail(data => {
        Toast({
          content: data
        })
      })
    },
    disposeData (data) {
      this.bannerList = data.data.banner
      this.commodityDetail = data.data.detail
      this.commodityDetail.imgSrc = this.bannerList[0].ReduceFile
      this.commodityModel = data.data.model
      this.shopParams = this.commodityModel[0].Colors.slice(1, -1).split(',')
      this.specificationList = this.commodityModel[0].Models.slice(1, -1).split(',')
    },
    selectParam (index) {
      if (this.paramsIndex === index) return
      this.paramsIndex = index
      this.goodsColor = this.shopParams[index]
      if (!this.goodsModel) return
      this.getPrice()
    },
    selectSize (index) {
      if (this.sizeIndex === index) return
      this.sizeIndex = index
      this.goodsModel = this.specificationList[index]
      if (!this.goodsColor) return
      this.getPrice()
    },
    getPrice () {
      Http.send({
        url: 'ShopPrice',
        data: {
          goodsId: this.goodsId,
          goodsColor: this.goodsColor,
          goodsModel: this.goodsModel
        }
      }).success(data => {
        if (!data) {
          Toast({
            content: '此商品已售完'
          })
          this.sizeIndex = null
          return
        }
        this.selectPrice = data
        this.orderNum = (this.selectPrice * this.buyNum).toFixed(2)
        this.totalNumShow = true
      }).fail(data => {
        Toast({
          content: data
        })
      })
    },
    cutBuyNum () {
      if (this.buyNum === 1) return
      this.buyNum--
      if (this.selectPrice) this.orderNum = (this.selectPrice * this.buyNum).toFixed(2)
    },
    addBuyNum () {
      this.buyNum++
      if (this.selectPrice) this.orderNum = (this.selectPrice * this.buyNum).toFixed(2)
    },
    telService () {
      this.telToastShow = true
    },
    closeService () {
      this.telToastShow = false
    },
    cancelTel () {
      this.telToastShow = false
    },
    sureTel () {
      this.telToastShow = false
    },
    forbidScroll () {
      this.scrollH = window.scrollY
      this.$refs.index.style.position = 'fixed'
      this.$refs.index.style.top = -this.scrollH + 'px'
    },
    recoverScroll () {
      this.$refs.index.style.position = 'relative'
      this.$refs.index.style.top = ''
      window.scrollTo(0, this.scrollH)
    },
    closeModal () {
      this.recoverScroll()
      this.touchIndex = null
      this.provinceShow = false
      this.cityShow = false
      this.areaShow = false
    },
    touchStart (index) {
      this.touchIndex = index
    },
    touchMove () {
      this.touchIndex = null
    },
    touchEnd () {
      this.touchIndex = null
    },
    selectItem (item, index) {
      this.recoverScroll()
      if (this.provinceShow) this.getProvince(item, index)
      if (this.cityShow) this.getCity(item, index)
      if (this.areaShow) this.getArea(item, index)
    },
    openProvince () {
      this.forbidScroll()
      this.itemList = this.provinceList
      this.selectIndex = this.provinceIndex
      this.provinceShow = true
      this.cityShow = false
      this.areaShow = false
    },
    openCity () {
      this.forbidScroll()
      this.itemList = this.cityList
      this.selectIndex = this.cityIndex
      this.cityShow = true
      this.provinceShow = false
      this.areaShow = false
    },
    openArea () {
      this.forbidScroll()
      this.itemList = this.areaList
      this.selectIndex = this.areaIndex
      this.areaShow = true
      this.provinceShow = false
      this.cityShow = false
    },
    getProvince (province, index) {
      this.provinceShow = false
      if (this.province === province) return
      this.provinceIndex = index
      this.cityIndex = null
      this.areaIndex = null
      this.province = province
      let cityList = []
      for (const key in this.addressList[province]) {
        cityList.push(key)
      }
      this.cityList = cityList
      this.areaList = ['区域']
      this.city = '城市'
      this.area = '区域'
    },
    getCity (city, index) {
      this.cityShow = false
      if (this.city === city) return
      if (city === '城市') return
      this.cityIndex = index
      this.areaIndex = null
      this.city = city
      this.areaList = this.addressList[this.province][city] ? this.addressList[this.province][city] : ['区域']
      this.area = '区域'
    },
    getArea (area, index) {
      this.areaShow = false
      if (area === '区域') return
      this.areaIndex = index
      this.area = area
    },
    gotoPage () {
      if (this.paramsIndex === null || this.sizeIndex === null) {
        this.scroll()
        Toast({
          content: '请选择参数'
        })
        return
      }
      if (!Check.name(this.receiveName)) return
      if (!Check.phone(this.receivePhone)) return
      if (!this.province || this.province === '省份') {
        Toast({
          content: '请输入地址'
        })
        return
      }
      if (!this.city || this.city === '城市') {
        Toast({
          content: '请输入地址'
        })
        return
      }
      if (this.areaList[0] !== '区域' && this.area === '区域') {
        Toast({
          content: '请输入地址'
        })
        return
      }
      if (!this.receiveAddress) {
        Toast({
          content: '请输入详细地址'
        })
        return
      }
      this.userAddress = this.province + this.city + this.area + this.receiveAddress
      this.disabledShow = true
      this.requestOrder()
    },
    requestOrder () {
      Http.send({
        url: 'AddOrder',
        data: {
          goodsId: this.goodsId,
          orderDetail: this.goodsColor + ',' + this.goodsModel,
          userName: this.receiveName,
          userPhone: this.receivePhone,
          userAddr: this.userAddress,
          userMark: this.leaveMessage
        }
      }).success(data => {
        this.disabledShow = false
        Toast({
          content: data.msg
        })
        Storage.commodityInfo = {
          goodTitle: this.commodityDetail.GoodsTitle,
          imgSrc: this.bannerList[0].ReduceFile,
          totalNum: this.orderNum
        }
        this.$router.replace({
          name: 'order'
        })
      }).fail(data => {
        Toast({
          content: data
        })
      })
    },
    scroll () {
      let goalTop = this.$refs.order.offsetTop
      this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
      let direction = 1
      let speed = 15
      let animation = setInterval(() => {
        if (Math.abs(this.currentTop - goalTop) <= 8) {
          clearInterval(animation)
          this.currentTop = goalTop
        } else {
          if (goalTop < this.currentTop) {
            direction = -1
          } else if (goalTop > this.currentTop) {
            direction = 1
          }
          this.currentTop += direction * speed
        }
        document.body.scrollTop = this.currentTop
        document.documentElement.scrollTop = this.currentTop
      }, 3)
    }
  },
  computed: {
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  }
}
</script>

<style lang="sass">
@import "./index.scss";
</style>
