import { promisifyAll } from 'miniprogram-api-promise'
const wxp = wx.p = {}
promisifyAll(wx, wxp)

App({
  onLaunch() {
  },
  globalData: {
    windowHeight:0,
    windowWidth:0,
    statusBarHeight:20,
    screenHeight:0,
    bottomLift: 0,
    tabbarHeight: 0,
    //状态栏+胶囊栏
    topLift: 0,
    userInfo: null,
    longitude:0.0,
    latitude:0.0,
    ratio:2,
    system:'',
    openId:'',
    version: '1.1.7-202210281414',
    SDKVersion: '',
    network: '',

  },
  onLaunch() {
    wx.getNetworkType({
      success: res => {
        this.globalData.network = res.networkType
      },
      fail: () => {},
      complete: () => {}
    })

    const { miniProgram } = wx.getAccountInfoSync();
    this.globalData.version = miniProgram.version;



    //获取当前设备信息
    wx.getSystemInfo({
      success: res => {

        this.globalData.screenHeight = res.screenHeight;
        this.globalData.statusBarHeight = res.statusBarHeight;
        this.globalData.commonTitleHeight = res.statusBarHeight + 46;
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.windowWidth = res.windowWidth;
        this.globalData.ratio = res.devicePixelRatio
        this.globalData.bottomLift = res.screenHeight - res.safeArea.bottom;
        this.globalData.tabbarHeight = res.screenHeight - res.windowHeight;
        this.globalData.topLift = res.screenHeight - res.windowHeight;
        this.globalData.system = res.system;
        this.globalData.SDKVersion = res.SDKVersion;
        this.globalData.model = res.model;
      },
      fail(err) {

      }
    })
    const user = wx.getStorageSync('user') || {}
    this.globalData.userInfo = user


  }
})
// {订购临时存
//   "pagePath": "pages/book/home/home",
//   "text": "订购",
//   "iconPath": "https://mobile-app-1306106726.cos.ap-shanghai.myqcloud.com/mini-pro/images/ic_book_normal.png",
//   "selectedIconPath": "https://mobile-app-1306106726.cos.ap-shanghai.myqcloud.com/mini-pro/images/ic_book_selected.png"
// },
