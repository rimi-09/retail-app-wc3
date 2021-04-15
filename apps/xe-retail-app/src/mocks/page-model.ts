	import { Item } from '@backbase/foundation-ang/core';

export const pageModel: Item = {
  name: 'xe-retail-app-container',
  properties: {
    src: '/api/portal/static/items/xe-retail-app/index.hbs',
    'render.strategy': 'render-bb-widget-3',
    label: 'Xebia Retail App Container',
    title: 'Xebia Retail App Container',
    thumbnailUrl: '/api/portal/static/items/xe-retail-app/icon.png',
    area: '0',
    order: 0
  },
  children: [
    {
      "name": "bb-panel-container-ang-0",
      "properties": {
        "classId": "PanelContainerComponent",
      },
      "children": [
        {
          "name": "bb-tab-container-ang-0",
          "properties": {
            "classId": "TabContainerComponent",
            "cssClasses": "card p-3",
            "title": "Products",
          },
          "children": [
            {
              name: 'products-widget',
              properties: {
                classId: 'ProductSummaryListWidgetComponent',
                "cssClasses": "card p-3",
                "title": "My Accounts",
                "showIcons": true
              }
            },
            {
              name: 'chat-widget',
              properties: {
                classId: 'ChatbotWidgetComponent',
                "cssClasses": "card p-3",
                "title": "Chat with Us",
              }
            },
            {
              name: 'login-widget',
              properties: {
                classId: 'XeLoginWidgetComponent',
                "cssClasses": "card p-3",
                "title": "XE Login",
              }
            },
          ]
        },
      ]
    },
  ],
};
