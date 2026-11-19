const COZE_PAT_TOKEN = 'pat_P4ryfFuYZR0HWAOErGNwwE3d56ESf4tKXMTvhww7inI9tC4v8KKJVxpahbTld1Td';

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
      // Cho phép dùng PAT token trong browser (mặc định SDK chặn vì lý do bảo mật)
      allowPersonalAccessTokenInBrowser: true,
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
