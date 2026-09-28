const COZE_PAT_TOKEN = 'pat_vMuDB8Hq7uroqI0bb54NI1sTHnDV8q7SJTCS2IHqlXrdKUFPCJSB5PDhRC0Oso4W';

function initCozeWebChat() {
  if (typeof CozeWebSDK === 'undefined') {
    console.error('CozeWebSDK chưa được tải.');
    return;
  }

  new CozeWebSDK.WebChatClient({
    config: {
      type: 'bot',
      bot_id: '7690525846700769285',
      isIframe: false,
    },
    auth: {
      type: 'token',
      token: COZE_PAT_TOKEN,
      onRefreshToken: async () => COZE_PAT_TOKEN,
    },
    userInfo: {
      id: 'user',
      url: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',
      nickname: 'Tôi',
    },
    ui: {
      base: {
        icon: 'https://sf-coze-web-cdn.coze.com/obj/eden-sg/lm-lgvj/ljhwZthlaukjlkulzlp/coze/chatsdk-logo.png',
        layout: 'pc',
        lang: 'en',
        zIndex: 1000,
      },
      header: {
        isShow: true,
        isNeedClose: true,
      },
      asstBtn: {
        isNeed: true,
      },
      footer: {
        isShow: true,
        expressionText: 'Powered by ... Nhóm high',
      },
      chatBot: {
        title: 'Cute Bot',
        uploadable: false,
        width: 390,
      },
    },
  });
}

// Khởi chạy khi DOM đã sẵn sàng
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCozeWebChat);
} else {
  initCozeWebChat();
}
