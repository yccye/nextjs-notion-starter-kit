import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '0deaeddb8a434574bdb5dbf28f067a18',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '杂乱无章地记事',
  domain: 'https://www.notion.so/wiycy',
  author: 'wiycy',

  // open graph metadata (optional)
  description: 'description',

  // social usernames (optional)
  twitter: '',
  github: 'ycycse',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://gitee.com/wiycy/imagehost/raw/master/img/202212181627103.jpg',
  defaultPageCover: 'https://gitee.com/wiycy/imagehost/raw/master/img/202212181630981.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
//   navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
     {
      title: '首页',
      pageId: '0deaeddb8a434574bdb5dbf28f067a18'
    },{
      title: '文章',
      pageId: '0deaeddb8a434574bdb5dbf28f067a18'
    },{
      title: '关于',
      pageId: '0deaeddb8a434574bdb5dbf28f067a18'
    }
  ]
})
